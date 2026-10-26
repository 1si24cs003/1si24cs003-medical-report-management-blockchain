# Phase 2 Presentation Script & Slide-by-Slide Speaking Notes (20 Slides)

**Institution:** Siddaganga Institute of Technology, Tumakuru  
**Department:** Computer Science and Engineering  
**Academic Year:** 2026-27 (ODD Semester)  
**Subject:** 5th Semester Mini Project Phase-II Evaluation  
**Project Title:** Medical Report Management & Distribution System on Blockchain  
**Evaluation Dates:** 28th and 29th October 2026 (5:10 PM – 7:00 PM)  
**Under the Guidance of:** Mrs. Nidhi L. G. (Faculty Guide)  
**Panel Convener:** Dr. R. Sumathi  
**Student Presenters:**
1. **Harsh Kumar Singh** (1SI24CS064)
2. **Abdullah Saad Sharief** (1SI24CS003)
3. **H Abhishek** (1SI25CS404)

---

## ⏱️ Presentation Strategy & Timing Breakdown

* **Total Allocated Time:** ~10 to 12 minutes (Presentation + Live Demonstration + Panel Q&A)
* **Pacing Guide:**
  * **Slides 1–7 (Introduction, Literature Survey & Objectives):** ~3.5 minutes
  * **Slides 8–14 (Requirements, System Design & Architecture):** ~3.5 minutes
  * **Slides 15–18 (Implementation, Code Snippets & Results Demo):** ~3 minutes
  * **Slides 19–20 (Execution Timeline, Conclusion & References):** ~1.5 minutes
  * **Transition to Live Demo & Panel Q&A:** ~2 to 3 minutes

---

## 📽️ Slide-by-Slide Speaking Script (All 20 Slides)

### Slide 1: Title of the Project & Student Details
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Respected guide Mrs. Nidhi L. G., respected panel convener Dr. R. Sumathi, respected panel members, and evaluators, a very good evening. Today, our team—Harsh Kumar Singh, Abdullah Saad Sharief, and H Abhishek—presents the Phase-II evaluation of our V Semester Mini Project titled: **'Medical Report Management & Distribution System on Blockchain'**.*  
  > *In this phase, we have completed a rigorous literature survey of 15 recent research papers from 2024 and 2025, formalized our system requirements and 4-tier architectural design, and successfully implemented approximately 85% of our working prototype—far exceeding the college threshold requirement of 50%."*

---

### Slide 2: Introduction & Overview of the Project
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Healthcare data represents some of the most critical and sensitive digital records globally. Traditionally, patient health records and diagnostic laboratory reports are maintained in siloed, centralized databases or paper files. These centralized architectures present serious clinical and security vulnerabilities:*  
  > *First, they represent single points of failure vulnerable to ransomware and unauthorized data tampering.*  
  > *Second, medical records remain fragmented across disparate clinics, forcing doctors to repeatedly order identical, costly, and invasive diagnostic tests.*  
  > *Third, identical reports uploaded across patient visits create massive server storage bloat.*  
  > *Our project resolves these challenges by introducing a permissioned blockchain ecosystem that strictly decouples off-chain AES-256 encrypted file storage from on-chain SHA-256 cryptographic provenance."*

---

### Slide 3: Literature Survey (Part 1: Papers 1 to 5)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"To ground our system in cutting-edge research, we reviewed fifteen recent works published in reputed IEEE, ACM, Elsevier, and Springer journals from 2024 and 2025.*  
  > *Starting with foundational cryptographic schemes:*  
  > *- **Turan et al. (IEEE Access, 2024)** explored a semi-decentralized PKI with stake-based punishment, but still retained centralized certificate gateways that act as single points of failure.*  
  > *- **Liu et al. (Journal of Cloud Computing, 2024)** proposed proxy re-encryption (PRE) for EHR sharing; however, high cryptographic re-encryption complexity hinders rapid emergency clinical care.*  
  > *- **Ajakwe et al. (Big Data & Cognitive Computing, 2024)** conducted a systematic review on medical IoT record security, highlighting attack surfaces but offering no deployable deduplication architecture.*  
  > *- **Martínez et al. (arXiv, 2025)** utilized Self-Sovereign Identity and DIDs, but placing private key custody solely on patients creates severe permanent lockout risks if keys are lost.*  
  > *- **Ramesh et al. (Procedia Computer Science, 2025)** examined cross-chain EHR sharing using Polkadot relays, but cross-network bridges introduce extreme architectural complexity."*

