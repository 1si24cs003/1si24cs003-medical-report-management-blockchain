const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const { decryptBuffer } = require('../utils/cryptoUtils');
const { generateMedicalReportPDF } = require('../utils/pdfGenerator');

const OUTPUT_DIR = path.join(__dirname, '..', 'sample_reports_for_demo');
const UPLOADS_DIR = path.join(__dirname, '..', 'uploads');
const DB_PATH = path.join(__dirname, '..', 'data', 'database.json');

async function exportDemoReports() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const db = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
    const reports = db.reports || [];

    console.log(`Found ${reports.length} reports in database.`);

    let duplicateTestBuffer = null;

    for (let i = 0; i < reports.length; i++) {
        const r = reports[i];
        const cleanTitle = (r.title || 'Report').replace(/[^a-zA-Z0-9_-]/g, '_').slice(0, 35);
        const cleanPatient = (r.patientName || 'Patient').replace(/[^a-zA-Z0-9_-]/g, '_');
        const filename = `${String(i + 1).padStart(2, '0')}_${cleanPatient}_${cleanTitle}.pdf`;
        const destPath = path.join(OUTPUT_DIR, filename);

        const encPath = path.join(UPLOADS_DIR, r.storageReference);
        let pdfBuf = null;

        if (fs.existsSync(encPath)) {
            try {
                const encData = fs.readFileSync(encPath);
                const decData = decryptBuffer(encData);
                if (decData.subarray(0, 4).toString() === '%PDF') {
                    pdfBuf = decData;
                }
            } catch (err) {
                console.warn(`Could not decrypt ${encPath}:`, err.message);
            }
        }

        // If not a PDF or file missing, generate authentic certified PDF
        if (!pdfBuf) {
            console.log(`Generating certified PDF for ${r.reportId}...`);
            pdfBuf = await generateMedicalReportPDF(r, 'http://localhost:3000');
        }

        fs.writeFileSync(destPath, pdfBuf);
        console.log(`Saved: ${filename} (${(pdfBuf.length / 1024).toFixed(1)} KB)`);

        // Save a copy of the glucose report for duplicate testing
        if (r.reportId === 'REP-7A91F2C4' || (!duplicateTestBuffer && r.title.toLowerCase().includes('glucose'))) {
            duplicateTestBuffer = pdfBuf;
        }
    }

    // 1. DUPLICATE TEST FILE (Exact byte-for-byte copy of already anchored report)
    if (duplicateTestBuffer) {
        const dupPath = path.join(OUTPUT_DIR, '00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf');
        fs.writeFileSync(dupPath, duplicateTestBuffer);
        console.log(`Saved Duplicate Test File: 00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf`);
    }

    // 2. BRAND NEW UN-ANCHORED REPORT (For demonstrating live upload & block mining)
    const freshReportMetadata = {
        reportId: 'REP-DEMO-NEW',
        title: 'Complete Blood Count (CBC) & Automated Hemogram Profile',
        patientName: 'John Doe',
        patientPseudonym: 'PT-9901',
        patientId: 'usr_pat_01',
        age: 48,
        gender: 'Male',
        testDate: new Date().toISOString().split('T')[0],
        reportType: 'Hematology / Pathology',
        uploadedBy: 'Alex Smith (Senior Lab Technologist)',
        nodeId: 'NODE-LAB-01',
        blockIndex: 11,
        reportHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
        keywords: ['Hemoglobin', 'Platelet Count', 'WBC', 'RBC', 'Hematocrit'],
        testParameters: [
            { parameter: 'Hemoglobin (Hb)', value: '14.2 g/dL', ref: '13.0 - 17.0', isAbnormal: false, status: 'NORMAL' },
            { parameter: 'Total Leukocyte Count (WBC)', value: '7,400 /uL', ref: '4,000 - 11,000', isAbnormal: false, status: 'NORMAL' },
            { parameter: 'Platelet Count', value: '245,000 /uL', ref: '150,000 - 450,000', isAbnormal: false, status: 'NORMAL' },
            { parameter: 'RBC Count', value: '4.85 mil/uL', ref: '4.50 - 5.50', isAbnormal: false, status: 'NORMAL' },
            { parameter: 'Packed Cell Volume (PCV)', value: '42.8 %', ref: '40.0 - 50.0', isAbnormal: false, status: 'NORMAL' }
        ],
        clinicalImpression: 'Normal hemogram study. Erythrocytes are normocytic and normochromic. Platelet morphology adequate.',
        prescription: 'Routine annual preventive health checkup recommended.',
        doctorRemarks: {
            doctorName: 'Dr. Sarah Rao, MD',
            department: 'Cardiology & General Medicine',
            status: 'Verified & Certified',
            updatedAt: new Date().toISOString().split('T')[0]
        }
    };

    const freshPdf = await generateMedicalReportPDF(freshReportMetadata, 'http://localhost:3000');
    const freshPath = path.join(OUTPUT_DIR, '00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf');
    fs.writeFileSync(freshPath, freshPdf);
    console.log(`Saved Live Upload Demo File: 00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf`);

    // 3. README for the Demo Kit
    const readmeContent = `# 📁 HealthChain Evaluation Demo Reports Kit

These pre-generated medical reports are prepared for your Phase-II evaluation panel demonstration.

## 🎯 Quick Demo Walkthrough:

### Scenario A: Demonstrate Successful Upload & Blockchain Mining
1. In the portal (http://localhost:3000/portal), make sure you are in the **Lab Staff** role (Alex Smith).
2. Go to the **Upload & Anchor** tab.
3. Select Patient: **John Doe (PT-9901)**.
4. Drag and drop: \`00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf\`.
5. Enter Title: "Complete Blood Count (CBC)".
6. Click **"🔒 Encrypt & Anchor to Blockchain"**.
7. Result: The system computes the SHA-256 hash, encrypts the file with AES-256, mines a new block on the ledger, and generates a scannable anti-forgery QR code!

---

### Scenario B: Demonstrate Objective 2 (Duplicate Report Rejection)
1. Still in the **Upload & Anchor** tab under **Lab Staff**.
2. Select Patient: **John Doe (PT-9901)**.
3. Drag and drop: \`00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf\` (or re-upload the same file from Scenario A).
4. Click **"🔒 Encrypt & Anchor to Blockchain"**.
5. Result: The server immediately rejects the upload with:
   \`HTTP 409 CONFLICT: Duplicate Report Detected!\`
   Highlight to the panel: The system prevented storage bloat and verified single-source truth!

---

### Scenario C: Demonstrate QR Anti-Forgery Verification (Feature 7.1)
1. Open the **Medical Records** tab.
2. Find any report and click **"🔍 Verify QR"** -> click **"Open Verification Endpoint"** (/verify.html).
3. Status: **MATCH (Authentic & Verified on Blockchain)**.
4. Click **"⚠️ Simulate File Tampering"** -> Watch status instantly flip to **MISMATCH (Tampering Detected)**!

---

### 📂 File Inventory:
- \`00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf\` -> Un-anchored test file for live upload demonstration
- \`00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf\` -> Identical duplicate file to trigger 409 Conflict
- \`01_John_Doe_Fasting_Blood_Glucose___HbA1c_Di.pdf\` -> Patient John Doe (PT-9901)
- \`02_Meera_Patel_Comprehensive_Lipid_Profile___Ca.pdf\` -> Patient Meera Patel (PT-9902)
- \`03_Robert_Chen_Brain_MRI_Neuro_Imaging___Diffusi.pdf\` -> Patient Robert Chen (PT-9903)
- \`04_Ayesha_Khan_Chest_Digital_Radiography_X_Ray_.pdf\` -> Patient Ayesha Khan (PT-9904)
`;

    fs.writeFileSync(path.join(OUTPUT_DIR, 'README_DEMO_REPORTS.md'), readmeContent);
    console.log('Demo kit successfully generated in sample_reports_for_demo/ !');
}

exportDemoReports().catch(console.error);
