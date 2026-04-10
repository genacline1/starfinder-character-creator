import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { ABILITY_ABBREVIATIONS } from './starfinderData';

export default function RaceFilters({ filters, onFilterChange, onClearFilters }) {
  const [expanded, setExpanded] = useState(false);
  const sources = [
    "Core",
    "Pact Worlds",
    "Alien Archive",
    "Alien Archive 2",
    "Alien Archive 3",
    "Alien Archive 4",
    "Character Operations Manual",
    "Interstellar Species",
    "Near Space",
    "Starfinder Enhanced",
    "Galactic Magic",
    "Adventure Paths/Modules"
  ];

  const sizes = ["Small", "Medium", "Large"];
  const abilities = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

  const toggleSource = (source) => {
    const newSources = filters.sources.includes(source)
      ? filters.sources.filter(s => s !== source)
      : [...filters.sources, source];
    onFilterChange({ ...filters, sources: newSources });
  };

  const toggleSize = (size) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFilterChange({ ...filters, sizes: newSizes });
  };

  const togglePositiveAbility = (ability) => {
    const newPositives = filters.positiveAbilities.includes(ability)
      ? filters.positiveAbilities.filter(a => a !== ability)
      : filters.positiveAbilities.length < 2
        ? [...filters.positiveAbilities, ability]
        : filters.positiveAbilities;
    onFilterChange({ ...filters, positiveAbilities: newPositives });
  };

  const toggleNegativeAbility = (ability) => {
    const newNegative = filters.negativeAbility === ability ? null : ability;
    onFilterChange({ ...filters, negativeAbility: newNegative });
  };

  const hasActiveFilters = filters.sources.length > 0 || 
                          filters.sizes.length > 0 || 
                          filters.positiveAbilities.length > 0 || 
                          filters.negativeAbility !== null;

  return (
    <div className="bg-slate-800/60 rounded-xl border border-slate-700/50 p-5 mb-6">
      <div className="flex items-center justify-between mb-4 cursor-pointer" onClick={() => setExpanded(!expanded)}>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-cyan-400" />
          <h3 className="text-lg font-medium text-white">Filter Races</h3>
          {hasActiveFilters && (
            <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
              Active
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onClearFilters();
              }}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
          {expanded ? 
            <ChevronUp className="w-4 h-4 text-slate-400" /> : 
            <ChevronDown className="w-4 h-4 text-slate-400" />
          }
        </div>
      </div>

      {expanded && (
        <div className="space-y-4">
        {/* Source Filter */}
        <div>
          <div className="text-sm text-slate-400 mb-2">Source Books</div>
          <div className="flex flex-wrap gap-2">
            {sources.map(source => (
              <Badge
                key={source}
                variant={filters.sources.includes(source) ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  filters.sources.includes(source)
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                    : 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-300'
                }`}
                onClick={() => toggleSource(source)}
              >
                {source}
              </Badge>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <div className="text-sm text-slate-400 mb-2">Size Category</div>
          <div className="flex flex-wrap gap-2">
            {sizes.map(size => (
              <Badge
                key={size}
                variant={filters.sizes.includes(size) ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  filters.sizes.includes(size)
                    ? 'bg-purple-500 hover:bg-purple-600 text-white'
                    : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
                }`}
                onClick={() => toggleSize(size)}
              >
                {size}
              </Badge>
            ))}
          </div>
        </div>

        {/* Ability Score Filter */}
        <div>
          <div className="text-sm text-slate-400 mb-2">
            Ability Score Bonuses (select up to 2)
          </div>
          <div className="flex flex-wrap gap-2">
            {abilities.map(ability => (
              <Badge
                key={ability}
                variant={filters.positiveAbilities.includes(ability) ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  filters.positiveAbilities.includes(ability)
                    ? 'bg-green-500 hover:bg-green-600 text-white'
                    : 'border-slate-600 text-slate-400 hover:border-green-400 hover:text-green-300'
                }`}
                onClick={() => togglePositiveAbility(ability)}
              >
                {ABILITY_ABBREVIATIONS[ability]} +
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <div className="text-sm text-slate-400 mb-2">
            Ability Score Penalty (select 1)
          </div>
          <div className="flex flex-wrap gap-2">
            {abilities.map(ability => (
              <Badge
                key={ability}
                variant={filters.negativeAbility === ability ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  filters.negativeAbility === ability
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'border-slate-600 text-slate-400 hover:border-red-400 hover:text-red-300'
                }`}
                onClick={() => toggleNegativeAbility(ability)}
              >
                {ABILITY_ABBREVIATIONS[ability]} -
              </Badge>
            ))}
          </div>
        </div>
      </div>
      )}
    </div>
  );
}