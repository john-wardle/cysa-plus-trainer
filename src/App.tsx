import { useEffect, useState } from 'react'
import {
  BarChart3,
  BookOpen,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Play,
  RotateCcw,
  ShieldCheck,
  Target,
  Trash2,
  XCircle,
} from 'lucide-react'
import SiemPbq from './components/SiemPbq'
import VulnPbq from './components/VulnPbq'
import { cysaDomains, questionBank } from './data/questionBank'

type StudyStats = {
  questionsAnswered: number
  questionsCorrect: number
}

type SessionResult = {
  id: string
  domain: string
  prompt: string
  selected: string[]
  correct: string[]
  choices: { id: string; text: string }[]
  explanation: string
}

const defaultStudyStats: StudyStats = {
  questionsAnswered: 0,
  questionsCorrect: 0,
}

function loadStudyStats(): StudyStats {
  try {
    const saved = localStorage.getItem('cysa-study-stats')

    if (!saved) return defaultStudyStats

    const parsed = JSON.parse(saved) as Partial<StudyStats>

    return {
      questionsAnswered: parsed.questionsAnswered ?? 0,
      questionsCorrect: parsed.questionsCorrect ?? 0,
    }
  } catch {
    return defaultStudyStats
  }
}

function formatTime(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

function App() {
  const allCysaQuestions = questionBank.filter(
    (question) =>
      question.certification === 'CySA+' && question.examVersion === 'CS0-003',
  )

  const [activeMode, setActiveMode] = useState('Dashboard')
  const [selectedDomain, setSelectedDomain] = useState('All Domains')
  const [selectedPbq, setSelectedPbq] = useState<string | null>(null)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionResults, setSessionResults] = useState<SessionResult[]>([])
  const [lastQuestionReached, setLastQuestionReached] = useState(false)
  const [secondsRemaining, setSecondsRemaining] = useState(20 * 60)
  const [studyStats, setStudyStats] = useState<StudyStats>(loadStudyStats)
  const [confirmReset, setConfirmReset] = useState(false)

  const isMockExam = activeMode === 'Mock Exam'
  const sessionComplete = lastQuestionReached || (isMockExam && secondsRemaining <= 0)

  // Practice mode drills a single domain; the mock exam always uses the full bank.
  const cysaQuestions = isMockExam
    ? allCysaQuestions
    : allCysaQuestions.filter(
        (question) =>
          selectedDomain === 'All Domains' || question.domain === selectedDomain,
      )

  const question = cysaQuestions[questionIndex]

  const readiness =
    studyStats.questionsAnswered === 0
      ? 0
      : Math.round(
          (studyStats.questionsCorrect / studyStats.questionsAnswered) * 100,
        )

  const isCorrect =
    selected.length === question.correct.length &&
    selected.every((answer) => question.correct.includes(answer))

  const missedCorrect = question.correct.filter((id) => !selected.includes(id))
  const incorrectSelected = selected.filter(
    (id) => !question.correct.includes(id),
  )
  const choiceText = (id: string) =>
    question.choices.find((choice) => choice.id === id)?.text ?? ''

  useEffect(() => {
    localStorage.setItem('cysa-study-stats', JSON.stringify(studyStats))
  }, [studyStats])

  useEffect(() => {
    if (!isMockExam || secondsRemaining <= 0) return

    const timer = window.setInterval(() => {
      setSecondsRemaining((seconds) => seconds - 1)
    }, 1000)

    return () => window.clearInterval(timer)
  }, [isMockExam, secondsRemaining])

  function startSession(mode: 'Practice' | 'Mock Exam') {
    setActiveMode(mode)
    setQuestionIndex(0)
    setSelected([])
    setSubmitted(false)
    setSessionCorrect(0)
    setSessionResults([])
    setLastQuestionReached(false)
    setSecondsRemaining(20 * 60)
  }

  function selectDomain(domain: string) {
    setSelectedDomain(domain)
    setQuestionIndex(0)
    setSelected([])
    setSubmitted(false)
  }

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

    setStudyStats((stats) => ({
      questionsAnswered: stats.questionsAnswered + 1,
      questionsCorrect: stats.questionsCorrect + (isCorrect ? 1 : 0),
    }))

    if (isCorrect) setSessionCorrect((score) => score + 1)

    setSessionResults((results) => [
      ...results,
      {
        id: question.id,
        domain: question.domain,
        prompt: question.prompt,
        selected,
        correct: question.correct,
        choices: question.choices,
        explanation: question.explanation,
      },
    ])
  }

  function nextQuestion() {
    if (questionIndex === cysaQuestions.length - 1) {
      setLastQuestionReached(true)
      return
    }

    setQuestionIndex((current) => current + 1)
    setSelected([])
    setSubmitted(false)
  }

  function handleNavigation(label: string) {
    if (label === 'Practice' || label === 'Mock Exam') {
      startSession(label)
      return
    }

    if (label !== 'PBQ Labs') {
      setSelectedPbq(null)
    }

    setActiveMode(label)
  }

  function resetProgress() {
    localStorage.removeItem('cysa-study-stats')
    setStudyStats(defaultStudyStats)
    setConfirmReset(false)
  }

  const navigation = [
    { label: 'Dashboard', icon: BarChart3 },
    { label: 'Practice', icon: BookOpen },
    { label: 'PBQ Labs', icon: BrainCircuit },
    { label: 'Mock Exam', icon: Clock3 },
    { label: 'Progress', icon: Target },
  ]

  const showQuestionSession =
    activeMode === 'Practice' || activeMode === 'Mock Exam'

  const domainOptions = ['All Domains', ...cysaDomains.map((domain) => domain.name)]

  const sessionPercent =
    sessionResults.length > 0
      ? Math.round((sessionCorrect / sessionResults.length) * 100)
      : 0

  const missedQuestions = sessionResults.filter((result) => {
    const resultCorrect =
      result.selected.length === result.correct.length &&
      result.selected.every((id) => result.correct.includes(id))
    return !resultCorrect
  })

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
              <p className="text-xs text-slate-400">
                CS0-003 · Practice · Analyze · Defend
              </p>
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
              onClick={() => handleNavigation(label)}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </aside>

        <section className="space-y-8">
          {activeMode === 'PBQ Labs' ? (
            selectedPbq === 'siem' ? (
              <div className="space-y-4">
                <button
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
                  onClick={() => setSelectedPbq(null)}
                >
                  ← Back to lab directory
                </button>
                <SiemPbq />
              </div>
            ) : selectedPbq === 'vuln' ? (
              <div className="space-y-4">
                <button
                  className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
                  onClick={() => setSelectedPbq(null)}
                >
                  ← Back to lab directory
                </button>
                <VulnPbq />
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <p className="mb-2 text-sm font-medium text-cyan-300">PBQ LABS</p>
                  <h2 className="text-3xl font-bold tracking-tight">
                    Hands-on investigation practice.
                  </h2>
                  <p className="mt-2 max-w-2xl text-slate-400">
                    Performance-based labs that simulate real analyst workflows.
                    Select a lab to begin.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <button
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-cyan-400/50"
                    onClick={() => setSelectedPbq('siem')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
                        <ShieldCheck size={22} />
                      </div>
                      <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-200">
                        Lab 01
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      Investigate a suspicious sign-in
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Review SIEM evidence, identify compromise indicators, and choose
                      immediate response actions.
                    </p>
                  </button>

                  <button
                    className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition hover:border-cyan-400/50"
                    onClick={() => setSelectedPbq('vuln')}
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300">
                        <ShieldCheck size={22} />
                      </div>
                      <span className="rounded-full bg-cyan-400/10 px-2 py-0.5 text-xs font-medium text-cyan-200">
                        Lab 02
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">
                      Prioritize vulnerability remediation
                    </h3>
                    <p className="mt-2 text-sm text-slate-400">
                      Review scan findings, identify top priorities, flag false
                      positives, and choose remediation actions.
                    </p>
                  </button>
                </div>
              </div>
            )
          ) : showQuestionSession ? (
            sessionComplete ? (
              <div className="space-y-6">
                <section className="rounded-2xl border border-cyan-400/25 bg-slate-900 p-8 text-center">
                  <CheckCircle2 className="mx-auto text-cyan-300" size={44} />
                  <p className="mt-5 text-sm font-semibold text-cyan-300">
                    {isMockExam ? 'MOCK EXAM COMPLETE' : 'PRACTICE SESSION COMPLETE'}
                  </p>
                  <h2 className="mt-2 text-4xl font-bold">{sessionPercent}%</h2>
                  <p className="mt-2 text-slate-400">
                    {sessionCorrect} / {sessionResults.length} correct
                  </p>
                </section>

                <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <h3 className="text-lg font-semibold">Domain breakdown</h3>
                  <div className="mt-5 space-y-4">
                    {cysaDomains.map((domain) => {
                      const domainResults = sessionResults.filter(
                        (r) => r.domain === domain.name,
                      )
                      const domainCorrect = domainResults.filter((r) => {
                        const rCorrect =
                          r.selected.length === r.correct.length &&
                          r.selected.every((id) => r.correct.includes(id))
                        return rCorrect
                      }).length
                      const domainPercent =
                        domainResults.length > 0
                          ? Math.round(
                              (domainCorrect / domainResults.length) * 100,
                            )
                          : 0

                      return (
                        <div key={domain.name}>
                          <div className="mb-2 flex justify-between text-sm">
                            <span className="font-medium">{domain.name}</span>
                            <span className="text-slate-400">
                              {domainCorrect}/{domainResults.length} · {domainPercent}%
                            </span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                            <div
                              className={`h-full rounded-full ${
                                domainPercent >= 70 ? 'bg-emerald-400' : domainPercent >= 50 ? 'bg-amber-400' : 'bg-rose-400'
                              }`}
                              style={{ width: `${domainPercent}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </section>

                {missedQuestions.length > 0 && (
                  <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <h3 className="text-lg font-semibold">
                      Review missed questions ({missedQuestions.length})
                    </h3>
                    <div className="mt-5 space-y-4">
                      {missedQuestions.map((result) => {
                        const resultIncorrectSelected = result.selected.filter(
                          (id) => !result.correct.includes(id),
                        )
                        const resultMissedCorrect = result.correct.filter(
                          (id) => !result.selected.includes(id),
                        )

                        return (
                          <article
                            className="rounded-xl border border-slate-700 bg-slate-950 p-5"
                            key={result.id}
                          >
                            <div className="flex flex-wrap gap-2 text-xs">
                              <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-200">
                                {result.domain}
                              </span>
                            </div>
                            <p className="mt-3 font-medium leading-7">{result.prompt}</p>

                            <div className="mt-3 space-y-1 text-sm">
                              {resultMissedCorrect.length > 0 && (
                                <p className="text-emerald-300">
                                  <span className="font-medium">Correct answer: </span>
                                  {resultMissedCorrect
                                    .map(
                                      (id) =>
                                        result.choices.find((c) => c.id === id)?.text ??
                                        '',
                                    )
                                    .join(' · ')}
                                </p>
                              )}
                              {resultIncorrectSelected.length > 0 && (
                                <p className="text-rose-300">
                                  <span className="font-medium">You selected: </span>
                                  {resultIncorrectSelected
                                    .map(
                                      (id) =>
                                        result.choices.find((c) => c.id === id)?.text ??
                                        '',
                                    )
                                    .join(' · ')}
                                </p>
                              )}
                            </div>

                            <p className="mt-3 border-t border-slate-800 pt-3 text-sm leading-6 text-slate-400">
                              {result.explanation}
                            </p>
                          </article>
                        )
                      })}
                    </div>
                  </section>
                )}

                <div className="flex justify-center gap-3">
                  <button
                    className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    onClick={() =>
                      startSession(isMockExam ? 'Mock Exam' : 'Practice')
                    }
                  >
                    Retake session
                  </button>
                  <button
                    className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-200"
                    onClick={() => setActiveMode('Dashboard')}
                  >
                    Return to dashboard
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="mb-2 text-sm font-medium text-cyan-300">
                      {isMockExam ? 'TIMED MOCK EXAM' : 'PRACTICE MODE'}
                    </p>
                    <h2 className="text-3xl font-bold tracking-tight">
                      {question.domain}
                    </h2>
                    <p className="mt-2 text-slate-400">
                      Question {questionIndex + 1} of {cysaQuestions.length} ·
                      Session score: {sessionCorrect}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    {isMockExam && (
                      <div className="rounded-lg border border-amber-400/30 bg-amber-400/10 px-4 py-2 font-mono text-lg font-bold text-amber-200">
                        {formatTime(secondsRemaining)}
                      </div>
                    )}
                    <div className="h-2 w-40 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-cyan-400 transition-all"
                        style={{
                          width: `${
                            ((questionIndex + 1) / cysaQuestions.length) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                {!isMockExam && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-medium text-slate-400">
                      Drill domain:
                    </span>
                    {domainOptions.map((domain) => (
                      <button
                        className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                          selectedDomain === domain
                            ? 'border-cyan-400 bg-cyan-400 text-slate-950'
                            : 'border-slate-700 text-slate-300 hover:border-cyan-400/60 hover:text-cyan-200'
                        }`}
                        key={domain}
                        onClick={() => selectDomain(domain)}
                      >
                        {domain}
                      </button>
                    ))}
                  </div>
                )}

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
                  <div className="flex gap-3">
                    <CircleHelp className="mt-1 shrink-0 text-cyan-300" size={24} />
                    <div>
                      <div className="mb-3 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-cyan-400/10 px-2 py-1 text-cyan-200">
                          {question.objective}
                        </span>
                        <span className="rounded-full bg-slate-800 px-2 py-1 text-slate-300">
                          {question.difficulty}
                        </span>
                      </div>

                      {question.multiSelect && (
                        <p className="mb-3 text-sm font-medium text-amber-300">
                          Select all applicable answers.
                        </p>
                      )}

                      <h3 className="text-xl font-semibold leading-8">
                        {question.prompt}
                      </h3>
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

                      {!isCorrect && (
                        <div className="mt-3 space-y-2 text-sm">
                          {missedCorrect.length > 0 && (
                            <p className="text-emerald-300">
                              <span className="font-medium">Missed correct answer:{' '}</span>
                              {missedCorrect.map((id) => choiceText(id)).join(' · ')}
                            </p>
                          )}
                          {incorrectSelected.length > 0 && (
                            <p className="text-rose-300">
                              <span className="font-medium">Incorrectly selected:{' '}</span>
                              {incorrectSelected.map((id) => choiceText(id)).join(' · ')}
                            </p>
                          )}
                        </div>
                      )}

                      <p className="mt-3 leading-6 text-slate-200">
                        {question.explanation}
                      </p>
                    </div>
                  )}

                  <div className="mt-8 flex justify-end">
                    {submitted ? (
                      <button
                        className="inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                        onClick={nextQuestion}
                      >
                        {questionIndex === cysaQuestions.length - 1
                          ? 'Finish session'
                          : 'Next question'}
                        <ChevronRight size={18} />
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
            )
          ) : activeMode === 'Progress' ? (
            <div className="space-y-6">
              <div>
                <p className="mb-2 text-sm font-medium text-cyan-300">PROGRESS</p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Your saved study data.
                </h2>
                <p className="mt-2 max-w-2xl text-slate-400">
                  All progress is stored locally in your browser. No account or server
                  is required.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="text-sm text-cyan-100">Overall readiness</p>
                  <p className="mt-2 text-4xl font-bold">{readiness}%</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Based on saved question results
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Questions answered</p>
                  <p className="mt-2 text-4xl font-bold">
                    {studyStats.questionsAnswered}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {studyStats.questionsCorrect} correct
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Question bank size</p>
                  <p className="mt-2 text-4xl font-bold">
                    {allCysaQuestions.length}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Across four CS0-003 domains
                  </p>
                </article>
              </div>

              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">Reset progress</h3>
                <p className="mt-2 text-sm text-slate-400">
                  Clear all saved question results and reset your readiness score. This
                  action cannot be undone.
                </p>
                <div className="mt-4">
                  {confirmReset ? (
                    <div className="flex items-center gap-3">
                      <button
                        className="inline-flex items-center gap-2 rounded-lg bg-rose-500 px-5 py-3 font-semibold text-white transition hover:bg-rose-400"
                        onClick={resetProgress}
                      >
                        <Trash2 size={18} />
                        Yes, reset everything
                      </button>
                      <button
                        className="rounded-lg border border-slate-600 px-5 py-3 font-semibold transition hover:border-slate-400"
                        onClick={() => setConfirmReset(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="inline-flex items-center gap-2 rounded-lg border border-rose-400/50 px-5 py-3 font-semibold text-rose-300 transition hover:bg-rose-400/10"
                      onClick={() => setConfirmReset(true)}
                    >
                      <RotateCcw size={18} />
                      Reset progress
                    </button>
                  )}
                </div>
              </section>
            </div>
          ) : (
            <>
              <div>
                <p className="mb-2 text-sm font-medium text-cyan-300">
                  {activeMode}
                </p>
                <h2 className="text-3xl font-bold tracking-tight">
                  Build operational confidence.
                </h2>
                <p className="mt-2 max-w-2xl text-slate-400">
                  Original question scenarios and practical simulations organized for
                  CySA+ CS0-003. The platform is structured to add PenTest+ later
                  without mixing objectives or scores.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                  <p className="text-sm text-cyan-100">Overall readiness</p>
                  <p className="mt-2 text-4xl font-bold">{readiness}%</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Based on saved question results
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">Questions completed</p>
                  <p className="mt-2 text-4xl font-bold">
                    {studyStats.questionsAnswered}
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Question bank: {allCysaQuestions.length} questions
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                  <p className="text-sm text-slate-400">PBQ labs available</p>
                  <p className="mt-2 text-4xl font-bold">2 / 12</p>
                  <p className="mt-2 text-sm text-amber-300">
                    SIEM sign-in · Vulnerability prioritization
                  </p>
                </article>
              </div>

              <section className="grid gap-4 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <BookOpen className="text-cyan-300" size={26} />
                  <h3 className="mt-4 text-lg font-semibold">Practice by scenario</h3>
                  <p className="mt-2 text-slate-400">
                    Learn through immediate feedback and explanations. Drill a single
                    domain or mix all four.
                  </p>
                  <button
                    className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
                    onClick={() => startSession('Practice')}
                  >
                    <Play size={18} fill="currentColor" />
                    Start practice
                  </button>
                </article>

                <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <Clock3 className="text-amber-300" size={26} />
                  <h3 className="mt-4 text-lg font-semibold">Timed mock exam</h3>
                  <p className="mt-2 text-slate-400">
                    A full-bank timed build test for the mock-exam workflow.
                  </p>
                  <button
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-amber-300/60 px-5 py-3 font-semibold text-amber-200 transition hover:bg-amber-300 hover:text-slate-950"
                    onClick={() => startSession('Mock Exam')}
                  >
                    <Clock3 size={18} />
                    Start 20-minute mock
                  </button>
                </article>
              </section>

              <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">CS0-003 objective weighting</h3>

                <div className="mt-6 space-y-5">
                  {cysaDomains.map((domain) => {
                    const questionCount = allCysaQuestions.filter(
                      (question) => question.domain === domain.name,
                    ).length

                    return (
                      <div key={domain.name}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="font-medium">{domain.name}</span>
                          <span className="text-slate-400">
                            {domain.weight}% · {questionCount} questions
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className="h-full rounded-full bg-cyan-400"
                            style={{ width: `${domain.weight}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
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
