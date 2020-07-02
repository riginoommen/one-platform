type Handover = {
  handover_id: Number;
  handover_region: String;
  date: String;
  handover_notes: String;
  fts_count: Number;
  unassigned_count: Number;
  worh_count: Number;
  woc_count: Number;
  ace_count: Number;
  irt_count: Number;
  rme_count: Number;
  unassigned_ncq_sev_1_2_count: Number;
  urgent_severity_1_breaches_count: Number;
  manager_id: String;
  manager_first_name: String;
  manager_last_name: String;
  manager_email: String;
  handover_type: string;
  watchlist: String;
  proactive_cases: String;
  sensitive_accounts: String;
};

type Case = {
  case_id: Number;
  handover_id: String;
  case_no: String;
  case_type: String;
  date: String;
  case_notes: String;
  account_name: String;
  sbr_names: String;
  emt_case_type: String;
  emt_case_expectation: String;
  emt_case_ue_ticket_no: String;
  emt_case_ice_ticket_no: String;
  emt_case_trello: String;
  emt_case_notes: String;
};

type CaseShiftTracker = {
  id: Number;
  time: String;
  casenumber: String;
  subject: String;
  severity__c: Number;
  sbr_group__c: String;
  internal_status__c: String;
  status: String;
  normalized_service_level__c: String;
  sbr__c: Number;
  escalate_to_geo__c: String;
  customer_escalation__c: Boolean;
  fts__c: Boolean;
  accountid: String;
  accountname: String;
  accountnumber: Number;
  tactical__c: Boolean;
};

type StatCount = {
  fts_count: Number;
  rme_count: Number;
  unassigned_count: Number;
  worh_count: Number;
  irt_count: Number;
  woc_count: Number;
  unassigned_ncq_count: Number;
  urgent_sev_1_breaches_count: Number;
  time: String;
};

type EmailRecipient = {
  to: String;
  cc: String;
};

type Count = {
  count: Number;
};
type HandoverResponse = {
  listAllHandovers: any[];
  listHandoverByDate: Handover;
  listHandover: Handover;
  listCasesByHandover: Case[];
  listTotalHandoverCount: Count;
  listAllPlatformCount: StatCount;
  listAllAPSCount: StatCount;
  listAllMPSCount: StatCount;
  listAllETCount: StatCount;
  listCaseSBRs: CaseShiftTracker;
  listSFDCCase: CaseResponse;
};

type CaseResponse = {
  account_name: string;
};

type HandoverStat = {
  label: string;
  count?: string;
  color: string;
  total?: string;
};
