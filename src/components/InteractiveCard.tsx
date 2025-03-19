'use client'
import React from "react";

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  return (
    <div 
      data-testid="interactive-card"
  className="bg-white p-2 rounded-lg shadow-lg w-80 h-[400px] text-left text-black space-y-3 flex flex-col transition-all duration-300 hover:shadow-2xl hover:bg-neutral-200"
      onMouseOver={(e) => e.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200')}
      onMouseOut={(e) => e.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200')}
    >
      {children}
    </div>
  );
};
