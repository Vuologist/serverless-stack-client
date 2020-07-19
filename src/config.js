export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-uploads-abvu",
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://oeurt6zi39.execute-api.us-east-2.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_AHPfhKJgH",
    APP_CLIENT_ID: "3prvc49v7bp0i8vbftl527lekk",
    IDENTITY_POOL_ID: "us-east-2:ba01ed81-fa93-4efb-a7da-5c8d819c175a",
  },
};
