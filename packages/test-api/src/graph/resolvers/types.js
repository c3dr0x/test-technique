import { USER_ROLE_ENUM } from "../../models";

export const typeResolvers = {
    User: {
        id(parent, _args, _context) {
            return parent._id.toString();
        },
    },
    
};
