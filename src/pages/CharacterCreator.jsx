import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  listSavedCharacters,
  loadSavedCharacter,
  upsertSavedCharacter,
  deleteSavedCharacter,
} from "@/storage/characterStorage";

import { useMutation, useQuery } from '@tanstack/react-query';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
        ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Save, Sparkles, 
        User, Users, Palette, Sword, Swords, Brain, BookOpen, FileText, Shield, ScrollText, ArrowUp, Edit2,
        Coins, Plus, Minus, Upload, Download, FolderOpen, Trash2, HelpCircle, Heart, Target, Info
      } from 'lucide-react';

import RaceSelector from '@/components/character/RaceSelector';
import ThemeSelector from '@/components/character/ThemeSelector';
import ClassSelector from '@/components/character/ClassSelector';
import AbilityScoreAllocator from '@/components/character/AbilityScoreAllocator';
import SkillAllocator from '@/components/character/SkillAllocator';
import ArmorSelector from '@/components/character/ArmorSelector';
import WeaponSelector from '@/components/character/WeaponSelector';
import CharacterSheet from '@/components/character/CharacterSheet';
import SpellSelector from '@/components/character/SpellSelector';
import FeatSelector from '@/components/character/FeatSelector';
import LevelUpManager from '@/components/character/LevelUpManager';
import LanguageSelector from '@/components/character/LanguageSelector';
import { DEITIES } from '@/components/character/deitiesData';
import { SYSTEMS } from '@/components/character/systemsData';
import { 
  CLASSES,
  calculateModifier, 
  getRaceById, 
  getClassById, 
  getThemeById,
  mapRaceNameToId,
  mapClassNameToId,
  mapThemeNameToId,
  getTotalLevel,
  formatClassLevels,
  calculateBAB,
  calculateSavingThrows,
  calculateHP,
  calculateStamina,
  calculateResolve
} from '@/components/character/starfinderData';
import { ARMOR, WEAPONS } from '@/components/character/equipmentData';
import { getAllSearchableItems, SHIELDS } from '@/components/character/allEquipmentData';

const CREATION_STEPS = [
  { id: 'name', label: 'Name', icon: User },
  { id: 'race', label: 'Race', icon: Users },
  { id: 'theme', label: 'Theme', icon: Palette },
  { id: 'class', label: 'Class', icon: Sword },
  { id: 'abilities', label: 'Abilities', icon: Brain },
  { id: 'skills', label: 'Skills', icon: BookOpen },
  { id: 'feats', label: 'Feats', icon: Sparkles },
  { id: 'languages', label: 'Languages', icon: BookOpen },
];

