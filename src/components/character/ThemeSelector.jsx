import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { THEMES, ABILITY_ABBREVIATIONS } from './starfinderData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, BookOpen, Check, ArrowLeft } from 'lucide-react';

export default function ThemeSelector({ selectedTheme, onSelect }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterSkill, setFilterSkill] = useState('all');
  const [filterAbility, setFilterAbility] = useState('all');
  const [viewingTheme, setViewingTheme] = useState(null);
  const [confirmedTheme, setConfirmedTheme] = useState(selectedTheme);

  const filteredThemes = THEMES.filter(theme => {
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const matchesName = theme.name.toLowerCase().includes(query);
      const matchesDescription = theme.description?.toLowerCase().includes(query);
      if (!matchesName && !matchesDescription) return false;
    }

    // Skill filter
    if (filterSkill !== 'all' && !theme.skills.includes(filterSkill)) {
      return false;
    }

    // Ability filter
    if (filterAbility !== 'all') {
      if (theme.abilityBoost !== 'any' && theme.abilityBoost !== filterAbility) {
        return false;
      }
    }

    return true;
  });

  const allSkills = [...new Set(THEMES.flatMap(t => t.skills))].sort();
  const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  const handleThemeClick = (theme) => {
    setViewingTheme(theme);
  };

  const handleConfirm = () => {
    setConfirmedTheme(viewingTheme);
    onSelect(viewingTheme);
    setViewingTheme(null);
  };

  const handleBack = () => {
    setViewingTheme(null);
  };

  // If viewing a confirmed theme, show summary
  if (confirmedTheme && !viewingTheme) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">Your Theme</h2>
          <p className="text-cyan-300/60 text-sm">Your character's background and focus</p>
        </div>

        <Card className="bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-amber-500/30">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-amber-300 mb-2">{confirmedTheme.name}</CardTitle>
                <Badge variant="outline" className="border-green-500/50 text-green-400">
                  +1 {confirmedTheme.abilityBoost === 'any' ? 'to Any Ability' : ABILITY_ABBREVIATIONS[confirmedTheme.abilityBoost]}
                </Badge>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setConfirmedTheme(null)}
                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
              >
                Change Theme
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-300">{confirmedTheme.description}</p>

            <div className="space-y-3">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-cyan-400 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Theme Knowledge (1st Level)
                </h4>
                <p className="text-sm text-slate-300">{confirmedTheme.themeKnowledge}</p>
                {confirmedTheme.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {confirmedTheme.skills.map(skill => (
                      <Badge key={skill} variant="outline" className="text-xs border-cyan-500/50 text-cyan-300">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {confirmedTheme.level6 && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-purple-400 mb-2">6th Level</h4>
                  <p className="text-sm text-slate-300">{confirmedTheme.level6}</p>
                </div>
              )}

              {confirmedTheme.level12 && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-blue-400 mb-2">12th Level</h4>
                  <p className="text-sm text-slate-300">{confirmedTheme.level12}</p>
                </div>
              )}

              {confirmedTheme.level18 && (
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-amber-400 mb-2">18th Level</h4>
                  <p className="text-sm text-slate-300">{confirmedTheme.level18}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // If viewing theme details
  if (viewingTheme) {
    return (
      <div className="space-y-6">
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-slate-400 hover:text-white mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Themes
        </Button>

        <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border-slate-700/50">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-white mb-2">{viewingTheme.name}</CardTitle>
                <Badge variant="outline" className="border-green-500/50 text-green-400">
                  +1 {viewingTheme.abilityBoost === 'any' ? 'to Any Ability' : ABILITY_ABBREVIATIONS[viewingTheme.abilityBoost]}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-300 text-lg">{viewingTheme.description}</p>

            <div className="space-y-3 mt-6">
              <div className="bg-slate-800/70 rounded-lg p-4 border border-cyan-500/30">
                <h4 className="text-base font-medium text-cyan-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Theme Knowledge (1st Level)
                </h4>
                <p className="text-sm text-slate-200">{viewingTheme.themeKnowledge}</p>
                {viewingTheme.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {viewingTheme.skills.map(skill => (
                      <Badge key={skill} className="bg-cyan-500/20 text-cyan-300 border-cyan-500/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              {viewingTheme.level6 && (
                <div className="bg-slate-800/70 rounded-lg p-4 border border-purple-500/30">
                  <h4 className="text-base font-medium text-purple-400 mb-2">6th Level</h4>
                  <p className="text-sm text-slate-200">{viewingTheme.level6}</p>
                </div>
              )}

              {viewingTheme.level12 && (
                <div className="bg-slate-800/70 rounded-lg p-4 border border-blue-500/30">
                  <h4 className="text-base font-medium text-blue-400 mb-2">12th Level</h4>
                  <p className="text-sm text-slate-200">{viewingTheme.level12}</p>
                </div>
              )}

              {viewingTheme.level18 && (
                <div className="bg-slate-800/70 rounded-lg p-4 border border-amber-500/30">
                  <h4 className="text-base font-medium text-amber-400 mb-2">18th Level</h4>
                  <p className="text-sm text-slate-200">{viewingTheme.level18}</p>
                </div>
              )}
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-slate-700">
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirm}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
              >
                <Check className="w-4 h-4 mr-2" />
                Confirm Theme
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-white mb-2">Choose Your Theme</h2>
        <p className="text-cyan-300/60 text-sm">Your background and expertise before adventuring</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-3 mb-6">
        <Input
          type="text"
          placeholder="Search themes..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-slate-800/60 border-slate-600 text-white placeholder:text-slate-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <Select value={filterSkill} onValueChange={setFilterSkill}>
              <SelectTrigger className="bg-slate-800/60 border-slate-600 text-white">
                <SelectValue placeholder="Filter by skill..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Skills</SelectItem>
                {allSkills.map(skill => (
                  <SelectItem key={skill} value={skill}>{skill}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Select value={filterAbility} onValueChange={setFilterAbility}>
              <SelectTrigger className="bg-slate-800/60 border-slate-600 text-white">
                <SelectValue placeholder="Filter by ability..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Abilities</SelectItem>
                <SelectItem value="any">Any Ability</SelectItem>
                {abilities.map(ability => (
                  <SelectItem key={ability} value={ability} className="capitalize">
                    {ability}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredThemes.map((theme) => {
          return (
            <motion.div
              key={theme.name}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              onClick={() => handleThemeClick(theme)}
              className="relative cursor-pointer rounded-xl p-5 border transition-all duration-300 bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50 hover:bg-slate-800/60"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-medium text-white">
                    {theme.name}
                  </h3>
                  <Badge 
                    variant="outline"
                    className="border-green-500/50 text-green-400 text-xs"
                  >
                    +1 {theme.abilityBoost === 'any' ? 'Any' : ABILITY_ABBREVIATIONS[theme.abilityBoost]}
                  </Badge>
                </div>
                
                <p className="text-sm text-slate-400 mb-3">
                  {theme.description}
                </p>

                {theme.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {theme.skills.map((skill) => (
                      <span key={skill} className="text-xs text-cyan-300/70 bg-cyan-500/10 px-2 py-0.5 rounded">
                        {skill}
                      </span>
                    ))}
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