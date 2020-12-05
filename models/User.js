const { Schema, model } = require('mongoose');

// const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
        
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);

CommentSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});



const User = model('User', UserSchema);

module.exports = User;