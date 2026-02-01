import PortfolioEditor from "@/components/editor/PortfolioEditor";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    
    // TODO: Fetch project and pass initial visibility
    
    return (
        <div className="container mx-auto py-4">
            <PortfolioEditor projectId={id} />
        </div>
    )
}
