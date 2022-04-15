const corsProxy = require("cors-anywhere");

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable.
const PORT = process.env.PORT || 8080;

corsProxy
  .createServer({
    originWhitelist: [
      "http://nxtgem.io",
      "http://localhost:3000",
      "https://nxtgem.io",
      "https://api.howrare.is/v0.1/drops",
      "https://altdeck-user-frontend-new.vercel.app",
      "https://www.altdeck.io",
    ],
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(PORT, host, () => {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
