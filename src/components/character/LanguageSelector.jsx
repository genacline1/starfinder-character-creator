import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LANGUAGE_CATEGORIES } from './languagesData';
import { calculateModifier } from './starfinderData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Plus, X, Languages } from 'lucide-react';

export default function LanguageSelector({ 
  selectedLanguages = [], 
  onLanguagesChange,
  race,
  abilityScores,
  homeworld
}) {
  const [customLanguage, setCustomLanguage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const intModifier = calculateModifier(abilityScores?.intelligence || 10);
  const bonusLanguages = Math.max(0, intModifier);

  // Calculate automatic languages
  const getAutomaticLanguages = () => {
    const auto = ['common'];
    
    // Add racial language if it exists
    if (race?.language) {
      auto.push(race.language.toLowerCase());
    }
    
    // Add home planet language
    if (homeworld?.primaryLanguage) {
      auto.push(homeworld.primaryLanguage.toLowerCase());
    }
    
    return [...new Set(auto)]; // Remove duplicates
  };

  const automaticLanguages = getAutomaticLanguages();
  const bonusLanguagesSelected = selectedLanguages.filter(lang => !automaticLanguages.includes(lang.toLowerCase()));
  const remainingSlots = bonusLanguages - bonusLanguagesSelected.length;

  const isLanguageSelected = (langId) => {
    return selectedLanguages.some(l => l.toLowerCase() === langId.toLowerCase());
  };

  const toggleLanguage = (langId) => {
    const langLower = langId.toLowerCase();
    
    // Can't deselect automatic languages
    if (automaticLanguages.includes(langLower)) return;
    
    if (isLanguageSelected(langId)) {
      onLanguagesChange(selectedLanguages.filter(l => l.toLowerCase() !== langLower));
    } else {
      if (bonusLanguagesSelected.length < bonusLanguages) {
        onLanguagesChange([...selectedLanguages, langId]);
      }
    }
  };

  const addCustomLanguage = () => {
    if (!customLanguage.trim()) return;
    if (bonusLanguagesSelected.length >= bonusLanguages) return;
    
    const customId = `custom_${customLanguage.trim()}`;
    if (!isLanguageSelected(customId)) {
      onLanguagesChange([...selectedLanguages, customId]);
    }
    setCustomLanguage('');
  };

  // Initialize with automatic languages
  useEffect(() => {
    const current = selectedLanguages.map(l => l.toLowerCase());
    const missing = automaticLanguages.filter(auto => !current.includes(auto));
    
    if (missing.length > 0) {
      onLanguagesChange([...selectedLanguages, ...missing]);
    }
  }, [automaticLanguages.join(',')]);

  const allLanguages = Object.values(LANGUAGE_CATEGORIES).flatMap(cat => cat.languages);
  const filteredLanguages = allLanguages.filter(lang => 
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Known Languages</h2>
        <p className="text-cyan-300/60 text-sm">
          You know Common, your racial language, and your homeworld's language.
          {bonusLanguages > 0 ? ` Choose ${bonusLanguages} additional language${bonusLanguages > 1 ? 's' : ''} based on your Intelligence.` : ''}
        </p>
      </div>

      {/* Summary */}
      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-white font-medium flex items-center gap-2">
            <Languages className="w-5 h-5 text-cyan-400" />
            Your Languages
          </h3>
          {bonusLanguages > 0 && (
            <Badge className={remainingSlots > 0 ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' : 'bg-green-500/20 text-green-300 border-green-500/50'}>
              {remainingSlots} / {bonusLanguages} bonus slots remaining
            </Badge>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {selectedLanguages.length > 0 ? (
            selectedLanguages.map((lang) => {
              const isAutomatic = automaticLanguages.includes(lang.toLowerCase());
              const displayName = lang.startsWith('custom_') 
                ? lang.replace('custom_', '') 
                : allLanguages.find(l => l.id === lang.toLowerCase())?.name || lang;
              
              return (
                <Badge
                  key={lang}
                  className={`${
                    isAutomatic 
                      ? 'bg-green-500/20 text-green-300 border-green-500/50' 
                      : 'bg-purple-500/20 text-purple-300 border-purple-500/50'
                  } flex items-center gap-1`}
                >
                  {displayName}
                  {isAutomatic && <CheckCircle className="w-3 h-3" />}
                  {!isAutomatic && (
                    <button
                      onClick={() => toggleLanguage(lang)}
                      className="hover:text-red-400 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </Badge>
              );
            })
          ) : (
            <p className="text-slate-400 text-sm">No languages selected yet</p>
          )}
        </div>
      </div>

      {bonusLanguages > 0 && (
        <>
          {/* Search */}
          <div>
            <Label className="text-slate-300 text-sm mb-2 block">Search Languages</Label>
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for a language..."
              className="bg-slate-800/50 border-slate-600 text-white"
            />
          </div>

          {/* Language Grid */}
          <div className="space-y-6">
            {Object.entries(LANGUAGE_CATEGORIES).map(([key, category]) => {
              const categoryLanguages = category.languages.filter(lang =>
                lang.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
              
              if (categoryLanguages.length === 0) return null;
              
              return (
                <div key={key}>
                  <h3 className="text-white font-medium mb-3">{category.name}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {categoryLanguages.map((lang) => {
                      const selected = isLanguageSelected(lang.id);
                      const isAuto = automaticLanguages.includes(lang.id);
                      const canSelect = !selected && bonusLanguagesSelected.length < bonusLanguages;
                      
                      return (
                        <motion.button
                          key={lang.id}
                          whileHover={canSelect || (selected && !isAuto) ? { scale: 1.02 } : {}}
                          onClick={() => toggleLanguage(lang.id)}
                          disabled={isAuto || (!selected && !canSelect)}
                          className={`
                            relative rounded-lg p-3 border-2 transition-all text-left
                            ${selected 
                              ? isAuto 
                                ? 'bg-green-500/10 border-green-400/50 text-green-300' 
                                : 'bg-purple-500/10 border-purple-400/50 text-purple-300'
                              : canSelect
                                ? 'bg-slate-800/50 border-slate-600 text-white hover:border-cyan-400/50 cursor-pointer'
                                : 'bg-slate-800/30 border-slate-700/30 text-slate-500 cursor-not-allowed'
                            }
                          `}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm">{lang.name}</span>
                            {selected && <CheckCircle className="w-4 h-4" />}
                          </div>
                          {isAuto && (
                            <span className="text-xs opacity-70 mt-1 block">Automatic</span>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Custom Language */}
          <div className="border-t border-slate-700 pt-6">
            <h3 className="text-white font-medium mb-3">Custom Language</h3>
            <div className="flex gap-3">
              <Input
                value={customLanguage}
                onChange={(e) => setCustomLanguage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addCustomLanguage()}
                placeholder="Enter a custom language name..."
                className="bg-slate-800/50 border-slate-600 text-white flex-1"
                disabled={remainingSlots <= 0}
              />
              <Button
                onClick={addCustomLanguage}
                disabled={!customLanguage.trim() || remainingSlots <= 0}
                className="bg-cyan-500 hover:bg-cyan-600"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add
              </Button>
            </div>
          </div>
        </>
      )}

      {bonusLanguages === 0 && (
        <div className="text-center py-6 bg-slate-800/30 rounded-lg border border-slate-700">
          <p className="text-slate-400">
            Your Intelligence modifier is 0, so you don't have any bonus language slots.
          </p>
        </div>
      )}
    </div>
  );
}