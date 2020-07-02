import gql from 'graphql-tag';

export const listAllHandovers = gql`
  query listAllHandovers {
    listAllHandovers {
      handover_id
      handover_region
      date
      handover_notes
      fts_count
      unassigned_count
      worh_count
      woc_count
      ace_count
      irt_count
      rme_count
      unassigned_ncq_sev_1_2_count
      urgent_severity_1_breaches_count
      manager_id
      manager_first_name
      manager_last_name
      manager_email
      handover_type
      watchlist
      proactive_cases
      sensitive_accounts
    }
  }
`;

export const listHandover = gql`
  query listHandover($handover_id: Float) {
    listHandover(handover_id: $handover_id) {
      handover_id
      handover_region
      date
      handover_notes
      fts_count
      unassigned_count
      worh_count
      woc_count
      ace_count
      irt_count
      rme_count
      unassigned_ncq_sev_1_2_count
      urgent_severity_1_breaches_count
      manager_id
      manager_first_name
      manager_last_name
      manager_email
      handover_type
      watchlist
      proactive_cases
      sensitive_accounts
    }
  }
`;

export const listHandoverByDate = gql`
  query listHandoverByDate($date: String) {
    listHandoverByDate(date: $date) {
      handover_id
      handover_region
      date
      handover_notes
      fts_count
      unassigned_count
      worh_count
      woc_count
      ace_count
      irt_count
      rme_count
      unassigned_ncq_sev_1_2_count
      urgent_severity_1_breaches_count
      manager_id
      manager_first_name
      manager_last_name
      manager_email
      handover_type
      watchlist
      proactive_cases
      sensitive_accounts
    }
    listTotalHandoverCount {
      count
    }
  }
`;

export const listCasesByHandover = gql`
  query listCasesByHandover($handover_id: Float) {
    listCasesByHandover(handover_id: $handover_id) {
      case_id
      handover_id
      case_no
      case_type
      date
      case_notes
      account_name
      sbr_names
      emt_case_type
      emt_case_expectation
      emt_case_ue_ticket_no
      emt_case_ice_ticket_no
      emt_case_trello
      emt_case_notes
    }
  }
`;

export const listHandoverwithCases = gql`
query listHandoverwithCases($handover_id: Float) {
  listHandover(handover_id: $handover_id) {
    handover_id
    handover_region
    date
    handover_notes
    fts_count
    unassigned_count
    worh_count
    woc_count
    ace_count
    irt_count
    rme_count
    unassigned_ncq_sev_1_2_count
    urgent_severity_1_breaches_count
    manager_id
    manager_first_name
    manager_last_name
    manager_email
    handover_type
    watchlist
    proactive_cases
    sensitive_accounts
  }

  listCasesByHandover(handover_id: $handover_id) {
    case_id
    handover_id
    case_no
    case_type
    date
    case_notes
    account_name
    sbr_names
    emt_case_type
    emt_case_expectation
    emt_case_ue_ticket_no
    emt_case_ice_ticket_no
    emt_case_trello
    emt_case_notes
  }
}
`;

export const listAllPlatformCount = gql`
  query listAllPlatformCount {
    listAllPlatformCount {
      fts_count
      rme_count
      unassigned_count
      worh_count
      irt_count
      woc_count
      unassigned_ncq_count
      ace_count
      urgent_sev_1_breaches_count
      time
    }
  }
`;

export const listAllETCount = gql`
  query listAllETCount {
    listAllETCount {
      fts_count
      rme_count
      unassigned_count
      worh_count
      irt_count
      woc_count
      ace_count
      unassigned_ncq_count
      urgent_sev_1_breaches_count
      time
    }
  }
`;

export const listAllAPSCount = gql`
  query listAllAPSCount {
    listAllAPSCount {
      fts_count
      rme_count
      unassigned_count
      worh_count
      irt_count
      woc_count
      ace_count
      unassigned_ncq_count
      urgent_sev_1_breaches_count
      time
    }
  }
`;

