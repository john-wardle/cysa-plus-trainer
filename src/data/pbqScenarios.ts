import type { PbqScenario } from '../components/PbqRunner'

// Security Operations PBQ scenarios
export const pbqScenarios: PbqScenario[] = [
  {
    id: 'so-01',
    title: 'Analyze suspicious network traffic',
    description:
      'A network sensor has flagged unusual traffic patterns. Review the traffic analysis data, identify indicators of compromise, and determine the appropriate response actions.',
    tasks: [
      {
        id: 'so-01-t1',
        title: 'Task 1: Identify malicious traffic indicators',
        instruction: 'Select all traffic patterns that indicate a potential security threat.',
        items: [
          { id: 'a', title: 'Regular beaconing to external IP', detail: 'Consistent 60-second intervals to the same external address.', correct: true },
          { id: 'b', title: 'Large DNS query responses', detail: 'DNS responses significantly larger than queries, suggesting tunneling.', correct: true },
          { id: 'c', title: 'Normal business-hours HTTPS', detail: 'Standard encrypted web traffic during work hours.', correct: false },
          { id: 'd', title: 'Port scanning from internal host', detail: 'One internal host probing many ports on multiple systems.', correct: true },
          { id: 'e', title: 'Routine software update traffic', detail: 'Connections to known vendor update servers.', correct: false },
          { id: 'f', title: 'High-entropy DNS subdomains', detail: 'Random-looking subdomain labels in DNS queries.', correct: true },
        ],
      },
      {
        id: 'so-01-t2',
        title: 'Task 2: Select appropriate response actions',
        instruction: 'Choose the actions that should be taken immediately.',
        items: [
          { id: 'a', title: 'Isolate affected hosts', detail: 'Disconnect compromised systems from the network.', correct: true },
          { id: 'b', title: 'Block malicious IPs at firewall', detail: 'Add detected malicious IPs to firewall blocklists.', correct: true },
          { id: 'c', title: 'Reboot all network devices', detail: 'Restart all switches and routers to clear state.', correct: false },
          { id: 'd', title: 'Capture full packet data', detail: 'Preserve network captures for forensic analysis.', correct: true },
          { id: 'e', title: 'Disable all network monitoring', detail: 'Turn off IDS/IPS to reduce alert noise.', correct: false },
          { id: 'f', title: 'Notify all employees immediately', detail: 'Send company-wide email about the incident.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'The traffic analysis reveals command-and-control beaconing, DNS tunneling, and internal scanning activity. Immediate isolation, firewall blocking, and packet capture are the priority actions.',
  },
  {
    id: 'so-02',
    title: 'Investigate a phishing campaign',
    description:
      'Multiple employees have reported suspicious emails. Review the email headers and content, identify phishing indicators, and determine the scope of the campaign.',
    tasks: [
      {
        id: 'so-02-t1',
        title: 'Task 1: Identify phishing indicators',
        instruction: 'Select all characteristics that indicate a phishing attempt.',
        items: [
          { id: 'a', title: 'SPF authentication failure', detail: 'The sending server is not authorized for the claimed domain.', correct: true },
          { id: 'b', title: 'Urgent credential request', detail: 'Email pressures immediate action with threats of account closure.', correct: true },
          { id: 'c', title: 'DKIM signature valid', detail: 'The email passes DKIM authentication checks.', correct: false },
          { id: 'd', title: 'Link domain mismatch', detail: 'Displayed URL text differs from the actual href destination.', correct: true },
          { id: 'e', title: 'Personalized greeting', detail: 'Email addresses the recipient by their correct name.', correct: false },
          { id: 'f', title: 'Newly registered domain', detail: 'The link destination domain was registered within the last 7 days.', correct: true },
        ],
      },
      {
        id: 'so-02-t2',
        title: 'Task 2: Determine campaign scope',
        instruction: 'Select the data sources that best reveal the full scope of the campaign.',
        items: [
          { id: 'a', title: 'Email gateway logs', detail: 'Show all emails matching the campaign indicators.', correct: true },
          { id: 'b', title: 'Web proxy logs', detail: 'Show which employees clicked the phishing links.', correct: true },
          { id: 'c', title: 'Printer queue logs', detail: 'Show documents printed by affected users.', correct: false },
          { id: 'd', title: 'VPN authentication logs', detail: 'Show remote access patterns.', correct: false },
          { id: 'e', title: 'DNS query logs', detail: 'Show which hosts resolved the phishing domain.', correct: true },
          { id: 'f', title: 'Badge access logs', detail: 'Show physical building entry times.', correct: false },
        ],
      },
    ],
    passingScore: 6,
    summary:
      'The campaign uses domain spoofing, urgent social engineering, and newly registered domains. Email gateway, web proxy, and DNS logs together reveal the full scope.',
  },
  {
    id: 'so-03',
    title: 'Triage a malware detection',
    description:
      'An EDR alert has flagged suspicious PowerShell activity. Review the endpoint telemetry, assess the threat level, and recommend containment actions.',
    tasks: [
      {
        id: 'so-03-t1',
        title: 'Task 1: Assess threat indicators',
        instruction: 'Select all findings that indicate malicious activity.',
        items: [
          { id: 'a', title: 'Encoded PowerShell command', detail: 'The command line uses Base64 encoding to hide content.', correct: true },
          { id: 'b', title: 'Process launched by explorer.exe', detail: 'PowerShell was started interactively by the user.', correct: false },
          { id: 'c', title: 'External IP download', detail: 'PowerShell downloaded a file from an unknown external address.', correct: true },
          { id: 'd', title: 'Standard Windows update process', detail: 'The process matches the signature of Windows Update.', correct: false },
          { id: 'e', title: 'LSASS memory access', detail: 'The PowerShell process accessed the LSASS process memory.', correct: true },
          { id: 'f', title: 'Signed by Microsoft certificate', detail: 'The executed script has a valid Microsoft digital signature.', correct: false },
        ],
      },
      {
        id: 'so-03-t2',
        title: 'Task 2: Recommend containment actions',
        instruction: 'Select the appropriate immediate containment steps.',
        items: [
          { id: 'a', title: 'Isolate the endpoint', detail: 'Disconnect the host from the network.', correct: true },
          { id: 'b', title: 'Capture memory dump', detail: 'Preserve volatile evidence before any changes.', correct: true },
          { id: 'c', title: 'Reformat immediately', detail: 'Wipe the system to remove all traces.', correct: false },
          { id: 'd', title: 'Disable EDR agent', detail: 'Turn off endpoint monitoring to prevent interference.', correct: false },
          { id: 'e', title: 'Block downloaded file hash', detail: 'Add the file hash to endpoint blocklists.', correct: true },
          { id: 'f', title: 'Delete PowerShell logs', detail: 'Remove logs to prevent evidence tampering.', correct: false },
        ],
      },
    ],
    passingScore: 6,
    summary:
      'The encoded commands, external downloads, and LSASS access strongly indicate a credential theft and malware delivery attempt. Isolation, memory capture, and hash blocking are priorities.',
  },
  {
    id: 'so-04',
    title: 'Analyze firewall rule violations',
    description:
      'A firewall audit has identified rule violations and misconfigurations. Review the rule base, identify security gaps, and recommend fixes.',
    tasks: [
      {
        id: 'so-04-t1',
        title: 'Task 1: Identify firewall misconfigurations',
        instruction: 'Select all rules that represent security vulnerabilities.',
        items: [
          { id: 'a', title: 'Any-to-any allow rule', detail: 'A rule allowing all traffic between all zones without restriction.', correct: true },
          { id: 'b', title: 'RDP exposed to internet', detail: 'Port 3389 open from any external source to internal workstations.', correct: true },
          { id: 'c', title: 'Default deny inbound', detail: 'A catch-all rule denying all unmatched inbound traffic.', correct: false },
          { id: 'd', title: 'Unused admin rule', detail: 'A rule allowing SSH from any source that has not been used in 180 days.', correct: true },
          { id: 'e', title: 'Logging enabled on all rules', detail: 'All firewall rules have logging configured.', correct: false },
          { id: 'f', title: 'Overlapping rules', detail: 'Multiple rules matching the same traffic with different actions.', correct: true },
        ],
      },
      {
        id: 'so-04-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate fixes for the identified issues.',
        items: [
          { id: 'a', title: 'Remove any-to-any rule', detail: 'Replace with specific allow rules for required traffic only.', correct: true },
          { id: 'b', title: 'Restrict RDP to VPN', detail: 'Limit RDP access to VPN-connected sources only.', correct: true },
          { id: 'c', title: 'Disable all firewall logging', detail: 'Reduce log volume by turning off logging.', correct: false },
          { id: 'd', title: 'Remove unused admin rule', detail: 'Delete the unused SSH rule to reduce attack surface.', correct: true },
          { id: 'e', title: 'Allow all outbound traffic', detail: 'Add a blanket allow rule for all outbound connections.', correct: false },
          { id: 'f', title: 'Document rule changes', detail: 'Record all changes with ticket references and approvals.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'The any-to-any rule, exposed RDP, unused admin rules, and overlapping rules all create security gaps. Specific allow rules, VPN-restricted RDP, and rule cleanup are essential.',
  },
  {
    id: 'so-05',
    title: 'Investigate anomalous user behavior',
    description:
      'A UEBA system has flagged unusual behavior for a user account. Review the authentication and access logs, determine if the account is compromised, and recommend actions.',
    tasks: [
      {
        id: 'so-05-t1',
        title: 'Task 1: Identify compromise indicators',
        instruction: 'Select all behaviors that suggest the account may be compromised.',
        items: [
          { id: 'a', title: 'Impossible travel sign-in', detail: 'Successful sign-ins from New York and Tokyo within 30 minutes.', correct: true },
          { id: 'b', title: 'New device sign-in', detail: 'Sign-in from a device never previously associated with the user.', correct: true },
          { id: 'c', title: 'Normal business-hours access', detail: 'Access during the user normal working hours.', correct: false },
          { id: 'd', title: 'Mass file download', detail: 'The account downloaded 500 files in 5 minutes.', correct: true },
          { id: 'e', title: 'MFA successful', detail: 'Multi-factor authentication completed successfully.', correct: false },
          { id: 'f', title: 'Privilege escalation attempt', detail: 'The account attempted to modify domain admin group membership.', correct: true },
        ],
      },
      {
        id: 'so-05-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response steps for a confirmed account compromise.',
        items: [
          { id: 'a', title: 'Disable the account', detail: 'Immediately disable the compromised account.', correct: true },
          { id: 'b', title: 'Revoke all sessions', detail: 'Invalidate all active authentication tokens and sessions.', correct: true },
          { id: 'c', title: 'Delete the user mailbox', detail: 'Remove all email to prevent further data access.', correct: false },
          { id: 'd', title: 'Review access logs', detail: 'Audit all actions performed by the account in the last 30 days.', correct: true },
          { id: 'e', title: 'Reset all user passwords', detail: 'Force password reset for every user in the organization.', correct: false },
          { id: 'f', title: 'Preserve authentication logs', detail: 'Ensure log data is retained for forensic analysis.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Impossible travel, new device sign-in, mass downloads, and privilege escalation attempts confirm compromise. Account disable, session revocation, and thorough log review are critical.',
  },
  {
    id: 'vm-01',
    title: 'Prioritize scan findings for remediation',
    description:
      'A weekly vulnerability scan has returned findings across multiple asset groups. Review the results, prioritize remediation, and select appropriate compensating controls.',
    tasks: [
      {
        id: 'vm-01-t1',
        title: 'Task 1: Identify highest-priority findings',
        instruction: 'Select the findings that should be remediated first based on risk.',
        items: [
          { id: 'a', title: 'Critical RCE on internet-facing server', detail: 'Remote code execution on a public web server with CVSS 9.8 and public exploit.', correct: true },
          { id: 'b', title: 'Critical SQLi on internal database', detail: 'SQL injection on an internal database with CVSS 9.1 but no internet exposure.', correct: true },
          { id: 'c', title: 'Medium XSS on marketing site', detail: 'Cross-site scripting on a public marketing page with no sensitive data.', correct: false },
          { id: 'd', title: 'Low info disclosure on intranet', detail: 'Directory listing enabled on an internal intranet server.', correct: false },
          { id: 'e', title: 'Critical privilege escalation on domain controller', detail: 'Local privilege escalation on a domain controller with CVSS 8.8.', correct: true },
          { id: 'f', title: 'Medium outdated TLS on internal API', detail: 'TLS 1.0 still enabled on an internal-only API endpoint.', correct: false },
        ],
      },
      {
        id: 'vm-01-t2',
        title: 'Task 2: Select compensating controls for delayed patching',
        instruction: 'Choose appropriate interim controls for findings that cannot be patched within 30 days.',
        items: [
          { id: 'a', title: 'WAF virtual patching', detail: 'Deploy WAF rules to block known exploit patterns.', correct: true },
          { id: 'b', title: 'Network segmentation', detail: 'Move the asset to an isolated network segment.', correct: true },
          { id: 'c', title: 'Disable all logging', detail: 'Turn off logging to reduce storage costs.', correct: false },
          { id: 'd', title: 'Enhanced monitoring', detail: 'Increase logging and alerting on the affected asset.', correct: true },
          { id: 'e', title: 'Remove from asset inventory', detail: 'Delete the asset record so it disappears from reports.', correct: false },
          { id: 'f', title: 'Restrict admin access', detail: 'Limit administrative access to the asset.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Critical findings on internet-facing servers and domain controllers take priority. Virtual patching, segmentation, and enhanced monitoring provide protection during patching delays.',
  },
  {
    id: 'vm-02',
    title: 'Assess cloud security posture',
    description:
      'A cloud security posture assessment has identified misconfigurations across multiple services. Review the findings, identify critical gaps, and recommend fixes.',
    tasks: [
      {
        id: 'vm-02-t1',
        title: 'Task 1: Identify critical misconfigurations',
        instruction: 'Select all cloud configurations that represent critical security risks.',
        items: [
          { id: 'a', title: 'Public S3 bucket with sensitive data', detail: 'A storage bucket containing customer PII is publicly readable.', correct: true },
          { id: 'b', title: 'Overly permissive security group', detail: 'A security group allowing all inbound traffic on all ports.', correct: true },
          { id: 'c', title: 'Encryption at rest enabled', detail: 'Data is encrypted using provider-managed keys.', correct: false },
          { id: 'd', title: 'Root account without MFA', detail: 'The cloud root account does not have multi-factor authentication enabled.', correct: true },
          { id: 'e', title: 'Versioning enabled on buckets', detail: 'Object versioning is enabled for data recovery.', correct: false },
          { id: 'f', title: 'CloudTrail logging disabled', detail: 'API activity logging is turned off for the account.', correct: true },
        ],
      },
      {
        id: 'vm-02-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate fixes for the identified misconfigurations.',
        items: [
          { id: 'a', title: 'Remove public access', detail: 'Block all public access to the storage bucket.', correct: true },
          { id: 'b', title: 'Restrict security group rules', detail: 'Limit security group to required ports and sources only.', correct: true },
          { id: 'c', title: 'Disable all encryption', detail: 'Turn off encryption to improve performance.', correct: false },
          { id: 'd', title: 'Enable MFA on root account', detail: 'Add multi-factor authentication to the root account.', correct: true },
          { id: 'e', title: 'Enable CloudTrail logging', detail: 'Turn on API activity logging across all regions.', correct: true },
          { id: 'f', title: 'Disable versioning', detail: 'Turn off versioning to reduce storage costs.', correct: false },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Public buckets, permissive security groups, missing root MFA, and disabled logging are all critical gaps. Immediate access restriction, MFA enablement, and logging activation are priorities.',
  },
  {
    id: 'vm-03',
    title: 'Evaluate patch management effectiveness',
    description:
      'A patch compliance review has been conducted across the environment. Review the metrics, identify gaps, and recommend process improvements.',
    tasks: [
      {
        id: 'vm-03-t1',
        title: 'Task 1: Identify patch management gaps',
        instruction: 'Select all metrics that indicate patch management process failures.',
        items: [
          { id: 'a', title: 'Critical patch MTTR of 45 days', detail: 'Mean time to remediate critical vulnerabilities exceeds the 14-day SLA.', correct: true },
          { id: 'b', title: '95% patch compliance rate', detail: '95% of systems have all required patches applied.', correct: false },
          { id: 'c', title: 'No emergency patch process', detail: 'No defined process for emergency patching outside maintenance windows.', correct: true },
          { id: 'd', title: 'Patch testing backlog', detail: 'Patches wait an average of 30 days for testing before deployment.', correct: true },
          { id: 'e', title: 'Automated patch deployment', detail: 'Patches are automatically deployed after testing.', correct: false },
          { id: 'f', title: 'No asset inventory for legacy systems', detail: 'Legacy systems are not tracked in the vulnerability management platform.', correct: true },
        ],
      },
      {
        id: 'vm-03-t2',
        title: 'Task 2: Select process improvements',
        instruction: 'Choose the improvements that would most effectively address the identified gaps.',
        items: [
          { id: 'a', title: 'Implement emergency patch process', detail: 'Create a fast-track process for critical vulnerabilities.', correct: true },
          { id: 'b', title: 'Increase patch testing resources', detail: 'Add staff or automation to reduce testing backlog.', correct: true },
          { id: 'c', title: 'Extend patch SLA to 90 days', detail: 'Give more time for patching to reduce pressure.', correct: false },
          { id: 'd', title: 'Deploy legacy system inventory', detail: 'Add all legacy systems to the asset inventory.', correct: true },
          { id: 'e', title: 'Skip testing for critical patches', detail: 'Deploy critical patches without testing to save time.', correct: false },
          { id: 'f', title: 'Automate patch compliance reporting', detail: 'Generate automated compliance dashboards for leadership.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Extended MTTR, no emergency process, testing backlog, and untracked legacy systems are critical gaps. Emergency processes, additional testing resources, and complete inventory coverage are needed.',
  },
  {
    id: 'ir-01',
    title: 'Respond to a ransomware incident',
    description:
      'Ransomware has been detected on multiple systems. Review the incident details, determine the containment strategy, and select the appropriate response actions.',
    tasks: [
      {
        id: 'ir-01-t1',
        title: 'Task 1: Identify ransomware indicators',
        instruction: 'Select all indicators that confirm ransomware activity.',
        items: [
          { id: 'a', title: 'Mass file encryption', detail: 'Thousands of files encrypted with a new extension in minutes.', correct: true },
          { id: 'b', title: 'Ransom note on desktop', detail: 'A text file with payment instructions appears on user desktops.', correct: true },
          { id: 'c', title: 'Shadow copy deletion', detail: 'Volume shadow copies have been deleted from affected systems.', correct: true },
          { id: 'd', title: 'Normal backup completion', detail: 'Scheduled backups completed successfully overnight.', correct: false },
          { id: 'e', title: 'Outbound C2 connections', detail: 'Affected systems connecting to known malicious IPs.', correct: true },
          { id: 'f', title: 'User password change', detail: 'A user changed their password as scheduled.', correct: false },
        ],
      },
      {
        id: 'ir-01-t2',
        title: 'Task 2: Select containment actions',
        instruction: 'Choose the appropriate immediate containment steps.',
        items: [
          { id: 'a', title: 'Isolate infected hosts', detail: 'Disconnect all infected systems from the network.', correct: true },
          { id: 'b', title: 'Disable SMBv1', detail: 'Turn off SMBv1 to prevent further lateral spread.', correct: true },
          { id: 'c', title: 'Pay the ransom immediately', detail: 'Send payment to the attackers to decrypt files.', correct: false },
          { id: 'd', title: 'Shut down all backups', detail: 'Turn off backup systems to prevent encryption of backups.', correct: true },
          { id: 'e', title: 'Reformat all systems', detail: 'Wipe all systems to remove the ransomware.', correct: false },
          { id: 'f', title: 'Preserve forensic evidence', detail: 'Capture memory and disk images before remediation.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Mass encryption, ransom notes, shadow copy deletion, and C2 connections confirm ransomware. Isolation, protocol disabling, backup protection, and evidence preservation are immediate priorities.',
  },
  {
    id: 'ir-02',
    title: 'Handle a data breach notification',
    description:
      'A data breach involving customer PII has been confirmed. Review the breach details, identify notification obligations, and select the appropriate response actions.',
    tasks: [
      {
        id: 'ir-02-t1',
        title: 'Task 1: Identify notification obligations',
        instruction: 'Select all parties that must be notified based on the breach details.',
        items: [
          { id: 'a', title: 'Affected customers', detail: 'Individuals whose PII was exposed must be notified.', correct: true },
          { id: 'b', title: 'State attorney general', detail: 'State AG notification required for breaches affecting state residents.', correct: true },
          { id: 'c', title: 'Local media outlets', detail: 'Media notification required for breaches affecting more than 500 residents.', correct: true },
          { id: 'd', title: 'Competitors', detail: 'Competitors should be informed of the breach.', correct: false },
          { id: 'e', title: 'Federal regulators', detail: 'Industry-specific federal regulators may require notification.', correct: true },
          { id: 'f', title: 'Office cleaning staff', detail: 'No obligation to notify non-relevant parties.', correct: false },
        ],
      },
      {
        id: 'ir-02-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for this breach.',
        items: [
          { id: 'a', title: 'Engage external forensics', detail: 'Hire a third-party firm to investigate the breach scope.', correct: true },
          { id: 'b', title: 'Delete exposed records', detail: 'Remove the breached data to prevent further exposure.', correct: false },
          { id: 'c', title: 'Offer credit monitoring', detail: 'Provide credit monitoring services to affected individuals.', correct: true },
          { id: 'd', title: 'Delay notification for 90 days', detail: 'Wait to notify until the investigation is complete.', correct: false },
          { id: 'e', title: 'Preserve all logs', detail: 'Ensure all relevant logs are retained for investigation.', correct: true },
          { id: 'f', title: 'Publicly blame the attacker', detail: 'Issue a press release naming the suspected attacker.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Customers, state AGs, media, and federal regulators all require notification depending on jurisdiction. External forensics, credit monitoring, and log preservation are essential response actions.',
  },
  {
    id: 'ir-03',
    title: 'Investigate a compromised web server',
    description:
      'A public web server is suspected of being compromised. Review the server logs and artifacts, determine the attack vector, and select remediation steps.',
    tasks: [
      {
        id: 'ir-03-t1',
        title: 'Task 1: Identify the attack vector',
        instruction: 'Select all indicators that reveal how the attacker gained access.',
        items: [
          { id: 'a', title: 'SQL injection in web logs', detail: 'Web server logs show SQL injection attempts against the login form.', correct: true },
          { id: 'b', title: 'New admin user created', detail: 'A new administrative user account was created at 3 a.m.', correct: true },
          { id: 'c', title: 'Normal user logins', detail: 'Regular user authentication during business hours.', correct: false },
          { id: 'd', title: 'Web shell uploaded', detail: 'A PHP file with web shell characteristics found in the web root.', correct: true },
          { id: 'e', title: 'SSL certificate renewal', detail: 'The server SSL certificate was renewed last week.', correct: false },
          { id: 'f', title: 'Unpatched Apache version', detail: 'The server runs Apache 2.4.29 which has known RCE vulnerabilities.', correct: true },
        ],
      },
      {
        id: 'ir-03-t2',
        title: 'Task 2: Select remediation steps',
        instruction: 'Choose the appropriate remediation actions for this compromise.',
        items: [
          { id: 'a', title: 'Take server offline', detail: 'Isolate the web server from the network.', correct: true },
          { id: 'b', title: 'Remove web shell', detail: 'Delete the uploaded web shell file.', correct: true },
          { id: 'c', title: 'Keep server running', detail: 'Leave the server online to maintain service availability.', correct: false },
          { id: 'd', title: 'Patch Apache', detail: 'Update Apache to the latest patched version.', correct: true },
          { id: 'e', title: 'Disable web application firewall', detail: 'Turn off the WAF to restore functionality.', correct: false },
          { id: 'f', title: 'Review database for tampering', detail: 'Check database integrity and look for unauthorized changes.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'SQL injection against an unpatched Apache server led to web shell upload and admin account creation. Isolation, web shell removal, patching, and database integrity verification are critical.',
  },
  {
    id: 'rc-01',
    title: 'Draft an executive incident summary',
    description:
      'A significant security incident has occurred. Review the incident details and select the most appropriate content for an executive summary report.',
    tasks: [
      {
        id: 'rc-01-t1',
        title: 'Task 1: Select appropriate content',
        instruction: 'Choose the content that belongs in an executive summary.',
        items: [
          { id: 'a', title: 'Business impact summary', detail: 'High-level description of operational and financial impact.', correct: true },
          { id: 'b', title: 'Current containment status', detail: 'Whether the incident is contained and what remains.', correct: true },
          { id: 'c', title: 'Raw log excerpts', detail: 'Direct quotes from system logs with timestamps.', correct: false },
          { id: 'd', title: 'Decisions needed', detail: 'Specific decisions requiring executive action or approval.', correct: true },
          { id: 'e', title: 'Full IOC list', detail: 'Complete list of indicators of compromise with technical details.', correct: false },
          { id: 'f', title: 'Next steps and timeline', detail: 'Planned actions and expected milestones for resolution.', correct: true },
        ],
      },
      {
        id: 'rc-01-t2',
        title: 'Task 2: Identify inappropriate content',
        instruction: 'Select the content that should NOT appear in an executive summary.',
        items: [
          { id: 'a', title: 'Technical jargon', detail: 'Acronyms and technical terms unfamiliar to executives.', correct: true },
          { id: 'b', title: 'Business risk assessment', detail: 'Analysis of business risk to the organization.', correct: false },
          { id: 'c', title: 'Blame assignment', detail: 'Statements about which team or individual is at fault.', correct: true },
          { id: 'd', title: 'Financial impact estimate', detail: 'Estimated cost of the incident to the business.', correct: false },
          { id: 'e', title: 'Speculation about attacker identity', detail: 'Unconfirmed theories about who is behind the attack.', correct: true },
          { id: 'f', title: 'Remediation progress', detail: 'Status of technical remediation efforts.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Executive summaries should focus on business impact, containment status, decisions needed, and next steps. Technical jargon, blame, and unverified speculation have no place in executive reporting.',
  },
  {
    id: 'rc-02',
    title: 'Prepare a breach notification letter',
    description:
      'A breach affecting customer data requires notification. Review the draft letter and select the content that meets regulatory and best-practice requirements.',
    tasks: [
      {
        id: 'rc-02-t1',
        title: 'Task 1: Select required notification content',
        instruction: 'Choose the elements that must be included in a breach notification letter.',
        items: [
          { id: 'a', title: 'Description of the incident', detail: 'Clear explanation of what happened in plain language.', correct: true },
          { id: 'b', title: 'Types of data involved', detail: 'Specific categories of personal information that were exposed.', correct: true },
          { id: 'c', title: 'Internal investigation notes', detail: 'Details about the internal investigation process.', correct: false },
          { id: 'd', title: 'Steps taken to protect data', detail: 'Actions the company is taking to secure information.', correct: true },
          { id: 'e', title: 'Speculation about attacker', detail: 'Theories about who may be responsible for the breach.', correct: false },
          { id: 'f', title: 'Recommended protective steps', detail: 'Actions recipients should take to protect themselves.', correct: true },
        ],
      },
      {
        id: 'rc-02-t2',
        title: 'Task 2: Select appropriate tone and style',
        instruction: 'Choose the communication approach that best serves affected individuals.',
        items: [
          { id: 'a', title: 'Clear and transparent', detail: 'Plain language that accurately describes what happened.', correct: true },
          { id: 'b', title: 'Apologetic and accountable', detail: 'Acknowledges impact and takes responsibility.', correct: true },
          { id: 'c', title: 'Minimizing severity', detail: 'Downplays the significance of the breach.', correct: false },
          { id: 'd', title: 'Legally evasive', detail: 'Uses hedging language to avoid admitting fault.', correct: false },
          { id: 'e', title: 'Supportive and helpful', detail: 'Provides contact information and support resources.', correct: true },
          { id: 'f', title: 'Technical and detailed', detail: 'Uses extensive technical terminology.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Effective breach notifications are clear, transparent, and supportive. They describe what happened, what data was involved, and what recipients should do, without minimizing severity or speculating about attackers.',
  },
  {
    id: 'rc-03',
    title: 'Present security metrics to leadership',
    description:
      'You need to present quarterly security metrics to the executive team. Review the available metrics and select the ones that best demonstrate security program effectiveness.',
    tasks: [
      {
        id: 'rc-03-t1',
        title: 'Task 1: Select high-value metrics',
        instruction: 'Choose the metrics that best demonstrate security program effectiveness to executives.',
        items: [
          { id: 'a', title: 'Mean time to detect (MTTD)', detail: 'Average time from threat introduction to detection.', correct: true },
          { id: 'b', title: 'Mean time to respond (MTTR)', detail: 'Average time from detection to containment.', correct: true },
          { id: 'c', title: 'Number of security tools', detail: 'Total count of security products deployed.', correct: false },
          { id: 'd', title: 'Patch compliance rate', detail: 'Percentage of systems with current security patches.', correct: true },
          { id: 'e', title: 'SOC analyst headcount', detail: 'Number of staff in the security operations center.', correct: false },
          { id: 'f', title: 'Phishing simulation click rate', detail: 'Percentage of employees who click simulated phishing links.', correct: true },
        ],
      },
      {
        id: 'rc-03-t2',
        title: 'Task 2: Select presentation best practices',
        instruction: 'Choose the presentation approaches that resonate with executive audiences.',
        items: [
          { id: 'a', title: 'Focus on trends over time', detail: 'Show improvement or degradation across quarters.', correct: true },
          { id: 'b', title: 'Relate metrics to business impact', detail: 'Connect security metrics to business risk and outcomes.', correct: true },
          { id: 'c', title: 'Present raw data tables', detail: 'Show detailed spreadsheets with all data points.', correct: false },
          { id: 'd', title: 'Use technical jargon extensively', detail: 'Demonstrate deep technical knowledge.', correct: false },
          { id: 'e', title: 'Provide context and benchmarks', detail: 'Compare metrics to industry benchmarks or goals.', correct: true },
          { id: 'f', title: 'Avoid recommendations', detail: 'Present data without suggesting next steps.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Executives value trends, business impact, and benchmark comparisons. MTTD, MTTR, patch compliance, and phishing click rates are high-value metrics. Raw data and technical jargon should be avoided.',
  },
  {
    id: 'so-06',
    title: 'Investigate a compromised IoT device',
    description:
      'An IoT camera on the corporate network is communicating with a known C2 server. Review the network and device logs, assess the compromise, and determine response actions.',
    tasks: [
      {
        id: 'so-06-t1',
        title: 'Task 1: Identify compromise indicators',
        instruction: 'Select all indicators that confirm the IoT device is compromised.',
        items: [
          { id: 'a', title: 'Connections to known C2 IP', detail: 'Device communicating with a known malicious command-and-control server.', correct: true },
          { id: 'b', title: 'Default credentials in use', detail: 'The device still uses factory default username and password.', correct: true },
          { id: 'c', title: 'Normal video streaming', detail: 'Video feed operating as expected.', correct: false },
          { id: 'd', title: 'Outbound SSH connections', detail: 'Device initiating SSH connections to external servers.', correct: true },
          { id: 'e', title: 'Firmware up to date', detail: 'The device firmware is current.', correct: false },
          { id: 'f', title: 'Unusual DNS queries', detail: 'Device resolving high-entropy domain names.', correct: true },
        ],
      },
      {
        id: 'so-06-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for this IoT compromise.',
        items: [
          { id: 'a', title: 'Isolate the device', detail: 'Move the IoT device to an isolated network segment.', correct: true },
          { id: 'b', title: 'Block C2 IPs', detail: 'Add the C2 server IPs to firewall blocklists.', correct: true },
          { id: 'c', title: 'Factory reset all IoT devices', detail: 'Reset every IoT device in the organization.', correct: false },
          { id: 'd', title: 'Audit similar IoT devices', detail: 'Check other IoT devices for the same indicators.', correct: true },
          { id: 'e', title: 'Disable all network monitoring', detail: 'Turn off IDS/IPS to stop alerts.', correct: false },
          { id: 'f', title: 'Update firmware', detail: 'Apply the latest firmware update to the device.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'C2 connections, default credentials, unexpected SSH, and DNS anomalies confirm IoT compromise. Isolation, C2 blocking, peer device auditing, and firmware updates are priorities.',
  },
  {
    id: 'so-07',
    title: 'Analyze a potential data exfiltration',
    description:
      'A DLP alert has flagged unusual outbound data transfers. Review the network and DLP logs, determine if data exfiltration is occurring, and select response actions.',
    tasks: [
      {
        id: 'so-07-t1',
        title: 'Task 1: Identify exfiltration indicators',
        instruction: 'Select all indicators that suggest data exfiltration.',
        items: [
          { id: 'a', title: 'Large uploads to unknown cloud storage', detail: '5 GB uploaded to a personal cloud storage account.', correct: true },
          { id: 'b', title: 'Off-hours data transfer', detail: 'Large data transfers occurring at 2 a.m.', correct: true },
          { id: 'c', title: 'Normal email attachments', detail: 'Standard business emails with typical attachment sizes.', correct: false },
          { id: 'd', title: 'Compressed archives to external IP', detail: 'Password-protected ZIP files sent to an unknown external address.', correct: true },
          { id: 'e', title: 'Routine backup traffic', detail: 'Scheduled backups to the corporate backup server.', correct: false },
          { id: 'f', title: 'USB device activity spike', detail: 'Large volumes of data copied to a USB drive.', correct: true },
        ],
      },
      {
        id: 'so-07-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for suspected data exfiltration.',
        items: [
          { id: 'a', title: 'Isolate the affected host', detail: 'Disconnect the system from the network.', correct: true },
          { id: 'b', title: 'Preserve DLP and network logs', detail: 'Ensure all relevant logs are retained for investigation.', correct: true },
          { id: 'c', title: 'Delete the uploaded files', detail: 'Remove the exfiltrated data from cloud storage.', correct: false },
          { id: 'd', title: 'Block external uploads', detail: 'Temporarily block large outbound transfers.', correct: true },
          { id: 'e', title: 'Reformat the affected system', detail: 'Wipe the system to remove evidence.', correct: false },
          { id: 'f', title: 'Interview the user', detail: 'Speak with the employee about the data transfers.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Off-hours transfers, unknown cloud destinations, compressed archives, and USB spikes indicate exfiltration. Isolation, log preservation, transfer blocking, and user interviews are appropriate responses.',
  },
  {
    id: 'so-08',
    title: 'Investigate suspicious DNS activity',
    description:
      'DNS query logs show unusual patterns from an internal host. Review the DNS data, identify the type of DNS abuse, and determine response actions.',
    tasks: [
      {
        id: 'so-08-t1',
        title: 'Task 1: Identify DNS abuse type',
        instruction: 'Select all indicators that reveal the type of DNS abuse.',
        items: [
          { id: 'a', title: 'High-entropy subdomain queries', detail: 'Queries with random-looking subdomain labels.', correct: true },
          { id: 'b', title: 'Regular intervals to same domain', detail: 'Queries occurring every 60 seconds to the same domain.', correct: true },
          { id: 'c', title: 'Queries to popular websites', detail: 'Resolving well-known domains like google.com.', correct: false },
          { id: 'd', title: 'Large DNS response sizes', detail: 'DNS responses significantly larger than queries.', correct: true },
          { id: 'e', title: 'NXDOMAIN responses', detail: 'Queries for non-existent domains.', correct: false },
          { id: 'f', title: 'TXT record queries with encoded data', detail: 'TXT record queries containing Base64-encoded strings.', correct: true },
        ],
      },
      {
        id: 'so-08-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for this DNS-based threat.',
        items: [
          { id: 'a', title: 'Isolate the affected host', detail: 'Disconnect the system from the network.', correct: true },
          { id: 'b', title: 'Block malicious domains', detail: 'Add identified malicious domains to DNS blocklists.', correct: true },
          { id: 'c', title: 'Disable DNS logging', detail: 'Turn off DNS query logging to reduce noise.', correct: false },
          { id: 'd', title: 'Capture DNS traffic', detail: 'Preserve DNS query and response data for analysis.', correct: true },
          { id: 'e', title: 'Change DNS resolver', detail: 'Switch to a different public DNS resolver.', correct: false },
          { id: 'f', title: 'Review endpoint logs', detail: 'Check the host for related malicious activity.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'High-entropy subdomains, regular intervals, large responses, and encoded TXT queries indicate DNS tunneling or beaconing. Isolation, domain blocking, traffic capture, and endpoint review are priorities.',
  },
  {
    id: 'so-09',
    title: 'Assess a third-party vendor risk',
    description:
      'A third-party vendor requests access to internal systems. Review the vendor security assessment, identify risks, and recommend access controls.',
    tasks: [
      {
        id: 'so-09-t1',
        title: 'Task 1: Identify vendor security risks',
        instruction: 'Select all findings that represent significant vendor security risks.',
        items: [
          { id: 'a', title: 'No SOC 2 Type II certification', detail: 'Vendor cannot demonstrate security controls through independent audit.', correct: true },
          { id: 'b', title: 'Data encryption in transit', detail: 'Vendor encrypts all data transmissions using TLS 1.2+.', correct: false },
          { id: 'c', title: 'Unpatched critical vulnerabilities', detail: 'Vendor systems have critical vulnerabilities unpatched for 90+ days.', correct: true },
          { id: 'd', title: 'Employee security training program', detail: 'Vendor conducts regular security awareness training.', correct: false },
          { id: 'e', title: 'No incident response plan', detail: 'Vendor cannot provide documentation of incident response procedures.', correct: true },
          { id: 'f', title: 'Background checks for employees', detail: 'Vendor conducts background checks on all employees.', correct: false },
        ],
      },
      {
        id: 'so-09-t2',
        title: 'Task 2: Select access control recommendations',
        instruction: 'Choose the appropriate controls for granting third-party access.',
        items: [
          { id: 'a', title: 'Require MFA for all vendor access', detail: 'Mandate multi-factor authentication for vendor connections.', correct: true },
          { id: 'b', title: 'Grant domain admin rights', detail: 'Provide full administrative access for convenience.', correct: false },
          { id: 'c', title: 'Implement time-bound access', detail: 'Grant access only for the required duration.', correct: true },
          { id: 'd', title: 'Disable all logging for vendor access', detail: 'Turn off audit logs to reduce storage costs.', correct: false },
          { id: 'e', title: 'Require security assessment', detail: 'Conduct a security assessment before granting access.', correct: true },
          { id: 'f', title: 'Monitor vendor activity', detail: 'Log and review all vendor actions in the environment.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Missing SOC 2 certification, unpatched vulnerabilities, and no incident response plan are significant vendor risks. MFA, time-bound access, security assessments, and activity monitoring are essential controls.',
  },
  {
    id: 'so-10',
    title: 'Investigate a compromised service account',
    description:
      'A service account is authenticating from unexpected locations. Review the authentication logs, determine if the account is compromised, and select response actions.',
    tasks: [
      {
        id: 'so-10-t1',
        title: 'Task 1: Identify compromise indicators',
        instruction: 'Select all indicators that suggest the service account is compromised.',
        items: [
          { id: 'a', title: 'Interactive logons detected', detail: 'Service account producing interactive logon sessions.', correct: true },
          { id: 'b', title: 'Expected automated task execution', detail: 'Account running scheduled tasks as configured.', correct: false },
          { id: 'c', title: 'Sign-in from unexpected country', detail: 'Authentication from a country where the organization has no operations.', correct: true },
          { id: 'd', title: 'Normal service principal usage', detail: 'Account using its assigned service principal.', correct: false },
          { id: 'e', title: 'Password never changed', detail: 'Service account password has not been rotated in 2 years.', correct: true },
          { id: 'f', title: 'MFA prompt triggered', detail: 'Service account triggered an MFA challenge.', correct: false },
        ],
      },
      {
        id: 'so-10-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the compromised service account.',
        items: [
          { id: 'a', title: 'Reset the service account password', detail: 'Immediately change the service account credentials.', correct: true },
          { id: 'b', title: 'Revoke all active sessions', detail: 'Invalidate all existing authentication tokens.', correct: true },
          { id: 'c', title: 'Delete all services in the organization', detail: 'Remove all Windows services.', correct: false },
          { id: 'd', title: 'Audit service account usage', detail: 'Review all actions performed by the account in the last 30 days.', correct: true },
          { id: 'e', title: 'Ignore the activity if services are running', detail: 'Assume it is normal if services appear healthy.', correct: false },
          { id: 'f', title: 'Implement managed service accounts', detail: 'Migrate to group-managed service accounts with automatic rotation.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Interactive logons, foreign sign-ins, and stale passwords confirm service account compromise. Credential reset, session revocation, usage auditing, and migration to managed accounts are priorities.',
  },
  {
    id: 'so-11',
    title: 'Analyze a brute-force attack pattern',
    description:
      'Authentication logs show a high volume of failed login attempts. Review the attack pattern, determine the attack type, and select defensive actions.',
    tasks: [
      {
        id: 'so-11-t1',
        title: 'Task 1: Identify the attack type',
        instruction: 'Select all indicators that characterize the brute-force attack.',
        items: [
          { id: 'a', title: 'Many accounts targeted from one IP', detail: 'Hundreds of different usernames attempted from a single source.', correct: true },
          { id: 'b', title: 'One account targeted with many passwords', detail: 'Thousands of password attempts against a single username.', correct: true },
          { id: 'c', title: 'Successful login after multiple failures', detail: 'A successful authentication following repeated failures.', correct: true },
          { id: 'd', title: 'Normal user login patterns', detail: 'Typical login behavior during business hours.', correct: false },
          { id: 'e', title: 'Account lockout events', detail: 'Multiple accounts locked after exceeding failure thresholds.', correct: true },
          { id: 'f', title: 'MFA challenge succeeding', detail: 'Multi-factor authentication completed successfully.', correct: false },
        ],
      },
      {
        id: 'so-11-t2',
        title: 'Task 2: Select defensive actions',
        instruction: 'Choose the appropriate defensive actions against this brute-force attack.',
        items: [
          { id: 'a', title: 'Block source IP', detail: 'Add the attacking IP address to firewall blocklists.', correct: true },
          { id: 'b', title: 'Enforce account lockout policy', detail: 'Configure account lockout after 5 failed attempts.', correct: true },
          { id: 'c', title: 'Disable all authentication', detail: 'Turn off all login services to stop the attack.', correct: false },
          { id: 'd', title: 'Implement rate limiting', detail: 'Limit authentication attempts per IP address.', correct: true },
          { id: 'e', title: 'Remove all password policies', detail: 'Eliminate password complexity requirements.', correct: false },
          { id: 'f', title: 'Enable CAPTCHA on login pages', detail: 'Add CAPTCHA challenges to prevent automated attacks.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Multiple targeted accounts, password spraying against single accounts, and lockout events characterize brute-force attacks. IP blocking, lockout policies, rate limiting, and CAPTCHA are effective defenses.',
  },
  {
    id: 'so-12',
    title: 'Investigate suspicious email forwarding rules',
    description:
      'A user reports unauthorized access to their email. Review the mailbox configuration, identify signs of compromise, and determine response actions.',
    tasks: [
      {
        id: 'so-12-t1',
        title: 'Task 1: Identify mailbox compromise indicators',
        instruction: 'Select all indicators that suggest the mailbox has been compromised.',
        items: [
          { id: 'a', title: 'New forwarding rule to external address', detail: 'A rule forwarding all incoming mail to an unknown external address.', correct: true },
          { id: 'b', title: 'Inbox rule created after password change', detail: 'A rule created immediately after a password change from a new location.', correct: true },
          { id: 'c', title: 'Normal sent items', detail: 'Sent folder contains only expected business emails.', correct: false },
          { id: 'd', title: 'Deleted items emptied recently', detail: 'The deleted items folder was emptied outside normal behavior.', correct: true },
          { id: 'e', title: 'Read receipts received', detail: 'Normal read receipts for sent emails.', correct: false },
          { id: 'f', title: 'Unfamiliar sign-in activity', detail: 'Sign-ins from unrecognized locations or devices.', correct: true },
        ],
      },
      {
        id: 'so-12-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the compromised mailbox.',
        items: [
          { id: 'a', title: 'Disable the forwarding rule', detail: 'Remove the unauthorized forwarding rule immediately.', correct: true },
          { id: 'b', title: 'Reset account password', detail: 'Force a password reset for the compromised account.', correct: true },
          { id: 'c', title: 'Delete the mailbox permanently', detail: 'Remove the entire mailbox to prevent further access.', correct: false },
          { id: 'd', title: 'Identify forwarded messages', detail: 'Determine what messages were forwarded and what data was exposed.', correct: true },
          { id: 'e', title: 'Ignore the forwarding rule', detail: 'Leave the rule in place for monitoring purposes.', correct: false },
          { id: 'f', title: 'Notify affected parties', detail: 'Inform anyone whose data may have been exposed.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Unauthorized forwarding rules, suspicious creation timing, emptied deleted items, and unfamiliar sign-ins confirm mailbox compromise. Rule removal, password reset, exposure assessment, and notification are critical.',
  },
  {
    id: 'so-13',
    title: 'Assess network segmentation effectiveness',
    description:
      'A network architecture review has been conducted to assess segmentation. Review the findings, identify segmentation gaps, and recommend improvements.',
    tasks: [
      {
        id: 'so-13-t1',
        title: 'Task 1: Identify segmentation gaps',
        instruction: 'Select all findings that represent network segmentation weaknesses.',
        items: [
          { id: 'a', title: 'Flat network topology', detail: 'All systems on a single broadcast domain without VLAN separation.', correct: true },
          { id: 'b', title: 'Critical assets on user VLAN', detail: 'Domain controllers and databases on the same VLAN as user workstations.', correct: true },
          { id: 'c', title: 'Inter-VLAN routing with ACLs', detail: 'Traffic between VLANs filtered by access control lists.', correct: false },
          { id: 'd', title: 'Guest Wi-Fi isolated from corporate', detail: 'Guest wireless network fully isolated from production systems.', correct: false },
          { id: 'e', title: 'No firewall between DMZ and internal', detail: 'Direct connectivity between DMZ and internal networks without filtering.', correct: true },
          { id: 'f', title: 'East-west traffic monitoring', detail: 'Network traffic between internal zones is monitored.', correct: false },
        ],
      },
      {
        id: 'so-13-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate improvements for the segmentation gaps.',
        items: [
          { id: 'a', title: 'Implement VLANs', detail: 'Segment the network into VLANs by function.', correct: true },
          { id: 'b', title: 'Deploy internal firewalls', detail: 'Add firewall filtering between critical and user segments.', correct: true },
          { id: 'c', title: 'Remove all network monitoring', detail: 'Turn off traffic analysis to reduce complexity.', correct: false },
          { id: 'd', title: 'Flatten network further', detail: 'Combine all segments into a single flat network.', correct: false },
          { id: 'e', title: 'Implement micro-segmentation', detail: 'Apply granular segmentation at the workload level.', correct: true },
          { id: 'f', title: 'Allow all inter-VLAN traffic', detail: 'Remove all ACLs to simplify network management.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Flat topology, critical assets on user VLANs, and no DMZ-internal firewall are critical gaps. VLAN implementation, internal firewalls, and micro-segmentation are essential improvements.',
  },
  {
    id: 'so-14',
    title: 'Investigate a potential insider threat',
    description:
      'A user behavior analytics alert has flagged an employee for unusual activity. Review the behavioral indicators, assess the threat, and determine response actions.',
    tasks: [
      {
        id: 'so-14-t1',
        title: 'Task 1: Identify insider threat indicators',
        instruction: 'Select all behaviors that indicate a potential insider threat.',
        items: [
          { id: 'a', title: 'Accessing sensitive files outside job role', detail: 'Employee accessing financial records with no business need.', correct: true },
          { id: 'b', title: 'Mass download of customer data', detail: 'Downloaded 10,000 customer records to a USB drive.', correct: true },
          { id: 'c', title: 'Normal job-related file access', detail: 'Accessing files required for daily work responsibilities.', correct: false },
          { id: 'd', title: 'Login from home during notice period', detail: 'Employee signed in from home after submitting resignation.', correct: true },
          { id: 'e', title: 'Regular security training attendance', detail: 'Employee completed all required security training.', correct: false },
          { id: 'f', title: 'Attempting to disable audit logging', detail: 'Employee attempted to turn off logging on their workstation.', correct: true },
        ],
      },
      {
        id: 'so-14-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for this insider threat.',
        items: [
          { id: 'a', title: 'Revoke access immediately', detail: 'Disable the employee access pending investigation.', correct: true },
          { id: 'b', title: 'Preserve all activity logs', detail: 'Ensure complete logging of all employee actions.', correct: true },
          { id: 'c', title: 'Confront the employee publicly', detail: 'Accuse the employee in a team meeting.', correct: false },
          { id: 'd', title: 'Engage legal and HR', detail: 'Involve legal counsel and human resources.', correct: true },
          { id: 'e', title: 'Ignore the behavior if no damage yet', detail: 'Wait for actual damage before taking action.', correct: false },
          { id: 'f', title: 'Terminate employment immediately', detail: 'Fire the employee without investigation.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Out-of-role access, mass data downloads, notice-period logins, and logging tampering indicate insider threat. Immediate access revocation, log preservation, and legal/HR engagement are priorities.',
  },
  {
    id: 'so-15',
    title: 'Analyze a cross-site scripting attack',
    description:
      'A web application is under attack using cross-site scripting. Review the attack indicators, identify the XSS type, and select remediation actions.',
    tasks: [
      {
        id: 'so-15-t1',
        title: 'Task 1: Identify XSS indicators',
        instruction: 'Select all indicators that reveal the type and presence of XSS.',
        items: [
          { id: 'a', title: 'Script tags in user input fields', detail: 'Search fields containing script tags and JavaScript code.', correct: true },
          { id: 'b', title: 'Session cookies stolen', detail: 'User session cookies being transmitted to external servers.', correct: true },
          { id: 'c', title: 'Normal web page rendering', detail: 'Pages display correctly with no unexpected behavior.', correct: false },
          { id: 'd', title: 'Reflected payload in URL', detail: 'Malicious script reflected back in the response from a URL parameter.', correct: true },
          { id: 'e', title: 'SSL certificate errors', detail: 'Browser shows certificate warnings for the site.', correct: false },
          { id: 'f', title: 'Stored payload in database', detail: 'Malicious script stored in the database and served to all users.', correct: true },
        ],
      },
      {
        id: 'so-15-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate remediation actions for the XSS vulnerability.',
        items: [
          { id: 'a', title: 'Implement input validation', detail: 'Validate and sanitize all user inputs.', correct: true },
          { id: 'b', title: 'Apply output encoding', detail: 'Encode output to prevent script execution.', correct: true },
          { id: 'c', title: 'Disable all JavaScript', detail: 'Turn off JavaScript entirely on the web server.', correct: false },
          { id: 'd', title: 'Deploy web application firewall', detail: 'Add WAF rules to detect and block XSS patterns.', correct: true },
          { id: 'e', title: 'Remove all user input fields', detail: 'Eliminate forms to prevent any user input.', correct: false },
          { id: 'f', title: 'Set HttpOnly flag on cookies', detail: 'Mark session cookies as HttpOnly to prevent JavaScript access.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Script tags in inputs, stolen cookies, reflected payloads, and stored payloads confirm XSS. Input validation, output encoding, WAF deployment, and HttpOnly cookies are essential defenses.',
  },
  {
    id: 'so-16',
    title: 'Investigate a DDoS attack in progress',
    description:
      'The company website is experiencing a distributed denial-of-service attack. Review the traffic analysis, identify the attack type, and select mitigation actions.',
    tasks: [
      {
        id: 'so-16-t1',
        title: 'Task 1: Identify DDoS attack indicators',
        instruction: 'Select all indicators that characterize the DDoS attack.',
        items: [
          { id: 'a', title: 'Traffic spike from thousands of sources', detail: 'Massive increase in requests from diverse IP addresses.', correct: true },
          { id: 'b', title: 'Similar request patterns', detail: 'All requests have identical characteristics suggesting automation.', correct: true },
          { id: 'c', title: 'Normal user traffic patterns', detail: 'Traffic consistent with typical user behavior.', correct: false },
          { id: 'd', title: 'Single source IP flooding', detail: 'One IP address sending all the malicious traffic.', correct: false },
          { id: 'e', title: 'DNS amplification responses', detail: 'Large DNS responses to small queries from spoofed sources.', correct: true },
          { id: 'f', title: 'Website loading normally', detail: 'The website responds quickly with no performance issues.', correct: false },
        ],
      },
      {
        id: 'so-16-t2',
        title: 'Task 2: Select mitigation actions',
        instruction: 'Choose the appropriate mitigation actions for the DDoS attack.',
        items: [
          { id: 'a', title: 'Activate DDoS mitigation service', detail: 'Enable cloud-based DDoS protection or scrubbing service.', correct: true },
          { id: 'b', title: 'Block source IP ranges', detail: 'Add attacking IP ranges to firewall blocklists.', correct: true },
          { id: 'c', title: 'Shut down the web server', detail: 'Turn off the server to stop the attack.', correct: false },
          { id: 'd', title: 'Implement rate limiting', detail: 'Limit requests per IP address to reduce impact.', correct: true },
          { id: 'e', title: 'Disable all security controls', detail: 'Turn off all filtering to allow traffic to flow.', correct: false },
          { id: 'f', title: 'Scale up server resources', detail: 'Add more servers to handle the increased load.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Traffic spikes from thousands of sources, identical patterns, and DNS amplification confirm DDoS. Mitigation services, IP blocking, rate limiting, and resource scaling are effective responses.',
  },
  {
    id: 'so-17',
    title: 'Assess cloud identity and access management',
    description:
      'A cloud IAM audit has identified policy violations and excessive permissions. Review the findings, identify risks, and recommend fixes.',
    tasks: [
      {
        id: 'so-17-t1',
        title: 'Task 1: Identify IAM policy violations',
        instruction: 'Select all findings that represent IAM security risks.',
        items: [
          { id: 'a', title: 'Overly permissive IAM roles', detail: 'Roles granting full administrative access when least privilege is required.', correct: true },
          { id: 'b', title: 'Users with MFA enabled', detail: 'All users have multi-factor authentication configured.', correct: false },
          { id: 'c', title: 'Inactive accounts with active access keys', detail: 'Disabled accounts still have active API access keys.', correct: true },
          { id: 'd', title: 'Regular access key rotation', detail: 'Access keys rotated every 90 days as policy requires.', correct: false },
          { id: 'e', title: 'Shared service account credentials', detail: 'Multiple users sharing a single service account.', correct: true },
          { id: 'f', title: 'Conditional access policies enforced', detail: 'Access policies restrict logins by location and device.', correct: false },
        ],
      },
      {
        id: 'so-17-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate fixes for the IAM policy violations.',
        items: [
          { id: 'a', title: 'Apply least privilege', detail: 'Reduce role permissions to minimum required access.', correct: true },
          { id: 'b', title: 'Revoke inactive access keys', detail: 'Delete access keys for disabled accounts.', correct: true },
          { id: 'c', title: 'Disable MFA for service accounts', detail: 'Remove MFA from non-human accounts.', correct: false },
          { id: 'd', title: 'Eliminate shared credentials', detail: 'Create individual accounts for each user.', correct: true },
          { id: 'e', title: 'Remove all access policies', detail: 'Delete all conditional access policies.', correct: false },
          { id: 'f', title: 'Implement access reviews', detail: 'Conduct regular reviews of IAM permissions.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Overly permissive roles, inactive access keys, and shared credentials are critical IAM risks. Least privilege, key revocation, individual accounts, and regular reviews are essential fixes.',
  },
  {
    id: 'so-18',
    title: 'Investigate a compromised build pipeline',
    description:
      'A CI/CD pipeline is suspected of being compromised. Review the pipeline logs, identify indicators of tampering, and determine response actions.',
    tasks: [
      {
        id: 'so-18-t1',
        title: 'Task 1: Identify pipeline compromise indicators',
        instruction: 'Select all indicators that suggest the build pipeline has been tampered with.',
        items: [
          { id: 'a', title: 'New scheduled task on build server', detail: 'An unknown scheduled task creating outbound connections.', correct: true },
          { id: 'b', title: 'Normal build completion times', detail: 'Builds completing within expected timeframes.', correct: false },
          { id: 'c', title: 'Modified build scripts', detail: 'Build scripts contain unauthorized code changes.', correct: true },
          { id: 'd', title: 'Standard dependency downloads', detail: 'Only approved dependencies being fetched.', correct: false },
          { id: 'e', title: 'Outbound connections to foreign IPs', detail: 'Build server connecting to unexpected external addresses.', correct: true },
          { id: 'f', title: 'Code signing certificates valid', detail: 'All build artifacts have valid code signatures.', correct: false },
        ],
      },
      {
        id: 'so-18-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the compromised build pipeline.',
        items: [
          { id: 'a', title: 'Isolate the build server', detail: 'Disconnect the build server from the network.', correct: true },
          { id: 'b', title: 'Invalidate recent build artifacts', detail: 'Flag all recent builds as potentially compromised.', correct: true },
          { id: 'c', title: 'Continue using existing artifacts', detail: 'Deploy recent builds to production.', correct: false },
          { id: 'd', title: 'Rebuild pipeline from known-good state', detail: 'Reconstruct the pipeline from trusted sources.', correct: true },
          { id: 'e', title: 'Disable all code signing', detail: 'Turn off code signing to prevent abuse.', correct: false },
          { id: 'f', title: 'Audit all pipeline changes', detail: 'Review all modifications to pipeline configuration.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Unknown scheduled tasks, modified scripts, and foreign outbound connections confirm pipeline compromise. Isolation, artifact invalidation, pipeline rebuild, and change audit are critical.',
  },
  {
    id: 'so-19',
    title: 'Analyze a password spray attack',
    description:
      'Authentication logs show a pattern consistent with password spraying. Review the attack characteristics, confirm the attack type, and select defensive actions.',
    tasks: [
      {
        id: 'so-19-t1',
        title: 'Task 1: Identify password spray indicators',
        instruction: 'Select all indicators that characterize a password spray attack.',
        items: [
          { id: 'a', title: 'Same password tried across many accounts', detail: 'A small set of passwords attempted against hundreds of usernames.', correct: true },
          { id: 'b', title: 'Single account with thousands of attempts', detail: 'One username targeted with thousands of different passwords.', correct: false },
          { id: 'c', title: 'Distributed source IPs', detail: 'Attempts coming from many different IP addresses to evade detection.', correct: true },
          { id: 'd', title: 'Normal user login patterns', detail: 'Typical login behavior with expected success rates.', correct: false },
          { id: 'e', title: 'Low failure rate per account', detail: 'Only a few failures per account, staying below lockout thresholds.', correct: true },
          { id: 'f', title: 'Successful login from expected location', detail: 'A user logging in from their normal location.', correct: false },
        ],
      },
      {
        id: 'so-19-t2',
        title: 'Task 2: Select defensive actions',
        instruction: 'Choose the appropriate defensive actions against password spraying.',
        items: [
          { id: 'a', title: 'Implement MFA', detail: 'Require multi-factor authentication for all accounts.', correct: true },
          { id: 'b', title: 'Enforce account lockout', detail: 'Lock accounts after a low number of failures.', correct: true },
          { id: 'c', title: 'Remove all password policies', detail: 'Eliminate password requirements to reduce friction.', correct: false },
          { id: 'd', title: 'Monitor for spray patterns', detail: 'Create alerts for distributed failed login patterns.', correct: true },
          { id: 'e', title: 'Allow unlimited login attempts', detail: 'Remove all authentication limits.', correct: false },
          { id: 'f', title: 'Block all external authentication', detail: 'Prevent any login from outside the network.', correct: false },
        ],
      },
    ],
    passingScore: 6,
    summary:
      'Same passwords across many accounts, distributed sources, and low per-account failure rates characterize password spraying. MFA, low lockout thresholds, and spray pattern monitoring are effective defenses.',
  },
  {
    id: 'so-20',
    title: 'Investigate a compromised VPN gateway',
    description:
      'A VPN gateway is suspected of being exploited. Review the VPN logs, identify signs of unauthorized access, and determine response actions.',
    tasks: [
      {
        id: 'so-20-t1',
        title: 'Task 1: Identify VPN compromise indicators',
        instruction: 'Select all indicators that suggest unauthorized VPN access.',
        items: [
          { id: 'a', title: 'Multiple failed VPN logins from new countries', detail: 'Repeated authentication failures from unfamiliar locations.', correct: true },
          { id: 'b', title: 'Normal remote worker logins', detail: 'Expected VPN connections from known remote employees.', correct: false },
          { id: 'c', title: 'Successful login with stolen credentials', detail: 'A valid account authenticating from an unusual location and time.', correct: true },
          { id: 'd', title: 'VPN firmware up to date', detail: 'Gateway running current firmware.', correct: false },
          { id: 'e', title: 'New user accounts created without approval', detail: 'Unknown user accounts appearing in VPN logs.', correct: true },
          { id: 'f', title: 'Standard split tunneling configuration', detail: 'VPN configured with expected split tunneling rules.', correct: false },
        ],
      },
      {
        id: 'so-20-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the VPN compromise.',
        items: [
          { id: 'a', title: 'Revoke all VPN certificates', detail: 'Invalidate all existing VPN client certificates.', correct: true },
          { id: 'b', title: 'Reset all VPN user credentials', detail: 'Force password resets for all VPN users.', correct: true },
          { id: 'c', title: 'Disable VPN permanently', detail: 'Shut down all VPN access indefinitely.', correct: false },
          { id: 'd', title: 'Audit all VPN sessions', detail: 'Review all recent VPN connections for unauthorized access.', correct: true },
          { id: 'e', title: 'Ignore the failed login attempts', detail: 'Assume failed logins are just user errors.', correct: false },
          { id: 'f', title: 'Patch VPN gateway', detail: 'Apply the latest security patches to the VPN appliance.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Failed logins from new countries, stolen credential usage, and unauthorized accounts confirm VPN compromise. Certificate revocation, credential resets, session auditing, and patching are critical.',
  },
  {
    id: 'vm-04',
    title: 'Prioritize cloud container vulnerabilities',
    description:
      'A container image scan has identified vulnerabilities across multiple images. Review the findings, prioritize remediation, and select appropriate controls.',
    tasks: [
      {
        id: 'vm-04-t1',
        title: 'Task 1: Identify critical container vulnerabilities',
        instruction: 'Select the findings that represent the highest risk.',
        items: [
          { id: 'a', title: 'Critical RCE in base image', detail: 'Remote code execution vulnerability in the container base OS.', correct: true },
          { id: 'b', title: 'High-severity library vulnerability', detail: 'Known exploit in a Python library with CVSS 8.5.', correct: true },
          { id: 'c', title: 'Low-severity configuration issue', detail: 'Minor misconfiguration with minimal security impact.', correct: false },
          { id: 'd', title: 'Image running as root', detail: 'Container running with root privileges by default.', correct: true },
          { id: 'e', title: 'Latest image tag used', detail: 'Using the most recent version tag.', correct: false },
          { id: 'f', title: 'Secrets embedded in image', detail: 'API keys and passwords found in image layers.', correct: true },
        ],
      },
      {
        id: 'vm-04-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate remediation actions for the container vulnerabilities.',
        items: [
          { id: 'a', title: 'Rebuild image from patched base', detail: 'Create new image with updated base OS.', correct: true },
          { id: 'b', title: 'Update vulnerable libraries', detail: 'Upgrade Python libraries to patched versions.', correct: true },
          { id: 'c', title: 'Ignore low-severity findings', detail: 'Close all low-severity findings as accepted risk.', correct: false },
          { id: 'd', title: 'Remove secrets from images', detail: 'Eliminate embedded credentials and use secrets management.', correct: true },
          { id: 'e', title: 'Continue running as root', detail: 'Keep containers running as root for convenience.', correct: false },
          { id: 'f', title: 'Scan images in CI/CD', detail: 'Add automated image scanning to the pipeline.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Critical RCE, library vulnerabilities, root execution, and embedded secrets are high-risk findings. Image rebuilds, library updates, secrets management, and CI/CD scanning are priorities.',
  },
  {
    id: 'vm-05',
    title: 'Assess endpoint security coverage',
    description:
      'An endpoint security audit has been conducted across the organization. Review the coverage metrics, identify gaps, and recommend improvements.',
    tasks: [
      {
        id: 'vm-05-t1',
        title: 'Task 1: Identify endpoint coverage gaps',
        instruction: 'Select all metrics that indicate endpoint security gaps.',
        items: [
          { id: 'a', title: 'EDR deployed on 60 percent of endpoints', detail: '40 percent of endpoints lack EDR coverage.', correct: true },
          { id: 'b', title: 'All endpoints patched within 14 days', detail: '95 percent of endpoints patched within SLA.', correct: false },
          { id: 'c', title: 'No disk encryption on laptops', detail: 'Company laptops lack full-disk encryption.', correct: true },
          { id: 'd', title: 'Centralized logging configured', detail: 'All endpoints forwarding logs to SIEM.', correct: false },
          { id: 'e', title: 'Legacy OS still in production', detail: 'Windows 7 systems still operational.', correct: true },
          { id: 'f', title: 'Application allowlisting deployed', detail: 'Allowlisting active on all endpoints.', correct: false },
        ],
      },
      {
        id: 'vm-05-t2',
        title: 'Task 2: Select remediation actions',
        instruction: 'Choose the appropriate improvements for the endpoint coverage gaps.',
        items: [
          { id: 'a', title: 'Deploy EDR to all endpoints', detail: 'Extend EDR coverage to 100 percent of systems.', correct: true },
          { id: 'b', title: 'Enable full-disk encryption', detail: 'Encrypt all laptop drives.', correct: true },
          { id: 'c', title: 'Extend patch SLA to 90 days', detail: 'Give more time for patching.', correct: false },
          { id: 'd', title: 'Upgrade legacy operating systems', detail: 'Migrate Windows 7 to supported versions.', correct: true },
          { id: 'e', title: 'Disable all endpoint protection', detail: 'Turn off EDR to improve performance.', correct: false },
          { id: 'f', title: 'Deploy application allowlisting', detail: 'Implement allowlisting across all endpoints.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Incomplete EDR coverage, missing disk encryption, and legacy OS are critical gaps. Full EDR deployment, encryption enablement, OS upgrades, and allowlisting are priorities.',
  },
  {
    id: 'vm-06',
    title: 'Evaluate data loss prevention effectiveness',
    description:
      'A DLP program review has been conducted. Review the DLP metrics and findings, identify gaps, and recommend improvements.',
    tasks: [
      {
        id: 'vm-06-t1',
        title: 'Task 1: Identify DLP program gaps',
        instruction: 'Select all findings that indicate DLP program weaknesses.',
        items: [
          { id: 'a', title: 'DLP monitoring only email', detail: 'DLP only monitors email, missing cloud and endpoint channels.', correct: true },
          { id: 'b', title: 'DLP alerts reviewed within 4 hours', detail: 'All DLP alerts addressed within SLA.', correct: false },
          { id: 'c', title: 'No DLP policies for cloud storage', detail: 'Cloud uploads not monitored for sensitive data.', correct: true },
          { id: 'd', title: 'Regular DLP policy tuning', detail: 'DLP rules reviewed and tuned monthly.', correct: false },
          { id: 'e', title: 'High false positive rate', detail: 'DLP generating 80 percent false positives.', correct: true },
          { id: 'f', title: 'Endpoint DLP deployed', detail: 'Endpoint DLP monitoring USB and print activity.', correct: false },
        ],
      },
      {
        id: 'vm-06-t2',
        title: 'Task 2: Select DLP improvements',
        instruction: 'Choose the appropriate improvements for the DLP program gaps.',
        items: [
          { id: 'a', title: 'Expand DLP to cloud channels', detail: 'Add DLP monitoring for cloud storage and SaaS.', correct: true },
          { id: 'b', title: 'Tune DLP policies', detail: 'Reduce false positives through policy refinement.', correct: true },
          { id: 'c', title: 'Disable DLP for email', detail: 'Turn off email DLP to reduce noise.', correct: false },
          { id: 'd', title: 'Deploy endpoint DLP', detail: 'Add endpoint DLP for USB and print monitoring.', correct: true },
          { id: 'e', title: 'Ignore DLP alerts', detail: 'Stop reviewing DLP alerts entirely.', correct: false },
          { id: 'f', title: 'Implement data classification', detail: 'Classify data to improve DLP accuracy.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
    'Email-only coverage, no cloud policies, and high false positive rates are critical DLP gaps. Cloud expansion, policy tuning, endpoint DLP, and data classification are needed improvements.',
  },
  {
    id: 'vm-07',
    title: 'Assess email security controls',
    description:
      'An email security audit has been conducted. Review the findings, identify gaps in email security controls, and recommend fixes.',
    tasks: [
      {
        id: 'vm-07-t1',
        title: 'Task 1: Identify email security gaps',
        instruction: 'Select all findings that represent email security vulnerabilities.',
        items: [
          { id: 'a', title: 'SPF record missing', detail: 'Domain has no SPF record to prevent email spoofing.', correct: true },
          { id: 'b', title: 'DKIM signatures valid', detail: 'Outbound email properly signed with DKIM.', correct: false },
          { id: 'c', title: 'DMARC policy set to none', detail: 'DMARC policy does not reject failed authentication.', correct: true },
          { id: 'd', title: 'Email gateway spam filtering active', detail: 'Cloud email gateway filtering spam and malware.', correct: false },
          { id: 'e', title: 'No attachment sandboxing', detail: 'Email attachments delivered without sandbox analysis.', correct: true },
          { id: 'f', title: 'User reporting button enabled', detail: 'Users can report phishing emails.', correct: false },
        ],
      },
      {
        id: 'vm-07-t2',
        title: 'Task 2: Select email security improvements',
        instruction: 'Choose the appropriate improvements for the email security gaps.',
        items: [
          { id: 'a', title: 'Implement SPF record', detail: 'Add SPF record to prevent domain spoofing.', correct: true },
          { id: 'b', title: 'Configure DMARC rejection', detail: 'Set DMARC policy to reject failed authentication.', correct: true },
          { id: 'c', title: 'Disable spam filtering', detail: 'Turn off spam filter to reduce false positives.', correct: false },
          { id: 'd', title: 'Deploy attachment sandboxing', detail: 'Add sandbox analysis for email attachments.', correct: true },
          { id: 'e', title: 'Remove phishing report button', detail: 'Disable user phishing reporting.', correct: false },
          { id: 'f', title: 'Enable DMARC reporting', detail: 'Generate DMARC aggregate and forensic reports.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Missing SPF, permissive DMARC, and no attachment sandboxing are critical email security gaps. SPF implementation, DMARC rejection, sandboxing, and reporting are essential.',
  },
  {
    id: 'vm-08',
    title: 'Evaluate wireless network security',
    description:
      'A wireless security assessment has been conducted. Review the findings, identify vulnerabilities, and recommend security improvements.',
    tasks: [
      {
        id: 'vm-08-t1',
        title: 'Task 1: Identify wireless security vulnerabilities',
        instruction: 'Select all findings that represent wireless security risks.',
        items: [
          { id: 'a', title: 'WPA2-PSK with weak passphrase', detail: 'Wireless network using a dictionary-word passphrase.', correct: true },
          { id: 'b', title: 'WPA3-Enterprise deployed', detail: 'Latest wireless security with 802.1X authentication.', correct: false },
          { id: 'c', title: 'Hidden SSID', detail: 'Network SSID not broadcast publicly.', correct: false },
          { id: 'd', title: 'Rogue access point detected', detail: 'Unauthorized wireless AP on the corporate network.', correct: true },
          { id: 'e', title: 'Guest network isolated', detail: 'Guest Wi-Fi fully isolated from production network.', correct: false },
          { id: 'f', title: 'WPS enabled', detail: 'Wi-Fi Protected Setup enabled on access points.', correct: true },
        ],
      },
      {
        id: 'vm-08-t2',
        title: 'Task 2: Select wireless security improvements',
        instruction: 'Choose the appropriate improvements for the wireless vulnerabilities.',
        items: [
          { id: 'a', title: 'Migrate to WPA3-Enterprise', detail: 'Upgrade to WPA3 with 802.1X authentication.', correct: true },
          { id: 'b', title: 'Remove rogue access point', detail: 'Locate and disconnect the unauthorized AP.', correct: true },
          { id: 'c', title: 'Enable WPS for convenience', detail: 'Turn on WPS to simplify device connection.', correct: false },
          { id: 'd', title: 'Disable WPS', detail: 'Turn off Wi-Fi Protected Setup.', correct: true },
          { id: 'e', title: 'Broadcast SSID publicly', detail: 'Make SSID visible to everyone.', correct: false },
          { id: 'f', title: 'Implement wireless intrusion detection', detail: 'Deploy WIDS to detect rogue APs and attacks.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Weak WPA2 passphrase, rogue APs, and enabled WPS are critical wireless risks. WPA3-Enterprise migration, rogue AP removal, WPS disablement, and WIDS deployment are priorities.',
  },
  {
    id: 'vm-09',
    title: 'Assess database security controls',
    description:
      'A database security audit has been conducted. Review the findings, identify vulnerabilities, and recommend security improvements.',
    tasks: [
      {
        id: 'vm-09-t1',
        title: 'Task 1: Identify database security vulnerabilities',
        instruction: 'Select all findings that represent database security risks.',
        items: [
          { id: 'a', title: 'Default database credentials', detail: 'Database using factory default username and password.', correct: true },
          { id: 'b', title: 'Database encryption at rest', detail: 'All database files encrypted on disk.', correct: false },
          { id: 'c', title: 'Excessive user permissions', detail: 'Users have database admin rights unnecessarily.', correct: true },
          { id: 'd', title: 'Database activity monitoring', detail: 'All database queries logged and monitored.', correct: false },
          { id: 'e', title: 'Unpatched database version', detail: 'Database software three versions behind with known vulnerabilities.', correct: true },
          { id: 'f', title: 'Row-level security implemented', detail: 'Access controls limit data visibility by user role.', correct: false },
        ],
      },
      {
        id: 'vm-09-t2',
        title: 'Task 2: Select database security improvements',
        instruction: 'Choose the appropriate improvements for the database vulnerabilities.',
        items: [
          { id: 'a', title: 'Change default credentials', detail: 'Replace factory defaults with strong unique passwords.', correct: true },
          { id: 'b', title: 'Apply least privilege', detail: 'Reduce user permissions to minimum required.', correct: true },
          { id: 'c', title: 'Disable database logging', detail: 'Turn off query logging to improve performance.', correct: false },
          { id: 'd', title: 'Patch database software', detail: 'Update database to latest patched version.', correct: true },
          { id: 'e', title: 'Grant admin to all users', detail: 'Give everyone database admin for flexibility.', correct: false },
          { id: 'f', title: 'Enable transparent data encryption', detail: 'Encrypt database files at rest.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Default credentials, excessive permissions, and unpatched software are critical database risks. Credential changes, least privilege, patching, and encryption are essential improvements.',
  },
  {
    id: 'vm-10',
    title: 'Evaluate backup and recovery security',
    description:
      'A backup security assessment has been conducted. Review the findings, identify vulnerabilities, and recommend improvements to backup protection.',
    tasks: [
      {
        id: 'vm-10-t1',
        title: 'Task 1: Identify backup security vulnerabilities',
        instruction: 'Select all findings that represent backup security risks.',
        items: [
          { id: 'a', title: 'Backups stored on production network', detail: 'Backup files accessible from production systems.', correct: true },
          { id: 'b', title: 'Backups encrypted', detail: 'All backup data encrypted at rest.', correct: false },
          { id: 'c', title: 'No backup integrity testing', detail: 'Backups never tested for recoverability.', correct: true },
          { id: 'd', title: 'Air-gapped backup copy', detail: 'Offline backup copy stored securely.', correct: false },
          { id: 'e', title: 'Backup credentials shared', detail: 'Backup admin credentials shared among team.', correct: true },
          { id: 'f', title: 'Automated backup verification', detail: 'Backup integrity automatically verified.', correct: false },
        ],
      },
      {
        id: 'vm-10-t2',
        title: 'Task 2: Select backup security improvements',
        instruction: 'Choose the appropriate improvements for the backup vulnerabilities.',
        items: [
          { id: 'a', title: 'Implement offline backups', detail: 'Create air-gapped backup copies.', correct: true },
          { id: 'b', title: 'Test backup recovery', detail: 'Regularly test backup restoration procedures.', correct: true },
          { id: 'c', title: 'Store backups on production', detail: 'Keep all backups on the production network.', correct: false },
          { id: 'd', title: 'Eliminate shared credentials', detail: 'Implement individual accounts with MFA for backup access.', correct: true },
          { id: 'e', title: 'Disable backup encryption', detail: 'Turn off encryption to speed up backups.', correct: false },
          { id: 'f', title: 'Implement backup monitoring', detail: 'Monitor backup jobs for failures and anomalies.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Production-network backups, no integrity testing, and shared credentials are critical backup risks. Offline backups, recovery testing, individual accounts, and monitoring are essential.',
  },
  {
    id: 'vm-11',
    title: 'Assess physical security controls',
    description:
      'A physical security assessment of the data center has been conducted. Review the findings, identify vulnerabilities, and recommend improvements.',
    tasks: [
      {
        id: 'vm-11-t1',
        title: 'Task 1: Identify physical security vulnerabilities',
        instruction: 'Select all findings that represent physical security risks.',
        items: [
          { id: 'a', title: 'Server room door propped open', detail: 'Data center entrance frequently left unsecured.', correct: true },
          { id: 'b', title: 'Biometric access control', detail: 'Fingerprint readers controlling server room entry.', correct: false },
          { id: 'c', title: 'No visitor logging', detail: 'Visitors enter data center without signing in.', correct: true },
          { id: 'd', title: 'CCTV coverage complete', detail: 'All areas of data center under video surveillance.', correct: false },
          { id: 'e', title: 'Tailgating incidents reported', detail: 'Unauthorized individuals following employees into secure areas.', correct: true },
          { id: 'f', title: 'Environmental controls monitored', detail: 'Temperature and humidity continuously monitored.', correct: false },
        ],
      },
      {
        id: 'vm-11-t2',
        title: 'Task 2: Select physical security improvements',
        instruction: 'Choose the appropriate improvements for the physical security vulnerabilities.',
        items: [
          { id: 'a', title: 'Install door alarms', detail: 'Alert security when server room door is propped open.', correct: true },
          { id: 'b', title: 'Implement visitor management', detail: 'Require visitor sign-in and escort.', correct: true },
          { id: 'c', title: 'Remove all access controls', detail: 'Open server room to all employees.', correct: false },
          { id: 'd', title: 'Install mantrap', detail: 'Add two-door entry system to prevent tailgating.', correct: true },
          { id: 'e', title: 'Disable CCTV cameras', detail: 'Turn off video surveillance to save storage.', correct: false },
          { id: 'f', title: 'Conduct security awareness', detail: 'Train staff on physical security procedures.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Propped doors, no visitor logging, and tailgating are critical physical security risks. Door alarms, visitor management, mantraps, and staff training are essential improvements.',
  },
  {
    id: 'vm-12',
    title: 'Evaluate network access control effectiveness',
    description:
      'A network access control assessment has been conducted. Review the findings, identify gaps, and recommend improvements.',
    tasks: [
      {
        id: 'vm-12-t1',
        title: 'Task 1: Identify NAC gaps',
        instruction: 'Select all findings that indicate NAC program weaknesses.',
        items: [
          { id: 'a', title: 'No device authentication', detail: 'Devices connect to network without identity verification.', correct: true },
          { id: 'b', title: 'Endpoint compliance checking', detail: 'Devices checked for patching and AV before network access.', correct: false },
          { id: 'c', title: 'Open network ports on all switches', detail: 'All switch ports active with no port security.', correct: true },
          { id: 'd', title: 'Guest network isolated', detail: 'Guest devices isolated from production network.', correct: false },
          { id: 'e', title: 'No rogue device detection', detail: 'Unauthorized devices can connect undetected.', correct: true },
          { id: 'f', title: '802.1X deployed', detail: 'Network access control with certificate-based authentication.', correct: false },
        ],
      },
      {
        id: 'vm-12-t2',
        title: 'Task 2: Select NAC improvements',
        instruction: 'Choose the appropriate improvements for the NAC gaps.',
        items: [
          { id: 'a', title: 'Implement 802.1X', detail: 'Deploy certificate-based network authentication.', correct: true },
          { id: 'b', title: 'Enable endpoint compliance', detail: 'Check device health before granting network access.', correct: true },
          { id: 'c', title: 'Open all switch ports', detail: 'Activate all unused ports for convenience.', correct: false },
          { id: 'd', title: 'Disable rogue device detection', detail: 'Turn off alerts for unknown devices.', correct: false },
          { id: 'e', title: 'Deploy network segmentation', detail: 'Segment network by device type and compliance.', correct: true },
          { id: 'f', title: 'Implement port security', detail: 'Restrict switch ports to authorized MAC addresses.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'No authentication, open ports, and no rogue detection are critical NAC gaps. 802.1X, endpoint compliance checking, segmentation, and port security are essential improvements.',
  },
  {
    id: 'vm-13',
    title: 'Assess security awareness program effectiveness',
    description:
      'A security awareness program review has been conducted. Review the metrics and findings, identify gaps, and recommend improvements.',
    tasks: [
      {
        id: 'vm-13-t1',
        title: 'Task 1: Identify awareness program gaps',
        instruction: 'Select all findings that indicate awareness program weaknesses.',
        items: [
          { id: 'a', title: 'Phishing click rate of 35 percent', detail: '35 percent of employees click simulated phishing links.', correct: true },
          { id: 'b', title: 'Monthly security newsletters', detail: 'Regular security tips distributed to all staff.', correct: false },
          { id: 'c', title: 'No phishing simulations conducted', detail: 'Phishing simulation program not implemented.', correct: true },
          { id: 'd', title: 'New hire security training', detail: 'Security training required for all new employees.', correct: false },
          { id: 'e', title: 'No reporting mechanism for suspicious emails', detail: 'Users have no way to report phishing attempts.', correct: true },
          { id: 'f', title: 'Regular security champions program', detail: 'Department security champions promote awareness.', correct: false },
        ],
      },
      {
        id: 'vm-13-t2',
        title: 'Task 2: Select awareness program improvements',
        instruction: 'Choose the appropriate improvements for the awareness program gaps.',
        items: [
          { id: 'a', title: 'Implement phishing simulations', detail: 'Conduct regular simulated phishing campaigns.', correct: true },
          { id: 'b', title: 'Deploy phishing report button', detail: 'Add email plugin for reporting suspicious messages.', correct: true },
          { id: 'c', title: 'Reduce training frequency', detail: 'Cut training to once per year to save time.', correct: false },
          { id: 'd', title: 'Targeted training for high-clickers', detail: 'Provide additional training for repeat clickers.', correct: true },
          { id: 'e', title: 'Remove all security training', detail: 'Eliminate security awareness program entirely.', correct: false },
          { id: 'f', title: 'Implement gamification', detail: 'Add security awareness games and rewards.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'High click rates, no simulations, and no reporting mechanism are critical awareness gaps. Simulations, report buttons, targeted training, and gamification are effective improvements.',
  },
  {
    id: 'vm-14',
    title: 'Evaluate incident response readiness',
    description:
      'An incident response readiness assessment has been conducted. Review the findings, identify gaps, and recommend improvements.',
    tasks: [
      {
        id: 'vm-14-t1',
        title: 'Task 1: Identify incident response gaps',
        instruction: 'Select all findings that indicate incident response program weaknesses.',
        items: [
          { id: 'a', title: 'No incident response plan', detail: 'Organization has no documented IR plan.', correct: true },
          { id: 'b', title: 'IR plan tested annually', detail: 'Tabletop exercises conducted yearly.', correct: false },
          { id: 'c', title: 'No incident classification scheme', detail: 'Incidents not categorized by severity.', correct: true },
          { id: 'd', title: '24/7 incident hotline available', detail: 'Staff can report incidents at any time.', correct: false },
          { id: 'e', title: 'No communication templates', detail: 'No pre-built notification templates for incidents.', correct: true },
          { id: 'f', title: 'IR team roles defined', detail: 'Clear roles and responsibilities documented.', correct: false },
        ],
      },
      {
        id: 'vm-14-t2',
        title: 'Task 2: Select incident response improvements',
        instruction: 'Choose the appropriate improvements for the IR gaps.',
        items: [
          { id: 'a', title: 'Develop incident response plan', detail: 'Create comprehensive IR plan with procedures.', correct: true },
          { id: 'b', title: 'Implement incident classification', detail: 'Create severity-based incident classification scheme.', correct: true },
          { id: 'c', title: 'Remove incident hotline', detail: 'Disable incident reporting number.', correct: false },
          { id: 'd', title: 'Create communication templates', detail: 'Build pre-built notification templates.', correct: true },
          { id: 'e', title: 'Conduct tabletop exercises', detail: 'Run regular IR simulation exercises.', correct: true },
          { id: 'f', title: 'Eliminate IR team roles', detail: 'Remove role definitions for flexibility.', correct: false },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'No IR plan, no classification, and no templates are critical gaps. Plan development, classification schemes, templates, and tabletop exercises are essential IR improvements.',
  },
  {
    id: 'vm-15',
    title: 'Assess vendor management security',
    description:
      'A vendor management security review has been conducted. Review the findings, identify risks, and recommend improvements.',
    tasks: [
      {
        id: 'vm-15-t1',
        title: 'Task 1: Identify vendor management gaps',
        instruction: 'Select all findings that indicate vendor management security weaknesses.',
        items: [
          { id: 'a', title: 'No vendor security assessments', detail: 'Vendors never assessed for security posture.', correct: true },
          { id: 'b', title: 'Vendor contracts include security requirements', detail: 'Security clauses mandatory in all vendor contracts.', correct: false },
          { id: 'c', title: 'No vendor access reviews', detail: 'Vendor access permissions never reviewed.', correct: true },
          { id: 'd', title: 'Vendor inventory maintained', detail: 'All vendors tracked in centralized inventory.', correct: false },
          { id: 'e', title: 'No data handling agreements', detail: 'No agreements defining how vendors handle company data.', correct: true },
          { id: 'f', title: 'Annual vendor audits conducted', detail: 'Vendors audited annually for compliance.', correct: false },
        ],
      },
      {
        id: 'vm-15-t2',
        title: 'Task 2: Select vendor management improvements',
        instruction: 'Choose the appropriate improvements for the vendor management gaps.',
        items: [
          { id: 'a', title: 'Implement vendor assessments', detail: 'Conduct security assessments for all critical vendors.', correct: true },
          { id: 'b', title: 'Add security clauses to contracts', detail: 'Include security requirements in vendor agreements.', correct: true },
          { id: 'c', title: 'Remove all vendor access', detail: 'Block all third-party access permanently.', correct: false },
          { id: 'd', title: 'Implement quarterly access reviews', detail: 'Review vendor access permissions quarterly.', correct: true },
          { id: 'e', title: 'Delete vendor inventory', detail: 'Remove vendor tracking system.', correct: false },
          { id: 'f', title: 'Establish data handling agreements', detail: 'Create agreements defining data protection requirements.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'No assessments, no access reviews, and no data agreements are critical vendor management gaps. Assessments, security clauses, access reviews, and data agreements are essential.',
  },
  {
    id: 'vm-16',
    title: 'Evaluate encryption key management',
    description:
      'An encryption key management assessment has been conducted. Review the findings, identify vulnerabilities, and recommend improvements.',
    tasks: [
      {
        id: 'vm-16-t1',
        title: 'Task 1: Identify key management vulnerabilities',
        instruction: 'Select all findings that represent key management risks.',
        items: [
          { id: 'a', title: 'Encryption keys stored with encrypted data', detail: 'Keys stored on same systems as the data they protect.', correct: true },
          { id: 'b', title: 'Hardware security modules in use', detail: 'Keys managed in FIPS 140-2 validated HSMs.', correct: false },
          { id: 'c', title: 'No key rotation policy', detail: 'Encryption keys never rotated.', correct: true },
          { id: 'd', title: 'Key access logged and monitored', detail: 'All key access events logged and reviewed.', correct: false },
          { id: 'e', title: 'Shared encryption keys', detail: 'Multiple administrators sharing a single encryption key.', correct: true },
          { id: 'f', title: 'Automated key rotation', detail: 'Keys automatically rotated on defined schedule.', correct: false },
        ],
      },
      {
        id: 'vm-16-t2',
        title: 'Task 2: Select key management improvements',
        instruction: 'Choose the appropriate improvements for the key management vulnerabilities.',
        items: [
          { id: 'a', title: 'Deploy hardware security modules', detail: 'Move keys to dedicated HSMs.', correct: true },
          { id: 'b', title: 'Implement key rotation policy', detail: 'Establish regular key rotation schedule.', correct: true },
          { id: 'c', title: 'Store keys with encrypted data', detail: 'Keep keys on same systems for convenience.', correct: false },
          { id: 'd', title: 'Eliminate shared keys', detail: 'Issue individual keys to each administrator.', correct: true },
          { id: 'e', title: 'Disable key access logging', detail: 'Turn off logging to reduce storage.', correct: false },
          { id: 'f', title: 'Implement key escrow', detail: 'Maintain backup copies of encryption keys.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Keys stored with data, no rotation, and shared keys are critical key management risks. HSMs, rotation policies, individual keys, and key escrow are essential improvements.',
  },
  {
    id: 'vm-17',
    title: 'Assess API security controls',
    description:
      'An API security assessment has been conducted. Review the findings, identify vulnerabilities, and recommend security improvements.',
    tasks: [
      {
        id: 'vm-17-t1',
        title: 'Task 1: Identify API security vulnerabilities',
        instruction: 'Select all findings that represent API security risks.',
        items: [
          { id: 'a', title: 'No API authentication', detail: 'Public API endpoints accessible without authentication.', correct: true },
          { id: 'b', title: 'OAuth 2.0 with PKCE', detail: 'API uses modern OAuth with proof key for code exchange.', correct: false },
          { id: 'c', title: 'No rate limiting', detail: 'API accepts unlimited requests per client.', correct: true },
          { id: 'd', title: 'Input validation implemented', detail: 'All API inputs validated against schema.', correct: false },
          { id: 'e', title: 'Sensitive data in API responses', detail: 'API returns full PII in responses unnecessarily.', correct: true },
          { id: 'f', title: 'API versioning implemented', detail: 'Deprecated API versions properly versioned.', correct: false },
        ],
      },
      {
        id: 'vm-17-t2',
        title: 'Task 2: Select API security improvements',
        instruction: 'Choose the appropriate improvements for the API security vulnerabilities.',
        items: [
          { id: 'a', title: 'Implement OAuth 2.0', detail: 'Add OAuth 2.0 authentication to all API endpoints.', correct: true },
          { id: 'b', title: 'Deploy rate limiting', detail: 'Add rate limits to prevent API abuse.', correct: true },
          { id: 'c', title: 'Remove input validation', detail: 'Eliminate input checks to improve performance.', correct: false },
          { id: 'd', title: 'Minimize data in responses', detail: 'Return only necessary data in API responses.', correct: true },
          { id: 'e', title: 'Return all fields by default', detail: 'Include all data in every response.', correct: false },
          { id: 'f', title: 'Implement API gateway', detail: 'Deploy API gateway for centralized security controls.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'No authentication, no rate limiting, and excessive data in responses are critical API risks. OAuth 2.0, rate limiting, data minimization, and API gateways are essential.',
  },
  {
    id: 'vm-18',
    title: 'Evaluate server hardening compliance',
    description:
      'A server hardening compliance assessment has been conducted against CIS benchmarks. Review the findings, identify gaps, and recommend remediation.',
    tasks: [
      {
        id: 'vm-18-t1',
        title: 'Task 1: Identify hardening gaps',
        instruction: 'Select all findings that represent server hardening non-compliance.',
        items: [
          { id: 'a', title: 'Default passwords on services', detail: 'Services running with vendor default credentials.', correct: true },
          { id: 'b', title: 'All unnecessary services removed', detail: 'Only required services running on servers.', correct: false },
          { id: 'c', title: 'Default configurations unchanged', detail: 'Servers running with out-of-box settings.', correct: true },
          { id: 'd', title: 'Security patches current', detail: 'All security patches applied within 14 days.', correct: false },
          { id: 'e', title: 'Open ports for unused services', detail: 'Ports open for services not in use.', correct: true },
          { id: 'f', title: 'Logging configured per CIS', detail: 'Logging meets CIS benchmark requirements.', correct: false },
        ],
      },
      {
        id: 'vm-18-t2',
        title: 'Task 2: Select hardening improvements',
        instruction: 'Choose the appropriate improvements for the hardening gaps.',
        items: [
          { id: 'a', title: 'Change all default credentials', detail: 'Replace default passwords with strong unique ones.', correct: true },
          { id: 'b', title: 'Remove unnecessary services', detail: 'Disable and remove unused services.', correct: true },
          { id: 'c', title: 'Keep default configurations', detail: 'Leave out-of-box settings unchanged.', correct: false },
          { id: 'd', title: 'Close unused ports', detail: 'Firewall off ports for unused services.', correct: true },
          { id: 'e', title: 'Disable security patching', detail: 'Stop applying patches to avoid disruptions.', correct: false },
          { id: 'f', title: 'Implement configuration management', detail: 'Use automated tools to enforce hardening baselines.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Default passwords, unchanged defaults, and open unused ports are critical hardening gaps. Credential changes, service removal, port closure, and configuration management are essential.',
  },
  {
    id: 'vm-19',
    title: 'Assess mobile device security',
    description:
      'A mobile device security assessment has been conducted. Review the findings, identify vulnerabilities, and recommend improvements.',
    tasks: [
      {
        id: 'vm-19-t1',
        title: 'Task 1: Identify mobile device vulnerabilities',
        instruction: 'Select all findings that represent mobile security risks.',
        items: [
          { id: 'a', title: 'No device encryption required', detail: 'Mobile devices can store corporate data unencrypted.', correct: true },
          { id: 'b', title: 'MDM enforced on all devices', detail: 'All mobile devices managed through MDM platform.', correct: false },
          { id: 'c', title: 'No passcode requirements', detail: 'Devices can be used without a passcode.', correct: true },
          { id: 'd', title: 'Remote wipe capability deployed', detail: 'Lost or stolen devices can be remotely wiped.', correct: false },
          { id: 'e', title: 'Jailbroken devices on network', detail: 'Rooted devices connecting to corporate resources.', correct: true },
          { id: 'f', title: 'App allowlisting enforced', detail: 'Only approved apps can run on managed devices.', correct: false },
        ],
      },
      {
        id: 'vm-19-t2',
        title: 'Task 2: Select mobile security improvements',
        instruction: 'Choose the appropriate improvements for the mobile device vulnerabilities.',
        items: [
          { id: 'a', title: 'Enforce device encryption', detail: 'Require encryption on all mobile devices.', correct: true },
          { id: 'b', title: 'Implement passcode policy', detail: 'Require strong passcodes on all devices.', correct: true },
          { id: 'c', title: 'Remove MDM platform', detail: 'Stop managing mobile devices.', correct: false },
          { id: 'd', title: 'Block jailbroken devices', detail: 'Prevent rooted devices from accessing network.', correct: true },
          { id: 'e', title: 'Disable remote wipe', detail: 'Turn off remote wipe capability.', correct: false },
          { id: 'f', title: 'Implement app allowlisting', detail: 'Only allow approved applications.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'No encryption, no passcode, and jailbroken devices are critical mobile security risks. Encryption, passcodes, jailbreak blocking, and app allowlisting are essential.',
  },
  {
    id: 'vm-20',
    title: 'Evaluate disaster recovery security',
    description:
      'A disaster recovery security assessment has been conducted. Review the findings, identify vulnerabilities, and recommend improvements.',
    tasks: [
      {
        id: 'vm-20-t1',
        title: 'Task 1: Identify DR security vulnerabilities',
        instruction: 'Select all findings that represent disaster recovery security risks.',
        items: [
          { id: 'a', title: 'DR site has weaker security than production', detail: 'Disaster recovery systems lack production security controls.', correct: true },
          { id: 'b', title: 'DR plan tested semi-annually', detail: 'DR exercises conducted twice per year.', correct: false },
          { id: 'c', title: 'No encryption for data at DR site', detail: 'Data stored unencrypted at recovery facility.', correct: true },
          { id: 'd', title: 'DR runbooks documented and current', detail: 'Recovery procedures documented and up to date.', correct: false },
          { id: 'e', title: 'Shared credentials between production and DR', detail: 'Same admin credentials used at both sites.', correct: true },
          { id: 'f', title: 'Automated failover tested', detail: 'Automated failover regularly tested.', correct: false },
        ],
      },
      {
        id: 'vm-20-t2',
        title: 'Task 2: Select DR security improvements',
        instruction: 'Choose the appropriate improvements for the DR security vulnerabilities.',
        items: [
          { id: 'a', title: 'Apply security controls to DR', detail: 'Match DR security posture to production.', correct: true },
          { id: 'b', title: 'Encrypt data at DR site', detail: 'Encrypt all data stored at recovery facility.', correct: true },
          { id: 'c', title: 'Reduce DR testing frequency', detail: 'Test DR plan only when convenient.', correct: false },
          { id: 'd', title: 'Separate credentials', detail: 'Use different credentials for production and DR.', correct: true },
          { id: 'e', title: 'Delete DR runbooks', detail: 'Remove recovery documentation.', correct: false },
          { id: 'f', title: 'Update DR plan', detail: 'Keep DR plan current with changes.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
    'Weaker DR security, unencrypted data, and shared credentials are critical DR risks. Security parity, encryption, separate credentials, and current documentation are essential.',
  },
  {
    id: 'ir-04',
    title: 'Respond to a compromised domain controller',
    description:
      'A domain controller is suspected of being compromised. Review the indicators, determine the scope, and select the appropriate response actions.',
    tasks: [
      {
        id: 'ir-04-t1',
        title: 'Task 1: Identify compromise indicators',
        instruction: 'Select all indicators that suggest the domain controller is compromised.',
        items: [
          { id: 'a', title: 'KRBTGT password reset anomaly', detail: 'KRBTGT account password reset twice in quick succession without authorization.', correct: true },
          { id: 'b', title: 'Normal domain replication', detail: 'Replication between domain controllers operating normally.', correct: false },
          { id: 'c', title: 'New golden ticket detection', detail: 'Anomalous Kerberos tickets with forged lifetimes detected.', correct: true },
          { id: 'd', title: 'Standard group policy updates', detail: 'Normal GPO changes from authorized administrators.', correct: false },
          { id: 'e', title: 'DCSync attack detected', detail: 'Unauthorized directory replication requests detected.', correct: true },
          { id: 'f', title: 'Normal service account activity', detail: 'Service accounts authenticating as expected.', correct: false },
        ],
      },
      {
        id: 'ir-04-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for a compromised domain controller.',
        items: [
          { id: 'a', title: 'Isolate the domain controller', detail: 'Disconnect the DC from the network.', correct: true },
          { id: 'b', title: 'Reset KRBTGT password twice', detail: 'Rotate KRBTGT password twice to invalidate all tickets.', correct: true },
          { id: 'c', title: 'Reboot and hope for best', detail: 'Restart the DC without other action.', correct: false },
          { id: 'd', title: 'Reset all domain credentials', detail: 'Force password resets for all domain accounts.', correct: true },
          { id: 'e', title: 'Delete all group policies', detail: 'Remove all GPOs to stop attacker control.', correct: false },
          { id: 'f', title: 'Rebuild DC from known-good state', detail: 'Reconstruct the DC from trusted backups.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'KRBTGT anomalies, golden tickets, and DCSync attacks confirm DC compromise. Isolation, double KRBTGT reset, credential resets, and DC rebuild are critical response actions.',
  },
  {
    id: 'ir-05',
    title: 'Handle a compromised third-party vendor',
    description:
      'A critical third-party vendor has announced a breach affecting your organization. Review the situation, determine your exposure, and select response actions.',
    tasks: [
      {
        id: 'ir-05-t1',
        title: 'Task 1: Assess exposure',
        instruction: 'Select all actions needed to assess your organization exposure to the vendor breach.',
        items: [
          { id: 'a', title: 'Identify shared data with vendor', detail: 'Determine what data was shared with the affected vendor.', correct: true },
          { id: 'b', title: 'Review vendor breach notification', detail: 'Understand what data the vendor breach exposed.', correct: true },
          { id: 'c', title: 'Ignore the vendor notification', detail: 'Assume your data was not affected.', correct: false },
          { id: 'd', title: 'Assess shared credentials', detail: 'Determine if any credentials are shared with the vendor.', correct: true },
          { id: 'e', title: 'Terminate vendor contract immediately', detail: 'End the vendor relationship without assessment.', correct: false },
          { id: 'f', title: 'Review vendor access logs', detail: 'Check what vendor accessed in your environment.', correct: true },
        ],
      },
      {
        id: 'ir-05-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the vendor breach.',
        items: [
          { id: 'a', title: 'Revoke vendor access', detail: 'Immediately revoke all vendor access to systems.', correct: true },
          { id: 'b', title: 'Reset shared credentials', detail: 'Change any credentials shared with the vendor.', correct: true },
          { id: 'c', title: 'Continue vendor access as normal', detail: 'Maintain existing vendor access for business continuity.', correct: false },
          { id: 'd', title: 'Monitor for related attacks', detail: 'Enhanced monitoring for attacks using vendor data.', correct: true },
          { id: 'e', title: 'Delete all vendor data', detail: 'Remove all data shared with the vendor.', correct: false },
          { id: 'f', title: 'Engage legal counsel', detail: 'Involve legal for contractual and liability issues.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Assessing exposure, reviewing shared data and credentials, and checking vendor access logs are critical first steps. Access revocation, credential resets, enhanced monitoring, and legal engagement follow.',
  },
  {
    id: 'ir-06',
    title: 'Investigate a compromised email account with BEC',
    description:
      'A business email compromise has been detected. Review the email and financial indicators, determine the scope, and select response actions.',
    tasks: [
      {
        id: 'ir-06-t1',
        title: 'Task 1: Identify BEC indicators',
        instruction: 'Select all indicators that confirm business email compromise.',
        items: [
          { id: 'a', title: 'CEO fraud email detected', detail: 'Email appearing to be from CEO requesting urgent wire transfer.', correct: true },
          { id: 'b', title: 'Normal vendor payment', detail: 'Standard invoice payment to known vendor.', correct: false },
          { id: 'c', title: 'Lookalike domain used', detail: 'Email sent from a domain similar to the executives.', correct: true },
          { id: 'd', title: 'SPF and DKIM pass', detail: 'Email passes all authentication checks.', correct: false },
          { id: 'e', title: 'Changed bank details in email', detail: 'Vendor email requesting payment to new bank account.', correct: true },
          { id: 'f', title: 'Standard procurement process', detail: 'Normal purchase order workflow followed.', correct: false },
        ],
      },
      {
        id: 'ir-06-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the BEC incident.',
        items: [
          { id: 'a', title: 'Contact bank to stop transfer', detail: 'Immediately contact bank to halt fraudulent wire transfer.', correct: true },
          { id: 'b', title: 'Notify law enforcement', detail: 'File report with FBI IC3 or local law enforcement.', correct: true },
          { id: 'c', title: 'Complete the wire transfer', detail: 'Send payment to avoid business disruption.', correct: false },
          { id: 'd', title: 'Preserve email evidence', detail: 'Retain all emails with full headers for investigation.', correct: true },
          { id: 'e', title: 'Delete the fraudulent emails', detail: 'Remove BEC emails from all mailboxes.', correct: false },
          { id: 'f', title: 'Notify affected employees', detail: 'Alert staff to be vigilant for similar attacks.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'CEO fraud, lookalike domains, and changed bank details confirm BEC. Bank contact to stop transfer, law enforcement notification, evidence preservation, and staff alerts are critical.',
  },
  {
    id: 'ir-07',
    title: 'Respond to a cloud account compromise',
    description:
      'A cloud administrator account is confirmed compromised. Review the cloud logs, determine the attacker actions, and select response actions.',
    tasks: [
      {
        id: 'ir-07-t1',
        title: 'Task 1: Identify attacker actions',
        instruction: 'Select all actions the attacker likely performed using the compromised cloud account.',
        items: [
          { id: 'a', title: 'Created new IAM user', detail: 'New IAM user created by the attacker for persistence.', correct: true },
          { id: 'b', title: 'Normal administrative tasks', detail: 'Expected administrative actions by the admin.', correct: false },
          { id: 'c', title: 'Modified security groups', detail: 'Security group rules changed to allow inbound access.', correct: true },
          { id: 'd', title: 'Standard billing review', detail: 'Normal billing and cost review activity.', correct: false },
          { id: 'e', title: 'Launched new compute instances', detail: 'Multiple new EC2 instances launched in unusual region.', correct: true },
          { id: 'f', title: 'Updated documentation', detail: 'Routine documentation updates to cloud architecture.', correct: false },
        ],
      },
      {
        id: 'ir-07-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the cloud account compromise.',
        items: [
          { id: 'a', title: 'Disable compromised account', detail: 'Immediately disable the compromised admin account.', correct: true },
          { id: 'b', title: 'Remove attacker IAM user', detail: 'Delete the IAM user created by the attacker.', correct: true },
          { id: 'c', title: 'Leave new instances running', detail: 'Keep attacker-launched instances for evidence without isolation.', correct: false },
          { id: 'd', title: 'Terminate attacker instances', detail: 'Shut down instances launched by the attacker.', correct: true },
          { id: 'e', title: 'Ignore security group changes', detail: 'Leave modified security groups as-is.', correct: false },
          { id: 'f', title: 'Audit all IAM policies', detail: 'Review all IAM policies for unauthorized changes.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'New IAM users, modified security groups, and unusual instance launches confirm cloud account compromise. Account disable, attacker user removal, instance termination, and IAM audits are critical.',
  },
  {
    id: 'ir-08',
    title: 'Handle a website defacement',
    description:
      'The corporate website has been defaced by attackers. Review the incident details, determine the attack vector, and select response actions.',
    tasks: [
      {
        id: 'ir-08-t1',
        title: 'Task 1: Identify attack vector',
        instruction: 'Select all indicators that reveal how the website was compromised.',
        items: [
          { id: 'a', title: 'Outdated CMS version', detail: 'Website running WordPress with known vulnerabilities.', correct: true },
          { id: 'b', title: 'Normal content updates', detail: 'Regular content changes by authorized staff.', correct: false },
          { id: 'c', title: 'Admin login from foreign IP', detail: 'WordPress admin login from unrecognized foreign address.', correct: true },
          { id: 'd', title: 'Valid SSL certificate', detail: 'Website SSL certificate properly configured.', correct: false },
          { id: 'e', title: 'Modified template files', detail: 'Website template files modified without authorization.', correct: true },
          { id: 'f', title: 'Regular backup completed', detail: 'Scheduled website backup completed successfully.', correct: false },
        ],
      },
      {
        id: 'ir-08-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the website defacement.',
        items: [
          { id: 'a', title: 'Take website offline', detail: 'Remove website from public access.', correct: true },
          { id: 'b', title: 'Restore from clean backup', detail: 'Restore website from known-good backup.', correct: true },
          { id: 'c', title: 'Leave defaced site online', detail: 'Keep defaced site visible to maintain uptime.', correct: false },
          { id: 'd', title: 'Patch CMS', detail: 'Update CMS to latest patched version.', correct: true },
          { id: 'e', title: 'Delete all website files', detail: 'Remove all website content permanently.', correct: false },
          { id: 'f', title: 'Change admin credentials', detail: 'Reset all CMS administrative passwords.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Outdated CMS, foreign admin logins, and modified templates confirm the defacement vector. Site takedown, clean restore, CMS patching, and credential changes are priorities.',
  },
  {
    id: 'ir-09',
    title: 'Investigate a cryptomining infection',
    description:
      'Multiple servers are showing high CPU utilization. Review the indicators, determine if cryptomining is occurring, and select response actions.',
    tasks: [
      {
        id: 'ir-09-t1',
        title: 'Task 1: Identify cryptomining indicators',
        instruction: 'Select all indicators that suggest cryptomining activity.',
        items: [
          { id: 'a', title: 'Sustained high CPU usage', detail: 'Servers showing 95+ percent CPU for extended periods.', correct: true },
          { id: 'b', title: 'Normal batch processing', detail: 'Scheduled batch jobs causing expected CPU load.', correct: false },
          { id: 'c', title: 'Connections to mining pools', detail: 'Outbound connections to known cryptocurrency mining pools.', correct: true },
          { id: 'd', title: 'Standard application workloads', detail: 'CPU usage consistent with normal application load.', correct: false },
          { id: 'e', title: 'Unknown process consuming CPU', detail: 'Unrecognized process name consuming significant resources.', correct: true },
          { id: 'f', title: 'Normal system updates running', detail: 'Windows Update or package manager running.', correct: false },
        ],
      },
      {
        id: 'ir-09-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the cryptomining infection.',
        items: [
          { id: 'a', title: 'Isolate affected servers', detail: 'Disconnect infected servers from the network.', correct: true },
          { id: 'b', title: 'Terminate mining processes', detail: 'Kill the cryptomining processes.', correct: true },
          { id: 'c', title: 'Leave miners running', detail: 'Allow mining to continue for evidence.', correct: false },
          { id: 'd', title: 'Block mining pool domains', detail: 'Add mining pool domains to DNS blocklists.', correct: true },
          { id: 'e', title: 'Ignore high CPU usage', detail: 'Assume it is a temporary performance issue.', correct: false },
          { id: 'f', title: 'Identify initial access vector', detail: 'Investigate how the miners were installed.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Sustained high CPU, mining pool connections, and unknown processes confirm cryptomining. Server isolation, process termination, pool blocking, and access vector investigation are critical.',
  },
  {
    id: 'ir-10',
    title: 'Respond to a social engineering incident',
    description:
      'An employee has fallen victim to a vishing attack and provided credentials. Review the incident details, assess the exposure, and select response actions.',
    tasks: [
      {
        id: 'ir-10-t1',
        title: 'Task 1: Assess exposure',
        instruction: 'Select all actions needed to assess the exposure from the vishing attack.',
        items: [
          { id: 'a', title: 'Identify what credentials were shared', detail: 'Determine exactly what information the attacker obtained.', correct: true },
          { id: 'b', title: 'Review call logs', detail: 'Check phone system logs for the suspicious call.', correct: true },
          { id: 'c', title: 'Ignore the incident', detail: 'Assume no harm was done.', correct: false },
          { id: 'd', title: 'Check for unauthorized access', detail: 'Review authentication logs for use of shared credentials.', correct: true },
          { id: 'e', title: 'Delete all call recordings', detail: 'Remove phone system recordings.', correct: false },
          { id: 'f', title: 'Interview the employee', detail: 'Gather details about the call from the victim.', correct: true },
        ],
      },
      {
        id: 'ir-10-t2',
        title: 'Task 2: Select response actions',
        instruction: 'Choose the appropriate response actions for the vishing incident.',
        items: [
          { id: 'a', title: 'Reset compromised credentials', detail: 'Force password reset for all shared credentials.', correct: true },
          { id: 'b', title: 'Revoke active sessions', detail: 'Invalidate any active sessions using shared credentials.', correct: true },
          { id: 'c', title: 'Share credentials with attacker again', detail: 'Call back and provide more information.', correct: false },
          { id: 'd', title: 'Enable additional monitoring', detail: 'Enhanced monitoring on affected accounts.', correct: true },
          { id: 'e', title: 'Ignore the incident completely', detail: 'Take no action and hope for the best.', correct: false },
          { id: 'f', title: 'Conduct staff awareness', detail: 'Remind staff about vishing tactics.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
    'Identifying shared credentials, reviewing call logs, checking unauthorized access, and interviewing the employee assess exposure. Credential reset, session revocation, enhanced monitoring, and staff awareness are responses.',
  },
  {
    id: 'rc-04',
    title: 'Create a vulnerability management report',
    description:
      'You need to create a quarterly vulnerability management report for IT leadership. Review the available data, select the most relevant metrics, and choose appropriate presentation approaches.',
    tasks: [
      {
        id: 'rc-04-t1',
        title: 'Task 1: Select relevant metrics',
        instruction: 'Choose the metrics that are most valuable for a vulnerability management report to IT leadership.',
        items: [
          { id: 'a', title: 'Critical vulnerability MTTR trend', detail: 'Mean time to remediate critical vulnerabilities over time.', correct: true },
          { id: 'b', title: 'Patch compliance percentage', detail: 'Percentage of systems meeting patch requirements.', correct: true },
          { id: 'c', title: 'Total number of scanner licenses', detail: 'Count of vulnerability scanner licenses purchased.', correct: false },
          { id: 'd', title: 'Vulnerability aging distribution', detail: 'Breakdown of vulnerabilities by age categories.', correct: true },
          { id: 'e', title: 'Number of security conferences attended', detail: 'Industry conferences the team attended this quarter.', correct: false },
          { id: 'f', title: 'Risk-based remediation progress', detail: 'Progress toward risk-based remediation goals.', correct: true },
        ],
      },
      {
        id: 'rc-04-t2',
        title: 'Task 2: Select presentation best practices',
        instruction: 'Choose the approaches that make the report most useful for IT leadership.',
        items: [
          { id: 'a', title: 'Trend charts over time', detail: 'Visual trends showing improvement or degradation.', correct: true },
          { id: 'b', title: 'Risk heat maps', detail: 'Visual representation of risk by business unit.', correct: true },
          { id: 'c', title: 'Raw scanner output tables', detail: 'Full spreadsheets with every vulnerability.', correct: false },
          { id: 'd', title: 'Benchmark comparisons', detail: 'Comparison to industry benchmarks or SLA targets.', correct: true },
          { id: 'e', title: 'Full CVE descriptions', detail: 'Detailed technical descriptions of every CVE.', correct: false },
          { id: 'f', title: 'Action items with owners', detail: 'Specific next steps with assigned owners.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'MTTR trends, compliance percentages, aging distribution, and risk-based progress are high-value metrics. Trend charts, heat maps, benchmarks, and action items make reports actionable.',
  },
  {
    id: 'rc-05',
    title: 'Draft a security policy exception request',
    description:
      'A business unit needs to run a legacy application that cannot meet current security standards. Review the exception request process and select the appropriate steps.',
    tasks: [
      {
        id: 'rc-05-t1',
        title: 'Task 1: Select required exception request elements',
        instruction: 'Choose the elements that must be included in a formal security exception request.',
        items: [
          { id: 'a', title: 'Business justification', detail: 'Clear explanation of why the exception is needed.', correct: true },
          { id: 'b', title: 'Risk assessment', detail: 'Analysis of the risk created by the exception.', correct: true },
          { id: 'c', title: 'Employee personal information', detail: 'Personal details about the requesting employee.', correct: false },
          { id: 'd', title: 'Compensating controls', detail: 'Measures to reduce risk during the exception period.', correct: true },
          { id: 'e', title: 'Office gossip about the request', detail: 'Informal discussions about who requested it.', correct: false },
          { id: 'f', title: 'Expiration date', detail: 'Defined end date for the exception.', correct: true },
        ],
      },
      {
        id: 'rc-05-t2',
        title: 'Task 2: Select approval requirements',
        instruction: 'Choose the appropriate approvers for a security exception.',
        items: [
          { id: 'a', title: 'Information security team', detail: 'Security team review and approval.', correct: true },
          { id: 'b', title: 'Business unit owner', detail: 'Approval from the requesting business unit leadership.', correct: true },
          { id: 'c', title: 'Random employee vote', detail: 'All-employee vote on whether to grant the exception.', correct: false },
          { id: 'd', title: 'Legal and compliance review', detail: 'Review by legal and compliance teams.', correct: true },
          { id: 'e', title: 'External customer approval', detail: 'Approval from an external customer.', correct: false },
          { id: 'f', title: 'No approval needed', detail: 'Exceptions do not require approval.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Business justification, risk assessment, compensating controls, and expiration dates are required elements. Security, business owner, and legal/compliance approvals are necessary.',
  },
  {
    id: 'rc-06',
    title: 'Prepare a security awareness presentation',
    description:
      'You need to present security awareness topics to a general employee audience. Review the presentation options and select the most effective approaches.',
    tasks: [
      {
        id: 'rc-06-t1',
        title: 'Task 1: Select effective presentation content',
        instruction: 'Choose the content that resonates best with a general employee audience.',
        items: [
          { id: 'a', title: 'Real-world phishing examples', detail: 'Actual phishing emails the company received.', correct: true },
          { id: 'b', title: 'Raw exploit code walkthrough', detail: 'Technical demonstration of exploit techniques.', correct: false },
          { id: 'c', title: 'Password best practices', detail: 'How to create and manage strong passwords.', correct: true },
          { id: 'd', title: 'Full network architecture diagrams', detail: 'Detailed technical diagrams of network topology.', correct: false },
          { id: 'e', title: 'Social engineering scenarios', detail: 'Common social engineering tactics and how to recognize them.', correct: true },
          { id: 'f', title: 'Firewall rule configuration details', detail: 'How firewall rules are configured.', correct: false },
        ],
      },
      {
        id: 'rc-06-t2',
        title: 'Task 2: Select engagement techniques',
        instruction: 'Choose the approaches that maximize audience engagement and retention.',
        items: [
          { id: 'a', title: 'Interactive quizzes', detail: 'Audience participation through questions and polls.', correct: true },
          { id: 'b', title: 'Real-time phishing demo', detail: 'Show a live phishing simulation during the presentation.', correct: true },
          { id: 'c', title: 'Two-hour lecture with no breaks', detail: 'Extended lecture format without audience interaction.', correct: false },
          { id: 'd', title: '100-slide technical deep dive', detail: 'Comprehensive technical presentation with no interaction.', correct: false },
          { id: 'e', title: 'Take-home reference materials', detail: 'Quick reference guides for employees to keep.', correct: true },
          { id: 'f', title: 'Mandatory 50-question exam', detail: 'Required test with significant consequences for failure.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Real phishing examples, password practices, and social engineering scenarios resonate with general audiences. Interactive quizzes, live demos, and take-home materials maximize engagement.',
  },
  {
    id: 'rc-07',
    title: 'Write a security incident press release',
    description:
      'A significant security incident requires a public statement. Review the draft press release and select the content that meets best practices for public disclosure.',
    tasks: [
      {
        id: 'rc-07-t1',
        title: 'Task 1: Select appropriate press release content',
        instruction: 'Choose the content that belongs in a public press release about a security incident.',
        items: [
          { id: 'a', title: 'High-level incident description', detail: 'General description of what happened without technical detail.', correct: true },
          { id: 'b', title: 'Steps being taken to address', detail: 'Actions the company is taking to resolve the incident.', correct: true },
          { id: 'c', title: 'Full IOC list and TTPs', detail: 'Complete technical indicators and attacker techniques.', correct: false },
          { id: 'd', title: 'Customer protective actions', detail: 'Guidance on what customers should do to protect themselves.', correct: true },
          { id: 'e', title: 'Internal investigation details', detail: 'Confidential information about the ongoing investigation.', correct: false },
          { id: 'f', title: 'Contact information for follow-up', detail: 'Where affected parties can get more information.', correct: true },
        ],
      },
      {
        id: 'rc-07-t2',
        title: 'Task 2: Identify inappropriate content',
        instruction: 'Select the content that should NOT appear in a public press release.',
        items: [
          { id: 'a', title: 'Speculation about attacker identity', detail: 'Unconfirmed theories about who is responsible.', correct: true },
          { id: 'b', title: 'Transparent timeline', detail: 'When the incident was discovered and contained.', correct: false },
          { id: 'c', title: 'Blame directed at specific employees', detail: 'Naming individuals as responsible for the breach.', correct: true },
          { id: 'd', title: 'Commitment to improvement', detail: 'Statement about strengthening security going forward.', correct: false },
          { id: 'e', title: 'Minimization of severity', detail: 'Downplaying the significance of the incident.', correct: true },
          { id: 'f', title: 'Support resources offered', detail: 'Credit monitoring or other support for affected parties.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Press releases should include high-level descriptions, response actions, customer guidance, and contact information. Speculation, blame, and minimization have no place in public statements.',
  },
  {
    id: 'rc-08',
    title: 'Develop a security metrics dashboard',
    description:
      'You are designing a security metrics dashboard for ongoing monitoring. Review the requirements and select the metrics and design approaches that provide the most value.',
    tasks: [
      {
        id: 'rc-08-t1',
        title: 'Task 1: Select key dashboard metrics',
        instruction: 'Choose the metrics that provide the most value on a security operations dashboard.',
        items: [
          { id: 'a', title: 'MTTD and MTTR trends', detail: 'Detection and response time trends over time.', correct: true },
          { id: 'b', title: 'Open critical vulnerabilities', detail: 'Current count of unpatched critical vulnerabilities.', correct: true },
          { id: 'c', title: 'Number of office plants', detail: 'Count of plants in the security office.', correct: false },
          { id: 'd', title: 'Phishing report rate', detail: 'Number of phishing emails reported by users.', correct: true },
          { id: 'e', title: 'SOC analyst vacation days', detail: 'Days off taken by security team members.', correct: false },
          { id: 'f', title: 'Patch compliance by business unit', detail: 'Patch compliance broken down by department.', correct: true },
        ],
      },
      {
        id: 'rc-08-t2',
        title: 'Task 2: Select dashboard design principles',
        instruction: 'Choose the design approaches that make the dashboard most effective.',
        items: [
          { id: 'a', title: 'Color-coded status indicators', detail: 'Green, yellow, red indicators for quick assessment.', correct: true },
          { id: 'b', title: 'Trend lines and sparklines', detail: 'Visual trends that show direction at a glance.', correct: true },
          { id: 'c', title: 'Raw data tables only', detail: 'Spreadsheet-style tables with no visual elements.', correct: false },
          { id: 'd', title: 'Static screenshots updated monthly', detail: 'Manual updates that quickly become stale.', correct: false },
          { id: 'e', title: 'Drill-down capability', detail: 'Ability to click through for more detail.', correct: true },
          { id: 'f', title: 'Full page text descriptions', detail: 'Paragraphs of text with no visual elements.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'MTTD/MTTR, open vulnerabilities, reporting rates, and compliance by unit are high-value dashboard metrics. Color coding, trend lines, and drill-down capability make dashboards effective.',
  },
  {
    id: 'rc-09',
    title: 'Prepare an incident escalation briefing',
    description:
      'A security incident needs to be escalated to senior leadership. Review the escalation requirements and select the content appropriate for this briefing.',
    tasks: [
      {
        id: 'rc-09-t1',
        title: 'Task 1: Select escalation briefing content',
        instruction: 'Choose the content that belongs in an escalation briefing to senior leadership.',
        items: [
          { id: 'a', title: 'Current incident severity and impact', detail: 'How severe the incident is and what it affects.', correct: true },
          { id: 'b', title: 'Actions taken so far', detail: 'What has been done to contain and remediate.', correct: true },
          { id: 'c', title: 'Full forensic disk images', detail: 'Raw forensic data and images.', correct: false },
          { id: 'd', title: 'Decisions needed from leadership', detail: 'Specific decisions that require executive action.', correct: true },
          { id: 'e', title: 'Detailed malware analysis report', detail: 'Full technical analysis of any malware involved.', correct: false },
          { id: 'f', title: 'Resource requirements', detail: 'Additional staff, budget, or external support needed.', correct: true },
        ],
      },
      {
        id: 'rc-09-t2',
        title: 'Task 2: Select escalation timing criteria',
        instruction: 'Choose the situations that warrant immediate escalation to senior leadership.',
        items: [
          { id: 'a', title: 'Confirmed data exfiltration', detail: 'Evidence that sensitive data has left the organization.', correct: true },
          { id: 'b', title: 'Single phishing email reported', detail: 'One user reporting a suspicious email.', correct: false },
          { id: 'c', title: 'Ransomware on critical systems', detail: 'Ransomware affecting business-critical systems.', correct: true },
          { id: 'd', title: 'Routine vulnerability scan results', detail: 'Normal weekly vulnerability scan findings.', correct: false },
          { id: 'e', title: 'Potential regulatory impact', detail: 'Incident likely to trigger regulatory notification.', correct: true },
          { id: 'f', title: 'Password reset request', detail: 'User forgot their password.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Severity, actions taken, decisions needed, and resource requirements belong in escalation briefings. Data exfiltration, critical ransomware, and regulatory impact warrant immediate escalation.',
  },
  {
    id: 'rc-10',
    title: 'Create a vendor security assessment report',
    description:
      'A security assessment of a critical vendor has been completed. Review the findings and select the content appropriate for the final report to stakeholders.',
    tasks: [
      {
        id: 'rc-10-t1',
        title: 'Task 1: Select report content',
        instruction: 'Choose the content that belongs in a vendor security assessment report.',
        items: [
          { id: 'a', title: 'Executive risk summary', detail: 'High-level summary of vendor security risk.', correct: true },
          { id: 'b', title: 'Detailed findings with severity ratings', detail: 'Specific vulnerabilities with risk ratings.', correct: true },
          { id: 'c', title: 'Vendor employee personal information', detail: 'Personal details about vendor staff.', correct: false },
          { id: 'd', title: 'Recommendations and requirements', detail: 'Required improvements and security expectations.', correct: true },
          { id: 'e', title: 'Internal salary information', detail: 'Your own team compensation details.', correct: false },
          { id: 'f', title: 'Remediation timeline', detail: 'Expected timeline for vendor to address findings.', correct: true },
        ],
      },
      {
        id: 'rc-10-t2',
        title: 'Task 2: Select report distribution',
        instruction: 'Choose the appropriate recipients for the vendor security assessment report.',
        items: [
          { id: 'a', title: 'Business relationship owner', detail: 'Internal owner of the vendor relationship.', correct: true },
          { id: 'b', title: 'Information security team', detail: 'Internal security team for awareness.', correct: true },
          { id: 'c', title: 'General company-wide distribution', detail: 'Everyone in the organization.', correct: false },
          { id: 'd', title: 'Vendor security team', detail: 'The vendor being assessed.', correct: true },
          { id: 'e', title: 'External media outlets', detail: 'Press and media organizations.', correct: false },
          { id: 'f', title: 'Legal and procurement teams', detail: 'Teams managing contracts and compliance.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Risk summary, findings, recommendations, and remediation timelines belong in vendor assessment reports. Distribution to business owners, security, vendor, and legal is appropriate.',
  },
  {
    id: 'rc-11',
    title: 'Draft a security incident lessons learned document',
    description:
      'A significant incident has been resolved. Review the lessons learned process and select the content that should be included in the final document.',
    tasks: [
      {
        id: 'rc-11-t1',
        title: 'Task 1: Select lessons learned content',
        instruction: 'Choose the content that belongs in a lessons learned document.',
        items: [
          { id: 'a', title: 'Incident timeline', detail: 'Chronological sequence of events.', correct: true },
          { id: 'b', title: 'Root cause analysis', detail: 'Underlying cause of the incident.', correct: true },
          { id: 'c', title: 'Names of employees who made mistakes', detail: 'Individuals to blame for failures.', correct: false },
          { id: 'd', title: 'What worked well', detail: 'Response aspects that were effective.', correct: true },
          { id: 'e', title: 'What should improve', detail: 'Areas needing improvement.', correct: true },
          { id: 'f', title: 'Detailed attacker profile', detail: 'Speculation about attacker identity and motives.', correct: false },
        ],
      },
      {
        id: 'rc-11-t2',
        title: 'Task 2: Select improvement tracking',
        instruction: 'Choose the approach for ensuring lessons learned result in actual improvements.',
        items: [
          { id: 'a', title: 'Action items with owners and deadlines', detail: 'Specific improvements with assigned owners.', correct: true },
          { id: 'b', title: 'Vague recommendations', detail: 'General suggestions without specifics.', correct: false },
          { id: 'c', title: 'Quarterly progress reviews', detail: 'Regular check-ins on improvement progress.', correct: true },
          { id: 'd', title: 'No follow-up needed', detail: 'Document is filed with no further action.', correct: false },
          { id: 'e', title: 'Integration into IR plan updates', detail: 'Improvements incorporated into response procedures.', correct: true },
          { id: 'f', title: 'Automatic closure after 30 days', detail: 'Action items expire regardless of status.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Timeline, root cause, what worked, and what should improve belong in lessons learned. Action items with owners, quarterly reviews, and IR plan integration ensure actual improvement.',
  },
  {
    id: 'rc-12',
    title: 'Prepare a security program status update',
    description:
      'You need to provide a quarterly security program status update to executive leadership. Review the available information and select the most effective content and approach.',
    tasks: [
      {
        id: 'rc-12-t1',
        title: 'Task 1: Select high-value content',
        instruction: 'Choose the content that provides the most value in an executive security program update.',
        items: [
          { id: 'a', title: 'Risk posture trend', detail: 'How the overall risk posture has changed.', correct: true },
          { id: 'b', title: 'Key accomplishments', detail: 'Major achievements this quarter.', correct: true },
          { id: 'c', title: 'Full tool inventory list', detail: 'Every security tool with version numbers.', correct: false },
          { id: 'd', title: 'Strategic initiatives progress', detail: 'Progress on multi-quarter security initiatives.', correct: true },
          { id: 'e', title: 'Detailed network diagrams', detail: 'Technical network topology details.', correct: false },
          { id: 'f', title: 'Upcoming risks and mitigations', detail: 'Anticipated risks and planned responses.', correct: true },
        ],
      },
      {
        id: 'rc-12-t2',
        title: 'Task 2: Select presentation approach',
        instruction: 'Choose the presentation approach that resonates best with executive leadership.',
        items: [
          { id: 'a', title: 'Business impact framing', detail: 'Frame security in terms of business impact.', correct: true },
          { id: 'b', title: 'Risk-based prioritization', detail: 'Focus on highest business risks.', correct: true },
          { id: 'c', title: 'Technical metrics deep dive', detail: 'Extensive technical detail and jargon.', correct: false },
          { id: 'd', title: 'Competitive comparison', detail: 'Compare security posture to competitors.', correct: true },
          { id: 'e', title: 'Raw alert statistics', detail: 'Total alerts generated without context.', correct: false },
          { id: 'f', title: 'Investment justification', detail: 'ROI and value demonstration for security spend.', correct: true },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Risk trends, accomplishments, strategic progress, and upcoming risks are high-value content. Business framing, risk-based focus, competitive comparison, and ROI justification resonate with executives.',
  },
  {
    id: 'rc-13',
    title: 'Write an incident response executive summary',
    description:
      'A significant security incident requires an executive summary for the board of directors. Review the incident details and select the content most appropriate for this audience.',
    tasks: [
      {
        id: 'rc-13-t1',
        title: 'Task 1: Select board-level content',
        instruction: 'Choose the content that belongs in a board-level incident summary.',
        items: [
          { id: 'a', title: 'Business impact and potential liability', detail: 'Financial and legal implications of the incident.', correct: true },
          { id: 'b', title: 'Containment and remediation status', detail: 'Whether the incident is contained and being fixed.', correct: true },
          { id: 'c', title: 'Full malware reverse engineering report', detail: 'Technical malware analysis details.', correct: false },
          { id: 'd', title: 'Reputational impact assessment', detail: 'Potential damage to brand and customer trust.', correct: true },
          { id: 'e', title: 'Raw firewall log excerpts', detail: 'Technical log data with timestamps.', correct: false },
          { id: 'f', title: 'Strategic decisions required', detail: 'Decisions only the board can make.', correct: true },
        ],
      },
      {
        id: 'rc-13-t2',
        title: 'Task 2: Select board presentation approach',
        instruction: 'Choose the approach that best serves a board audience.',
        items: [
          { id: 'a', title: 'Concise one-page summary', detail: 'Brief overview with key points only.', correct: true },
          { id: 'b', title: 'Forward-looking recommendations', detail: 'Recommended actions and next steps.', correct: true },
          { id: 'c', title: '50-slide technical presentation', detail: 'Extensive technical detail with full analysis.', correct: false },
          { id: 'd', title: 'Blame assignment narrative', detail: 'Focus on who is responsible.', correct: false },
          { id: 'e', title: 'Risk appetite alignment', detail: 'How the incident relates to organizational risk tolerance.', correct: true },
          { id: 'f', title: 'Attacker speculation details', detail: 'Detailed theories about attacker identity.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Business impact, containment status, reputational impact, and strategic decisions belong in board summaries. Concise formats, forward-looking recommendations, and risk alignment serve board audiences.',
  },
  {
    id: 'rc-14',
    title: 'Create a security awareness newsletter',
    description:
      'You are creating a monthly security awareness newsletter for all employees. Review the content options and select the most effective topics and approaches.',
    tasks: [
      {
        id: 'rc-14-t1',
        title: 'Task 1: Select newsletter content',
        instruction: 'Choose the content that is most appropriate and effective for a security awareness newsletter.',
        items: [
          { id: 'a', title: 'Current phishing trends', detail: 'Recent phishing tactics targeting the organization.', correct: true },
          { id: 'b', title: 'Password security tips', detail: 'Best practices for creating strong passwords.', correct: true },
          { id: 'c', title: 'Full penetration test report', detail: 'Complete technical findings from recent testing.', correct: false },
          { id: 'd', title: 'Social engineering awareness', detail: 'How to recognize and resist social engineering.', correct: true },
          { id: 'e', title: 'Detailed firewall configuration guide', detail: 'How to configure personal firewalls.', correct: false },
          { id: 'f', title: 'Data handling reminders', detail: 'Proper handling of sensitive information.', correct: true },
        ],
      },
      {
        id: 'rc-14-t2',
        title: 'Task 2: Select engagement approach',
        instruction: 'Choose the approaches that maximize newsletter readership and effectiveness.',
        items: [
          { id: 'a', title: 'Short, scannable format', detail: 'Brief sections with clear headings.', correct: true },
          { id: 'b', title: 'Real examples and stories', detail: 'Actual incidents or near-misses to illustrate points.', correct: true },
          { id: 'c', title: '10-page technical deep dive', detail: 'Extensive technical content in small font.', correct: false },
          { id: 'd', title: 'Dense text with no visuals', detail: 'Wall of text with no images or formatting.', correct: false },
          { id: 'e', title: 'Interactive elements', detail: 'Quizzes, polls, or clickable resources.', correct: true },
          { id: 'f', title: 'Mandatory quiz with failure consequences', detail: 'Required test that affects performance reviews.', correct: false },
        ],
      },
    ],
    passingScore: 7,
    summary:
      'Phishing trends, password tips, social engineering awareness, and data handling reminders are effective newsletter content. Short formats, real examples, and interactive elements maximize engagement.',
  },
  {
    id: 'rc-15',
    title: 'Prepare a security compliance report',
    description:
      'A compliance audit has been completed. Review the findings and select the content appropriate for a compliance report to auditors and regulators.',
    tasks: [
      {
        id: 'rc-15-t1',
        title: 'Task 1: Select compliance report content',
        instruction: 'Choose the content that belongs in a formal compliance report.',
        items: [
          { id: 'a', title: 'Control assessment results', detail: 'Evaluation of security controls against requirements.', correct: true },
          { id: 'b', title: 'Gap analysis and remediation plans', detail: 'Identified gaps with planned fixes.', correct: true },
          { id: 'c', title: 'Internal salary information', detail: 'Employee compensation details.', correct: false },
          { id: 'd', title: 'Evidence of control operation', detail: 'Documentation showing controls in action.', correct: true },
          { id: 'e', title: 'Office party photos', detail: 'Social event pictures.', correct: false },
          { id: 'f', title: 'Risk acceptance documentation', detail: 'Formally accepted risks with approvals.', correct: true },
        ],
      },
      {
        id: 'rc-15-t2',
        title: 'Task 2: Select evidence types',
        instruction: 'Choose the evidence types that best demonstrate compliance to auditors.',
        items: [
          { id: 'a', title: 'Policy documents', detail: 'Current security policies and procedures.', correct: true },
          { id: 'b', title: 'Configuration screenshots', detail: 'System configurations showing security settings.', correct: true },
          { id: 'c', title: 'Verbal assurances', detail: 'Statements that controls are in place.', correct: false },
          { id: 'd', title: 'Training records', detail: 'Documentation of security awareness training.', correct: true },
          { id: 'e', title: 'Gossip about compliance', detail: 'Informal discussions about audit preparation.', correct: false },
          { id: 'f', title: 'Third-party audit reports', detail: 'Independent assessments such as SOC 2.', correct: true },
        ],
      },
    ],
    passingScore: 8,
    summary:
      'Control results, gap analysis, evidence of operation, and risk acceptance belong in compliance reports. Policies, configurations, training records, and third-party audits provide strong evidence.',
  },
]