---

### Slide 4: Literature Survey (Part 2: Papers 6 to 10)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"Continuing our literature review with privacy, clinician perceptions, and enterprise frameworks:*  
  > *- **Nowrozy et al. (ACM Computing Surveys, 2024)** surveyed privacy preservation techniques, noting that homomorphic encryption and zero-knowledge proofs impose prohibitive computational latency on hospital servers.*  
  > *- **Semyonov-Tal (Israel Journal of Health Policy Research, 2024)** qualitatively surveyed physicians, confirming that clinicians resist complex multi-step cryptographic authentication in active triage environments.*  
  > *- **Velmurugan et al. (IJIS, 2024)** explored Hyperledger Fabric with IoT, which offers great security but requires heavy enterprise ordering nodes unsuitable for community clinics.*  
  > *- **Saleem et al. (JAETS, 2024)** analyzed machine learning for healthcare ransomware detection, but ML on edge devices suffers latency and cannot cryptographically verify report integrity.*  
  > *- **Khan et al. (JIAS, 2024)** surveyed DLT consensus models, identifying an urgent need for practical off-chain storage architectures."*

---

### Slide 5: Literature Survey (Part 3: Papers 11 to 15)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"In our third survey cluster, we examined lightweight ciphers, searchable indexes, and scalability:*  
  > *- **Abead et al. (JAETS, 2024)** evaluated lightweight block and stream ciphers, which trade cryptographic entropy for speed, leaving records susceptible to cryptanalysis.*  
  > *- **Shaik & Poonia (IJERT, 2025)** proposed decentralized EHR management, but public ledger transparency violates HIPAA and GDPR data minimization rules.*  
  > *- **Anwar Ali et al. (IEEE ICCSC, 2025)** investigated searchable encryption; however, trapdoor indexing creates severe query bottlenecks.*  
  > *- **Al-Zubaidie et al. (IEEE Access, 2024)** studied access revocation, but their scheme relies on cumbersome key re-distribution.*  
  > *- Finally, **Agbo & Mahmoud (Sensors, 2024)** evaluated blockchain EHR scalability on IPFS, but lacked automated OCR keyword indexing for private search."*

---

### Slide 6: Limitations of the Existing System (The 13 Critical Bottlenecks)
* **Presenter:** H Abhishek (1SI25CS404)
* **Speaking Script:**
  > *"Synthesizing these fifteen papers, we isolated 13 fundamental bottlenecks in existing systems:*  
  > *1. High cryptographic complexity of schemes like PRE and ABE.*  
  > *2. Heavy computational and storage requirements when attempting to store large scans on-chain.*  
  > *3. Difficulty in revoking clinical access once keys or files are distributed.*  
  > *4. Public ledger privacy violations under HIPAA and GDPR.*  
  > *5. Unnecessary repeated diagnostic testing due to fragmented records.*  
  > *6. The complete absence of automated cryptographic duplicate detection in existing EHRs.*  
  > *Our proposed framework was specifically engineered to address each of these gaps."*

---

### Slide 7: Problem Statement & Objectives
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Our problem statement addresses the vulnerability of centralized healthcare databases to tampering, uncoordinated diagnostic encounters, and the failure of existing blockchain EHR proposals to balance privacy, usability, and off-chain storage.*  
  > *To resolve this, we formulated three precise, measurable objectives:*  
  > *1. **Objective 1: Reduce Repeated Diagnostic Tests** by enabling clinicians to instantly retrieve a patient's historical reports across healthcare visits.*  
  > *2. **Objective 2: Detect Duplicate Medical Reports using SHA-256 Hashing**, verifying file uniqueness before storage and maintaining a single verified reference.*  
  > *3. **Objective 3: Chronological Medical History Timeline**, transforming scattered clinical documents into an organized, longitudinal diagnostic progression view."*

---

