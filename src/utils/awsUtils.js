
import 'aws-sdk/dist/aws-sdk';
const AWS = window.AWS;

export function configCredentials(accessToken, callback) {

  AWS.config.update({
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:84087acb-aaf3-4f79-81fa-c1ac59095139',
      Logins: {
        'graph.facebook.com': accessToken
      }
    }),
    region: 'us-east-1'
  });

  callback();

}

export function Lambda(options, callback) {

  function tick() {
    if (!AWS.config.credentials) {
      window.requestAnimationFrame(tick);
    } else {
      AWS.config.credentials.get(err => {
        if (err) {
          console.log(err);
        } else {
          let lambda = new AWS.Lambda();
          lambda.invoke(options, callback);
        }
      });
    }

  }

  window.requestAnimationFrame(tick);


}
