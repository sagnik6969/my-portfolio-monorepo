import { app } from "./config";
import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";

const ai = getAI(app, { backend: new GoogleAIBackend() });

const model = getGenerativeModel(ai, { model: "gemini-2.5-flash" });

export async function run() {
  // Provide a prompt that contains text
  const prompt = "Write a story about a magic backpack.";

  // To generate text output, call generateContent with the text input
  const result = await model.generateContent(prompt);

  const response = result.response;
  const text = response.text();
  console.log(text);
}
