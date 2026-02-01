export default function Loading() {
    return (
        <div className="container mx-auto animate-pulse">
            <div className="flex justify-between items-center mb-6">
                <div className="h-8 bg-gray-200 w-1/4 rounded"></div>
                <div className="h-10 bg-gray-200 w-32 rounded"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map(i => (
                    <div key={i} className="h-40 bg-gray-200 rounded"></div>
                ))}
            </div>
        </div>
    )
}
