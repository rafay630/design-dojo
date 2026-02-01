"use client";

import { useState } from "react";
import Link from "next/link";

const caseStudies = [
    {
        id: 1,
        company: "Airbnb",
        industry: "Hospitality",
        logo: "🏠",
        year: "2009",
        stage: "Empathize",
        stageColor: "var(--stage-empathize)",
        challenge: "Hosts were getting very few bookings despite competitive prices.",
        story: "When Airbnb was on the verge of failure, founders Brian Chesky and Joe Gebbia flew to New York to meet hosts personally. They stayed in listings, took photos, and talked to hosts about their challenges. They discovered that amateur photos were killing conversions. By offering free professional photography, bookings doubled and eventually tripled.",
        keyInsight: "The best insights come from immersing yourself in your users' world, not from surveys.",
        outcome: "Revenue doubled in one month. This empathy-driven approach became core to Airbnb's culture.",
        dtApproach: ["User Interviews", "Field Observation", "Empathy Mapping"],
    },
    {
        id: 2,
        company: "IDEO",
        industry: "Design Consultancy",
        logo: "🛒",
        year: "1999",
        stage: "Define",
        stageColor: "var(--stage-define)",
        challenge: "Redesign the shopping cart for a TV special in just 5 days.",
        story: "IDEO's famous shopping cart project started with observation, not ideation. Teams went to supermarkets to watch shoppers struggle with child safety, cart theft, and checkout bottlenecks. Instead of asking 'How do we make a better cart?', they reframed: 'How might we make shopping feel safer and more efficient?'",
        keyInsight: "A well-defined problem is half-solved. Take time to reframe before ideating.",
        outcome: "A modular cart design with removable baskets, child safety features, and anti-theft measures.",
        dtApproach: ["Problem Reframing", "HMW Questions", "Insight Synthesis"],
    },
    {
        id: 3,
        company: "Apple",
        industry: "Technology",
        logo: "📱",
        year: "2007",
        stage: "Ideate",
        stageColor: "var(--stage-ideate)",
        challenge: "Create a revolutionary phone in a market dominated by BlackBerry and Nokia.",
        story: "Apple's design team explored over 100 different concepts before settling on the iPhone design. They experimented with physical keyboards, styluses, and various screen sizes. The breakthrough came when they asked: 'What if the entire front was just a screen?' This wasn't their first idea—it emerged from relentless ideation.",
        keyInsight: "Your first idea is rarely your best idea. Go wide before going deep.",
        outcome: "The iPhone revolutionized the mobile industry and created a new product category.",
        dtApproach: ["Brainstorming", "Rapid Sketching", "Concept Exploration"],
    },
    {
        id: 4,
        company: "Spotify",
        industry: "Music Streaming",
        logo: "🎵",
        year: "2015",
        stage: "Prototype",
        stageColor: "var(--stage-prototype)",
        challenge: "Help users discover new music they would love but would never find on their own.",
        story: "Discover Weekly started as a hack week project called 'Morning Routine Playlist.' Instead of months of development, a small team built a rough prototype using existing recommendation algorithms. They tested it with a small group of employees, gathered feedback, iterated quickly, and only then began the full development.",
        keyInsight: "A rough prototype is worth a thousand meetings. Build to think, not to ship.",
        outcome: "Discover Weekly became one of Spotify's most loved features with 40M users in the first year.",
        dtApproach: ["Paper Prototyping", "MVP Testing", "Rapid Iteration"],
    },
    {
        id: 5,
        company: "Dropbox",
        industry: "Cloud Storage",
        logo: "📦",
        year: "2007",
        stage: "Test",
        stageColor: "var(--stage-test)",
        challenge: "Validate demand for a file-syncing product before building the complex backend.",
        story: "Drew Houston couldn't explain Dropbox's value proposition in words—the technology was too novel. Instead of building first, he created a simple 3-minute demo video showing how file sync would work. He posted it on Hacker News and woke up to 75,000 email signups.",
        keyInsight: "Validate demand before building. A video can be a prototype.",
        outcome: "The waitlist proved market demand, helping Dropbox raise $1.2M in seed funding.",
        dtApproach: ["Concept Testing", "Fake Door Testing", "Demand Validation"],
    },
    {
        id: 6,
        company: "Netflix",
        industry: "Entertainment",
        logo: "🎬",
        year: "2007",
        stage: "Test",
        stageColor: "var(--stage-test)",
        challenge: "Transition from DVD rentals to streaming without losing customers.",
        story: "Netflix didn't abandon DVDs overnight. They ran extensive A/B tests with small user groups, offering streaming as an add-on feature. They tested different pricing models, UI layouts, and content libraries. User feedback revealed that people valued convenience over catalog size.",
        keyInsight: "Major pivots require small, testable steps. Let user behavior guide your strategy.",
        outcome: "Streaming now accounts for 99% of Netflix's revenue with 230M+ subscribers.",
        dtApproach: ["A/B Testing", "User Behavior Analysis", "Incremental Rollout"],
    },
    {
        id: 7,
        company: "Slack",
        industry: "Enterprise Software",
        logo: "💬",
        year: "2013",
        stage: "Empathize",
        stageColor: "var(--stage-empathize)",
        challenge: "Build a tool people would actually want to use (unlike most enterprise software).",
        story: "Slack was born from Tiny Speck's internal communication needs while building a game called Glitch. Stewart Butterfield noticed his team loved their internal chat tool more than the game itself. By deeply understanding their own pain points with email overload, they built a product that felt like it was designed by and for users.",
        keyInsight: "Sometimes your best insights come from being your own user.",
        outcome: "Slack reached $1B valuation faster than any other SaaS company at the time.",
        dtApproach: ["Internal Dogfooding", "Pain Point Analysis", "Iterative Development"],
    },
    {
        id: 8,
        company: "Tesla",
        industry: "Automotive",
        logo: "⚡",
        year: "2012",
        stage: "Prototype",
        stageColor: "var(--stage-prototype)",
        challenge: "Prove that electric cars could be desirable, not just practical.",
        story: "Before the Model S, Tesla built the Roadster—a limited prototype that proved EVs could be sexy and powerful. It wasn't profitable, but it served its purpose: changing perceptions and proving the technology worked. Elon Musk called it 'the catalyst' for everything that followed.",
        keyInsight: "A prototype's job is to prove a concept, not to be profitable.",
        outcome: "The Roadster proved market demand, paving the way for Model S, 3, X, and Y.",
        dtApproach: ["Concept Prototype", "Perception Testing", "Technology Validation"],
    },
];

