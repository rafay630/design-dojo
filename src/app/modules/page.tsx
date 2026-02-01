import { getModules } from "@/server/modules/actions";
import Link from "next/link";

export default async function ModulesPage() {
  const modules = await getModules();

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Learning Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((mod) => (
          <div key={mod.id} className="border p-6 rounded shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">{mod.title}</h2>
            <Link href={`/modules/${mod.slug}`} className="text-blue-600 hover:underline">
              Start Module →
            </Link>
          </div>
        ))}
        {modules.length === 0 && <p className="text-gray-500">No modules available yet. Check back soon!</p>}
      </div>
    </div>
  );
}
