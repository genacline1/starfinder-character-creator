import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SPELLS, getSpellsByClass, getSpellsByLevel, getSpellsKnownForLevel, SPELL_SCHOOLS } from './spellsData';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, BookOpen, Zap, Filter, ChevronDown, ChevronUp, Plus, X } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { getTotalLevel } from './starfinderData';

export default function SpellSelector({ selectedClass, classes, knownSpells = [], onSpellsChange }) {
  const [filterLevel, setFilterLevel] = useState('all');
  const [filterSchool, setFilterSchool] = useState('all');
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [showCustomDialog, setShowCustomDialog] = useState(false);
  const [viewSpellDialog, setViewSpellDialog] = useState(null);
  const [customSpell, setCustomSpell] = useState({
    name: '',
    level: 0,
    school: 'Evocation',
    castingTime: '1 standard action',
    range: 'close',
    duration: 'instantaneous',
    savingThrow: 'none',
    spellResistance: false,
    description: ''
  });
  
  const className = selectedClass?.name.toLowerCase() || '';
  const isSpellcaster = className === 'mystic' || className === 'technomancer';
  const characterLevel = getTotalLevel(classes);
  
  // Get all spells (for non-spellcasters, show all spells)
  const availableSpells = isSpellcaster 
    ? getSpellsByClass(className) 
    : SPELLS;
  const spellsKnownLimits = isSpellcaster 
    ? getSpellsKnownForLevel(className, characterLevel) 
    : {};
  
  // Count spells known by level
  const knownByLevel = {};
  knownSpells.forEach(spellId => {
    const spell = SPELLS.find(s => s.id === spellId);
    if (spell) {
      knownByLevel[spell.level] = (knownByLevel[spell.level] || 0) + 1;
    }
  });

  const canLearnSpell = (spell) => {
    const limit = spellsKnownLimits[spell.level];
    if (!limit) return false; // Can't learn this level yet
    const known = knownByLevel[spell.level] || 0;
    return known < limit;
  };

  const toggleSpell = (spellId) => {
    if (knownSpells.includes(spellId)) {
      onSpellsChange(knownSpells.filter(id => id !== spellId));
    } else {
      const spell = SPELLS.find(s => s.id === spellId);
      if (spell && canLearnSpell(spell)) {
        onSpellsChange([...knownSpells, spellId]);
      }
    }
  };

  const addCustomSpell = () => {
    if (!customSpell.name.trim()) return;
    
    const newSpellId = `custom_${Date.now()}`;
    const newSpell = {
      id: newSpellId,
      ...customSpell,
      classes: [] // Custom spells available to all
    };
    
    // Add to SPELLS array (in memory only)
    SPELLS.push(newSpell);
    
    // Add to known spells
    onSpellsChange([...knownSpells, newSpellId]);
    
    // Reset form
    setCustomSpell({
      name: '',
      level: 0,
      school: 'Evocation',
      castingTime: '1 standard action',
      range: 'close',
      duration: 'instantaneous',
      savingThrow: 'none',
      spellResistance: false,
      description: ''
    });
    setShowCustomDialog(false);
  };

  // Filter spells
  let filteredSpells = availableSpells;
  if (filterLevel !== 'all') {
    filteredSpells = filteredSpells.filter(s => s.level === parseInt(filterLevel));
  }
  if (filterSchool !== 'all') {
    filteredSpells = filteredSpells.filter(s => s.school.includes(filterSchool));
  }

  // Group by level
  const spellsByLevel = {};
  filteredSpells.forEach(spell => {
    if (!spellsByLevel[spell.level]) {
      spellsByLevel[spell.level] = [];
    }
    spellsByLevel[spell.level].push(spell);
  });

  const maxLevel = Math.max(...Object.keys(spellsKnownLimits).map(Number));

  return (
    <TooltipProvider>
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-white mb-2">Spell Selection</h2>
          <p className="text-cyan-300/60 text-sm">
            {isSpellcaster 
              ? `Choose your known spells for ${selectedClass?.name}` 
              : `${selectedClass?.name} does not cast spells - but you can add custom spells or from other classes`
            }
          </p>
        </div>

        {/* Add Custom Spell Button */}
        <Dialog open={showCustomDialog} onOpenChange={setShowCustomDialog}>
          <DialogTrigger asChild>
            <Button className="w-full bg-purple-500/20 border border-purple-500/50 text-purple-300 hover:bg-purple-500/30">
              <Plus className="w-4 h-4 mr-2" />
              Add Custom Spell
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-white">Add Custom Spell</DialogTitle>
              <DialogDescription className="text-slate-400">
                Create a custom spell or add one from another class
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2">
              <div>
                <Label className="text-slate-300">Spell Name</Label>
                <Input
                  value={customSpell.name}
                  onChange={(e) => setCustomSpell({...customSpell, name: e.target.value})}
                  className="bg-slate-800 border-slate-600 text-white"
                  placeholder="e.g., Fireball"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-slate-300">Level</Label>
                  <Select value={String(customSpell.level)} onValueChange={(v) => setCustomSpell({...customSpell, level: parseInt(v)})}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[0,1,2,3,4,5,6].map(l => (
                        <SelectItem key={l} value={String(l)}>Level {l}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="text-slate-300">School</Label>
                  <Select value={customSpell.school} onValueChange={(v) => setCustomSpell({...customSpell, school: v})}>
                    <SelectTrigger className="bg-slate-800 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {SPELL_SCHOOLS.map(s => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-slate-300">Casting Time</Label>
                  <Input
                    value={customSpell.castingTime}
                    onChange={(e) => setCustomSpell({...customSpell, castingTime: e.target.value})}
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-slate-300">Range</Label>
                  <Input
                    value={customSpell.range}
                    onChange={(e) => setCustomSpell({...customSpell, range: e.target.value})}
                    className="bg-slate-800 border-slate-600 text-white"
                  />
                </div>
              </div>
              <div>
                <Label className="text-slate-300">Duration</Label>
                <Input
                  value={customSpell.duration}
                  onChange={(e) => setCustomSpell({...customSpell, duration: e.target.value})}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label className="text-slate-300">Saving Throw</Label>
                <Input
                  value={customSpell.savingThrow}
                  onChange={(e) => setCustomSpell({...customSpell, savingThrow: e.target.value})}
                  className="bg-slate-800 border-slate-600 text-white"
                />
              </div>
              <div>
                <Label className="text-slate-300">Description</Label>
                <Textarea
                  value={customSpell.description}
                  onChange={(e) => setCustomSpell({...customSpell, description: e.target.value})}
                  className="bg-slate-800 border-slate-600 text-white"
                  rows={3}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setShowCustomDialog(false)} className="bg-slate-800 border-slate-700">
                Cancel
              </Button>
              <Button onClick={addCustomSpell} className="bg-purple-500 hover:bg-purple-600">
                Add Spell
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Spells Known Summary */}
        {isSpellcaster && Object.keys(spellsKnownLimits).length > 0 && (
          <Card className="bg-slate-800/50 border-slate-700/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base text-white">Spells Known</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {Object.keys(spellsKnownLimits).map(level => {
                  const limit = spellsKnownLimits[level];
                  const known = knownByLevel[level] || 0;
                  return (
                    <div key={level} className="bg-slate-900/50 rounded-lg p-3 text-center">
                      <div className="text-xs text-slate-400 mb-1">
                        Level {level}
                      </div>
                      <div className={`text-xl font-bold ${known >= limit ? 'text-green-400' : 'text-cyan-400'}`}>
                        {known} / {limit}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters */}
        <Card className="bg-slate-800/50 border-slate-700/50">
          <CardHeader className="pb-3 cursor-pointer" onClick={() => setFiltersExpanded(!filtersExpanded)}>
            <CardTitle className="text-base text-white flex items-center gap-2">
              <Filter className="w-4 h-4 text-purple-400" />
              Filters
              {filtersExpanded ? 
                <ChevronUp className="w-4 h-4 ml-auto text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 ml-auto text-slate-400" />
              }
            </CardTitle>
          </CardHeader>
          {filtersExpanded && (
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge
                  variant={filterLevel === 'all' ? 'default' : 'outline'}
                  className={`cursor-pointer ${filterLevel === 'all' ? 'bg-purple-500' : ''}`}
                  onClick={() => setFilterLevel('all')}
                >
                  All Levels
                </Badge>
                {[...Array(maxLevel + 1)].map((_, i) => (
                  <Badge
                    key={i}
                    variant={filterLevel === String(i) ? 'default' : 'outline'}
                    className={`cursor-pointer ${filterLevel === String(i) ? 'bg-purple-500' : ''}`}
                    onClick={() => setFilterLevel(String(i))}
                  >
                    Level {i}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={filterSchool === 'all' ? 'default' : 'outline'}
                  className={`cursor-pointer ${filterSchool === 'all' ? 'bg-cyan-500' : ''}`}
                  onClick={() => setFilterSchool('all')}
                >
                  All Schools
                </Badge>
                {SPELL_SCHOOLS.map(school => (
                  <Badge
                    key={school}
                    variant={filterSchool === school ? 'default' : 'outline'}
                    className={`cursor-pointer ${filterSchool === school ? 'bg-cyan-500' : ''}`}
                    onClick={() => setFilterSchool(school)}
                  >
                    {school}
                  </Badge>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Spells List */}
        <div className="space-y-6">
          {Object.keys(spellsByLevel).sort((a, b) => Number(a) - Number(b)).map(level => (
            <div key={level}>
              <h3 className="text-lg font-medium text-white mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-purple-400" />
                Level {level} {level === '0' && '(Cantrips)'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {spellsByLevel[level].map(spell => {
                  const isKnown = knownSpells.includes(spell.id);
                  const canLearn = canLearnSpell(spell) || !isSpellcaster;
                  const isDisabled = !isKnown && !canLearn;

                  return (
                    <motion.div
                      key={spell.id}
                      whileHover={{ scale: isDisabled ? 1 : 1.01 }}
                      onClick={() => setViewSpellDialog(spell)}
                      className={`
                        rounded-lg p-4 border transition-all cursor-pointer
                        ${isKnown 
                          ? 'bg-purple-500/10 border-purple-400/50' 
                          : isDisabled
                            ? 'bg-slate-800/20 border-slate-700/30 opacity-50'
                            : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600/50'
                        }
                      `}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className={`font-medium ${isKnown ? 'text-purple-300' : 'text-white'}`}>
                          {spell.name}
                        </h4>
                        {isKnown && <Sparkles className="w-4 h-4 text-purple-400" />}
                      </div>
                      <div className="flex flex-wrap gap-1 mb-2">
                        <Badge variant="outline" className="text-xs border-cyan-500/50 text-cyan-400">
                          {spell.school}
                        </Badge>
                        <Badge variant="outline" className="text-xs border-amber-500/50 text-amber-400">
                          {spell.castingTime}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {spell.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Spell Details Dialog */}
        <Dialog open={!!viewSpellDialog} onOpenChange={() => setViewSpellDialog(null)}>
          <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl">
            {viewSpellDialog && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-white flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    {viewSpellDialog.name}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge className="bg-purple-500/20 text-purple-300">
                      Level {viewSpellDialog.level}
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      {viewSpellDialog.school}
                    </Badge>
                  </div>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">School</div>
                      <div className="text-white">{viewSpellDialog.school}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">Casting Time</div>
                      <div className="text-white">{viewSpellDialog.castingTime}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">Range</div>
                      <div className="text-white">{viewSpellDialog.range}</div>
                    </div>
                    {viewSpellDialog.target && (
                      <div className="space-y-1">
                        <div className="text-xs text-slate-400">Target</div>
                        <div className="text-white">{viewSpellDialog.target}</div>
                      </div>
                    )}
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">Duration</div>
                      <div className="text-white">{viewSpellDialog.duration}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">Saving Throw</div>
                      <div className="text-white">{viewSpellDialog.savingThrow}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-slate-400">Spell Resistance</div>
                      <div className="text-white">{viewSpellDialog.spellResistance ? 'Yes' : 'No'}</div>
                    </div>
                  </div>
                  <div className="border-t border-slate-700 pt-4">
                    <div className="text-sm text-slate-300 leading-relaxed">
                      {viewSpellDialog.description}
                    </div>
                  </div>
                  {viewSpellDialog.classes && viewSpellDialog.classes.length > 0 && (
                    <div className="border-t border-slate-700 pt-4">
                      <div className="text-xs text-cyan-400 mb-2">Available to Classes:</div>
                      <div className="flex flex-wrap gap-1">
                        {viewSpellDialog.classes.map(cls => (
                          <Badge key={cls} variant="outline" className="text-xs capitalize border-cyan-500/50 text-cyan-300">
                            {cls}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <DialogFooter>
                  {knownSpells.includes(viewSpellDialog.id) ? (
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        toggleSpell(viewSpellDialog.id);
                        setViewSpellDialog(null);
                      }}
                      className="bg-red-500/20 border-red-500/50 text-red-300 hover:bg-red-500/30"
                    >
                      Remove Spell
                    </Button>
                  ) : canLearnSpell(viewSpellDialog) || !isSpellcaster ? (
                    <Button 
                      onClick={() => {
                        toggleSpell(viewSpellDialog.id);
                        setViewSpellDialog(null);
                      }}
                      className="bg-purple-500 hover:bg-purple-600"
                    >
                      Learn Spell
                    </Button>
                  ) : (
                    <Button variant="outline" disabled className="opacity-50">
                      Spell Limit Reached
                    </Button>
                  )}
                </DialogFooter>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
}