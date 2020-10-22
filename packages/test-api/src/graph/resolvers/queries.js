export const queryResolvers = {
    users: (_parent, { filter }, { dataSources }) => dataSources.users.findUsers(filter),

    
};
