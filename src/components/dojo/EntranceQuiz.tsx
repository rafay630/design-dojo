'use client'
import { useState } from 'react';
import Link from 'next/link';
import { submitQuiz } from '@/server/dojo/actions';

export default function EntranceQuiz() {
    const [answers, setAnswers] = useState<string[]>(new Array(5).fill(''));
    const [result, setResult] = useState<{ passed: boolean, score: number } | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const questions = [
        { id: 1, text: "What is the first stage of Design Thinking?", options: ['A: Empathize', 'B: Define', 'C: Ideate'] },
        { id: 2, text: "Which stage involves creating low-fidelity models?", options: ['A: Define', 'B: Prototype', 'C: Test'] },
        { id: 3, text: "Testing happens before Ideation.", options: ['A: True', 'B: False'] },
        { id: 4, text: "User personas are created during...", options: ['A: Define', 'B: Test', 'C: Prototype'] },
        { id: 5, text: "Design Thinking is linear.", options: ['A: True', 'B: False'] }
    ];
    // Answer key: A, B, B, A, B

    const handleOptionSelect = (qIndex: number, optionChar: string) => {
        const newAnswers = [...answers];
        newAnswers[qIndex] = optionChar;
        setAnswers(newAnswers);
        setError(null); // Clear error when user interacts
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError(null);

        try {
            const res = await submitQuiz(answers);
            setResult(res);
        } catch (e) {
            console.error("Quiz submission error:", e);
            setError("Failed to submit quiz. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRetry = () => {
        setResult(null);
        setAnswers(new Array(5).fill(''));
        setError(null);
    };

    if (result) {
        return (
            <div className="text-center p-8 border-2 rounded-xl" style={{
                borderColor: result.passed ? 'var(--stage-ideate)' : 'var(--stage-test)',
                backgroundColor: result.passed ? 'color-mix(in srgb, var(--stage-ideate) 10%, transparent)' : 'color-mix(in srgb, var(--stage-test) 10%, transparent)'
            }}>
                <div className="text-5xl mb-4">{result.passed ? "🎉" : "📚"}</div>
                <h2 className="text-2xl font-bold mb-4">{result.passed ? "Congratulations!" : "Keep Learning"}</h2>
                <p className="text-xl mb-4">Your Score: <span className="font-bold">{result.score}%</span></p>
                {result.passed ? (
                    <div>
                        <p className="text-[var(--stage-ideate)] font-bold mb-4">You passed! You're ready to join a cohort.</p>
                        <Link href="/auth/login" className="btn btn-primary">
                            Sign In to Join Cohort
                        </Link>
                    </div>
                ) : (
                    <div>
                        <p className="text-[var(--stage-test)] mb-4">You need 80% to pass. Review the DT Stages and try again!</p>
                        <div className="flex gap-4 justify-center">
                            <Link href="/dt-stages" className="btn btn-secondary">
                                Review DT Stages
                            </Link>
                            <button onClick={handleRetry} className="btn btn-primary">
                                Retry Quiz
                            </button>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="card max-w-xl mx-auto">
            <h2 className="heading-3 mb-6">Dojo Entrance Quiz</h2>
            <p className="text-muted mb-6">Answer 5 questions about Design Thinking. Score 80% or higher to pass.</p>

            {error && (
                <div className="p-4 mb-6 rounded-lg bg-[color-mix(in_srgb,var(--stage-test)_10%,transparent)] border border-[var(--stage-test)] text-[var(--stage-test)]">
                    {error}
                </div>
            )}

            {questions.map((q, idx) => (
                <div key={q.id} className="mb-6 pb-6 border-b border-[var(--border)] last:border-0">
                    <p className="font-semibold mb-3">{idx + 1}. {q.text}</p>
                    <div className="space-y-2">
                        {q.options.map(opt => {
                            const char = opt.charAt(0);
                            const isSelected = answers[idx] === char;
                            return (
                                <label
                                    key={opt}
                                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${isSelected
                                        ? 'bg-[var(--primary-indigo)] text-white'
                                        : 'bg-[var(--background-alt)] hover:bg-[var(--border)]'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name={`q-${q.id}`}
                                        value={char}
                                        checked={isSelected}
                                        onChange={() => handleOptionSelect(idx, char)}
                                        className="sr-only"
                                    />
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${isSelected
                                        ? 'border-white bg-white'
                                        : 'border-[var(--border-strong)]'
                                        }`}>
                                        {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-indigo)]" />}
                                    </div>
                                    <span>{opt}</span>
                                </label>
                            )
                        })}
                    </div>
                </div>
            ))}

            <button
                onClick={handleSubmit}
                disabled={answers.some(a => !a) || isSubmitting}
                className="btn btn-primary w-full btn-lg disabled:opacity-50"
            >
                {isSubmitting ? (
                    <span className="flex items-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Submitting...
                    </span>
                ) : (
                    'Submit Assessment'
                )}
            </button>

            {answers.some(a => !a) && (
                <p className="text-sm text-muted text-center mt-3">
                    Please answer all questions to submit
                </p>
            )}
        </div>
    )
}
