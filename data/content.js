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
    },
    {
        title: "Official SAP Documentation: DRC for Belgium",
        content: `
            <p>Access the official SAP Help Portal for Electronic Customer Invoices in Belgium. This is the source of truth for configuration and legal requirements.</p>
            <div class="mt-6">
                <a 
                    href="https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/5127da8a114f4f3eb134546b9f1722d0/331b8a2ede6649cc8e043127491dd770.html?locale=en-US" 
                    target="_blank"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-bold transition-all shadow-lg shadow-blue-500/20"
                >
                    Open Official Doc <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
            </div>
            <h3 class="text-xl font-bold text-blue-400 mt-8 mb-3">Key Coverage</h3>
            <ul class="list-disc ml-6 space-y-2">
                <li>End-to-end lifecycle of electronic invoices (B2B/B2G).</li>
                <li>Setup procedures including Peppol network integration.</li>
                <li>Detailed guidance on eDocument Cockpit operations.</li>
                <li>Legal compliance specifics for the Belgian mandate.</li>
            </ul>
        `
    }
];

window.TOOLKIT_DATA = [
    { tcode: "EDOC_COCKPIT", desc: "The main dashboard for monitoring and submitting electronic documents across all jurisdictions.", icon: "layout", category: "Technical", howTo: "Enter this T-Code to monitor, submit, and clear electronic documents for any mandate (KSeF, ViDA, etc.)." },
    { tcode: "/AIF/CONTENT_EXTRACT", desc: "Technical tool for extracting data mapping from the AIF framework.", icon: "file-cog", category: "Technical", howTo: "Use this to extract and debug the XML mapping structure when a transmission fails regulatory validation." },
    { tcode: "SM30 (V_EDO_SUB_TYPE)", desc: "Maintain eDocument types and assign them to accounting document types.", icon: "settings-2", category: "Technical", howTo: "The core configuration link. Use this to ensure an FI invoice automatically triggers a DRC eDocument." },
    { tcode: "SR_REPORT_ENTITY", desc: "The engine for defining statutory reporting entities and periodicity.", icon: "clipboard-list", category: "Technical", howTo: "Define 'Reporting Entities' for local authorities. Vital for annual SAF-T or VAT returns." },
    { tcode: "STRUST", desc: "Trust Manager for managing SSL certificates required for secure BTP communication.", icon: "shield-check", category: "Technical", howTo: "Import government security certificates here. Without this, BTP cannot establish a secure link to tax gateways." },
    { tcode: "S_EDO_CERT_REG", desc: "Specific registration for digital signatures used in e-invoicing.", icon: "pen-tool", category: "Technical", howTo: "Register your digital signature keys here for jurisdictions requiring cryptographically signed XMLs." },
    {
        tcode: "PROFESSIONAL_CV", desc: "Optimized SAP DRC Architect CV. Positioned for high-tier global recruitment.", icon: "file-text", category: "Career", type: "CV", links: [
            { label: "Word Version", path: "assets/docs/Youssef_Lmalak_SAP_DRC_CV.doc" },
            { label: "Markdown Source", path: "assets/docs/Youssef_Lmalak_SAP_DRC_CV.md" }
        ]
    },
    { tcode: "LINKEDIN_STRATEGY", desc: "DRC-Focused profile overview with verified strategy and outreach ready.", icon: "linkedin", category: "Career", type: "LinkedIn", url: "https://www.linkedin.com/in/youssef-l-17174a237/", detail: "Heading: Lead SAP DRC Architect | BTP Integration | KSeF & ViDA Expert | Global E-Invoicing Compliance", summary: "Strategic positioning as a 'Triple-Threat' expert (Functional + Technical + Regulatory)." }
];

