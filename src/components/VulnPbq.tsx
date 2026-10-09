import { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  ClipboardList,
  ShieldAlert,
  XCircle,
} from 'lucide-react'

const scanFindings = [
  {
    id: 'web-01',
    asset: 'WEB-01',
    assetType: 'Internet-facing web server',
    criticality: 'Critical — processes customer data',
    vulnerability: 'Remote code execution in web framework',
    cvss: '9.8',
    exploit: 'Public exploit available',
    priority: true,
  },
  {
    id: 'db-02',
    asset: 'DB-02',
    assetType: 'Internal database',
    criticality: 'Critical — stores financial records',
    vulnerability: 'Privilege escalation in database engine',
    cvss: '8.1',
    exploit: 'No public exploit',
    priority: true,
  },
  {
    id: 'ws-14',
    asset: 'WS-14',
    assetType: 'Employee workstation',
    criticality: 'Low — isolated VLAN',
    vulnerability: 'Local privilege escalation',
    cvss: '7.5',
    exploit: 'Public exploit available',
    priority: false,
  },
  {
    id: 'app-07',
    asset: 'APP-07',
    assetType: 'Internal application',
    criticality: 'Medium',
    vulnerability: 'Feature flagged but disabled per owner',
    cvss: '6.5',
    exploit: 'No public exploit',
    priority: false,
    needsValidation: true,
  },
  {
    id: 'prn-03',
    asset: 'PRN-03',
    assetType: 'Network printer',
    criticality: 'Informational',
    vulnerability: 'Outdated firmware',
    cvss: '5.3',
    exploit: 'No public exploit',
    priority: false,
  },
]

const remediationActions = [
  {
    id: 'patch-web-01',
    title: 'Apply emergency patch to WEB-01',
    detail: 'Highest risk: internet-facing, critical asset, active exploit.',
    correct: true,
  },
  {
    id: 'schedule-db-02',
    title: 'Schedule DB-02 patching in the next maintenance window',
    detail: 'Critical asset but no public exploit and not internet-facing.',
    correct: true,
  },
  {
    id: 'validate-app-07',
    title: 'Validate APP-07 configuration to confirm the feature is disabled',
    detail: 'Owner claims the feature is off — verify before closing.',
    correct: true,
  },
  {
    id: 'add-prn-03-cycle',
    title: 'Add PRN-03 to the regular firmware update cycle',
    detail: 'Low risk, but still worth tracking for routine hardening.',
    correct: true,
  },
  {
    id: 'rebuild-all',
    title: 'Rebuild every server in the environment immediately',
    detail: 'Disproportionate without evidence of widespread compromise.',
    correct: false,
  },
  {
    id: 'ignore-prn-03',
    title: 'Ignore PRN-03 because it is only a printer',
    detail: 'Printers are network assets and should still be tracked.',
    correct: false,
  },
]

