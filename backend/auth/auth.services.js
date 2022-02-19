const jsonwebtoken = require('jsonwebtoken')
const compose = require('composable-middleware')

function isAuthenticated(){
    return compose().use(async (req, res, next) => {
        try{
            const authHeader = req.headers.authorization
            if(authHeader){
                const [,token]= authHeader.split(' ')
                const payload = await validateToken(token)
                console.log(payload)
                if(!payload){
                    const user = await getUserByEmail(payload.email);
                    if (!user) {
                    return res
                        .status(401)
                        .json({
                        message: 'Unauthorized',
                        })
                        .end();
                    }
                }
                req.user = user;
                next();
                return null;
            } else {
                return res
                .status(401)
                .json({
                    message: 'Unauthorized',
                })
                .end();
            }
        }
        catch (error) {
            return next(error)
        }
    })
}

async function validateToken(token) {
    try {
    const payload = await jsonwebtoken.verify(token, config.secrets.session);
    return payload;
    } catch (error) {
    return null;
    }
}

function hasRole(rolesRequired = []) {
    if (!rolesRequired.length) {
    throw new Error('Required role needs to be set');
    }
    return compose()
    .use(isAuthenticated())
    .use((req, res, next) => {
        const { role } = req.user;
        if (config.userRoles.includes(role)) {
        next();
        } else {
        res.status(403).send('forbidden');
        }
    });
}

module.exports = {
    isAuthenticated,
    hasRole,
}