export default function MentorDashboard() {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold mb-6">Mentor Dashboard</h1>
            <div className="bg-white p-6 rounded shadow border">
                <h2 className="text-xl font-semibold mb-4">Your Cohorts</h2>
                <table className="w-full">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="pb-2">Cohort Name</th>
                            <th className="pb-2">Students</th>
                            <th className="pb-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="py-2">Feb 2026 Cohort A</td>
                            <td className="py-2">12</td>
                            <td className="py-2"><button className="text-blue-600">Manage</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
