const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asceanSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    constitution: Number,
    strength: Number,
    agility: Number,
    achre: Number,
    caeren: Number,
    kyosir: Number,
    hardcore: { type: Boolean, default: false },
    alive: {
        type: Boolean,
        default: true,
    },
    lineage: [{
        type: Schema.Types.ObjectId,
        ref: 'Ascean'
    }],
    coordinates: {
        x: { type: Number, default: 0 },
        y: { type: Number, default: 0 },
    },
    faith: {
        type: String,
        enum : ["adherent", "devoted", "none"],
        default: "none"
    },
    firewater: {
        charges: { type: Number, default: 5 },
        maxCharges: { type: Number, default: 5 },
    },
    health: {
        current: { type: Number, default: -1 },
        total: { type: Number, default: 0 }
    },
    inventory: { type: [], default: null },
    journal: {
        entries: {
            type: [{
                title: String,
                body: String,
                footnote: String,
                date: Date,
                location: String,
                coordinates: {
                    x: Number,
                    y: Number,
                },
            }],
            default: null
        },
        currentEntry: {
            type: Number,
            default: 0,
        },
        lastEntry: {
            type: Number,
            default: 0,
        },
    },
    mastery: {
        type: String,
        enum : ["Constitution", "Strength", "Agility", "Achre", "Caeren", "Kyosir"],
        default: "Constitution"
    },
    origin: {
        type: String,
        enum : ["Ashtre", "Fyers", "Li'ivi", "Notheo", "Nothos", "Quor'eite", "Sedyreal"],
        default: "Ashtre"
    },
    sex:  {
        type: String,
        enum: ["Man", "Woman"],
        default: "Man"
    },
    weaponOne: {
        type: Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    weaponTwo: {
        type: Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    weaponThree: {
        type: Schema.Types.ObjectId,
        ref: 'Weapon'
    },
    shield: {
        type: Schema.Types.ObjectId,
        ref: 'Shield'
    },
    helmet: {
        type: Schema.Types.ObjectId,
        ref: 'Helmet'
    },
    chest: {
        type: Schema.Types.ObjectId,
        ref: 'Chest'
    },
    legs: {
        type: Schema.Types.ObjectId,
        ref: 'Legs'
    },
    ringOne: {
        type: Schema.Types.ObjectId,
        ref: 'Ring'
    },
    ringTwo: {
        type: Schema.Types.ObjectId,
        ref: 'Ring'
    },
    amulet: {
        type: Schema.Types.ObjectId,
        ref: 'Amulet'
    },
    trinket: {
        type: Schema.Types.ObjectId,
        ref: 'Trinket'
    },
}, { timestamps: true });

module.exports = mongoose.model('Ascean', asceanSchema);