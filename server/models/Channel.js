const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
    link:{ type: String, required: true }, 
    name: { type: String, required: true },
    description: { type: String },
    type: { type: String, enum: ['public', 'private'], default: 'public' }, // Channel type: public or private
    admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the admin user for private channels
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Channel", ChannelSchema);