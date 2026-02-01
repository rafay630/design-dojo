import Link from "next/link";

const team = [
    { name: "Design Dojo Team", role: "Built for Students, By Students", emoji: "🥋" }
];

const timeline = [
    { year: "Empathize", description: "Conducted 1-on-1 interviews with students to map frustrations with portfolio tools and online courses." },
    { year: "Define", description: "Synthesized research into user personas and a finalized 'How Might We' statement." },
    { year: "Ideate", description: "Brainstormed features for the 'Dojo' quiz and the 'Founder Case Study' database." },
    { year: "Prototype", description: "Created low-fidelity wireframes of the homepage and student dashboard." },
    { year: "Test", description: "Shared wireframes with 5 peers to test if the 'class sprint' and 'Quiz' logic were clear and motivating." },
];

export default function AboutPage() {
    return (
        <div className="py-12">
            {/* Hero Section */}
            <section className="container mb-16">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="stage-badge stage-define mb-4 inline-block">Our Mission</span>
                    <h1 className="heading-display mb-6">
                        Democratizing <span className="text-gradient">Design Education</span>
                    </h1>
                    <p className="text-xl text-muted leading-relaxed">
                        Design Dojo is a peer-to-peer ecosystem that bridges the gap between learning
                        Design Thinking theory and applying it in the real world.
                    </p>
                </div>
            </section>

            {/* Problem Statement */}
            <section className="section section-alt">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="heading-1 mb-8 text-center">The Problem We're Solving</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="card">
                                <div className="text-3xl mb-4">📚</div>
                                <h3 className="heading-3 mb-3">Theory-Heavy Curriculum</h3>
                                <p className="text-muted">
                                    Students learning Design Thinking often face curriculum that feels disconnected
                                    from the real world. Many struggle to see how abstract concepts like "Empathy"
                                    translate into the success of global companies.
                                </p>
                            </div>

                            <div className="card">
                                <div className="text-3xl mb-4">🔗</div>
                                <h3 className="heading-3 mb-3">The Mentorship Gap</h3>
                                <p className="text-muted">
                                    Specialized students have no formal way to share their skills (like React or Figma),
                                    while beginners are overwhelmed by generic, non-interactive online resources.
                                </p>
                            </div>
                        </div>

                        <div className="card border-2 border-[var(--primary-indigo)] max-w-3xl mx-auto">
                            <h3 className="heading-3 mb-4 text-center">Our Problem Statement</h3>
                            <p className="text-lg text-center italic">
                                "Students lack a centralized, collaborative platform that bridges the gap between
                                learning Design Thinking theory, showcasing their messy 'work-in-progress' journeys,
                                and accessing high-quality, peer-led technical mentorship."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Users */}
            <section className="section">
                <div className="container">
                    <h2 className="heading-1 text-center mb-12">Who We Serve</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="card text-center">
                            <div className="text-4xl mb-4">🎓</div>
                            <h3 className="heading-3 mb-2">Beginners</h3>
                            <p className="text-muted">
                                University students looking for guidance and structured learning paths
                                in Design Thinking.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="text-4xl mb-4">⭐</div>
                            <h3 className="heading-3 mb-2">Specialists</h3>
                            <p className="text-muted">
                                Experienced students who want to build leadership and mentorship experience
                                by guiding others.
                            </p>
                        </div>

                        <div className="card text-center">
                            <div className="text-4xl mb-4">💼</div>
                            <h3 className="heading-3 mb-2">Recruiters & Educators</h3>
                            <p className="text-muted">
                                Professionals who need to see candidates' design process, not just final products,
                                and educators tracking collaboration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Objectives */}
            <section className="section section-alt">
                <div className="container max-w-4xl">
                    <h2 className="heading-1 text-center mb-12">What We're Building</h2>

                    <div className="space-y-6">
                        <div className="card-feature">
                            <div className="flex items-start gap-4">
                                <div className="icon-box icon-box-indigo flex-shrink-0">📚</div>
                                <div>
                                    <h3 className="heading-3 mb-2">Interactive DT Modules</h3>
                                    <p className="text-muted">
                                        Comprehensive modules for all 5 Design Thinking stages, each with founder
                                        case studies showing real-world application.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-feature">
                            <div className="flex items-start gap-4">
                                <div className="icon-box icon-box-coral flex-shrink-0">💼</div>
                                <div>
                                    <h3 className="heading-3 mb-2">Portfolio Hosting System</h3>
                                    <p className="text-muted">
                                        A GitHub-style portfolio for designers with public/private visibility toggles,
                                        designed to showcase the "messy middle" of design work.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card-feature">
                            <div className="flex items-start gap-4">
                                <div className="icon-box icon-box-teal flex-shrink-0">🥋</div>
                                <div>
                                    <h3 className="heading-3 mb-2">Mentorship Dojo</h3>
                                    <p className="text-muted">
                                        A structured mentorship module including an entrance quiz for skill assessment
                                        and micro-cohort management for peer-led learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our DT Journey */}
            <section className="section">
                <div className="container max-w-4xl">
                    <h2 className="heading-1 text-center mb-4">Our Design Thinking Journey</h2>
                    <p className="text-center text-muted text-lg mb-12">
                        We built Design Dojo using the same methodology we teach
                    </p>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--border)] hidden md:block" />

                        <div className="space-y-8">
                            {timeline.map((item, index) => {
                                const colors = [
                                    "var(--stage-empathize)",
                                    "var(--stage-define)",
                                    "var(--stage-ideate)",
                                    "var(--stage-prototype)",
                                    "var(--stage-test)"
                                ];
                                const color = colors[index];

                                return (
                                    <div key={item.year} className="flex gap-6 items-start">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 relative z-10"
                                            style={{ backgroundColor: color }}
                                        >
                                            {index + 1}
                                        </div>
                                        <div className="card flex-1">
                                            <h3 className="heading-3 mb-2" style={{ color }}>{item.year}</h3>
                                            <p className="text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* SDG Alignment */}
            <section className="section section-alt" id="sdg">
                <div className="container">
                    <h2 className="heading-1 text-center mb-4">SDG Alignment</h2>
                    <p className="text-center text-muted text-lg mb-12 max-w-2xl mx-auto">
                        Design Dojo is committed to the United Nations Sustainable Development Goals
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="card border-2 border-[var(--stage-define)]">
                            <div className="flex items-start gap-4">
                                <div className="text-5xl">🎯</div>
                                <div>
                                    <h3 className="heading-2 mb-2">SDG 4</h3>
                                    <p className="text-lg font-medium mb-2">Quality Education</p>
                                    <p className="text-muted">
                                        By providing accessible, peer-led learning opportunities, we're making
                                        quality design education available to students regardless of their
                                        institution's resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card border-2 border-[var(--stage-ideate)]">
                            <div className="flex items-start gap-4">
                                <div className="text-5xl">💼</div>
                                <div>
                                    <h3 className="heading-2 mb-2">SDG 8</h3>
                                    <p className="text-lg font-medium mb-2">Decent Work & Economic Growth</p>
                                    <p className="text-muted">
                                        By helping students build professional portfolios that showcase their
                                        design process, we're preparing them for the job market and fostering
                                        economic opportunity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expected Outcomes */}
            <section className="section">
                <div className="container max-w-3xl">
                    <h2 className="heading-1 text-center mb-12">Expected Outcomes</h2>

                    <div className="card text-center">
                        <p className="text-lg leading-relaxed">
                            The final output of this project will be a <strong>High-Fidelity Prototype (MVP)</strong> of
                            the platform. It will demonstrate the user flow from a learner taking a quiz to a
                            specialist managing a project group, alongside a curated library of design thinking
                            success stories.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--primary-indigo-dark)] text-white">
                <div className="container text-center">
                    <h2 className="heading-1 mb-4">Join the Movement</h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        Whether you're here to learn, teach, or build—there's a place for you in the Dojo.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/dojo" className="btn btn-lg bg-white text-[var(--primary-indigo)] hover:bg-gray-100">
                            Enter the Dojo
                        </Link>
                        <Link href="/dt-stages" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
                            Explore DT Stages
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
