const router = require("express").Router();
const Channel = require("../models/Channel");
const User = require("../models/User");

// get all channels
router.get("/all", async(req, res)=>{
    try {
        const data = await Channel.find();
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
});

//get channel by link id
router.get("/:link", async(req, res) => {
    try {
        const link = req.params;
        const data = await Channel.findOne(link);
        res.status(200).json(data);   
    } catch (error) {
        console.log(error);
    }
})
// Get all channels that the user is a member of
router.get("/user/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const channels = await Channel.find({ members: userId });
        res.status(200).json(channels);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Add user to a channel
router.post("/:channelId/addUser/:userId", async (req, res) => {
    try {
        const { channelId, userId } = req.params;
        const user = await User.findById(userId);
        const channel = await Channel.findById(channelId);
        if (!user || !channel) {
            return res.status(404).json({ message: "User or channel not found" });
        }
        if (channel.members.includes(userId)) {
            return res.status(400).json({ message: "User is already a member of the channel" });
        }
        channel.members.push(userId);
        await channel.save();

        res.status(200).json({ message: "User added to the channel successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Create a new channel
router.post("/create", async (req, res) => {
    try {
        const { link, name, description, isPrivate, userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        let newChannel;
        if (isPrivate) {
            newChannel = new Channel({
                link,
                name,
                description,
                isPrivate,
                admin: userId, 
                members: [userId] 
            });
        } else {
            newChannel = new Channel({
                link,
                name,
                description,
                isPrivate,
                members: [userId] 
            });
        }
        const savedChannel = await newChannel.save();
        res.status(201).json({ message: "Channel created successfully", channel: savedChannel });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});


// Remove a user from a private channel (admin only)
router.put("/:channelId/removeUser/:userId", async (req, res) => {
    try {
        const { channelId, userId } = req.params;
        const { adminId } = req.body; 
        const admin = await User.findById(adminId);
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        const channel = await Channel.findById(channelId);
        if (!channel || !channel.admin.equals(adminId)) {
            return res.status(403).json({ message: "You are not authorized to remove users from this channel" });
        }
        const index = channel.members.indexOf(userId);
        if (index !== -1) {
            channel.members.splice(index, 1);
            await channel.save();
            return res.status(200).json({ message: "User removed from the channel successfully" });
        } else {
            return res.status(404).json({ message: "User is not a member of the channel" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