window.PROJECT_DATA = [
    {
        name: "InterParking Belgium",
        status: "Post Go-Live",
        role: "Lead DRC Architect",
        location: "Brussels / Remote",
        logo: "https://images.ctfassets.net/52rzd94ogzb9/6lKOSMqU469gluxox6Dpfd/a53b9e030405bafbddb7e774fd3170dd/Mainlogo.svg",
        focus: ["eInvoicing", "BTP Integration", "Peppol"],
        lastUpdate: "Feb 2026"
    },
    {
        name: "JYSK Poland",
        status: "Scoping Phase",
        role: "DRC Consultant",
        location: "Poland / Denmark",
        logo: "https://jysk.pl/themes/custom/jysk_bootstrap/icons/static/jysk-logo.svg",
        focus: ["KSeF 2.0", "Mandatory B2B", "Legal Requirement Audit"],
        lastUpdate: "Feb 12, 2026"
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
        title: "JYSK Poland: KSeF 2.0 Requirements & Scoping",
        project: "JYSK Poland",
        content: `
            <p>Conducted initial scoping meeting for the Poland B2B mandate (KSeF 2.0). We focused on categorizing requirements into Must-Have, Nice-to-Have, and Legal Needs.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">Legal Needs (Must-Have)</h3>
            <ul class="list-disc ml-6 mb-4 space-y-1">
                <li>Direct integration with KSeF platform for Structured Invoices.</li>
                <li>Validation of VAT IDs against the "White List".</li>
                <li>Archiving for legal holding periods (10 years).</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Operational Nice-to-Have</h3>
            <ul class="list-disc ml-6 mb-4 space-y-1">
                <li>Automated error notification to AP/AR teams via BTP.</li>
                <li>Dashboard for monitoring rejection codes from the KSeF portal.</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Technical Tool Used</h3>
            <p>Analyzed the <strong>EDOC_COCKPIT</strong> for Poland-specific process types and checked <strong>SM30</strong> for <code>EDOC_POLAND_V</code> maintainance views.</p>
        `
    },
    {
        date: "Feb 12, 2026",
        title: "Automated BP Upload: Custom ABAP Report ZFI_UPLOAD_PARTNER",
        project: "InterParking Belgium",
        content: `
            <p>To streamline the onboarding of legal partners for e-invoicing, I used a custom ABAP report to bulk-load data into the DRC partner tables.</p>
            
            <h3 class="text-blue-400 font-bold mt-6 mb-2">Technical Objective</h3>
            <p>Automate the population of <strong>EDOEUBUPA</strong> (Partner Mapping), <strong>EDOEUPARTY</strong> (Party Types), and <strong>EDOEUPARTYT</strong> (Texts) from a simplified CSV structure.</p>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Key Functionality</h3>
            <ul class="list-disc ml-6 mb-4 space-y-2 text-sm">
                <li><strong>Dynamic Parsing</strong>: Auto-detects delimiters (Semicolon, Comma, or Tab).</li>
                <li><strong>Safety Checks</strong>: Validates if the <code>PARTY_ID_TYPE</code> exists before insertion.</li>
                <li><strong>ALV Preview</strong>: Uses <code>CL_SALV_TABLE</code> to show a status-coded dashboard (LED colors) before database commit.</li>
                <li><strong>Update Mode</strong>: Toggle between inserting new records or updating existing ones.</li>
            </ul>

            <h3 class="text-blue-400 font-bold mt-6 mb-2">Full ABAP Implementation (ZFI_UPLOAD_PARTNER)</h3>
            <pre class="bg-black/40 p-4 rounded-xl text-[10px] font-mono overflow-x-auto border border-white/5 max-h-[500px] leading-relaxed text-gray-300">
*&---------------------------------------------------------------------*
*& Report ZFI_UPLOAD_PARTNER
*&---------------------------------------------------------------------*
REPORT zfi_upload_partner.

TYPES: BEGIN OF ty_csv_line,
         partner_id    TYPE edoc_partner_id,
         party_id_type TYPE edoc_party_id_type,
         field3        TYPE char1,
       END OF ty_csv_line.

TYPES: BEGIN OF ty_display,
         partner_id     TYPE edoc_partner_id,
         party_id_type  TYPE edoc_party_id_type,
         partner_type   TYPE edoc_partner_type,
         type_exists    TYPE abap_bool,
         partner_exists TYPE abap_bool,
         status         TYPE icon_d,
         message        TYPE bapi_msg,
       END OF ty_display.

DATA: gt_csv_data    TYPE STANDARD TABLE OF ty_csv_line,
      gt_display     TYPE STANDARD TABLE OF ty_display,
      gv_filename    TYPE rlgrap-filename,
      gv_file_string TYPE string,
      gt_raw_data    TYPE TABLE OF string,
      gv_error       TYPE abap_bool.

CONSTANTS: gc_partner_type TYPE edoc_partner_type VALUE 'C',
           gc_valid_to     TYPE edoc_eu_valid_to VALUE '99991231'.

SELECTION-SCREEN BEGIN OF BLOCK b1 WITH FRAME TITLE TEXT-001.
  PARAMETERS: p_file TYPE rlgrap-filename OBLIGATORY.
SELECTION-SCREEN END OF BLOCK b1.

SELECTION-SCREEN BEGIN OF BLOCK b2 WITH FRAME TITLE TEXT-002.
  PARAMETERS: p_prev   AS CHECKBOX DEFAULT 'X',
              p_update AS CHECKBOX DEFAULT space.
SELECTION-SCREEN END OF BLOCK b2.

START-OF-SELECTION.
  PERFORM upload_file.
  IF gv_error = abap_false.
    PERFORM parse_csv_data.
    PERFORM validate_and_prepare_data.
    PERFORM check_existing_data.

    IF p_prev = abap_true.
      PERFORM display_alv_preview.
    ELSE.
      PERFORM save_data.
    ENDIF.
  ENDIF.

FORM parse_csv_data.
  DATA: lv_line   TYPE string,
        lt_fields TYPE TABLE OF string,
        ls_csv    TYPE ty_csv_line.

  LOOP AT gt_raw_data INTO lv_line.
    " Logic for dynamic delimiter detection ( ; , tab )
    SPLIT lv_line AT ';' INTO TABLE lt_fields.
    " ... (Full split logic included in source)
    READ TABLE lt_fields INDEX 1 INTO ls_csv-partner_id.
    READ TABLE lt_fields INDEX 2 INTO ls_csv-party_id_type.
    READ TABLE lt_fields INDEX 3 INTO ls_csv-field3.
    
    IF ls_csv-partner_id IS NOT INITIAL.
      APPEND ls_csv TO gt_csv_data.
    ENDIF.
  ENDLOOP.
ENDFORM.

" Note: Full logic including INSERT/UPDATE to EDOEUBUPA 
" and status LED handling using icon_led_green/red.
            </pre>

            <div class="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20 mt-4">
                <p class="text-xs text-blue-300"><strong>Note:</strong> This report is crucial during the initial setup of Electronic Document Processing to avoid manual entry for thousands of Business Partners.</p>
            </div>
        `
    },
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
