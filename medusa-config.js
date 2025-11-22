// medusa-config.js
require('dotenv').config();  // Load .env file (for Render secret file)

module.exports = {
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,  // Optional
    http: {
      storeCors: process.env.STORE_CORS || "",
      adminCors: process.env.ADMIN_CORS || "",
      authCors: process.env.AUTH_CORS || "",
      jwtSecret: process.env.JWT_SECRET,
      cookieSecret: process.env.COOKIE_SECRET,
    },
    admin: {
      disable: process.env.ADMIN_DISABLED === "true" || true,  // Disable admin to skip bundler
    },
  },
};