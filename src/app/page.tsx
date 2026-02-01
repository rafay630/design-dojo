import Link from "next/link";
import { Users, Target, Lightbulb, Hammer, CheckCircle, BookOpen, FolderGit2, GraduationCap, Briefcase, Award } from "lucide-react";

const dtStages = [
  { name: "Empathize", Icon: Users, color: "var(--stage-empathize)", description: "Understand users through observation and interviews" },
  { name: "Define", Icon: Target, color: "var(--stage-define)", description: "Synthesize insights into a clear problem statement" },
  { name: "Ideate", Icon: Lightbulb, color: "var(--stage-ideate)", description: "Brainstorm creative solutions without judgment" },
  { name: "Prototype", Icon: Hammer, color: "var(--stage-prototype)", description: "Build low-fidelity representations of ideas" },
  { name: "Test", Icon: CheckCircle, color: "var(--stage-test)", description: "Gather feedback and iterate on solutions" },
];

const caseStudies = [
  { company: "Airbnb", industry: "Hospitality", lesson: "Used empathy mapping to redesign their entire booking experience" },
  { company: "Apple", industry: "Technology", lesson: "Prototyped 100+ iPhone designs before the final revolutionary product" },
  { company: "IDEO", industry: "Design Consultancy", lesson: "Created the first shopping cart redesign using rapid prototyping" },
];

