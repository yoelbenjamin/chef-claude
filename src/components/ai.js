import Anthropic from "@anthropic-ai/sdk";
const apiKey = import.meta.env.VITE_APP_API_KEY;

const SYSTEM_PROMPT = "You are a helpful assistant that generates recipes based on the ingredients provided. Format your response in markdown to make it esaier to render to a webpage";

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_APP_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function GenerateRecipe(ingredientsList) {

  console.log('ingredientsList type:', typeof ingredientsList, ingredientsList);
  const ingredientsString = ingredientsList.join(", ");

  const msg = await anthropic.messages.create({
    model: "claude-3-5-sonnet-20240620",
    max_tokens: 1025,
    messages: [{ role: "user", content: ingredientsString }],
    system: SYSTEM_PROMPT,
  });
  return msg.content[0].text;
}