export const listAllMPSCount = gql`
  query listAllMPSCount {
    listAllMPSCount {
      fts_count
      rme_count
      ace_count
      unassigned_count
      worh_count
      irt_count
      woc_count
      unassigned_ncq_count
      urgent_sev_1_breaches_count
      time
    }
  }
`;

export const listCaseSBRs = gql`
  query listCaseSBRs($casenumber: String) {
    listCaseSBRs(casenumber: $casenumber) {
      sbr_group__c
    }
  }
`;


export const listSFDCCase = gql`
  query listSFDCCase($casenumber: String) {
    listSFDCCase(casenumber: $casenumber) {
      account_name
    }
  }
`;

export const createHandover = gql`
  mutation createHandover ($input: HandoverInput!) {
    createHandover (input: $input) {
      handover_id
      handover_region
      date
      handover_notes
      fts_count
      unassigned_count
      worh_count
      woc_count
      ace_count
      irt_count
      rme_count
      unassigned_ncq_sev_1_2_count
      urgent_severity_1_breaches_count
      manager_id
      manager_first_name
      manager_last_name
      manager_email
      handover_type
      watchlist
      proactive_cases
      sensitive_accounts
    }
  }
`;

export const updateHandover = gql`
  mutation updateHandover ($input: HandoverInput!) {
    updateHandover (input: $input) {
      handover_id
      handover_region
      date
      handover_notes
      fts_count
      unassigned_count
      worh_count
      woc_count
      ace_count
      irt_count
      rme_count
      unassigned_ncq_sev_1_2_count
      urgent_severity_1_breaches_count
      manager_id
      manager_first_name
      manager_last_name
      manager_email
      handover_type
      watchlist
      proactive_cases
      sensitive_accounts
    }
  }
`;

export const removeHandover = gql`
  mutation removeHandover($handover_id: Float!) {
    removeHandover(handover_id: $handover_id) {
      handover_id
    }
  }
`;

export const sendHandoverEmail = gql`
  mutation sendHandoverEmail ($input: EmailInput!) {
    sendHandoverEmail (input: $input) {
      handover {
        handover_id
        handover_region
        date
        handover_notes
        fts_count
        unassigned_count
        worh_count
        woc_count
        ace_count
        irt_count
        rme_count
        unassigned_ncq_sev_1_2_count
        urgent_severity_1_breaches_count
        manager_id
        manager_first_name
        manager_last_name
        manager_email
        handover_type
        watchlist
        proactive_cases
        sensitive_accounts
      }
      emailRecipient
      cases {
        case_id
        handover_id
        case_no
        case_type
        date
        case_notes
        account_name
        sbr_names
        emt_case_type
        emt_case_expectation
        emt_case_ue_ticket_no
        emt_case_ice_ticket_no
        emt_case_trello
        emt_case_notes
      }
    }
  }
`;

export const createCase = gql`
  mutation createCase($input: CaseInput!) {
    createCase(input: $input) {
      case_id
      handover_id
      case_no
      case_type
      date
      case_notes
      account_name
      sbr_names
      emt_case_type
      emt_case_expectation
      emt_case_ue_ticket_no
      emt_case_ice_ticket_no
      emt_case_trello
      emt_case_notes
    }
  }
  `;

export const updateCase = gql`
  mutation updateCase($input: CaseInput!) {
    updateCase(input: $input) {
      case_id
      handover_id
      case_no
      case_type
      date
      case_notes
      account_name
      sbr_names
      emt_case_type
      emt_case_expectation
      emt_case_ue_ticket_no
      emt_case_ice_ticket_no
      emt_case_trello
      emt_case_notes
    }
  }
  `;

export const removeCase = gql`
  mutation removeCase($case_id: Int!) {
    removeCase(case_id: $case_id) {
      case_id
    }
  }
`;
