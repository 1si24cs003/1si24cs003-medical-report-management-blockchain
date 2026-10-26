# 📁 HealthChain Evaluation Demo Reports Kit

These pre-generated medical reports are prepared for your Phase-II evaluation panel demonstration.

## 🎯 Quick Demo Walkthrough:

### Scenario A: Demonstrate Successful Upload & Blockchain Mining
1. In the portal (http://localhost:3000/portal), make sure you are in the **Lab Staff** role (Alex Smith).
2. Go to the **Upload & Anchor** tab.
3. Select Patient: **John Doe (PT-9901)**.
4. Drag and drop: `00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf`.
5. Enter Title: "Complete Blood Count (CBC)".
6. Click **"🔒 Encrypt & Anchor to Blockchain"**.
7. Result: The system computes the SHA-256 hash, encrypts the file with AES-256, mines a new block on the ledger, and generates a scannable anti-forgery QR code!

---

### Scenario B: Demonstrate Objective 2 (Duplicate Report Rejection)
1. Still in the **Upload & Anchor** tab under **Lab Staff**.
2. Select Patient: **John Doe (PT-9901)**.
3. Drag and drop: `00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf` (or re-upload the same file from Scenario A).
4. Click **"🔒 Encrypt & Anchor to Blockchain"**.
5. Result: The server immediately rejects the upload with:
   `HTTP 409 CONFLICT: Duplicate Report Detected!`
   Highlight to the panel: The system prevented storage bloat and verified single-source truth!

---

### Scenario C: Demonstrate QR Anti-Forgery Verification (Feature 7.1)
1. Open the **Medical Records** tab.
2. Find any report and click **"🔍 Verify QR"** -> click **"Open Verification Endpoint"** (/verify.html).
3. Status: **MATCH (Authentic & Verified on Blockchain)**.
4. Click **"⚠️ Simulate File Tampering"** -> Watch status instantly flip to **MISMATCH (Tampering Detected)**!

---

### 📂 File Inventory:
- `00_TEST_LIVE_UPLOAD_Complete_Blood_Count.pdf` -> Un-anchored test file for live upload demonstration
- `00_TEST_DUPLICATE_REJECTION_Fasting_Blood_Sugar.pdf` -> Identical duplicate file to trigger 409 Conflict
- `01_John_Doe_Fasting_Blood_Glucose___HbA1c_Di.pdf` -> Patient John Doe (PT-9901)
- `02_Meera_Patel_Comprehensive_Lipid_Profile___Ca.pdf` -> Patient Meera Patel (PT-9902)
- `03_Robert_Chen_Brain_MRI_Neuro_Imaging___Diffusi.pdf` -> Patient Robert Chen (PT-9903)
- `04_Ayesha_Khan_Chest_Digital_Radiography_X_Ray_.pdf` -> Patient Ayesha Khan (PT-9904)
