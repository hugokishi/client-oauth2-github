# Client-OAuth2 Authentication - GitHub

# Installation
  ```sh
  git clone https://github.com/hugokishi/client-oauth2-github.git
  ```
  After the git clone, run:
  ```sh
  npm install
  ```
  
# Usage

  To authenticate, you need to define the ID and routes in the module instance in the 'index.js' file.
  ```javascript
  var githubAuth = new ClientOAuth2({
    clientId: 'your_client_id',
    clientSecret: 'your_client_secret',
    accessTokenUri: 'acesstokenuri',
    authorizationUri: 'authorizationuri',
    redirectUri: 'redirecturi',
    scopes: ['scopes']
  })
  ```
  PS: You have the option to change the request routes, in this example used on GitHub.
  
# Options (global and method-based)

* **clientId**: The client id string assigned to you by the provider.
* **clientSecret**: The client secret string assigned to you by the provider (not required for `token`).
* **accessTokenUri**: The url to request the access token (not required for `token`).
* **authorizationUri**: The url to redirect users to authenticate with the provider (only required for `token` and `code`)
* **redirectUri**: A custom url for the provider to redirect users back to your application (only required for `token` and `code`).
* **scopes**: An array of scopes to authenticate against.
* **state**: Nonce sent back with the redirect when authorization is complete to verify authenticity (should be random for every request).

# Request Options

* **body**: An object to merge with the body of every request.
* **query**: An object to merge with the query parameters of every request.
* **headers**: An object to merge with the headers of every request.

# Fonts
  Everything in this repository was based on the Client-OAuth2 documentation.
  
  For more information, follow the documentation.<br>
  https://github.com/mulesoft/js-client-oauth2
