import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Package, Shield, Wrench, Shirt, Plus, Minus } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function EquipmentTracker({ character, onUpdate }) {
  const [expandedCategories, setExpandedCategories] = useState({
    weapons: true,
    armor: true,
    upgrades: false,
    worn: false
  });

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({ ...prev, [category]: !prev[category] }));
  };

  const updateWeaponAmmo = (weaponIndex, currentAmmo) => {
    const weapons = [...(character.weapons || [])];
    weapons[weaponIndex] = { ...weapons[weaponIndex], currentAmmo };
    if (onUpdate) {
      onUpdate({ ...character, weapons });
    }
  };

  const weapons = character.weapons || [];
  const armor = character.armor;
  const upgrades = character.equipment?.upgrades || [];
  const wornItems = character.equipment?.worn || [];

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-white flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-400" />
          Equipment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Weapons */}
        {weapons.length > 0 && (
          <Collapsible open={expandedCategories.weapons} onOpenChange={() => toggleCategory('weapons')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-sm font-medium text-white">Weapons</span>
                <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                  {weapons.length}
                </Badge>
              </div>
              {expandedCategories.weapons ? 
                <ChevronUp className="w-4 h-4 text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 text-slate-400" />
              }
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {weapons.map((weapon, idx) => (
                <WeaponEntry 
                  key={idx} 
                  weapon={weapon} 
                  onAmmoChange={(ammo) => updateWeaponAmmo(idx, ammo)}
                />
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Armor */}
        {armor && (
          <Collapsible open={expandedCategories.armor} onOpenChange={() => toggleCategory('armor')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-medium text-white">Armor</span>
              </div>
              {expandedCategories.armor ? 
                <ChevronUp className="w-4 h-4 text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 text-slate-400" />
              }
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="bg-slate-900/50 rounded-lg p-3 space-y-1">
                <div className="font-medium text-white text-sm">{armor.name}</div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                    EAC +{armor.eacBonus}
                  </Badge>
                  <Badge variant="outline" className="border-cyan-500/30 text-cyan-300">
                    KAC +{armor.kacBonus}
                  </Badge>
                  <Badge variant="outline" className="border-slate-500/30 text-slate-400">
                    Max Dex +{armor.maxDexBonus}
                  </Badge>
                  {armor.bulk && armor.bulk !== '—' && (
                    <Badge variant="outline" className="border-slate-500/30 text-slate-400">
                      Bulk {armor.bulk}
                    </Badge>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Upgrades */}
        {upgrades.length > 0 && (
          <Collapsible open={expandedCategories.upgrades} onOpenChange={() => toggleCategory('upgrades')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-amber-400" />
                <span className="text-sm font-medium text-white">Upgrades</span>
                <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30 text-xs">
                  {upgrades.length}
                </Badge>
              </div>
              {expandedCategories.upgrades ? 
                <ChevronUp className="w-4 h-4 text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 text-slate-400" />
              }
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {upgrades.map((upgrade, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-2 text-sm text-slate-300">
                  {upgrade.name || upgrade}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}

        {/* Worn Items */}
        {wornItems.length > 0 && (
          <Collapsible open={expandedCategories.worn} onOpenChange={() => toggleCategory('worn')}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-2 rounded bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
              <div className="flex items-center gap-2">
                <Shirt className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Worn Items</span>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">
                  {wornItems.length}
                </Badge>
              </div>
              {expandedCategories.worn ? 
                <ChevronUp className="w-4 h-4 text-slate-400" /> : 
                <ChevronDown className="w-4 h-4 text-slate-400" />
              }
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              {wornItems.map((item, idx) => (
                <div key={idx} className="bg-slate-900/50 rounded-lg p-2 text-sm text-slate-300">
                  {item.name || item}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        )}
      </CardContent>
    </Card>
  );
}

function WeaponEntry({ weapon, onAmmoChange }) {
  const needsAmmo = weapon.ammoCapacity && weapon.ammoCapacity > 0;
  const currentAmmo = weapon.currentAmmo ?? weapon.ammoCapacity ?? 0;

  const handleAmmoChange = (delta) => {
    const newAmmo = Math.max(0, Math.min(weapon.ammoCapacity || 0, currentAmmo + delta));
    onAmmoChange(newAmmo);
  };

  const reloadInfo = weapon.reload || (weapon.usage ? `${weapon.usage} charges/shot` : null);

  return (
    <div className="bg-slate-900/50 rounded-lg p-3 space-y-2">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="font-medium text-white text-sm">{weapon.name}</div>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge variant="outline" className="text-xs border-purple-500/30 text-purple-300">
              {weapon.damage}
            </Badge>
            {weapon.range && (
              <Badge variant="outline" className="text-xs border-slate-500/30 text-slate-400">
                Range {weapon.range}
              </Badge>
            )}
            {weapon.bulk && weapon.bulk !== '—' && (
              <Badge variant="outline" className="text-xs border-slate-500/30 text-slate-400">
                Bulk {weapon.bulk}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {needsAmmo && (
        <>
          <Separator className="bg-slate-700" />
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">Ammo</span>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-medium ${
                  currentAmmo === 0 ? 'text-red-400' : 
                  currentAmmo <= (weapon.ammoCapacity || 0) / 4 ? 'text-amber-400' : 
                  'text-green-400'
                }`}>
                  {currentAmmo} / {weapon.ammoCapacity}
                </span>
              </div>
            </div>
            
            <div className="flex gap-1">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAmmoChange(-1)}
                className="flex-1 h-7 text-xs text-red-400 border-red-500/50"
                disabled={currentAmmo === 0}
              >
                <Minus className="w-3 h-3" />
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onAmmoChange(weapon.ammoCapacity)}
                className="flex-1 h-7 text-xs text-cyan-400 border-cyan-500/50"
              >
                Reload
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleAmmoChange(1)}
                className="flex-1 h-7 text-xs text-green-400 border-green-500/50"
                disabled={currentAmmo >= (weapon.ammoCapacity || 0)}
              >
                <Plus className="w-3 h-3" />
              </Button>
            </div>

            {reloadInfo && (
              <div className="text-xs text-slate-500 italic">
                {reloadInfo}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}