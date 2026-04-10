import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export default function SituationalModifiers({ modifiers, title = "Situational Modifiers", defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!modifiers || modifiers.length === 0) return null;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-3 pt-3 border-t border-slate-700">
      <CollapsibleTrigger className="flex items-center gap-2 w-full group">
        <Info className="w-4 h-4 text-amber-400" />
        <span className="text-xs text-amber-400 font-semibold uppercase">{title}</span>
        <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-[10px]">
          {modifiers.length}
        </Badge>
        {isOpen ? 
          <ChevronUp className="w-3 h-3 ml-auto text-slate-400 group-hover:text-slate-300" /> : 
          <ChevronDown className="w-3 h-3 ml-auto text-slate-400 group-hover:text-slate-300" />
        }
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 space-y-2">
        {modifiers.map((mod, idx) => (
          <div 
            key={idx} 
            className="bg-amber-900/10 border border-amber-500/20 rounded-lg p-2.5 space-y-1"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="text-xs font-medium text-amber-200">{mod.source}</div>
                {mod.condition && (
                  <div className="text-xs text-slate-400 italic mt-0.5">{mod.condition}</div>
                )}
              </div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-[10px] whitespace-nowrap">
                {mod.effect}
              </Badge>
            </div>
            {mod.description && (
              <div className="text-xs text-slate-400 leading-snug">{mod.description}</div>
            )}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}