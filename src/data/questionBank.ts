export type Certification = 'CySA+' | 'PenTest+'

export type TrainingQuestion = {
  id: string
  certification: Certification
  examVersion: string
  domain: string
  objective: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  prompt: string
  choices: { id: string; text: string }[]
  correct: string[]
  explanation: string
  multiSelect?: boolean
}

export const questionBank: TrainingQuestion[] = [
  {
    id: 'cysa-so-001',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Analyze authentication events and recommend containment.',
    difficulty: 'Medium',
    prompt:
      'An analyst notices successful sign-ins for one user from two geographically distant locations within six minutes. Which action should be taken first?',
    choices: [
      { id: 'a', text: 'Delete the user account permanently.' },
      { id: 'b', text: 'Disable the account and begin an incident investigation.' },
      { id: 'c', text: 'Notify all employees of a possible breach.' },
      { id: 'd', text: 'Wait for another suspicious sign-in before acting.' },
    ],
    correct: ['b'],
    explanation:
      'Containment comes first. Disabling the potentially compromised account limits further misuse while preserving evidence for investigation.',
  },
  {
    id: 'cysa-so-002',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify useful evidence for command-and-control analysis.',
    difficulty: 'Easy',
    prompt:
      'During malware triage, which artifact is most useful for identifying the command-and-control server contacted by an infected endpoint?',
    choices: [
      { id: 'a', text: 'Network connection logs or a packet capture.' },
      { id: 'b', text: 'The employee’s annual security-training record.' },
      { id: 'c', text: 'The endpoint’s monitor resolution.' },
      { id: 'd', text: 'The IT department organization chart.' },
    ],
    correct: ['a'],
    explanation:
      'Network telemetry can reveal outbound connections, DNS requests, IP addresses, ports, and domains associated with command-and-control activity.',
  },
  {
    id: 'cysa-vm-001',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Prioritize vulnerability remediation.',
    difficulty: 'Medium',
    prompt:
      'Which two factors should have the greatest impact when prioritizing remediation of a vulnerability?',
    choices: [
      { id: 'a', text: 'Whether active exploitation has been observed.' },
      { id: 'b', text: 'The color used in the scanner report.' },
      { id: 'c', text: 'The business criticality of the affected asset.' },
      { id: 'd', text: 'The age of the affected device.' },
    ],
    correct: ['a', 'c'],
    multiSelect: true,
    explanation:
      'Remediation should account for active exploitation and business impact. A vulnerable, business-critical system with known exploitation risk needs urgent attention.',
  },
  {
    id: 'cysa-vm-002',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Validate scanner findings before remediation.',
    difficulty: 'Medium',
    prompt:
      'A vulnerability scanner flags a critical finding on a server, but the application owner states the affected feature is disabled. What should the analyst do next?',
    choices: [
      { id: 'a', text: 'Immediately close the finding as a false positive.' },
      { id: 'b', text: 'Validate exposure by reviewing configuration and applicable evidence.' },
      { id: 'c', text: 'Ignore the owner and schedule an emergency rebuild.' },
      { id: 'd', text: 'Lower the severity because the server is old.' },
    ],
    correct: ['b'],
    explanation:
      'Scanner output is evidence, not a final conclusion. Validate the configuration, version, reachable services, and compensating controls before closing or prioritizing the finding.',
  },
  {
    id: 'cysa-ir-001',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Preserve evidence during incident response.',
    difficulty: 'Medium',
    prompt:
      'A workstation is suspected of running fileless malware. Which evidence source should be collected before rebooting the system?',
    choices: [
      { id: 'a', text: 'Volatile memory and active process information.' },
      { id: 'b', text: 'The employee’s desk location.' },
      { id: 'c', text: 'A replacement keyboard.' },
      { id: 'd', text: 'A new operating-system license key.' },
    ],
    correct: ['a'],
    explanation:
      'Fileless malware may exist primarily in memory. Collecting volatile evidence such as running processes, network connections, and memory data before rebooting can preserve critical forensic artifacts.',
  },
  {
    id: 'cysa-ir-002',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select containment actions for compromised credentials.',
    difficulty: 'Hard',
    prompt:
      'A confirmed account compromise includes a malicious mailbox-forwarding rule. Which two actions are appropriate immediate containment steps?',
    choices: [
      { id: 'a', text: 'Disable the affected account.' },
      { id: 'b', text: 'Revoke active sessions and authentication tokens.' },
      { id: 'c', text: 'Delete all email logs related to the account.' },
      { id: 'd', text: 'Wipe every endpoint in the organization.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Disable the account and revoke active sessions to stop ongoing misuse. Preserve evidence and scope the incident before taking disproportionate actions such as widespread wiping.',
  },
  {
    id: 'cysa-rc-001',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Reporting and Communication',
    objective: 'Communicate risk to a nontechnical audience.',
    difficulty: 'Easy',
    prompt:
      'Which statement is most appropriate for an executive incident update?',
    choices: [
      {
        id: 'a',
        text: 'The event involved an unauthorized account sign-in; containment is complete and impact assessment is in progress.',
      },
      {
        id: 'b',
        text: 'Event ID 4624 was correlated with impossible-travel telemetry and an OAuth token anomaly.',
      },
      {
        id: 'c',
        text: 'The SOC used a KQL query to evaluate conditional-access signals.',
      },
      {
        id: 'd',
        text: 'The SIEM parser normalized identity-provider JSON fields.',
      },
    ],
    correct: ['a'],
    explanation:
      'Executive reporting should focus on business-relevant facts: what happened, current containment status, known or potential impact, and next decisions.',
  },
  {
    id: 'cysa-rc-002',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Reporting and Communication',
    objective: 'Select an effective security operations metric.',
    difficulty: 'Medium',
    prompt:
      'Which metric best shows whether the incident-response process is becoming more efficient over time?',
    choices: [
      { id: 'a', text: 'Mean time to contain confirmed incidents.' },
      { id: 'b', text: 'The number of colors in the dashboard.' },
      { id: 'c', text: 'The number of employees in the organization.' },
      { id: 'd', text: 'The size of the security team office.' },
    ],
    correct: ['a'],
    explanation:
      'Mean time to contain measures how quickly the organization limits harm after confirming an incident. It is an operationally meaningful metric for response effectiveness.',
  },
]

export const cysaDomains = [
  { name: 'Security Operations', weight: 33 },
  { name: 'Vulnerability Management', weight: 30 },
  { name: 'Incident Response and Management', weight: 20 },
  { name: 'Reporting and Communication', weight: 17 },
]