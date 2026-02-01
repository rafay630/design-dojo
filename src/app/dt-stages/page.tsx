"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Target, Lightbulb, Hammer, CheckCircle, BookOpen, PenTool, ArrowLeft, ArrowRight, Check, LightbulbIcon } from "lucide-react";

const stages = [
    {
        id: "empathize",
        name: "Empathize",
        number: 1,
        Icon: Users,
        color: "var(--stage-empathize)",
        tagline: "Understand Your Users",
        description: "The foundation of human-centered design. Empathize involves observing, engaging, and immersing yourself in your users' experiences to truly understand their needs, pain points, and motivations.",
        keyActivities: [
            "Conduct user interviews",
            "Create observation notes",
            "Build empathy maps",
            "Shadow users in their environment"
        ],
        tools: ["Empathy Maps", "User Interviews", "Journey Mapping", "Observation Notes"],
        caseStudy: {
            company: "Airbnb",
            story: "When Airbnb was struggling in 2009, the founders flew to New York to meet hosts in person. By staying with them and understanding their challenges firsthand, they discovered that poor photos were killing conversions. This empathy-driven insight led them to offer free professional photography—a pivot that helped save the company.",
            lesson: "Don't just survey users—live their experience."
        },
        interactivePrompt: "Who is your user? What frustrations do they face daily?",
    },
    {
        id: "define",
        name: "Define",
        number: 2,
        Icon: Target,
        color: "var(--stage-define)",
        tagline: "Frame the Right Problem",
        description: "Synthesize your research into a clear, actionable problem statement. The Define stage turns observations into insights and creates a 'How Might We' statement that focuses the team's creative efforts.",
        keyActivities: [
            "Synthesize research findings",
            "Create user personas",
            "Develop 'How Might We' statements",
            "Identify key insights"
        ],
        tools: ["User Personas", "POV Statements", "HMW Questions", "Insight Clustering"],
        caseStudy: {
            company: "IDEO",
            story: "When redesigning the shopping cart for ABC News, IDEO didn't start with 'design a better cart.' They observed shoppers struggling with child safety, theft concerns, and checkout bottlenecks. They redefined the problem as 'How might we create a shopping experience that feels safe, efficient, and adaptable?'",
            lesson: "The quality of your solution depends on the quality of your problem definition."
        },
        interactivePrompt: "How might we help [user] achieve [goal] despite [obstacle]?",
    },
    {
        id: "ideate",
        name: "Ideate",
        number: 3,
        Icon: Lightbulb,
        color: "var(--stage-ideate)",
        tagline: "Generate Bold Ideas",
        description: "Explore a wide range of possible solutions. Ideation is about going wide before going deep—generating many ideas without judgment, then selecting the most promising ones to prototype.",
        keyActivities: [
            "Brainstorming sessions",
            "Sketching and storyboarding",
            "Crazy 8s exercises",
            "Idea voting and prioritization"
        ],
        tools: ["Brainstorming", "Mind Maps", "SCAMPER", "Dot Voting"],
        caseStudy: {
            company: "Apple",
            story: "Before the iPhone launch in 2007, Apple's design team explored over 100 prototype concepts. They generated ideas for physical keyboards, styluses, and multiple screen sizes. The breakthrough came from asking 'What if the entire front was just a screen?' This wasn't the first idea—it emerged from relentless ideation.",
            lesson: "Your first idea is rarely your best idea."
        },
        interactivePrompt: "What are 5 radically different ways to solve this problem?",
    },
    {
        id: "prototype",
        name: "Prototype",
        number: 4,
        Icon: Hammer,
        color: "var(--stage-prototype)",
        tagline: "Build to Think",
        description: "Create low-fidelity representations of your ideas. Prototypes aren't about perfection—they're about learning. Build quick, cheap models that let you test assumptions before investing in full development.",
        keyActivities: [
            "Paper prototyping",
            "Wireframing",
            "Creating mockups",
            "Building MVPs"
        ],
        tools: ["Paper Prototypes", "Wireframes", "Figma/Sketch", "Storyboards"],
        caseStudy: {
            company: "Spotify",
            story: "Spotify's Discover Weekly feature started as a rough prototype called 'Morning Routine Playlist' built by a small team during a hack week. Instead of investing months in development, they created a basic version, tested it with a small group, and iterated based on feedback before the global launch.",
            lesson: "A rough prototype is worth a thousand meetings."
        },
        interactivePrompt: "What's the simplest version you can build to test your core assumption?",
    },
    {
        id: "test",
        name: "Test",
        number: 5,
        Icon: CheckCircle,
        color: "var(--stage-test)",
        tagline: "Learn and Iterate",
        description: "Put your prototypes in front of real users. Testing isn't about proving you're right—it's about discovering what works, what doesn't, and what you might have missed. Be prepared to loop back to any previous stage.",
        keyActivities: [
            "User testing sessions",
            "Gathering feedback",
            "A/B testing",
            "Iterating on designs"
        ],
        tools: ["Usability Testing", "A/B Tests", "Feedback Forms", "Analytics"],
        caseStudy: {
            company: "Dropbox",
            story: "Before building their product, Dropbox created a simple 3-minute video showing how file sync would work. They posted it on Hacker News and gathered 75,000 email signups overnight. This 'test' validated demand before a single line of backend code was written.",
            lesson: "Validate demand before building."
        },
        interactivePrompt: "What are the 3 critical assumptions you need to validate?",
    },
];

