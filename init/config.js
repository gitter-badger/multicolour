"use strict"

// Get the path library to resolve where the content is.
const path = require("path")

module.exports = {
  // Where is your content? blueprints, etc
  content: path.join(__dirname, "/content"),

  // Are you developing? true or false
  debug: process.env.NODE_ENV !== "production",

  // If you would like authentication on your API and didn't enable during init, read
  // the documentation on auth methods (JWT or OAuth 2.0 currently) at
  // https://github.com/newworldcode/multicolour/blob/master/README.md#authenticating
  auth: {{AUTH_BLOCK}},

  // Configure our servers, api and frontend.
  http: {
    // Configures the REST server.
    api: {
      host: "localhost",
      port: 1811,
      routes: {
        cors: true
      },
      router: {
        stripTrailingSlash: true
      }
    }
  },

  // Set up our desired database adapter (defaults to Mongo)
  db: {
    adapters: {
      development: require("{{DATABASE_REQUIRE}}"),
      production: require("{{DATABASE_REQUIRE}}")
    },
    connections: {
      development: {
        adapter: "production",
        host: "localhost",
        port: 27017,
        // username: "username",
        // password: "password",
        database: "multicolour"
      },

      // production: {
      //   adapter: "production",
      //   host: "localhost",
      //   port: 27017,
      //   // username: "username",
      //   // password: "password",
      //   database: "multicolour"
      // }
    }
  }
}