import { useState } from 'react'
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Play,
  ShieldCheck,
  Target,
  XCircle,
} from 'lucide-react'
import SiemPbq from './components/SiemPbq'

type Question = {
  id: number
  domain: string
  prompt: string
  choices: { id: string; text: string }[]
  correct: string[]
  explanation: string
  multiSelect?: boolean
}

const questions: Question[] = [
  {
    id: 1,
    domain: 'Security Operations',
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
      'The immediate priority is containment. Disabling the potentially compromised account limits further misuse while preserving evidence for investigation.',
  },
  {
    id: 2,
    domain: 'Vulnerability Management',
    prompt:
      'Which two factors should have the greatest impact when prioritizing remediation of a vulnerability?',
    choices: [
      { id: 'a', text: 'Whether active exploitation has been observed.' },
      { id: 'b', text: 'The color used in the vulnerability scanner report.' },
      { id: 'c', text: 'The business criticality of the affected asset.' },
      { id: 'd', text: 'The age of the affected device.' },
    ],
    correct: ['a', 'c'],
    multiSelect: true,
    explanation:
      'Prioritization should account for real-world exploit activity and the impact of the affected system. A critical business asset with active exploitation risk should move to the front of the remediation queue.',
  },
  {
    id: 3,
    domain: 'Incident Response',
    prompt:
      'During malware triage, which artifact is most useful for identifying the command-and-control server contacted by an infected endpoint?',
    choices: [
      { id: 'a', text: 'Network connection logs or a packet capture.' },
      { id: 'b', text: 'The employee’s annual security-training record.' },
      { id: 'c', text: 'The endpoint’s monitor resolution.' },
      { id: 'd', text: 'The organization chart for the IT department.' },
    ],
    correct: ['a'],
    explanation:
      'Network telemetry shows outbound connections, DNS requests, IP addresses, ports, and potentially domain names. Those artifacts are directly useful for identifying command-and-control infrastructure.',
  },
]

const domains = [
  { name: 'Security Operations', progress: 72 },
  { name: 'Vulnerability Management', progress: 54 },
  { name: 'Incident Response', progress: 41 },
  { name: 'Reporting & Communication', progress: 65 },
]

