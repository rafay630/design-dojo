import { getModule } from "@/server/modules/actions";
import ModuleViewer from "@/components/dojo/ModuleViewer";
import { notFound } from "next/navigation";

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const moduleData = await getModule(slug);

  if (!moduleData) return notFound();

  return <ModuleViewer module={moduleData} />;
}
