import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import { Zap, Sun, Moon, Target, Shield, Activity, HelpCircle } from 'lucide-react';
import { getTotalLevel } from './starfinderData';

export default function ClassMechanics({ character, classes, onUpdate }) {
  const selectedClass = classes && classes.length > 0 ? classes[0] : null;
  if (!selectedClass) return null;

  const className = selectedClass.classId?.toLowerCase();
  const totalLevel = getTotalLevel(classes);

  // Nanocyte mechanics
  if (className === 'nanocyte') {
    return <NanocyteMechanics character={character} totalLevel={totalLevel} onUpdate={onUpdate} />;
  }

  // Solarian mechanics
  if (className === 'solarian') {
    return <SolarianMechanics character={character} totalLevel={totalLevel} onUpdate={onUpdate} />;
  }

  // Operative mechanics
  if (className === 'operative') {
    return <OperativeMechanics character={character} totalLevel={totalLevel} onUpdate={onUpdate} />;
  }

  // Vanguard mechanics
  if (className === 'vanguard') {
    return <VanguardMechanics character={character} totalLevel={totalLevel} onUpdate={onUpdate} />;
  }

  return null;
}

function NanocyteMechanics({ character, totalLevel, onUpdate }) {
  const [nanitePool, setNanitePool] = useState(character.nanitePool || totalLevel * 2);
  const maxNanitePool = totalLevel * 2;

  const handleNaniteChange = (newValue) => {
    setNanitePool(Math.max(0, Math.min(maxNanitePool, newValue)));
    if (onUpdate) {
      onUpdate({ ...character, nanitePool: newValue });
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-cyan-400" />
          <CardTitle className="text-base text-white">Nanocyte Mechanics</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
              <div className="text-xs space-y-1">
                <p className="font-semibold">Nanocyte Cloud:</p>
                <p>Your nanites form a cloud around you. Track your nanite pool and abilities here.</p>
                <p className="pt-2 text-amber-300">Max Pool = Level × 2</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-400">Nanite Pool</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-cyan-400">{nanitePool}</span>
              <span className="text-sm text-slate-500">/ {maxNanitePool}</span>
            </div>
          </div>
          <Progress value={(nanitePool / maxNanitePool) * 100} className="h-2 bg-slate-700" />
          <div className="flex gap-2 mt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleNaniteChange(nanitePool - 1)}
              className="flex-1 text-red-400 border-red-500/50"
            >
              -1
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleNaniteChange(maxNanitePool)}
              className="flex-1 text-cyan-400 border-cyan-500/50"
            >
              Full
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleNaniteChange(nanitePool + 1)}
              className="flex-1 text-green-400 border-green-500/50"
            >
              +1
            </Button>
          </div>
        </div>

        {totalLevel >= 2 && (
          <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-white">Nanite Surge</div>
              <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 text-xs">
                1/day
              </Badge>
            </div>
            <p className="text-xs text-slate-400">
              As a move action, spend 1 RP to regain {Math.floor(totalLevel / 2)} nanites
            </p>
          </div>
        )}

        {totalLevel >= 10 && (
          <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-white">Defensive Dispersal</div>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs">
                1/day
              </Badge>
            </div>
            <p className="text-xs text-slate-400">
              As a reaction when taking damage, disperse nanites to gain resistance 10 to that damage type for 1 round
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function SolarianMechanics({ character, totalLevel, onUpdate }) {
  const [attunement, setAttunement] = useState(character.solarianAttunement || 'unattuned');
  const [attunementLevel, setAttunementLevel] = useState(character.solarianAttunementLevel || 0);

  const handleAttunementChange = (direction) => {
    let newLevel = attunementLevel;
    let newMode = attunement;

    if (direction === 'graviton') {
      if (attunement === 'photon') {
        newLevel = Math.max(0, newLevel - 1);
        if (newLevel === 0) newMode = 'unattuned';
      } else {
        newLevel = Math.min(3, newLevel + 1);
        newMode = 'graviton';
      }
    } else if (direction === 'photon') {
      if (attunement === 'graviton') {
        newLevel = Math.max(0, newLevel - 1);
        if (newLevel === 0) newMode = 'unattuned';
      } else {
        newLevel = Math.min(3, newLevel + 1);
        newMode = 'photon';
      }
    } else if (direction === 'reset') {
      newLevel = 0;
      newMode = 'unattuned';
    }

    setAttunement(newMode);
    setAttunementLevel(newLevel);
    
    if (onUpdate) {
      onUpdate({ ...character, solarianAttunement: newMode, solarianAttunementLevel: newLevel });
    }
  };

  const isFullyAttuned = attunementLevel === 3;

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-amber-400" />
          <CardTitle className="text-base text-white">Stellar Mode</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
              <div className="text-xs space-y-1">
                <p className="font-semibold">Stellar Mode:</p>
                <p>Track your attunement to graviton or photon powers.</p>
                <p className="pt-2">At 3 points, you're fully attuned and can use Zenith powers.</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-400">Current Mode</div>
          <Badge className={`
            ${attunement === 'graviton' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : ''}
            ${attunement === 'photon' ? 'bg-amber-500/20 text-amber-300 border-amber-500/30' : ''}
            ${attunement === 'unattuned' ? 'bg-slate-500/20 text-slate-300 border-slate-500/30' : ''}
          `}>
            {attunement === 'unattuned' ? 'Unattuned' : attunement.charAt(0).toUpperCase() + attunement.slice(1)}
            {attunement !== 'unattuned' && ` (${attunementLevel}/3)`}
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAttunementChange('graviton')}
            className={`flex items-center justify-center gap-2 ${
              attunement === 'graviton' 
                ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' 
                : 'border-slate-600 text-slate-400'
            }`}
          >
            <Moon className="w-4 h-4" />
            Graviton
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => handleAttunementChange('photon')}
            className={`flex items-center justify-center gap-2 ${
              attunement === 'photon' 
                ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' 
                : 'border-slate-600 text-slate-400'
            }`}
          >
            <Sun className="w-4 h-4" />
            Photon
          </Button>
        </div>

        {attunement !== 'unattuned' && (
          <div className="space-y-2">
            <Progress 
              value={(attunementLevel / 3) * 100} 
              className={`h-2 ${
                attunement === 'graviton' ? 'bg-slate-700' : 'bg-slate-700'
              }`}
            />
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleAttunementChange('reset')}
              className="w-full text-slate-400 border-slate-600"
            >
              Reset to Unattuned
            </Button>
          </div>
        )}

        {isFullyAttuned && (
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3">
            <div className="text-sm font-medium text-amber-300 mb-1">Fully Attuned!</div>
            <p className="text-xs text-slate-400">
              You can now use your Zenith revelation. Using it returns you to unattuned.
            </p>
          </div>
        )}

        <div className="text-xs text-slate-500 bg-slate-700/20 rounded p-2">
          <strong className="text-slate-400">Stellar Revelations:</strong> Your revelations that require attunement are more powerful when you're graviton-attuned or photon-attuned.
        </div>
      </CardContent>
    </Card>
  );
}