function App() {
  const [activeMode, setActiveMode] = useState('Dashboard')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)

  const question = questions[questionIndex]
  const isCorrect =
    selected.length === question.correct.length &&
    selected.every((answer) => question.correct.includes(answer))

  function chooseAnswer(answerId: string) {
    if (submitted) return

    if (question.multiSelect) {
      setSelected((current) =>
        current.includes(answerId)
          ? current.filter((id) => id !== answerId)
          : [...current, answerId],
      )
      return
    }

    setSelected([answerId])
  }

  function submitAnswer() {
    if (selected.length === 0 || submitted) return
    setSubmitted(true)
    if (isCorrect) setCorrectCount((score) => score + 1)
  }

  function nextQuestion() {
    setQuestionIndex((current) => (current + 1) % questions.length)
    setSelected([])
    setSubmitted(false)
  }

  function startPractice() {
    setActiveMode('Practice')
    setQuestionIndex(0)
    setSelected([])
    setSubmitted(false)
    setCorrectCount(0)
  }

  const navigation = [
    { label: 'Dashboard', icon: BarChart3 },
    { label: 'Practice', icon: BookOpen },
    { label: 'PBQ Labs', icon: BrainCircuit },
    { label: 'Mock Exam', icon: Clock3 },
    { label: 'Progress', icon: Target },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">CySA+ Trainer</h1>
              <p className="text-xs text-slate-400">Practice • Analyze • Defend</p>
            </div>
          </div>
          <span className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
            Study streak: 4 days
          </span>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-8 lg:grid-cols-[220px_1fr]">
        <aside className="space-y-2">
          {navigation.map(({ label, icon: Icon }) => (
            <button
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition ${
                activeMode === label
                  ? 'bg-cyan-400 font-semibold text-slate-950'
                  : 'text-slate-300 hover:bg-slate-900 hover:text-white'
              }`}
              key={label}
              onClick={() => setActiveMode(label)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </aside>

        <section className="space-y-8">
          {activeMode === 'PBQ Labs' ? (
  <SiemPbq />
) : activeMode === 'Practice' ? (
            <>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="mb-2 text-sm font-medium text-cyan-300">
                    PRACTICE MODE
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight">
                    {question.domain}
                  </h2>
                  <p className="mt-2 text-slate-400">
                    Question {questionIndex + 1} of {questions.length} · Score:{' '}
                    {correctCount}
                  </p>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800 sm:w-56">
                  <div
                    className="h-full rounded-full bg-cyan-400 transition-all"
                    style={{
                      width: `${((questionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
                <div className="flex gap-3">
                  <CircleHelp className="mt-1 shrink-0 text-cyan-300" size={24} />
                  <div>
                    {question.multiSelect && (
                      <p className="mb-3 text-sm font-medium text-amber-300">
                        Select two answers.
                      </p>
                    )}
                    <h3 className="text-xl font-semibold leading-8">{question.prompt}</h3>
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {question.choices.map((choice) => {
                    const chosen = selected.includes(choice.id)
                    const answerIsCorrect = question.correct.includes(choice.id)
                    const showCorrect = submitted && answerIsCorrect
                    const showWrong = submitted && chosen && !answerIsCorrect

                    return (
                      <button
                        className={`flex w-full items-start gap-4 rounded-xl border p-4 text-left transition ${
                          showCorrect
                            ? 'border-emerald-400 bg-emerald-400/10'
                            : showWrong
                              ? 'border-rose-400 bg-rose-400/10'
                              : chosen
                                ? 'border-cyan-400 bg-cyan-400/10'
                                : 'border-slate-700 bg-slate-950 hover:border-cyan-400/60'
                        }`}
                        key={choice.id}
                        onClick={() => chooseAnswer(choice.id)}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                            showCorrect
                              ? 'border-emerald-400 text-emerald-300'
                              : showWrong
                                ? 'border-rose-400 text-rose-300'
                                : chosen
                                  ? 'border-cyan-400 text-cyan-300'
                                  : 'border-slate-600 text-slate-400'
                          }`}
                        >
                          {choice.id.toUpperCase()}
                        </span>
                        <span className="pt-0.5">{choice.text}</span>
                      </button>
                    )
                  })}
                </div>

                {submitted && (
                  <div
                    className={`mt-6 rounded-xl border p-5 ${
                      isCorrect
                        ? 'border-emerald-400/30 bg-emerald-400/10'
                        : 'border-rose-400/30 bg-rose-400/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 font-semibold">
                      {isCorrect ? (
                        <CheckCircle2 className="text-emerald-300" size={20} />
                      ) : (
                        <XCircle className="text-rose-300" size={20} />
                      )}
                      {isCorrect ? 'Correct' : 'Not quite'}
                    </div>
                    <p className="mt-2 leading-6 text-slate-200">{question.explanation}</p>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  {submitted ? (
                    <button
                      className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                      onClick={nextQuestion}
                    >
                      Next question <ChevronRight size={18} />
                    </button>
                  ) : (
                    <button
                      className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40"
                      disabled={selected.length === 0}
                      onClick={submitAnswer}
                    >
                      Check answer
                    </button>
                  )}
                </div>
              </article>
            </>
          ) : (
            <>
              <div>
                <p className="mb-2 text-sm font-medium text-cyan-300">{activeMode}</p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Build operational confidence.
                </h2>
                <p className="mt-2 max-w-2xl text-slate-400">
                  Original questions and practical simulations designed around CySA+
                  skills—not memorized exam material.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="text-sm text-cyan-100">Overall readiness</p>
                  <p className="mt-2 text-4xl font-bold">61%</p>
                  <p className="mt-2 text-sm text-slate-300">Up 8% from last week</p>
                </article>
                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Questions completed</p>
                  <p className="mt-2 text-4xl font-bold">135</p>
                  <p className="mt-2 text-sm text-slate-400">Target: 500 before exam day</p>
                </article>
                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">PBQ labs completed</p>
                  <p className="mt-2 text-4xl font-bold">2 / 12</p>
                  <p className="mt-2 text-sm text-amber-300">Next: SIEM alert triage</p>
                </article>
              </div>

              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">Start a practice session</h3>
                <p className="mt-1 text-slate-400">
                  Three original scenarios are ready to test the question engine.
                </p>
                <button
                  className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                  onClick={startPractice}
                >
                  <Play size={18} fill="currentColor" />
                  Start practice
                </button>
              </section>

              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">Objective readiness</h3>
                <div className="mt-6 space-y-5">
                  {domains.map((domain) => (
                    <div key={domain.name}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span className="font-medium">{domain.name}</span>
                        <span className="text-slate-400">{domain.progress}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                        <div
                          className="h-full rounded-full bg-cyan-400"
                          style={{ width: `${domain.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

export default App