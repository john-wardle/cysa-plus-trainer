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
  {
    id: 'cysa-ir-061',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised certificate authority.',
    difficulty: 'Hard',
    prompt:
      'An intermediate certificate authority is compromised and used to issue fraudulent certificates. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Revoke the intermediate CA certificate, identify all issued certificates, and reissue from a clean CA.' },
      { id: 'b', text: 'Continue using existing certificates and monitor for abuse.' },
      { id: 'c', text: 'Disable all TLS in the organization.' },
      { id: 'd', text: 'Issue a public statement about the compromise.' },
    ],
    correct: ['a'],
    explanation:
      'Revoking the intermediate CA invalidates all certificates it issued, and reissuing from a clean CA is essential to restore trust in the PKI.',
  },
  {
    id: 'cysa-ir-062',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence storage and retention policy.',
    difficulty: 'Medium',
    prompt:
      'What does an evidence storage and retention policy primarily define?',
    choices: [
      { id: 'a', text: 'How long evidence should be retained and how it should be securely stored.' },
      { id: 'b', text: 'Which forensic tools to use.' },
      { id: 'c', text: 'How to communicate with the media during an incident.' },
      { id: 'd', text: 'The budget for incident response activities.' },
    ],
    correct: ['a'],
    explanation:
      'The policy defines retention periods to meet legal and regulatory requirements and secure storage methods to preserve evidence integrity.',
  },
  {
    id: 'cysa-ir-063',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised privileged access management system.',
    difficulty: 'Hard',
    prompt:
      'A privileged access management (PAM) system is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the PAM system, reset all managed credentials, and audit all sessions recorded by the PAM.' },
      { id: 'b', text: 'Disable all privileged access permanently.' },
      { id: 'c', text: 'Ignore the compromise if privileged access is functioning normally.' },
      { id: 'd', text: 'Shut down all systems managed by the PAM.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised PAM system exposes all managed credentials; isolating it, resetting credentials, and auditing sessions reveals what access the attacker obtained.',
  },
  {
    id: 'cysa-ir-064',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious PowerShell remoting.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious PowerShell remoting activity?',
    choices: [
      { id: 'a', text: 'WinRM connections from unusual workstations and PowerShell processes with encoded commands.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious PowerShell remoting produces WinRM connections from unexpected sources and encoded commands, visible in PowerShell and network logs.',
  },
  {
    id: 'cysa-ir-065',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response communication with legal counsel.',
    difficulty: 'Medium',
    prompt:
      'Why is involving legal counsel early in a significant incident important?',
    choices: [
      { id: 'a', text: 'To ensure compliance with regulatory notification requirements and protect privileged communications.' },
      { id: 'b', text: 'To delay incident response activities.' },
      { id: 'c', text: 'To avoid involving law enforcement.' },
      { id: 'd', text: 'To minimize the technical investigation.' },
    ],
    correct: ['a'],
    explanation:
      'Legal counsel ensures regulatory notification obligations are met and that investigation activities are conducted in a way that preserves legal options.',
  },
  {
    id: 'cysa-ir-066',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised network device.',
    difficulty: 'Medium',
    prompt:
      'A network switch is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the device, reset its configuration, and review all configuration changes made by the attacker.' },
      { id: 'b', text: 'Reboot the device and monitor for continued issues.' },
      { id: 'c', text: 'Ignore the compromise if network traffic is flowing normally.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the device stops attacker access, resetting removes malicious configuration, and reviewing changes reveals what the attacker modified.',
  },
  {
    id: 'cysa-ir-067',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence analysis methodology.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of following a structured evidence analysis methodology?',
    choices: [
      { id: 'a', text: 'To ensure analysis is thorough, repeatable, and defensible.' },
      { id: 'b', text: 'To speed up the investigation process.' },
      { id: 'c', text: 'To reduce the storage space required for evidence.' },
      { id: 'd', text: 'To automate incident response actions.' },
    ],
    correct: ['a'],
    explanation:
      'A structured methodology ensures that analysis is comprehensive, repeatable, and defensible in legal proceedings.',
  },
  {
    id: 'cysa-ir-068',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised cloud identity provider.',
    difficulty: 'Hard',
    prompt:
      'A cloud identity provider integrated with corporate SSO is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Disable the SSO integration, reset all federated credentials, and audit all authentication events.' },
      { id: 'b', text: 'Disable all cloud services permanently.' },
      { id: 'c', text: 'Ignore the compromise if authentication is functioning normally.' },
      { id: 'd', text: 'Shut down the entire corporate network.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised identity provider undermines all federated authentication; disabling the integration, resetting credentials, and auditing events is essential.',
  },
  {
    id: 'cysa-ir-069',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious registry modifications.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious registry modifications?',
    choices: [
      { id: 'a', text: 'Registry run key modifications and service registry entries pointing to user-writable directories.' },
      { id: 'b', text: 'High CPU usage during business hours and frequent software updates.' },
      { id: 'c', text: 'Failed login attempts and password reset requests.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious registry modifications target run keys and service entries for persistence, pointing to user-writable directories to evade detection.',
  },
  {
    id: 'cysa-ir-070',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence correlation process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of correlating evidence from multiple sources?',
    choices: [
      { id: 'a', text: 'To build a complete picture of the incident from different perspectives.' },
      { id: 'b', text: 'To reduce the storage space required for evidence.' },
      { id: 'c', text: 'To speed up the investigation process.' },
      { id: 'd', text: 'To automate incident response actions.' },
    ],
    correct: ['a'],
    explanation:
      'Correlating endpoint, network, and identity logs builds a complete timeline and reveals relationships that no single source would show alone.',
  },
  {
    id: 'cysa-ir-071',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised DNS server.',
    difficulty: 'Medium',
    prompt:
      'A DNS server is confirmed compromised and modifying DNS records. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the server, reset DNS configurations, and audit all DNS record changes.' },
      { id: 'b', text: 'Reboot the server and monitor for continued issues.' },
      { id: 'c', text: 'Ignore the compromise if DNS resolution is functioning normally.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the server stops malicious DNS modifications, resetting removes attacker changes, and auditing reveals what records were modified and for what purpose.',
  },
  {
    id: 'cysa-ir-072',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response lessons learned action items tracking.',
    difficulty: 'Medium',
    prompt:
      'Why is it important to track action items from lessons learned to completion?',
    choices: [
      { id: 'a', text: 'To ensure that improvements are actually implemented and not forgotten.' },
      { id: 'b', text: 'To assign blame for failures.' },
      { id: 'c', text: 'To reduce the number of future incidents.' },
      { id: 'd', text: 'To satisfy audit requirements.' },
    ],
    correct: ['a'],
    explanation:
      'Tracking action items ensures that lessons learned result in actual improvements rather than being documented and forgotten.',
  },
  {
    id: 'cysa-ir-073',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised mobile device management system.',
    difficulty: 'Hard',
    prompt:
      'A mobile device management (MDM) system is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the MDM, revoke all managed device configurations, and audit all commands sent to devices.' },
      { id: 'b', text: 'Disable all mobile devices permanently.' },
      { id: 'c', text: 'Ignore the compromise if devices are functioning normally.' },
      { id: 'd', text: 'Shut down the entire corporate network.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised MDM can push malicious configurations to all managed devices; isolating it, revoking configurations, and auditing commands is essential.',
  },
  {
    id: 'cysa-ir-074',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious WMI activity.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious WMI activity?',
    choices: [
      { id: 'a', text: 'WMI process creation events and WMI event subscriptions with unusual names.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious WMI activity creates processes and event subscriptions with unusual names, visible in endpoint detection and response telemetry.',
  },
  {
    id: 'cysa-ir-075',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence presentation process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of presenting incident findings clearly?',
    choices: [
      { id: 'a', text: 'To enable stakeholders to understand the incident and make informed decisions.' },
      { id: 'b', text: 'To demonstrate technical expertise.' },
      { id: 'c', text: 'To delay remediation efforts.' },
      { id: 'd', text: 'To satisfy legal discovery requirements.' },
    ],
    correct: ['a'],
    explanation:
      'Clear presentation enables stakeholders who are not technical to understand the incident, its impact, and the rationale for response decisions.',
  },
  {
    id: 'cysa-ir-076',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised backup system.',
    difficulty: 'Hard',
    prompt:
      'A backup system is confirmed compromised and backups are suspected of containing malware. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the backup system, verify backup integrity, and rebuild from a known-clean state.' },
      { id: 'b', text: 'Delete all backups permanently.' },
      { id: 'c', text: 'Ignore the compromise and continue using existing backups.' },
      { id: 'd', text: 'Shut down all production systems.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised backup system can reinfect recovered environments; isolating it, verifying integrity, and rebuilding from a known-clean state is essential.',
  },
  {
    id: 'cysa-ir-077',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response team role definitions.',
    difficulty: 'Easy',
    prompt:
      'What is the primary purpose of defining incident response team roles clearly?',
    choices: [
      { id: 'a', text: 'To ensure everyone knows their responsibilities and response is coordinated.' },
      { id: 'b', text: 'To reduce the number of team members.' },
      { id: 'c', text: 'To eliminate the need for training.' },
      { id: 'd', text: 'To assign blame during incidents.' },
    ],
    correct: ['a'],
    explanation:
      'Clear role definitions ensure that everyone knows what they are responsible for, enabling a coordinated and efficient response during high-pressure incidents.',
  },
  {
    id: 'cysa-ir-078',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised remote access tool.',
    difficulty: 'Medium',
    prompt:
      'A remote access tool used by IT staff is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Disable the tool, reset all credentials, and audit all sessions conducted through the tool.' },
      { id: 'b', text: 'Disable all remote access permanently.' },
      { id: 'c', text: 'Ignore the compromise if remote access is functioning normally.' },
      { id: 'd', text: 'Shut down all managed systems.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised remote access tool provides direct system access to attackers; disabling it, resetting credentials, and auditing sessions is essential.',
  },
  {
    id: 'cysa-ir-079',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious scheduled task creation.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious scheduled task creation?',
    choices: [
      { id: 'a', text: 'Scheduled tasks with random names and tasks executing from temporary directories.' },
      { id: 'b', text: 'High CPU usage during business hours and frequent software updates.' },
      { id: 'c', text: 'Failed login attempts and password reset requests.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious scheduled tasks often have random names and execute from temporary directories, visible in scheduled task creation logs.',
  },
  {
    id: 'cysa-ir-080',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence integrity verification process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of verifying evidence integrity through hashing?',
    choices: [
      { id: 'a', text: 'To prove that evidence has not been altered since collection.' },
      { id: 'b', text: 'To reduce the storage space required for evidence.' },
      { id: 'c', text: 'To speed up the investigation process.' },
      { id: 'd', text: 'To automate incident response actions.' },
    ],
    correct: ['a'],
    explanation:
      'Cryptographic hashing proves that evidence is identical to what was collected, demonstrating that it has not been altered and maintaining its credibility.',
  },
  {
    id: 'cysa-ir-081',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised email security gateway.',
    difficulty: 'Medium',
    prompt:
      'An email security gateway is confirmed compromised and allowing malicious emails through. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the gateway, update filtering rules, and identify all malicious emails that bypassed filtering.' },
      { id: 'b', text: 'Disable all email services permanently.' },
      { id: 'c', text: 'Ignore the compromise and continue normal operations.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the gateway stops malicious email delivery, updating rules restores protection, and identifying bypassed emails reveals what threats reached users.',
  },
  {
    id: 'cysa-ir-082',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response communication with executives.',
    difficulty: 'Medium',
    prompt:
      'Why is it important to keep executives informed during a significant incident?',
    choices: [
      { id: 'a', text: 'To ensure they can make informed business decisions and allocate resources.' },
      { id: 'b', text: 'To delay incident response activities.' },
      { id: 'c', text: 'To avoid involving technical staff.' },
      { id: 'd', text: 'To minimize the need for technical investigation.' },
    ],
    correct: ['a'],
    explanation:
      'Executives need accurate incident information to make business decisions about operations, communications, and resource allocation.',
  },
  {
    id: 'cysa-ir-083',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised API gateway.',
    difficulty: 'Medium',
    prompt:
      'An API gateway is confirmed compromised and attacker is abusing API endpoints. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the gateway, revoke all API keys, and audit all API requests for abuse.' },
      { id: 'b', text: 'Disable all APIs permanently.' },
      { id: 'c', text: 'Ignore the compromise if APIs are functioning normally.' },
      { id: 'd', text: 'Shut down all backend services.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the gateway stops API abuse, revoking keys prevents continued unauthorized access, and auditing requests reveals what data was accessed or modified.',
  },
  {
    id: 'cysa-ir-084',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious service installation.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious service installation?',
    choices: [
      { id: 'a', text: 'New services with random names and services pointing to user-writable directories.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious services often have random names and point to user-writable directories, visible in service creation and configuration logs.',
  },
  {
    id: 'cysa-ir-085',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response coordination with cybersecurity insurance.',
    difficulty: 'Medium',
    prompt:
      'Why is it important to notify cybersecurity insurance early in a significant incident?',
    choices: [
      { id: 'a', text: 'To ensure coverage requirements are met and approved vendors can be engaged.' },
      { id: 'b', text: 'To delay incident response activities.' },
      { id: 'c', text: 'To avoid involving legal counsel.' },
      { id: 'd', text: 'To minimize the technical investigation.' },
    ],
    correct: ['a'],
    explanation:
      'Cybersecurity insurance policies often have specific notification requirements and approved vendor lists that must be followed to maintain coverage.',
  },
  {
    id: 'cysa-ir-086',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised web application firewall.',
    difficulty: 'Hard',
    prompt:
      'A WAF is confirmed compromised and its rules have been modified to allow attacks. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the WAF, restore rules from a known-good backup, and audit all rule changes.' },
      { id: 'b', text: 'Disable all web applications permanently.' },
      { id: 'c', text: 'Ignore the compromise if web applications are functioning normally.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the WAF stops attacker rule modifications, restoring from backup removes malicious changes, and auditing reveals what rules were modified and why.',
  },
  {
    id: 'cysa-ir-087',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence chain of custody documentation.',
    difficulty: 'Medium',
    prompt:
      'What does chain of custody documentation primarily prove?',
    choices: [
      { id: 'a', text: 'That evidence has been properly handled and its integrity maintained.' },
      { id: 'b', text: 'That the investigation was completed quickly.' },
      { id: 'c', text: 'That the attacker has been identified.' },
      { id: 'd', text: 'That all vulnerabilities have been remediated.' },
    ],
    correct: ['a'],
    explanation:
      'Chain of custody documentation proves that evidence was properly collected, stored, and handled, maintaining its integrity and admissibility.',
  },
  {
    id: 'cysa-ir-088',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised single sign-on system.',
    difficulty: 'Hard',
    prompt:
      'An SSO system is confirmed compromised and attacker is issuing fraudulent tokens. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Disable the SSO system, invalidate all active tokens, and reset all federated application credentials.' },
      { id: 'b', text: 'Disable all authentication permanently.' },
      { id: 'c', text: 'Ignore the compromise if authentication is functioning normally.' },
      { id: 'd', text: 'Shut down all applications.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised SSO system undermines all connected applications; disabling it, invalidating tokens, and resetting credentials is essential to stop the attacker.',
  },
  {
    id: 'cysa-ir-089',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious COM object hijacking.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious COM object hijacking?',
    choices: [
      { id: 'a', text: 'COM registry entries pointing to user-writable directories and processes loading unexpected DLLs.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'COM hijacking redirects registry entries to malicious DLLs in user-writable directories, visible in registry and process monitoring.',
  },
  {
    id: 'cysa-ir-090',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response recovery validation checklist.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a recovery validation checklist?',
    choices: [
      { id: 'a', text: 'To ensure all systems are fully operational and threats are eliminated before resuming normal operations.' },
      { id: 'b', text: 'To speed up the recovery process.' },
      { id: 'c', text: 'To reduce the cost of the incident.' },
      { id: 'd', text: 'To satisfy audit requirements.' },
    ],
    correct: ['a'],
    explanation:
      'A recovery validation checklist ensures that all systems are verified as clean and functional before normal operations resume, preventing reinfection.',
  },
  {
    id: 'cysa-ir-091',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised network monitoring system.',
    difficulty: 'Medium',
    prompt:
      'A network monitoring system is confirmed compromised and alert data is being suppressed. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the monitoring system, verify alert integrity, and investigate what alerts were suppressed.' },
      { id: 'b', text: 'Disable all monitoring permanently.' },
      { id: 'c', text: 'Ignore the compromise if monitoring appears to be functioning normally.' },
      { id: 'd', text: 'Shut down the entire network.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised monitoring system hides attacker activity; isolating it, verifying alert integrity, and investigating suppressed alerts is essential.',
  },
  {
    id: 'cysa-ir-092',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response post-incident review process.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of a post-incident review?',
    choices: [
      { id: 'a', text: 'To identify systemic improvements and prevent similar incidents.' },
      { id: 'b', text: 'To assign blame to individuals.' },
      { id: 'c', text: 'To delete all incident documentation.' },
      { id: 'd', text: 'To celebrate the end of the incident.' },
    ],
    correct: ['a'],
    explanation:
      'Post-incident reviews focus on systemic improvements to processes, tools, and training rather than individual blame.',
  },
  {
    id: 'cysa-ir-093',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised container orchestration platform.',
    difficulty: 'Hard',
    prompt:
      'A Kubernetes cluster is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the cluster, rotate all API credentials, and audit all RBAC changes and pod creations.' },
      { id: 'b', text: 'Disable all containers permanently.' },
      { id: 'c', text: 'Ignore the compromise if workloads are functioning normally.' },
      { id: 'd', text: 'Shut down all physical servers.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised Kubernetes cluster controls all workloads; isolating it, rotating credentials, and auditing RBAC and pod changes is essential.',
  },
  {
    id: 'cysa-ir-094',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious DLL injection.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious DLL injection?',
    choices: [
      { id: 'a', text: 'Processes loading unsigned DLLs from unusual paths and unexpected remote thread creation.' },
      { id: 'b', text: 'High network bandwidth usage and slow application performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'DLL injection loads unsigned DLLs from unusual paths and creates unexpected remote threads, visible in endpoint detection and response telemetry.',
  },
  {
    id: 'cysa-ir-095',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response coordination with human resources.',
    difficulty: 'Medium',
    prompt:
      'When is it important to involve human resources in incident response?',
    choices: [
      { id: 'a', text: 'When the incident involves employee misconduct or insider threats.' },
      { id: 'b', text: 'For every security alert.' },
      { id: 'c', text: 'Only after law enforcement is involved.' },
      { id: 'd', text: 'Never; HR should not be involved in security incidents.' },
    ],
    correct: ['a'],
    explanation:
      'HR involvement is critical when incidents involve employee misconduct or insider threats, as they handle employment law, disciplinary actions, and employee rights.',
  },
  {
    id: 'cysa-ir-096',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate actions for responding to a compromised identity provider.',
    difficulty: 'Medium',
    prompt:
      'An identity provider is confirmed compromised and user accounts are being created without authorization. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the IdP, disable new account creation, and audit all account and permission changes.' },
      { id: 'b', text: 'Disable all identity services permanently.' },
      { id: 'c', text: 'Ignore the compromise if authentication is functioning normally.' },
      { id: 'd', text: 'Shut down all applications.' },
    ],
    correct: ['a'],
    explanation:
      'Isolating the IdP stops unauthorized account creation, and auditing changes reveals what accounts and permissions the attacker created or modified.',
  },
  {
    id: 'cysa-ir-097',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence analysis report format.',
    difficulty: 'Medium',
    prompt:
      'What does a well-structured incident evidence analysis report include?',
    choices: [
      { id: 'a', text: 'Executive summary, technical details, timeline, and recommendations.' },
      { id: 'b', text: 'Only raw log data.' },
      { id: 'c', text: 'Only the names of affected systems.' },
      { id: 'd', text: 'Only the financial cost of the incident.' },
    ],
    correct: ['a'],
    explanation:
      'A comprehensive report includes an executive summary for leadership, technical details for analysts, a timeline for understanding, and recommendations for improvement.',
  },
  {
    id: 'cysa-ir-098',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Determine the best approach for handling a compromised privileged user workstation.',
    difficulty: 'Hard',
    prompt:
      'A domain administrator workstation is confirmed compromised. Which action is most critical?',
    choices: [
      { id: 'a', text: 'Isolate the workstation, reset all privileged credentials used on it, and audit all privileged actions performed from it.' },
      { id: 'b', text: 'Disable all domain administrator accounts.' },
      { id: 'c', text: 'Ignore the compromise if the administrator can still log in.' },
      { id: 'd', text: 'Shut down the entire domain.' },
    ],
    correct: ['a'],
    explanation:
      'A compromised admin workstation may have exposed all privileged credentials; isolating it, resetting credentials, and auditing actions is essential.',
  },
  {
    id: 'cysa-ir-099',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Select appropriate indicators for detecting malicious browser extension installation.',
    difficulty: 'Medium',
    prompt: 'Which two indicators most strongly suggest malicious browser extension installation?',
    choices: [
      { id: 'a', text: 'Extensions installed from unofficial sources and extensions with excessive permissions.' },
      { id: 'b', text: 'High network bandwidth usage and slow browser performance.' },
      { id: 'c', text: 'Frequent password changes and help desk calls about locked accounts.' },
      { id: 'd', text: 'Printer queue backups and email delivery delays.' },
    ],
    correct: ['a', 'b'],
    multiSelect: true,
    explanation:
      'Malicious extensions are often installed from unofficial sources and request excessive permissions, visible in browser and endpoint monitoring.',
  },
  {
    id: 'cysa-ir-100',
    certification: 'CySA+',
    examVersion: 'CS0-003',
    domain: 'Incident Response and Management',
    objective: 'Identify the purpose of an incident response evidence retention schedule.',
    difficulty: 'Medium',
    prompt:
      'What is the primary purpose of an evidence retention schedule?',
    choices: [
      { id: 'a', text: 'To define how long different types of evidence should be retained based on legal and regulatory requirements.' },
      { id: 'b', text: 'To reduce storage costs.' },
      { id: 'c', text: 'To speed up the investigation process.' },
      { id: 'd', text: 'To automate incident response actions.' },
    ],
    correct: ['a'],
    explanation:
      'A retention schedule defines how long each type of evidence should be kept to meet legal, regulatory, and organizational requirements.',
  },
]