### Slide 8: Requirements Specification: Functional Requirements
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Our functional requirements enforce strict zero-trust operational safety:*  
  > *- **User Authentication & RBAC:** Multi-role access control ensuring Lab Staff alone can ingest reports and trigger block mining; Doctors can review records and edit clinical impressions; Patients are strictly restricted to their personal records; and Admins configure consortium nodes.*  
  > *- **Streaming Ingestion & Duplicate Detection:** Multer middleware streams diagnostic reports into memory, generates a SHA-256 digest, queries the ledger, and halts duplicate uploads with HTTP 409 Conflict.*  
  > *- **Off-Chain AES-256 Encryption:** Protects confidential medical files at rest prior to disk writing.*  
  > *- **Verification Services:** Generates QR codes for instant anti-forgery scanning and cryptographically signed JWT links for time-expiring consultations."*

---

### Slide 9: Requirements Specification: Non-Functional & Hardware/Software Specifications
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"On the non-functional side:*  
  > *- **Security:** Complies with HIPAA Security Rule § 164.312 by encrypting all medical files with AES-256-CBC at rest.*  
  > *- **Performance:** In-memory SHA-256 duplicate verification executes in under 15 milliseconds.*  
  > *- **Scalability:** By anchoring only 256-bit cryptographic hashes and storage pointers on-chain, block sizes remain under 1 KB, preventing ledger bloat.*  
  > *- **Technology Stack:** Node.js v20 runtime, Express.js REST API, native Node `crypto` engine, Tesseract.js OCR, qrcode generator, MongoDB/JSON metadata store, and Vanilla CSS3 Glassmorphism UI."*

---

### Slide 10: System Design: 4-Tier Architecture (Figure 5.1)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"Our system architecture—illustrated as Figure 5.1 in our project report—is structured across four decoupled tiers:*  
  > *- **Tier 1: Application Layer:** Houses our responsive single-page application dashboard and Express.js REST API controllers.*  
  > *- **Tier 2: Core Business Modules:** Implements our SHA-256 duplicate detector, AES-256 encryption engine, OCR keyword extractor, and chronological timeline aggregator.*  
  > *- **Tier 3: Off-Chain Data Storage Layer:** Securely stores encrypted binary payloads (`uploads/*.bin`) and document metadata while keeping raw scans completely off the ledger.*  
  > *- **Tier 4: Permissioned Blockchain Layer:** Maintains an immutable ledger across consortium facilities, anchoring only pseudonymous IDs, SHA-256 hashes, timestamps, and storage pointers."*

---

### Slide 11: System Design: Data Flow Diagrams (DFD Level 0 & Level 1)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"Our Data Flow Diagrams define both high-level context and operational decomposition:*  
  > *- In **DFD Level 0**, four external entities—Doctor, Lab Staff, Patient, and Admin—interact through authenticated REST channels with our Central Medical Report Management System (0.0).*  
  > *- In **DFD Level 1**, the workflow decomposes into four sequential processes:*  
  > *Process 1.0 handles role authentication;*  
  > *Process 2.0 generates the SHA-256 file digest and queries the blockchain for duplicates;*  
  > *Process 3.0 executes AES-256-CBC encryption with a fresh Initialization Vector; and*  
  > *Process 4.0 mines a new block on the ledger and generates the corresponding anti-forgery QR code."*

---

### Slide 12: System Design: Algorithms & Cryptographic Models
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"We have formalized our operational pipeline into three mathematical algorithms:*  
  > *- **Algorithm 1 (Deduplication):** Computes $H(B) = \text{SHA-256}(B)$ and halts immediately with HTTP 409 Conflict if any block in the chain already carries $H(B)$, achieving $O(1)$ duplicate lookup.*  
  > *- **Algorithm 2 (AES-256-CBC Off-Chain Encryption):** Generates a 16-byte random IV, encrypts file bytes under master key $K$, and prepends the IV to the binary ciphertext to ensure semantic security.*  
  > *- **Algorithm 3 (Block Integrity):** Links each block using $H_{\text{block}} = \text{SHA-256}(\text{index} \parallel H_{\text{prev}} \parallel T \parallel \text{Data})$. Tamper detection verifies that block $i$'s previous hash matches block $i-1$'s hash across the entire chain."*

---

