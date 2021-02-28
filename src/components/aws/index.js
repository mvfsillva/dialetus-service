import AWS from 'aws-sdk';
import dotenv from 'dotenv';

function loadAWSConfiguration() {
  if (!process.env.PROFILE_NAME || process.env.PROFILE_NAME === 'local') {
    dotenv.config({ path: 'env' });
    AWS.config.update({ region: process.env.AWS_LOCAL_CONFIG_REGION });
    const credentials = new AWS.SharedIniFileCredentials({
      profile: process.env.AWS_LOCAL_CONFIG_PROFILE_NAME,
    });
    AWS.config.credentials = credentials;
  }
  return AWS;
}

export { loadAWSConfiguration };
