module.exports = ({ env }) => ({
  "users-permissions": {
    jwtSecret: env("ADMIN_JWT_SECRET"),
  },
});
