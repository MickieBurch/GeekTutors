const express = require('express');
const path = require('path');
const routes = require('./routes');
const {ApolloServer}=require("apollo-server-express")
const {typeDefs,resolvers}=require("./schemas")
const db = require('./config/connection');
const PORT = process.env.PORT || 3001;
const app = express();

let apolloServer = null;
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}
startServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`);
});
