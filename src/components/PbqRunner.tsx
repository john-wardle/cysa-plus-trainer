import { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  XCircle,
} from 'lucide-react'

export type PbqTask = {
  id: string
  title: string
  instruction: string
  items: {
    id: string
    title: string
    detail: string
    correct: boolean
  }[]
}

export type PbqScenario = {
  id: string
  title: string
  description: string
  tasks: PbqTask[]
  passingScore: number
  summary: string
}

function PbqRunner({ scenario }: { scenario: PbqScenario }) {
  const [selections, setSelections] = useState<Record<string, string[]>>({})
  const [submitted, setSubmitted] = useState(false)

  const totalItems = scenario.tasks.reduce((sum, task) => sum + task.items.length, 0)

  const score = scenario.tasks.reduce((sum, task) => {
    const selected = selections[task.id] ?? []
    return (
      sum +
      task.items.filter(
        (item) =>
          (item.correct && selected.includes(item.id)) ||
          (!item.correct && !selected.includes(item.id)),
      ).length
    )
  }, 0)

  const maxScore = totalItems
  const isPassing = score >= scenario.passingScore

  function resetLab() {
    setSelections({})
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
            <p className="text-sm font-semibold tracking-wide text-cyan-300">
              PBQ LAB {scenario.id.toUpperCase()}
            </p>
            <h2 className="mt-1 text-2xl font-bold">{scenario.title}</h2>
            <p className="mt-2 max-w-3xl leading-6 text-slate-300">{scenario.description}</p>
          </div>
        </div>
      </div>

      {scenario.tasks.map((task) => {
        const selected = selections[task.id] ?? []
        return (
          <section key={task.id} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-1 text-amber-300" size={22} />
              <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{task.instruction}</p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {task.items.map((item) => {
                const isSelected = selected.includes(item.id)
                return (
                  <button
                    className={`rounded-xl border p-4 text-left transition ${
                      isSelected
                        ? 'border-cyan-400 bg-cyan-400/10'
                        : 'border-slate-700 bg-slate-950 hover:border-cyan-400/50'
                    }`}
                    disabled={submitted}
                    key={item.id}
                    onClick={() => {
                      const current = selections[task.id] ?? []
                      const updated = current.includes(item.id)
                        ? current.filter((i) => i !== item.id)
                        : [...current, item.id]
                      setSelections((prev) => ({ ...prev, [task.id]: updated }))
                    }}
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
        )
      })}

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
            PBQ score: {score} / {maxScore}
          </div>

          <div className="mt-4 space-y-3 text-sm">
            {scenario.tasks.map((task) => {
              const selected = selections[task.id] ?? []
              const missed = task.items.filter(
                (item) => item.correct && !selected.includes(item.id),
              )
              const wrong = task.items.filter(
                (item) => !item.correct && selected.includes(item.id),
              )
              return (
                <div key={task.id}>
                  {missed.length > 0 && (
                    <p className="text-emerald-300">
                      <span className="font-medium">{task.title} — missed: </span>
                      {missed.map((item) => item.title).join(' · ')}
                    </p>
                  )}
                  {wrong.length > 0 && (
                    <p className="text-rose-300">
                      <span className="font-medium">{task.title} — incorrect: </span>
                      {wrong.map((item) => item.title).join(' · ')}
                    </p>
                  )}
                  {missed.length === 0 && wrong.length === 0 && (
                    <p className="text-emerald-300">
                      <span className="font-medium">{task.title} — all correct.</span>
                    </p>
                  )}
                </div>
              )
            })}
          </div>

          <p className="mt-4 leading-6 text-slate-200">{scenario.summary}</p>
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
            disabled={Object.values(selections).every((s) => s.length === 0)}
            onClick={() => setSubmitted(true)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  )
}

export default PbqRunner
