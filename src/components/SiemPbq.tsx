import { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Eye,
  ShieldAlert,
  XCircle,
} from 'lucide-react'

const indicators = [
  {
    id: 'impossible-travel',
    title: 'Impossible travel pattern',
    detail: 'Successful sign-ins occurred from Portland and Frankfurt within six minutes.',
    correct: true,
  },
  {
    id: 'new-device',
    title: 'New unmanaged device',
    detail: 'The successful sign-in came from a device never previously associated with the user.',
    correct: true,
  },
  {
    id: 'mfa-reset',
    title: 'MFA method changed immediately before sign-in',
    detail: 'A new MFA method was enrolled four minutes before the successful sign-in.',
    correct: true,
  },
  {
    id: 'software-update',
    title: 'A signed software update was installed',
    detail: 'The endpoint installed an approved browser update the prior day.',
    correct: false,
  },
  {
    id: 'office-network',
    title: 'The user normally works from an office network',
    detail: 'Historical records show that the user frequently signs in from the corporate office.',
    correct: false,
  },
]

const actions = [
  {
    id: 'disable-account',
    title: 'Disable the affected account',
    detail: 'Contain further use of the compromised identity.',
    correct: true,
  },
  {
    id: 'revoke-sessions',
    title: 'Revoke active sessions and authentication tokens',
    detail: 'Invalidate existing access that may remain active after the password is changed.',
    correct: true,
  },
  {
    id: 'preserve-logs',
    title: 'Preserve identity, endpoint, and network logs',
    detail: 'Retain evidence for scoping and investigation.',
    correct: true,
  },
  {
    id: 'delete-logs',
    title: 'Delete the related logs to protect privacy',
    detail: 'This destroys evidence and is not an appropriate containment action.',
    correct: false,
  },
  {
    id: 'wipe-device',
    title: 'Immediately wipe every employee device',
    detail: 'This is disproportionate without evidence and would destroy useful forensic data.',
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

function SiemPbq() {
  const [selectedIndicators, setSelectedIndicators] = useState<string[]>([])
  const [selectedActions, setSelectedActions] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)

  const indicatorScore = indicators.filter(
    (item) =>
      (item.correct && selectedIndicators.includes(item.id)) ||
      (!item.correct && !selectedIndicators.includes(item.id)),
  ).length

  const actionScore = actions.filter(
    (item) =>
      (item.correct && selectedActions.includes(item.id)) ||
      (!item.correct && !selectedActions.includes(item.id)),
  ).length

  const maxScore = indicators.length + actions.length
  const totalScore = indicatorScore + actionScore
  const isPassing = totalScore >= 8

  function resetLab() {
    setSelectedIndicators([])
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
            <p className="text-sm font-semibold tracking-wide text-cyan-300">PBQ LAB 01</p>
            <h2 className="mt-1 text-2xl font-bold">Investigate a suspicious sign-in</h2>
            <p className="mt-2 max-w-3xl leading-6 text-slate-300">
              A user reports that they did not access company resources this morning.
              Review the simulated SIEM evidence, identify compromise indicators, and
              choose the appropriate immediate response actions.
            </p>
          </div>
        </div>
      </div>

      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
        <div className="border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <Eye className="text-cyan-300" size={20} />
            <h3 className="font-semibold">SIEM event timeline</h3>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-950 text-slate-400">
              <tr>
                <th className="px-6 py-3 font-medium">Time</th>
                <th className="px-6 py-3 font-medium">Source</th>
                <th className="px-6 py-3 font-medium">Event</th>
                <th className="px-6 py-3 font-medium">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              <tr>
                <td className="px-6 py-4 text-slate-400">08:12:04</td>
                <td className="px-6 py-4">Identity Provider</td>
                <td className="px-6 py-4 text-rose-300">MFA method added</td>
                <td className="px-6 py-4 text-slate-400">New authenticator registered for j.smith</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-400">08:14:36</td>
                <td className="px-6 py-4">Identity Provider</td>
                <td className="px-6 py-4 text-emerald-300">Sign-in success</td>
                <td className="px-6 py-4 text-slate-400">Frankfurt, DE · unmanaged Windows device</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-400">08:20:11</td>
                <td className="px-6 py-4">Identity Provider</td>
                <td className="px-6 py-4 text-emerald-300">Sign-in success</td>
                <td className="px-6 py-4 text-slate-400">Portland, OR · managed workstation</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-slate-400">08:22:18</td>
                <td className="px-6 py-4">Cloud Email</td>
                <td className="px-6 py-4 text-amber-300">Mailbox rule created</td>
                <td className="px-6 py-4 text-slate-400">Forwards invoices to external address</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1 text-amber-300" size={22} />
          <div>
            <h3 className="text-lg font-semibold">Task 1: Identify compromise indicators</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select every finding that supports a likely account compromise.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {indicators.map((item) => {
            const selected = selectedIndicators.includes(item.id)
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
                  toggleChoice(item.id, selectedIndicators, setSelectedIndicators)
                }
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

      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-start gap-3">
          <ShieldAlert className="mt-1 text-cyan-300" size={22} />
          <div>
            <h3 className="text-lg font-semibold">Task 2: Choose immediate response actions</h3>
            <p className="mt-1 text-sm text-slate-400">
              Select the actions that contain the incident while preserving evidence.
            </p>
          </div>
        </div>

        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {actions.map((item) => {
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
          <p className="mt-2 leading-6 text-slate-200">
            The evidence supports account compromise: a new MFA method, impossible
            travel, an unmanaged device, and a suspicious mailbox-forwarding rule.
            Contain the account, revoke active access, and preserve evidence before
            broader remediation.
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
            disabled={selectedIndicators.length === 0 || selectedActions.length === 0}
            onClick={() => setSubmitted(true)}
          >
            Submit investigation
          </button>
        )}
      </div>
    </div>
  )
}

export default SiemPbq