'use client'
import { useState } from 'react';
import { updateProgress } from '@/server/modules/actions';

export default function ModuleViewer({ module }: { module: any }) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sections = module.content.sections || [];
    const currentSection = sections[currentSectionIndex];

    const handleNext = async () => {
        // In real app, save response here
        if (currentSectionIndex < sections.length - 1) {
            setCurrentSectionIndex(prev => prev + 1);
            await updateProgress(module.id, 'IN_PROGRESS');
        } else {
            await updateProgress(module.id, 'COMPLETED');
            alert("Module Completed!");
        }
    };

    if (!currentSection) return <div>Empty Module</div>;

    return (
        <div className="max-w-3xl mx-auto p-8 bg-white border rounded shadow-sm">
            <h1 className="text-3xl font-bold mb-6">{module.title}</h1>
            
            <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>Section {currentSectionIndex + 1} of {sections.length}</span>
                    <span>{Math.round(((currentSectionIndex) / sections.length) * 100)}% Complete</span>
                </div>
                
                <h3 className="font-semibold text-2xl mb-4">{currentSection.title}</h3>
                <div className="prose mb-6">
                    <p>{currentSection.text}</p>
                </div>
                
                {currentSection.type === 'reflection' && (
                    <div className="mt-6 bg-gray-50 p-4 rounded">
                        <label className="block font-medium mb-2">{currentSection.prompt}</label>
                        <textarea className="w-full p-3 border rounded h-32" placeholder="Type your reflection here..." />
                    </div>
                )}
            </div>
            
            <button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
                {currentSectionIndex < sections.length - 1 ? 'Next Section' : 'Complete Module'}
            </button>
        </div>
    );
}
