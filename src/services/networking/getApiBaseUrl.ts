export function getApiBaseUrl(): string {
  const baseUrl = process.env.REACT_APP_LAUNCH_LIBRARY_API_BASE_URL;

  if (!baseUrl) {
    throw new Error('Ooops! The api base url is not available!');
  }

  return baseUrl;
}
