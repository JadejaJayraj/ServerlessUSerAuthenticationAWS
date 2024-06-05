import { LambdaClient } from "@aws-sdk/client-lambda";
import { S3Client } from "@aws-sdk/client-s3";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";

const REGION = process.env.REACT_APP_AWS_REGION;
const ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY;
const SESSION_TOKEN = process.env.REACT_APP_AWS_SESSION_TOKEN;

const credentials = {
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  sessionToken: SESSION_TOKEN,
};

const lambdaClient = new LambdaClient({
  region: REGION,
  credentials,
});

const s3Client = new S3Client({
  region: REGION,
  credentials,
});

const dynamoDBClient = new DynamoDBClient({
  region: REGION,
  credentials,
});

export { lambdaClient, s3Client, dynamoDBClient };
