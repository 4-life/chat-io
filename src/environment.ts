export default function env() {
  if (process.env.NODE_ENV === 'production') {
    return {
      SERVER_URL: 'https://chat-io-server-4life.herokuapp.com/',
      PRODUCTION: true,
    };
  }

  return {
    SERVER_URL: 'http://localhost:3005/',
  };
}
