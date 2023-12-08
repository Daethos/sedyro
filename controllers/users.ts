const Ascean = require('../models/ascean');
const User = require('../models/user');
import { redirect } from "solid-start/server";
import { createCookieSessionStorage } from "solid-start/session";
import { jwt } from 'jsonwebtoken';
const SECRET = process.env.SECRET!;

module.exports = {
    register,
    login
};

async function register(req: any, res: any) {
    const user = new User(req.body);
    try {
        await user.save();
        const token = createJWT(user);
        res.json({ token });
    } catch (err: any) {
        res.status(400).json(err);
    };
};

async function login(req: any, res: any) {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ err: 'bad credentials' });
    user.comparePassword(req.body.password, (err: Error, isMatch: boolean) => {
        if (isMatch) {
            const token = createJWT(user);
            res.json({ token });
        } else {
            return res.status(401).json({ err: 'bad credentials' });
        };
    });
};

function createJWT(player: any): string {
    return jwt.sign(
        { player },
        SECRET,
        { expiresIn: '30d' }
    );
};