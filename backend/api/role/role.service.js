const jwt = require('express-jwt')
const jwksRsa = require('jwks-rsa')
const jwtAuthz = require('express-jwt-authz')

const authorizeAccessToken = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: `http://localhost:8080`,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: ["RS256"]
})

const checkPermissions = jwtAuthz(["delete:comments"], {
    customScopeKey: "permissions"
})
const checkCreatePermissions = jwtAuthz(["create:animals"], {
    customScopeKey: "permissions"
})

module.exports = {
    checkPermissions,
    authorizeAccessToken,
    checkCreatePermissions,
}