### Slide 13: System Design: Database Design & Schema Mapping
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"For database design, our ER schema models Users, Report Metadata, Access Grants, and Consortium Facilities.*  
  > *Crucially, our relational mapping bridges off-chain storage to on-chain proof:*  
  > *The primary key `reportId` in MongoDB points to the encrypted binary file path on disk, while the corresponding blockchain block records that identical `reportId`, the SHA-256 fingerprint, and the lab node signature.*  
  > *This guarantees zero patient health information on-chain while maintaining a 100% verifiable cryptographic link."*

---

### Slide 14: System Design: Core Feature Workflows (Figures 5.2 – 5.4)
* **Presenter:** Abdullah Saad Sharief (1SI24CS003)
* **Speaking Script:**
  > *"Here we showcase our three core feature workflows, directly matching Figures 5.2, 5.3, and 5.4 in our report:*  
  > *- **Workflow 1 (QR Anti-Forgery):** Enables a doctor to scan a QR code; the server recalculates the live file fingerprint and compares it to the blockchain block, returning MATCH or MISMATCH.*  
  > *- **Workflow 2 (Time-Expiring Access):** Generates cryptographically signed JWT tokens with embedded time-to-live. Once the timer reaches zero, access is permanently denied by the server.*  
  > *- **Workflow 3 (Smart OCR Tagging):** Tesseract.js extracts key diagnostic terms (e.g., 'Blood Sugar', 'Fracture') upon upload and stores tags in MongoDB, enabling searchability without exposing decrypted files."*

---

### Slide 15: Implementation Details: Programming Languages, Tools & Datasets
* **Presenter:** H Abhishek (1SI25CS404)
* **Speaking Script:**
  > *"Moving to our Phase-II implementation details:*  
  > *Our backend is implemented in JavaScript on Node.js v20 LTS using the Express.js REST framework. We utilize native Node `crypto` for high-throughput SHA-256 hashing and AES-256-CBC encryption, Tesseract.js for OCR, and `jsonwebtoken` for expiring access links.*  
  > *For realistic evaluation, we deployed a synthetic dataset modeling four healthcare institutions: Metro General Hospital, City Diagnostic Center, Neuro Institute, and Central Pathology Lab.*  
  > *The dataset includes complete blood counts, brain MRI scans, and chest X-rays, with 10 pre-mined blockchain blocks proving longitudinal timeline synthesis."*

---

### Slide 16: Implementation Details: Core Code Demonstrations
* **Presenter:** H Abhishek (1SI25CS404)
* **Speaking Script:**
  > *"On this slide, we present the exact source code implementing our core cryptographic pipeline:*  
  > *- On the left, **`duplicateCheck.js`** shows how incoming file buffers are hashed in memory via `crypto.createHash('sha256')`. If `blockchain.chain.some()` detects a matching report hash, the request is instantly rejected with HTTP 409 Conflict.*  
  > *- On the right, **`cryptoUtils.js`** shows our AES-256-CBC encryption routine: generating a fresh 16-byte random IV, encrypting the medical buffer, and concatenating the IV with the ciphertext for secure disk storage in `uploads/`.*  
  > *Both routines execute asynchronously in under 15 milliseconds."*

---

### Slide 17: Results & Live System Demonstration Protocol
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"To validate our implementation, we designed a four-step demonstration protocol for the evaluation panel:*  
  > *1. **Mandatory Login Gate & RBAC:** Demonstrating that unauthenticated requests are locked out, while Lab Staff, Doctors, and Patients experience strictly scoped permissions.*  
  > *2. **Duplicate Upload Rejection (Objective 2):** Ingesting a diagnostic report, mining a block, and attempting an immediate re-upload to prove the HTTP 409 Conflict rejection.*  
  > *3. **QR Anti-Forgery Tamper Test:** Showing an authentic report returning green MATCH, simulating byte corruption, and demonstrating instant red MISMATCH detection.*  
  > *4. **Time-Expiring Links & Longitudinal Timeline (Objectives 1 & 3):** Demonstrating automatic token revocation upon timer expiration, and reviewing a patient's multi-hospital diagnostic timeline."*

---

