import type { TrainingQuestion } from './index'

// Security Operations questions (CS0-003 Domain 1)
// IDs continue from the original bank (cysa-so-001..008)
export const securityOperationsQuestions: TrainingQuestion[] = [
  {
    id: 'cysa-so-009',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize command-and-control beaconing in DNS traffic.',
    difficulty: 'Medium',
    prompt:
      'An analyst observes periodic outbound DNS queries for high-entropy subdomains at consistent 60-second intervals from an internal host. Which command-and-control technique does this pattern most likely indicate?',
    choices: [
      { id: 'a', text: 'DNS beaconing.' },
      { id: 'b', text: 'ARP poisoning.' },
      { id: 'c', text: 'MAC flooding.' },
      { id: 'd', text: 'IP address spoofing.' },
    ],
    correct: ['a'],
    explanation:
      'Regular, predictable queries to high-entropy subdomains are a classic DNS beaconing pattern used by malware to check in with a command-and-control server.',
  },
  {
    id: 'cysa-so-010',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Map SIEM capabilities to analyst use cases.',
    difficulty: 'Easy',
    prompt:
      'A security team needs to view firewall denies, endpoint process creations, and identity sign-in events together on one timeline. Which SIEM function enables this?',
    choices: [
      { id: 'a', text: 'Log aggregation and correlation.' },
      { id: 'b', text: 'Data loss prevention.' },
      { id: 'c', text: 'Network segmentation.' },
      { id: 'd', text: 'Endpoint disk encryption.' },
    ],
    correct: ['a'],
    explanation:
      'SIEMs normalize and aggregate logs from many sources and correlate them into a unified timeline, which is exactly what cross-source investigations require.',
  },
  {
    id: 'cysa-so-011',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select data sources that confirm a phishing compromise.',
    difficulty: 'Medium',
    prompt: 'Which two data sources together best confirm that a user opened a phishing email and submitted credentials to a fake site?',
    choices: [
      { id: 'a', text: 'Email security gateway logs.' },
      { id: 'b', text: 'Web proxy logs.' },
      { id: 'c', text: 'Printer spooler logs.' },
      { id: 'd', text: 'Building HVAC logs.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'The email gateway shows the message was delivered and clicked, while the web proxy shows the user subsequently connected to the credential-harvesting site.',
  },
  {
    id: 'cysa-so-012',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the cloud data source for control-plane activity.',
    difficulty: 'Medium',
    prompt:
      'In a cloud environment, which data source should an analyst review to detect unauthorized creation of compute instances or storage resources?',
    choices: [
      { id: 'a', text: 'Cloud provider audit and control-plane logs.' },
      { id: 'b', text: 'Content delivery network cache logs.' },
      { id: 'c', text: 'Virtual machine screen captures.' },
      { id: 'd', text: 'Object storage access logs.' },
    ],
    correct: ['a'],
    explanation:
      'Control-plane (management API) activity is recorded in the cloud audit trail, which captures who created, modified, or deleted resources across the environment.',
  },
  {
    id: 'cysa-so-013',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select an effective detection approach for data exfiltration.',
    difficulty: 'Hard',
    prompt:
      'An employee workstation begins compressing large volumes of files and uploading them to an external file-sharing site during off-hours. Which detection approach is most effective against this activity?',
    choices: [
      { id: 'a', text: 'Behavioral analytics and data loss prevention on egress traffic.' },
      { id: 'b', text: 'Signature-based intrusion detection only.' },
      { id: 'c', text: 'Disabling all removable media.' },
      { id: 'd', text: 'Static port-based firewall rules.' },
    ],
    correct: ['a'],
    explanation:
      'Compress-and-upload behavior has no known signature, so behavioral analytics combined with egress DLP is needed to spot the unusual volume and destination.',
  },
  {
    id: 'cysa-so-014',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Apply threat intelligence to detection and response.',
    difficulty: 'Easy',
    prompt:
      'A threat-intelligence feed lists an IP address associated with ransomware distribution. Which action makes the best use of this indicator?',
    choices: [
      { id: 'a', text: 'Add the IP to detection blocklists and search historical logs for past connections.' },
      { id: 'b', text: 'Shut down the corporate email server.' },
      { id: 'c', text: 'Reboot all endpoints immediately.' },
      { id: 'd', text: 'Delete the firewall rule base.' },
    ],
    correct: ['a'],
    explanation:
      'Actionable intelligence is used to block current communication and to sweep historical logs for any earlier contact with the indicator.',
  },
  {
    id: 'cysa-so-015',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Use endpoint telemetry to assess the scope of an alert.',
    difficulty: 'Medium',
    prompt:
      'An endpoint alert shows PowerShell launching with an encoded command line. Which EDR capability best helps the analyst determine what the process did?',
    choices: [
      { id: 'a', text: 'Process lineage showing parent and child processes.' },
      { id: 'b', text: 'Screen saver policy settings.' },
      { id: 'c', text: 'Boot-time statistics.' },
      { id: 'd', text: 'Wallpaper configuration.' },
    ],
    correct: ['a'],
    explanation:
      'Process lineage reveals what the PowerShell process launched, what it spawned, and how it moved, which is essential for scoping the activity.',
  },
  {
    id: 'cysa-so-016',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify behaviors associated with lateral movement.',
    difficulty: 'Medium',
    prompt: 'Which two behaviors most strongly suggest lateral movement within a network?',
    choices: [
      { id: 'a', text: 'Rapid authentication to many internal hosts from a single workstation.' },
      { id: 'b', text: 'Execution of remote administration tools on multiple hosts.' },
      { id: 'c', text: 'A user changing their own password.' },
      { id: 'd', text: 'A scheduled nightly backup job.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Lateral movement typically involves one host authenticating to many others and the use of remote administration or execution tools to spread across systems.',
  },
  {
    id: 'cysa-so-017',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Detect protocol tunneling that bypasses firewall rules.',
    difficulty: 'Hard',
    prompt:
      'An attacker encapsulates command-and-control data inside ICMP payloads to evade port-based firewall rules. Which control is most likely to detect this tunneling?',
    choices: [
      { id: 'a', text: 'Deep packet inspection with protocol anomaly detection.' },
      { id: 'b', text: 'Port-based firewall rules.' },
      { id: 'c', text: 'DHCP snooping.' },
      { id: 'd', text: 'MAC address filtering.' },
    ],
    correct: ['a'],
    explanation:
      'Tunneling hides data inside allowed protocols, so only deep packet inspection that validates protocol behavior and payload structure can reveal the misuse.',
  },
  {
    id: 'cysa-so-018',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best use case for user behavior analytics.',
    difficulty: 'Easy',
    prompt: 'User and entity behavior analytics (UEBA) is most useful for detecting which type of threat?',
    choices: [
      { id: 'a', text: 'Insider threats and anomalous user activity.' },
      { id: 'b', text: 'External distributed denial-of-service floods.' },
      { id: 'c', text: 'Hardware failures.' },
      { id: 'd', text: 'Power outages.' },
    ],
    correct: ['a'],
    explanation:
      'UEBA baselines normal behavior for users and systems, making it effective at spotting insider compromise and account misuse that lacks a known signature.',
  },
  {
    id: 'cysa-so-019',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Explain the role of time synchronization in monitoring.',
    difficulty: 'Medium',
    prompt:
      'Why is consistent time synchronization (NTP) across logging systems critical for security monitoring?',
    choices: [
      { id: 'a', text: 'It enables accurate correlation of events across different systems.' },
      { id: 'b', text: 'It increases log storage capacity.' },
      { id: 'c', text: 'It blocks attacks at the perimeter.' },
      { id: 'd', text: 'It speeds up disk encryption.' },
    ],
    correct: ['a'],
    explanation:
      'If system clocks drift, the same incident appears out of order across logs; synchronized time is required to build a reliable cross-system timeline.',
  },
  {
    id: 'cysa-so-020',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify common cloud storage misconfigurations.',
    difficulty: 'Medium',
    prompt: 'Which two misconfigurations most commonly lead to exposed cloud storage buckets?',
    choices: [
      { id: 'a', text: 'Public read access enabled on the bucket.' },
      { id: 'b', text: 'Overly permissive access control lists.' },
      { id: 'c', text: 'Encryption at rest being enabled.' },
      { id: 'd', text: 'Object versioning being enabled.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Public access flags and permissive ACLs are the two leading causes of exposed cloud storage; encryption and versioning are protective controls, not exposure risks.',
  },
  {
    id: 'cysa-so-021',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize a service-based persistence mechanism.',
    difficulty: 'Hard',
    prompt:
      'An investigator finds a legitimate Windows service running an unsigned binary from a user-writable folder. Which persistence mechanism is most likely in use?',
    choices: [
      { id: 'a', text: 'A rogue or hijacked service.' },
      { id: 'b', text: 'A screen saver binary.' },
      { id: 'c', text: 'A mouse driver update.' },
      { id: 'd', text: 'A font cache entry.' },
    ],
    correct: ['a'],
    explanation:
      'Attackers frequently abuse or create services to run malicious binaries at startup; an unsigned binary in a writable path strongly indicates a rogue service.',
  },
  {
    id: 'cysa-so-022',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Triage an alert using change-management context.',
    difficulty: 'Medium',
    prompt:
      'An alert fires for a known administrative tool running at an unusual time, but it originates from the expected host, the expected admin account, and a valid change ticket exists. How should the analyst triage this alert?',
    choices: [
      { id: 'a', text: 'Correlate it with the change ticket and treat it as likely expected activity.' },
      { id: 'b', text: 'Escalate it as a critical incident immediately.' },
      { id: 'c', text: 'Ignore all future alerts from that tool.' },
      { id: 'd', text: 'Wipe the host to be safe.' },
    ],
    correct: ['a'],
    explanation:
      'Context matters in triage: when the host, account, and a matching change ticket all align, the activity is likely authorized and should be documented rather than escalated.',
  },
  {
    id: 'cysa-so-023',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Use web proxy logs to investigate a domain visit.',
    difficulty: 'Easy',
    prompt:
      'Which web proxy log fields are most useful for determining whether a user visited a newly registered suspicious domain?',
    choices: [
      { id: 'a', text: 'Requested URL or domain and the timestamp.' },
      { id: 'b', text: 'Server CPU temperature.' },
      { id: 'c', text: 'Printer queue status.' },
      { id: 'd', text: 'Keyboard layout settings.' },
    ],
    correct: ['a'],
    explanation:
      'The requested URL or domain plus the timestamp establish what was accessed and when, which is the foundation of any proxy-based investigation.',
  },
  {
    id: 'cysa-so-024',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify proxy log patterns that indicate beaconing.',
    difficulty: 'Medium',
    prompt: 'Which two proxy log patterns most strongly suggest command-and-control beaconing?',
    choices: [
      { id: 'a', text: 'Connections to the same external host at regular intervals.' },
      { id: 'b', text: 'Consistent payload sizes on repeated connections.' },
      { id: 'c', text: 'Random visits to news and weather sites.' },
      { id: 'd', text: 'Traffic only during business hours.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Beaconing is characterized by predictable timing and uniform payload sizes; irregular, human-driven traffic does not show these patterns.',
  },
  {
    id: 'cysa-so-025',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Compensate for endpoint logging tampering.',
    difficulty: 'Hard',
    prompt:
      'An attacker disables local Windows event logging on a compromised host before running malware. Which control best preserves detection capability in this scenario?',
    choices: [
      { id: 'a', text: 'Real-time forwarding of logs to a centralized SIEM.' },
      { id: 'b', text: 'Storing logs only on the local host.' },
      { id: 'c', text: 'Disabling endpoint detection and response.' },
      { id: 'd', text: 'Deleting old log files to save space.' },
    ],
    correct: ['a'],
    explanation:
      'If logs are forwarded to a centralized SIEM in real time, disabling local logging does not destroy the record of activity on the host.',
  },
  {
    id: 'cysa-so-026',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the primary use of flow-based network data.',
    difficulty: 'Medium',
    prompt: 'Flow-based data such as NetFlow is most useful for answering which question?',
    choices: [
      { id: 'a', text: 'Which systems communicated, when, and how much data moved.' },
      { id: 'b', text: 'What was displayed on a user’s screen.' },
      { id: 'c', text: 'Which software versions are installed.' },
      { id: 'd', text: 'Whether a printer is online.' },
    ],
    correct: ['a'],
    explanation:
      'Flow data records conversation metadata between endpoints, making it ideal for mapping communication patterns without storing full packet contents.',
  },
  {
    id: 'cysa-so-027',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Distinguish credential-based attacks in identity logs.',
    difficulty: 'Medium',
    prompt: 'Which two sign-in patterns most strongly indicate a password-spraying attack?',
    choices: [
      { id: 'a', text: 'Many different accounts attempted from a single source address.' },
      { id: 'b', text: 'A small set of passwords tried across many accounts.' },
      { id: 'c', text: 'A single account signing in with its correct password.' },
      { id: 'd', text: 'Multi-factor authentication succeeding for one user.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Password spraying is defined by many accounts targeted from few sources using few passwords, which keeps per-account failure rates below lockout thresholds.',
  },
  {
    id: 'cysa-so-028',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the standard log-forwarding mechanism.',
    difficulty: 'Easy',
    prompt: 'Which protocol is most commonly used to forward device logs to a centralized SIEM?',
    choices: [
      { id: 'a', text: 'Syslog.' },
      { id: 'b', text: 'FTP.' },
      { id: 'c', text: 'SMTP.' },
      { id: 'd', text: 'DHCP.' },
    ],
    correct: ['a'],
    explanation:
      'Syslog is the standard protocol for shipping log messages from devices and applications to a centralized logging platform.',
  },
  {
    id: 'cysa-so-029',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select a data source for detecting data staging.',
    difficulty: 'Medium',
    prompt:
      'To detect an attacker staging collected files in an unusual directory before exfiltration, which data source provides the most direct evidence?',
    choices: [
      { id: 'a', text: 'Endpoint file system and process telemetry.' },
      { id: 'b', text: 'A weather service API.' },
      { id: 'c', text: 'Mouse sensitivity settings.' },
      { id: 'd', text: 'Monitor refresh rates.' },
    ],
    correct: ['a'],
    explanation:
      'Staging shows up as unusual file creation and modification patterns on the endpoint, which is captured by file system and process telemetry.',
  },
  {
    id: 'cysa-so-030',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Classify indicator types in threat intelligence.',
    difficulty: 'Medium',
    prompt: 'Which two of the following are network-based indicators of compromise?',
    choices: [
      { id: 'a', text: 'A domain name.' },
      { id: 'b', text: 'An IP address.' },
      { id: 'c', text: 'A file hash.' },
      { id: 'd', text: 'A user’s password.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Domains and IP addresses are network-based IOCs used in DNS, proxy, and firewall data; file hashes are host-based and a password is not a network indicator.',
  },
  {
    id: 'cysa-so-031',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Reduce false positives without reducing detection.',
    difficulty: 'Hard',
    prompt: 'Which approach most effectively reduces false positives without creating detection blind spots?',
    choices: [
      { id: 'a', text: 'Tune detection rules using analyst feedback and threat intelligence.' },
      { id: 'b', text: 'Raise every threshold to its maximum value.' },
      { id: 'c', text: 'Disable alerts that fire frequently.' },
      { id: 'd', text: 'Ignore all medium-severity alerts.' },
    ],
    correct: ['a'],
    explanation:
      'Continuous tuning with feedback and intelligence targets noisy rules specifically, whereas raising thresholds or disabling alerts hides real threats along with the noise.',
  },
  {
    id: 'cysa-so-032',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Map adversary behavior to MITRE ATT&CK tactics.',
    difficulty: 'Medium',
    prompt:
      'Under the MITRE ATT&CK framework, an adversary adding a registry run key to maintain access falls under which tactic?',
    choices: [
      { id: 'a', text: 'Persistence.' },
      { id: 'b', text: 'Data backup.' },
      { id: 'c', text: 'Screen capture.' },
      { id: 'd', text: 'Disk formatting.' },
    ],
    correct: ['a'],
    explanation:
      'Registry run keys execute code at logon, which is a classic persistence technique because it keeps the adversary’s access alive across reboots.',
  },
  {
    id: 'cysa-so-033',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Differentiate signature and anomaly detection.',
    difficulty: 'Easy',
    prompt: 'Signature-based detection is most effective at identifying which category of threats?',
    choices: [
      { id: 'a', text: 'Known threats with identifiable patterns.' },
      { id: 'b', text: 'Zero-day exploits.' },
      { id: 'c', text: 'Insider intent.' },
      { id: 'd', text: 'Hardware faults.' },
    ],
    correct: ['a'],
    explanation:
      'Signature matching excels at known threats with recorded patterns, while zero-days and novel behaviors require anomaly or behavioral detection.',
  },
  {
    id: 'cysa-so-034',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify compromise signals in cloud identity logs.',
    difficulty: 'Medium',
    prompt: 'Which two signals in cloud identity logs most strongly suggest a compromised account?',
    choices: [
      { id: 'a', text: 'Sign-in from a geographically impossible travel path.' },
      { id: 'b', text: 'Use of an authentication token from a never-before-seen device.' },
      { id: 'c', text: 'A user successfully changing their own password.' },
      { id: 'd', text: 'An administrator enrolling a new MFA method with approval.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Impossible travel and token use from a new device are strong account-compromise signals, whereas routine password changes and approved MFA enrollment are normal.',
  },
  {
    id: 'cysa-so-035',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Explain the value of east-west traffic monitoring.',
    difficulty: 'Medium',
    prompt: 'Why is monitoring internal east-west traffic important for threat detection?',
    choices: [
      { id: 'a', text: 'It reveals lateral movement between internal systems.' },
      { id: 'b', text: 'It blocks external spam email.' },
      { id: 'c', text: 'It prevents printer jams.' },
      { id: 'd', text: 'It speeds up external website loading.' },
    ],
    correct: ['a'],
    explanation:
      'Most perimeter controls do not see traffic inside the network, so east-west monitoring is essential for spotting an attacker moving laterally after initial access.',
  },
  {
    id: 'cysa-so-036',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Limit the impact of a supply-chain compromise.',
    difficulty: 'Hard',
    prompt:
      'A vendor’s signed software update mechanism is used to push malware to managed endpoints. Which combination of controls best limits the impact?',
    choices: [
      { id: 'a', text: 'Application allowlisting combined with egress filtering.' },
      { id: 'b', text: 'Disabling all software updates permanently.' },
      { id: 'c', text: 'Deleting historical logs.' },
      { id: 'd', text: 'Rebooting endpoints on a schedule.' },
    ],
    correct: ['a'],
    explanation:
      'Allowlisting stops unauthorized code from running even if it arrives through a trusted channel, and egress filtering limits what an implanted binary can reach.',
  },
  {
    id: 'cysa-so-037',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best use of full packet capture.',
    difficulty: 'Easy',
    prompt: 'A full packet capture (PCAP) is most valuable for which investigation task?',
    choices: [
      { id: 'a', text: 'Deep inspection of the content of suspicious traffic.' },
      { id: 'b', text: 'Delivering security awareness training.' },
      { id: 'c', text: 'Applying operating system patches.' },
      { id: 'd', text: 'Creating system backups.' },
    ],
    correct: ['a'],
    explanation:
      'PCAP stores the actual packets, enabling analysts to reconstruct sessions and inspect payloads, which no other network data source provides.',
  },
  {
    id: 'cysa-so-038',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Map a detection use case to its required data.',
    difficulty: 'Medium',
    prompt:
      'A detection use case for data exfiltration to cloud storage primarily depends on which types of data?',
    choices: [
      { id: 'a', text: 'Egress traffic volume and DNS or proxy records for storage domains.' },
      { id: 'b', text: 'Keyboard typing logs.' },
      { id: 'c', text: 'Screen capture files.' },
      { id: 'd', text: 'Mouse movement logs.' },
    ],
    correct: ['a'],
    explanation:
      'Exfiltration detection requires seeing how much data leaves the network and where it goes, which comes from egress volume and DNS/proxy records.',
  },
  {
    id: 'cysa-so-039',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify PowerShell indicators of malicious use.',
    difficulty: 'Medium',
    prompt: 'Which two PowerShell characteristics most strongly suggest malicious intent?',
    choices: [
      { id: 'a', text: 'Encoded or obfuscated command lines.' },
      { id: 'b', text: 'Download of files from an external IP address.' },
      { id: 'c', text: 'Use of the Get-Help cmdlet.' },
      { id: 'd', text: 'Listing available services.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Encoded commands hide intent and external downloads fetch payloads, both hallmarks of malicious PowerShell; Get-Help and service listings are benign administrative tasks.',
  },
  {
    id: 'cysa-so-040',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify monitoring gaps created by encrypted DNS.',
    difficulty: 'Medium',
    prompt:
      'An organization allows endpoints to use DNS-over-HTTPS (DoH) to external resolvers. Which monitoring gap does this create?',
    choices: [
      { id: 'a', text: 'Loss of DNS visibility needed to detect malicious domains.' },
      { id: 'b', text: 'Loss of email delivery capability.' },
      { id: 'c', text: 'Reduced screen brightness.' },
      { id: 'd', text: 'Lower USB port power.' },
    ],
    correct: ['a'],
    explanation:
      'DoH encrypts and redirects DNS away from corporate resolvers, removing the analyst’s ability to see which domains endpoints are trying to reach.',
  },
  {
    id: 'cysa-so-041',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Distinguish next-generation firewall capabilities.',
    difficulty: 'Easy',
    prompt: 'Which capability does a next-generation firewall provide that a traditional firewall does not?',
    choices: [
      { id: 'a', text: 'Application-layer inspection of traffic.' },
      { id: 'b', text: 'Rack cooling.' },
      { id: 'c', text: 'Uninterruptible power supply.' },
      { id: 'd', text: 'Cable management.' },
    ],
    correct: ['a'],
    explanation:
      'Next-generation firewalls inspect traffic at the application layer, allowing them to identify and control applications rather than only ports and addresses.',
  },
  {
    id: 'cysa-so-042',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Confirm ransomware execution using endpoint telemetry.',
    difficulty: 'Medium',
    prompt: 'Which two EDR observations together best confirm that ransomware is executing on a host?',
    choices: [
      { id: 'a', text: 'Mass file modifications or renames across many directories.' },
      { id: 'b', text: 'Deletion of volume shadow copies.' },
      { id: 'c', text: 'A user logging off at end of day.' },
      { id: 'd', text: 'The screen saver engaging.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Ransomware is characterized by rapid mass file changes and the deliberate deletion of shadow copies to prevent recovery; both together are strong confirmation.',
  },
  {
    id: 'cysa-so-043',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Protect log integrity against tampering.',
    difficulty: 'Hard',
    prompt: 'Which control is most effective at preventing an attacker from altering or deleting evidence of their activity?',
    choices: [
      { id: 'a', text: 'Centralized write-once log storage with integrity protection.' },
      { id: 'b', text: 'Storing logs only as local text files.' },
      { id: 'c', text: 'Logging to the screen console.' },
      { id: 'd', text: 'Emailing logs to analysts.' },
    ],
    correct: ['a'],
    explanation:
      'Centralized, write-once storage with integrity checks means tampering with the host does not affect the preserved copy of the logs.',
  },
  {
    id: 'cysa-so-044',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Distinguish threat hunting from alert-driven detection.',
    difficulty: 'Medium',
    prompt: 'How does threat hunting differ from alert-driven detection?',
    choices: [
      { id: 'a', text: 'Hunting proactively searches for threats without waiting for an alert.' },
      { id: 'b', text: 'Hunting only reacts to tickets.' },
      { id: 'c', text: 'Hunting deletes existing alerts.' },
      { id: 'd', text: 'Hunting waits for users to report issues.' },
    ],
    correct: ['a'],
    explanation:
      'Threat hunting is a proactive search for adversaries based on hypotheses and intelligence, rather than a reactive response to generated alerts.',
  },
  {
    id: 'cysa-so-045',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Analyze cloud audit trail events for compromise.',
    difficulty: 'Medium',
    prompt: 'Which two cloud audit-trail events most strongly suggest a compromised account?',
    choices: [
      { id: 'a', text: 'A console login from a new country.' },
      { id: 'b', text: 'A change to identity or access management policies.' },
      { id: 'c', text: 'A storage bucket being versioned.' },
      { id: 'd', text: 'Routine read access to a file.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'A login from an unfamiliar location followed by privilege or policy changes is a common compromise pattern; versioning and routine reads are benign.',
  },
  {
    id: 'cysa-so-046',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Name the technique of hiding data inside innocuous files.',
    difficulty: 'Medium',
    prompt: 'Hiding data inside an image so it can be exfiltrated without detection is an example of which technique?',
    choices: [
      { id: 'a', text: 'Steganography.' },
      { id: 'b', text: 'Packet fragmentation.' },
      { id: 'c', text: 'Server virtualization.' },
      { id: 'd', text: 'File compression.' },
    ],
    correct: ['a'],
    explanation:
      'Steganography conceals data within other files such as images, making the hidden content invisible to casual inspection.',
  },
  {
    id: 'cysa-so-047',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the log source for pass-the-hash detection.',
    difficulty: 'Easy',
    prompt: 'Which log source should an analyst review to investigate suspected pass-the-hash activity?',
    choices: [
      { id: 'a', text: 'Windows security logon events across hosts.' },
      { id: 'b', text: 'Printer spooler logs.' },
      { id: 'c', text: 'DHCP lease records.' },
      { id: 'd', text: 'Screen saver settings.' },
    ],
    correct: ['a'],
    explanation:
      'Pass-the-hash produces network logons of the same account from multiple hosts, which is visible in Windows security logon events.',
  },
  {
    id: 'cysa-so-048',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Explain the purpose of egress filtering.',
    difficulty: 'Medium',
    prompt: 'Blocking outbound connections on uncommon ports primarily limits which threat activity?',
    choices: [
      { id: 'a', text: 'Command-and-control callback channels.' },
      { id: 'b', text: 'Inbound email delivery.' },
      { id: 'c', text: 'Normal web browsing.' },
      { id: 'd', text: 'Network printing.' },
    ],
    correct: ['a'],
    explanation:
      'Attackers often use uncommon ports for callbacks; restricting outbound destinations closes these covert channels while allowing legitimate traffic.',
  },
  {
    id: 'cysa-so-049',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Justify the deployment of TLS inspection.',
    difficulty: 'Hard',
    prompt: 'Which two are valid reasons for an organization to deploy TLS inspection?',
    choices: [
      { id: 'a', text: 'To detect malware hidden inside encrypted traffic.' },
      { id: 'b', text: 'To enforce security policy on HTTPS communications.' },
      { id: 'c', text: 'To increase available bandwidth.' },
      { id: 'd', text: 'To reduce log storage requirements.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'TLS inspection reveals encrypted content for malware detection and policy enforcement, addressing the blind spot that encryption creates for security tools.',
  },
  {
    id: 'cysa-so-050',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Explain the value of TTP-based detection.',
    difficulty: 'Medium',
    prompt: 'Why is detection based on tactics, techniques, and procedures (TTPs) valuable even when indicators change?',
    choices: [
      { id: 'a', text: 'It catches attack variants that reuse behavior but swap indicators.' },
      { id: 'b', text: 'It requires no log data.' },
      { id: 'c', text: 'It blocks every attack automatically.' },
      { id: 'd', text: 'It is always cheaper than other methods.' },
    ],
    correct: ['a'],
    explanation:
      'Adversaries routinely change IPs, domains, and hashes, but their techniques stay similar; TTP-based detection finds the behavior behind the changing indicators.',
  },
  {
    id: 'cysa-so-051',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Triage alerts from deception technology.',
    difficulty: 'Medium',
    prompt:
      'A honeypot alert fires showing an attacker interacting with a fake SMB service. How should this alert be treated?',
    choices: [
      { id: 'a', text: 'As a high-priority true positive requiring immediate investigation.' },
      { id: 'b', text: 'As noise to be ignored.' },
      { id: 'c', text: 'As a false positive by default.' },
      { id: 'd', text: 'As routine activity.' },
    ],
    correct: ['a'],
    explanation:
      'Deception assets have no legitimate users, so any interaction is malicious by design and should be investigated immediately.',
  },
  {
    id: 'cysa-so-052',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify endpoint data sources.',
    difficulty: 'Easy',
    prompt: 'Which two of the following are endpoint data sources?',
    choices: [
      { id: 'a', text: 'Process creation logs.' },
      { id: 'b', text: 'Registry modification logs.' },
      { id: 'c', text: 'NetFlow records.' },
      { id: 'd', text: 'Web proxy logs.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Process and registry logs are generated on endpoints, whereas NetFlow and proxy logs are network data sources.',
  },
  {
    id: 'cysa-so-053',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Distinguish a denial-of-service attack from legitimate traffic spikes.',
    difficulty: 'Medium',
    prompt: 'Which metric best helps distinguish a distributed denial-of-service attack from a legitimate flash crowd?',
    choices: [
      { id: 'a', text: 'The diversity and behavior of the source population.' },
      { id: 'b', text: 'Total bytes transferred alone.' },
      { id: 'c', text: 'The time of day.' },
      { id: 'd', text: 'The screen resolution of requesters.' },
    ],
    correct: ['a'],
    explanation:
      'Botnets generate uniform, scripted traffic from distributed sources, while flash crowds consist of varied human behavior; source diversity reveals the difference.',
  },
  {
    id: 'cysa-so-054',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Detect token reuse across locations.',
    difficulty: 'Medium',
    prompt:
      'A user’s single sign-on token is used minutes later from another continent. Which control would most likely detect this first?',
    choices: [
      { id: 'a', text: 'Risk-based conditional access with impossible-travel detection.' },
      { id: 'b', text: 'Disk defragmentation.' },
      { id: 'c', text: 'Mouse driver updates.' },
      { id: 'd', text: 'Font cache clearing.' },
    ],
    correct: ['a'],
    explanation:
      'Impossible-travel and risk-based conditional access flag token use from geographically implausible locations, which is a hallmark of token theft.',
  },
  {
    id: 'cysa-so-055',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify coverage gaps in a monitoring strategy.',
    difficulty: 'Hard',
    prompt:
      'An organization monitors only its perimeter firewall and endpoints. Which threat activity is most likely to go undetected?',
    choices: [
      { id: 'a', text: 'East-west lateral movement between internal systems.' },
      { id: 'b', text: 'Spam email delivery.' },
      { id: 'c', text: 'Severe weather.' },
      { id: 'd', text: 'Power outages.' },
    ],
    correct: ['a'],
    explanation:
      'Firewalls and endpoints see perimeter and host activity but not traffic flowing inside the network, so lateral movement between internal hosts is often missed.',
  },
  {
    id: 'cysa-so-056',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize multi-stage correlation in detection.',
    difficulty: 'Medium',
    prompt:
      'A SIEM rule fires only after a phishing URL is clicked and the destination host later begins beaconing. This is an example of which detection approach?',
    choices: [
      { id: 'a', text: 'Multi-stage event correlation.' },
      { id: 'b', text: 'Signature matching.' },
      { id: 'c', text: 'Data backup.' },
      { id: 'd', text: 'Asset inventory.' },
    ],
    correct: ['a'],
    explanation:
      'Correlating an initial compromise indicator with later behavior raises confidence that an attack chain is underway rather than treating each event in isolation.',
  },
  {
    id: 'cysa-so-057',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the focus of network detection and response.',
    difficulty: 'Medium',
    prompt: 'Network detection and response (NDR) primarily analyzes which data to find threats?',
    choices: [
      { id: 'a', text: 'Network traffic patterns and behaviors.' },
      { id: 'b', text: 'Keyboard typing speed.' },
      { id: 'c', text: 'Screen brightness levels.' },
      { id: 'd', text: 'Power supply voltage.' },
    ],
    correct: ['a'],
    explanation:
      'NDR inspects network traffic to identify malicious behavior such as lateral movement, command-and-control, and data exfiltration.',
  },
  {
    id: 'cysa-so-058',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Apply practices that reduce alert fatigue.',
    difficulty: 'Medium',
    prompt: 'Which two practices most effectively reduce analyst alert fatigue?',
    choices: [
      { id: 'a', text: 'Tuning detection rules based on feedback.' },
      { id: 'b', text: 'Aggregating related alerts into single incidents.' },
      { id: 'c', text: 'Ignoring all alerts for a week.' },
      { id: 'd', text: 'Deleting all historical logs.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Tuning removes noise at its source and aggregation reduces volume, both of which lower fatigue without sacrificing coverage.',
  },
  {
    id: 'cysa-so-059',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a SIEM use case library.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of maintaining a SIEM use case library?',
    choices: [
      { id: 'a', text: 'To document and standardize detection logic for specific threats.' },
      { id: 'b', text: 'To replace the need for analysts.' },
      { id: 'c', text: 'To store backup power supplies.' },
      { id: 'd', text: 'To manage printer toner levels.' },
    ],
    correct: ['a'],
    explanation:
      'A use case library documents what each detection rule is designed to catch, why it exists, and how it should be tuned, making detection engineering repeatable.',
  },
  {
    id: 'cysa-so-060',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize data exfiltration via cloud storage.',
    difficulty: 'Hard',
    prompt:
      'An employee uploads large volumes of sensitive files to a personal cloud storage account from a corporate laptop. Which combination of controls best detects this?',
    choices: [
      { id: 'a', text: 'Endpoint DLP combined with egress proxy and DNS monitoring.' },
      { id: 'b', text: 'A larger monitor for the employee.' },
      { id: 'c', text: 'Disabling the keyboard.' },
      { id: 'd', text: 'A faster CPU.' },
    ],
    correct: ['a'],
    explanation:
      'Detecting cloud exfiltration requires seeing the data on the endpoint (DLP), the destination (proxy), and the domain resolution (DNS) together.',
  },
  {
    id: 'cysa-so-061',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the appropriate log source for VPN investigations.',
    difficulty: 'Easy',
    prompt:
      'An analyst needs to determine which internal resources a remote user accessed after connecting through a VPN. Which log source is most useful?',
    choices: [
      { id: 'a', text: 'VPN connection and authentication logs.' },
      { id: 'b', text: 'Printer ink level logs.' },
      { id: 'c', text: 'Building temperature sensors.' },
      { id: 'd', text: 'Mouse battery indicators.' },
    ],
    correct: ['a'],
    explanation:
      'VPN logs record who connected, when, and what internal resources they reached, making them essential for remote-access investigations.',
  },
  {
    id: 'cysa-so-062',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify indicators of a brute-force attack.',
    difficulty: 'Medium',
    prompt: 'Which two patterns in authentication logs indicate a brute-force attack against a single account?',
    choices: [
      { id: 'a', text: 'Many failed logins for one account in a short period.' },
      { id: 'b', text: 'A sudden lockout after repeated failures.' },
      { id: 'c', text: 'One successful login during business hours.' },
      { id: 'd', text: 'A password reset requested by the user.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Brute force is characterized by rapid repeated failures against one account, often ending in a lockout once the threshold is reached.',
  },
  {
    id: 'cysa-so-063',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best detection data for DNS tunneling.',
    difficulty: 'Hard',
    prompt:
      'An attacker encodes stolen data into DNS queries to exfiltrate it slowly. Which DNS log characteristics best reveal this tunneling?',
    choices: [
      { id: 'a', text: 'Unusually long query names and high entropy in subdomain labels.' },
      { id: 'b', text: 'Queries for common domains during business hours.' },
      { id: 'c', text: 'Short, predictable query strings.' },
      { id: 'd', text: 'Queries to well-known resolver addresses.' },
    ],
    correct: ['a'],
    explanation:
      'DNS tunneling encodes data into subdomain labels, producing abnormally long, high-entropy query names that stand out from normal DNS traffic.',
  },
  {
    id: 'cysa-so-064',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Map cloud shared-responsibility to monitoring duties.',
    difficulty: 'Medium',
    prompt:
      'Under the cloud shared-responsibility model, which monitoring duty always remains with the customer regardless of service model?',
    choices: [
      { id: 'a', text: 'Monitoring customer data, identities, and application-level activity.' },
      { id: 'b', text: 'Maintaining physical data center cooling.' },
      { id: 'c', text: 'Replacing failed hardware in the provider facility.' },
      { id: 'd', text: 'Patching the hypervisor.' },
    ],
    correct: ['a'],
    explanation:
      'Providers secure the infrastructure, but customers always retain responsibility for their data, access controls, and application-layer activity.',
  },
  {
    id: 'cysa-so-065',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select data sources for detecting privilege escalation.',
    difficulty: 'Medium',
    prompt: 'Which two data sources together best detect privilege escalation on a Windows host?',
    choices: [
      { id: 'a', text: 'Security logon and privilege-use events.' },
      { id: 'b', text: 'Process creation and service installation events.' },
      { id: 'c', text: 'Printer queue logs.' },
      { id: 'd', text: 'Screen saver settings.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Privilege escalation produces new logons with elevated rights and new privileged process or service activity; correlating both confirms the escalation.',
  },
  {
    id: 'cysa-so-066',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the value of passive DNS monitoring.',
    difficulty: 'Medium',
    prompt:
      'Passive DNS monitoring is most valuable for which detection purpose?',
    choices: [
      { id: 'a', text: 'Identifying hosts that resolved known malicious domains.' },
      { id: 'b', text: 'Blocking all outbound email.' },
      { id: 'c', text: 'Speeding up web page loads.' },
      { id: 'd', text: 'Managing printer drivers.' },
    ],
    correct: ['a'],
    explanation:
      'Passive DNS records which internal hosts queried which domains, enabling retroactive identification of systems that contacted malicious infrastructure.',
  },
  {
    id: 'cysa-so-067',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a jump server in monitoring.',
    difficulty: 'Easy',
    prompt:
      'Why do organizations route administrative access through a jump server (bastion host)?',
    choices: [
      { id: 'a', text: 'To centralize and log all administrative sessions.' },
      { id: 'b', text: 'To reduce the number of monitors needed.' },
      { id: 'c', text: 'To eliminate the need for passwords.' },
      { id: 'd', text: 'To improve wireless signal strength.' },
    ],
    correct: ['a'],
    explanation:
      'A jump server concentrates administrative access through one hardened, heavily logged point, improving both control and auditability.',
  },
  {
    id: 'cysa-so-068',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Detect use of legitimate tools for malicious purposes.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses PsExec and WMI to run commands on remote hosts without deploying malware. Which monitoring approach best detects this living-off-the-land technique?',
    choices: [
      { id: 'a', text: 'EDR correlation of remote service creation and process execution across hosts.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all outbound web traffic.' },
    ],
    correct: ['a'],
    explanation:
      'Because no malicious file exists, detection depends on correlating the behavioral traces these tools leave: remote service creation and anomalous process execution.',
  },
  {
    id: 'cysa-so-069',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate network segmentation for detection.',
    difficulty: 'Medium',
    prompt:
      'An organization segments its network into user, server, and guest zones. Which detection benefit does this provide?',
    choices: [
      { id: 'a', text: 'It reveals unauthorized cross-zone communication.' },
      { id: 'b', text: 'It removes the need for a firewall.' },
      { id: 'c', text: 'It eliminates all malware.' },
      { id: 'd', text: 'It increases Wi-Fi range.' },
    ],
    correct: ['a'],
    explanation:
      'Segmentation creates natural checkpoints; traffic crossing between zones without a legitimate business reason becomes visible and suspicious.',
  },
  {
    id: 'cysa-so-070',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the best use of endpoint query languages.',
    difficulty: 'Medium',
    prompt:
      'An analyst wants to check all endpoints in the environment for a specific running process within minutes. Which capability makes this possible?',
    choices: [
      { id: 'a', text: 'Centralized endpoint query and live response tooling.' },
      { id: 'b', text: 'Manual inspection of each computer.' },
      { id: 'c', text: 'Printer management software.' },
      { id: 'd', text: 'Email archiving.' },
    ],
    correct: ['a'],
    explanation:
      'Endpoint query platforms let analysts run one search across all managed hosts simultaneously, enabling rapid environment-wide checks without visiting each machine.',
  },
  {
    id: 'cysa-so-071',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize cloud metadata service abuse.',
    difficulty: 'Hard',
    prompt:
      'An attacker queries the cloud instance metadata service from a compromised virtual machine to steal temporary credentials. Which control best mitigates this?',
    choices: [
      { id: 'a', text: 'Require token-based, session-oriented metadata access.' },
      { id: 'b', text: 'Disable all logging.' },
      { id: 'c', text: 'Remove the metadata service entirely.' },
      { id: 'd', text: 'Block all inbound web traffic.' },
    ],
    correct: ['a'],
    explanation:
      'Modern metadata services require a session token and specific headers, which prevents a simple unauthenticated request from harvesting instance credentials.',
  },
  {
    id: 'cysa-so-072',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the role of normalization in log analysis.',
    difficulty: 'Easy',
    prompt:
      'Why does a SIEM normalize logs from different vendors into a common format?',
    choices: [
      { id: 'a', text: 'So rules and searches work consistently across all data sources.' },
      { id: 'b', text: 'To reduce the number of servers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage keyboard layouts.' },
    ],
    correct: ['a'],
    explanation:
      'Normalization maps vendor-specific field names to a common schema, allowing a single detection rule or query to work across every integrated source.',
  },
  {
    id: 'cysa-so-073',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify indicators of a watering hole attack.',
    difficulty: 'Medium',
    prompt:
      'Attackers compromise a website frequently visited by employees of a target company and inject exploit code. Which detection approach is most relevant?',
    choices: [
      { id: 'a', text: 'Proxy and DNS logs showing visits to the compromised site followed by suspicious endpoint activity.' },
      { id: 'b', text: 'Printer usage logs.' },
      { id: 'c', text: 'Mouse click heatmaps.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'Watering hole attacks are detected by correlating visits to the compromised site with subsequent anomalous behavior on the visiting endpoints.',
  },
  {
    id: 'cysa-so-074',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating rogue wireless access points.',
    difficulty: 'Medium',
    prompt:
      'A new wireless access point appears in the office that no one from IT provisioned. Which data sources best determine whether it is malicious?',
    choices: [
      { id: 'a', text: 'Wireless controller logs and endpoint connection records.' },
      { id: 'b', text: 'Printer queue depth.' },
      { id: 'c', text: 'Monitor power consumption.' },
      { id: 'd', text: 'Mouse DPI settings.' },
    ],
    correct: ['a'],
    explanation:
      'Wireless controller logs show the access point and its broadcast, while endpoint connection records reveal which devices connected to it.',
  },
  {
    id: 'cysa-so-075',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Explain why baseline behavior matters for detection.',
    difficulty: 'Easy',
    prompt:
      'Why is establishing a baseline of normal network and user behavior important?',
    choices: [
      { id: 'a', text: 'Anomaly detection needs a reference point to identify deviations.' },
      { id: 'b', text: 'It reduces the cost of keyboards.' },
      { id: 'c', text: 'It increases printer speed.' },
      { id: 'd', text: 'It replaces the need for firewalls.' },
    ],
    correct: ['a'],
    explanation:
      'Without a baseline of what is normal, anomaly detection cannot distinguish malicious deviations from routine activity.',
  },
  {
    id: 'cysa-so-076',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a threat-informed defense.',
    difficulty: 'Medium',
    prompt:
      'Building a threat-informed defense primarily involves which activity?',
    choices: [
      { id: 'a', text: 'Aligning detections and controls with adversary behavior documented in threat intelligence.' },
      { id: 'b', text: 'Buying the most expensive firewall.' },
      { id: 'c', text: 'Hiring more staff regardless of need.' },
      { id: 'd', text: 'Turning off all logging.' },
    ],
    correct: ['a'],
    explanation:
      'Threat-informed defense prioritizes protections and detections based on how real adversaries operate, rather than on generic checklists.',
  },
  {
    id: 'cysa-so-077',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Detect anomalous outbound connections from a server.',
    difficulty: 'Medium',
    prompt:
      'A file server that only ever receives inbound connections suddenly begins making outbound connections to many external IPs. Which process best investigates this?',
    choices: [
      { id: 'a', text: 'Review NetFlow and firewall logs for the server and correlate with endpoint process data.' },
      { id: 'b', text: 'Ignore the traffic.' },
      { id: 'c', text: 'Delete the server logs.' },
      { id: 'd', text: 'Unplug the keyboard.' },
    ],
    correct: ['a'],
    explanation:
      'Unexpected outbound connections from a server are a strong compromise indicator; network logs show the pattern and endpoint data reveals the responsible process.',
  },
  {
    id: 'cysa-so-078',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for securing logs in transit.',
    difficulty: 'Easy',
    prompt:
      'Which protocol feature best protects log data as it travels from devices to the SIEM?',
    choices: [
      { id: 'a', text: 'Transport-layer encryption such as TLS.' },
      { id: 'b', text: 'Larger font sizes.' },
      { id: 'c', text: 'Higher screen resolution.' },
      { id: 'd', text: 'Wireless mouse encryption.' },
    ],
    correct: ['a'],
    explanation:
      'TLS encrypts log data in transit, preventing interception or tampering as logs move across the network to the SIEM.',
  },
  {
    id: 'cysa-so-079',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a detection engineering lifecycle.',
    difficulty: 'Medium',
    prompt:
      'The detection engineering lifecycle (design, implement, test, operate) exists primarily to accomplish which goal?',
    choices: [
      { id: 'a', text: 'Keep detection content accurate and effective as threats evolve.' },
      { id: 'b', text: 'Reduce the number of computers.' },
      { id: 'c', text: 'Increase power consumption.' },
      { id: 'd', text: 'Manage office seating.' },
    ],
    correct: ['a'],
    explanation:
      'A structured lifecycle ensures detection rules are continuously validated, tested, and updated so they remain effective as adversary behavior changes.',
  },
  {
    id: 'cysa-so-080',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the value of centralized log retention.',
    difficulty: 'Easy',
    prompt:
      'Why do organizations retain security logs in a centralized platform rather than only on individual devices?',
    choices: [
      { id: 'a', text: 'To preserve evidence and enable correlation even if a device is compromised.' },
      { id: 'b', text: 'To reduce the number of keyboards.' },
      { id: 'c', text: 'To improve screen colors.' },
      { id: 'd', text: 'To manage printer toner.' },
    ],
    correct: ['a'],
    explanation:
      'Centralized retention protects logs from tampering on a compromised host and allows events from many sources to be correlated over long periods.',
  },
  {
    id: 'cysa-so-081',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify indicators of account takeover in email.',
    difficulty: 'Medium',
    prompt: 'Which two changes to a user mailbox most strongly suggest account takeover?',
    choices: [
      { id: 'a', text: 'A new forwarding rule sending mail to an external address.' },
      { id: 'b', text: 'An inbox rule that appears immediately after a password change from a new location.' },
      { id: 'c', text: 'The user sending a normal work email.' },
      { id: 'd', text: 'A read receipt for a meeting invite.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Forwarding rules and suspicious rules created right after a location-based password change are classic signs that an attacker has taken over an email account.',
  },
  {
    id: 'cysa-so-082',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best response to a high-volume scan alert.',
    difficulty: 'Medium',
    prompt:
      'A network sensor reports that an external IP is scanning many internal ports. Which information is most important to determine whether this is a real threat?',
    choices: [
      { id: 'a', text: 'Whether any vulnerable services responded to the scan.' },
      { id: 'b', text: 'The color of the sensor that reported it.' },
      { id: 'c', text: 'The brand of the firewall.' },
      { id: 'd', text: 'The number of employees in the building.' },
    ],
    correct: ['a'],
    explanation:
      'A scan only becomes a threat if it finds something exploitable; determining whether vulnerable services responded tells the analyst the real risk.',
  },
  {
    id: 'cysa-so-083',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select data sources for investigating unauthorized data access.',
    difficulty: 'Medium',
    prompt: 'Which two data sources best reveal that an employee accessed sensitive records they should not have viewed?',
    choices: [
      { id: 'a', text: 'Application access audit logs.' },
      { id: 'b', text: 'File server permission and access logs.' },
      { id: 'c', text: 'Printer toner levels.' },
      { id: 'd', text: 'Screen brightness settings.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Application and file server logs record who accessed which records and when, providing direct evidence of unauthorized data access.',
  },
  {
    id: 'cysa-so-084',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of security orchestration and automation.',
    difficulty: 'Medium',
    prompt:
      'Security orchestration, automation, and response (SOAR) platforms primarily improve which aspect of operations?',
    choices: [
      { id: 'a', text: 'They automate repetitive response actions to speed up handling.' },
      { id: 'b', text: 'They replace all human analysts.' },
      { id: 'c', text: 'They reduce the need for any security tools.' },
      { id: 'd', text: 'They manage building lighting.' },
    ],
    correct: ['a'],
    explanation:
      'SOAR automates routine containment and enrichment tasks, reducing response times and freeing analysts to focus on complex investigation.',
  },
  {
    id: 'cysa-so-085',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of default credentials.',
    difficulty: 'Easy',
    prompt:
      'Why are default credentials on network devices a significant security risk?',
    choices: [
      { id: 'a', text: 'They are publicly known and allow unauthenticated administrative access.' },
      { id: 'b', text: 'They are difficult to type.' },
      { id: 'c', text: 'They consume too much power.' },
      { id: 'd', text: 'They are hard to remember.' },
    ],
    correct: ['a'],
    explanation:
      'Default credentials are published in vendor documentation, so any device still using them can be taken over without any exploit.',
  },
  {
    id: 'cysa-so-086',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best indicator for identifying a compromised service account.',
    difficulty: 'Hard',
    prompt:
      'A service account that normally runs one scheduled task suddenly initiates interactive logons from a workstation. Why is this suspicious?',
    choices: [
      { id: 'a', text: 'Service accounts should never produce interactive logons; the behavior indicates the account may be misused.' },
      { id: 'b', text: 'It is normal for service accounts to interact with workstations.' },
      { id: 'c', text: 'Service accounts should only run on weekends.' },
      { id: 'd', text: 'Interactive logons improve performance.' },
    ],
    correct: ['a'],
    explanation:
      'Service accounts have tightly scoped, non-interactive jobs; an interactive logon from a workstation is a strong indicator of credential theft and misuse.',
  },
  {
    id: 'cysa-so-087',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best use of a purple team exercise.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a purple team exercise?',
    choices: [
      { id: 'a', text: 'To test and improve detections by having red and blue teams work together.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To eliminate the need for monitoring.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Purple teaming validates that detections actually fire during realistic attack simulations and uses the findings to strengthen the security program.',
  },
  {
    id: 'cysa-so-088',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of asset criticality in detection tuning.',
    difficulty: 'Medium',
    prompt:
      'Why should detection rules on critical assets be tuned more sensitively than those on low-value systems?',
    choices: [
      { id: 'a', text: 'Because the business impact of a miss is greater on critical assets.' },
      { id: 'b', text: 'Because critical assets have smaller screens.' },
      { id: 'c', text: 'Because low-value systems need more alerts.' },
      { id: 'd', text: 'Because printers are more important.' },
    ],
    correct: ['a'],
    explanation:
      'Detection sensitivity should reflect business impact: a missed alert on a critical system is far costlier than one on a low-value asset, justifying more sensitive rules.',
  },
  {
    id: 'cysa-so-089',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for securing management interfaces.',
    difficulty: 'Medium',
    prompt:
      'Which control best protects a network device management interface from unauthorized access?',
    choices: [
      { id: 'a', text: 'Restricting management access to a dedicated administrative network segment.' },
      { id: 'b', text: 'Painting the device a bright color.' },
      { id: 'c', text: 'Placing the device in a public area.' },
      { id: 'd', text: 'Using a longer power cable.' },
    ],
    correct: ['a'],
    explanation:
      'Management interfaces should live on a restricted admin segment so that only authorized administrators from specific networks can reach them.',
  },
  {
    id: 'cysa-so-090',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a capture-the-flag style detection test.',
    difficulty: 'Easy',
    prompt:
      'Running a benign simulated attack against your own environment to see if alerts fire is an example of which practice?',
    choices: [
      { id: 'a', text: 'Detection validation testing.' },
      { id: 'b', text: 'Data destruction.' },
      { id: 'c', text: 'Asset disposal.' },
      { id: 'd', text: 'User training.' },
    ],
    correct: ['a'],
    explanation:
      'Simulated attacks validate that detection rules work as intended and reveal coverage gaps before a real adversary exploits them.',
  },
  {
    id: 'cysa-so-091',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored shadow IT.',
    difficulty: 'Medium',
    prompt:
      'An employee deploys an unauthorized cloud application that stores company data. Which risk does this shadow IT create?',
    choices: [
      { id: 'a', text: 'Company data is stored outside the visibility and controls of the security team.' },
      { id: 'b', text: 'The office network becomes faster.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Shadow IT operates outside sanctioned controls, so data stored in it is invisible to monitoring and unprotected by organizational policy.',
  },
  {
    id: 'cysa-so-092',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for mapping normal communication patterns.',
    difficulty: 'Medium',
    prompt:
      'An analyst needs to determine which internal servers normally communicate with each other. Which data source is most useful?',
    choices: [
      { id: 'a', text: 'NetFlow or firewall connection logs over time.' },
      { id: 'b', text: 'Screen saver settings.' },
      { id: 'c', text: 'Printer driver versions.' },
      { id: 'd', text: 'Mouse battery levels.' },
    ],
    correct: ['a'],
    explanation:
      'Connection logs accumulated over time reveal the legitimate communication baseline between systems, which is essential for spotting anomalies.',
  },
  {
    id: 'cysa-so-093',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a web application firewall in monitoring.',
    difficulty: 'Medium',
    prompt:
      'What type of attack traffic is a web application firewall (WAF) specifically designed to detect and block?',
    choices: [
      { id: 'a', text: 'Application-layer attacks such as SQL injection and cross-site scripting.' },
      { id: 'b', text: 'Printer paper jams.' },
      { id: 'c', text: 'Power surges.' },
      { id: 'd', text: 'Keyboard driver errors.' },
    ],
    correct: ['a'],
    explanation:
      'WAFs inspect HTTP traffic for application-layer abuse like injection and script attacks that perimeter firewalls cannot understand.',
  },
  {
    id: 'cysa-so-094',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best indicator for detecting a slow data leak.',
    difficulty: 'Hard',
    prompt:
      'An attacker exfiltrates data a few kilobytes per day over months to avoid volume thresholds. Which detection approach is most likely to catch this?',
    choices: [
      { id: 'a', text: 'Statistical baselining of egress volume per host over long time windows.' },
      { id: 'b', text: 'A simple fixed daily volume threshold.' },
      { id: 'c', text: 'Signature-based antivirus.' },
      { id: 'd', text: 'Disabling egress monitoring.' },
    ],
    correct: ['a'],
    explanation:
      'Slow leaks evade fixed thresholds, so comparing each host’s long-term egress behavior against its own statistical baseline is the effective control.',
  },
  {
    id: 'cysa-so-095',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of identity threat detection.',
    difficulty: 'Medium',
    prompt:
      'Identity threat detection and response (ITDR) focuses primarily on which type of threat?',
    choices: [
      { id: 'a', text: 'Compromised credentials and identity-based attacks.' },
      { id: 'b', text: 'Printer hardware failures.' },
      { id: 'c', text: 'Monitor dead pixels.' },
      { id: 'd', text: 'Keyboard wear.' },
    ],
    correct: ['a'],
    explanation:
      'ITDR specializes in detecting credential theft, misuse, and anomalous identity behavior that bypass traditional network and endpoint controls.',
  },
  {
    id: 'cysa-so-096',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate log sources for investigating a VPN anomaly.',
    difficulty: 'Medium',
    prompt:
      'A VPN gateway reports an unusual number of failed authentications from overseas locations. Which additional data best helps determine if this is an attack?',
    choices: [
      { id: 'a', text: 'Identity provider sign-in logs and endpoint enrollment records.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Building badge swipe logs.' },
      { id: 'd', text: 'Monitor refresh rates.' },
    ],
    correct: ['a'],
    explanation:
      'Correlating VPN failures with identity logs and device records reveals whether the attempts are targeting real accounts and whether those accounts show other anomalies.',
  },
  {
    id: 'cysa-so-097',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the value of cross-domain log correlation.',
    difficulty: 'Medium',
    prompt:
      'Why is correlating network, endpoint, and identity logs more powerful than reviewing any single source alone?',
    choices: [
      { id: 'a', text: 'It reveals multi-stage attacks whose individual events look benign in isolation.' },
      { id: 'b', text: 'It reduces the number of computers needed.' },
      { id: 'c', text: 'It makes monitors brighter.' },
      { id: 'd', text: 'It shortens keyboard cables.' },
    ],
    correct: ['a'],
    explanation:
      'Many attacks only become visible when events from different domains are combined; each individual event may look harmless on its own.',
  },
  {
    id: 'cysa-so-098',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the best practice for handling a suspicious download.',
    difficulty: 'Medium',
    prompt:
      'An employee reports downloading a file that immediately launched a strange process. What is the safest immediate action for the analyst to recommend?',
    choices: [
      { id: 'a', text: 'Isolate the endpoint from the network and begin collecting evidence.' },
      { id: 'b', text: 'Reformat the endpoint immediately.' },
      { id: 'c', text: 'Delete the downloaded file.' },
      { id: 'd', text: 'Ignore it and wait to see what happens.' },
    ],
    correct: ['a'],
    explanation:
      'Isolation stops potential spread and preserves the system in its current state for analysis; reformatting or deleting destroys evidence.',
  },
  {
    id: 'cysa-so-099',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the purpose of a security data lake.',
    difficulty: 'Easy',
    prompt:
      'A security data lake is primarily used for which purpose?',
    choices: [
      { id: 'a', text: 'Storing large volumes of diverse log data for long-term search and analysis.' },
      { id: 'b', text: 'Cooling network equipment.' },
      { id: 'c', text: 'Managing printer supplies.' },
      { id: 'd', text: 'Storing physical keys.' },
    ],
    correct: ['a'],
    explanation:
      'A data lake retains massive amounts of raw log data at low cost, enabling historical hunting and analysis long after operational retention periods expire.',
  },
  {
    id: 'cysa-so-100',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the best use of threat intelligence enrichment.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of enriching alerts with threat intelligence data?',
    choices: [
      { id: 'a', text: 'It adds context about known malicious infrastructure to speed up triage.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'It shortens keyboard cables.' },
    ],
    correct: ['a'],
    explanation:
      'Enrichment attaches reputation and attribution context to indicators in alerts, helping analysts quickly decide whether something is known-bad.',
  },
  {
    id: 'cysa-so-101',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize indicators of a compromised build pipeline.',
    difficulty: 'Hard',
    prompt:
      'A software build server begins making outbound connections and running scripts at unusual times. Why is this especially dangerous?',
    choices: [
      { id: 'a', text: 'A compromised build pipeline can inject malware into every released artifact.' },
      { id: 'b', text: 'It only affects the build server itself.' },
      { id: 'c', text: 'It speeds up software delivery.' },
      { id: 'd', text: 'It has no security impact.' },
    ],
    correct: ['a'],
    explanation:
      'Build systems are trusted to produce released software; compromising them lets an attacker distribute malware to every customer through a trusted channel.',
  },
  {
    id: 'cysa-so-102',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting insider data theft.',
    difficulty: 'Hard',
    prompt:
      'An employee with legitimate access begins copying large volumes of sensitive files to a personal cloud drive on their last month before resigning. Which control best detects this?',
    choices: [
      { id: 'a', text: 'User behavior analytics combined with egress DLP.' },
      { id: 'b', text: 'A faster office network.' },
      { id: 'c', text: 'Disabling all cloud access permanently.' },
      { id: 'd', text: 'Signature-based antivirus.' },
    ],
    correct: ['a'],
    explanation:
      'Insider misuse of legitimate access is best caught by spotting abnormal user behavior and the unusual egress volume to unsanctioned cloud destinations.',
  },
  {
    id: 'cysa-so-103',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a network TAP in monitoring.',
    difficulty: 'Easy',
    prompt:
    'What is the purpose of a network TAP in a security monitoring architecture?',
    choices: [
      { id: 'a', text: 'To passively copy traffic for inspection without affecting the network.' },
      { id: 'b', text: 'To provide power to switches.' },
      { id: 'c', text: 'To manage wireless channels.' },
      { id: 'd', text: 'To store backups.' },
    ],
    correct: ['a'],
    explanation:
      'A TAP creates a passive copy of network traffic for monitoring tools, providing visibility without introducing a point of failure into the live network.',
  },
  {
    id: 'cysa-so-104',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best response to repeated alert fatigue complaints.',
    difficulty: 'Medium',
    prompt:
      'Analysts report that a particular alert fires constantly and is almost always benign. Which action best addresses this?',
    choices: [
      { id: 'a', text: 'Review the rule, tune its logic, and document the expected behavior.' },
      { id: 'b', text: 'Delete all historical data.' },
      { id: 'c', text: 'Ignore all alerts forever.' },
      { id: 'd', text: 'Disable the entire SIEM.' },
    ],
    correct: ['a'],
    explanation:
      'The correct response is to analyze why the alert is noisy, tune the rule to reduce false positives, and document the change for future reference.',
  },
  {
    id: 'cysa-so-105',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of deception technology in detection.',
    difficulty: 'Medium',
    prompt:
      'Which description best defines deception technology such as honeypots and honey tokens?',
    choices: [
      { id: 'a', text: 'Decoy assets with no legitimate use that generate high-fidelity alerts when touched.' },
      { id: 'b', text: 'Tools that block all inbound traffic.' },
      { id: 'c', text: 'Backup power systems.' },
      { id: 'd', text: 'Printer management software.' },
    ],
    correct: ['a'],
    explanation:
      'Deception assets exist only to be attacked; any interaction is malicious by definition, producing very high-confidence alerts.',
  },
  {
    id: 'cysa-so-106',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating anomalous administrator activity.',
    difficulty: 'Medium',
    prompt:
      'An administrator account runs commands at 3 a.m. that no one can explain. Which data sources best reveal whether this is legitimate?',
    choices: [
      { id: 'a', text: 'Privileged access management logs, session recordings, and change tickets.' },
      { id: 'b', text: 'Printer ink levels.' },
      { id: 'c', text: 'Building temperature logs.' },
      { id: 'd', text: 'Mouse movement logs.' },
    ],
    correct: ['a'],
    explanation:
      'Privileged access tools record sessions and require ticket references, which together show exactly what was done and whether it was authorized.',
  },
  {
    id: 'cysa-so-107',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of log source coverage validation.',
    difficulty: 'Medium',
    prompt:
      'Why is it important to regularly validate that all expected log sources are still sending data to the SIEM?',
    choices: [
      { id: 'a', text: 'Silent logging failures create undetected coverage gaps.' },
      { id: 'b', text: 'It reduces the number of monitors.' },
      { id: 'c', text: 'It improves keyboard response time.' },
      { id: 'd', text: 'It increases printer speed.' },
    ],
    correct: ['a'],
    explanation:
      'A device that stops logging fails silently, leaving blind spots; regular validation ensures the SIEM still receives every expected source.',
  },
  {
    id: 'cysa-so-108',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the best practice for securing API keys in cloud environments.',
    difficulty: 'Hard',
    prompt:
      'A developer accidentally commits an API key to a public code repository. Which control would have best prevented the key from being used if stolen?',
    choices: [
      { id: 'a', text: 'Scoped, short-lived credentials stored in a managed secrets vault.' },
      { id: 'b', text: 'A longer password for the repository.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'Disabling the keyboard.' },
    ],
    correct: ['a'],
    explanation:
      'Scoped, vault-managed credentials limit what a stolen key can do and expire quickly, reducing the window and blast radius of exposure.',
  },
  {
    id: 'cysa-so-109',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations dashboard.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of a security operations dashboard?',
    choices: [
      { id: 'a', text: 'To provide situational awareness of the current threat landscape.' },
      { id: 'b', text: 'To manage printer supplies.' },
      { id: 'c', text: 'To control building lighting.' },
      { id: 'd', text: 'To schedule vacation time.' },
    ],
    correct: ['a'],
    explanation:
      'Operations dashboards aggregate key metrics and alerts so leadership and analysts can quickly understand the security posture at a glance.',
  },
  {
    id: 'cysa-so-110',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unpatched VPN concentrators.',
    difficulty: 'Medium',
    prompt:
      'A VPN concentrator has not been patched in 18 months and a new critical CVE is published. Which risk does this create?',
    choices: [
      { id: 'a', text: 'An unpatched internet-facing VPN is a high-value target for initial access.' },
      { id: 'b', text: 'It only affects internal printers.' },
      { id: 'c', text: 'It has no security impact.' },
      { id: 'd', text: 'It improves VPN performance.' },
    ],
    correct: ['a'],
    explanation:
      'Internet-facing VPN gateways are frequent initial-access targets; known unpatched vulnerabilities on them are actively exploited.',
  },
  {
    id: 'cysa-so-111',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting rogue devices.',
    difficulty: 'Medium',
    prompt:
      'An unknown device appears on the corporate network. Which combination of controls best identifies and locates it?',
    choices: [
      { id: 'a', text: 'Network access control logs and switch port mapping.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Screen brightness settings.' },
      { id: 'd', text: 'Mouse DPI settings.' },
    ],
    correct: ['a'],
    explanation:
      'NAC and switch port data reveal which physical port and VLAN the unknown device is connected to, enabling rapid location and isolation.',
  },
  {
    id: 'cysa-so-112',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a MITRE ATT&CK-based gap assessment.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of mapping existing detections to the MITRE ATT&CK framework?',
    choices: [
      { id: 'a', text: 'To identify which adversary techniques lack coverage.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'ATT&CK mapping reveals coverage gaps by showing which tactics and techniques have no corresponding detections, guiding improvement efforts.',
  },
  {
    id: 'cysa-so-113',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best response to a suspected beaconing host.',
    difficulty: 'Hard',
    prompt:
      'An internal host is beaconing to a known malicious domain. Which action should the analyst take first?',
    choices: [
      { id: 'a', text: 'Isolate the host and begin evidence collection.' },
      { id: 'b', text: 'Delete the host from the asset inventory.' },
      { id: 'c', text: 'Ignore the beaconing.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the host stops ongoing communication with the attacker while preserving the system for forensic analysis.',
  },
  {
    id: 'cysa-so-114',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of a runbook in security operations.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of a security operations runbook?',
    choices: [
      { id: 'a', text: 'To provide step-by-step procedures for handling common incident types.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building access badges.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Runbooks standardize responses to common scenarios, ensuring consistent and efficient handling even when senior staff are unavailable.',
  },
  {
    id: 'cysa-so-115',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select data sources for investigating suspicious PowerShell execution.',
    difficulty: 'Medium',
    prompt: 'Which two data sources together best reveal what a suspicious PowerShell process actually did?',
    choices: [
      { id: 'a', text: 'PowerShell script block logs and process creation events.' },
      { id: 'b', text: 'Printer queue depth and toner levels.' },
      { id: 'c', text: 'Monitor refresh rates and screen brightness.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Script block logging captures the decoded script content while process events show what the script launched together they reveal the full activity.',
  },
  {
    id: 'cysa-so-116',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a threat hunting hypothesis.',
    difficulty: 'Medium',
    prompt:
      'Why do threat hunters begin with a hypothesis before searching the environment?',
    choices: [
      { id: 'a', text: 'It focuses the search on specific adversary behaviors worth finding.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It makes monitors brighter.' },
      { id: 'd', text: 'It shortens keyboard cables.' },
    ],
    correct: ['a'],
    explanation:
      'A hypothesis derived from intelligence or observation directs the hunt toward meaningful patterns rather than random data review.',
  },
  {
    id: 'cysa-so-117',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize indicators of a compromised CI/CD pipeline.',
    difficulty: 'Hard',
    prompt:
      'A CI/CD server shows new scheduled tasks created by an unknown account and outbound connections to a foreign IP. Which conclusion is most supported?',
    choices: [
      { id: 'a', text: 'The pipeline may be compromised and producing malicious builds.' },
      { id: 'b', text: 'The server is working normally.' },
      { id: 'c', text: 'The printer is low on toner.' },
      { id: 'd', text: 'The keyboard needs cleaning.' },
    ],
    correct: ['a'],
    explanation:
      'Unauthorized tasks and unexpected egress from a build system suggest an attacker is abusing the pipeline to distribute malicious code.',
  },
  {
    id: 'cysa-so-118',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing cloud management consoles.',
    difficulty: 'Medium',
    prompt:
      'Which control most effectively protects cloud management console access?',
    choices: [
      { id: 'a', text: 'Multi-factor authentication combined with conditional access policies.' },
      { id: 'b', text: 'A longer username.' },
      { id: 'c', text: 'A brighter monitor.' },
      { id: 'd', text: 'A faster processor.' },
    ],
    correct: ['a'],
    explanation:
      'Cloud consoles control the entire environment so MFA and conditional access policies that restrict by location and device are essential protections.',
  },
  {
    id: 'cysa-so-119',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a network behavior anomaly detection system.',
    difficulty: 'Medium',
    prompt:
      'Network behavior anomaly detection (NBAD) is most valuable for finding which type of threat?',
    choices: [
      { id: 'a', text: 'Novel or insider threats that do not match known signatures.' },
      { id: 'b', text: 'Printer hardware failures.' },
      { id: 'c', text: 'Monitor dead pixels.' },
      { id: 'd', text: 'Keyboard wear.' },
    ],
    correct: ['a'],
    explanation:
      'NBAD baselines normal network behavior and flags deviations making it effective against novel attacks and insider misuse that evade signature tools.',
  },
  {
    id: 'cysa-so-120',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting DNS hijacking.',
    difficulty: 'Hard',
    prompt:
      'An attacker changes DNS records to redirect users to a malicious site. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring DNS record changes and comparing resolver responses across sources.' },
      { id: 'b', text: 'Blocking all DNS traffic.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Using a single DNS resolver.' },
    ],
    correct: ['a'],
    explanation:
      'Detecting unauthorized DNS changes requires monitoring record modifications and cross-checking responses to catch redirection attempts.',
  },
  {
    id: 'cysa-so-121',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of endpoint isolation in incident response.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of isolating an endpoint during incident response?',
    choices: [
      { id: 'a', text: 'To prevent the threat from spreading to other systems.' },
      { id: 'b', text: 'To speed up the computer.' },
      { id: 'c', text: 'To improve screen quality.' },
      { id: 'd', text: 'To reduce keyboard noise.' },
    ],
    correct: ['a'],
    explanation:
      'Isolation cuts the compromised host off from the network containing the incident while keeping the system running for analysis.',
  },
  {
    id: 'cysa-so-122',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the value of automated indicator sweeps.',
    difficulty: 'Medium',
    prompt:
      'Why do analysts run automated sweeps for indicators of compromise across all endpoints?',
    choices: [
      { id: 'a', text: 'To determine the full blast radius of a known-bad indicator.' },
      { id: 'b', text: 'To reduce the number of monitors.' },
      { id: 'c', text: 'To increase printer speed.' },
      { id: 'd', text: 'To manage keyboard layouts.' },
    ],
    correct: ['a'],
    explanation:
      'Sweeps answer the critical scope question: which systems have seen this indicator revealing how far an attacker has spread.',
  },
  {
    id: 'cysa-so-123',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating suspicious registry changes.',
    difficulty: 'Medium',
    prompt: 'Which two data sources together best reveal whether a registry change was malicious?',
    choices: [
      { id: 'a', text: 'Registry modification logs and process creation events.' },
      { id: 'b', text: 'Printer queue logs and toner levels.' },
      { id: 'c', text: 'Monitor refresh rates and screen brightness.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Registry logs show what changed and when while process events show which executable made the change together they establish attribution.',
  },
  {
    id: 'cysa-so-124',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security metrics program.',
    difficulty: 'Medium',
    prompt:
      'Why do mature security programs track and report metrics over time?',
    choices: [
      { id: 'a', text: 'To measure the effectiveness of security investments and guide improvement.' },
      { id: 'b', text: 'To reduce the number of employees.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'Metrics translate security activity into measurable outcomes allowing leaders to see trends justify spending and prioritize improvements.',
  },
  {
    id: 'cysa-so-125',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of excessive logging verbosity.',
    difficulty: 'Medium',
    prompt:
      'What is the primary risk of configuring all systems to their most verbose logging level?',
    choices: [
      { id: 'a', text: 'It can overwhelm storage and bury important events in noise.' },
      { id: 'b', text: 'It improves detection accuracy.' },
      { id: 'c', text: 'It reduces the need for analysts.' },
      { id: 'd', text: 'It shortens keyboard cables.' },
    ],
    correct: ['a'],
    explanation:
      'Excessive logging creates storage costs and alert noise making it harder to find meaningful events logging levels should match the value of each source.',
  },
  {
    id: 'cysa-so-126',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for investigating a suspected false positive.',
    difficulty: 'Medium',
    prompt:
      'An alert fires for behavior that the security team later confirms was legitimate administrative activity. Which follow-up is most appropriate?',
    choices: [
      { id: 'a', text: 'Document the event and tune the rule to reduce similar false positives.' },
      { id: 'b', text: 'Delete all historical alerts.' },
      { id: 'c', text: 'Disable all future alerts.' },
      { id: 'd', text: 'Ignore all alerts from that source.' },
    ],
    correct: ['a'],
    explanation:
      'Confirmed false positives should drive rule tuning and documentation so the team learns from them rather than simply dismissing them.',
  },
  {
    id: 'cysa-so-127',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a cloud security posture management tool.',
    difficulty: 'Medium',
    prompt:
      'Cloud security posture management (CSPM) tools primarily help organizations with which task?',
    choices: [
      { id: 'a', text: 'Continuously assessing cloud configurations against security baselines.' },
      { id: 'b', text: 'Managing physical server cooling.' },
      { id: 'c', text: 'Controlling building lighting.' },
      { id: 'd', text: 'Scheduling employee vacations.' },
    ],
    correct: ['a'],
    explanation:
      'CSPM continuously evaluates cloud resources against best-practice baselines identifying misconfigurations before attackers can exploit them.',
  },
  {
    id: 'cysa-so-128',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting cloud account hijacking.',
    difficulty: 'Hard',
    prompt:
      'An attacker obtains cloud console credentials through a phishing attack. Which combination of controls best limits the damage?',
    choices: [
      { id: 'a', text: 'Multi-factor authentication combined with conditional access and activity monitoring.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'MFA blocks simple credential reuse conditional access limits where logins succeed and monitoring detects anomalous activity that does get through.',
  },
  {
    id: 'cysa-so-129',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of a security information and event management system.',
    difficulty: 'Easy',
    prompt:
      'What is the primary function of a SIEM platform?',
    choices: [
      { id: 'a', text: 'To collect normalize and correlate logs for detection and investigation.' },
      { id: 'b', text: 'To replace all security analysts.' },
      { id: 'c', text: 'To manage building access.' },
      { id: 'd', text: 'To schedule printer maintenance.' },
    ],
    correct: ['a'],
    explanation:
      'SIEMs aggregate logs from across the environment normalize them into a common format and apply correlation rules to surface threats.',
  },
  {
    id: 'cysa-so-130',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of detection rule testing.',
    difficulty: 'Medium',
    prompt:
      'Why should detection rules be tested with simulated attacks before being deployed to production?',
    choices: [
      { id: 'a', text: 'To verify they fire correctly and do not generate excessive noise.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Testing confirms that a rule actually detects its target behavior and reveals whether it will overwhelm analysts with false positives.',
  },
  {
    id: 'cysa-so-131',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security orchestration playbook.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a SOAR playbook?',
    choices: [
      { id: 'a', text: 'To define automated or semi-automated response steps for specific alert types.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Playbooks codify response procedures into repeatable workflows ensuring consistent handling of common incidents with or without full automation.',
  },
  {
    id: 'cysa-so-132',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating lateral movement via SMB.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses SMB to move between Windows hosts. Which log combination best reveals this lateral movement?',
    choices: [
      { id: 'a', text: 'Windows Security logon events and network connection logs showing SMB sessions.' },
      { id: 'b', text: 'Printer queue logs and toner levels.' },
      { id: 'c', text: 'Monitor refresh rates and screen brightness.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'Lateral movement via SMB produces network logons and SMB connections between hosts which are visible in security and network logs together.',
  },
  {
    id: 'cysa-so-133',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing remote desktop access.',
    difficulty: 'Medium',
    prompt:
      'Which control best secures remote desktop protocol access to internal servers?',
    choices: [
      { id: 'a', text: 'Placing RDP behind a VPN with multi-factor authentication.' },
      { id: 'b', text: 'Using a longer password.' },
      { id: 'c', text: 'Enabling RDP on all workstations.' },
      { id: 'd', text: 'Disabling all logging.' },
    ],
    correct: ['a'],
    explanation:
      'RDP should never be directly exposed to the internet; placing it behind a VPN with MFA adds network-level and identity-level protection.',
  },
  {
    id: 'cysa-so-134',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a detection coverage matrix.',
    difficulty: 'Medium',
    prompt:
      'What does a detection coverage matrix primarily help an organization understand?',
    choices: [
      { id: 'a', text: 'Which threats have corresponding detections and where gaps exist.' },
      { id: 'b', text: 'How many printers are in the building.' },
      { id: 'c', text: 'The brightness of office monitors.' },
      { id: 'd', text: 'The layout of keyboard keys.' },
    ],
    correct: ['a'],
    explanation:
      'A coverage matrix maps adversary techniques to existing detections making it clear where the organization is blind and where to invest next.',
  },
  {
    id: 'cysa-so-135',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored IoT devices.',
    difficulty: 'Medium',
    prompt:
      'An organization deploys smart building sensors on the corporate network without security review. Which risk does this create?',
    choices: [
      { id: 'a', text: 'Unpatched IoT devices become entry points that bypass traditional security controls.' },
      { id: 'b', text: 'The building becomes too warm.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'IoT devices often lack patching and security features and are frequently compromised to gain a foothold inside the network.',
  },
  {
    id: 'cysa-so-136',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting credential dumping.',
    difficulty: 'Hard',
    prompt:
      'An attacker runs a tool that extracts password hashes from memory on a domain controller. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'EDR alerts on access to LSASS combined with process lineage showing the calling executable.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all inbound traffic.' },
    ],
    correct: ['a'],
    explanation:
      'Credential dumping tools access the LSASS process; EDR detects this access and lineage reveals the responsible executable.',
  },
  {
    id: 'cysa-so-137',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of a computer security incident response team.',
    difficulty: 'Easy',
    prompt:
      'What is the primary mission of a CSIRT?',
    choices: [
      { id: 'a', text: 'To prepare for respond to and recover from security incidents.' },
      { id: 'b', text: 'To manage printer fleets.' },
      { id: 'c', text: 'To control building lighting.' },
      { id: 'd', text: 'To schedule employee vacations.' },
    ],
    correct: ['a'],
    explanation:
      'A CSIRT provides structured capabilities for handling incidents from preparation through response and recovery.',
  },
  {
    id: 'cysa-so-138',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for handling a confirmed malware infection.',
    difficulty: 'Medium',
    prompt:
      'A workstation is confirmed to be infected with malware. Which action sequence is most appropriate?',
    choices: [
      { id: 'a', text: 'Contain the host collect evidence eradicate the malware and recover.' },
      { id: 'b', text: 'Reformat immediately and do nothing else.' },
      { id: 'c', text: 'Ignore it and hope it goes away.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'The incident response lifecycle contains first to stop spread then preserves evidence for analysis before removing the threat and restoring service.',
  },
  {
    id: 'cysa-so-139',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a threat intelligence platform.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a threat intelligence platform (TIP)?',
    choices: [
      { id: 'a', text: 'To aggregate enrich and distribute threat intelligence across the organization.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building access badges.' },
      { id: 'd', text: 'To schedule printer maintenance.' },
    ],
    correct: ['a'],
    explanation:
      'TIPs collect intelligence from multiple sources enrich it with context and push it to the tools that need it for detection and response.',
  },
  {
    id: 'cysa-so-140',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected ARP spoofing attack.',
    difficulty: 'Hard',
    prompt:
      'Users report intermittent connectivity issues and duplicate IP warnings appear. Which log source best confirms ARP spoofing?',
    choices: [
      { id: 'a', text: 'Switch ARP tables and DHCP snooping logs.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Monitor refresh rates.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'ARP spoofing shows up as rapid changes in switch ARP tables and inconsistent MAC-to-IP mappings which DHCP snooping logs can confirm.',
  },
  {
    id: 'cysa-so-141',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of secure administrative workstations.',
    difficulty: 'Medium',
    prompt:
      'Why do organizations provide hardened administrative workstations for privileged tasks?',
    choices: [
      { id: 'a', text: 'To reduce the attack surface exposed when performing privileged operations.' },
      { id: 'b', text: 'To reduce the number of monitors.' },
      { id: 'c', text: 'To increase printer speed.' },
      { id: 'd', text: 'To manage keyboard layouts.' },
    ],
    correct: ['a'],
    explanation:
      'Hardened admin workstations have minimal software and strict controls so credentials used on them are less likely to be captured by malware.',
  },
  {
    id: 'cysa-so-142',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a data classification scheme.',
    difficulty: 'Medium',
    prompt:
      'How does data classification support security monitoring?',
    choices: [
      { id: 'a', text: 'It prioritizes monitoring and protection efforts based on data sensitivity.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Classification labels data by sensitivity allowing security teams to focus monitoring and controls on the assets that matter most.',
  },
  {
    id: 'cysa-so-143',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting insider threats.',
    difficulty: 'Hard',
    prompt:
      'An employee with legitimate access begins accessing files outside their job role. Which combination of controls best detects this?',
    choices: [
      { id: 'a', text: 'User behavior analytics combined with access audit logs.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Insider misuse of legitimate access is best detected by behavioral anomalies compared against baseline and audit logs showing the actual access.',
  },
  {
    id: 'cysa-so-144',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing service accounts.',
    difficulty: 'Medium',
    prompt:
      'Which practice best secures domain service accounts?',
    choices: [
      { id: 'a', text: 'Use managed service accounts with automatic password rotation.' },
      { id: 'b', text: 'Share the password with the entire team.' },
      { id: 'c', text: 'Disable all logging for the account.' },
      { id: 'd', text: 'Use the same password for all service accounts.' },
    ],
    correct: ['a'],
    explanation:
      'Managed service accounts rotate automatically and have limited scope reducing the risk of credential theft and misuse.',
  },
  {
    id: 'cysa-so-145',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security awareness program.',
    difficulty: 'Easy',
    prompt:
      'What is the primary goal of a security awareness program?',
    choices: [
      { id: 'a', text: 'To reduce human-related security incidents through education.' },
      { id: 'b', text: 'To replace all technical controls.' },
      { id: 'c', text: 'To manage printer fleets.' },
      { id: 'd', text: 'To control building lighting.' },
    ],
    correct: ['a'],
    explanation:
      'Awareness programs teach employees to recognize and report threats reducing the likelihood that social engineering and human error cause incidents.',
  },
  {
    id: 'cysa-so-146',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the value of cross-team information sharing.',
    difficulty: 'Medium',
    prompt:
      'Why should the security operations center share threat information with the vulnerability management team?',
    choices: [
      { id: 'a', text: 'Active threat context helps prioritize which vulnerabilities to patch first.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'Sharing threat intelligence about active exploitation lets vulnerability management prioritize patches for the vulnerabilities being exploited right now.',
  },
  {
    id: 'cysa-so-147',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for investigating suspicious outbound HTTPS traffic.',
    difficulty: 'Hard',
    prompt:
      'A server begins making outbound HTTPS connections to a domain with a poor reputation. Which investigation step is most appropriate first?',
    choices: [
      { id: 'a', text: 'Review DNS logs and proxy records to determine what initiated the connections.' },
      { id: 'b', text: 'Shut down the entire network.' },
      { id: 'c', text: 'Delete all logs.' },
      { id: 'd', text: 'Ignore the traffic.' },
    ],
    correct: ['a'],
    explanation:
      'Before taking containment action the analyst should understand what is making the connections by reviewing DNS and proxy logs for context.',
  },
  {
    id: 'cysa-so-148',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a detection engineering team.',
    difficulty: 'Medium',
    prompt:
      'What is the primary responsibility of a detection engineering team?',
    choices: [
      { id: 'a', text: 'To design implement and maintain detection logic and use cases.' },
      { id: 'b', text: 'To manage printer fleets.' },
      { id: 'c', text: 'To control building lighting.' },
      { id: 'd', text: 'To schedule employee vacations.' },
    ],
    correct: ['a'],
    explanation:
      'Detection engineers build and maintain the rules correlation logic and use cases that power threat detection across the environment.',
  },
  {
    id: 'cysa-so-149',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best practice for handling alert documentation.',
    difficulty: 'Medium',
    prompt:
      'Why should analysts document their investigation steps and findings for every alert?',
    choices: [
      { id: 'a', text: 'Documentation enables knowledge transfer and supports future investigations and audits.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'Documentation captures what was done and found enabling other analysts to learn from it and providing evidence for audits and legal proceedings.',
  },
  {
    id: 'cysa-so-150',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the role of a purple team in detection improvement.',
    difficulty: 'Medium',
    prompt:
      'How does purple teaming improve an organization detection capabilities?',
    choices: [
      { id: 'a', text: 'It validates detections through realistic attack simulations and drives improvements.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Purple team exercises test whether detections fire during realistic attacks and the findings drive concrete improvements to detection coverage.',
  },
  {
    id: 'cysa-so-151',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting brute-force attacks against web applications.',
    difficulty: 'Hard',
    prompt:
      'An attacker attempts thousands of password combinations against a web login form. Which combination of controls best detects and blocks this?',
    choices: [
      { id: 'a', text: 'Rate limiting combined with account lockout and WAF rules.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Web brute force is stopped by rate limiting and account lockout at the application layer with WAF rules providing additional pattern-based blocking.',
  },
  {
    id: 'cysa-so-152',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of log integrity verification.',
    difficulty: 'Medium',
    prompt:
      'Why is it important to verify the integrity of security logs?',
    choices: [
      { id: 'a', text: 'To ensure logs have not been altered by an attacker attempting to hide activity.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Attackers often alter or delete logs to cover their tracks; integrity verification ensures the logs remain trustworthy evidence.',
  },
  {
    id: 'cysa-so-153',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations runbook automation.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of automating runbook steps?',
    choices: [
      { id: 'a', text: 'It reduces response time and ensures consistency for repetitive tasks.' },
      { id: 'b', text: 'It replaces all security analysts.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'Automating repetitive runbook steps speeds up response and eliminates human error in well-defined procedures.',
  },
  {
    id: 'cysa-so-154',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected DNS amplification attack.',
    difficulty: 'Hard',
    prompt:
      'The organization DNS server is used to amplify a DDoS attack against a third party. Which log source best reveals this abuse?',
    choices: [
      { id: 'a', text: 'DNS query logs showing large responses to spoofed source addresses.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Monitor refresh rates.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'DNS amplification shows up as large DNS responses sent to spoofed source IPs in the query logs revealing the abuse pattern.',
  },
  {
    id: 'cysa-so-155',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing privileged access.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures privileged access to critical systems?',
    choices: [
      { id: 'a', text: 'Just-in-time elevation with session recording and automatic password rotation.' },
      { id: 'b', text: 'Share admin passwords in a spreadsheet.' },
      { id: 'c', text: 'Disable all logging.' },
      { id: 'd', text: 'Use the same password for all admins.' },
    ],
    correct: ['a'],
    explanation:
      'Just-in-time elevation limits when privileges exist session recording provides accountability and rotation reduces the value of stolen credentials.',
  },
  {
    id: 'cysa-so-156',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations metrics dashboard.',
    difficulty: 'Easy',
    prompt:
      'What does a security operations metrics dashboard primarily help leaders understand?',
    choices: [
      { id: 'a', text: 'The efficiency and effectiveness of security operations over time.' },
      { id: 'b', text: 'How many printers are in the building.' },
      { id: 'c', text: 'The brightness of office monitors.' },
      { id: 'd', text: 'The layout of keyboard keys.' },
    ],
    correct: ['a'],
    explanation:
      'Metrics dashboards translate operational data into trends that help leaders assess performance and make informed investment decisions.',
  },
  {
    id: 'cysa-so-157',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored administrative shares.',
    difficulty: 'Medium',
    prompt:
      'Why are hidden administrative shares like C$ a security concern?',
    choices: [
      { id: 'a', text: 'They allow authenticated users to access any folder on a host enabling lateral movement.' },
      { id: 'b', text: 'They improve printer performance.' },
      { id: 'c', text: 'They reduce the need for passwords.' },
      { id: 'd', text: 'They have no security impact.' },
    ],
    correct: ['a'],
    explanation:
      'Administrative shares give any authenticated user access to folders on a host making them a common lateral movement pathway for attackers.',
  },
  {
    id: 'cysa-so-158',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting session hijacking.',
    difficulty: 'Hard',
    prompt:
      'An attacker steals a user session cookie and uses it to access the application without credentials. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for session use from new locations or devices combined with impossible travel detection.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Session hijacking is detected by noticing that a session token suddenly appears from a new location or device which behavioral monitoring and impossible travel rules catch.',
  },
  {
    id: 'cysa-so-159',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations center.',
    difficulty: 'Easy',
    prompt:
      'What is the primary function of a security operations center (SOC)?',
    choices: [
      { id: 'a', text: 'To monitor detect and respond to security threats across the organization.' },
      { id: 'b', text: 'To manage printer fleets.' },
      { id: 'c', text: 'To control building lighting.' },
      { id: 'd', text: 'To schedule employee vacations.' },
    ],
    correct: ['a'],
    explanation:
      'A SOC provides continuous monitoring detection and response capabilities to protect the organization from cyber threats.',
  },
  {
    id: 'cysa-so-160',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored cloud storage buckets.',
    difficulty: 'Medium',
    prompt:
      'A cloud storage bucket is accidentally configured with public read access. Which risk does this create?',
    choices: [
      { id: 'a', text: 'Sensitive data may be accessed by anyone on the internet.' },
      { id: 'b', text: 'The bucket becomes faster.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Public read access allows anyone to download the contents of the bucket making it a common cause of data breaches.',
  },
  {
    id: 'cysa-so-161',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting rogue access points.',
    difficulty: 'Medium',
    prompt:
      'An unauthorized wireless access point appears on the corporate network. Which detection method is most effective?',
    choices: [
      { id: 'a', text: 'Wireless intrusion detection systems and periodic wireless scans.' },
      { id: 'b', text: 'Printer management software.' },
      { id: 'c', text: 'Screen brightness settings.' },
      { id: 'd', text: 'Mouse DPI settings.' },
    ],
    correct: ['a'],
    explanation:
      'WIDS and regular wireless scans detect unauthorized access points by identifying rogue SSIDs and MAC addresses on the network.',
  },
  {
    id: 'cysa-so-162',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a threat intelligence feed.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of a threat intelligence feed?',
    choices: [
      { id: 'a', text: 'To provide current information about known threats and indicators.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building access badges.' },
      { id: 'd', text: 'To schedule printer maintenance.' },
    ],
    correct: ['a'],
    explanation:
      'Threat intelligence feeds deliver up-to-date information about active threats indicators and adversary behavior to improve detection and response.',
  },
  {
    id: 'cysa-so-163',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best response to a confirmed data breach.',
    difficulty: 'Hard',
    prompt:
      'A data breach is confirmed and sensitive customer information has been exfiltrated. Which action should the incident response team take first?',
    choices: [
      { id: 'a', text: 'Contain the breach to prevent further data loss.' },
      { id: 'b', text: 'Delete all evidence.' },
      { id: 'c', text: 'Ignore the breach.' },
      { id: 'd', text: 'Shut down the entire company.' },
    ],
    correct: ['a'],
    explanation:
      'Containment is the first priority in a confirmed breach to stop additional data loss before evidence collection and recovery begin.',
  },
  {
    id: 'cysa-so-164',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting insider data exfiltration.',
    difficulty: 'Hard',
    prompt:
      'An employee with legitimate access begins uploading large volumes of sensitive files to a personal cloud storage account. Which combination of controls best detects this?',
    choices: [
      { id: 'a', text: 'User behavior analytics combined with egress DLP and cloud access security broker logs.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Insider exfiltration requires behavioral analytics to spot the anomaly DLP to see the data movement and CASB logs to identify the unsanctioned cloud destination.',
  },
  {
    id: 'cysa-so-165',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security information and event management correlation rule.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a SIEM correlation rule?',
    choices: [
      { id: 'a', text: 'To detect patterns across multiple log sources that indicate a threat.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Correlation rules analyze events from multiple sources to identify patterns that indicate a security threat which no single log source would reveal alone.',
  },
  {
    id: 'cysa-so-166',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of network traffic baselines.',
    difficulty: 'Medium',
    prompt:
      'Why is establishing a network traffic baseline important for anomaly detection?',
    choices: [
      { id: 'a', text: 'It provides a reference point to identify deviations from normal behavior.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'Anomaly detection requires knowing what normal looks like so that deviations indicating potential threats can be identified and investigated.',
  },
  {
    id: 'cysa-so-167',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected man-in-the-middle attack.',
    difficulty: 'Hard',
    prompt:
      'Users report that their secure web sessions are being intercepted. Which log source best reveals a man-in-the-middle attack?',
    choices: [
      { id: 'a', text: 'Certificate transparency logs and TLS handshake anomalies.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Monitor refresh rates.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'MITM attacks often involve fraudulent certificates; certificate transparency logs and TLS anomalies reveal unauthorized certificate use.',
  },
  {
    id: 'cysa-so-168',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations automation platform.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of a security orchestration automation and response (SOAR) platform?',
    choices: [
      { id: 'a', text: 'It automates repetitive tasks and orchestrates response across multiple tools.' },
      { id: 'b', text: 'It replaces all security analysts.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'SOAR platforms integrate with multiple security tools to automate repetitive response tasks and orchestrate complex workflows reducing response times.',
  },
  {
    id: 'cysa-so-169',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing API endpoints.',
    difficulty: 'Medium',
    prompt:
      'Which control most effectively secures API endpoints against unauthorized access?',
    choices: [
      { id: 'a', text: 'OAuth 2.0 with scoped tokens and rate limiting.' },
      { id: 'b', text: 'A longer API endpoint URL.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'OAuth 2.0 provides secure token-based authentication with scoped permissions while rate limiting prevents abuse and brute-force attacks.',
  },
  {
    id: 'cysa-so-170',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unpatched internet-facing applications.',
    difficulty: 'Medium',
    prompt:
      'An internet-facing web application has not been patched in over a year. Which risk does this create?',
    choices: [
      { id: 'a', text: 'Known vulnerabilities can be exploited by attackers to gain initial access.' },
      { id: 'b', text: 'The application becomes faster.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Unpatched internet-facing applications are prime targets for attackers who actively scan for and exploit known vulnerabilities.',
  },
  {
    id: 'cysa-so-171',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting credential stuffing attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses lists of compromised credentials from other breaches to attempt logins against your application. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for high volumes of failed logins from distributed sources with valid username patterns.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Credential stuffing is characterized by many failed logins from different sources using real username patterns which behavioral monitoring can detect.',
  },
  {
    id: 'cysa-so-172',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations maturity model.',
    difficulty: 'Medium',
    prompt:
      'What does a security operations maturity model primarily help an organization assess?',
    choices: [
      { id: 'a', text: 'The current capabilities and effectiveness of security operations processes.' },
      { id: 'b', text: 'How many printers are in the building.' },
      { id: 'c', text: 'The brightness of office monitors.' },
      { id: 'd', text: 'The layout of keyboard keys.' },
    ],
    correct: ['a'],
    explanation:
      'Maturity models provide a framework for evaluating current capabilities and identifying areas for improvement in security operations.',
  },
  {
    id: 'cysa-so-173',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting DNS cache poisoning.',
    difficulty: 'Hard',
    prompt:
      'An attacker attempts to poison the DNS cache of a resolver to redirect users to malicious sites. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring DNS response anomalies and implementing DNSSEC validation.' },
      { id: 'b', text: 'Blocking all DNS traffic.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Using a single DNS resolver.' },
    ],
    correct: ['a'],
    explanation:
      'DNS cache poisoning is detected by monitoring for anomalous DNS responses and prevented by DNSSEC which cryptographically validates DNS data.',
  },
  {
    id: 'cysa-so-174',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of incident response tabletop exercises.',
    difficulty: 'Medium',
    prompt:
      'Why should organizations conduct regular tabletop exercises for incident response?',
    choices: [
      { id: 'a', text: 'To test and improve response procedures and team coordination before a real incident.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Tabletop exercises simulate incidents in a low-stress environment allowing teams to practice procedures and identify gaps before a real event.',
  },
  {
    id: 'cysa-so-175',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations playbook.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of a security operations playbook?',
    choices: [
      { id: 'a', text: 'To provide documented procedures for responding to specific incident types.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Playbooks document step-by-step procedures for common incident types ensuring consistent and efficient response across the team.',
  },
  {
    id: 'cysa-so-176',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected SQL injection attack.',
    difficulty: 'Hard',
    prompt:
      'A web application begins returning unexpected database errors and unusual query results. Which log source best reveals a SQL injection attack?',
    choices: [
      { id: 'a', text: 'Web application firewall logs and database query logs.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Monitor refresh rates.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'SQL injection attempts are captured by WAF rules and database query logs showing the malicious queries that were executed.',
  },
  {
    id: 'cysa-so-177',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing containerized environments.',
    difficulty: 'Medium',
    prompt:
      'Which control most effectively secures containerized workloads?',
    choices: [
      { id: 'a', text: 'Image scanning runtime monitoring and network segmentation for containers.' },
      { id: 'b', text: 'A longer container name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Container security requires scanning images for vulnerabilities monitoring runtime behavior and segmenting container networks to limit lateral movement.',
  },
  {
    id: 'cysa-so-178',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations runbook.',
    difficulty: 'Easy',
    prompt:
      'What is the difference between a playbook and a runbook in security operations?',
    choices: [
      { id: 'a', text: 'A playbook defines what to do while a runbook provides the detailed steps to do it.' },
      { id: 'b', text: 'There is no difference.' },
      { id: 'c', text: 'A playbook is for printers and a runbook is for computers.' },
      { id: 'd', text: 'A playbook is longer than a runbook.' },
    ],
    correct: ['a'],
    explanation:
      'Playbooks define the strategy and decision points for handling incidents while runbooks provide the detailed technical steps to execute the response.',
  },
  {
    id: 'cysa-so-179',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored serverless functions.',
    difficulty: 'Medium',
    prompt:
      'An organization deploys serverless functions without security review. Which risk does this create?',
    choices: [
      { id: 'a', text: 'Serverless functions can be abused for cryptomining or data exfiltration if compromised.' },
      { id: 'b', text: 'The functions become faster.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Serverless functions execute code in response to events and if compromised can be abused for cryptomining data theft or as C2 infrastructure.',
  },
  {
    id: 'cysa-so-180',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting cross-site scripting attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker injects malicious scripts into a web application that execute in users browsers. Which combination of controls best detects and prevents this?',
    choices: [
      { id: 'a', text: 'Web application firewall rules combined with input validation and output encoding.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'XSS is prevented by input validation and output encoding at the application layer with WAF rules providing defense in depth.',
  },
  {
    id: 'cysa-so-181',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations metrics program.',
    difficulty: 'Medium',
    prompt:
      'Why do mature security programs track metrics such as mean time to detect and mean time to respond?',
    choices: [
      { id: 'a', text: 'To measure and improve the efficiency of security operations over time.' },
      { id: 'b', text: 'To reduce the number of employees.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer supplies.' },
    ],
    correct: ['a'],
    explanation:
      'MTTD and MTTR provide objective measures of operational efficiency enabling teams to identify bottlenecks and track improvement.',
  },
  {
    id: 'cysa-so-182',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for investigating a suspected ransomware infection.',
    difficulty: 'Hard',
    prompt:
      'Files on a workstation are being encrypted and a ransom note appears. Which investigation step is most appropriate first?',
    choices: [
      { id: 'a', text: 'Isolate the host and capture memory and disk images before the system is rebooted.' },
      { id: 'b', text: 'Reformat the workstation immediately.' },
      { id: 'c', text: 'Delete the ransom note.' },
      { id: 'd', text: 'Ignore the infection.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the host stops the spread while capturing memory and disk images preserves evidence of the ransomware and its behavior for analysis.',
  },
  {
    id: 'cysa-so-183',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected privilege escalation attack.',
    difficulty: 'Hard',
    prompt:
      'A low-privilege user account suddenly begins performing administrative actions. Which log combination best reveals the privilege escalation?',
    choices: [
      { id: 'a', text: 'Windows Security privilege-use events and process creation logs.' },
      { id: 'b', text: 'Printer queue logs and toner levels.' },
      { id: 'c', text: 'Monitor refresh rates and screen brightness.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'Privilege escalation produces new privilege-use events and elevated process creations which together show how the account gained administrative access.',
  },
  {
    id: 'cysa-so-184',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations threat hunting program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary goal of a threat hunting program?',
    choices: [
      { id: 'a', text: 'To proactively search for threats that evade existing detections.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Threat hunting proactively searches for adversaries that have bypassed existing defenses rather than waiting for alerts to fire.',
  },
  {
    id: 'cysa-so-185',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations documentation.',
    difficulty: 'Easy',
    prompt:
      'Why is thorough documentation important in security operations?',
    choices: [
      { id: 'a', text: 'It ensures knowledge is preserved and enables consistent response across the team.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Documentation preserves institutional knowledge ensures consistent procedures and supports audits and legal requirements.',
  },
  {
    id: 'cysa-so-186',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting fileless malware.',
    difficulty: 'Hard',
    prompt:
      'Malware that operates entirely in memory without writing files to disk is difficult to detect. Which approach is most effective?',
    choices: [
      { id: 'a', text: 'Memory scanning and behavioral analysis of running processes.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Fileless malware leaves no file signatures so detection requires memory scanning and behavioral analysis of process activity.',
  },
  {
    id: 'cysa-so-187',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations incident classification scheme.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of classifying incidents by severity?',
    choices: [
      { id: 'a', text: 'To prioritize response efforts and allocate resources effectively.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Severity classification ensures that the most critical incidents receive immediate attention and resources are allocated based on business impact.',
  },
  {
    id: 'cysa-so-188',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing mobile devices.',
    difficulty: 'Medium',
    prompt:
      'Which control most effectively secures corporate data on employee mobile devices?',
    choices: [
      { id: 'a', text: 'Mobile device management with containerization and remote wipe capability.' },
      { id: 'b', text: 'A longer device name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger screen.' },
    ],
    correct: ['a'],
    explanation:
      'MDM provides centralized control over mobile devices including containerization to separate corporate data and remote wipe for lost or stolen devices.',
  },
  {
    id: 'cysa-so-189',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected cross-site request forgery attack.',
    difficulty: 'Hard',
    prompt:
      'Users report unauthorized actions taken on their behalf without their knowledge. Which log source best reveals a CSRF attack?',
    choices: [
      { id: 'a', text: 'Web application logs showing state-changing requests without valid tokens.' },
      { id: 'b', text: 'Printer queue logs.' },
      { id: 'c', text: 'Monitor refresh rates.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'CSRF attacks exploit authenticated sessions to perform unauthorized actions; web logs show state-changing requests lacking valid anti-CSRF tokens.',
  },
  {
    id: 'cysa-so-190',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations vulnerability disclosure program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a vulnerability disclosure program?',
    choices: [
      { id: 'a', text: 'To provide a structured way for external researchers to report security issues.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'VDPs provide clear channels and policies for external researchers to report vulnerabilities responsibly before they are exploited.',
  },
  {
    id: 'cysa-so-191',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored third-party integrations.',
    difficulty: 'Medium',
    prompt:
      'A third-party integration is added to the corporate environment without security review. Which risk does this create?',
    choices: [
      { id: 'a', text: 'The integration may introduce vulnerabilities or provide an attacker with a backdoor.' },
      { id: 'b', text: 'The integration improves security.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Third-party integrations expand the attack surface and if compromised can provide attackers with a trusted pathway into the environment.',
  },
  {
    id: 'cysa-so-192',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting distributed denial-of-service attacks.',
    difficulty: 'Hard',
    prompt:
      'The organization website becomes unresponsive due to a massive volume of traffic from thousands of sources. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Traffic analysis showing distributed sources with similar request patterns.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'DDoS attacks are characterized by high-volume traffic from many distributed sources with similar patterns which traffic analysis can identify.',
  },
  {
    id: 'cysa-so-193',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations continuous improvement program.',
    difficulty: 'Medium',
    prompt:
      'Why is continuous improvement important in security operations?',
    choices: [
      { id: 'a', text: 'Threats evolve constantly and security processes must adapt to remain effective.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'The threat landscape changes constantly; continuous improvement ensures that security processes and controls evolve to address new threats.',
  },
  {
    id: 'cysa-so-194',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing Internet of Things devices.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures IoT devices on the corporate network?',
    choices: [
      { id: 'a', text: 'Network segmentation placing IoT devices on isolated VLANs with restricted access.' },
      { id: 'b', text: 'A longer device name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger screen.' },
    ],
    correct: ['a'],
    explanation:
      'IoT devices often lack security features; network segmentation isolates them so that a compromise cannot be used to reach critical systems.',
  },
  {
    id: 'cysa-so-195',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting buffer overflow attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker exploits a buffer overflow vulnerability in a network service. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Intrusion detection systems with protocol anomaly detection and memory protection mechanisms.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Buffer overflows exploit memory corruption; IDS with protocol anomaly detection and memory protection mechanisms like DEP and ASLR provide defense in depth.',
  },
  {
    id: 'cysa-so-196',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations knowledge management system.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a knowledge management system in security operations?',
    choices: [
      { id: 'a', text: 'To capture and share institutional knowledge and lessons learned.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Knowledge management systems preserve lessons learned and institutional knowledge ensuring that valuable experience is not lost when staff leave.',
  },
  {
    id: 'cysa-so-197',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations training.',
    difficulty: 'Easy',
    prompt:
      'Why is ongoing training important for security operations staff?',
    choices: [
      { id: 'a', text: 'The threat landscape evolves and staff must stay current with new techniques and tools.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Continuous training ensures that security staff maintain the skills needed to detect and respond to evolving threats and new technologies.',
  },
  {
    id: 'cysa-so-198',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected zero-day exploit.',
    difficulty: 'Hard',
    prompt:
      'A previously unknown vulnerability is being exploited in the wild. Which investigation approach is most appropriate?',
    choices: [
      { id: 'a', text: 'Behavioral analysis of affected systems combined with threat intelligence about the exploit.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Zero-day exploits have no signatures so detection relies on behavioral analysis of affected systems and threat intelligence about the new threat.',
  },
  {
    id: 'cysa-so-199',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations incident response retainer.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of maintaining an incident response retainer?',
    choices: [
      { id: 'a', text: 'It provides immediate access to expert incident response resources during a major incident.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'An IR retainer ensures that expert resources are available immediately during a major incident when internal teams may be overwhelmed.',
  },
  {
    id: 'cysa-so-200',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing bring-your-own-device environments.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures corporate data in a BYOD environment?',
    choices: [
      { id: 'a', text: 'Mobile application management with containerization and conditional access policies.' },
      { id: 'b', text: 'A longer device name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger screen.' },
    ],
    correct: ['a'],
    explanation:
      'BYOD security requires containerization to separate corporate data and conditional access policies to enforce security requirements before access is granted.',
  },
  {
    id: 'cysa-so-201',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting server-side request forgery attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker tricks a server into making requests to internal resources on their behalf. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for server-initiated requests to internal resources from user-supplied URLs.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'SSRF attacks cause servers to make requests to internal resources; monitoring for server-initiated requests to internal URLs from user input reveals the abuse.',
  },
  {
    id: 'cysa-so-202',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations threat modeling program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of threat modeling in security operations?',
    choices: [
      { id: 'a', text: 'To identify and prioritize potential threats before they are exploited.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Threat modeling systematically identifies potential threats and vulnerabilities allowing organizations to prioritize defenses before attackers find weaknesses.',
  },
  {
    id: 'cysa-so-203',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored shadow IT resources.',
    difficulty: 'Medium',
    prompt:
      'An employee deploys an unauthorized cloud service to store work files. Which risk does this create?',
    choices: [
      { id: 'a', text: 'Corporate data is stored outside the visibility and controls of the security team.' },
      { id: 'b', text: 'The service improves security.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Shadow IT operates outside sanctioned controls making data stored in it invisible to monitoring and unprotected by organizational security policies.',
  },
  {
    id: 'cysa-so-204',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting XML external entity injection attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker submits malicious XML that causes the server to disclose internal files. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Web application firewall rules combined with input validation and XML parser hardening.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'XXE attacks exploit XML parsers; WAF rules input validation and disabling external entity resolution in XML parsers provide layered defense.',
  },
  {
    id: 'cysa-so-205',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations purple team program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of a purple team program?',
    choices: [
      { id: 'a', text: 'It validates detections and improves security posture through collaborative attack and defense exercises.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Purple teaming brings red and blue teams together to validate detections and improve overall security posture through realistic exercises.',
  },
  {
    id: 'cysa-so-206',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing hybrid cloud environments.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures hybrid cloud environments?',
    choices: [
      { id: 'a', text: 'Consistent security policies and controls across on-premises and cloud resources.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Hybrid environments require consistent security policies across all resources to prevent gaps that attackers can exploit at the boundaries.',
  },
  {
    id: 'cysa-so-207',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting directory traversal attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses path traversal sequences to access files outside the web root. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Web application firewall rules combined with input validation and path canonicalization.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Directory traversal is prevented by input validation and path canonicalization with WAF rules providing additional pattern-based detection.',
  },
  {
    id: 'cysa-so-208',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations red team program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a red team program?',
    choices: [
      { id: 'a', text: 'To simulate real-world attacks and test the effectiveness of security controls.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'Red teams simulate adversary tactics to test whether security controls and detection capabilities can withstand realistic attacks.',
  },
  {
    id: 'cysa-so-209',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations center tier structure.',
    difficulty: 'Medium',
    prompt:
      'Why do security operations centers use a tiered analyst structure?',
    choices: [
      { id: 'a', text: 'To escalate complex incidents to more experienced analysts efficiently.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Tiered structures route alerts to appropriate skill levels ensuring that complex incidents reach experienced analysts while tier one handles routine triage.',
  },
  {
    id: 'cysa-so-210',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored DNS queries to dynamic DNS providers.',
    difficulty: 'Medium',
    prompt:
      'An internal host begins querying domains from a dynamic DNS provider known for abuse. Why is this concerning?',
    choices: [
      { id: 'a', text: 'Dynamic DNS is frequently used by attackers for command-and-control infrastructure.' },
      { id: 'b', text: 'It improves network performance.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Attackers use dynamic DNS to maintain resilient C2 infrastructure that is difficult to block; queries to these providers warrant investigation.',
  },
  {
    id: 'cysa-so-211',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting pass-the-ticket attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker steals Kerberos ticket-granting tickets and uses them to access resources without passwords. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for ticket use from new hosts combined with anomalous service access patterns.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Pass-the-ticket attacks reuse stolen tickets; detecting ticket use from new hosts and anomalous service access patterns reveals the abuse.',
  },
  {
    id: 'cysa-so-212',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations data retention policy.',
    difficulty: 'Medium',
    prompt:
      'Why is a data retention policy important for security operations?',
    choices: [
      { id: 'a', text: 'It ensures logs are available for investigations while managing storage costs.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Retention policies balance the need for historical data against storage costs ensuring logs are available when needed for investigations.',
  },
  {
    id: 'cysa-so-213',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best response to a confirmed account compromise.',
    difficulty: 'Medium',
    prompt:
      'A user account is confirmed to be compromised. Which action should the incident response team take first?',
    choices: [
      { id: 'a', text: 'Disable the account and revoke active sessions.' },
      { id: 'b', text: 'Delete the user email.' },
      { id: 'c', text: 'Ignore the compromise.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Disabling the account and revoking sessions immediately stops the attacker from using the compromised credentials while preserving evidence.',
  },
  {
    id: 'cysa-so-214',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting golden ticket attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker forges Kerberos ticket-granting tickets to gain domain-wide access. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for ticket anomalies and KRBTGT account changes combined with domain controller logs.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Golden ticket attacks forge TGTs; monitoring for ticket anomalies and KRBTGT account changes reveals the forged tickets and the attacker activity.',
  },
  {
    id: 'cysa-so-215',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations escalation procedure.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of an escalation procedure in security operations?',
    choices: [
      { id: 'a', text: 'To ensure incidents reach the appropriate level of expertise and authority.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Escalation procedures define when and how incidents are raised to higher tiers or management ensuring appropriate response to serious events.',
  },
  {
    id: 'cysa-so-216',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations shift handover procedures.',
    difficulty: 'Medium',
    prompt:
      'Why are structured shift handover procedures important in a SOC?',
    choices: [
      { id: 'a', text: 'They ensure continuity of investigations and awareness of ongoing incidents across shifts.' },
      { id: 'b', text: 'They reduce the number of computers.' },
      { id: 'c', text: 'They increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Structured handovers ensure that incoming analysts are aware of ongoing incidents and investigation status preventing gaps in coverage.',
  },
  {
    id: 'cysa-so-217',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best data for investigating a suspected pass-the-hash attack.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses captured NTLM hashes to authenticate without knowing the plaintext password. Which log combination best reveals this attack?',
    choices: [
      { id: 'a', text: 'Windows Security logon events showing network logons from unexpected hosts.' },
      { id: 'b', text: 'Printer queue logs and toner levels.' },
      { id: 'c', text: 'Monitor refresh rates and screen brightness.' },
      { id: 'd', text: 'Keyboard language settings.' },
    ],
    correct: ['a'],
    explanation:
      'Pass-the-hash produces network logons from unexpected hosts using the same account; security logon events reveal the anomalous authentication pattern.',
  },
  {
    id: 'cysa-so-218',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations quality assurance program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a quality assurance program in security operations?',
    choices: [
      { id: 'a', text: 'To ensure analysts follow procedures and maintain consistent investigation quality.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'QA programs review analyst work to ensure procedures are followed and investigations meet quality standards improving overall effectiveness.',
  },
  {
    id: 'cysa-so-219',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing privileged access workstations.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures privileged access workstations (PAWs)?',
    choices: [
      { id: 'a', text: 'Dedicated hardened devices used only for administrative tasks with no internet access.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'PAWs are dedicated hardened devices used only for administrative tasks reducing the attack surface exposed to credential theft.',
  },
  {
    id: 'cysa-so-220',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting silver ticket attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker forges service tickets to access specific services without domain admin rights. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for service ticket anomalies and unusual service access patterns.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Silver ticket attacks forge service tickets; monitoring for ticket anomalies and unusual service access patterns reveals the forged tickets.',
  },
  {
    id: 'cysa-so-221',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations incident severity matrix.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of an incident severity matrix?',
    choices: [
      { id: 'a', text: 'To standardize how incidents are classified and prioritized based on impact.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Severity matrices provide objective criteria for classifying incidents ensuring consistent prioritization and response across the organization.',
  },
  {
    id: 'cysa-so-222',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored service principal usage.',
    difficulty: 'Medium',
    prompt:
      'A cloud service principal begins accessing resources at unusual times. Why is this concerning?',
    choices: [
      { id: 'a', text: 'Service principals can be compromised and used to access cloud resources without user interaction.' },
      { id: 'b', text: 'It improves cloud performance.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Service principals authenticate non-interactively and if compromised provide attackers with persistent access to cloud resources.',
  },
  {
    id: 'cysa-so-223',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting diamond ticket attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker modifies legitimate Kerberos tickets to extend their privileges. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for ticket modifications and anomalous privilege escalations in domain logs.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Diamond ticket attacks modify legitimate tickets; monitoring for ticket modifications and anomalous privilege changes reveals the attack.',
  },
  {
    id: 'cysa-so-224',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations continuous monitoring program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary goal of continuous monitoring in security operations?',
    choices: [
      { id: 'a', text: 'To maintain real-time awareness of the security posture and detect threats promptly.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Continuous monitoring provides ongoing visibility into the security posture enabling prompt detection and response to threats.',
  },
  {
    id: 'cysa-so-225',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing just-in-time access.',
    difficulty: 'Medium',
    prompt:
      'Which approach best implements just-in-time privileged access?',
    choices: [
      { id: 'a', text: 'Granting temporary elevated privileges that expire after a defined period.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Just-in-time access grants privileges only when needed and for a limited time reducing the window of opportunity for credential abuse.',
  },
  {
    id: 'cysa-so-226',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting skeleton key attacks.',
    difficulty: 'Hard',
    prompt:
      'An attacker installs a skeleton key malware on a domain controller that accepts a master password. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring for authentication anomalies and domain controller integrity checks.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Skeleton key malware creates a master password bypass; monitoring for authentication anomalies and DC integrity checks reveals the compromise.',
  },
  {
    id: 'cysa-so-227',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations threat-informed defense strategy.',
    difficulty: 'Medium',
    prompt:
      'What is the primary benefit of a threat-informed defense strategy?',
    choices: [
      { id: 'a', text: 'It aligns security investments with the threats most likely to affect the organization.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Threat-informed defense prioritizes resources against the adversaries and techniques most relevant to the organization improving security ROI.',
  },
  {
    id: 'cysa-so-228',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations metrics reporting.',
    difficulty: 'Easy',
    prompt:
      'Why should security operations report metrics to leadership regularly?',
    choices: [
      { id: 'a', text: 'To demonstrate the value of security investments and guide strategic decisions.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Regular metrics reporting demonstrates security program value and provides leadership with data to make informed investment decisions.',
  },
  {
    id: 'cysa-so-229',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting malicious WMI activity.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses WMI to execute commands and move laterally between hosts. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring WMI process creation events and correlating with network connections.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'WMI execution creates processes and network connections; monitoring WMI process creation and correlating with network activity reveals the abuse.',
  },
  {
    id: 'cysa-so-230',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations incident response plan.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of an incident response plan?',
    choices: [
      { id: 'a', text: 'To provide a structured approach for responding to security incidents.' },
      { id: 'b', text: 'To replace all security tools.' },
      { id: 'c', text: 'To manage building lighting.' },
      { id: 'd', text: 'To schedule team lunches.' },
    ],
    correct: ['a'],
    explanation:
      'An IR plan defines roles responsibilities and procedures ensuring a coordinated and effective response to security incidents.',
  },
  {
    id: 'cysa-so-231',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing managed service provider access.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures managed service provider (MSP) access to the environment?',
    choices: [
      { id: 'a', text: 'Dedicated accounts with MFA session recording and time-bound access.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'MSP access requires dedicated accounts with MFA and session recording to maintain accountability and limit the blast radius of a compromise.',
  },
  {
    id: 'cysa-so-232',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting malicious scheduled task creation.',
    difficulty: 'Hard',
    prompt:
      'An attacker creates scheduled tasks to maintain persistence on compromised hosts. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring scheduled task creation events and correlating with process execution.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Scheduled task creation events reveal persistence mechanisms; correlating with process execution shows what the tasks actually run.',
  },
  {
    id: 'cysa-so-233',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations lessons learned process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a lessons learned process after an incident?',
    choices: [
      { id: 'a', text: 'To identify improvements and prevent similar incidents in the future.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Lessons learned processes capture what went well and what did not enabling continuous improvement of security operations.',
  },
  {
    id: 'cysa-so-234',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored PowerShell remoting.',
    difficulty: 'Medium',
    prompt:
      'An attacker uses PowerShell remoting to execute commands on multiple hosts. Why is this difficult to detect?',
    choices: [
      { id: 'a', text: 'PowerShell remoting uses legitimate administrative protocols that blend with normal activity.' },
      { id: 'b', text: 'It improves system performance.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'PowerShell remoting uses legitimate WinRM protocols making it difficult to distinguish from normal administrative activity without behavioral analysis.',
  },
  {
    id: 'cysa-so-235',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting malicious registry run key modifications.',
    difficulty: 'Hard',
    prompt:
      'An attacker adds registry run keys to maintain persistence. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring registry modifications to run keys and correlating with process execution.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Run key modifications reveal persistence mechanisms; correlating with process execution shows what the keys actually launch.',
  },
  {
    id: 'cysa-so-236',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations threat intelligence requirements process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of defining threat intelligence requirements?',
    choices: [
      { id: 'a', text: 'To ensure intelligence collection addresses the specific threats relevant to the organization.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Defining intelligence requirements ensures that collection and analysis focus on the threats and adversaries most relevant to the organization.',
  },
  {
    id: 'cysa-so-237',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing cloud workload identity.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures cloud workload identity?',
    choices: [
      { id: 'a', text: 'Workload identity with short-lived tokens and automatic rotation.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Workload identities should use short-lived tokens with automatic rotation to minimize the impact of credential theft.',
  },
  {
    id: 'cysa-so-238',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting malicious service installation.',
    difficulty: 'Hard',
    prompt:
      'An attacker installs malicious services on compromised hosts. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring service installation events and correlating with process execution and network connections.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Service installation events reveal persistence mechanisms; correlating with process execution and network connections shows the full attack chain.',
  },
  {
    id: 'cysa-so-239',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection engineering lifecycle.',
    difficulty: 'Medium',
    prompt:
      'What is the primary goal of the detection engineering lifecycle?',
    choices: [
      { id: 'a', text: 'To ensure detections remain effective as threats and environments evolve.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'The detection engineering lifecycle ensures that detection content is continuously validated tested and updated to maintain effectiveness.',
  },
  {
    id: 'cysa-so-240',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations data source onboarding.',
    difficulty: 'Medium',
    prompt:
      'Why is proper data source onboarding important for security operations?',
    choices: [
      { id: 'a', text: 'It ensures logs are parsed correctly and available for detection and investigation.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Proper onboarding ensures that logs are parsed normalized and indexed correctly making them usable for detection and investigation.',
  },
  {
    id: 'cysa-so-241',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting malicious WMI event subscription.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses WMI event subscriptions to maintain persistence. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring WMI event subscription creation and correlating with process execution.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'WMI event subscriptions create persistent event consumers; monitoring subscription creation and correlating with process execution reveals the persistence.',
  },
  {
    id: 'cysa-so-242',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection content management process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of managing detection content systematically?',
    choices: [
      { id: 'a', text: 'To track version control testing and deployment of detection rules.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Systematic management of detection content ensures rules are versioned tested and deployed consistently across the environment.',
  },
  {
    id: 'cysa-so-243',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing infrastructure as code pipelines.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures infrastructure as code (IaC) pipelines?',
    choices: [
      { id: 'a', text: 'Static analysis of templates combined with policy as code and secrets scanning.' },
      { id: 'b', text: 'A longer password.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'IaC security requires static analysis to catch misconfigurations policy as code to enforce standards and secrets scanning to prevent credential exposure.',
  },
  {
    id: 'cysa-so-244',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting malicious COM hijacking.',
    difficulty: 'Hard',
    prompt:
      'An attacker hijacks COM objects to execute malicious code. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring COM object registration changes and correlating with process execution.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'COM hijacking modifies registry entries for COM objects; monitoring registration changes and correlating with process execution reveals the abuse.',
  },
  {
    id: 'cysa-so-245',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection validation process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of validating detection rules?',
    choices: [
      { id: 'a', text: 'To confirm rules detect intended threats and do not generate excessive noise.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Validation confirms that detection rules work as intended catching real threats while minimizing false positives.',
  },
  {
    id: 'cysa-so-246',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored container escape attempts.',
    difficulty: 'Medium',
    prompt:
      'A container begins attempting to access the host operating system directly. Why is this concerning?',
    choices: [
      { id: 'a', text: 'Container escape attempts indicate an attacker is trying to break out to the host.' },
      { id: 'b', text: 'It improves container performance.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'Containers are isolated from the host; attempts to access the host OS directly indicate a container escape attempt that could compromise the host.',
  },
  {
    id: 'cysa-so-247',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting malicious DLL hijacking.',
    difficulty: 'Hard',
    prompt:
      'An attacker places a malicious DLL in a location that is searched before the legitimate one. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring DLL load events and verifying digital signatures of loaded modules.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'DLL hijacking loads malicious libraries; monitoring DLL load events and verifying signatures reveals unauthorized or unsigned modules.',
  },
  {
    id: 'cysa-so-248',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection coverage assessment.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of assessing detection coverage?',
    choices: [
      { id: 'a', text: 'To identify gaps where threats could go undetected.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Coverage assessments map existing detections to threat scenarios revealing gaps where the organization is blind to specific attacks.',
  },
  {
    id: 'cysa-so-249',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing serverless function triggers.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures serverless function triggers?',
    choices: [
      { id: 'a', text: 'Input validation combined with least-privilege execution roles and API authentication.' },
      { id: 'b', text: 'A longer function name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Serverless triggers require input validation to prevent injection least-privilege roles to limit blast radius and authentication to control access.',
  },
  {
    id: 'cysa-so-250',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting malicious Office macro execution.',
    difficulty: 'Hard',
    prompt:
      'An attacker uses malicious Office macros to execute payloads. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring macro execution events and correlating with process creation and network connections.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Macro execution creates child processes and network connections; monitoring macro events and correlating with process and network activity reveals the payload.',
  },
  {
    id: 'cysa-so-251',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection tuning process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of tuning detection rules?',
    choices: [
      { id: 'a', text: 'To reduce false positives while maintaining detection effectiveness.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Tuning adjusts rule thresholds and logic to reduce noise without sacrificing the ability to detect real threats.',
  },
  {
    id: 'cysa-so-252',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the importance of security operations data quality monitoring.',
    difficulty: 'Medium',
    prompt:
      'Why is monitoring data quality important for security operations?',
    choices: [
      { id: 'a', text: 'Poor data quality leads to missed detections and unreliable investigations.' },
      { id: 'b', text: 'It reduces the number of computers.' },
      { id: 'c', text: 'It increases monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Incomplete or malformed logs create blind spots; monitoring data quality ensures that detections and investigations have reliable data.',
  },
  {
    id: 'cysa-so-253',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select the best approach for detecting malicious PowerShell profile modifications.',
    difficulty: 'Hard',
    prompt:
      'An attacker modifies PowerShell profiles to execute code automatically. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring PowerShell profile modifications and correlating with script execution.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'PowerShell profile modifications create persistence; monitoring profile changes and correlating with script execution reveals the automatic execution.',
  },
  {
    id: 'cysa-so-254',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection retirement process.',
    difficulty: 'Medium',
    prompt:
    'Why should detection rules be retired systematically?',
    choices: [
      { id: 'a', text: 'To remove outdated rules that no longer apply and reduce maintenance burden.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Retiring outdated rules reduces maintenance burden and prevents confusion ensuring that the detection library remains relevant and manageable.',
  },
  {
    id: 'cysa-so-255',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Determine the best approach for securing cloud function triggers.',
    difficulty: 'Medium',
    prompt:
      'Which approach best secures cloud function triggers against abuse?',
    choices: [
      { id: 'a', text: 'Rate limiting combined with authentication and input validation.' },
      { id: 'b', text: 'A longer function name.' },
      { id: 'c', text: 'A faster processor.' },
      { id: 'd', text: 'A larger monitor.' },
    ],
    correct: ['a'],
    explanation:
      'Cloud function triggers require rate limiting to prevent abuse authentication to control access and input validation to prevent injection attacks.',
  },
  {
    id: 'cysa-so-256',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Select appropriate controls for detecting malicious browser extension installation.',
    difficulty: 'Hard',
    prompt:
      'An attacker distributes malicious browser extensions to steal session data. Which detection approach is most effective?',
    choices: [
      { id: 'a', text: 'Monitoring browser extension installations and correlating with network connections to suspicious domains.' },
      { id: 'b', text: 'Signature-based antivirus alone.' },
      { id: 'c', text: 'Disabling all logging.' },
      { id: 'd', text: 'Blocking all email.' },
    ],
    correct: ['a'],
    explanation:
      'Malicious extensions communicate with C2 servers; monitoring installations and correlating with network connections reveals the data theft.',
  },
  {
    id: 'cysa-so-257',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Identify the purpose of a security operations detection testing program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of regularly testing detection rules?',
    choices: [
      { id: 'a', text: 'To ensure rules continue to detect threats as environments and threats evolve.' },
      { id: 'b', text: 'To reduce the number of computers.' },
      { id: 'c', text: 'To increase monitor brightness.' },
      { id: 'd', text: 'To manage printer fleets.' },
    ],
    correct: ['a'],
    explanation:
      'Regular testing ensures that detection rules remain effective as the environment changes and new threats emerge preventing silent failures.',
  },
  {
    id: 'cysa-so-258',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Security Operations',
    objective: 'Recognize the risk of unmonitored API key usage.',
    difficulty: 'Medium',
    prompt:
      'An API key begins being used from unexpected locations. Why is this concerning?',
    choices: [
      { id: 'a', text: 'API keys can be stolen and used to access resources without user interaction.' },
      { id: 'b', text: 'It improves API performance.' },
      { id: 'c', text: 'Printer queues become shorter.' },
      { id: 'd', text: 'Keyboard life increases.' },
    ],
    correct: ['a'],
    explanation:
      'API keys provide direct access to resources; unexpected usage locations indicate the key may be stolen and used by an attacker.',
  },
]
