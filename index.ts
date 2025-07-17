import express from "express";
import os from "os";

export const app = express();

app.get("/", (req,res) => {
    res.send("Hello world...!");
})

app.get("/cpu", (req,res) => {
    for(let i = 0; i < 1_000_000_0; i++){
        Math.random();
    }
    res.send("cpu intensive task...!");
})

app.get("/host", (req,res) => {
    res.send(os.hostname());
})