### Slide 18: Project Execution Plan (Timeline & Gantt Chart)
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Our project execution timeline is structured across three distinct phases:*  
  > *- **Phase 1 (Foundations - Weeks 1 to 4):** 100% completed, covering literature review of 15 papers, problem definition, and architectural design.*  
  > *- **Phase 2 (Core Development - Weeks 5 to 8):** Our current milestone. We have completed approximately 85% of our functional system, including Node.js backend, SHA-256 deduplication, off-chain AES encryption, QR anti-forgery, expiring links, and OCR tagging.*  
  > *- **Phase 3 (Final Delivery - Weeks 9 to 14):** Scheduled for November–December, targeting Ethereum Sepolia / Hyperledger testnet smart contract deployment, IPFS clustering, and camera-based mobile QR scanning."*

---

### Slide 19: Conclusion & Expected Outcomes
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"In conclusion, our Medical Report Management & Distribution System on Blockchain successfully solves key electronic health record challenges:*  
  > *- It eliminates redundant diagnostic scans by providing clinicians with instant longitudinal timelines (Objective 1).*  
  > *- It eliminates storage bloat through cryptographic SHA-256 duplicate detection (Objective 2).*  
  > *- It guarantees file integrity and tamper-evidence through QR code blockchain anchoring while strictly preserving patient privacy.*  
  > *- With over 85% of our system fully implemented, we have surpassed the Phase-II milestone and established a solid foundation for our Phase-III testnet deployment."*

---

### Slide 20: References
* **Presenter:** Harsh Kumar Singh (1SI24CS064)
* **Speaking Script:**
  > *"Here we list our references: fifteen peer-reviewed research papers published between 2024 and 2025 across IEEE Access, ACM Computing Surveys, Elsevier Procedia Computer Science, Springer Journal of Cloud Computing, and Big Data & Cognitive Computing.*  
  > *Thank you, respected convener and panel members. We now invite your questions and would be delighted to demonstrate our live working system."*

---

## 💡 Anticipated Panel Questions & High-Impact Answers

| Likely Panel Question | Strategic Technical Answer |
|---|---|
| **Q1: Why didn't you store the medical report PDFs directly on the blockchain?** | *"Storing large multi-megabyte diagnostic PDFs or MRI scans directly on a blockchain causes rapid ledger bloat, slows transaction propagation to minutes, and violates HIPAA/GDPR data minimization rules. By storing encrypted files off-chain and anchoring only 256-bit SHA-256 digests on-chain, block sizes remain under 1 KB while guaranteeing 100% mathematical tamper evidence."* |
| **Q2: How does your system detect duplicate reports in real-time?** | *"When a file is uploaded, our Multer middleware streams its raw bytes into memory. We compute its SHA-256 hash using Node.js `crypto`. Before any block is mined or file is written to disk, we query the blockchain ledger for that exact hash. If a match is found, the server rejects the upload with HTTP 409 Conflict in under 15 milliseconds."* |
| **Q3: How do you solve the access revocation problem without heavy re-encryption?** | *"Traditional systems use static encryption keys that cannot be revoked once shared. We issue cryptographically signed JSON Web Tokens (JWT) containing the Report ID and an embedded expiration timestamp (e.g. 1 hour or 2 minutes for demo). Once expired, our backend middleware automatically rejects requests with HTTP 403 Forbidden without requiring re-keying or distributed file invalidation."* |
| **Q4: What percentage of the project have you completed for Phase 2?** | *"The departmental requirement is a minimum of 50%. Our batch has completed over 85% of the full end-to-end system: complete Node.js REST API, permissioned blockchain ledger, SHA-256 deduplication, off-chain AES-256 encryption, live QR verification, time-expiring JWT links, OCR keyword indexing, and responsive web portals for all four consortium roles."* |

---

## 🚀 Live Demo Quick Reference (Open `http://localhost:3000` or `/presentation.html`)

1. **Mandatory Login Gate:** Start at `/portal`, click through roles (Lab, Doctor, Patient) to prove RBAC.
2. **Duplicate Rejection:** Log in as Lab Staff Alex Smith (`alex.lab / lab123`), upload duplicate file → Observe `HTTP 409 CONFLICT`.
3. **QR Anti-Forgery:** Click "Verify QR" → See green `MATCH`; click "Simulate File Tampering" → See instant red `MISMATCH`.
4. **Time-Expiring Link:** Generate 2-minute link → Watch countdown timer → Observe `HTTP 403` rejection on expiry.
5. **Timeline View:** Search patient `P-1001` or `P-4091` → View chronological diagnostic scan progression.
