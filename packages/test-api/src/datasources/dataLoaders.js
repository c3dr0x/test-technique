// Libs
import DataLoader from "dataloader";

// Model
import { userModel } from "../models";

export function makeDataLoaders() {
    const userDataLoader = new DataLoader((userIds) => {
        return userModel
            .find({ _id: { $in: userIds } })
            .lean()
            .then((users) => users.map((user) => ({ ...user, _id: user._id.toString() })))
            .then((users) => {
                return userIds.map((userId) => users.find((user) => user._id === userId.toString()));
            });
    });
    

    return {
        user: userDataLoader,
    
    };
}
