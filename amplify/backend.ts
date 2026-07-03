import { defineBackend } from '@aws-amplify/backend';
import { FunctionUrlAuthType, HttpMethod } from 'aws-cdk-lib/aws-lambda';
import { sayHello } from './functions/say-hello/resource';

const backend = defineBackend({
  sayHello,
});

// 브라우저에서 직접 호출할 수 있도록 Lambda Function URL을 노출
const functionUrl = backend.sayHello.resources.lambda.addFunctionUrl({
  authType: FunctionUrlAuthType.NONE,
  cors: {
    allowedOrigins: ['*'],
    allowedMethods: [HttpMethod.GET],
  },
});

backend.addOutput({
  custom: {
    sayHelloUrl: functionUrl.url,
  },
});
