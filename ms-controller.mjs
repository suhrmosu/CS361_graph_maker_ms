/*
  // Malcolm Suhr
    // suhrm @ oregonstate .edu
    // Citation for the following file:
    // Date 8.2.24
    // For OSU CS361 Microservice A project assignment 8 
    // created and updated for personal credential and demonstration
    // references third party libraries work and template express server functionality libraries
    // URL: https://www.npmjs.com/package/chart.js-image
    // URL: https://canvas.oregonstate.edu/groups/610053/discussion_topics/10732968?module_item_id=24453613
    // URL: https://canvas.oregonstate.edu/courses/1967421/pages/project-overview?module_item_id=24453571
*/

// Controllers for the microservice A Collection

import 'dotenv/config';
import express from 'express';
import * as visuals from './ms-graph.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.
import cors  from 'cors';
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/doughnut', (req, res) => {
    // make graph
    visuals.makeDoughnut(
        req.body.title, 
        req.body.categ)
    .then(chart => {
        console.log(` name: "${chart.title}" object: ${chart} images/_doughnut.jpg was created.`);
        // res.status(201).json(categ);
        // send result 
        // res.sendFile(`images/${encodeURI(req.body.title)}_doughnut.jpg` , { root : "./"});
        res.sendFile(`images/_doughnut.jpg` , { root : "./"});
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server encountered an error processing your request.' });
    });
});


app.post('/pie', (req, res) => {
    // make graph
    visuals.makePie(
        req.body.title, 
        req.body.categ)
    .then(chart => {
        console.log(` name: "${chart.title}" object: ${chart} images/_pie.jpg was created.`);
        // res.status(201).json(categ);
        // send result 
        // res.sendFile(`images/${encodeURI(req.body.title)}_pie.jpg` , { root : "./"});
        res.sendFile(`images/_pie.jpg` , { root : "./"});
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server encountered an error processing your request.' });
    });
});


app.post('/bar', (req, res) => {
    // make graph
    visuals.makeBar(
        req.body.title, 
        req.body.categ)
    .then(chart => {
        console.log(` name: "${chart.title}" object: ${chart} images/_bar.jpg was created.`);
        // res.status(201).json(categ);
        // send result 
        // res.sendFile(`images/${encodeURI(req.body.title)}_bar.jpg` , { root : "./"});
        res.sendFile(`images/_bar.jpg` , { root : "./"});
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server encountered an error processing your request.' });
    });
});

app.listen(PORT, () => {
    console.log(`Database Router Server listening on port ${PORT}...`);
});