import { Authtypes } from "./authTypes";

const request = require("request");

const options = {
  method: 'POST',
  url: 'https://dev-cpifyj02.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/json' },
  body: '{"client_id":"24oLvfSpUeh2JkHmikMDUSrWkXxsITF7","client_secret":"R16OyeLx1wk74zm8e6b1zhnHrzJwToPhyZnslPcGdYh6IQub8f7HDqWb2hJHqVeT","audience":"https://dev-cpifyj02.us.auth0.com/api/v2/","grant_type":"client_credentials"}'
};

export const requestAuth = () => {
  request(options, function (error:string, response:{}, body:{}) {
    if (error) throw new Error(error);

    console.log(body);

    return(body)
  });

}


export const saveUserData = async (user:Authtypes) => {
  const dataToPost = {
    email : user?.email,
    email_verified : user?.email_verified,
    nickname : user?.nickname,
    password: user?.updated_at,
    picture : user?.picture,
  }
  const saveUser = await fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(dataToPost),
  });
  return saveUser.json();
}
