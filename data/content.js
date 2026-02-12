window.TRAINING_DATA = [
    {
        title: "Session 1: The Unified DRC Architecture",
        content: `
            <p>Welcome to Lesson 1. As a Senior Architect, you must understand the four layers of the DRC "Stack". SAP DRC is the unification of the <strong>eDocument Framework</strong> and <strong>Advanced Compliance Reporting (ACR)</strong> into a single, cohesive engine.</p>
            
            <h3 class="text-xl font-bold text-blue-400 mt-6 mb-3">The Architectural Flow</h3>
            <ul class="list-disc ml-6 space-y-2">
                <li><strong>Layer 1: Functional Foundation (eDocument)</strong> - Triggered by FI/SD postings. Manage via <code>EDOC_COCKPIT</code>.</li>
                <li><strong>Layer 2: Logic Engine (SAP AIF)</strong> - Handles XML schema validations and business mapping errors.</li>
                <li><strong>Layer 3: Connectivity (SAP BTP)</strong> - The "Bridge" to government APIs via Cloud Integration (CPI). Handles SSL and OAuth2.</li>
                <li><strong>Layer 4: Government Clearing House</strong> - The final destination (KSeF, SdI, etc.) which sends back a "Reject" or "Success" status.</li>
            </ul>

            <h3 class="text-xl font-bold text-blue-400 mt-6 mb-3">Critical Transaction Codes</h3>
            <div class="bg-slate-800 p-4 rounded-xl font-mono text-sm border border-white/5">
                <span class="text-blue-400">EDOC_COCKPIT</span> - Manage Electronic Documents<br/>
                <span class="text-blue-400">SR_REPORT_ENTITY</span> - Configure Reporting Entities<br/>
                <span class="text-blue-400">/AIF/ERR</span> - Monitor Integration Errors
            </div>
        `
    },
    {
        title: "Session 2: eDocument Framework Mastery",
        content: `
            <p>In this session, we focus on the core configuration within the SAP backend. This determines how documents are converted into electronic formats.</p>
            
            <h3 class="text-xl font-bold text-blue-400 mt-6 mb-3">Master Data for DRC</h3>
            <p>Most transmission errors are caused by poor master data. Ensure the following are maintained correctly for the target country:</p>
            <ul class="list-disc ml-6 space-y-2">
                <li>VAT Registration Number (Business Partner)</li>
                <li>Tax Categorization (Material Master)</li>
                <li>ISO Codes for Country and Currency</li>
            </ul>

            <h3 class="text-xl font-bold text-blue-400 mt-6 mb-3">The "Digital Loop" Lifecycle</h3>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                    <h4 class="font-bold mb-2">1. Creation</h4>
                    <p class="text-sm">Invoice posting creates an entry in the eDocument table (EDocument).</p>
                </div>
                <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                    <h4 class="font-bold mb-2">2. Submission</h4>
                    <p class="text-sm">Manual or automatic trigger to BTP Integration Suite.</p>
                </div>
            </div>
        `
    }
];

window.TOOLKIT_DATA = [
    { tcode: "EDOC_COCKPIT", desc: "The main dashboard for monitoring and submitting electronic documents across all jurisdictions.", icon: "layout" },
    { tcode: "/AIF/CONTENT_EXTRACT", desc: "Technical tool for extracting data mapping from the AIF framework.", icon: "file-cog" },
    { tcode: "SM30 (V_EDO_SUB_TYPE)", desc: "Maintain eDocument types and assign them to accounting document types.", icon: "settings-2" },
    { tcode: "SR_REPORT_ENTITY", desc: "The engine for defining statutory reporting entities and periodicity.", icon: "clipboard-list" },
    { tcode: "STRUST", desc: "Trust Manager for managing SSL certificates required for secure BTP communication.", icon: "shield-check" },
    { tcode: "S_EDO_CERT_REG", desc: "Specific registration for digital signatures used in e-invoicing.", icon: "pen-tool" }
];

window.PROJECT_DATA = [
    {
        name: "InterParking Belgium",
        status: "Post Go-Live",
        role: "Lead DRC Architect",
        location: "Brussels / Remote",
        focus: ["eInvoicing", "BTP Integration", "Peppol"],
        lastUpdate: "Feb 2026"
    }
];

window.PROGRESS_DATA = {
    training: 0,
    certification: 0,
    examTarget: "S4F08 Implementation",
    examDate: "March 2026"
};

window.JOURNAL_DATA = [
    {
        date: "Feb 12, 2026",
        title: "Extracting Business Partner from eDocument Source Key",
        project: "InterParking Belgium",
        content: `
            <p>This entry outlines the technical logic to navigate from the <strong>EDOC_COCKPIT</strong> to the underlying <strong>Business Partner (BP)</strong> using the 18-character Source Key.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">1. The Source Key Structure</h3>
            <p>In FI-based eDocuments, the <code>SOURCE_KEY</code> is a concatenation:</p>
            <ul class="list-disc ml-6 mb-4">
                <li><strong>Company Code</strong>: Chars 1-4</li>
                <li><strong>Document Number</strong>: Chars 5-14</li>
                <li><strong>Fiscal Year</strong>: Chars 15-18</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">2. Technical Linkage Path</h3>
            <div class="bg-slate-800/50 p-4 rounded-xl border border-white/5 mb-4">
                <p class="font-mono text-xs">
                    <span class="text-emerald-400">EDOCUMENT</span> (SOURCE_KEY) <br/>
                    &nbsp;&nbsp;→ <span class="text-emerald-400">BSEG</span> (Account Type KOART = 'D' or 'K') <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;→ <span class="text-emerald-400">CVI_CUST_LINK</span> (or CVI_VEND_LINK) <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <span class="text-emerald-400">BUT000</span> (General BP Data)
                </p>
            </div>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">3. Strategic SQL Lookup</h3>
            <pre class="bg-black/40 p-4 rounded-xl text-xs overflow-x-auto border border-white/5">
SELECT b~partner, b~name_org1
  FROM edocument AS e
  INNER JOIN bseg AS s ON s~bukrs = SUBSTRING(e~source_key, 1, 4)
                      AND s~belnr = SUBSTRING(e~source_key, 5, 10)
                      AND s~gjahr = SUBSTRING(e~source_key, 15, 4)
  INNER JOIN cvi_cust_link AS l ON l~customer = s~kunnr
  INNER JOIN but000 AS b ON b~partner_guid = l~partner_guid
  WHERE e~source_key = '...' 
    AND s~koart = 'D'.</pre>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Validation Tip</h3>
            <p>Always verify the <code>SOURCE_TYPE</code> in table <strong>EDOCUMENT</strong> first. If it is <code>SD_INVOICE</code>, you must use table <strong>VBRK</strong> instead of <strong>BSEG</strong>.</p>
        `
    }
];