const stats = [
  { value: "5", label: "DT Stages" },
  { value: "50+", label: "Case Studies" },
  { value: "1,000+", label: "Student Projects" },
  { value: "100%", label: "Free to Start" },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[var(--border)] bg-white text-sm font-medium">
              <GraduationCap className="w-4 h-4 text-[var(--primary-indigo)]" />
              <span>Peer-to-Peer Design Thinking Ecosystem</span>
            </div>

            <h1 className="heading-display">
              Master the{" "}
              <span className="text-gradient">Messy</span>{" "}
              Process of Design
            </h1>

            <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
              The Design Dojo bridges the gap between Design Thinking theory and practice.
              Document your work-in-progress journey, learn from real founder stories,
              and join a cohort of makers.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/dt-stages" className="btn btn-primary btn-lg">
                <BookOpen className="w-5 h-5" />
                Explore DT Stages
              </Link>
              <Link href="/dojo" className="btn btn-secondary btn-lg">
                <Users className="w-5 h-5" />
                Join the Dojo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="stage-badge stage-define">The Problem</span>
            <h2 className="heading-1">
              Students lack a centralized platform that bridges learning and doing
            </h2>
            <p className="text-lg text-muted">
              Theory-heavy curriculum feels disconnected from the real world.
              Specialists have no formal way to share their skills, while beginners
              are overwhelmed by generic resources. This creates a &quot;Mentorship Gap&quot;
              that hinders job-ready skill development.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section - 3 Pillars */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">Three Pillars of Learning</h2>
            <p className="text-muted text-lg">Everything you need to master Design Thinking</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-feature">
              <div className="icon-box icon-box-indigo mb-4">
                <BookOpen className="w-6 h-6 text-[var(--primary-indigo)]" />
              </div>
              <h3 className="heading-3 mb-3">Interactive Modules</h3>
              <p className="text-muted mb-4">
                Dive into real-world founder case studies. Learn how companies like
                Airbnb and IDEO use Design Thinking to solve complex problems.
              </p>
              <Link href="/dt-stages" className="text-[var(--primary-indigo)] font-semibold hover:underline">
                Explore Modules →
              </Link>
            </div>

            <div className="card-feature">
              <div className="icon-box icon-box-coral mb-4">
                <FolderGit2 className="w-6 h-6 text-[var(--accent-coral)]" />
              </div>
              <h3 className="heading-3 mb-3">GitHub for Designers</h3>
              <p className="text-muted mb-4">
                A portfolio system designed for the &quot;messy&quot; middle. Document sketches,
                prototypes, and user feedback with public/private visibility controls.
              </p>
              <Link href="/portfolio" className="text-[var(--accent-coral)] font-semibold hover:underline">
                Build Portfolio →
              </Link>
            </div>

            <div className="card-feature">
              <div className="icon-box icon-box-teal mb-4">
                <Users className="w-6 h-6 text-[var(--accent-teal)]" />
              </div>
              <h3 className="heading-3 mb-3">The Mentorship Dojo</h3>
              <p className="text-muted mb-4">
                Pass the entrance quiz to join a cohort. Get direct feedback from
                specialists and learn alongside peers in a structured environment.
              </p>
              <Link href="/dojo" className="text-[var(--accent-teal)] font-semibold hover:underline">
                Enter the Dojo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 DT Stages Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">The 5 Stages of Design Thinking</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              "Design Thinking is not a linear process. It's a mindset."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {dtStages.map((stage, index) => {
              const StageIcon = stage.Icon;
              return (
                <Link
                  key={stage.name}
                  href={`/dt-stages#${stage.name.toLowerCase()}`}
                  className="card text-center group cursor-pointer"
                  style={{ borderColor: stage.color }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `color-mix(in srgb, ${stage.color} 20%, transparent)` }}
                  >
                    <StageIcon className="w-8 h-8" style={{ color: stage.color }} />
                  </div>
                  <div className="text-xs font-bold text-muted mb-1">STAGE {index + 1}</div>
                  <h3 className="heading-3" style={{ color: stage.color }}>{stage.name}</h3>
                  <p className="text-sm text-muted mt-2">{stage.description}</p>
                </Link>
              );
            })}
          </div>

          {/* Stage Flow Visualization */}
          <div className="flex justify-center items-center gap-2 mt-8 text-sm font-bold uppercase tracking-widest text-muted overflow-x-auto">
            {dtStages.map((stage, index) => (
              <div key={stage.name} className="flex items-center gap-2">
                <span style={{ color: stage.color }}>{stage.name}</span>
                {index < dtStages.length - 1 && (
                  <span className="text-[var(--foreground)]">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section section-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="heading-1 mb-2">Learn from the Best</h2>
              <p className="text-muted text-lg">Curated founder case studies showing Design Thinking in action</p>
            </div>
            <Link href="/case-studies" className="btn btn-secondary">
              View All Case Studies →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <div key={study.company} className="card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--accent-coral)] rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {study.company.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold">{study.company}</h3>
                    <span className="text-xs text-muted uppercase tracking-wide">{study.industry}</span>
                  </div>
                </div>
                <p className="text-muted">{study.lesson}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="heading-display text-gradient">{stat.value}</div>
                <div className="text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <span className="stage-badge stage-ideate">Impact</span>
            <h2 className="heading-1">Aligned with Global Goals</h2>
            <p className="text-lg text-muted">
              Design Dojo supports the UN Sustainable Development Goals by democratizing
              design education and helping students build job-ready portfolios.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <div className="card flex-1 text-center">
                <div className="w-16 h-16 rounded-full bg-[color-mix(in_srgb,var(--primary-indigo)_15%,transparent)] mx-auto mb-3 flex items-center justify-center">
                  <Award className="w-8 h-8 text-[var(--primary-indigo)]" />
                </div>
                <h3 className="heading-3 mb-2">SDG 4</h3>
                <p className="text-muted">Quality Education</p>
                <p className="text-sm text-muted mt-2">
                  Providing accessible, peer-led learning opportunities
                </p>
              </div>
              <div className="card flex-1 text-center">
                <div className="w-16 h-16 rounded-full bg-[color-mix(in_srgb,var(--accent-coral)_15%,transparent)] mx-auto mb-3 flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-[var(--accent-coral)]" />
                </div>
                <h3 className="heading-3 mb-2">SDG 8</h3>
                <p className="text-muted">Decent Work & Economic Growth</p>
                <p className="text-sm text-muted mt-2">
                  Helping students build portfolios for the job market
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--primary-indigo-dark)] text-white">
        <div className="container text-center">
          <h2 className="heading-1 mb-4">Ready to Enter the Dojo?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of students documenting their design journey,
            learning from peers, and building job-ready portfolios.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/api/auth/signin" className="btn btn-lg bg-white text-[var(--primary-indigo)] hover:bg-gray-100">
              Get Started for Free
            </Link>
            <Link href="/about" className="btn btn-lg border-2 border-white text-white hover:bg-white/10">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}