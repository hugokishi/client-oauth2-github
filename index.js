var express = require('express')
var ClientOAuth2 = require('client-oauth2')
const { inspect } = require('util');

const app = express();


/*
  Change the value of client Id, Secret Id, acessTokenUri, authorizationUri, redirectUri and scopes based on your configuration.
  In this example we use ClientOAuth2 to authenticate using GitHub credentials.
  The "user" object returns the request values, it contains all the data.
*/
var githubAuth = new ClientOAuth2({
  clientId: 'your_client_id',
  clientSecret: 'your_client_secret',
  accessTokenUri: 'acesstokenuri',
  authorizationUri: 'authorizationuri',
  redirectUri: 'redirecturi',
  scopes: ['scopes']
})
var token = githubAuth.createToken('access token', 'optional refresh token', 'optional token type', { data: '2020-03-04' });


var storeNewToken;
token.expiresIn(1234);
token.expiresIn(new Date('2020-03-04'));
token.refresh().then(storeNewToken);

token.sign({
    method: 'get',
    url: 'https://api.github.com/users'
});

app.get('/auth/github', function (req, res) {
  var uri = githubAuth.code.getUri();
 
  res.redirect(uri)
})

app.get('/auth/github/callback', function (req, res) {
  githubAuth.code.getToken(req.originalUrl)
    .then(function (user) {
        console.log(user);
        user.refresh().then(function (updatedUser) {
        console.log(updatedUser !== user);
        console.log(updatedUser.accessToken);
      })
      user.sign({
          method: 'get',
          url: 'http://localhost:3333/auth/github'
        })   
        return res.send(inspect(user)); 
      })
  });

app.listen(3333);
