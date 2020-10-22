// Libs
import { ApolloServer } from "apollo-server";

// Graph
import { schema, resolvers } from "./graph";
import { makeDataLoaders, userDatasource } from "./datasources";

export const server = new ApolloServer({
    resolvers,
    typeDefs: schema,
    dataSources: () => {
        const dataLoaders = makeDataLoaders()
        return {
            users: userDatasource(dataLoaders),
        };
    },
});
