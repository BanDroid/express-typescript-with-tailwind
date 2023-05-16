import { Router } from "express";

const pages = Router();

pages.get("/", (req, res) => {
	res.render("pages/home");
});

export default pages;
