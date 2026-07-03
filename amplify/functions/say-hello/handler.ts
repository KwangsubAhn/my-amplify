import type { Handler } from 'aws-lambda';

// 직접 invoke({ name }) 와 Function URL(?name=...) 호출을 모두 지원
export const handler: Handler = async (event) => {
  const name = event?.name ?? event?.queryStringParameters?.name ?? 'World';
  return {
    statusCode: 200,
    body: `Hello, ${name}!`,
  };
};
