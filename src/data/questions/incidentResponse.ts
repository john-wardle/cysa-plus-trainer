import type { TrainingQuestion } from './index'

// Incident Response and Management questions (CS0-003 Domain 3)
// IDs continue from the original bank (cysa-ir-001..005)
export const incidentResponseQuestions: TrainingQuestion[] = [
  {
    id: 'cysa-ir-006',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the phases of the incident response lifecycle.',
    difficulty: 'Easy',
    prompt:
      'Which of the following correctly lists the phases of the incident response lifecycle in order?',
    choices: [
      { id: 'a', text: 'Preparation, detection and analysis, containment, eradication, recovery, and lessons learned.' },
      { id: 'b', text: 'Detection, containment, preparation, recovery, lessons learned, and eradication.' },
      { id: 'c', text: 'Containment, eradication, preparation, detection, lessons learned, and recovery.' },
      { id: 'd', text: 'Lessons learned, recovery, eradication, containment, detection, and preparation.' },
    ],
    correct: ['a'],
    explanation:
      'The standard incident response lifecycle begins with preparation, then proceeds through detection and analysis, containment, eradication, recovery, and concludes with lessons learned.',
  },
  {
    id: 'cysa-ir-007',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate containment strategies.',
    difficulty: 'Medium',
    prompt:
      'Ransomware is actively spreading across the network via SMB. Which containment action is most effective at limiting spread?',
    choices: [
      { id: 'a', text: 'Disable SMB on unaffected systems and isolate infected hosts.' },
      { id: 'b', text: 'Shut down the entire network.' },
      { id: 'c', text: 'Delete all shared folders.' },
      { id: 'd', text: 'Ignore the spread and focus on recovery.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating infected hosts and disabling the affected protocol on clean systems stops the spread while preserving the rest of the network for continued operation.',
  },
  {
    id: 'cysa-ir-008',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the correct order of volatility for evidence collection.',
    difficulty: 'Hard',
    prompt:
      'Which evidence source should be collected first when performing forensic collection on a live system?',
    choices: [
      { id: 'a', text: 'RAM and running processes.' },
      { id: 'b', text: 'Hard drive images.' },
      { id: 'c', text: 'Log files on the file system.' },
      { id: 'd', text: 'Registry hives.' },
    ],
    correct: ['a'],
    explanation:
      'The order of volatility runs from most volatile to least: cache, routing tables, ARP cache, kernel statistics, memory, temporary files, disks, and remote logs. RAM must be captured before power is lost.',
  },
  {
    id: 'cysa-ir-009',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate evidence handling practices.',
    difficulty: 'Medium',
    prompt:
      'Which practice best preserves the integrity of digital evidence during collection?',
    choices: [
      { id: 'a', text: 'Document the chain of custody and use write-blockers when imaging drives.' },
      { id: 'b', text: 'Browse through files on the live system to find evidence.' },
      { id: 'c', text: 'Copy only the files that appear relevant.' },
      { id: 'd', text: 'Use the suspect computer to browse the internet for research.' },
    ],
    correct: ['a'],
    explanation:
      'Maintaining chain of custody documentation and using write-blockers ensures evidence is unaltered and admissible, which is essential for any legal proceedings.',
  },
  {
    id: 'cysa-ir-010',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of a chain of custody form.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a chain of custody form in incident response?',
    choices: [
      { id: 'a', text: 'To document every person who handled the evidence and when.' },
      { id: 'b', text: 'To list all vulnerabilities on the affected system.' },
      { id: 'c', text: 'To record the IP addresses of attackers.' },
      { id: 'd', text: 'To track the time spent on the investigation.' },
    ],
    correct: ['a'],
    explanation:
      'Chain of custody documents who accessed evidence, when, and what was done with it, ensuring the evidence remains credible and admissible in legal proceedings.',
  },
  {
    id: 'cysa-ir-011',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best response to a confirmed phishing incident.',
    difficulty: 'Medium',
    prompt:
      'Multiple users report clicking a link in a phishing email and entering credentials. Which action should be taken first?',
    choices: [
      { id: 'a', text: 'Force a password reset for affected users and revoke active sessions.' },
      { id: 'b', text: 'Delete the phishing email from all mailboxes.' },
      { id: 'c', text: 'Block the sender email address.' },
      { id: 'd', text: 'Send a company-wide warning email.' },
    ],
    correct: ['a'],
    explanation:
      'The immediate priority is to prevent further credential abuse by resetting passwords and revoking sessions, then the phishing infrastructure can be addressed.',
  },
  {
    id: 'cysa-ir-012',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate eradication actions.',
    difficulty: 'Hard',
    prompt:
      'After containing a malware incident, which eradication action is most appropriate?',
    choices: [
      { id: 'a', text: 'Remove all identified malware, close attacker persistence mechanisms, and rebuild heavily compromised systems from known-good images.' },
      { id: 'b', text: 'Delete all user accounts on the affected systems.' },
      { id: 'c', text: 'Format all drives in the organization.' },
      { id: 'd', text: 'Ignore persistence mechanisms and focus only on removing the malware binary.' },
    ],
    correct: ['a'],
    explanation:
      'Thorough eradication removes the malware, eliminates persistence mechanisms such as scheduled tasks or registry run keys, and rebuilds systems that may have hidden compromises.',
  },
  {
    id: 'cysa-ir-013',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response retainer.',
    difficulty: 'Medium',
    prompt:
    'What is the primary benefit of maintaining an incident response retainer with a third-party firm?',
    choices: [
      { id: 'a', text: 'Immediate access to specialized expertise and resources during a major incident.' },
      { id: 'b', text: 'It eliminates the need for an internal incident response team.' },
      { id: 'c', text: 'It reduces cybersecurity insurance premiums.' },
      { id: 'd', text: 'It guarantees that no incidents will occur.' },
    ],
    correct: ['a'],
    explanation:
      'An incident response retainer ensures that specialized expertise and additional resources are immediately available when internal teams are overwhelmed by a major incident.',
  },
  {
    id: 'cysa-ir-014',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate recovery validation steps.',
    difficulty: 'Medium',
    prompt:
      'After eradicating malware and restoring systems, which validation step is most important before returning to normal operations?',
    choices: [
      { id: 'a', text: 'Verify that systems are functioning correctly, monitor for signs of recompromise, and confirm all persistence mechanisms have been removed.' },
      { id: 'b', text: 'Immediately reconnect all systems to the network.' },
      { id: 'c', text: 'Skip validation to restore productivity quickly.' },
      { id: 'd', text: 'Delete all logs related to the incident.' },
    ],
    correct: ['a'],
    explanation:
      'Recovery validation confirms that the threat is truly gone and systems are functioning properly; skipping this step risks reinfection from missed persistence mechanisms.',
  },
  {
    id: 'cysa-ir-015',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for post-incident lessons learned.',
    difficulty: 'Medium',
    prompt:
      'What is the primary goal of a post-incident lessons learned exercise?',
    choices: [
      { id: 'a', text: 'To identify what worked well, what did not, and how to improve future response.' },
      { id: 'b', text: 'To assign blame to individuals for mistakes made during the incident.' },
      { id: 'c', text: 'To delete all incident documentation.' },
      { id: 'd', text: 'To celebrate the end of the incident.' },
    ],
    correct: ['a'],
    explanation:
      'Lessons learned exercises focus on improving processes and capabilities rather than assigning blame, ensuring the organization is better prepared for future incidents.',
  },
  {
    id: 'cysa-ir-016',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators of compromise for threat hunting.',
    difficulty: 'Hard',
    prompt: 'Which two indicators are most valuable for proactively hunting threats that have bypassed existing detections?',
    choices: [
      { id: 'a', text: 'Anomalous process behavior and unusual network connections.' },
      { id: 'b', text: 'Failed login alerts and password reset requests.' },
      { id: 'c', text: 'Software update notifications and patch compliance reports.' },
      { id: 'd', text: 'User help desk tickets and printer queue alerts.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Threat hunting relies on behavioral indicators such as anomalous processes and unusual network connections that indicate activity not covered by existing detection rules.',
  },
  {
    id: 'cysa-ir-017',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response runbook.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of an incident response runbook?',
    choices: [
      { id: 'a', text: 'To provide step-by-step procedures for responding to specific incident types.' },
      { id: 'b', text: 'To replace the need for trained incident responders.' },
      { id: 'c', text: 'To document all past incidents.' },
      { id: 'd', text: 'To track employee attendance during incidents.' },
    ],
    correct: ['a'],
    explanation:
      'Runbooks provide detailed, repeatable procedures for specific incident types, enabling consistent and efficient response even when senior staff are unavailable.',
  },
  {
    id: 'cysa-ir-018',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best evidence collection approach for a live system.',
    difficulty: 'Hard',
    prompt:
      'Which collection approach is most appropriate when dealing with a running system that may contain valuable evidence in memory?',
    choices: [
      { id: 'a', text: 'Capture memory first, then collect volatile data such as running processes and network connections, before imaging the disk.' },
      { id: 'b', text: 'Shut down the system immediately and image the disk.' },
      { id: 'c', text: 'Reboot the system to clear memory and then collect evidence.' },
      { id: 'd', text: 'Disconnect the network cable and continue normal operations.' },
    ],
    correct: ['a'],
    explanation:
      'Memory is the most volatile evidence source; capturing it before any action that could alter it ensures critical forensic data such as running processes and encryption keys are preserved.',
  },
  {
    id: 'cysa-ir-019',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate communication practices during an incident.',
    difficulty: 'Medium',
    prompt:
      'Which communication practice is most appropriate during an active incident?',
    choices: [
      { id: 'a', text: 'Use out-of-band communication channels and limit incident details to authorized personnel on a need-to-know basis.' },
      { id: 'b', text: 'Post real-time updates on social media.' },
      { id: 'c', text: 'Email detailed technical findings to all employees.' },
      { id: 'd', text: 'Discuss the incident details in public channels.' },
    ],
    correct: ['a'],
    explanation:
      'Incident communications should use out-of-band channels to prevent compromise of communication tools, and details should be limited to prevent tipping off the attacker or causing unnecessary panic.',
  },
  {
    id: 'cysa-ir-020',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident severity classification scheme.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of classifying incidents by severity?',
    choices: [
      { id: 'a', text: 'To prioritize response efforts and allocate resources based on business impact.' },
      { id: 'b', text: 'To assign blame for the incident.' },
      { id: 'c', text: 'To determine which employees should be terminated.' },
      { id: 'd', text: 'To calculate cybersecurity insurance premiums.' },
    ],
    correct: ['a'],
    explanation:
      'Severity classification ensures that the most critical incidents receive immediate attention and resources are allocated proportionally to the business impact.',
  },
  {
    id: 'cysa-ir-021',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate forensic imaging tools and techniques.',
    difficulty: 'Hard',
    prompt:
      'Which technique ensures that a forensic disk image is an exact, unaltered copy of the original?',
    choices: [
      { id: 'a', text: 'Use a hardware write-blocker and compute hash values for both the source and the image.' },
      { id: 'b', text: 'Copy files using standard file copy commands.' },
      { id: 'c', text: 'Browse the drive and manually select relevant files.' },
      { id: 'd', text: 'Use the suspect system to create the image.' },
    ],
    correct: ['a'],
    explanation:
      'A hardware write-blocker prevents any writes to the source drive, and hash verification proves the image is bit-for-bit identical to the original.',
  },
  {
    id: 'cysa-ir-022',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best response to a data breach involving regulated data.',
    difficulty: 'Hard',
    prompt:
      'A breach exposes personally identifiable information (PII) of customers. Which action is most critical in the first 24 hours?',
    choices: [
      { id: 'a', text: 'Contain the breach, preserve evidence, and begin assessing notification obligations.' },
      { id: 'b', text: 'Delete all affected records to prevent further exposure.' },
      { id: 'c', text: 'Issue a press release with full technical details.' },
      { id: 'd', text: 'Shut down all business operations indefinitely.' },
    ],
    correct: ['a'],
    explanation:
      'The immediate priorities are containment to stop further data loss, evidence preservation for investigation and legal compliance, and assessing regulatory notification requirements.',
  },
  {
    id: 'cysa-ir-023',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response communication plan.',
    difficulty: 'Medium',
    prompt:
      'What does an incident response communication plan primarily define?',
    choices: [
      { id: 'a', text: 'Who to notify, when, and through which channels during different incident types.' },
      { id: 'b', text: 'The technical steps for eradicating malware.' },
      { id: 'c', text: 'The budget for incident response tools.' },
      { id: 'd', text: 'The physical security controls for the SOC.' },
    ],
    correct: ['a'],
    explanation:
      'A communication plan defines notification requirements, responsible parties, and approved channels for internal stakeholders, regulators, law enforcement, and customers.',
  },
  {
    id: 'cysa-ir-024',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for preserving evidence on mobile devices.',
    difficulty: 'Hard',
    prompt:
      'A suspect mobile device is seized during an investigation. Which action best preserves evidence on the device?',
    choices: [
      { id: 'a', text: 'Place the device in a Faraday bag to prevent remote wiping and preserve the battery.' },
      { id: 'b', text: 'Unlock the device and browse through apps to find evidence.' },
      { id: 'c', text: 'Connect the device to a corporate Wi-Fi network.' },
      { id: 'd', text: 'Remove the SIM card and insert it in another phone.' },
    ],
    correct: ['a'],
    explanation:
      'A Faraday bag blocks cellular and Wi-Fi signals to prevent remote wiping, and preserving battery power maintains volatile data. The device should remain untouched until forensic acquisition.',
  },
  {
    id: 'cysa-ir-025',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response exercises program.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of conducting regular incident response exercises?',
    choices: [
      { id: 'a', text: 'To test and improve response procedures and team coordination before a real incident.' },
      { id: 'b', text: 'To replace the need for an incident response plan.' },
      { id: 'c', text: 'To reduce the number of security incidents.' },
      { id: 'd', text: 'To eliminate the need for cybersecurity insurance.' },
    ],
    correct: ['a'],
    explanation:
      'Regular exercises such as tabletop simulations and functional drills validate that response plans work and teams can execute them under pressure.',
  },
  {
    id: 'cysa-ir-026',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a ransomware demand.',
    difficulty: 'Hard',
    prompt:
      'Attackers demand payment to decrypt company data. Which factor is most important in the decision-making process?',
    choices: [
      { id: 'a', text: 'The reliability of backups and the feasibility of restoration without paying.' },
      { id: 'b', text: 'The amount of the ransom demand.' },
      { id: 'c', text: 'The speed of the attackers decryption tool.' },
      { id: 'd', text: 'The opinion of the CEO.' },
    ],
    correct: ['a'],
    explanation:
      'The decision to pay a ransom should be based on whether reliable backups exist and recovery is feasible without payment, along with legal and law enforcement guidance.',
  },
  {
    id: 'cysa-ir-027',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting insider threats.',
    difficulty: 'Medium',
    prompt: 'Which two behaviors are most indicative of a potential insider threat?',
    choices: [
      { id: 'a', text: 'Accessing sensitive data outside normal job responsibilities and attempting to bypass security controls.' },
      { id: 'b', text: 'Working overtime and attending security training.' },
      { id: 'c', text: 'Requesting software updates and reporting phishing emails.' },
      { id: 'd', text: 'Using a corporate laptop and connecting to the VPN.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Insider threat indicators include accessing data outside job responsibilities and attempts to bypass security controls, which suggest malicious intent rather than normal work activity.',
  },
  {
    id: 'cysa-ir-028',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence storage policy.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of securely storing incident evidence?',
    choices: [
      { id: 'a', text: 'To maintain the integrity and admissibility of evidence for legal proceedings.' },
      { id: 'b', text: 'To reduce storage costs.' },
      { id: 'c', text: 'To share evidence with other organizations.' },
      { id: 'd', text: 'To comply with data minimization requirements.' },
    ],
    correct: ['a'],
    explanation:
      'Secure evidence storage with access controls and integrity verification ensures that evidence remains unaltered and credible for legal proceedings.',
  },
  {
    id: 'cysa-ir-029',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a supply chain compromise.',
    difficulty: 'Hard',
    prompt:
      'A third-party software vendor announces that their update mechanism was compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Identify all systems that received the compromised update and isolate them for investigation.' },
      { id: 'b', text: 'Uninstall all software from the vendor permanently.' },
      { id: 'c', text: 'Ignore the advisory and continue normal operations.' },
      { id: 'd', text: 'Shut down all systems immediately.' },
    ],
    correct: ['a'],
    explanation:
      'The immediate priority is identifying affected systems and isolating them to prevent further spread, then investigating the compromise and remediating affected hosts.',
  },
  {
    id: 'cysa-ir-030',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response lessons learned template.',
    difficulty: 'Medium',
    prompt:
      'What does an incident response lessons learned template primarily ensure?',
    choices: [
      { id: 'a', text: 'Consistent documentation of what happened, what was done, and what should improve.' },
      { id: 'b', text: 'Faster incident resolution.' },
      { id: 'c', text: 'Automatic remediation of vulnerabilities.' },
      { id: 'd', text: 'Reduced need for forensic investigation.' },
    ],
    correct: ['a'],
    explanation:
      'A lessons learned template ensures that post-incident reviews consistently capture timeline, root cause, response effectiveness, and improvement actions.',
  },
  {
    id: 'cysa-ir-031',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for coordinating with law enforcement.',
    difficulty: 'Medium',
    prompt:
      'When is it most appropriate to involve law enforcement in a cybersecurity incident?',
    choices: [
      { id: 'a', text: 'When the incident involves criminal activity, significant data theft, or a threat to public safety.' },
      { id: 'b', text: 'For every security alert regardless of severity.' },
      { id: 'c', text: 'Only after all internal remediation is complete.' },
      { id: 'd', text: 'Never; law enforcement should not be involved in cyber incidents.' },
    ],
    correct: ['a'],
    explanation:
      'Law enforcement should be involved when incidents involve criminal activity or significant harm, as they can provide additional resources and legal authority for investigation.',
  },
  {
    id: 'cysa-ir-032',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate tools for memory forensics.',
    difficulty: 'Hard',
    prompt:
      'Which tool is most appropriate for analyzing a memory dump to identify malicious processes?',
    choices: [
      { id: 'a', text: 'Volatility or Rekall.' },
      { id: 'b', text: 'Nmap.' },
      { id: 'c', text: 'Wireshark.' },
      { id: 'd', text: 'Metasploit.' },
    ],
    correct: ['a'],
    explanation:
      'Volatility and Rekall are specialized memory forensics frameworks that can identify running processes, network connections, and injected code from memory dumps.',
  },
  {
    id: 'cysa-ir-033',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response readiness assessment.',
    difficulty: 'Medium',
    prompt:
      'What does an incident response readiness assessment evaluate?',
    choices: [
      { id: 'a', text: 'The organization’s preparedness to detect, respond to, and recover from incidents.' },
      { id: 'b', text: 'The speed of the corporate network.' },
      { id: 'c', text: 'The number of security tools deployed.' },
      { id: 'd', text: 'The physical security of the data center.' },
    ],
    correct: ['a'],
    explanation:
      'A readiness assessment evaluates whether plans, people, and technology are in place to effectively respond to incidents, identifying gaps before they matter.',
  },
  {
    id: 'cysa-ir-034',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised domain controller.',
    difficulty: 'Hard',
    prompt:
      'A domain controller is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the domain controller, reset the KRBTGT password twice, and rebuild from known-good state.' },
      { id: 'b', text: 'Reboot the domain controller and hope the issue resolves.' },
      { id: 'c', text: 'Disable all user accounts.' },
      { id: 'd', text: 'Delete all group policy objects.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised domain controller requires isolation, KRBTGT password resets (twice to invalidate existing tickets), and rebuilding from a known-good state to ensure all attacker access is eliminated.',
  },
  {
    id: 'cysa-ir-035',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response tabletop exercise.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of a tabletop exercise?',
    choices: [
      { id: 'a', text: 'To walk through incident scenarios and evaluate response procedures without live systems.' },
      { id: 'b', text: 'To test the performance of security tools.' },
      { id: 'c', text: 'To train users on phishing awareness.' },
      { id: 'd', text: 'To audit compliance with security policies.' },
    ],
    correct: ['a'],
    explanation:
      'Tabletop exercises simulate incident scenarios in a discussion-based format, allowing teams to evaluate procedures and decision-making without affecting production systems.',
  },
  {
    id: 'cysa-ir-036',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised certificate authority.',
    difficulty: 'Hard',
    prompt:
      'An internal certificate authority is compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Revoke all certificates issued by the CA, rebuild the CA, and reissue certificates.' },
      { id: 'b', text: 'Continue using existing certificates and monitor for abuse.' },
      { id: 'c', text: 'Disable all encryption in the organization.' },
      { id: 'd', text: 'Issue a public statement about the compromise.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised CA undermines all certificates it issued; revoking them, rebuilding the CA, and reissuing certificates is essential to restore trust in the PKI.',
  },
  {
    id: 'cysa-ir-037',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting data exfiltration.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest data exfiltration is occurring?',
    choices: [
      { id: 'a', text: 'Unusual outbound data volumes and connections to unknown external hosts.' },
      { id: 'b', text: 'High CPU usage and frequent software updates.' },
      { id: 'c', text: 'Failed login attempts and password reset requests.' },
      { id: 'd', text: 'Printer queue backups and email delivery failures.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Data exfiltration typically manifests as unusual outbound traffic volumes and connections to unfamiliar external hosts, which are visible in network and DLP monitoring.',
  },
  {
    id: 'cysa-ir-038',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response communication escalation matrix.',
    difficulty: 'Medium',
    prompt:
      'What does a communication escalation matrix define?',
    choices: [
      { id: 'a', text: 'Who should be notified at each severity level and through which channels.' },
      { id: 'b', text: 'The order in which systems should be restored.' },
      { id: 'c', text: 'The budget allocation for incident response.' },
      { id: 'd', text: 'The physical locations of incident response team members.' },
    ],
    correct: ['a'],
    explanation:
      'An escalation matrix defines notification requirements by severity level, ensuring the right people are informed through the right channels at the right time.',
  },
  {
    id: 'cysa-ir-039',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised service account.',
    difficulty: 'Hard',
    prompt:
      'A service account is found authenticating from unexpected locations. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Reset the service account password, revoke active sessions, and investigate the authentication logs.' },
      { id: 'b', text: 'Disable all services in the organization.' },
      { id: 'c', text: 'Ignore the activity if services are functioning normally.' },
      { id: 'd', text: 'Delete the service account permanently.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised service account requires immediate credential reset and session revocation to stop unauthorized access, followed by log investigation to determine scope.',
  },
  {
    id: 'cysa-ir-040',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response digital forensic workstation.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a dedicated forensic workstation?',
    choices: [
      { id: 'a', text: 'To analyze evidence in a controlled, forensically sound environment without altering original data.' },
      { id: 'b', text: 'To run production workloads during incidents.' },
      { id: 'c', text: 'To store backup data for recovery.' },
      { id: 'd', text: 'To monitor network traffic in real time.' },
    ],
    correct: ['a'],
    explanation:
      'A dedicated forensic workstation provides a controlled environment with write-blocking and forensic tools, ensuring evidence analysis does not alter original data.',
  },
  {
    id: 'cysa-ir-041',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised email account with forwarding rules.',
    difficulty: 'Medium',
    prompt:
      'A compromised email account is found with a forwarding rule sending mail to an external address. Which action is most important after containing the account?',
    choices: [
      { id: 'a', text: 'Identify all messages forwarded by the rule and assess what data was exposed.' },
      { id: 'b', text: 'Delete the email account permanently.' },
      { id: 'c', text: 'Send a reply to all forwarded messages.' },
      { id: 'd', text: 'Ignore the forwarded messages and focus on password reset.' },
    ],
    correct: ['a'],
    explanation:
      'After containment, identifying what data was forwarded is essential for assessing breach scope, determining notification obligations, and preventing further misuse.',
  },
  {
    id: 'cysa-ir-042',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised IoT device.',
    difficulty: 'Hard',
    prompt:
      'An IoT device is confirmed compromised and communicating with a known C2 server. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the device from the network and investigate other devices on the same segment.' },
      { id: 'b', text: 'Reboot the device and monitor for continued C2 traffic.' },
      { id: 'c', text: 'Ignore the device because IoT devices are not important.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the compromised device stops C2 communication, and investigating the same network segment is critical because attackers often compromise multiple IoT devices for lateral movement.',
  },
  {
    id: 'cysa-ir-043',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence analysis report.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of an evidence analysis report?',
    choices: [
      { id: 'a', text: 'To document findings, analysis methods, and conclusions in a clear, repeatable format.' },
      { id: 'b', text: 'To replace the need for forensic tools.' },
      { id: 'c', text: 'To automate incident response processes.' },
      { id: 'd', text: 'To reduce the time spent on investigations.' },
    ],
    correct: ['a'],
    explanation:
      'An evidence analysis report documents what was found, how it was analyzed, and what conclusions were reached, ensuring findings are credible and repeatable.',
  },
  {
    id: 'cysa-ir-044',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting lateral movement via RDP.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest lateral movement via RDP?',
    choices: [
      { id: 'a', text: 'Multiple failed RDP logins followed by a success and RDP sessions originating from unusual workstations.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'RDP lateral movement produces failed login attempts followed by successes and RDP sessions from unexpected source workstations, visible in authentication and connection logs.',
  },
  {
    id: 'cysa-ir-045',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response malware analysis sandbox.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a malware analysis sandbox?',
    choices: [
      { id: 'a', text: 'To safely execute and observe malware behavior in an isolated environment.' },
      { id: 'b', text: 'To deploy malware to production systems.' },
      { id: 'c', text: 'To train users on malware recognition.' },
      { id: 'd', text: 'To encrypt malware samples for storage.' },
    ],
    correct: ['a'],
    explanation:
      'A sandbox provides an isolated environment where malware can be executed safely to observe its behavior, network connections, and payload without risking production systems.',
  },
  {
    id: 'cysa-ir-046',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised privileged user account.',
    difficulty: 'Hard',
    prompt:
      'A domain administrator account is confirmed compromised. Which action is most critical after containment?',
    choices: [
      { id: 'a', text: 'Reset the account password, review all actions performed by the account, and audit privileged group membership changes.' },
      { id: 'b', text: 'Disable all domain administrator accounts.' },
      { id: 'c', text: 'Ignore the compromise if no damage is apparent.' },
      { id: 'd', text: 'Delete all group policy objects.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised domain admin account requires password reset and thorough audit of all actions performed, including group membership and policy changes, to identify the full scope of attacker activity.',
  },
  {
    id: 'cysa-ir-047',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised build server.',
    difficulty: 'Hard',
    prompt:
      'A build server is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the server, invalidate all recently built artifacts, and rebuild the server from a known-good state.' },
      { id: 'b', text: 'Continue using existing build artifacts and monitor for issues.' },
      { id: 'c', text: 'Disable all build pipelines permanently.' },
      { id: 'd', text: 'Shut down the entire CI/CD infrastructure.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised build server can inject malware into all produced artifacts; isolating it, invalidating recent builds, and rebuilding from a known-good state is essential.',
  },
  {
    id: 'cysa-ir-048',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence timeline.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of creating an evidence timeline during an investigation?',
    choices: [
      { id: 'a', text: 'To establish the sequence of events and identify the initial compromise vector.' },
      { id: 'b', text: 'To track the time analysts spend on the investigation.' },
      { id: 'c', text: 'To document the cost of the incident.' },
      { id: 'd', text: 'To satisfy cybersecurity insurance requirements.' },
    ],
    correct: ['a'],
    explanation:
      'A timeline establishes the sequence of attacker actions, helping identify the initial compromise vector, the scope of the incident, and the dwell time before detection.',
  },
  {
    id: 'cysa-ir-049',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised VPN gateway.',
    difficulty: 'Medium',
    prompt:
      'A VPN gateway is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Take the gateway offline, reset all VPN credentials, and review VPN logs for unauthorized access.' },
      { id: 'b', text: 'Reboot the gateway and monitor for continued issues.' },
      { id: 'c', text: 'Disable VPN access for all users permanently.' },
      { id: 'd', text: 'Ignore the compromise if remote access is functioning normally.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised VPN gateway provides direct network access to attackers; taking it offline, resetting credentials, and reviewing logs for unauthorized access is essential.',
  },
  {
    id: 'cysa-ir-050',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response root cause analysis.',
    difficulty: 'Medium',
    prompt:
      'What is the primary goal of a root cause analysis after an incident?',
    choices: [
      { id: 'a', text: 'To identify the underlying cause and prevent similar incidents in the future.' },
      { id: 'b', text: 'To assign blame to individuals responsible for the incident.' },
      { id: 'c', text: 'To determine the financial cost of the incident.' },
      { id: 'd', text: 'To satisfy legal discovery requirements.' },
    ],
    correct: ['a'],
    explanation:
      'Root cause analysis identifies why the incident happened and what controls failed, enabling targeted improvements that prevent recurrence.',
  },
  {
    id: 'cysa-ir-051',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting persistence via scheduled tasks.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest an attacker has created scheduled tasks for persistence?',
    choices: [
      { id: 'a', text: 'New scheduled tasks with unusual names and tasks executing from user-writable directories.' },
      { id: 'b', text: 'High CPU usage during business hours and frequent software updates.' },
      { id: 'c', text: 'Failed login attempts and password reset requests.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious scheduled tasks often have unusual names and execute from user-writable directories, which are visible in scheduled task logs and can be detected through endpoint monitoring.',
  },
  {
    id: 'cysa-ir-052',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised third-party integration.',
    difficulty: 'Hard',
    prompt:
      'A third-party integration with API access to internal systems is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Revoke all API tokens for the integration and audit all actions performed by the integration.' },
      { id: 'b', text: 'Disable all third-party integrations permanently.' },
      { id: 'c', text: 'Ignore the compromise if systems are functioning normally.' },
      { id: 'd', text: 'Shut down all internal systems.' },
    ],
    correct: ['a'],
    explanation:
      'Revoking API tokens immediately stops the attacker’s access, and auditing all actions performed by the integration reveals what data was accessed or modified.',
  },
  {
    id: 'cysa-ir-053',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence preservation policy.',
    difficulty: 'Medium',
    prompt:
      'What does an evidence preservation policy primarily define?',
    choices: [
      { id: 'a', text: 'How evidence should be collected, stored, and handled to maintain integrity.' },
      { id: 'b', text: 'Which forensic tools to use.' },
      { id: 'c', text: 'How to communicate with the media during an incident.' },
      { id: 'd', text: 'The budget for incident response activities.' },
    ],
    correct: ['a'],
    explanation:
      'An evidence preservation policy defines proper collection, storage, and handling procedures to maintain evidence integrity and chain of custody.',
  },
  {
    id: 'cysa-ir-054',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised domain registrar account.',
    difficulty: 'Hard',
    prompt:
      'A domain registrar account is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Regain control of the account, enable multi-factor authentication, and audit all DNS record changes.' },
      { id: 'b', text: 'Ignore the compromise and monitor for DNS changes.' },
      { id: 'c', text: 'Transfer all domains to a different registrar immediately.' },
      { id: 'd', text: 'Shut down the company website.' },
    ],
    correct: ['a'],
    explanation:
      'Regaining control stops further unauthorized changes, MFA prevents recompromise, and auditing DNS records identifies any malicious redirects or record modifications.',
  },
  {
    id: 'cysa-ir-055',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response coordination with public relations.',
    difficulty: 'Medium',
    prompt:
      'Why is coordinating with public relations important during a significant incident?',
    choices: [
      { id: 'a', text: 'To ensure consistent, accurate messaging and manage reputational impact.' },
      { id: 'b', text: 'To delay public disclosure indefinitely.' },
      { id: 'c', text: 'To avoid involving legal counsel.' },
      { id: 'd', text: 'To minimize the need for technical investigation.' },
    ],
    correct: ['a'],
    explanation:
      'PR coordination ensures that external messaging is consistent, accurate, and appropriately timed, managing reputational impact and meeting any disclosure obligations.',
  },
  {
    id: 'cysa-ir-056',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting credential dumping.',
    difficulty: 'Hard',
    prompt: 'Which two indicators most strongly suggest credential dumping activity?',
    choices: [
      { id: 'a', text: 'Access to LSASS process memory and creation of dump files in temporary directories.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Credential dumping involves accessing LSASS process memory and creating dump files, which are visible in endpoint detection and response telemetry.',
  },
  {
    id: 'cysa-ir-057',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised cloud storage bucket.',
    difficulty: 'Medium',
    prompt:
      'A cloud storage bucket containing sensitive data is found with public read access and evidence of unauthorized downloads. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Remove public access, preserve access logs, and assess what data was exposed.' },
      { id: 'b', text: 'Delete the bucket and all its contents.' },
      { id: 'c', text: 'Ignore the exposure if the data was not modified.' },
      { id: 'd', text: 'Move the bucket to a different region.' },
    ],
    correct: ['a'],
    explanation:
      'Removing public access stops further exposure, preserving logs enables investigation of what was accessed, and assessing exposure scope determines notification obligations.',
  },
  {
    id: 'cysa-ir-058',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence acquisition process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a formal evidence acquisition process?',
    choices: [
      { id: 'a', text: 'To ensure evidence is collected in a forensically sound manner that preserves integrity.' },
      { id: 'b', text: 'To speed up the investigation process.' },
      { id: 'c', text: 'To reduce the storage space required for evidence.' },
      { id: 'd', text: 'To automate incident response actions.' },
    ],
    correct: ['a'],
    explanation:
      'A formal acquisition process ensures evidence is collected using forensically sound methods that preserve integrity and chain of custody.',
  },
  {
    id: 'cysa-ir-059',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised email gateway.',
    difficulty: 'Medium',
    prompt:
      'An email gateway is confirmed compromised and used to send phishing emails. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the gateway, reset credentials, and identify all messages sent through the compromised account.' },
      { id: 'b', text: 'Disable all email services permanently.' },
      { id: 'c', text: 'Ignore the compromise and continue normal operations.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the gateway stops further phishing emails, credential reset prevents continued abuse, and identifying sent messages reveals the scope of the phishing campaign.',
  },
  {
    id: 'cysa-ir-060',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response containment strategy decision matrix.',
    difficulty: 'Medium',
    prompt:
      'What does a containment strategy decision matrix help responders determine?',
    choices: [
      { id: 'a', text: 'Which containment action is most appropriate based on incident type and severity.' },
      { id: 'b', text: 'The financial cost of the incident.' },
      { id: 'c', text: 'Which employees should be terminated.' },
      { id: 'd', text: 'The root cause of the incident.' },
    ],
    correct: ['a'],
    explanation:
      'A decision matrix guides responders in selecting the most appropriate containment action based on the incident type, severity, and business impact.',
  },
]