import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ARMOR } from './equipmentData';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Shield, CheckCircle2, AlertTriangle, Search } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function ArmorSelector({ selectedArmor, onSelect, selectedClass, characterName }) {
  const [filterType, setFilterType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [pendingArmor, setPendingArmor] = useState(null);
  
  const canWearArmor = (armor) => {
    if (!selectedClass) return true;
    const proficiencies = selectedClass.proficiencies || [];
    
    if (armor.type === 'light') {
      return proficiencies.includes('Light Armor');
    }
    if (armor.type === 'heavy') {
      return proficiencies.includes('Heavy Armor');
    }
    return false;
  };
  
  const handleArmorSelect = (armor) => {
    if (!armor) {
      onSelect(null);
      return;
    }
    
    if (!canWearArmor(armor)) {
      setPendingArmor(armor);
      setShowWarning(true);
    } else {
      onSelect(armor);
    }
  };
  
  const confirmNonProficientArmor = () => {
    onSelect(pendingArmor);
    setShowWarning(false);
    setPendingArmor(null);
  };
  
  const filteredArmor = ARMOR.filter(armor => {
    // Filter by type
    if (filterType !== 'all' && armor.type !== filterType) return false;
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return armor.name.toLowerCase().includes(query);
    }
    
    return true;
  });
  
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Choose Your Armor</h2>
        <p className="text-cyan-300/60 text-sm">Select protective gear for your adventures</p>
      </div>
      
      {/* Search */}
      <div className="mb-6 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <Input
          type="text"
          placeholder="Search armor..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
        />
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-2 mb-6">
        {['all', 'light', 'heavy', 'powered'].map(type => (
          <Badge
            key={type}
            variant={filterType === type ? "default" : "outline"}
            className={`cursor-pointer transition-all capitalize ${
              filterType === type
                ? 'bg-cyan-500 hover:bg-cyan-600 text-white'
                : 'border-slate-600 text-slate-400 hover:border-cyan-400 hover:text-cyan-300'
            }`}
            onClick={() => setFilterType(type)}
          >
            {type}
          </Badge>
        ))}
      </div>

      {/* Armor Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleArmorSelect(null)}
          className={`
            relative cursor-pointer rounded-xl p-5 border transition-all duration-300
            ${!selectedArmor
              ? 'bg-cyan-500/10 border-cyan-400/50 shadow-lg shadow-cyan-500/20' 
              : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
            }
          `}
        >
          <div className="text-center">
            <h3 className={`text-lg font-medium mb-2 ${!selectedArmor ? 'text-cyan-300' : 'text-white'}`}>
              No Armor
            </h3>
            <p className="text-sm text-slate-400">Trust your reflexes</p>
            <div className="mt-3 text-xs text-slate-500">
              <div>EAC: +0 | KAC: +0</div>
            </div>
          </div>
        </motion.div>
        
        {filteredArmor.map((armor) => {
          const isSelected = selectedArmor?.id === armor.id;
          const canWear = canWearArmor(armor);
          
          return (
            <motion.div
              key={armor.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleArmorSelect(armor)}
              className={`
                relative rounded-xl p-5 border transition-all duration-300 cursor-pointer
                ${!canWear ? 'opacity-60' : ''}
                ${isSelected 
                  ? 'bg-cyan-500/10 border-cyan-400/50 shadow-lg shadow-cyan-500/20' 
                  : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60'
                }
              `}
            >
              {isSelected && (
                <motion.div
                  layoutId="armorGlow"
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10"
                />
              )}
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <Shield className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <div>
                      <h3 className={`text-base font-medium ${isSelected ? 'text-cyan-300' : 'text-white'}`}>
                        {armor.name}
                      </h3>
                      <Badge variant="outline" className="text-xs mt-1 border-amber-500/50 text-amber-400">
                        Level {armor.level} • {armor.price} credits
                      </Badge>
                    </div>
                  </div>
                  {!canWear && (
                    <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Not Proficient
                    </Badge>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-slate-900/50 rounded p-2">
                    <div className="text-xs text-slate-500">EAC Bonus</div>
                    <div className="text-green-400 font-medium">+{armor.eacBonus}</div>
                  </div>
                  <div className="bg-slate-900/50 rounded p-2">
                    <div className="text-xs text-slate-500">KAC Bonus</div>
                    <div className="text-green-400 font-medium">+{armor.kacBonus}</div>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-slate-400 space-y-1">
                  <div className="flex justify-between">
                    <span>Max Dex:</span>
                    <span className="text-white">+{armor.maxDexBonus}</span>
                  </div>
                  {armor.armorCheckPenalty !== 0 && (
                    <div className="flex justify-between">
                      <span>Check Penalty:</span>
                      <span className="text-red-400">{armor.armorCheckPenalty}</span>
                    </div>
                  )}
                  {armor.speedAdjustment !== 0 && (
                    <div className="flex justify-between">
                      <span>Speed:</span>
                      <span className="text-red-400">{armor.speedAdjustment} ft</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Bulk:</span>
                    <span className="text-white">{armor.bulk}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Non-Proficient Warning Dialog */}
      <AlertDialog open={showWarning} onOpenChange={setShowWarning}>
        <AlertDialogContent className="bg-slate-900 border-slate-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Non-Proficient Armor Warning
            </AlertDialogTitle>
            <AlertDialogDescription className="text-slate-300">
              <p className="mb-3">
                <strong className="text-white">{characterName || 'Your character'}</strong> is not proficient with <strong className="text-cyan-400">{pendingArmor?.name}</strong>.
              </p>
              <p className="mb-2 text-amber-300">If they don this armor, they will suffer:</p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li><strong className="text-red-400">-4 penalty</strong> to attack rolls</li>
                <li><strong className="text-red-400">-4 penalty</strong> to Str- and Dex-based skill checks</li>
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmNonProficientArmor}
              className="bg-amber-500 hover:bg-amber-600 text-white"
            >
              Equip Anyway
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}