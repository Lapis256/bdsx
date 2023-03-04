import { abstract } from "../common";
import { CxxVector } from "../cxxvector";
import { NativeClass, nativeClass, nativeField, NativeStruct } from "../nativeclass";
import { int32_t, uint32_t } from "../nativetype";
import { ItemStack } from "./inventory";

export namespace Enchant {
    export enum Type {
        ArmorAll,
        ArmorFire,
        ArmorFall,
        ArmorExplosive,
        ArmorProjectile,
        ArmorThorns,
        WaterBreath,
        WaterSpeed,
        WaterAffinity,
        WeaponDamage,
        WeaponUndead,
        WeaponArthropod,
        WeaponKnockback,
        WeaponFire,
        WeaponLoot,
        MiningEfficiency,
        MiningSilkTouch,
        MiningDurability,
        MiningLoot,
        BowDamage,
        BowKnockback,
        BowFire,
        BowInfinity,
        FishingLoot,
        FishingLure,
        FrostWalker,
        Mending,
        CurseBinding,
        CurseVanishing,
        TridentImpaling,
        TridentRiptide,
        TridentLoyalty,
        TridentChanneling,
        CrossbowMultishot,
        CrossbowPiercing,
        CrossbowQuickCharge,
        SoulSpeed,
        SwiftSneak,

        NumEnchantments,
        InvalidEnchantment,
    }

    export enum Slot {
        All = -1,
        None = 0,
        ArmorHelmet = 0x1,
        ArmorChest = 0x2,
        ArmorBoots = 0x4,
        ArmorLeggings = 0x8,
        Sword = 0x10,
        Bow = 0x20,
        Hoe = 0x40,
        Shears = 0x80,
        FlintAndSteel = 0x100,
        Axe = 0x200,
        Pickaxe = 0x400,
        Shovel = 0x800,
        FishingRod = 0x1000,
        CarrotStick = 0x2000,
        Elytra = 0x4000,
        Spear = 0x8000,
        Crossbow = 0x10000,
        Shield = 0x20000,
        EquipableBlock = 0x40000,
        Compass = 0x80000,
        WarpedFungusStick = 0x100000,
    }
}

export enum EnchantmentNames {
    Protection = 0,
    FireProtection = 1,
    FeatherFalling = 2,
    BlastProtection = 3,
    ProjectileProtection = 4,
    Thorns = 5,
    Respiration = 6,
    DepthStrider = 7,
    AquaAffinity = 8,
    Sharpness = 9,
    Smite = 10,
    BaneOfArthropods = 11,
    Knockback = 12,
    FireAspect = 13,
    Looting = 14,
    Efficiency = 15,
    SilkTouch = 16,
    Unbreaking = 17,
    Fortune = 18,
    Power = 19,
    Punch = 20,
    Flame = 21,
    Infinity = 22,
    LuckOfTheSea = 23,
    Lure = 24,
    FrostWalker = 25,
    Mending = 26,
    BindingCurse = 27,
    VanishingCurse = 28,
    Impaling = 29,
    Riptide = 30,
    Loyalty = 31,
    Channeling = 32,
    Multishot = 33,
    Piercing = 34,
    QuickCharge = 35,
    SoulSpeed = 36,
    SwiftSneak = 37,
}

export type Enchantments = EnchantmentNames | Enchant.Type;

@nativeClass()
export class EnchantmentInstance extends NativeStruct {
    /**
     * @deprecated use {@link getEnchantType} instead. The native type of this property is incorrect.
     */
    @nativeField(int32_t)
    type: Enchantments;
    @nativeField(int32_t)
    level: int32_t;

    getEnchantType(): Enchantments {
        abstract();
    }
    setEnchantLevel(level: number): void {
        abstract();
    }
}

@nativeClass()
export class ItemEnchants extends NativeClass {
    /**
     * @deprecated use {@link getSlot} instead. The native type of this property is incorrect.
     */
    @nativeField(uint32_t)
    slot: uint32_t;
    @nativeField(CxxVector.make(EnchantmentInstance), 0x08)
    /** 1-8 */
    enchants1: CxxVector<EnchantmentInstance>;
    /** 9-18 */
    @nativeField(CxxVector.make(EnchantmentInstance))
    enchants2: CxxVector<EnchantmentInstance>;
    /** >19 */
    @nativeField(CxxVector.make(EnchantmentInstance))
    enchants3: CxxVector<EnchantmentInstance>;

    getSlot(): Enchant.Slot {
        abstract();
    }
}

export namespace EnchantUtils {
    export function applyEnchant(itemStack: ItemStack, enchant: Enchantments, level: number, allowUnsafe: boolean): boolean {
        abstract();
    }
    export function getEnchantLevel(enchant: Enchantments, itemStack: ItemStack): number {
        abstract();
    }
    export function hasCurse(itemStack: ItemStack): boolean {
        abstract();
    }
    export function hasEnchant(enchant: Enchantments, itemStack: ItemStack): boolean {
        abstract();
    }
}
