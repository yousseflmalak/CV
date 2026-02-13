window.TRAINING_DATA = [
    {
        title: "Module 1: Foundations of SAP DRC & Belgian Legal Context",
        content: `
            <div class="space-y-6">
                <p class="text-lg">Welcome to the <strong>Belgian DRC Masterclass</strong>. This module covers the core architectural pillars and the regulatory landscape for Belgium.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-blue-600/10 p-4 rounded-xl border border-blue-500/20">
                        <h4 class="font-bold text-blue-400 mb-2">Legal Mandates</h4>
                        <ul class="text-sm space-y-1">
                            <li>• Peppol for B2G (Live since 2017)</li>
                            <li>• Mandatory B2B e-Invoicing (Upcoming)</li>
                            <li>• Periodic Intervat Declarations</li>
                        </ul>
                    </div>
                    <div class="bg-indigo-600/10 p-4 rounded-xl border border-indigo-500/20">
                        <h4 class="font-bold text-indigo-400 mb-2">System Stack</h4>
                        <ul class="text-sm space-y-1">
                            <li>• SAP S/4HANA Finance/SD</li>
                            <li>• SAP BTP Integration Suite</li>
                            <li>• SAP Peppol Exchange Service</li>
                        </ul>
                    </div>
                </div>
                <h4 class="text-xl font-bold text-white mt-8">Architecture Overview</h4>
                <p class="text-sm">The solution relies on the <strong>eDocument Framework</strong>. Every business transaction (Invoice/Order) triggers an entry in the <code>EDOCUMENT</code> table, which acts as the lifecycle manager for the XML transmission.</p>
            </div>
        `
    },
    {
        title: "Module 2: Master Data & Baseline Configuration",
        content: `
            <div class="space-y-6">
                <p>Before transactions can flow, the foundation must be solid. This module focuses on the critical configuration steps (SSCUI/SPRO).</p>
                <table class="w-full text-left text-sm border-collapse">
                    <thead>
                        <tr class="border-b border-white/10 text-gray-400">
                            <th class="py-2">Requirement</th>
                            <th class="py-2">Technical Key</th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-300">
                        <tr class="border-b border-white/5">
                            <td class="py-3">Company Code Activation</td>
                            <td class="py-3"><code>EDOCOMPANYV</code></td>
                        </tr>
                        <tr class="border-b border-white/5">
                            <td class="py-3">Business Partner GLN</td>
                            <td class="py-3">Field: <code>EAN11</code></td>
                        </tr>
                        <tr class="border-b border-white/5">
                            <td class="py-3">Tax Box Grouping</td>
                            <td class="py-3"><code>V_T007L</code></td>
                        </tr>
                    </tbody>
                </table>
                <div class="bg-yellow-500/10 p-4 rounded-xl border border-yellow-500/20 mt-4">
                    <p class="text-xs text-yellow-500 font-bold uppercase mb-2">Architect Tip</p>
                    <p class="text-sm italic">"In Belgium, the VAT number must include the ISO code (BE) and 10 digits. Missing this in BP master data is the #1 cause of Peppol rejection."</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 3: Electronic Customer Invoices (Outbound)",
        content: `
            <div class="space-y-6">
                <p>Mastering the outbound flow from Billing (SD) and Finance (FI) to the Peppol network.</p>
                <div class="space-y-4">
                    <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                        <h4 class="font-bold text-blue-400">1. Generation (VF01/FB70)</h4>
                        <p class="text-sm">Posting creates the source document. eDocument is auto-created via AIF mapping.</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                        <h4 class="font-bold text-blue-400">2. Cockpit Analysis (EDOC_COCKPIT)</h4>
                        <p class="text-sm">Monitor status. If 'Error in XML', use AIF logs to debug UBL 2.1 syntax.</p>
                    </div>
                    <div class="bg-slate-800/50 p-4 rounded-lg border border-white/5">
                        <h4 class="font-bold text-blue-400">3. BTP Transmission</h4>
                        <p class="text-sm">The BTP Integration Suite handles the secure handshake with the government access point.</p>
                    </div>
                </div>
            </div>
        `
    },
    {
        title: "Module 4: Electronic Supplier Invoices (Inbound)",
        content: `
            <div class="space-y-6">
                <p>Automation of the Accounts Payable (AP) process via Peppol Inbound.</p>
                <ul class="list-disc ml-6 space-y-3">
                    <li><strong>Push Mechanism</strong>: Peppol service pushes XML to S/4HANA BTP.</li>
                    <li><strong>Inbound Specialist App</strong>: Manage incoming files before they hit the ledger.</li>
                    <li><strong>Automated Posting</strong>: Link XML fields (Buyer/Seller Reference) to internal Purchase Orders.</li>
                </ul>
                <div class="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <p class="text-sm font-bold text-emerald-400">Efficiency Gain:</p>
                    <p class="text-xs">Reduces manual entry time by ~85% for Belgian B2B transactions.</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 5: Statutory Reporting I - VAT Return & Intervat",
        content: `
            <div class="space-y-6">
                <p>Belgium requires precise VAT reporting through the <strong>Run Compliance Reports</strong> framework.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="p-4 border border-white/5 rounded-xl bg-slate-900">
                        <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Report Category</h4>
                        <p class="text-sm font-bold">BE_VAT_DCL (Periodic VAT)</p>
                    </div>
                    <div class="p-4 border border-white/5 rounded-xl bg-slate-900">
                        <h4 class="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">T-Code</h4>
                        <p class="text-sm font-bold">START_REPORT_ENGINE</p>
                    </div>
                </div>
                <h4 class="font-bold text-white mt-4">Key Steps:</h4>
                <ol class="list-decimal ml-6 text-sm space-y-2 text-gray-400">
                    <li>Initialize report for the specific company code and period.</li>
                    <li>Run 'Data Collection' to pull GL balances into VAT boxes.</li>
                    <li>Preview and 'Generate' the XML for Intervat submission.</li>
                    <li>Download the signed XML for official upload.</li>
                </ol>
            </div>
        `
    },
    {
        title: "Module 6: Statutory Reporting II - Client Listing & EC Sales List",
        content: `
            <div class="space-y-6">
                <p>Managing the Annual Sales Listing (Client Listing) and the monthly EC Sales List (Intracommunity).</p>
                <div class="bg-blue-600/5 p-6 rounded-2xl border border-blue-500/10">
                    <h5 class="font-bold text-blue-400 mb-2">Annual Sales Listing (Client Listing)</h5>
                    <p class="text-sm leading-relaxed">Required every March. Focuses on domestic B2B customers with turnover > €250. DRC automates the extraction and Intervat XML generation.</p>
                </div>
                <div class="bg-indigo-600/5 p-6 rounded-2xl border border-indigo-500/10">
                    <h5 class="font-bold text-indigo-400 mb-2">EC Sales List</h5>
                    <p class="text-sm leading-relaxed">Reporting Goods (Box 46) and Services (Box 44) supplied to other EU member states. Critical for VIES validation.</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 7: Electronic Procurement (Orders & Incoming Orders)",
        content: `
            <div class="space-y-6">
                <p>Extending DRC beyond invoicing into the <strong>Procure-to-Pay</strong> cycle.</p>
                <div class="flex gap-4">
                    <div class="flex-1 p-4 bg-slate-800/30 rounded-xl border border-white/5">
                        <h4 class="text-xs font-black uppercase text-gray-500 mb-2">Outbound Orders</h4>
                        <p class="text-xs text-gray-300">ME21N creates PO -> EDOC auto-creation -> Peppol transmission to Supplier.</p>
                    </div>
                    <div class="flex-1 p-4 bg-slate-800/30 rounded-xl border border-white/5">
                        <h4 class="text-xs font-black uppercase text-gray-500 mb-2">Inbound Orders</h4>
                        <p class="text-xs text-gray-300">Supplier sends Order -> BTP Integration -> Auto-creation of Sales Order in S/4HANA.</p>
                    </div>
                </div>
                <div class="mt-4 p-4 border border-blue-500/20 bg-blue-500/5 rounded-xl">
                    <p class="text-xs italic text-blue-400">"This is the 'Digital Link' nirvana. No data entry, just electronic validation of the entire supply chain."</p>
                </div>
            </div>
        `
    },
    {
        title: "Module 8: Advanced Scenarios & Troubleshooting",
        content: `
            <div class="space-y-6">
                <h4 class="text-xl font-bold text-white mb-4">Handling the Complex Stuff</h4>
                <div class="space-y-4">
                    <div class="p-4 border-l-4 border-red-500 bg-red-500/5 rounded-r-xl">
                        <h5 class="font-bold text-sm">VAT Units</h5>
                        <p class="text-xs text-gray-400 mt-1">Combining multiple Belgian company codes into a single Intervat declaration. DRC supports 'Group Entities' natively.</p>
                    </div>
                    <div class="p-4 border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-xl">
                        <h5 class="font-bold text-sm">Peppol Rejections</h5>
                        <p class="text-xs text-gray-400 mt-1">If the receiver's access point rejects the XML, verify the GLN and the Schematron validation rules (SCHE).</p>
                    </div>
                    <div class="p-4 border-l-4 border-blue-500 bg-blue-500/5 rounded-r-xl">
                        <h5 class="font-bold text-sm">BTP Certificate Renewal</h5>
                        <p class="text-xs text-gray-400 mt-1">Manage <code>STRUST</code> and BTP keystores to avoid SSL handshake failures during government transmission.</p>
                    </div>
                </div>
            </div>
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