export default function DTStagesPage() {
    const [activeStage, setActiveStage] = useState(stages[0]);
    const [userInput, setUserInput] = useState("");

    return (
        <div className="py-12">
            {/* Header */}
            <section className="container mb-12">
                <div className="max-w-3xl">
                    <span className="stage-badge stage-define mb-4 inline-block">Interactive Learning</span>
                    <h1 className="heading-1 mb-4">The 5 Stages of Design Thinking</h1>
                    <p className="text-lg text-muted">
                        Design Thinking is a human-centered approach to innovation. Explore each stage
                        with real founder case studies and interactive exercises to deepen your understanding.
                    </p>
                </div>
            </section>

            {/* Stage Navigator */}
            <section className="container mb-12">
                <div className="flex flex-wrap gap-3">
                    {stages.map((stage) => {
                        const StageIcon = stage.Icon;
                        return (
                            <button
                                key={stage.id}
                                onClick={() => setActiveStage(stage)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all ${activeStage.id === stage.id
                                    ? "text-white shadow-lg"
                                    : "bg-white border-2 hover:border-black"
                                    }`}
                                style={{
                                    backgroundColor: activeStage.id === stage.id ? stage.color : undefined,
                                    borderColor: activeStage.id === stage.id ? stage.color : undefined,
                                }}
                            >
                                <StageIcon className="w-4 h-4" />
                                <span>{stage.name}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Active Stage Content */}
            <section className="container" id={activeStage.id}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Stage Header */}
                        <div
                            className="p-8 rounded-2xl border-2"
                            style={{ borderColor: activeStage.color }}
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `color-mix(in srgb, ${activeStage.color} 20%, transparent)` }}
                                >
                                    <activeStage.Icon className="w-8 h-8" style={{ color: activeStage.color }} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-muted mb-1">STAGE {activeStage.number}</div>
                                    <h2 className="heading-2" style={{ color: activeStage.color }}>
                                        {activeStage.name}: {activeStage.tagline}
                                    </h2>
                                </div>
                            </div>
                            <p className="text-lg text-muted leading-relaxed">
                                {activeStage.description}
                            </p>
                        </div>

                        {/* Key Activities */}
                        <div className="card">
                            <h3 className="heading-3 mb-4">Key Activities</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {activeStage.keyActivities.map((activity) => (
                                    <div key={activity} className="flex items-center gap-3 p-3 bg-[var(--background-alt)] rounded-lg">
                                        <span style={{ color: activeStage.color }}>✓</span>
                                        <span>{activity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Case Study */}
                        <div className="card border-2 border-dashed border-[var(--border-strong)]">
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen className="w-6 h-6 text-[var(--primary-indigo)]" />
                                <h3 className="heading-3">Case Study: {activeStage.caseStudy.company}</h3>
                            </div>
                            <p className="text-muted mb-4 leading-relaxed">
                                {activeStage.caseStudy.story}
                            </p>
                            <div
                                className="p-4 rounded-lg"
                                style={{ backgroundColor: `color-mix(in srgb, ${activeStage.color} 10%, transparent)` }}
                            >
                                <span className="font-semibold" style={{ color: activeStage.color }}>Key Lesson: </span>
                                <span>{activeStage.caseStudy.lesson}</span>
                            </div>
                        </div>

                        {/* Interactive Exercise */}
                        <div className="card border-2" style={{ borderColor: activeStage.color }}>
                            <div className="flex items-center gap-2 mb-4">
                                <PenTool className="w-6 h-6" style={{ color: activeStage.color }} />
                                <h3 className="heading-3">Try It Yourself</h3>
                            </div>
                            <p className="text-muted mb-4">{activeStage.interactivePrompt}</p>
                            <textarea
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Write your thoughts here..."
                                className="input min-h-[120px] resize-none"
                            />
                            <p className="text-sm text-muted mt-2 flex items-center gap-2">
                                <LightbulbIcon className="w-4 h-4 text-[var(--accent-yellow)]" />
                                Tip: Save your responses in your portfolio to track your design thinking journey.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Tools Card */}
                        <div className="card">
                            <h3 className="heading-3 mb-4">Tools & Methods</h3>
                            <div className="space-y-2">
                                {activeStage.tools.map((tool) => (
                                    <div
                                        key={tool}
                                        className="px-3 py-2 rounded-lg text-sm font-medium"
                                        style={{
                                            backgroundColor: `color-mix(in srgb, ${activeStage.color} 15%, transparent)`,
                                            color: activeStage.color
                                        }}
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Indicator */}
                        <div className="card">
                            <h3 className="heading-3 mb-4">Your Progress</h3>
                            <div className="space-y-3">
                                {stages.map((stage) => (
                                    <div key={stage.id} className="flex items-center gap-3">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${stage.number <= activeStage.number
                                                ? "text-white"
                                                : "bg-[var(--border)] text-muted"
                                                }`}
                                            style={{
                                                backgroundColor: stage.number <= activeStage.number ? stage.color : undefined
                                            }}
                                        >
                                            {stage.number}
                                        </div>
                                        <span className={stage.id === activeStage.id ? "font-semibold" : "text-muted"}>
                                            {stage.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <div className="progress-bar">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${(activeStage.number / stages.length) * 100}%` }}
                                    />
                                </div>
                                <p className="text-sm text-muted mt-2">
                                    {activeStage.number} of {stages.length} stages explored
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="card text-center" style={{ borderColor: activeStage.color }}>
                            <h3 className="heading-3 mb-2">Apply What You've Learned</h3>
                            <p className="text-sm text-muted mb-4">
                                Document your {activeStage.name.toLowerCase()} process in your portfolio.
                            </p>
                            <Link href="/portfolio" className="btn btn-primary w-full">
                                Open Portfolio →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="container mt-12">
                <div className="flex justify-between items-center">
                    <button
                        onClick={() => {
                            const prevIndex = stages.findIndex(s => s.id === activeStage.id) - 1;
                            if (prevIndex >= 0) setActiveStage(stages[prevIndex]);
                        }}
                        disabled={activeStage.number === 1}
                        className="btn btn-secondary disabled:opacity-50"
                    >
                        ← Previous Stage
                    </button>
                    <button
                        onClick={() => {
                            const nextIndex = stages.findIndex(s => s.id === activeStage.id) + 1;
                            if (nextIndex < stages.length) setActiveStage(stages[nextIndex]);
                        }}
                        disabled={activeStage.number === stages.length}
                        className="btn btn-primary disabled:opacity-50"
                    >
                        Next Stage →
                    </button>
                </div>
            </section>
        </div>
    );
}
