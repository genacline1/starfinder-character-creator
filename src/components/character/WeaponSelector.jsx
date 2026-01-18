import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WEAPONS } from './equipmentData';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Sword, Crosshair, Plus, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WeaponSelector({ selectedWeapons = [], onWeaponsChange, selectedClass }) {
  const [weaponType, setWeaponType] = useState('melee');
  const [proficiencyFilter, setProficiencyFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const canUseWeapon = (weapon) => {
    if (!selectedClass) return true;
    const proficiencies = selectedClass.proficiencies || [];
    
    // Check if weapon is in proficiency list
    // For now, simplified - check basic categories
    return proficiencies.some(prof => {
      if (prof === 'Basic Melee' || prof === 'Advanced Melee') return weaponType === 'melee';
      if (prof === 'Small Arms' || prof === 'Longarms' || prof === 'Heavy Weapons' || prof === 'Sniper Weapons') {
        return weaponType === 'ranged';
      }
      return false;
    });
  };
  
  const isSelected = (weaponId) => {
    return selectedWeapons.some(w => w.id === weaponId);
  };
  
  const toggleWeapon = (weapon) => {
    if (isSelected(weapon.id)) {
      onWeaponsChange(selectedWeapons.filter(w => w.id !== weapon.id));
    } else {
      onWeaponsChange([...selectedWeapons, { ...weapon, type: weaponType }]);
    }
  };
  
  const weapons = (WEAPONS[weaponType] || []).filter(weapon => {
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      if (!weapon.name.toLowerCase().includes(query)) return false;
    }
    
    // Filter by proficiency
    if (proficiencyFilter !== 'all' && weapon.proficiency !== proficiencyFilter) {
      return false;
    }
    
    return true;
  });
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Choose Your Weapons</h2>
        <p className="text-cyan-300/60 text-sm">Select weapons for combat</p>
      </div>
      
      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <Input
          type="text"
          placeholder="Search weapons..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
        />
      </div>

      {/* Weapon Type Toggle */}
      <div className="flex justify-center gap-2 mb-4">
        <Badge
          variant={weaponType === 'melee' ? "default" : "outline"}
          className={`cursor-pointer transition-all flex items-center gap-1 ${
            weaponType === 'melee'
              ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
              : 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-300'
          }`}
          onClick={() => { setWeaponType('melee'); setProficiencyFilter('all'); }}
        >
          <Sword className="w-3 h-3" />
          Melee
        </Badge>
        <Badge
          variant={weaponType === 'ranged' ? "default" : "outline"}
          className={`cursor-pointer transition-all flex items-center gap-1 ${
            weaponType === 'ranged'
              ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
              : 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-300'
          }`}
          onClick={() => { setWeaponType('ranged'); setProficiencyFilter('all'); }}
        >
          <Crosshair className="w-3 h-3" />
          Ranged
        </Badge>
      </div>

      {/* Proficiency Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {weaponType === 'melee' ? (
          <>
            <Badge
              variant={proficiencyFilter === 'all' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'all'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('all')}
            >
              All
            </Badge>
            <Badge
              variant={proficiencyFilter === 'basic_melee' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'basic_melee'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('basic_melee')}
            >
              Basic Melee
            </Badge>
            <Badge
              variant={proficiencyFilter === 'advanced_melee' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'advanced_melee'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('advanced_melee')}
            >
              Advanced Melee
            </Badge>
          </>
        ) : (
          <>
            <Badge
              variant={proficiencyFilter === 'all' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'all'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('all')}
            >
              All
            </Badge>
            <Badge
              variant={proficiencyFilter === 'small_arms' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'small_arms'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('small_arms')}
            >
              Small Arms
            </Badge>
            <Badge
              variant={proficiencyFilter === 'longarms' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'longarms'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('longarms')}
            >
              Longarms
            </Badge>
            <Badge
              variant={proficiencyFilter === 'heavy' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'heavy'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('heavy')}
            >
              Heavy
            </Badge>
            <Badge
              variant={proficiencyFilter === 'sniper' ? "default" : "outline"}
              className={`cursor-pointer transition-all text-xs ${
                proficiencyFilter === 'sniper'
                  ? 'bg-purple-500 hover:bg-purple-600 text-white'
                  : 'border-slate-600 text-slate-400 hover:border-purple-400 hover:text-purple-300'
              }`}
              onClick={() => setProficiencyFilter('sniper')}
            >
              Sniper
            </Badge>
          </>
        )}
      </div>

      {/* Selected Weapons Summary */}
      {selectedWeapons.length > 0 && (
        <div className="bg-slate-800/60 rounded-xl p-4 mb-4">
          <div className="text-sm text-slate-400 mb-2">Selected Weapons ({selectedWeapons.length})</div>
          <div className="flex flex-wrap gap-2">
            {selectedWeapons.map(weapon => (
              <Badge key={weapon.id} variant="outline" className="text-xs border-cyan-500/50 text-cyan-300">
                {weapon.name}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Weapons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2">
        {weapons.map((weapon) => {
          const selected = isSelected(weapon.id);
          const canUse = canUseWeapon(weapon);
          
          return (
            <motion.div
              key={weapon.id}
              whileHover={{ scale: canUse ? 1.01 : 1 }}
              className={`
                relative rounded-xl p-4 border transition-all duration-300
                ${!canUse ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                ${selected
                  ? 'bg-purple-500/10 border-purple-400/50 shadow-lg' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
                }
              `}
              onClick={() => canUse && toggleWeapon(weapon)}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className={`text-base font-medium ${selected ? 'text-purple-300' : 'text-white'}`}>
                    {weapon.name}
                  </h3>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                      Level {weapon.level} • {weapon.price} credits
                    </Badge>
                    <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-300 capitalize">
                      {weapon.proficiency?.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>
                {selected && (
                  <div className="flex items-center gap-1 text-purple-400">
                    <Plus className="w-4 h-4" />
                  </div>
                )}
                {!canUse && (
                  <Badge variant="outline" className="text-xs border-red-500/50 text-red-400">
                    Not Proficient
                  </Badge>
                )}
              </div>
              
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">Damage:</span>
                  <span className="text-white font-medium">{weapon.damage}</span>
                </div>
                {weaponType === 'ranged' && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Range:</span>
                    <span className="text-white">{weapon.range} ft</span>
                  </div>
                )}
                {weapon.critical && weapon.critical !== '—' && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Critical:</span>
                    <span className="text-orange-400">{weapon.critical}</span>
                  </div>
                )}
                {weaponType === 'ranged' && (
                  <div className="flex justify-between">
                    <span className="text-slate-400">Capacity:</span>
                    <span className="text-white">{weapon.capacity}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-slate-400">Bulk:</span>
                  <span className="text-white">{weapon.bulk}</span>
                </div>
                {weapon.special && weapon.special.length > 0 && (
                  <div className="pt-2 border-t border-slate-700">
                    <div className="text-slate-400 mb-1">Special:</div>
                    <div className="flex flex-wrap gap-1">
                      {weapon.special.map((special, idx) => (
                        <span key={idx} className="text-xs text-purple-300 bg-purple-500/10 px-2 py-0.5 rounded">
                          {special}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}