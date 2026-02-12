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
    training: 45,
    certification: 20,
    examTarget: "S4F08 Implementation",
    examDate: "March 2026"
};
