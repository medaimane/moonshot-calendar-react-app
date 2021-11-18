export function getApiKey(): string {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  if (!apiKey) {
    throw new Error("Ooops! The Google map's api key is not available!");
  }

  return apiKey;
}
