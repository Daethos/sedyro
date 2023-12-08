const equipmentSchema = new Schema({
    name: { type: String, required: false },
    type: { type: String, required: false },
    itemType: { type: { type: String, required: false }, default: 'Equipment' },
    rarity: { type: String, required: false },
    grip: { type: String, required: false },
    attackType: { type: String, required: false },
    criticalChance: { type: Number, required: false },
    criticalDamage: { type: Number, required: false },
    damageType: { type: [], default: null, required: false },
    magicalDamage: { type: Number, required: false },
    physicalDamage: { type: Number, required: false },
    magicalPenetration: { type: Number, required: false },
    physicalPenetration: { type: Number, required: false },
    physicalResistance: { type: Number, required: false },
    magicalResistance: { type: Number, required: false },
    dodge: { type: Number, required: false },
    roll: { type: Number, required: false },
    constitution: { type: Number, required: false },
    strength: { type: Number, required: false },
    agility: { type: Number, required: false },
    achre: { type: Number, required: false },
    caeren: { type: Number, required: false },
    kyosir: { type: Number, required: false },
    influences: { type: [], default: null, required: false },
    imgURL: { type: String }
});

module.exports = mongoose.model('Equipment', equipmentSchema);