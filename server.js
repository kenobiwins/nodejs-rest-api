const app = require("./app");
const { connectTocontactsMongoDB } = require("./services");
const { PORT = 3000 } = process.env;

(async function () {
  const isConnected = await connectTocontactsMongoDB();
  // 1 - Uncaught Fatal Exception: There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler.
  if (!isConnected) process.exit(1);

  app.listen(PORT, () => {
    console.log("Server running. Use our API on port: " + PORT);
  });
})();
