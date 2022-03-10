export default {
  oidc: {
    clientId: '0oa618cdymzXxruqg5d6',
    issuer: 'https://dev-87969026.okta.com/',
    redirectUri: 'http://localhost:4200/login/callback',
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: false,
    },
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};
