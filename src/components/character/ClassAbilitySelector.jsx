import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Check, MoreHorizontal, ChevronUp, AlertTriangle } from 'lucide-react';

export default function ClassAbilitySelector({ 
  abilityType, 
  displayName, 
  options, 
  selectedAbilities = [], 
  onAbilitiesChange,
  existingAbilities = [],
  maxSelections = 1 
}) {

  const [expandedIds, setExpandedIds] = useState(() => new Set());

  const toggleExpanded = (id) => {
    setExpandedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const isAbilitySelected = (abilityId) => {
    return selectedAbilities.some(a => a.id === abilityId);
  };

  const isAbilityOwned = (abilityId) => {
    return existingAbilities.some(a => a.id === abilityId);
  };

    // --- Prerequisite warnings (soft) ---
  const ownedAbilityIds = new Set([
    ...existingAbilities.map(a => a.id),
    ...selectedAbilities.map(a => a.id),
  ]);

  // Normalize prereq strings so entries like "versatile_nanites (Disguise)"
  // will still match "versatile_nanites" if that's what the user has.
  const normalizePrereqId = (prereq) => {
    if (!prereq || typeof prereq !== 'string') return prereq;
    // Take everything before first space or "("
    return prereq.split('(')[0].split(' ')[0].trim();
  };

  const getUnmetPrereqs = (ability) => {
    if (!ability?.prerequisites?.length) return [];
    return ability.prerequisites.filter((p) => {
      const id = normalizePrereqId(p);
      return !ownedAbilityIds.has(id);
    });
  };

  const handleAbilitySelect = (ability) => {
    const isSelected = isAbilitySelected(ability.id);
    
    if (isSelected) {
      onAbilitiesChange(selectedAbilities.filter(a => a.id !== ability.id));
    } else if (selectedAbilities.length < maxSelections) {
      onAbilitiesChange([...selectedAbilities, { id: ability.id, type: abilityType }]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-slate-400 text-sm">
          Select {maxSelections} {displayName}{maxSelections > 1 ? 's' : ''}
        </p>
        <p className="text-cyan-400 text-xs mt-1">
          {selectedAbilities.length} / {maxSelections} selected
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {options.map(ability => {
          const isSelected = isAbilitySelected(ability.id);
          const isOwned = isAbilityOwned(ability.id);
          const unmetPrereqs = getUnmetPrereqs(ability);
          const canSelect = !isOwned && (isSelected || selectedAbilities.length < maxSelections);

          return (
            <motion.div
              key={ability.id}
              whileHover={{ scale: canSelect ? 1.02 : 1 }}
              onClick={() => canSelect && handleAbilitySelect(ability)}
              className={`
                rounded-lg p-4 border transition-all cursor-pointer
                ${isSelected 
                  ? 'bg-purple-500/10 border-purple-400/50' 
                  : isOwned
                    ? 'bg-slate-800/20 border-slate-700/30 opacity-50 cursor-not-allowed'
                    : canSelect
                      ? 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50'
                      : 'bg-slate-800/20 border-slate-700/30 opacity-50 cursor-not-allowed'
                }
              `}
            >
              <div className="flex justify-between items-start mb-2 gap-2">
                <h4 className={`font-medium ${isSelected ? 'text-purple-300' : 'text-white'}`}>
                  {ability.name}
                </h4>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {isOwned && <Badge variant="outline" className="text-xs">Owned</Badge>}
                  {isSelected && <Check className="w-5 h-5 text-purple-400" />}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();      // don’t trigger select
                      toggleExpanded(ability.id);
                    }}
                    className="p-1 rounded hover:bg-white/10 text-slate-300 hover:text-white"
                    aria-label={expandedIds.has(ability.id) ? 'Hide details' : 'Show details'}
                    title={expandedIds.has(ability.id) ? 'Hide details' : 'Show details'}
                  >
                    {expandedIds.has(ability.id)
                      ? <ChevronUp className="w-4 h-4" />
                      : <MoreHorizontal className="w-4 h-4" />
                    }
                  </button>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                {ability.shortDescription ?? ability.description}
              </p>
              {unmetPrereqs.length > 0 && (
                <div className="mt-2 flex items-start gap-2 text-amber-300/90">
                  <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p className="text-xs leading-snug">
                    Requires: {unmetPrereqs.join(', ')}
                  </p>
                </div>
              )}
              {expandedIds.has(ability.id) && (
                <div className="mt-2 rounded bg-white/5 p-2 text-sm text-slate-200 leading-relaxed">
                  {ability.fullDescription ?? ability.description ?? ability.shortDescription}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}