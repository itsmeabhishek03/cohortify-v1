const router = require("express").Router();
const Channel = require("../models/Channel");
const Message = require("../models/Message");

// Get messages from a channel for a specific user
router.get("/:channelId/messages/:userId", async (req, res) => {
    try {
        const { channelId, userId } = req.params;
        const channel = await Channel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }

        // Check if the user is a member of the channel
        if (!channel.members.includes(userId)) {
            return res.status(403).json({ message: "You are not authorized to access messages from this channel" });
        }

        const messages = await Message.find({ channelId });
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// post messages to a channel
router.post("/", async (req, res) => {
    try {
      
        const { content, sender, channel } = req.body;
        const getChannel = await Channel.findById(channel);
        if (!getChannel) {
            return res.status(404).json({ message: "Channel not found" });
        }
                // Check if the user is a member of the channel
        if (!getChannel.members.includes(sender)) {
            return res.status(403).json({ message: "You are not authorized to access messages from this channel" });
        }
        const newMessage = new Message({
            content,
            sender,
            channel
        });
        const savedMessage = await newMessage.save();
        res.status(201).json({ message: "Message sent successfully", message: savedMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
