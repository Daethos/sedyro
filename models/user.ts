const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    name: String,
    password: String
}, { timestamps: true });

userSchema.set('toJSON', {
    transform: function(_doc: any, ret: any) {
        delete ret.password;
        return ret;
    }
});

userSchema.set('toObject', {
    transform: function(_doc: any, ret: any) {
        delete ret.password;
        return ret;
    }
});

userSchema.pre('save', function (this: any, next: (arg0?: undefined) => void) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err: any, hash: any) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword: any, cb: (err: Error | null, isMatch?: boolean) => void) {
    bcrypt.compare(tryPassword, this.password, function(err: Error | null, isMatch: boolean) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema);