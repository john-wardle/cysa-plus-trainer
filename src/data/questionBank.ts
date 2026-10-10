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
    id: 'cysa-so-003',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Use endpoint telemetry to identify malware execution.',
    difficulty: 'Medium',
    prompt:
      'A security alert flags unusual PowerShell activity on a workstation. Which log source provides the strongest evidence of what commands actually executed?',
    choices: [
      { id: 'a', text: 'Endpoint process and script-execution logs.' },
      { id: 'b', text: 'The building badge-entry log.' },
      { id: 'c', text: 'The DHCP lease record.' },
      { id: 'd', text: 'The printer queue log.' },
    ],
    correct: ['a'],
    explanation:
      'Endpoint process and script-execution logging captures command lines, launched processes, and script blocks, which are needed to confirm what the PowerShell session did.',
  },
  {
    id: 'cysa-so-004',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Differentiate true-positive alerts from false positives during triage.',
    difficulty: 'Medium',
    prompt:
      'An alert fires for a known administrative tool used outside its normal maintenance window. Which evidence best confirms this is a true positive?',
    choices: [
      { id: 'a', text: 'The tool is also used by the IT department.' },
      {
        id: 'b',
        text: 'The process ran under a non-admin account and contacted an unknown external address.',
      },
      { id: 'c', text: 'The alert occurred during business hours.' },
      { id: 'd', text: 'The workstation screen saver is disabled.' },
    ],
    correct: ['b'],
    explanation:
      'A true positive is supported by context that breaks expected behavior, such as unusual account usage combined with suspicious network destinations.',
  },
  {
    id: 'cysa-so-005',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify indicators of command-and-control activity in DNS logs.',
    difficulty: 'Hard',
    prompt:
      'Which two patterns in DNS logs most strongly suggest command-and-control beaconing?',
    choices: [
      { id: 'a', text: 'Regular, periodic queries to the same low-reputation domain.' },
      {
        id: 'b',
        text: 'A high volume of NXDOMAIN responses for random-looking subdomains.',
      },
      { id: 'c', text: 'The user resolving the company intranet homepage.' },
      { id: 'd', text: 'Normal business-hours queries to a well-known cloud provider.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Periodic beaconing and high-entropy NXDOMAIN responses from random subdomains are classic DNS-based command-and-control and data-exfiltration patterns.',
  },
  {
    id: 'cysa-so-006',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Correlate events across data sources during an investigation.',
    difficulty: 'Medium',
    prompt:
      'A VPN log shows a successful authentication, but the identity provider has no matching sign-in event. What is the most likely explanation an analyst should validate first?',
    choices: [
      { id: 'a', text: 'The two systems use different time sources and the clocks are skewed.' },
      { id: 'b', text: 'The user changed jobs last month.' },
      { id: 'c', text: 'The VPN appliance is newer than the identity provider.' },
      { id: 'd', text: 'The report was exported on a Friday.' },
    ],
    correct: ['a'],
    explanation:
      'Time synchronization differences between logging systems are a common cause of apparent mismatches and should be validated before assuming malicious activity.',
  },
  {
    id: 'cysa-so-007',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Analyze a suspicious email to determine phishing indicators.',
    difficulty: 'Easy',
    prompt:
      'An employee reports an urgent email requesting credential verification. Which header field is most useful for determining whether the claimed sender is authentic?',
    choices: [
      {
        id: 'a',
        text: 'The authentication results showing SPF, DKIM, and DMARC checks.',
      },
      { id: 'b', text: 'The subject line font.' },
      { id: 'c', text: 'The message size.' },
      { id: 'd', text: 'The number of recipients in the To field.' },
    ],
    correct: ['a'],
    explanation:
      'SPF, DKIM, and DMARC results in the message headers show whether the sending domain passed authentication checks for the claimed sender.',
  },
  {
    id: 'cysa-so-008',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select an appropriate containment strategy for an active threat.',
    difficulty: 'Hard',
    prompt:
      'Ransomware is actively encrypting files on one workstation that is still connected to the network. Which containment action best limits spread while preserving evidence?',
    choices: [
      { id: 'a', text: 'Isolate the endpoint from the network.' },
      { id: 'b', text: 'Reformat the workstation immediately.' },
      { id: 'c', text: 'Shut down the entire office network for the day.' },
      { id: 'd', text: 'Delete the ransom note to reduce panic.' },
    ],
    correct: ['a'],
    explanation:
      'Network isolation stops the ransomware from reaching additional hosts while keeping the infected system intact for analysis.',
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
    id: 'cysa-vm-003',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Differentiate authenticated and unauthenticated vulnerability scans.',
    difficulty: 'Medium',
    prompt:
      'Why does an authenticated vulnerability scan typically produce more accurate results than an unauthenticated scan?',
    choices: [
      {
        id: 'a',
        text: 'It can inspect installed software, patch levels, and configuration without needing exploit confirmation.',
      },
      { id: 'b', text: 'It runs faster because it skips authentication.' },
      { id: 'c', text: 'It can scan assets that are powered off.' },
      { id: 'd', text: 'It removes the need for any remediation.' },
    ],
    correct: ['a'],
    explanation:
      'With valid credentials, a scanner can review patch levels, installed packages, and configuration, producing fewer false positives and identifying issues invisible from outside.',
  },
  {
    id: 'cysa-vm-004',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Determine patching order for vulnerable internet-facing systems.',
    difficulty: 'Medium',
    prompt:
      'Two systems have equal severity vulnerabilities. Which factor should determine which is patched first?',
    choices: [
      { id: 'a', text: 'Whether the system is internet-facing and reachable by external attackers.' },
      { id: 'b', text: 'The age of the hardware.' },
      { id: 'c', text: 'The operating system vendor.' },
      { id: 'd', text: 'The number of users in the building.' },
    ],
    correct: ['a'],
    explanation:
      'Exposure drives priority. An internet-facing system with an equal vulnerability is more likely to be attacked and should be remediated first.',
  },
  {
    id: 'cysa-vm-005',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Explain the role of asset inventory in vulnerability management.',
    difficulty: 'Easy',
    prompt: 'Which two benefits does an accurate asset inventory provide to vulnerability management?',
    choices: [
      { id: 'a', text: 'It ensures all systems are included in scan coverage.' },
      { id: 'b', text: 'It allows risk to be assessed based on the criticality of each asset.' },
      { id: 'c', text: 'It removes the need for vulnerability scans.' },
      { id: 'd', text: 'It automatically patches discovered vulnerabilities.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'A complete inventory guarantees scan coverage and provides the context needed to assess business risk when prioritizing remediation.',
  },
  {
    id: 'cysa-vm-006',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Document accepted risk appropriately.',
    difficulty: 'Hard',
    prompt:
      'A critical patch cannot be applied for six weeks because it would disrupt a legacy system. Which response is most appropriate?',
    choices: [
      {
        id: 'a',
        text: 'Formally document accepted risk with a mitigation plan and review date.',
      },
      { id: 'b', text: 'Ignore the vulnerability until the patch is ready.' },
      { id: 'c', text: 'Disable vulnerability scanning for that system.' },
      { id: 'd', text: 'Delete the asset record so reports look clean.' },
    ],
    correct: ['a'],
    explanation:
      'Accepted risk should be formally recorded with rationale, compensating controls, and a review date so decision-makers understand and can revisit the exposure.',
  },
  {
    id: 'cysa-vm-007',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Recommend compensating controls when patching is delayed.',
    difficulty: 'Medium',
    prompt: 'A server must remain unpatched for two weeks. Which control best reduces the risk during that window?',
    choices: [
      {
        id: 'a',
        text: 'Place the server behind additional network controls that restrict access to required services only.',
      },
      { id: 'b', text: 'Turn off all logging on the server.' },
      { id: 'c', text: 'Give all users administrative access to the server.' },
      { id: 'd', text: 'Move the server to the guest Wi-Fi network.' },
    ],
    correct: ['a'],
    explanation:
      'Network segmentation and access restriction limit who can reach the vulnerable service while waiting for a permanent patch.',
  },
  {
    id: 'cysa-vm-008',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Vulnerability Management',
    objective: 'Distinguish vulnerability scanning from penetration testing.',
    difficulty: 'Easy',
    prompt:
      'Which statement correctly describes the difference between a vulnerability scan and a penetration test?',
    choices: [
      {
        id: 'a',
        text: 'A scan identifies and reports weaknesses; a penetration test actively exploits them to validate impact.',
      },
      { id: 'b', text: 'A scan is always more expensive than a penetration test.' },
      { id: 'c', text: 'A penetration test finds fewer vulnerabilities than a scan.' },
      { id: 'd', text: 'There is no practical difference between the two.' },
    ],
    correct: ['a'],
    explanation:
      'Scanning catalogs potential weaknesses safely, while penetration testing chains and exploits them to demonstrate real-world impact and detection gaps.',
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
    id: 'cysa-ir-003',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the incident response lifecycle phase for an activity.',
    difficulty: 'Easy',
    prompt:
      'An organization updates its detection playbooks and runs a tabletop exercise. Which phase of the incident response lifecycle does this activity support?',
    choices: [
      { id: 'a', text: 'Preparation.' },
      { id: 'b', text: 'Eradication.' },
      { id: 'c', text: 'Recovery.' },
      { id: 'd', text: 'Lessons learned.' },
    ],
    correct: ['a'],
    explanation:
      'Preparation includes training, tooling, playbooks, and exercises that improve readiness before an incident occurs.',
  },
  {
    id: 'cysa-ir-004',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Maintain evidence integrity with chain-of-custody practices.',
    difficulty: 'Medium',
    prompt: 'Why is chain-of-custody documentation important during evidence collection?',
    choices: [
      {
        id: 'a',
        text: 'It records who handled evidence and when, preserving its reliability.',
      },
      { id: 'b', text: 'It makes the evidence load faster on analysts’ workstations.' },
      { id: 'c', text: 'It replaces the need to create forensic images.' },
      { id: 'd', text: 'It allows evidence to be edited for clarity.' },
    ],
    correct: ['a'],
    explanation:
      'Chain of custody tracks every person who accessed the evidence, supporting its integrity and credibility during analysis and any later proceedings.',
  },
  {
    id: 'cysa-ir-005',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Apply eradication and recovery decisions after containment.',
    difficulty: 'Hard',
    prompt:
      'After containing a confirmed intrusion, the team removes attacker tooling, restores from known-good backups, and returns systems to service. Which phases do these actions represent?',
    choices: [
      { id: 'a', text: 'Eradication followed by recovery.' },
      { id: 'b', text: 'Identification followed by preparation.' },
      { id: 'c', text: 'Containment followed by lessons learned.' },
      { id: 'd', text: 'Recovery followed by eradication.' },
    ],
    correct: ['a'],
    explanation:
      'Eradication removes the threat from the environment, and recovery restores systems to normal operation after the threat is gone.',
  },
  {
    id: 'cysa-rc-001',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Reporting and Communication',
    objective: 'Communicate risk to a nontechnical audience.',
    difficulty: 'Easy',
    prompt: 'Which statement is most appropriate for an executive incident update?',
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
    prompt: 'Which metric best shows whether the incident-response process is becoming more efficient over time?',
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
  {
    id: 'cysa-rc-003',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Reporting and Communication',
    objective: 'Determine appropriate content for an incident report.',
    difficulty: 'Medium',
    prompt: 'Which section is most important to include in an incident report for the security leadership team?',
    choices: [
      {
        id: 'a',
        text: 'A timeline of events, impact assessment, and current response status.',
      },
      { id: 'b', text: 'A list of every employee’s password policy setting.' },
      { id: 'c', text: 'The brand of firewall used in the environment.' },
      { id: 'd', text: 'The number of tickets closed last month.' },
    ],
    correct: ['a'],
    explanation:
      'Leadership needs a clear timeline, the assessed impact, and the current state of the response to make informed decisions.',
  },
  {
    id: 'cysa-rc-004',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Reporting and Communication',
    objective: 'Identify notification obligations after a confirmed data exposure.',
    difficulty: 'Hard',
    prompt: 'A confirmed incident exposes customer personal data. Which two actions are most likely required?',
    choices: [
      { id: 'a', text: 'Notify affected individuals and applicable regulators within required timeframes.' },
      { id: 'b', text: 'Delete the exposed records so the incident does not appear in audits.' },
      { id: 'c', text: 'Preserve evidence and internal records of the incident.' },
      { id: 'd', text: 'Wait to see whether customers complain before acting.' },
    ],
    correct: ['a', 'c'],
    multiSelect: true,
    explanation:
      'Regulations and organizational policy usually require timely notification and evidence preservation. Delaying or destroying records is not an appropriate response.',
  },
]

export const cysaDomains = [
  { name: 'Security Operations', weight: 33 },
  { name: 'Vulnerability Management', weight: 30 },
  { name: 'Incident Response and Management', weight: 20 },
  { name: 'Reporting and Communication', weight: 17 },
]

export const pentestDomains = [
  { name: 'Planning and Scoping', weight: 14 },
  { name: 'Information Gathering and Vulnerability Identification', weight: 22 },
  { name: 'Attacks and Exploits', weight: 30 },
  { name: 'Reporting and Communication', weight: 14 },
  { name: 'Tools and Code Analysis', weight: 20 },
]
