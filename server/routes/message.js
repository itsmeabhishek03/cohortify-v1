const router = require("express").Router();
const Channel = require("../models/Channel");
const Message = require("../models/Message");

// Get messages from a channel
router.get("/:channelId/messages", async (req, res) => {
    try {
        const { channelId } = req.params;
        const channel = await Channel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }
        const messages = await Message.find({ channelId });
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// post messages to a channel
router.post("/:channelId/messages", async (req, res) => {
    try {
        const { channelId } = req.params;
        const { userId, content } = req.body;
        const channel = await Channel.findById(channelId);
        if (!channel) {
            return res.status(404).json({ message: "Channel not found" });
        }
        const newMessage = new Message({
            channelId,
            userId,
            content
        });
        const savedMessage = await newMessage.save();
        res.status(201).json({ message: "Message sent successfully", message: savedMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
