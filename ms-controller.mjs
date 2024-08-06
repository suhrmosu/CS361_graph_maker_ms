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
    visuals.makeGraph(
        req.body.title, 
        req.body.categ,
        'doughnut')
    .then(chart => {
        console.log(` name: images/_doughnut.jpg was created.`);
        res.sendFile(`images/_doughnut.jpg` , { root : "./"});
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server encountered an error processing your request.' });
    });
});


app.post('/pie', (req, res) => {
    visuals.makeGraph(
        req.body.title, 
        req.body.categ,
        'pie')
    .then(chart => {
        console.log(` name: images/_pie.jpg was created.`);
        res.sendFile(`images/_pie.jpg` , { root : "./"});
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'The server encountered an error processing your request.' });
    });
});


app.post('/bar', (req, res) => {
    visuals.makeGraph(
        req.body.title, 
        req.body.categ,
        'bar')
    .then(chart => {
        console.log(` name: images/_bar.jpg was created.`);
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