function toggleChoice(
  id: string,
  current: string[],
  update: (value: string[]) => void,
) {
  update(current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
}

function VulnPbq() {
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([])
  const [selectedValidations, setSelectedValidations] = useState<string[]>([])
  const [selectedActions, setSelectedActions] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const priorityScore = scanFindings.filter(
    (item) =>
      (item.priority && selectedPriorities.includes(item.id)) ||
      (!item.priority && !selectedPriorities.includes(item.id)),
  ).length

  const validationScore = scanFindings.filter(
    (item) =>
      (item.needsValidation && selectedValidations.includes(item.id)) ||
      (!item.needsValidation && !selectedValidations.includes(item.id)),
  ).length

  const actionScore = remediationActions.filter(
    (item) =>
      (item.correct && selectedActions.includes(item.id)) ||
      (!item.correct && !selectedActions.includes(item.id)),
  ).length

  const maxScore = scanFindings.length * 2 + remediationActions.length
  const totalScore = priorityScore + validationScore + actionScore
  const isPassing = totalScore >= 9

  const missedPriorities = scanFindings.filter(
    (item) => item.priority && !selectedPriorities.includes(item.id),
  )
  const wrongPriorities = scanFindings.filter(
    (item) => !item.priority && selectedPriorities.includes(item.id),
  )
  const missedValidations = scanFindings.filter(
    (item) => item.needsValidation && !selectedValidations.includes(item.id),
  )
  const wrongValidations = scanFindings.filter(
    (item) => !item.needsValidation && selectedValidations.includes(item.id),
  )
  const missedActions = remediationActions.filter(
    (item) => item.correct && !selectedActions.includes(item.id),
  )
  const wrongActions = remediationActions.filter(
    (item) => !item.correct && selectedActions.includes(item.id),
  )

  function resetLab() {
    setSelectedPriorities([])
    setSelectedValidations([])
    setSelectedActions([])
    setSubmitted(false)
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-r from-cyan-400/10 to-slate-900 p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
            <ShieldAlert size={28} />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-wide text-cyan-300">PBQ LAB 02</p>
            <h2 className="mt-1 text-2xl font-bold">Prioritize vulnerability remediation</h2>
            <p className="mt-2 max-w-3xl leading-6 text-slate-300">
              A weekly vulnerability scan has returned five findings. Review the scan
              results, identify the highest-priority remediation targets, flag findings
              that need validation, and choose the appropriate response actions.
            </p>
          </div>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <ClipboardList className="text-cyan-300" size={20} />
            <h3 className="font-semibold">Vulnerability scan results</h3>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead className="bg-slate-950 text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Asset</th>
                <th className="px-6 py-3 font-medium">Type</th>
                <th className="px-6 py-3 font-medium">Criticality</th>
                <th className="px-6 py-3 font-medium">Vulnerability</th>
                <th className="px-6 py-3 font-medium">CVSS</th>
                <th className="px-6 py-3 font-medium">Exploit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {scanFindings.map((finding) => (
                <tr key={finding.id}>
                  <td className="px-6 py-4 font-medium text-slate-200">{finding.asset}</td>
                  <td className="px-6 py-4 text-slate-400">{finding.assetType}</td>
                  <td className="px-6 py-4 text-slate-400">{finding.criticality}</td>
                  <td className="px-6 py-4 text-slate-300">{finding.vulnerability}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        finding.cvss >= '9.0'
                          ? 'bg-rose-400/15 text-rose-300'
                          : finding.cvss >= '7.0'
                            ? 'bg-amber-400/15 text-amber-300'
                            : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      {finding.cvss}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-400">{finding.exploit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 text-amber-300" size={22} />
          <div>
            <h3 className="text-lg font-semibold">Task 1: Identify top remediation priorities</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select the two findings that should be remediated first based on risk.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {scanFindings.map((item) => {
            const selected = selectedPriorities.includes(item.id)
            return (
              <button
                className={`rounded-xl border p-4 text-left transition ${
                  selected
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-700 bg-slate-950 hover:border-cyan-400/50'
                }`}
                disabled={submitted}
                key={item.id}
                onClick={() =>
                  toggleChoice(item.id, selectedPriorities, setSelectedPriorities)
                }
              >
                <span className="font-medium">
                  {item.asset} — {item.vulnerability}
                </span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">
                  CVSS {item.cvss} · {item.criticality}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 text-amber-300" size={22} />
          <div>
            <h3 className="text-lg font-semibold">Task 2: Flag findings that need validation</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select any finding that should be validated before remediation or closure.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {scanFindings.map((item) => {
            const selected = selectedValidations.includes(item.id)
            return (
              <button
                className={`rounded-xl border p-4 text-left transition ${
                  selected
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-700 bg-slate-950 hover:border-cyan-400/50'
                }`}
                disabled={submitted}
                key={item.id}
                onClick={() =>
                  toggleChoice(item.id, selectedValidations, setSelectedValidations)
                }
              >
                <span className="font-medium">
                  {item.asset} — {item.vulnerability}
                </span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">
                  {item.exploit}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 text-cyan-300" size={22} />
          <div>
            <h3 className="text-lg font-semibold">Task 3: Choose remediation actions</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select the actions that appropriately address the findings.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {remediationActions.map((item) => {
            const selected = selectedActions.includes(item.id)
            return (
              <button
                className={`rounded-xl border p-4 text-left transition ${
                  selected
                    ? 'border-cyan-400 bg-cyan-400/10'
                    : 'border-slate-700 bg-slate-950 hover:border-cyan-400/50'
                }`}
                disabled={submitted}
                key={item.id}
                onClick={() => toggleChoice(item.id, selectedActions, setSelectedActions)}
              >
                <span className="font-medium">{item.title}</span>
                <span className="mt-1 block text-sm leading-5 text-slate-400">
                  {item.detail}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      {submitted && (
        <section
          className={`rounded-2xl border p-6 ${
            isPassing
              ? 'border-emerald-400/30 bg-emerald-400/10'
              : 'border-amber-400/30 bg-amber-400/10'
          }`}
        >
          <div className="flex items-center gap-2 text-lg font-semibold">
            {isPassing ? (
              <CheckCircle2 className="text-emerald-300" />
            ) : (
              <XCircle className="text-amber-300" />
            )}
            PBQ score: {totalScore} / {maxScore}
          </div>

          <div className="mt-4 space-y-3 text-sm">
            {missedPriorities.length > 0 && (
              <p className="text-emerald-300">
                <span className="font-medium">Missed priorities: </span>
                {missedPriorities.map((item) => `${item.asset} (${item.vulnerability})`).join(' · ')}
              </p>
            )}
            {wrongPriorities.length > 0 && (
              <p className="text-rose-300">
                <span className="font-medium">Incorrectly prioritized: </span>
                {wrongPriorities.map((item) => `${item.asset} (${item.vulnerability})`).join(' · ')}
              </p>
            )}
            {missedValidations.length > 0 && (
              <p className="text-emerald-300">
                <span className="font-medium">Missed validation flags: </span>
                {missedValidations.map((item) => `${item.asset} (${item.vulnerability})`).join(' · ')}
              </p>
            )}
            {wrongValidations.length > 0 && (
              <p className="text-rose-300">
                <span className="font-medium">Incorrectly flagged for validation: </span>
                {wrongValidations.map((item) => `${item.asset} (${item.vulnerability})`).join(' · ')}
              </p>
            )}
            {missedActions.length > 0 && (
              <p className="text-emerald-300">
                <span className="font-medium">Missed actions: </span>
                {missedActions.map((item) => item.title).join(' · ')}
              </p>
            )}
            {wrongActions.length > 0 && (
              <p className="text-rose-300">
                <span className="font-medium">Incorrectly selected: </span>
                {wrongActions.map((item) => item.title).join(' · ')}
              </p>
            )}
            {missedPriorities.length === 0 &&
              wrongPriorities.length === 0 &&
              missedValidations.length === 0 &&
              wrongValidations.length === 0 &&
              missedActions.length === 0 &&
              wrongActions.length === 0 && (
                <p className="text-emerald-300">
                  All priorities, validation flags, and actions identified correctly.
                </p>
              )}
          </div>

          <p className="mt-4 leading-6 text-slate-200">
            WEB-01 is the top priority: internet-facing, critical asset, CVSS 9.8, and a
            public exploit. DB-02 is second: critical asset but no public exploit and
            internal-only. APP-07 needs validation before closure. PRN-03 should be
            tracked in the regular firmware cycle, not ignored.
          </p>
        </section>
      )}

      <div className="flex justify-end gap-3">
        {submitted ? (
          <button
            className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-200"
            onClick={resetLab}
          >
            Reset lab
          </button>
        ) : (
          <button
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
            disabled={
              selectedPriorities.length === 0 ||
              selectedValidations.length === 0 ||
              selectedActions.length === 0
            }
            onClick={() => setSubmitted(true)}
          >
            Submit prioritization
          </button>
        )}
      </div>
    </div>
  )
}

export default VulnPbq
