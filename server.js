#!/usr/bin/env node

import {rpsls, rps} from './lib/lib/rpsls.js';
import minimist from "minimist";
import express from 'express';

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/app', function(req, res) {
    res.status(200).send("200 OK");
});
app.get('/app/rps', function(req, res) {
    res.status(200).send(rps());
});
app.get('/app/rpsls', function(req, res) {
    res.status(200).send(rpsls());
});

app.get('/app/rps/play', function(req, res) {
    res.status(200).send(rps(req.query.shot));
});
app.get('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpsls(req.query.shot));
});
app.post('/app/rps/play', function(req, res) {
    res.status(200).send(rps(req.body.shot));
});
app.post('/app/rpsls/play', function(req, res) {
    res.status(200).send(rpsls(req.body.shot));
});

app.get('/app/rps/play/:shot', function(req, res) {
    res.status(200).send(rps(req.params.shot));
});
app.get('/app/rpsls/play/:shot', function(req, res) {
    res.status(200).send(rpsls(req.params.shot));
});

app.get('*', function(req, res){
      res.status(404).send('404 NOT FOUND');
});
app.listen(port, () => {
    //nothing
});
