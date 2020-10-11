const dev = {
  STRIPE_KEY:
    "pk_test_51H0ATqLIz07fIom9Sqaflpu74dqHB7q57wC7JmRGepLsHISYzTUZHBbriFtqCXU6ipLE3eibvSNMBbFli5TFY7fT00gIhAB6jl",
  s3: {
    REGION: "us-east-1",
    BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-ksdccomk90vf",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-learn.net/dev",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CwFg4kUqb",
    APP_CLIENT_ID: "6ksgtrnn58hspejg25d3uf4t9t",
    IDENTITY_POOL_ID: "us-east-1:d9ef569a-8a8e-4ead-bf84-137d61865fbf",
  },
};

const prod = {
  STRIPE_KEY:
    "pk_test_51H0ATqLIz07fIom9Sqaflpu74dqHB7q57wC7JmRGepLsHISYzTUZHBbriFtqCXU6ipLE3eibvSNMBbFli5TFY7fT00gIhAB6jl",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-voa3ffc3kymq",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://api.serverless-learn.net/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_OqMsJA5yq",
    APP_CLIENT_ID: "2op61rvrps0l2rtu47ie3b50b3",
    IDENTITY_POOL_ID: "us-east-1:eee11f8a-4319-44b8-91a8-5c49ea91602b",
  },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config,
};