const industries = ["All", "Technology", "Hospitality", "Design Consultancy", "Music Streaming", "Cloud Storage", "Entertainment", "Enterprise Software", "Automotive"];
const stages = ["All", "Empathize", "Define", "Ideate", "Prototype", "Test"];

export default function CaseStudiesPage() {
    const [selectedIndustry, setSelectedIndustry] = useState("All");
    const [selectedStage, setSelectedStage] = useState("All");
    const [expandedCase, setExpandedCase] = useState<number | null>(null);

    const filteredStudies = caseStudies.filter((study) => {
        const industryMatch = selectedIndustry === "All" || study.industry === selectedIndustry;
        const stageMatch = selectedStage === "All" || study.stage === selectedStage;
        return industryMatch && stageMatch;
    });

    return (
        <div className="py-12">
            {/* Header */}
            <section className="container mb-12">
                <div className="max-w-3xl">
                    <span className="stage-badge stage-ideate mb-4 inline-block">Learn from the Best</span>
                    <h1 className="heading-1 mb-4">Founder Case Studies</h1>
                    <p className="text-lg text-muted">
                        Curated stories of how world-class companies used Design Thinking to solve real problems.
                        Filter by industry or DT stage to find the most relevant examples for your learning.
                    </p>
                </div>
            </section>

            {/* Filters */}
            <section className="container mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Industry Filter */}
                    <div className="flex-1">
                        <label className="text-sm font-semibold mb-2 block">Filter by Industry</label>
                        <div className="flex flex-wrap gap-2">
                            {industries.map((industry) => (
                                <button
                                    key={industry}
                                    onClick={() => setSelectedIndustry(industry)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selectedIndustry === industry
                                            ? "bg-[var(--foreground)] text-white"
                                            : "bg-[var(--background-alt)] hover:bg-[var(--border)]"
                                        }`}
                                >
                                    {industry}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stage Filter */}
                    <div className="flex-1">
                        <label className="text-sm font-semibold mb-2 block">Filter by DT Stage</label>
                        <div className="flex flex-wrap gap-2">
                            {stages.map((stage) => (
                                <button
                                    key={stage}
                                    onClick={() => setSelectedStage(stage)}
                                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selectedStage === stage
                                            ? "bg-[var(--foreground)] text-white"
                                            : "bg-[var(--background-alt)] hover:bg-[var(--border)]"
                                        }`}
                                >
                                    {stage}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Count */}
            <section className="container mb-6">
                <p className="text-muted">
                    Showing {filteredStudies.length} case {filteredStudies.length === 1 ? "study" : "studies"}
                </p>
            </section>

            {/* Case Studies Grid */}
            <section className="container">
                <div className="space-y-6">
                    {filteredStudies.map((study) => (
                        <div
                            key={study.id}
                            className="card cursor-pointer"
                            onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                        >
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                                <div className="flex items-center gap-4 flex-1">
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                                        style={{ backgroundColor: `color-mix(in srgb, ${study.stageColor} 20%, transparent)` }}
                                    >
                                        {study.logo}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h2 className="heading-3">{study.company}</h2>
                                            <span className="text-sm text-muted">({study.year})</span>
                                        </div>
                                        <span className="text-sm text-muted">{study.industry}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span
                                        className="px-3 py-1 rounded-full text-sm font-semibold"
                                        style={{
                                            backgroundColor: `color-mix(in srgb, ${study.stageColor} 20%, transparent)`,
                                            color: study.stageColor
                                        }}
                                    >
                                        {study.stage}
                                    </span>
                                    <span className="text-2xl transition-transform" style={{ transform: expandedCase === study.id ? "rotate(180deg)" : "rotate(0)" }}>
                                        ▼
                                    </span>
                                </div>
                            </div>

                            {/* Challenge Preview */}
                            <p className="font-medium mb-2">
                                <span className="text-muted">Challenge:</span> {study.challenge}
                            </p>

                            {/* Expanded Content */}
                            {expandedCase === study.id && (
                                <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-6">
                                    {/* Full Story */}
                                    <div>
                                        <h3 className="font-semibold mb-2">The Story</h3>
                                        <p className="text-muted leading-relaxed">{study.story}</p>
                                    </div>

                                    {/* Key Insight */}
                                    <div
                                        className="p-4 rounded-lg"
                                        style={{ backgroundColor: `color-mix(in srgb, ${study.stageColor} 10%, transparent)` }}
                                    >
                                        <h3 className="font-semibold mb-2" style={{ color: study.stageColor }}>
                                            💡 Key Insight
                                        </h3>
                                        <p>{study.keyInsight}</p>
                                    </div>

                                    {/* Outcome */}
                                    <div>
                                        <h3 className="font-semibold mb-2">Outcome</h3>
                                        <p className="text-muted">{study.outcome}</p>
                                    </div>

                                    {/* DT Approach */}
                                    <div>
                                        <h3 className="font-semibold mb-3">Design Thinking Methods Used</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {study.dtApproach.map((method) => (
                                                <span
                                                    key={method}
                                                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--background-alt)]"
                                                >
                                                    {method}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex gap-4 pt-2">
                                        <Link
                                            href={`/dt-stages#${study.stage.toLowerCase()}`}
                                            className="btn btn-secondary text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Learn about {study.stage} →
                                        </Link>
                                        <Link
                                            href="/portfolio"
                                            className="btn btn-primary text-sm"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Apply This to Your Project
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {filteredStudies.length === 0 && (
                    <div className="text-center py-16 border-2 border-dashed rounded-xl">
                        <p className="text-muted mb-2">No case studies match your filters.</p>
                        <button
                            onClick={() => { setSelectedIndustry("All"); setSelectedStage("All"); }}
                            className="text-[var(--primary-indigo)] hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </section>

            {/* CTA Section */}
            <section className="section mt-12">
                <div className="container">
                    <div className="card text-center max-w-2xl mx-auto">
                        <h2 className="heading-2 mb-4">Have a Case Study to Share?</h2>
                        <p className="text-muted mb-6">
                            If you've documented your Design Thinking journey toward a successful project,
                            consider submitting it to our library.
                        </p>
                        <Link href="/portfolio" className="btn btn-primary">
                            Start Documenting Your Journey →
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