export default function CharacterCreator() {
  const [mainTab, setMainTab] = useState('creation');
  const [currentStep, setCurrentStep] = useState(0);
  const [level1Confirmed, setLevel1Confirmed] = useState(false);
  const [equipmentDialogOpen, setEquipmentDialogOpen] = useState(false);
  const [loadDialogOpen, setLoadDialogOpen] = useState(false);
  const [loadTab, setLoadTab] = useState('saved');
  const [groupLootDialogOpen, setGroupLootDialogOpen] = useState(false);
  const [groupLootSearch, setGroupLootSearch] = useState('');
  const [helpDialogOpen, setHelpDialogOpen] = useState(false);
  const [stepInfoOpen, setStepInfoOpen] = useState(true);
  const [cart, setCart] = useState({});
  const [customItem, setCustomItem] = useState({ 
    type: 'item', // 'armor', 'weapon', 'item'
    name: '', 
    price: 0, 
    bulk: 0, 
    description: '',
    // Armor fields
    armorType: 'light',
    eacBonus: 0,
    kacBonus: 0,
    maxDexBonus: null,
    armorCheckPenalty: 0,
    speedAdjustment: 0,
    // Weapon fields
    weaponType: 'melee',
    weaponSubtype: 'basic_melee',
    damage: '1d4',
    range: null,
    critical: '—',
    capacity: null,
    usage: null,
    special: ''
  });
  const [character, setCharacter] = useState({
    name: '',
    age: '',
    gender: '',
    homeworld: null,
    customHomeworldName: '',
    customHomeworld: '',
    deity: null,
    customDeityName: '',
    customDeity: '',
    alignment: '',
    playerName: '',
    race: null,
    subrace: null,
    theme: null,
    selectedClass: null, // UI helper - represents classes[0]
    classes: [], // Array of { classId, level }
    abilityScores: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10
    },
    abilityScoresConfirmed: false,
    skills: {},
    armor: null,
    armorDonned: true,
    equippedShield: null,
    weapons: [],
    ownedArmor: [], // Armor and shields in inventory (not equipped)
    humanBonus: null,
    themelessBonus: null,
    knownSpells: [],
    feats: [],
    languages: [],
    credits: 1000,
    customItems: [],
    notes: '',
    partyCharacters: [],
    groupLoot: {
      credits: 0,
      items: []
    },
    currentHP: null,
    currentSP: null,
    currentRP: null,
    activeConditions: []
  });


  // Save State
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync selectedClass with classes array
  useEffect(() => {
    if (character.selectedClass) {
      const newClasses = [{ classId: character.selectedClass.id, level: 1 }];
      setCharacter(prev => ({
        ...prev,
        classes: newClasses
      }));
    }
  }, [character.selectedClass]);

  const {
  data: savedCharacters = [],
  refetch: refetchCharacters,
} = useQuery({
  queryKey: ['local-characters'],
  queryFn: () => listSavedCharacters(),
});
  
  // Check if character creation is complete
  const isCharacterComplete = () => {
    return character.name && character.race && character.theme && character.selectedClass;
  };

  const isLevel1Complete = () => {
    return isCharacterComplete() && getTotalLevel(character.classes) === 1;
  };
  
  // Auto-navigate to creation if character not complete
  useEffect(() => {
    if (!isCharacterComplete() && mainTab !== 'creation') {
      setMainTab('creation');
    }
  }, []);

  const updateCharacter = (key, value) => {
    setCharacter(prev => ({ ...prev, [key]: value }));
  };

  const calculateTotalCost = () => {
    let total = 0;
    Object.entries(cart).forEach(([itemId, quantity]) => {
      const item = [...ARMOR, ...WEAPONS.melee, ...WEAPONS.ranged, ...SHIELDS].find(i => i.id === itemId);
      if (item && quantity > 0) {
        total += (item.price || 0) * quantity;
      }
    });
    if (customItem.name) {
      total += customItem.price || 0;
    }
    return total;
  };

  const updateCartQuantity = (itemId, delta) => {
    setCart(prev => {
      const newQuantity = (prev[itemId] || 0) + delta;
      if (newQuantity <= 0) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: newQuantity };
    });
  };

  const handleBuyEquipment = () => {
    const cost = calculateTotalCost();
    if (character.credits >= cost) {
      const newOwnedArmor = [...(character.ownedArmor || [])];
      const newWeapons = [...(Array.isArray(character.weapons) ? character.weapons : [])];
      const newCustomItems = [...(character.customItems || [])];
      
      Object.entries(cart).forEach(([itemId, quantity]) => {
        const armor = ARMOR.find(a => a.id === itemId);
        const shield = SHIELDS.find(s => s.id === itemId);
        const weapon = [...WEAPONS.melee, ...WEAPONS.ranged].find(w => w.id === itemId);
        const item = getAllSearchableItems().find(i => i.id === itemId);
        
        for (let i = 0; i < quantity; i++) {
          if (armor) {
            newOwnedArmor.push(armor);
          } else if (shield) {
            newOwnedArmor.push({ ...shield, isShield: true });
          } else if (weapon) {
            newWeapons.push(weapon);
          } else if (item) {
            newCustomItems.push({
              name: item.name,
              price: item.price || 0,
              bulk: item.bulk || 0,
              description: item.category || ''
            });
          }
        }
      });
      
      if (newOwnedArmor.length > (character.ownedArmor?.length || 0)) {
        updateCharacter('ownedArmor', newOwnedArmor);
      }
      if (newWeapons.length > character.weapons.length) {
        updateCharacter('weapons', newWeapons);
      }
      if (newCustomItems.length > (character.customItems?.length || 0)) {
        updateCharacter('customItems', newCustomItems);
      }
      
      if (customItem.name) {
        if (customItem.type === 'armor') {
          updateCharacter('ownedArmor', [...newOwnedArmor, {
            id: `custom_${Date.now()}`,
            name: customItem.name,
            type: customItem.armorType,
            eacBonus: customItem.eacBonus,
            kacBonus: customItem.kacBonus,
            maxDexBonus: customItem.maxDexBonus,
            armorCheckPenalty: customItem.armorCheckPenalty,
            speedAdjustment: customItem.speedAdjustment,
            bulk: customItem.bulk,
            price: customItem.price,
            level: 1
          }]);
        } else if (customItem.type === 'weapon') {
          updateCharacter('weapons', [...newWeapons, {
            id: `custom_${Date.now()}`,
            name: customItem.name,
            type: customItem.weaponType,
            subtype: customItem.weaponSubtype,
            damage: customItem.damage,
            range: customItem.range,
            critical: customItem.critical,
            capacity: customItem.capacity,
            usage: customItem.usage,
            bulk: customItem.bulk,
            special: customItem.special,
            price: customItem.price,
            level: 1
          }]);
        } else {
          updateCharacter('customItems', [...(character.customItems || []), customItem]);
        }
      }
      
      updateCharacter('credits', character.credits - cost);
      setCart({});
      setCustomItem({ type: 'item', name: '', price: 0, bulk: 0, description: '', armorType: 'light', eacBonus: 0, kacBonus: 0, maxDexBonus: null, armorCheckPenalty: 0, speedAdjustment: 0, weaponType: 'melee', weaponSubtype: 'basic_melee', damage: '1d4', range: null, critical: '—', capacity: null, usage: null, special: '' });
      setEquipmentDialogOpen(false);
    }
  };

  const handleAddEquipment = () => {
    const newOwnedArmor = [...(character.ownedArmor || [])];
    const newWeapons = [...character.weapons];
    const newCustomItems = [...(character.customItems || [])];
    
    Object.entries(cart).forEach(([itemId, quantity]) => {
      const armor = ARMOR.find(a => a.id === itemId);
      const shield = SHIELDS.find(s => s.id === itemId);
      const weapon = [...WEAPONS.melee, ...WEAPONS.ranged].find(w => w.id === itemId);
      const item = getAllSearchableItems().find(i => i.id === itemId);
      
      for (let i = 0; i < quantity; i++) {
        if (armor) {
          newOwnedArmor.push(armor);
        } else if (shield) {
          newOwnedArmor.push({ ...shield, isShield: true });
        } else if (weapon) {
          newWeapons.push(weapon);
        } else if (item) {
          newCustomItems.push({
            name: item.name,
            price: item.price || 0,
            bulk: item.bulk || 0,
            description: item.category || ''
          });
        }
      }
    });
    
    if (newOwnedArmor.length > (character.ownedArmor?.length || 0)) {
      updateCharacter('ownedArmor', newOwnedArmor);
    }
    if (newWeapons.length > character.weapons.length) {
      updateCharacter('weapons', newWeapons);
    }
    if (newCustomItems.length > (character.customItems?.length || 0)) {
      updateCharacter('customItems', newCustomItems);
    }
    
    if (customItem.name) {
      if (customItem.type === 'armor') {
        updateCharacter('ownedArmor', [...newOwnedArmor, {
          id: `custom_${Date.now()}`,
          name: customItem.name,
          type: customItem.armorType,
          eacBonus: customItem.eacBonus,
          kacBonus: customItem.kacBonus,
          maxDexBonus: customItem.maxDexBonus,
          armorCheckPenalty: customItem.armorCheckPenalty,
          speedAdjustment: customItem.speedAdjustment,
          bulk: customItem.bulk,
          price: customItem.price,
          level: 1
        }]);
      } else if (customItem.type === 'weapon') {
        updateCharacter('weapons', [...newWeapons, {
          id: `custom_${Date.now()}`,
          name: customItem.name,
          type: customItem.weaponType,
          subtype: customItem.weaponSubtype,
          damage: customItem.damage,
          range: customItem.range,
          critical: customItem.critical,
          capacity: customItem.capacity,
          usage: customItem.usage,
          bulk: customItem.bulk,
          special: customItem.special,
          price: customItem.price,
          level: 1
        }]);
      } else {
        updateCharacter('customItems', [...(character.customItems || []), customItem]);
      }
    }
    
    setCart({});
    setCustomItem({ type: 'item', name: '', price: 0, bulk: 0, description: '', armorType: 'light', eacBonus: 0, kacBonus: 0, maxDexBonus: null, armorCheckPenalty: 0, speedAdjustment: 0, weaponType: 'melee', weaponSubtype: 'basic_melee', damage: '1d4', range: null, critical: '—', capacity: null, usage: null, special: '' });
    setEquipmentDialogOpen(false);
  };

  const isStepValid = (stepId) => {
    switch (stepId) {
      case 'name':
        return character.name.trim().length > 0;
      case 'race':
        if (character.race?.subraces) {
          return character.subrace !== null;
        }
        return character.race !== null;
      case 'theme':
        return character.theme !== null;
      case 'class':
        return character.selectedClass !== null;
      case 'abilities':
        return true;
      case 'skills':
        return true;
      default:
        return true;
    }
  };

  const canNavigateToStep = (stepIndex) => {
    // Can always go back to any previous step
    if (stepIndex <= currentStep) return true;
    
    // Can skip ahead if jumping to any step
    return true;
  };

  const nextStep = () => {
    if (currentStep < CREATION_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

const handleSave = async () => {
  try {
    const saved = upsertSavedCharacter(character);

    // Only merge in metadata — do NOT overwrite the whole character state
    setCharacter(prev => ({
      ...prev,
      id: saved.id,
      updatedAt: saved.updatedAt,
      name: saved.name ?? prev.name,
    }));

    refetchCharacters(); // refresh the list in the Load dialog
  } catch (e) {
    console.error(e);
    alert('Failed to save character locally.');
  }
};

  const handleLoadCharacter = (savedChar) => {
    const race = getRaceById(savedChar.raceId);
    const subrace = savedChar.subraceId ? race?.subraces?.find(s => s.id === savedChar.subraceId) : null;
    const theme = getThemeById(savedChar.themeId);
    const selectedClass = savedChar.classes?.[0] ? getClassById(savedChar.classes[0].classId) : null;
    const equippedShield = savedChar.equippedShieldId ? SHIELDS.find(s => s.id === savedChar.equippedShieldId) : null;

    setCharacter({
      id: savedChar.id,
      name: savedChar.name,
      age: savedChar.age || '',
      gender: savedChar.gender || '',
      homeworld: savedChar.homeworld || null,
      customHomeworldName: savedChar.customHomeworldName || '',
      customHomeworld: savedChar.customHomeworld || '',
      deity: savedChar.deity || null,
      customDeityName: savedChar.customDeityName || '',
      customDeity: savedChar.customDeity || '',
      alignment: savedChar.alignment || '',
      playerName: savedChar.playerName || '',
      race: race,
      subrace: subrace,
      theme: theme,
      selectedClass: selectedClass,
      classes: savedChar.classes || [],
      abilityScores: savedChar.ability_scores || {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      },
      abilityScoresConfirmed: true,
      skills: savedChar.skills || {},
      armor: savedChar.armorId ? ARMOR.find(a => a.id === savedChar.armorId) : null,
      armorDonned: savedChar.armorDonned !== false,
      equippedShield: equippedShield,
      weapons: savedChar.weapons?.map(w => {
        const melee = WEAPONS.melee.find(mw => mw.id === w.id);
        const ranged = WEAPONS.ranged.find(rw => rw.id === w.id);
        return melee || ranged;
      }).filter(Boolean) || [],
      ownedArmor: savedChar.ownedArmor || [],
      humanBonus: savedChar.humanBonus,
      themelessBonus: savedChar.themelessBonus,
      knownSpells: savedChar.knownSpells || [],
      feats: savedChar.feats || [],
      languages: savedChar.languages || [],
      credits: savedChar.credits || 1000,
      customItems: savedChar.customItems || [],
      notes: savedChar.notes || '',
      partyCharacters: savedChar.partyCharacters || [],
      groupLoot: savedChar.groupLoot || { credits: 0, items: [] },
      currentHP: savedChar.currentHP,
      currentSP: savedChar.currentSP,
      currentRP: savedChar.currentRP,
      activeConditions: savedChar.activeConditions || []
    });

    if (getTotalLevel(savedChar.classes) >= 1) {
      setLevel1Confirmed(true);
    }

    setLoadDialogOpen(false);
    setMainTab('sheet');
  };

  const handleExportCharacter = () => {
    const dataStr = JSON.stringify(character, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character.name || 'character'}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleImportCharacter = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        setCharacter(imported);
        if (getTotalLevel(imported.classes) >= 1) {
          setLevel1Confirmed(true);
        }
        setLoadDialogOpen(false);
        setMainTab('sheet');
      } catch (error) {
        alert('Failed to import character file');
      }
    };
    reader.readAsText(file);
  };

  const progress = ((currentStep + 1) / CREATION_STEPS.length) * 100;

  const getStepInfo = (stepId) => {
    const infoMap = {
      'name': {
        title: 'Character Profile',
        description: 'Roleplay relevant information about your character, including their background, identity, and beliefs.'
      },
      'race': {
        title: 'Race',
        description: 'Your race will determine a number of characteristics specific to your character, from how they look to speed to unique in or out of combat abilities. It also affects your starting ability scores.'
      },
      'theme': {
        title: 'Theme',
        description: 'This is the thematic concept or background for your character. The theme you choose will typically have a bonus to one ability score, and then some skill or other feature benefits.'
      },
      'class': {
        title: 'Class',
        description: 'This is your most important choice. Your class determines how your character plays, what ability scores matter to them, and which skills they are best at. Choosing one class over another isn\'t going to lock you into a specific roleplay style, but it may make fitting a certain character idea easier or more difficult.'
      },
      'abilities': {
        title: 'Ability Scores',
        description: 'Your ability scores reflect what your character is skilled or weak at. These six core attributes determine your effectiveness in combat, skills, and special abilities. You\'ll allocate points using a point-buy system, with additional modifiers from your race and theme.'
      },
      'skills': {
        title: 'Skills',
        description: 'Skills represent your character\'s training and expertise in various areas. You allocate skill ranks based on your class and Intelligence modifier. Class skills (those your class specializes in) get a +3 bonus when you have at least one rank in them. Some skills require training (at least 1 rank) to use.'
      },
      'feats': {
        title: 'Feats',
        description: 'Feats are special abilities and combat techniques your character learns. You gain feats at odd levels (1st, 3rd, 5th, etc.). Each feat provides unique bonuses or unlocks new tactical options in combat or exploration.'
      },
      'languages': {
        title: 'Languages',
        description: 'Languages allow your character to communicate with different species and cultures. Your race grants starting languages, and your Intelligence modifier determines how many additional languages you can learn.'
      }
    };
    return infoMap[stepId] || { title: '', description: '' };
  };

  const renderCreationStep = () => {
    switch (CREATION_STEPS[currentStep].id) {
      case 'name':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-light text-white mb-2">Character Details</h2>
              <p className="text-cyan-300/60 text-sm">Define your character's identity</p>
            </div>
            <div className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300 text-sm mb-2 block">Character Name *</Label>
                <Input
                  id="name"
                  value={character.name}
                  onChange={(e) => updateCharacter('name', e.target.value)}
                  placeholder="Enter character name..."
                  className="bg-slate-800/50 border-slate-600 text-white text-lg h-12"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age" className="text-slate-300 text-sm mb-2 block">Age</Label>
                  <Input
                    id="age"
                    value={character.age}
                    onChange={(e) => updateCharacter('age', e.target.value)}
                    placeholder="Age..."
                    className="bg-slate-800/50 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="gender" className="text-slate-300 text-sm mb-2 block">Gender</Label>
                  <Input
                    id="gender"
                    value={character.gender}
                    onChange={(e) => updateCharacter('gender', e.target.value)}
                    placeholder="Gender..."
                    className="bg-slate-800/50 border-slate-600 text-white"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="alignment" className="text-slate-300 text-sm mb-2 block">Alignment</Label>
                <select
                  id="alignment"
                  value={character.alignment}
                  onChange={(e) => updateCharacter('alignment', e.target.value)}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md h-10 px-3"
                >
                  <option value="">Select...</option>
                  <option value="LG">Lawful Good</option>
                  <option value="NG">Neutral Good</option>
                  <option value="CG">Chaotic Good</option>
                  <option value="LN">Lawful Neutral</option>
                  <option value="N">True Neutral</option>
                  <option value="CN">Chaotic Neutral</option>
                  <option value="LE">Lawful Evil</option>
                  <option value="NE">Neutral Evil</option>
                  <option value="CE">Chaotic Evil</option>
                </select>
              </div>

              <div>
                <Label htmlFor="homeworld" className="text-slate-300 text-sm mb-2 block">Homeworld</Label>
                <select
                  id="homeworld"
                  value={character.homeworld?.id || 'custom'}
                  onChange={(e) => {
                    if (e.target.value === 'custom') {
                      updateCharacter('homeworld', null);
                    } else {
                      const world = SYSTEMS.find(s => s.id === e.target.value);
                      updateCharacter('homeworld', world);
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md h-10 px-3"
                >
                  <option value="">Select...</option>
                  {SYSTEMS.map(system => (
                    <option key={system.id} value={system.id}>{system.name}</option>
                  ))}
                  <option value="custom">Custom...</option>
                </select>
                {character.homeworld ? (
                  <div className="mt-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/50">
                    <div className="text-sm font-medium text-cyan-300 mb-1">{character.homeworld.name}</div>
                    <div className="text-xs text-slate-400 mb-2">{character.homeworld.location}</div>
                    <div className="text-xs text-slate-300">{character.homeworld.description}</div>
                  </div>
                ) : character.homeworld === null && (
                  <div className="mt-3 space-y-3">
                    <div>
                      <Label htmlFor="customHomeworldName" className="text-slate-300 text-xs mb-1 block">Homeworld Name</Label>
                      <Input
                        id="customHomeworldName"
                        value={character.customHomeworldName}
                        onChange={(e) => updateCharacter('customHomeworldName', e.target.value)}
                        placeholder="e.g., Bortan II"
                        className="bg-slate-800/50 border-slate-600 text-white text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="customHomeworldDesc" className="text-slate-300 text-xs mb-1 block">Description</Label>
                      <textarea
                        id="customHomeworldDesc"
                        value={character.customHomeworld}
                        onChange={(e) => updateCharacter('customHomeworld', e.target.value)}
                        placeholder="Describe your custom homeworld..."
                        className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md p-3 h-24 text-sm resize-none"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <Label htmlFor="deity" className="text-slate-300 text-sm mb-2 block">Deity</Label>
                <select
                  id="deity"
                  value={
                    character.deity === 'none' ? 'none' :
                    character.deity?.id ? character.deity.id :
                    character.deity === null ? 'custom' :
                    ''
                  }
                  onChange={(e) => {
                    if (e.target.value === 'none') {
                      updateCharacter('deity', 'none');
                      updateCharacter('customDeityName', '');
                      updateCharacter('customDeity', '');
                    } else if (e.target.value === 'custom') {
                      updateCharacter('deity', null);
                    } else {
                      const deity = DEITIES.find(d => d.id === e.target.value);
                      updateCharacter('deity', deity);
                      updateCharacter('customDeityName', '');
                      updateCharacter('customDeity', '');
                    }
                  }}
                  className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md h-10 px-3"
                >
                  <option value="">Select...</option>
                  <option value="none">None</option>
                  {DEITIES.map(deity => (
                    <option key={deity.id} value={deity.id}>{deity.name} ({deity.alignment})</option>
                  ))}
                  <option value="custom">Custom...</option>
                </select>
                {character.deity === 'none' ? (
                  <div className="mt-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/50">
                    <p className="text-sm text-slate-400 italic">Character has no deity</p>
                  </div>
                ) : character.deity && typeof character.deity === 'object' ? (
                  <div className="mt-3 p-3 bg-slate-700/30 rounded-lg border border-slate-600/50">
                    <div className="flex justify-between items-start mb-2">
                      <div className="text-sm font-medium text-cyan-300">{character.deity.name}</div>
                      <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/50 text-xs">
                        {character.deity.alignment}
                      </Badge>
                    </div>
                    <div className="text-xs text-amber-400 mb-2">{character.deity.portfolios.join(', ')}</div>
                    <div className="text-xs text-slate-300 mb-2">{character.deity.description}</div>
                    <div className="text-xs text-slate-400">Domains: {character.deity.domains.join(', ')}</div>
                  </div>
                ) : character.deity === null && (
                  <div className="mt-3 space-y-3">
                    <div>
                      <Label htmlFor="customDeityName" className="text-slate-300 text-xs mb-1 block">Deity Name</Label>
                      <Input
                        id="customDeityName"
                        value={character.customDeityName}
                        onChange={(e) => updateCharacter('customDeityName', e.target.value)}
                        placeholder="e.g., The Ancient One"
                        className="bg-slate-800/50 border-slate-600 text-white text-sm"
                      />
                    </div>
                    <div>
                      <Label htmlFor="customDeityDesc" className="text-slate-300 text-xs mb-1 block">Description</Label>
                      <textarea
                        id="customDeityDesc"
                        value={character.customDeity}
                        onChange={(e) => updateCharacter('customDeity', e.target.value)}
                        placeholder="Describe your custom deity..."
                        className="w-full bg-slate-800/50 border border-slate-600 text-white rounded-md p-3 h-24 text-sm resize-none"
                      />
                    </div>
                  </div>
                )}
                    </div>

                    <div className="pt-4 border-t border-slate-700/50">
                    <Label htmlFor="playerName" className="text-slate-300 text-sm mb-2 block">Player Name</Label>
                    <Input
                    id="playerName"
                    value={character.playerName}
                    onChange={(e) => updateCharacter('playerName', e.target.value)}
                    placeholder="Your name..."
                    className="bg-slate-800/50 border-slate-600 text-white"
                    />
                    </div>
                    </div>
                    </motion.div>
                    );
      
      case 'race':
        return (
          <RaceSelector
            selectedRace={character.race}
            onSelect={(race) => {
              updateCharacter('race', race);
              if (!race.subraces) {
                updateCharacter('subrace', null);
              }
            }}
            selectedSubrace={character.subrace}
            onSubraceSelect={(subrace) => updateCharacter('subrace', subrace)}
          />
        );
      
      case 'theme':
        return (
          <ThemeSelector
            selectedTheme={character.theme}
            onSelect={(theme) => updateCharacter('theme', theme)}
          />
        );
      
      case 'class':
        return (
          <ClassSelector
            selectedClass={character.selectedClass}
            onSelect={(cls) => {
              // Reset class-dependent data when class changes
              const isClassChange = character.selectedClass && character.selectedClass.id !== cls.id;
              
              if (isClassChange) {
                // Atomic state update to ensure consistency
                setCharacter(prev => ({
                  ...prev,
                  selectedClass: cls,
                  skills: {},
                  feats: [],
                  languages: [],
                  knownSpells: [],
                  spellAttacks: []
                }));
              } else {
                updateCharacter('selectedClass', cls);
              }
            }}
          />
        );
      
      case 'abilities':
        return (
          <AbilityScoreAllocator
            abilityScores={character.abilityScores}
            onScoresChange={(scores) => updateCharacter('abilityScores', scores)}
            race={character.race}
            subrace={character.subrace}
            theme={character.theme}
            selectedClass={character.selectedClass}
            humanBonus={character.humanBonus}
            onHumanBonusChange={(bonus) => updateCharacter('humanBonus', bonus)}
            themelessBonus={character.themelessBonus}
            onThemelessBonusChange={(bonus) => updateCharacter('themelessBonus', bonus)}
            isConfirmed={character.abilityScoresConfirmed}
            onConfirm={() => updateCharacter('abilityScoresConfirmed', true)}
            onEdit={() => updateCharacter('abilityScoresConfirmed', false)}
          />
        );
      
      case 'skills':
        return (
          <SkillAllocator
            skills={character.skills}
            onSkillsChange={(skills) => updateCharacter('skills', skills)}
            selectedClass={CLASSES.find(c => c.id === character.selectedClass?.id) || null}
            abilityScores={character.abilityScores}
            theme={character.theme}
            totalLevel={Math.max(1, getTotalLevel(character.classes))}
          />
        );

      case 'feats':
        return (
          <FeatSelector
            classes={character.classes.length > 0 ? character.classes : [{ classId: character.selectedClass?.id, level: 1 }]}
            selectedFeats={character.feats}
            onFeatsChange={(feats) => updateCharacter('feats', feats)}
            abilityScores={character.abilityScores}
          />
        );

      case 'languages':
        return (
          <LanguageSelector
            selectedLanguages={character.languages}
            onLanguagesChange={(languages) => updateCharacter('languages', languages)}
            race={character.race}
            abilityScores={character.abilityScores}
            homeworld={character.homeworld}
          />
        );

      default:
        return null;
      }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Starfield Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent" />
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-wide">
              <span className="text-cyan-400">STARFINDER</span> Character Creator
            </h1>
            <p className="text-slate-400">Build your 1st Edition adventurer</p>
          </div>
          <div className="flex gap-3">
            {character.name && (
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-cyan-500 hover:bg-cyan-600"
              >
                {isSaving ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Save className="w-4 h-4 mr-2" />
                    </motion.div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 mr-2" />
                    Save
                  </>
                )}
              </Button>
            )}
            <Dialog open={loadDialogOpen} onOpenChange={setLoadDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
                >
                  <FolderOpen className="w-4 h-4 mr-2" />
                  Load/Import
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                <DialogHeader>
                  <DialogTitle className="text-white text-2xl">Load or Import Character</DialogTitle>
                </DialogHeader>

                <Tabs value={loadTab} onValueChange={setLoadTab} className="w-full mt-4">
                  <TabsList className="grid w-full grid-cols-2 bg-slate-800/50">
                    <TabsTrigger value="saved" className="data-[state=active]:bg-cyan-500">
                      <Save className="w-4 h-4 mr-2" />
                      Saved Characters
                    </TabsTrigger>
                    <TabsTrigger value="import" className="data-[state=active]:bg-cyan-500">
                      <Upload className="w-4 h-4 mr-2" />
                      Import from File
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="saved" className="mt-4">
                    {savedCharacters.length > 0 ? (
                      <div className="space-y-3 max-h-[500px] overflow-y-auto">
                        {savedCharacters.map((char) => (
                          <Card key={char.id} className="bg-slate-800/50 border-slate-700">
                            <CardContent className="pt-6">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <h3 className="text-white font-medium text-lg mb-2">{char.name}</h3>
                                  <div className="text-sm text-slate-400 space-y-1">
                                    <p>Level {char.level} {char.race} {char.class}</p>
                                    <p>{char.theme}</p>
                                    <p className="text-xs text-slate-500">
                                      Last updated: {char.updatedAt ? new Date(char.updatedAt).toLocaleDateString() : '—'}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button
                                    onClick={() => handleLoadCharacter(char)}
                                    className="bg-cyan-500 hover:bg-cyan-600"
                                  >
                                    Load
                                  </Button>
                                    <Button
                                      variant="outline"
                                      size="icon"
                                      onClick={() => {
                                        if (confirm('Delete this character?')) {
                                          try {
                                            deleteSavedCharacter(char.id);
                                            refetchCharacters();
                                          } catch (e) {
                                            console.error(e);
                                            alert('Failed to delete character locally.');
                                          }
                                        }
                                      }}
                                      className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                                    >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Save className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                        <h3 className="text-xl text-slate-400 mb-2">No Saved Characters</h3>
                        <p className="text-slate-500">Create a character and save it to see it here</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="import" className="mt-4">
                    <div className="space-y-6">
                      <div className="text-center py-8 border-2 border-dashed border-slate-600 rounded-lg">
                        <Upload className="w-12 h-12 text-slate-500 mx-auto mb-4" />
                        <h3 className="text-lg text-white mb-2">Import Character from File</h3>
                        <p className="text-slate-400 text-sm mb-4">Upload a previously exported character JSON file</p>
                        <input
                          type="file"
                          accept=".json"
                          onChange={handleImportCharacter}
                          className="hidden"
                          id="import-file"
                        />
                        <label htmlFor="import-file">
                          <Button asChild className="bg-cyan-500 hover:bg-cyan-600 cursor-pointer">
                            <span>
                              <Upload className="w-4 h-4 mr-2" />
                              Choose File
                            </span>
                          </Button>
                        </label>
                      </div>

                      {character.name && (
                        <div className="pt-6 border-t border-slate-700">
                          <h3 className="text-lg text-white mb-3">Export Current Character</h3>
                          <p className="text-slate-400 text-sm mb-4">Download your character as a JSON file for backup or sharing</p>
                          <Button
                            onClick={handleExportCharacter}
                            variant="outline"
                            className="border-green-500/50 text-green-400 hover:bg-green-500/20"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Export {character.name}
                          </Button>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => setHelpDialogOpen(true)}
              variant="outline"
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Help
            </Button>

            <Button
              onClick={() => setMainTab('levelup')}
              className="bg-purple-500 hover:bg-purple-600"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Level Up
            </Button>
          </div>
        </motion.div>

        {/* Help Dialog */}
        <Dialog open={helpDialogOpen} onOpenChange={setHelpDialogOpen}>
          <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-slate-900 border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-white text-2xl flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-cyan-400" />
                Starfinder Character Guide
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 text-slate-300">
              {/* Armor Class Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Armor Class (AC)
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">EAC (Energy Armor Class):</strong> Your defense against energy attacks (lasers, plasma, etc.). EAC = 10 + armor bonus + Dex modifier.</p>
                  <p><strong className="text-white">KAC (Kinetic Armor Class):</strong> Your defense against physical attacks (bullets, swords, etc.). KAC = 10 + armor bonus + Dex modifier.</p>
                  <p><strong className="text-white">vs CM (Combat Maneuver):</strong> Your defense against special combat maneuvers like grappling or tripping. vs CM = KAC + 8.</p>
                </div>
              </div>

              {/* HP & Stamina Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-red-400" />
                  Hit Points & Stamina
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">Stamina Points (SP):</strong> Temporary durability that represents minor injuries and fatigue. Damage usually goes to SP first. Fully recovered after 10 minutes of rest + 1 Resolve Point.</p>
                  <p><strong className="text-white">Hit Points (HP):</strong> Your actual health. When HP reaches 0, you're dying. HP is harder to heal and represents serious injuries. Equals your race's HP + (class HP per level).</p>
                  <p className="text-amber-300 text-xs italic">Damage order: Temp SP → Regular SP → Temp HP → Regular HP</p>
                </div>
              </div>

              {/* Resolve Points Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-400" />
                  Resolve Points
                </h3>
                <div className="space-y-2 text-sm">
                  <p>Resolve Points represent your character's determination and heroic willpower. You have a limited pool per day.</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-white">Stabilize:</strong> If dying, spend 1 RP to stabilize at 0 HP</li>
                    <li><strong className="text-white">Stay in the Fight:</strong> When reduced to 0 HP, spend 1 RP to stay at 1 HP</li>
                    <li><strong className="text-white">Recover Stamina:</strong> Rest 10 minutes + 1 RP to regain all SP</li>
                    <li><strong className="text-white">Class Features:</strong> Many abilities require spending Resolve Points</li>
                  </ul>
                  <p className="text-amber-300 text-xs italic mt-2">Regain all RP after a full night's rest (8 hours)</p>
                </div>
              </div>

              {/* Ability Scores Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Ability Scores
                </h3>
                <div className="space-y-2 text-sm">
                  <p>Your six ability scores define your character's basic capabilities:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <div><strong className="text-white">STR (Strength):</strong> Physical power, melee damage</div>
                    <div><strong className="text-white">DEX (Dexterity):</strong> Agility, AC, ranged attacks, initiative</div>
                    <div><strong className="text-white">CON (Constitution):</strong> Health, stamina points</div>
                    <div><strong className="text-white">INT (Intelligence):</strong> Logic, skill points, some spells</div>
                    <div><strong className="text-white">WIS (Wisdom):</strong> Awareness, willpower, some spells</div>
                    <div><strong className="text-white">CHA (Charisma):</strong> Personality, some spells</div>
                  </div>
                  <p className="text-amber-300 text-xs italic mt-2">Score 10 = +0 modifier. Every 2 points above/below 10 changes modifier by ±1</p>
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Skills
                </h3>
                <div className="space-y-2 text-sm">
                  <p>Skills represent your training and expertise. Total bonus = Ranks + Ability Modifier + Class Bonus (if class skill).</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-white">Ranks:</strong> Points you invest (max = your level)</li>
                    <li><strong className="text-white">Class Skills:</strong> Get +3 bonus when you have at least 1 rank</li>
                    <li><strong className="text-white">Trained Only:</strong> Some skills require at least 1 rank to use</li>
                  </ul>
                  <p className="text-amber-300 text-xs italic mt-2">You get skill points per level = Class base + INT modifier (min 1)</p>
                </div>
              </div>

              {/* Saving Throws Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Saving Throws</h3>
                <div className="space-y-2 text-sm">
                  <p>Saves help you resist harmful effects. Roll d20 + save bonus vs DC.</p>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    <div><strong className="text-white">Fortitude (Fort):</strong> Resist poison, disease, physical effects. Uses CON modifier.</div>
                    <div><strong className="text-white">Reflex (Ref):</strong> Dodge area attacks, avoid traps. Uses DEX modifier.</div>
                    <div><strong className="text-white">Will:</strong> Resist mental effects, illusions. Uses WIS modifier.</div>
                  </div>
                </div>
              </div>

              {/* Initiative Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Initiative</h3>
                <div className="space-y-2 text-sm">
                  <p>Initiative determines turn order in combat. At the start of combat, everyone rolls d20 + Initiative bonus.</p>
                  <p><strong className="text-white">Initiative = DEX modifier</strong> (plus any bonuses from feats or abilities)</p>
                </div>
              </div>

              {/* Equipment & Proficiency Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Equipment & Proficiency
                </h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">Armor:</strong> Each class is proficient with certain armor types. Wearing non-proficient armor gives -4 penalty to attacks and Str/Dex skill checks.</p>
                  <p><strong className="text-white">Weapons:</strong> Similarly, using non-proficient weapons gives -4 attack penalty.</p>
                  <p><strong className="text-white">Bulk:</strong> Measures weight. Carrying over half your STR = Encumbered. Over your STR = Overburdened (severe penalties).</p>
                  <p className="text-amber-300 text-xs italic mt-2">Check your class proficiencies to know what you can use effectively!</p>
                </div>
              </div>

              {/* Combat Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <Swords className="w-5 h-5" />
                  Combat
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-white mb-1">Attack Rolls:</p>
                    <p className="ml-2">Roll d20 + attack bonus vs target's AC (EAC for energy, KAC for kinetic).</p>
                    <p className="ml-2 text-xs text-slate-400">Melee: d20 + BAB + STR | Ranged: d20 + BAB + DEX</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Damage Types:</p>
                    <ul className="list-disc list-inside ml-2 space-y-1">
                      <li><strong className="text-amber-300">Energy:</strong> Acid, Cold, Electricity, Fire, Sonic - targets EAC</li>
                      <li><strong className="text-green-300">Kinetic:</strong> Bludgeoning, Piercing, Slashing - targets KAC</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Spell Attacks:</p>
                    <p className="ml-2">Attack roll: d20 + BAB + casting ability (INT or WIS)</p>
                    <p className="ml-2">Spell DC: 10 + spell level + casting ability modifier</p>
                  </div>
                </div>
              </div>

              {/* Leveling Up Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                  <ArrowUp className="w-5 h-5" />
                  Leveling Up
                </h3>
                <div className="space-y-2 text-sm">
                  <p>When you gain a level, you get:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>Hit Points (from your class)</li>
                    <li>Stamina Points (class amount + CON modifier)</li>
                    <li>Skill ranks to allocate</li>
                    <li>New class features at certain levels</li>
                    <li>+1 to all ability scores every 5 levels (5th, 10th, 15th, 20th)</li>
                    <li>New feats at odd levels (1st, 3rd, 5th, etc.)</li>
                  </ul>
                </div>
              </div>

              {/* Actions in Combat Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Actions in Combat</h3>
                <div className="space-y-2 text-sm">
                  <p>Each round (6 seconds), you can take:</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li><strong className="text-white">Standard Action:</strong> Attack, cast a spell, use an ability</li>
                    <li><strong className="text-white">Move Action:</strong> Move up to your speed, stand up, draw a weapon</li>
                    <li><strong className="text-white">Swift Action:</strong> Quick actions like changing grips</li>
                    <li><strong className="text-white">Reaction:</strong> Respond to triggers (like attacks of opportunity)</li>
                    <li><strong className="text-white">Full Action:</strong> Uses both standard + move (like full attack or run)</li>
                  </ul>
                </div>
              </div>

              {/* Key Terms Section */}
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Key Terms</h3>
                <div className="space-y-2 text-sm">
                  <p><strong className="text-white">BAB (Base Attack Bonus):</strong> Your combat training, added to attack rolls. Improves with level.</p>
                  <p><strong className="text-white">CR (Credits):</strong> Starfinder currency for buying equipment and services.</p>
                  <p><strong className="text-white">DC (Difficulty Class):</strong> Target number to beat on a d20 roll.</p>
                  <p><strong className="text-white">Class Skills:</strong> Skills your class specializes in - get +3 bonus when trained.</p>
                  <p><strong className="text-white">Feats:</strong> Special abilities and combat techniques you learn as you level up.</p>
                </div>
              </div>

              {/* Getting Started Section */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-lg p-4 border border-cyan-500/30">
                <h3 className="text-lg font-semibold text-cyan-300 mb-3">Getting Started</h3>
                <div className="space-y-2 text-sm">
                  <p>1. <strong className="text-white">Choose your Race</strong> - determines special abilities and stat bonuses</p>
                  <p>2. <strong className="text-white">Pick a Theme</strong> - represents your background and gives skill bonuses</p>
                  <p>3. <strong className="text-white">Select your Class</strong> - your profession and main abilities</p>
                  <p>4. <strong className="text-white">Allocate Ability Scores</strong> - distribute points among your 6 abilities</p>
                  <p>5. <strong className="text-white">Assign Skills</strong> - invest ranks based on class + INT modifier</p>
                  <p>6. <strong className="text-white">Choose Feats</strong> - special abilities (1 at level 1)</p>
                  <p>7. <strong className="text-white">Select Equipment</strong> - armor, weapons, and gear</p>
                  <p className="text-cyan-300 italic mt-3">Tip: Focus on your class's key ability score first!</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Main Tabs */}
        <Tabs value={mainTab} onValueChange={setMainTab} className="w-full">
          <TabsList className={`grid w-full ${level1Confirmed ? 'grid-cols-4' : 'grid-cols-5'} bg-slate-800/50 mb-6`}>
            {!level1Confirmed && (
              <TabsTrigger 
                value="creation" 
                className="data-[state=active]:bg-cyan-500"
              >
                Character Creation
              </TabsTrigger>
            )}
            <TabsTrigger value="sheet" className="data-[state=active]:bg-cyan-500">
              Character Sheet
            </TabsTrigger>
            <TabsTrigger value="equipment" className="data-[state=active]:bg-cyan-500">
              Inventory
            </TabsTrigger>
            <TabsTrigger value="notes" className="data-[state=active]:bg-cyan-500">
              <FileText className="w-4 h-4 mr-2" />
              Notes
            </TabsTrigger>
            <TabsTrigger value="spells" className="data-[state=active]:bg-cyan-500">
              <ScrollText className="w-4 h-4 mr-2" />
              Spells
            </TabsTrigger>
          </TabsList>

          {/* Character Creation Tab */}
          <TabsContent value="creation">
            {level1Confirmed ? (
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-12 text-center">
                <div className="max-w-md mx-auto">
                  <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl text-white mb-4">Level 1 Character Complete!</h3>
                  <p className="text-slate-400 mb-6">
                    Your character is ready to adventure. View your character sheet or level up to continue your journey.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <Button
                      onClick={() => setMainTab('sheet')}
                      className="bg-cyan-500 hover:bg-cyan-600"
                    >
                      View Character Sheet
                    </Button>
                    <Button
                      onClick={() => setMainTab('levelup')}
                      variant="outline"
                      className="border-purple-500/50 text-purple-400 hover:bg-purple-500/20"
                    >
                      <ArrowUp className="w-4 h-4 mr-2" />
                      Level Up
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <Progress value={progress} className="h-2 bg-slate-800" />
                  <div className="flex justify-between mt-4 overflow-x-auto pb-2">
                    {CREATION_STEPS.map((step, index) => {
                      const Icon = step.icon;
                      const isActive = index === currentStep;
                      const isComplete = index < currentStep;

                      return (
                        <button
                          key={step.id}
                          onClick={() => canNavigateToStep(index) && setCurrentStep(index)}
                          className={`
                            flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all min-w-[70px]
                            ${isActive ? 'bg-cyan-500/20 text-cyan-300' : 
                              isComplete ? 'text-green-400 cursor-pointer hover:bg-slate-800/50' : 
                              'text-slate-400 cursor-pointer hover:bg-slate-800/30'}
                          `}
                        >
                          <Icon className={`w-5 h-5 ${isComplete ? 'text-green-400' : ''}`} />
                          <span className="text-xs whitespace-nowrap">{step.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step Info Collapsible */}
                <Collapsible open={stepInfoOpen} onOpenChange={setStepInfoOpen} className="mb-4">
                  <Card className="bg-cyan-900/10 border-cyan-500/30">
                    <CardHeader className="pb-3">
                      <CollapsibleTrigger className="flex items-center justify-between w-full group">
                        <div className="flex items-center gap-2">
                          <Info className="w-5 h-5 text-cyan-400" />
                          <CardTitle className="text-white text-base">
                            {getStepInfo(CREATION_STEPS[currentStep].id).title}
                          </CardTitle>
                        </div>
                        <ChevronRight className={`w-5 h-5 text-cyan-400 transition-transform ${stepInfoOpen ? 'rotate-90' : ''}`} />
                      </CollapsibleTrigger>
                    </CardHeader>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {getStepInfo(CREATION_STEPS[currentStep].id).description}
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 min-h-[500px]">
                  <AnimatePresence mode="wait">
                    {renderCreationStep()}
                  </AnimatePresence>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <Button
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 0}
                    className="bg-slate-800/50 border-slate-600 hover:bg-slate-700 text-white"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>

                  <div className="flex gap-3">
                    {currentStep === CREATION_STEPS.length - 1 && isLevel1Complete() ? (
                      <Button
                        onClick={() => {
                          setLevel1Confirmed(true);
                          setMainTab('sheet');
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white px-8"
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Confirm Level 1 Character
                      </Button>
                    ) : currentStep === CREATION_STEPS.length - 1 ? (
                      <Button
                        onClick={handleSave}
                        disabled={isSaving || !isCharacterComplete()}
                        className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8"
                      >
                        {isSaving ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            >
                              <Sparkles className="w-4 h-4 mr-2" />
                            </motion.div>
                            Saving...
                          </>
                        ) : saveSuccess ? (
                          <>
                            <Sparkles className="w-4 h-4 mr-2" />
                            Character Saved!
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Save Character
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        onClick={nextStep}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </TabsContent>

          {/* Character Sheet Tab */}
          <TabsContent value="sheet">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8">
              <TooltipProvider>
                <CharacterSheet 
                  character={character} 
                  race={character.race}
                  onCharacterUpdate={(updatedChar) => setCharacter(updatedChar)}
                />
              </TooltipProvider>
            </div>
          </TabsContent>

          {/* Inventory Tab */}
          <TabsContent value="equipment">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Credits Tracker */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Coins className="w-6 h-6 text-amber-400" />
                        <div>
                          <Label className="text-slate-400 text-sm">Credits</Label>
                          <Input
                            type="number"
                            value={Number.isFinite(character.credits) ? character.credits : 0}
                            onChange={(e) => {
                              const raw = e.target.value;
                              const next = raw === "" ? 0 : Number(raw);
                              updateCharacter('credits', Number.isFinite(next) ? next : 0);
                            }}
                            className="bg-slate-900 border-slate-600 text-white text-xl font-bold w-32 h-10 mt-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const amount = prompt('Add credits:');
                          if (amount) updateCharacter('credits', character.credits + parseInt(amount));
                        }}
                        className="border-green-500/50 text-green-400 hover:bg-green-500/20 flex-1"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const amount = prompt('Remove credits:');
                          if (amount) updateCharacter('credits', Math.max(0, character.credits - parseInt(amount)));
                        }}
                        className="border-red-500/50 text-red-400 hover:bg-red-500/20 flex-1"
                      >
                        <Minus className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Bulk Calculator */}
                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="pt-6">
                    {(() => {
                      let totalBulk = 0;
                      if (character.armor?.bulk) {
                        const armorBulk = character.armor.bulk;
                        totalBulk += armorBulk === 'L' ? 0.1 : (armorBulk === '—' ? 0 : parseFloat(armorBulk));
                      }
                      (character.weapons || []).forEach(weapon => {
                        const weaponBulk = weapon.bulk;
                        totalBulk += weaponBulk === 'L' ? 0.1 : (weaponBulk === '—' ? 0 : parseFloat(weaponBulk));
                      });
                      
                      const strScore = character.abilityScores?.strength || 10;
                      const maxBulk = strScore;
                      const encumberedThreshold = strScore / 2;
                      const displayBulk = totalBulk % 1 === 0 ? totalBulk : totalBulk.toFixed(1);
                      
                      const isOverburdened = totalBulk > maxBulk;
                      const isEncumbered = totalBulk > encumberedThreshold && !isOverburdened;
                      
                      return (
                        <div className="flex items-center gap-3">
                          <Shield className="w-6 h-6 text-cyan-400" />
                          <div className="flex-1">
                            <Label className="text-slate-400 text-sm">Bulk</Label>
                            <div className="flex items-baseline gap-1 mt-1">
                              <span className={`text-xl font-bold ${isOverburdened ? 'text-red-400' : isEncumbered ? 'text-amber-400' : 'text-white'}`}>
                                {displayBulk}
                              </span>
                              <span className="text-slate-500">/</span>
                              <span className="text-white font-medium">{encumberedThreshold}</span>
                              <span className="text-xs text-slate-500">({maxBulk} overburdened)</span>
                            </div>
                            {isOverburdened && (
                              <Badge className="mt-1 bg-red-500/20 text-red-300 border-red-500/50 text-xs">
                                Overburdened
                              </Badge>
                            )}
                            {isEncumbered && (
                              <Badge className="mt-1 bg-amber-500/20 text-amber-300 border-amber-500/50 text-xs">
                                Encumbered
                              </Badge>
                            )}
                          </div>
                        </div>
                      );
                    })()}
                  </CardContent>
                </Card>
              </div>

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-light text-white">Inventory</h2>
                <Dialog open={equipmentDialogOpen} onOpenChange={(open) => {
                  setEquipmentDialogOpen(open);
                  if (!open) {
                    setCart({});
                    setCustomItem({ type: 'item', name: '', price: 0, bulk: 0, description: '', armorType: 'light', eacBonus: 0, kacBonus: 0, maxDexBonus: null, armorCheckPenalty: 0, speedAdjustment: 0, weaponType: 'melee', weaponSubtype: 'basic_melee', damage: '1d4', range: null, critical: '—', capacity: null, usage: null, special: '' });
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button className="bg-cyan-500 hover:bg-cyan-600">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Buy/Add Equipment
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-slate-900 border-slate-700">
                    <DialogHeader>
                      <DialogTitle className="text-white text-2xl">Buy/Add Equipment</DialogTitle>
                    </DialogHeader>
                    
                    {/* Cost Summary and Actions */}
                    <div className="mt-4 pb-4 border-b border-slate-700">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-slate-400 text-sm">Total Cost</p>
                          <p className="text-white text-2xl font-bold">{calculateTotalCost()} credits</p>
                        </div>
                        <div>
                          <p className="text-slate-400 text-sm">After Purchase</p>
                          <p className={`text-xl font-bold ${character.credits - calculateTotalCost() < 0 ? 'text-red-400' : 'text-green-400'}`}>
                            {character.credits - calculateTotalCost()} credits
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button
                          onClick={handleBuyEquipment}
                          disabled={character.credits < calculateTotalCost() || (Object.keys(cart).length === 0 && !customItem.name)}
                          className="flex-1 bg-green-500 hover:bg-green-600 disabled:opacity-50"
                        >
                          <Coins className="w-4 h-4 mr-2" />
                          Buy ({calculateTotalCost()} credits)
                        </Button>
                        <Button
                          onClick={handleAddEquipment}
                          disabled={Object.keys(cart).length === 0 && !customItem.name}
                          variant="outline"
                          className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add (Free)
                        </Button>
                      </div>
                    </div>

                    <Tabs defaultValue="armor" className="w-full mt-4">
                      <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
                        <TabsTrigger value="armor" className="data-[state=active]:bg-cyan-500">
                          Armor
                        </TabsTrigger>
                        <TabsTrigger value="shields" className="data-[state=active]:bg-cyan-500">
                          Shields
                        </TabsTrigger>
                        <TabsTrigger value="weapons" className="data-[state=active]:bg-cyan-500">
                          Weapons
                        </TabsTrigger>
                        <TabsTrigger value="items" className="data-[state=active]:bg-cyan-500">
                          Items
                        </TabsTrigger>
                        <TabsTrigger value="custom" className="data-[state=active]:bg-cyan-500">
                          Custom
                        </TabsTrigger>
                      </TabsList>

                      <TabsContent value="armor" className="mt-4">
                        <div className="space-y-2 max-h-[500px] overflow-y-auto">
                          {ARMOR.map(armor => {
                            const quantity = cart[armor.id] || 0;
                            return (
                              <div key={armor.id} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                                <div className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <h4 className="text-white font-medium">{armor.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      {armor.type} | EAC +{armor.eacBonus} | KAC +{armor.kacBonus} | 
                                      Max Dex {armor.maxDexBonus === null ? '∞' : `+${armor.maxDexBonus}`}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                      {armor.price} cr
                                    </Badge>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(armor.id, -1)}
                                        disabled={quantity === 0}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="text-white font-medium w-8 text-center">{quantity}</span>
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(armor.id, 1)}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabsContent>

                      <TabsContent value="shields" className="mt-4">
                        <div className="space-y-2 max-h-[500px] overflow-y-auto">
                          {SHIELDS.map(shield => {
                            const quantity = cart[shield.id] || 0;
                            return (
                              <div key={shield.id} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                                <div className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <h4 className="text-white font-medium">{shield.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      Shield Bonus: {shield.shieldBonus} | 
                                      Max Dex {shield.maxDex === null ? '∞' : `+${shield.maxDex}`} | 
                                      Bulk: {shield.bulk}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                      {shield.price} cr
                                    </Badge>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(shield.id, -1)}
                                        disabled={quantity === 0}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="text-white font-medium w-8 text-center">{quantity}</span>
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(shield.id, 1)}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabsContent>

                      <TabsContent value="weapons" className="mt-4">
                        <div className="space-y-2 max-h-[500px] overflow-y-auto">
                          {[...WEAPONS.melee, ...WEAPONS.ranged].map(weapon => {
                            const quantity = cart[weapon.id] || 0;
                            const isMelee = WEAPONS.melee.some(w => w.id === weapon.id);
                            return (
                              <div key={weapon.id} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                                <div className="flex justify-between items-center">
                                  <div className="flex-1">
                                    <h4 className="text-white font-medium">{weapon.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      {weapon.damage} | {isMelee ? 'Melee' : `Range: ${weapon.range} ft.`} | 
                                      Bulk: {weapon.bulk}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-3">
                                    <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                      {weapon.price} cr
                                    </Badge>
                                    <div className="flex items-center gap-2">
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(weapon.id, -1)}
                                        disabled={quantity === 0}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Minus className="w-4 h-4" />
                                      </Button>
                                      <span className="text-white font-medium w-8 text-center">{quantity}</span>
                                      <Button
                                        size="icon"
                                        variant="outline"
                                        onClick={() => updateCartQuantity(weapon.id, 1)}
                                        className="h-8 w-8 border-slate-600"
                                      >
                                        <Plus className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </TabsContent>

                      <TabsContent value="items" className="mt-4">
                        <div className="space-y-2 max-h-[500px] overflow-y-auto">
                          {(() => {
                            const allItems = getAllSearchableItems();
                            return allItems.slice(0, 50).map(item => {
                              const quantity = cart[item.id] || 0;
                              return (
                                <div key={item.id} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                                  <div className="flex justify-between items-center">
                                    <div className="flex-1">
                                      <h4 className="text-white font-medium">{item.name}</h4>
                                      <p className="text-sm text-slate-400">
                                        {item.category}
                                        {item.bulk && ` | Bulk: ${item.bulk}`}
                                      </p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                      {item.price && (
                                        <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                          {item.price} cr
                                        </Badge>
                                      )}
                                      <div className="flex items-center gap-2">
                                        <Button
                                          size="icon"
                                          variant="outline"
                                          onClick={() => updateCartQuantity(item.id, -1)}
                                          disabled={quantity === 0}
                                          className="h-8 w-8 border-slate-600"
                                        >
                                          <Minus className="w-4 h-4" />
                                        </Button>
                                        <span className="text-white font-medium w-8 text-center">{quantity}</span>
                                        <Button
                                          size="icon"
                                          variant="outline"
                                          onClick={() => updateCartQuantity(item.id, 1)}
                                          className="h-8 w-8 border-slate-600"
                                        >
                                          <Plus className="w-4 h-4" />
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            });
                          })()}
                        </div>
                      </TabsContent>

                      <TabsContent value="custom" className="mt-4">
                        <div className="space-y-4 max-w-2xl mx-auto">
                          <div>
                            <Label className="text-white">Item Type</Label>
                            <Tabs value={customItem.type} onValueChange={(val) => setCustomItem({ ...customItem, type: val })} className="mt-1">
                              <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
                                <TabsTrigger value="armor">Armor</TabsTrigger>
                                <TabsTrigger value="weapon">Weapon</TabsTrigger>
                                <TabsTrigger value="item">Item</TabsTrigger>
                              </TabsList>
                            </Tabs>
                          </div>

                          <div>
                            <Label className="text-white">Name</Label>
                            <Input
                              value={customItem.name}
                              onChange={(e) => setCustomItem({ ...customItem, name: e.target.value })}
                              placeholder="Enter name..."
                              className="bg-slate-800 border-slate-600 text-white mt-1"
                            />
                          </div>

                          {/* Armor Fields */}
                          {customItem.type === 'armor' && (
                            <>
                              <div>
                                <Label className="text-white">Armor Type</Label>
                                <select
                                  value={customItem.armorType}
                                  onChange={(e) => setCustomItem({ ...customItem, armorType: e.target.value })}
                                  className="w-full bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
                                >
                                  <option value="light">Light Armor</option>
                                  <option value="heavy">Heavy Armor</option>
                                  <option value="powered">Powered Armor</option>
                                </select>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-white">EAC Bonus</Label>
                                  <Input
                                    type="number"
                                    value={customItem.eacBonus}
                                    onChange={(e) => setCustomItem({ ...customItem, eacBonus: parseInt(e.target.value) || 0 })}
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-white">KAC Bonus</Label>
                                  <Input
                                    type="number"
                                    value={customItem.kacBonus}
                                    onChange={(e) => setCustomItem({ ...customItem, kacBonus: parseInt(e.target.value) || 0 })}
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                <div>
                                  <Label className="text-white">Max Dex Bonus</Label>
                                  <Input
                                    type="number"
                                    value={customItem.maxDexBonus ?? ''}
                                    onChange={(e) => setCustomItem({ ...customItem, maxDexBonus: e.target.value ? parseInt(e.target.value) : null })}
                                    placeholder="∞"
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-white">Check Penalty</Label>
                                  <Input
                                    type="number"
                                    value={customItem.armorCheckPenalty}
                                    onChange={(e) => setCustomItem({ ...customItem, armorCheckPenalty: parseInt(e.target.value) || 0 })}
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-white">Speed Adj</Label>
                                  <Input
                                    type="number"
                                    value={customItem.speedAdjustment}
                                    onChange={(e) => setCustomItem({ ...customItem, speedAdjustment: parseInt(e.target.value) || 0 })}
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                              </div>
                            </>
                          )}

                          {/* Weapon Fields */}
                          {customItem.type === 'weapon' && (
                            <>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-white">Weapon Type</Label>
                                  <select
                                    value={customItem.weaponType}
                                    onChange={(e) => setCustomItem({ ...customItem, weaponType: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
                                  >
                                    <option value="melee">Melee</option>
                                    <option value="ranged">Ranged</option>
                                  </select>
                                </div>
                                <div>
                                  <Label className="text-white">Subtype</Label>
                                  <select
                                    value={customItem.weaponSubtype}
                                    onChange={(e) => setCustomItem({ ...customItem, weaponSubtype: e.target.value })}
                                    className="w-full bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2 mt-1"
                                  >
                                    {customItem.weaponType === 'melee' ? (
                                      <>
                                        <option value="basic_melee">Basic Melee</option>
                                        <option value="advanced_melee">Advanced Melee</option>
                                      </>
                                    ) : (
                                      <>
                                        <option value="small_arms">Small Arms</option>
                                        <option value="longarms">Longarms</option>
                                        <option value="heavy">Heavy Weapons</option>
                                        <option value="sniper">Sniper Weapons</option>
                                      </>
                                    )}
                                  </select>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <Label className="text-white">Damage</Label>
                                  <Input
                                    value={customItem.damage}
                                    onChange={(e) => setCustomItem({ ...customItem, damage: e.target.value })}
                                    placeholder="1d6"
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                                <div>
                                  <Label className="text-white">Critical</Label>
                                  <Input
                                    value={customItem.critical}
                                    onChange={(e) => setCustomItem({ ...customItem, critical: e.target.value })}
                                    placeholder="—"
                                    className="bg-slate-800 border-slate-600 text-white mt-1"
                                  />
                                </div>
                              </div>
                              {customItem.weaponType === 'ranged' && (
                                <div className="grid grid-cols-3 gap-4">
                                  <div>
                                    <Label className="text-white">Range</Label>
                                    <Input
                                      value={customItem.range || ''}
                                      onChange={(e) => setCustomItem({ ...customItem, range: e.target.value })}
                                      placeholder="60 ft."
                                      className="bg-slate-800 border-slate-600 text-white mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-white">Capacity</Label>
                                    <Input
                                      value={customItem.capacity || ''}
                                      onChange={(e) => setCustomItem({ ...customItem, capacity: e.target.value })}
                                      placeholder="20 charges"
                                      className="bg-slate-800 border-slate-600 text-white mt-1"
                                    />
                                  </div>
                                  <div>
                                    <Label className="text-white">Usage</Label>
                                    <Input
                                      value={customItem.usage || ''}
                                      onChange={(e) => setCustomItem({ ...customItem, usage: e.target.value })}
                                      placeholder="1"
                                      className="bg-slate-800 border-slate-600 text-white mt-1"
                                    />
                                  </div>
                                </div>
                              )}
                              <div>
                                <Label className="text-white">Special (optional)</Label>
                                <Input
                                  value={customItem.special}
                                  onChange={(e) => setCustomItem({ ...customItem, special: e.target.value })}
                                  placeholder="e.g., Analog, Automatic"
                                  className="bg-slate-800 border-slate-600 text-white mt-1"
                                />
                              </div>
                            </>
                          )}

                          {/* Common Fields */}
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label className="text-white">Price (credits)</Label>
                              <Input
                                type="number"
                                value={customItem.price}
                                onChange={(e) => setCustomItem({ ...customItem, price: parseInt(e.target.value) || 0 })}
                                placeholder="0"
                                className="bg-slate-800 border-slate-600 text-white mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-white">Bulk</Label>
                              <Input
                                type="number"
                                step="0.1"
                                value={customItem.bulk}
                                onChange={(e) => setCustomItem({ ...customItem, bulk: parseFloat(e.target.value) || 0 })}
                                placeholder="0"
                                className="bg-slate-800 border-slate-600 text-white mt-1"
                              />
                            </div>
                          </div>

                          {/* Description for items only */}
                          {customItem.type === 'item' && (
                            <div>
                              <Label className="text-white">Description (optional)</Label>
                              <textarea
                                value={customItem.description}
                                onChange={(e) => setCustomItem({ ...customItem, description: e.target.value })}
                                placeholder="Enter item description..."
                                className="w-full bg-slate-800 border border-slate-600 text-white rounded-md px-3 py-2 mt-1 min-h-[100px]"
                              />
                            </div>
                          )}
                        </div>
                      </TabsContent>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </div>
              
              <Tabs defaultValue="equipment" className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-800/50 mb-6">
                  <TabsTrigger value="equipment" className="data-[state=active]:bg-cyan-500">
                    <Shield className="w-4 h-4 mr-2" />
                    Equipment
                  </TabsTrigger>
                  <TabsTrigger value="items" className="data-[state=active]:bg-cyan-500">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Items
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="equipment">
                  <div className="space-y-4">
                    {/* Armor Section */}
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Shield className="w-5 h-5 text-cyan-400" />
                          Armor
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Equipped Armor */}
                        <div>
                          <div className="text-xs text-slate-400 mb-2">Equipped Armor</div>
                          {character.armor && !character.armor.isShield ? (
                            <div className="flex justify-between items-center bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                              <div>
                                <h4 className="text-white font-medium">{character.armor.name}</h4>
                                <p className="text-sm text-slate-400">
                                  EAC +{character.armor.eacBonus} | KAC +{character.armor.kacBonus} | 
                                  Max Dex {character.armor.maxDexBonus === null ? '∞' : `+${character.armor.maxDexBonus}`}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  updateCharacter('ownedArmor', [...(character.ownedArmor || []), character.armor]);
                                  updateCharacter('armor', null);
                                }}
                                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
                              >
                                Unequip
                              </Button>
                            </div>
                          ) : (
                            <p className="text-slate-400 text-center py-3 text-sm bg-slate-900/30 rounded-lg">No armor equipped</p>
                          )}
                        </div>

                        {/* Equipped Shield */}
                        <div>
                          <div className="text-xs text-slate-400 mb-2">Equipped Shield</div>
                          {character.equippedShield ? (
                            <div className="flex justify-between items-center bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                              <div>
                                <h4 className="text-white font-medium">{character.equippedShield.name}</h4>
                                <p className="text-sm text-slate-400">
                                  Shield Bonus: {character.equippedShield.shieldBonus} | 
                                  Max Dex {character.equippedShield.maxDex === null ? '∞' : `+${character.equippedShield.maxDex}`}
                                </p>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  updateCharacter('ownedArmor', [...(character.ownedArmor || []), character.equippedShield]);
                                  updateCharacter('equippedShield', null);
                                }}
                                className="border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
                              >
                                Unequip
                              </Button>
                            </div>
                          ) : (
                            <p className="text-slate-400 text-center py-3 text-sm bg-slate-900/30 rounded-lg">No shield equipped</p>
                          )}
                        </div>

                        {/* Owned Armor (Inventory) */}
                        {character.ownedArmor && character.ownedArmor.length > 0 && (
                          <div>
                            <div className="text-xs text-slate-400 mb-2">Inventory</div>
                            <div className="space-y-2">
                              {character.ownedArmor.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                                  <div>
                                    <h4 className="text-white font-medium">{item.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      {item.isShield ? (
                                        <>Shield Bonus: {item.shieldBonus} | Max Dex {item.maxDex === null ? '∞' : `+${item.maxDex}`}</>
                                      ) : (
                                        <>EAC +{item.eacBonus} | KAC +{item.kacBonus} | Max Dex {item.maxDexBonus === null ? '∞' : `+${item.maxDexBonus}`}</>
                                      )}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        const newOwnedArmor = character.ownedArmor.filter((_, i) => i !== idx);
                                        
                                        if (item.isShield) {
                                          if (character.equippedShield) {
                                            newOwnedArmor.push(character.equippedShield);
                                          }
                                          updateCharacter('equippedShield', item);
                                        } else {
                                          if (character.armor && !character.armor.isShield) {
                                            newOwnedArmor.push(character.armor);
                                          }
                                          updateCharacter('armor', item);
                                        }
                                        
                                        updateCharacter('ownedArmor', newOwnedArmor);
                                      }}
                                      className="border-green-500/50 text-green-400 hover:bg-green-500/20"
                                    >
                                      Equip
                                    </Button>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      onClick={() => {
                                        const newOwnedArmor = character.ownedArmor.filter((_, i) => i !== idx);
                                        updateCharacter('ownedArmor', newOwnedArmor);
                                      }}
                                      className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                                    >
                                      Remove
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Weapons Section */}
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader>
                        <CardTitle className="text-white flex items-center gap-2">
                          <Sword className="w-5 h-5 text-amber-400" />
                          Weapons
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {character.weapons?.length > 0 ? (
                          <div className="space-y-2">
                            {character.weapons.map((weapon, idx) => (
                              <div key={idx} className="flex justify-between items-center bg-slate-900/50 rounded p-3">
                                <div>
                                  <h4 className="text-white font-medium">{weapon.name}</h4>
                                  <p className="text-sm text-slate-400">
                                    {weapon.damage} | {weapon.type} | Range: {weapon.range || 'Melee'}
                                  </p>
                                </div>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    const newWeapons = character.weapons.filter((_, i) => i !== idx);
                                    updateCharacter('weapons', newWeapons);
                                  }}
                                  className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-400 text-center py-4">No weapons equipped</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="items">
                  {character.customItems && character.customItems.length > 0 ? (
                    <div className="space-y-3">
                      {character.customItems.map((item, idx) => (
                        <Card key={idx} className="bg-slate-800/50 border-slate-700">
                          <CardContent className="pt-6">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <h4 className="text-white font-medium text-lg">{item.name}</h4>
                                <div className="flex gap-4 mt-2 text-sm text-slate-400">
                                  <span>Price: {item.price} credits</span>
                                  <span>Bulk: {item.bulk}</span>
                                </div>
                                {item.description && (
                                  <p className="text-slate-300 text-sm mt-2">{item.description}</p>
                                )}
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const newItems = character.customItems.filter((_, i) => i !== idx);
                                  updateCharacter('customItems', newItems);
                                }}
                                className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                              >
                                Remove
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                      <h3 className="text-xl text-slate-400 mb-2">No Items Yet</h3>
                      <p className="text-slate-500 mb-4">Use the "Buy/Add Equipment" button to add items to your inventory</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </TabsContent>

          {/* Notes Tab */}
          <TabsContent value="notes">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8 space-y-6">
              {/* Party Characters Section */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-400" />
                      Characters
                    </CardTitle>
                    <Button
                      size="sm"
                      onClick={() => {
                        updateCharacter('partyCharacters', [...(character.partyCharacters || []), {
                          id: Date.now(),
                          name: '',
                          race: '',
                          class: '',
                          playerName: '',
                          notes: ''
                        }]);
                      }}
                      className="bg-purple-500 hover:bg-purple-600"
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Character
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {character.partyCharacters?.length > 0 ? (
                    <div className="space-y-3">
                      {character.partyCharacters.map((char, idx) => (
                        <div key={char.id} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-2">
                            <div>
                              <Label className="text-slate-400 text-xs">Character Name</Label>
                              <Input
                                value={char.name}
                                onChange={(e) => {
                                  const updated = [...character.partyCharacters];
                                  updated[idx].name = e.target.value;
                                  updateCharacter('partyCharacters', updated);
                                }}
                                placeholder="Name"
                                className="bg-slate-800 border-slate-600 text-white h-8 mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-slate-400 text-xs">Race</Label>
                              <Input
                                value={char.race}
                                onChange={(e) => {
                                  const updated = [...character.partyCharacters];
                                  updated[idx].race = e.target.value;
                                  updateCharacter('partyCharacters', updated);
                                }}
                                placeholder="Race"
                                className="bg-slate-800 border-slate-600 text-white h-8 mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-slate-400 text-xs">Class</Label>
                              <Input
                                value={char.class}
                                onChange={(e) => {
                                  const updated = [...character.partyCharacters];
                                  updated[idx].class = e.target.value;
                                  updateCharacter('partyCharacters', updated);
                                }}
                                placeholder="Class"
                                className="bg-slate-800 border-slate-600 text-white h-8 mt-1"
                              />
                            </div>
                            <div>
                              <Label className="text-slate-400 text-xs">Player Name</Label>
                              <Input
                                value={char.playerName}
                                onChange={(e) => {
                                  const updated = [...character.partyCharacters];
                                  updated[idx].playerName = e.target.value;
                                  updateCharacter('partyCharacters', updated);
                                }}
                                placeholder="Player"
                                className="bg-slate-800 border-slate-600 text-white h-8 mt-1"
                              />
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <div className="flex-1">
                              <Label className="text-slate-400 text-xs">Notes</Label>
                              <Input
                                value={char.notes}
                                onChange={(e) => {
                                  const updated = [...character.partyCharacters];
                                  updated[idx].notes = e.target.value;
                                  updateCharacter('partyCharacters', updated);
                                }}
                                placeholder="Character notes..."
                                className="bg-slate-800 border-slate-600 text-white h-8 mt-1"
                              />
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => {
                                const updated = character.partyCharacters.filter((_, i) => i !== idx);
                                updateCharacter('partyCharacters', updated);
                              }}
                              className="border-red-500/50 text-red-400 hover:bg-red-500/20 mt-5"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-center py-4 text-sm">No party characters added yet</p>
                  )}
                </CardContent>
              </Card>

              {/* Personal Notes Section */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <FileText className="w-5 h-5 text-cyan-400" />
                    Personal Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <textarea
                    value={character.notes}
                    onChange={(e) => updateCharacter('notes', e.target.value)}
                    placeholder="Write your character's backstory, goals, relationships, or any other notes here..."
                    className="w-full h-[400px] bg-slate-900/50 border border-slate-600 text-white rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </CardContent>
              </Card>

              {/* Group Loot Section */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Coins className="w-5 h-5 text-amber-400" />
                    Group Loot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Credits Tracker */}
                  <div className="flex items-center gap-4 bg-slate-900/50 rounded-lg p-4">
                    <div className="flex-1">
                      <Label className="text-slate-400 text-sm">Group Credits</Label>
                      <Input
                        type="number"
                        value={character.groupLoot?.credits || 0}
                        onChange={(e) => updateCharacter('groupLoot', {
                          ...character.groupLoot,
                          credits: parseInt(e.target.value) || 0
                        })}
                        className="bg-slate-800 border-slate-600 text-white text-xl font-bold w-40 h-10 mt-1"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const amount = prompt('Add credits:');
                          if (amount) {
                            updateCharacter('groupLoot', {
                              ...character.groupLoot,
                              credits: (character.groupLoot?.credits || 0) + parseInt(amount)
                            });
                          }
                        }}
                        className="border-green-500/50 text-green-400 hover:bg-green-500/20"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          const amount = prompt('Remove credits:');
                          if (amount) {
                            updateCharacter('groupLoot', {
                              ...character.groupLoot,
                              credits: Math.max(0, (character.groupLoot?.credits || 0) - parseInt(amount))
                            });
                          }
                        }}
                        className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                      >
                        <Minus className="w-4 h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  </div>

                  {/* Add Item Button */}
                  <Dialog open={groupLootDialogOpen} onOpenChange={setGroupLootDialogOpen}>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-amber-500/20 border border-amber-500/50 text-amber-300 hover:bg-amber-500/30">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-slate-900 border-slate-700">
                      <DialogHeader>
                        <DialogTitle className="text-white">Add Item to Group Loot</DialogTitle>
                      </DialogHeader>
                      <Tabs defaultValue="all" className="w-full mt-4">
                        <TabsList className="grid w-full grid-cols-5 bg-slate-800/50">
                          <TabsTrigger value="all">All Items</TabsTrigger>
                          <TabsTrigger value="armor">Armor</TabsTrigger>
                          <TabsTrigger value="shields">Shields</TabsTrigger>
                          <TabsTrigger value="weapons">Weapons</TabsTrigger>
                          <TabsTrigger value="custom">Custom</TabsTrigger>
                        </TabsList>

                        <TabsContent value="all" className="mt-4">
                          <Input
                            placeholder="Search all equipment..."
                            value={groupLootSearch}
                            onChange={(e) => setGroupLootSearch(e.target.value)}
                            className="bg-slate-800 border-slate-600 text-white mb-4"
                          />
                          <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {(() => {
                              const allItems = getAllSearchableItems();
                              const armorItems = ARMOR.map(a => ({ ...a, equipmentCategory: 'armor' }));
                              const weaponItems = WEAPONS.melee.concat(WEAPONS.ranged).map(w => ({ ...w, equipmentCategory: 'weapons' }));
                              const combined = [...armorItems, ...weaponItems, ...allItems];
                              
                              return combined
                                .filter(item => item.name.toLowerCase().includes(groupLootSearch.toLowerCase()))
                                .slice(0, 50)
                                .map(item => (
                                  <div
                                    key={item.id}
                                    onClick={() => {
                                      updateCharacter('groupLoot', {
                                        ...character.groupLoot,
                                        items: [...(character.groupLoot?.items || []), {
                                          id: Date.now(),
                                          name: item.name,
                                          assignedTo: 'unassigned'
                                        }]
                                      });
                                      setGroupLootDialogOpen(false);
                                      setGroupLootSearch('');
                                    }}
                                    className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 cursor-pointer transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <div>
                                        <h4 className="text-white font-medium">{item.name}</h4>
                                        <p className="text-sm text-slate-400">
                                          {item.category || item.type || item.equipmentCategory}
                                          {item.damage && ` | ${item.damage}`}
                                          {item.eacBonus !== undefined && ` | EAC +${item.eacBonus}`}
                                          {item.bulk && ` | Bulk: ${item.bulk}`}
                                        </p>
                                      </div>
                                      {item.price && (
                                        <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                          {item.price} cr
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                ));
                            })()}
                          </div>
                        </TabsContent>

                        <TabsContent value="armor" className="mt-4">
                          <Input
                            placeholder="Search armor..."
                            value={groupLootSearch}
                            onChange={(e) => setGroupLootSearch(e.target.value)}
                            className="bg-slate-800 border-slate-600 text-white mb-4"
                          />
                          <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {ARMOR.filter(armor => 
                              armor.name.toLowerCase().includes(groupLootSearch.toLowerCase())
                            ).map(armor => (
                              <div
                                key={armor.id}
                                onClick={() => {
                                  updateCharacter('groupLoot', {
                                    ...character.groupLoot,
                                    items: [...(character.groupLoot?.items || []), {
                                      id: Date.now(),
                                      name: armor.name,
                                      assignedTo: 'unassigned'
                                    }]
                                  });
                                  setGroupLootDialogOpen(false);
                                  setGroupLootSearch('');
                                }}
                                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 cursor-pointer transition-colors"
                              >
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="text-white font-medium">{armor.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      {armor.type} | EAC +{armor.eacBonus} | KAC +{armor.kacBonus}
                                    </p>
                                  </div>
                                  <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                    {armor.price} cr
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="shields" className="mt-4">
                          <Input
                            placeholder="Search shields..."
                            value={groupLootSearch}
                            onChange={(e) => setGroupLootSearch(e.target.value)}
                            className="bg-slate-800 border-slate-600 text-white mb-4"
                          />
                          <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {SHIELDS.filter(shield => 
                              shield.name.toLowerCase().includes(groupLootSearch.toLowerCase())
                            ).map(shield => (
                              <div
                                key={shield.id}
                                onClick={() => {
                                  updateCharacter('groupLoot', {
                                    ...character.groupLoot,
                                    items: [...(character.groupLoot?.items || []), {
                                      id: Date.now(),
                                      name: shield.name,
                                      assignedTo: 'unassigned'
                                    }]
                                  });
                                  setGroupLootDialogOpen(false);
                                  setGroupLootSearch('');
                                }}
                                className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 cursor-pointer transition-colors"
                              >
                                <div className="flex justify-between items-center">
                                  <div>
                                    <h4 className="text-white font-medium">{shield.name}</h4>
                                    <p className="text-sm text-slate-400">
                                      Shield Bonus: {shield.shieldBonus} | Bulk: {shield.bulk}
                                    </p>
                                  </div>
                                  <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                    {shield.price} cr
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </TabsContent>

                        <TabsContent value="weapons" className="mt-4">
                          <Input
                            placeholder="Search weapons..."
                            value={groupLootSearch}
                            onChange={(e) => setGroupLootSearch(e.target.value)}
                            className="bg-slate-800 border-slate-600 text-white mb-4"
                          />
                          <div className="space-y-2 max-h-[400px] overflow-y-auto">
                            {WEAPONS.melee.concat(WEAPONS.ranged).filter(weapon =>
                             weapon.name.toLowerCase().includes(groupLootSearch.toLowerCase())
                            ).map(weapon => {
                             const isMelee = WEAPONS.melee.some(w => w.id === weapon.id);
                             return (
                                  <div
                                    key={weapon.id}
                                    onClick={() => {
                                      updateCharacter('groupLoot', {
                                        ...character.groupLoot,
                                        items: [...(character.groupLoot?.items || []), {
                                          id: Date.now(),
                                          name: weapon.name,
                                          assignedTo: 'unassigned'
                                        }]
                                      });
                                      setGroupLootDialogOpen(false);
                                      setGroupLootSearch('');
                                    }}
                                    className="bg-slate-800/50 hover:bg-slate-700/50 rounded-lg p-3 cursor-pointer transition-colors"
                                  >
                                    <div className="flex justify-between items-center">
                                      <div>
                                        <h4 className="text-white font-medium">{weapon.name}</h4>
                                        <p className="text-sm text-slate-400">
                                          {weapon.damage} | {isMelee ? 'Melee' : `${weapon.range} ft.`}
                                        </p>
                                      </div>
                                      <Badge variant="outline" className="text-amber-400 border-amber-500/50">
                                        {weapon.price} cr
                                      </Badge>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </TabsContent>

                        <TabsContent value="custom" className="mt-4">
                          <div className="space-y-4">
                            <p className="text-slate-400 text-sm">Enter a custom item name:</p>
                            <Input
                              placeholder="Item name..."
                              value={groupLootSearch}
                              onChange={(e) => setGroupLootSearch(e.target.value)}
                              className="bg-slate-800 border-slate-600 text-white"
                              onKeyPress={(e) => {
                                if (e.key === 'Enter' && groupLootSearch.trim()) {
                                  updateCharacter('groupLoot', {
                                    ...character.groupLoot,
                                    items: [...(character.groupLoot?.items || []), {
                                      id: Date.now(),
                                      name: groupLootSearch,
                                      assignedTo: 'unassigned'
                                    }]
                                  });
                                  setGroupLootDialogOpen(false);
                                  setGroupLootSearch('');
                                }
                              }}
                            />
                            <Button
                              onClick={() => {
                                if (groupLootSearch.trim()) {
                                  updateCharacter('groupLoot', {
                                    ...character.groupLoot,
                                    items: [...(character.groupLoot?.items || []), {
                                      id: Date.now(),
                                      name: groupLootSearch,
                                      assignedTo: 'unassigned'
                                    }]
                                  });
                                  setGroupLootDialogOpen(false);
                                  setGroupLootSearch('');
                                }
                              }}
                              disabled={!groupLootSearch.trim()}
                              className="w-full bg-cyan-500 hover:bg-cyan-600"
                            >
                              Add Custom Item
                            </Button>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DialogContent>
                  </Dialog>

                  {/* Items List */}
                  {character.groupLoot?.items && character.groupLoot.items.length > 0 ? (
                    <div className="space-y-2">
                      {character.groupLoot.items.map((item, idx) => (
                        <div key={item.id} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-3">
                          <div className="flex-1">
                            <span className="text-white font-medium">{item.name}</span>
                          </div>
                          <div className="w-48">
                            <select
                              value={item.assignedTo}
                              onChange={(e) => {
                                const updated = [...character.groupLoot.items];
                                if (e.target.value === 'custom') {
                                  const customName = prompt('Enter custom assignee:');
                                  if (customName) {
                                    updated[idx].assignedTo = customName;
                                  }
                                } else {
                                  updated[idx].assignedTo = e.target.value;
                                }
                                updateCharacter('groupLoot', {
                                  ...character.groupLoot,
                                  items: updated
                                });
                              }}
                              className="w-full bg-slate-800 border border-slate-600 text-white rounded px-2 py-1 text-sm"
                            >
                              <option value="unassigned">Unassigned</option>
                              {character.partyCharacters?.map(char => (
                                <option key={char.id} value={char.name}>
                                  {char.name || 'Unnamed Character'}
                                </option>
                              ))}
                              <option value="custom">Custom...</option>
                            </select>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              const updated = character.groupLoot.items.filter((_, i) => i !== idx);
                              updateCharacter('groupLoot', {
                                ...character.groupLoot,
                                items: updated
                              });
                            }}
                            className="border-red-500/50 text-red-400 hover:bg-red-500/20"
                          >
                            Remove
                          </Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-center py-4 text-sm">No group loot added yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Spells Tab */}
          <TabsContent value="spells">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8">
              {(() => {
                const spellcastingClasses = ['mystic', 'technomancer', 'witchwarper', 'precog'];
                const hasSpellcasting = character.classes?.some(c => {
                  const cls = getClassById(c.classId);
                  return cls && spellcastingClasses.includes(cls.id);
                });

                const [spellsExpanded, setSpellsExpanded] = useState(hasSpellcasting);

                if (!hasSpellcasting) {
                  return (
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ScrollText className="w-5 h-5 text-purple-400" />
                            <h3 className="text-lg text-white font-medium">No Spellcasting Class</h3>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setSpellsExpanded(!spellsExpanded)}
                            className="text-slate-400 hover:text-slate-300"
                          >
                            {spellsExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </Button>
                        </div>
                        <p className="text-sm text-slate-400">
                          Your current class doesn't grant spellcasting abilities. However, you may still use spells through:
                        </p>
                        <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-inside">
                          <li>Spell scrolls and spell gems</li>
                          <li>Racial abilities or alternate racial traits</li>
                          <li>Class features that grant limited spellcasting</li>
                          <li>Magic items and technological devices</li>
                        </ul>
                      </div>

                      {spellsExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                        >
                          <SpellSelector
                            selectedClass={character.selectedClass}
                            classes={character.classes}
                            knownSpells={character.knownSpells}
                            onSpellsChange={(spells) => updateCharacter('knownSpells', spells)}
                          />
                        </motion.div>
                      )}
                    </div>
                  );
                }

                return (
                  <SpellSelector
                    selectedClass={character.selectedClass}
                    classes={character.classes}
                    knownSpells={character.knownSpells}
                    onSpellsChange={(spells) => updateCharacter('knownSpells', spells)}
                  />
                );
              })()}
            </div>
          </TabsContent>

          {/* Level Up Tab */}
          <TabsContent value="levelup">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-6 md:p-8">
              {level1Confirmed && (
                <div className="mb-6 flex justify-end">
                  <Button
                    onClick={() => {
                      setLevel1Confirmed(false);
                      setMainTab('creation');
                    }}
                    variant="outline"
                    className="border-amber-500/50 text-amber-400 hover:bg-amber-500/20"
                  >
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Level 1
                  </Button>
                </div>
              )}
              <LevelUpManager
                character={character}
                onCharacterUpdate={setCharacter}
              />
            </div>
          </TabsContent>
          </Tabs>
      </div>
    </div>
  );
}