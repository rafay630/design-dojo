import { getProjects } from "@/server/portfolio/actions";
import Link from "next/link";

export default async function PortfolioPage() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">My Portfolio</h1>
            <Link href="/portfolio/new" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                + New Project
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {projects.map((p: any) => (
                 <div key={p.id} className="border p-4 rounded shadow-sm hover:shadow">
                     <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                     <span className="text-xs font-semibold bg-gray-100 px-2 py-1 rounded uppercase tracking-wide">{p.stage}</span>
                     <Link href={`/portfolio/${p.id}`} className="block mt-4 text-blue-600 hover:underline">Open Editor →</Link>
                 </div>
             ))}
             {projects.length === 0 && (
                <div className="col-span-full text-center py-12 border-2 border-dashed rounded-lg">
                    <p className="text-gray-500 mb-4">You haven't documented any work yet.</p>
                    <Link href="/portfolio/new" className="text-blue-600 hover:underline">Create your first project</Link>
                </div>
             )}
        </div>
    </div>
  );
}
