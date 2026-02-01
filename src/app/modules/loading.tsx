export default function Loading() {
    return (
        <div className="container mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 w-1/4 mb-6 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-48 bg-gray-200 rounded"></div>
                ))}
            </div>
        </div>
    )
}
