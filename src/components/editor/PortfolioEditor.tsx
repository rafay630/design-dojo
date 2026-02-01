'use client'
import { Tldraw } from 'tldraw'
import 'tldraw/tldraw.css'
import { useState } from 'react'
import { updateProject } from '@/server/portfolio/actions'

export default function PortfolioEditor({ projectId, initialVisibility = 'PRIVATE' }: { projectId?: string, initialVisibility?: string }) {
    const [visibility, setVisibility] = useState(initialVisibility);

    const handleVisibilityChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newVis = e.target.value;
        setVisibility(newVis);
        if (projectId) {
            // @ts-expect-error - visibility type mismatch
            await updateProject(projectId, { visibility: newVis });
        }
    }

    return (
        <div className="flex flex-col h-[85vh] border rounded shadow-sm overflow-hidden">
            <div className="p-4 border-b flex justify-between items-center bg-gray-50 z-10 relative">
                <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-700">Canvas</span>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Messy Mode</span>
                </div>
                <div className="flex items-center gap-2">
                    <label className="text-sm font-medium text-gray-600">Visibility:</label>
                    <select
                        value={visibility}
                        onChange={handleVisibilityChange}
                        className="border border-gray-300 rounded p-1.5 text-sm bg-white"
                    >
                        <option value="PRIVATE">Private (Only Me)</option>
                        <option value="MENTOR_ACCESS">Mentor Access</option>
                        <option value="PUBLIC">Public (Shareable)</option>
                    </select>
                </div>
            </div>
            <div className="flex-1 w-full relative">
                <Tldraw persistenceKey={projectId ? `project-${projectId}` : undefined} />
            </div>
        </div>
    )
}