import { Router } from "express";

const pages = Router();

pages.get("/", (req, res) => {
	res.render("pages/home");
});
pages.get("/hello", (req, res) => {
	res.render("pages/test");
});

export default pages;
