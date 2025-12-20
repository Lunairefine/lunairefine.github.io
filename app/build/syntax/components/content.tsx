"use client"
import { useEffect, useRef, useState } from 'react';
import { summon, saveImage } from '../lib/core';

export default function SigilCanvas() {
    const svgRef = useRef<SVGSVGElement>(null);
    const [bgColor, setBgColor] = useState<string>("#000000");

    const handleSummon = () => {
        if (svgRef.current) {
            const newBg = summon(svgRef.current);
            setBgColor(newBg);
        }
    };

    const handleSave = () => {
        if (svgRef.current) {
            saveImage(svgRef.current, bgColor);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            handleSummon();
        }, 50);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full flex flex-col items-center mt-15">
            <div 
                className="w-full max-w-[320px] md:max-w-[420px] aspect-square relative overflow-hidden transition-colors duration-700 border rounded-xl border-gray-800"
                style={{ backgroundColor: bgColor }}>
                <svg 
                    ref={svgRef}
                    viewBox="-120 -120 240 240" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-full h-full p-4"
                ></svg>
            </div>
            <div className="flex flex-row gap-4 justify-center mt-6 w-full px-4">
                <button 
                    onClick={handleSummon}
                    className="bg-[#00FF99] hover:bg-[#00CC7A] text-black font-bold py-2.5 px-8 rounded-full transition-all shadow-lg active:scale-95 text-sm tracking-wider uppercase min-w-[120px]"
                >
                    Summon
                </button>
                <button 
                    onClick={handleSave}
                    className="bg-black border border-white hover:bg-gray-900 text-white font-bold py-2.5 px-8 rounded-full transition-all active:scale-95 text-sm tracking-wider uppercase min-w-[120px]"
                >
                    Save
                </button>
            </div>
        </div>
    );
}