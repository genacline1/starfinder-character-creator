import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Check } from 'lucide-react';

export default function ClassAbilitySelector({ 
  abilityType, 
  displayName, 
  options, 
  selectedAbilities = [], 
  onAbilitiesChange,
  existingAbilities = [],
  maxSelections = 1 
}) {
  const isAbilitySelected = (abilityId) => {
    return selectedAbilities.some(a => a.id === abilityId);
  };

  const isAbilityOwned = (abilityId) => {
    return existingAbilities.some(a => a.id === abilityId);
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
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-medium ${isSelected ? 'text-purple-300' : 'text-white'}`}>
                  {ability.name}
                </h4>
                {isSelected && <Check className="w-5 h-5 text-purple-400 flex-shrink-0" />}
                {isOwned && <Badge variant="outline" className="text-xs">Owned</Badge>}
              </div>
              <p className="text-sm text-slate-400">{ability.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}