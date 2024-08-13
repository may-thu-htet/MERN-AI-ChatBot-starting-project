import { Configuration } from "openai";

export function configureOpenAI() {
  const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORGANIZATION_ID,
  });
  return config;
}