function OperativeMechanics({ character, totalLevel }) {
  const operativeEdge = Math.floor(totalLevel / 2) + 1;

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-green-400" />
          <CardTitle className="text-base text-white">Operative Mechanics</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
              <div className="text-xs space-y-1">
                <p className="font-semibold">Operative's Edge:</p>
                <p>Your insight bonus to your specialization's associated skills.</p>
                <p className="pt-2 text-green-300">Edge = ⌊Level/2⌋ + 1</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-400">Operative's Edge</div>
          <div className="text-2xl font-bold text-green-400">+{operativeEdge}</div>
        </div>

        <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
          <div className="text-sm font-medium text-white">Trick Attack</div>
          <p className="text-xs text-slate-400">
            As a full action, make skill check (DC = 20 + target's CR) to deal +{Math.ceil(totalLevel / 2)}d8 extra damage and apply debuff
          </p>
          <div className="text-xs text-amber-300 mt-2">
            Debuff options: flat-footed, –2 to saves, or 50% movement speed (1 round + 1 per 5 over DC)
          </div>
        </div>

        {totalLevel >= 2 && (
          <div className="bg-slate-700/30 rounded-lg p-3">
            <div className="text-sm font-medium text-white mb-1">Evasion</div>
            <p className="text-xs text-slate-400">
              Reflex save for half damage: take no damage on success, half on failure
            </p>
          </div>
        )}

        {totalLevel >= 10 && (
          <div className="bg-slate-700/30 rounded-lg p-3">
            <div className="text-sm font-medium text-white mb-1">Quick Movement</div>
            <p className="text-xs text-slate-400">
              +10 ft enhancement bonus to your land speed
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function VanguardMechanics({ character, totalLevel, onUpdate }) {
  const [entropyPoints, setEntropyPoints] = useState(character.entropyPoints || 0);
  const maxEntropyPoints = Math.min(3, Math.floor((totalLevel + 1) / 2));

  const handleEntropyChange = (newValue) => {
    const value = Math.max(0, Math.min(maxEntropyPoints, newValue));
    setEntropyPoints(value);
    if (onUpdate) {
      onUpdate({ ...character, entropyPoints: value });
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-red-400" />
          <CardTitle className="text-base text-white">Vanguard Mechanics</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <HelpCircle className="w-4 h-4 text-slate-400 cursor-help" />
            </TooltipTrigger>
            <TooltipContent className="max-w-xs bg-slate-900 border-slate-700">
              <div className="text-xs space-y-1">
                <p className="font-semibold">Entropy Points:</p>
                <p>Gain points when taking damage or hitting with entropic strike. Spend for powerful effects.</p>
                <p className="pt-2 text-red-300">Max = min(3, ⌊(Level+1)/2⌋)</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-slate-400">Entropy Points</span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-red-400">{entropyPoints}</span>
            <span className="text-sm text-slate-500">/ {maxEntropyPoints}</span>
          </div>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: maxEntropyPoints }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleEntropyChange(i < entropyPoints ? i : i + 1)}
              className={`flex-1 h-10 rounded-lg border-2 transition-all ${
                i < entropyPoints
                  ? 'border-red-500 bg-red-500/30'
                  : 'border-slate-600 bg-slate-700/50 hover:bg-slate-700'
              }`}
            >
              {i < entropyPoints ? <Zap className="w-4 h-4 mx-auto text-red-300" /> : ''}
            </button>
          ))}
        </div>

        <div className="bg-slate-700/30 rounded-lg p-3 space-y-2">
          <div className="text-sm font-medium text-white">Entropic Strike</div>
          <p className="text-xs text-slate-400">
            Kinetic: 1d6 bludgeoning (increases with level)
          </p>
          <p className="text-xs text-amber-300">
            Gain 1 Entropy Point when you hit or are damaged by significant attack
          </p>
        </div>

        {totalLevel >= 6 && (
          <div className="bg-slate-700/30 rounded-lg p-3">
            <div className="text-sm font-medium text-white mb-1">Entropic Pool</div>
            <p className="text-xs text-slate-400">
              When you gain Entropy Points, also gain {totalLevel} temporary HP (lasts until end of next turn)
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}