import Link from "next/link";

// Mock data for demonstration
const userData = {
    name: "Student",
    joinedDate: "January 2026",
    cohort: "Cohort Alpha",
    cohortStage: "Empathize",
    quizScore: 85,
    projectsCount: 2,
    mentorshipRole: "Learner"
};

const recentActivity = [
    { id: 1, type: "module", title: "Completed Empathize module", date: "2 hours ago", icon: "📚" },
    { id: 2, type: "portfolio", title: "Updated project 'Campus App Redesign'", date: "Yesterday", icon: "💼" },
    { id: 3, type: "cohort", title: "Joined Cohort Alpha", date: "3 days ago", icon: "🥋" },
    { id: 4, type: "quiz", title: "Passed entrance quiz (85%)", date: "3 days ago", icon: "✅" },
];

const dtProgress = [
    { name: "Empathize", progress: 100, color: "var(--stage-empathize)" },
    { name: "Define", progress: 60, color: "var(--stage-define)" },
    { name: "Ideate", progress: 30, color: "var(--stage-ideate)" },
    { name: "Prototype", progress: 0, color: "var(--stage-prototype)" },
    { name: "Test", progress: 0, color: "var(--stage-test)" },
];

const upcomingTasks = [
    { id: 1, title: "Complete user interview template", dueDate: "Tomorrow", stage: "Define" },
    { id: 2, title: "Submit empathy map for review", dueDate: "In 3 days", stage: "Empathize" },
    { id: 3, title: "Cohort meeting: Problem framing", dueDate: "Friday", stage: "Define" },
];

export default function DashboardPage() {
    return (
        <div className="py-8">
            <div className="container">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="heading-1 mb-2">Welcome back! 👋</h1>
                    <p className="text-muted">Here's your Design Thinking learning journey at a glance.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-[var(--primary-indigo)]">{userData.quizScore}%</div>
                                <div className="text-sm text-muted">Quiz Score</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-[var(--accent-coral)]">{userData.projectsCount}</div>
                                <div className="text-sm text-muted">Projects</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-[var(--accent-teal)]">2/5</div>
                                <div className="text-sm text-muted">Stages Done</div>
                            </div>
                            <div className="card text-center">
                                <div className="text-3xl font-bold text-[var(--stage-empathize)]">1</div>
                                <div className="text-sm text-muted">Cohort</div>
                            </div>
                        </div>

                        {/* DT Progress */}
                        <div className="card">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="heading-3">Design Thinking Progress</h2>
                                <Link href="/dt-stages" className="text-[var(--primary-indigo)] text-sm font-medium hover:underline">
                                    View All Modules →
                                </Link>
                            </div>

                            <div className="space-y-4">
                                {dtProgress.map((stage) => (
                                    <div key={stage.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-medium">{stage.name}</span>
                                            <span className="text-sm text-muted">{stage.progress}%</span>
                                        </div>
                                        <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all duration-500"
                                                style={{
                                                    width: `${stage.progress}%`,
                                                    backgroundColor: stage.color
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="card">
                            <h2 className="heading-3 mb-6">Recent Activity</h2>
                            <div className="space-y-4">
                                {recentActivity.map((activity) => (
                                    <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                                        <div className="w-10 h-10 rounded-lg bg-[var(--background-alt)] flex items-center justify-center text-xl">
                                            {activity.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="font-medium">{activity.title}</p>
                                            <p className="text-sm text-muted">{activity.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link href="/portfolio" className="card-feature group">
                                <div className="flex items-center gap-4">
                                    <div className="icon-box icon-box-coral">💼</div>
                                    <div>
                                        <h3 className="heading-3 group-hover:text-[var(--accent-coral)]">My Portfolio</h3>
                                        <p className="text-sm text-muted">Document your design journey</p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/dojo" className="card-feature group">
                                <div className="flex items-center gap-4">
                                    <div className="icon-box icon-box-teal">🥋</div>
                                    <div>
                                        <h3 className="heading-3 group-hover:text-[var(--accent-teal)]">Dojo</h3>
                                        <p className="text-sm text-muted">Connect with your cohort</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Cohort Card */}
                        <div className="card border-2 border-[var(--stage-empathize)]">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-[var(--stage-empathize)] flex items-center justify-center text-white font-bold text-lg">
                                    A
                                </div>
                                <div>
                                    <h3 className="font-semibold">{userData.cohort}</h3>
                                    <span className="text-sm text-muted">{userData.mentorshipRole}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span
                                    className="px-3 py-1 rounded-full text-sm font-semibold"
                                    style={{
                                        backgroundColor: "color-mix(in srgb, var(--stage-empathize) 20%, transparent)",
                                        color: "var(--stage-empathize)"
                                    }}
                                >
                                    {userData.cohortStage} Phase
                                </span>
                            </div>
                            <p className="text-sm text-muted mb-4">
                                Your cohort is currently working on user interviews and empathy mapping techniques.
                            </p>
                            <Link href="/dojo" className="btn btn-primary w-full text-sm">
                                View Cohort →
                            </Link>
                        </div>

                        {/* Upcoming Tasks */}
                        <div className="card">
                            <h3 className="heading-3 mb-4">Upcoming Tasks</h3>
                            <div className="space-y-3">
                                {upcomingTasks.map((task) => (
                                    <div key={task.id} className="p-3 bg-[var(--background-alt)] rounded-lg">
                                        <p className="font-medium text-sm mb-1">{task.title}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs text-muted">{task.dueDate}</span>
                                            <span className="text-xs px-2 py-0.5 rounded bg-[var(--border)]">{task.stage}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Continue Learning */}
                        <div className="card bg-gradient-to-br from-[var(--primary-indigo)] to-[var(--primary-indigo-dark)] text-white">
                            <h3 className="font-semibold mb-2">Continue Learning</h3>
                            <p className="text-sm opacity-90 mb-4">
                                You're 60% through the Define stage. Keep going!
                            </p>
                            <Link
                                href="/dt-stages#define"
                                className="btn bg-white text-[var(--primary-indigo)] hover:bg-gray-100 w-full text-sm"
                            >
                                Resume Define →
                            </Link>
                        </div>

                        {/* Resources */}
                        <div className="card">
                            <h3 className="heading-3 mb-4">Quick Resources</h3>
                            <div className="space-y-2">
                                <Link href="/case-studies" className="flex items-center gap-2 p-2 rounded hover:bg-[var(--background-alt)] transition-colors">
                                    <span>📖</span>
                                    <span className="text-sm">Case Studies</span>
                                </Link>
                                <Link href="/dt-stages" className="flex items-center gap-2 p-2 rounded hover:bg-[var(--background-alt)] transition-colors">
                                    <span>📚</span>
                                    <span className="text-sm">DT Stages</span>
                                </Link>
                                <Link href="/modules" className="flex items-center gap-2 p-2 rounded hover:bg-[var(--background-alt)] transition-colors">
                                    <span>🎓</span>
                                    <span className="text-sm">Modules</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
