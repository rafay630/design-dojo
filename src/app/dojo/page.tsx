import Link from "next/link";
import EntranceQuiz from "@/components/dojo/EntranceQuiz";

export default function DojoPage() {
    return (
        <div className="py-12">
            {/* Hero Section */}
            <section className="container mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--accent-coral)] rounded-3xl flex items-center justify-center text-5xl shadow-lg">
                        🥋
                    </div>
                    <h1 className="heading-display mb-6">
                        The Mentorship <span className="text-gradient">Dojo</span>
                    </h1>
                    <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
                        A structured peer-to-peer learning environment where beginners learn from specialists
                        and specialists build mentorship experience. Pass the entrance quiz to join a cohort.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="section section-alt">
                <div className="container">
                    <h2 className="heading-1 text-center mb-12">How the Dojo Works</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--stage-empathize)] flex items-center justify-center text-white text-2xl font-bold">
                                1
                            </div>
                            <h3 className="heading-3 mb-3">Take the Entrance Quiz</h3>
                            <p className="text-muted">
                                Complete a short assessment to gauge your Design Thinking knowledge.
                                Score 80% or higher to join a cohort.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--stage-ideate)] flex items-center justify-center text-white text-2xl font-bold">
                                2
                            </div>
                            <h3 className="heading-3 mb-3">Join a Micro-Cohort</h3>
                            <p className="text-muted">
                                Get matched with 4-6 peers at similar skill levels.
                                Each cohort has a specialist mentor guiding the group.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--stage-test)] flex items-center justify-center text-white text-2xl font-bold">
                                3
                            </div>
                            <h3 className="heading-3 mb-3">Learn & Contribute</h3>
                            <p className="text-muted">
                                Work on projects together, give and receive feedback,
                                and document your journey in your portfolio.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Paths Section */}
            <section className="section">
                <div className="container">
                    <h2 className="heading-1 text-center mb-4">Choose Your Path</h2>
                    <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
                        Whether you're just starting out or ready to share your expertise,
                        there's a place for you in the Dojo.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Learner Path */}
                        <div className="card-feature border-[var(--stage-define)]">
                            <div className="icon-box icon-box-indigo mb-4">📚</div>
                            <h3 className="heading-2 mb-4">I Want to Learn</h3>
                            <ul className="space-y-3 text-muted mb-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--stage-define)]">✓</span>
                                    <span>Join structured learning cohorts</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--stage-define)]">✓</span>
                                    <span>Get feedback from experienced mentors</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--stage-define)]">✓</span>
                                    <span>Work on real projects with peers</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--stage-define)]">✓</span>
                                    <span>Build a portfolio recruiters will love</span>
                                </li>
                            </ul>
                            <p className="text-sm text-muted mb-4">
                                <strong>Requirements:</strong> Pass the entrance quiz (80%+)
                            </p>
                            <a href="#quiz" className="btn btn-primary w-full">
                                Take the Quiz →
                            </a>
                        </div>

                        {/* Mentor Path */}
                        <div className="card-feature border-[var(--accent-coral)]">
                            <div className="icon-box icon-box-coral mb-4">🎯</div>
                            <h3 className="heading-2 mb-4">I Want to Mentor</h3>
                            <ul className="space-y-3 text-muted mb-6">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent-coral)]">✓</span>
                                    <span>Lead a micro-cohort of 4-6 learners</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent-coral)]">✓</span>
                                    <span>Build leadership and teaching skills</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent-coral)]">✓</span>
                                    <span>Get recognized as a Design Thinking specialist</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent-coral)]">✓</span>
                                    <span>Add mentorship to your portfolio</span>
                                </li>
                            </ul>
                            <p className="text-sm text-muted mb-4">
                                <strong>Requirements:</strong> Completed 3+ projects on Design Dojo
                            </p>
                            <Link href="/api/auth/signin" className="btn btn-coral w-full">
                                Apply as Mentor →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Cohorts Preview */}
            <section className="section section-alt">
                <div className="container">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="heading-1">Active Cohorts</h2>
                        <span className="text-muted">3 cohorts currently learning</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--stage-empathize)] flex items-center justify-center text-white font-bold">
                                    A
                                </div>
                                <div>
                                    <h3 className="font-semibold">Cohort Alpha</h3>
                                    <span className="text-sm text-muted">5 learners • 1 mentor</span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="stage-badge stage-empathize text-xs">Empathize Phase</span>
                            </div>
                            <p className="text-sm text-muted">Currently working on user interview techniques and empathy mapping.</p>
                        </div>

                        <div className="card">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--stage-ideate)] flex items-center justify-center text-white font-bold">
                                    B
                                </div>
                                <div>
                                    <h3 className="font-semibold">Cohort Beta</h3>
                                    <span className="text-sm text-muted">4 learners • 1 mentor</span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="stage-badge stage-ideate text-xs">Ideate Phase</span>
                            </div>
                            <p className="text-sm text-muted">Brainstorming solutions for a campus sustainability challenge.</p>
                        </div>

                        <div className="card">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--stage-prototype)] flex items-center justify-center text-white font-bold">
                                    G
                                </div>
                                <div>
                                    <h3 className="font-semibold">Cohort Gamma</h3>
                                    <span className="text-sm text-muted">6 learners • 1 mentor</span>
                                </div>
                            </div>
                            <div className="mb-3">
                                <span className="stage-badge stage-prototype text-xs">Prototype Phase</span>
                            </div>
                            <p className="text-sm text-muted">Building low-fidelity prototypes for a food delivery app concept.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Entrance Quiz Section */}
            <section className="section" id="quiz">
                <div className="container max-w-2xl">
                    <div className="text-center mb-8">
                        <h2 className="heading-1 mb-4">Entrance Quiz</h2>
                        <p className="text-muted text-lg">
                            Answer 5 questions about Design Thinking fundamentals.
                            Score 80% or higher to join a cohort.
                        </p>
                    </div>

                    <EntranceQuiz />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section section-alt">
                <div className="container max-w-3xl">
                    <h2 className="heading-1 text-center mb-12">Frequently Asked Questions</h2>

                    <div className="space-y-6">
                        <div className="card">
                            <h3 className="heading-3 mb-2">What happens after I pass the quiz?</h3>
                            <p className="text-muted">
                                You'll be added to our matching queue and placed in a cohort within 48 hours.
                                You'll receive an email with your cohort details and meeting schedule.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="heading-3 mb-2">How long does each cohort run?</h3>
                            <p className="text-muted">
                                Cohorts run for 4 weeks, meeting once per week for about 1 hour.
                                This gives you time to apply learnings between sessions.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="heading-3 mb-2">Is there a cost?</h3>
                            <p className="text-muted">
                                Design Dojo is completely free for learners. We believe in democratizing
                                design education and peer-led learning.
                            </p>
                        </div>

                        <div className="card">
                            <h3 className="heading-3 mb-2">Can I take the quiz again if I fail?</h3>
                            <p className="text-muted">
                                Yes! Review the DT Stages modules to strengthen your knowledge,
                                then retake the quiz after 24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
