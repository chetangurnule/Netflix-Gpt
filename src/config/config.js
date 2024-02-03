const config = {
  tmdbToken: String(import.meta.env.VITE_TMDB_TOKEN),
  baseApiUrl: String(import.meta.env.VITE_BASE_URL),
  imageUrl: String(import.meta.env.VITE_IMAGE_URL),
};

export default config;
