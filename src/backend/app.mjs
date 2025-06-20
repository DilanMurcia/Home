import express from "express";
//import { handler as ssrHandler } from '../../dist/server/entry.mjs';
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./infraestructure/express/routes/auth.routes.mjs";
import taksRoutes from "./infraestructure/express/routes/tasks.routes.mjs";

const app = express();


app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api", taksRoutes);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    app.use(express.static("client/dist"));

    app.get("*", (req, res) => {
        console.log(path.resolve("client", "dist", "index.html"));
        res.sendFile(path.resolve("client", "dist", "index.html"));
    });
}
app.use('/', express.static('dist/client/'));

//app.use(ssrHandler);

export default app;