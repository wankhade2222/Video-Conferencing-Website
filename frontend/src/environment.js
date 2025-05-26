let IS_PROD = true;

const server = IS_PROD
  ? "https://video-conferencing-website-fc3z.onrender.com"
  : "http://localhost:8000";

export default server;
