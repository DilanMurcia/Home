import app from "./app.mjs";
import { PORT } from "./config.mjs";
import { connectDB } from "./db.mjs";

async function main() {
  try {
    await connectDB();
    app.listen(PORT);
    console.log(`Listening on port http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error);
  }
}

main();