import mongoose from "mongoose";
import User from "../models/UserModel.js";
import Message from "../models/MessageModel.js";


export const searchContacts = async (req, res, next) => {
    try {
        const { searchT } = req.body;

        if (searchT == undefined || searchT == null) {
            return res.status(400).send("searchTerm is required")
        }

        const sanitizedSearchTerm = searchT.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

        const regex = new RegExp(sanitizedSearchTerm, "i")
        const contacts = await User.find({
            $and: [{ _id: { $ne: req.userId } }, {
                $or: [{ firstName: regex }, { lastName: regex }, { email: regex }],
            }]
        })

        return res.status(200).json({ contacts });

    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};

export const getContactsForDMList = async (req, res, next) => {
    try {
        let { userId } = req;
        userId = new mongoose.Types.ObjectId(userId);

        const contacts = await Message.aggregate([
            {
                $match: {
                    $or: [{ sender: userId }, { recipient: userId }]
                }
            },
            {
                $sort: { timestamp: -1 }
            },
            {
                $group: {
                    _id: {
                        $cond: {
                            if: { $eq: ["$sender", userId] },
                            then: "$recipient",
                            else: "$sender"
                        }
                    },
                    lastMessageTime: { $first: "$timestamp" }
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "contactInfo"
                }
            },
            {
                $unwind: "$contactInfo"
            },
            {
                $project: {
                    _id: 1,
                    lastMessageTime: 1,
                    email: "$contactInfo.email",
                    firstName: "$contactInfo.firstName",
                    lastName: "$contactInfo.lastName",
                    image: "$contactInfo.image",
                    color: "$contactInfo.color"
                }
            },
            {
                $sort: { lastMessageTime: -1 }
            }
        ]);

        return res.status(200).json({ contacts });

    } catch (err) {
        console.log({ err });
        return res.status(500).send("Server Error");
    }
};
