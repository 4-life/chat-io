export default function env() {
  if (process.env.NODE_ENV === 'production') {
    return {
      SERVER_URL: 'https://zenchat-438516.lm.r.appspot.com/',
      PRODUCTION: true,
    };
  }

  return {
    SERVER_URL: 'http://localhost:3005/',
  };
}
