import express from "express";
import cookieParser from "cookie-parser";
app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(cookieParser())




export {app};

