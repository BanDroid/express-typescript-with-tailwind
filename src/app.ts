import { log } from "console";
import { join } from "path";
import express from "express";
import cors from "cors";
import livereload from "livereload";
import connectLiveReload from "connect-livereload";

import RoutesHanlder from "./routes/handler";

const app = express();

/* development mode start */
if (process.env.NODE_ENV != "production") {
	const liveReloadServer = livereload.createServer();
	liveReloadServer.server.once("connection", () => {
		setTimeout(() => {
			log("refreshing browser...");
			liveReloadServer.refresh("/");
		}, 100);
	});
	app.use(connectLiveReload());
}
/* development mode end */

// view engine
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views"));

// middlewares
app.use(express.static(join(__dirname, "public")));
app.use(express.json());
app.use(cors());
app.use(RoutesHanlder);

app.listen(3000, () => {
	log("Server running...");
});
