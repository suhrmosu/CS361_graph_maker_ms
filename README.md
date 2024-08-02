# CS361 Doughnut Graph Maker (microservice A) assignment 8

Hi, This is Malcolms Doughnut Maker (microservice A)

Here, we are pleased to offer freshly baked doughnut graphs to your data specifications.

We also can offer pies and bars. All our products are prepared to order, and sourced directly from our distributor: the third party service 'chart.js-image'

https://www.npmjs.com/package/chart.js-image

https://image-charts.com

These services are leveraged for free courtesy of their open source code library module on npm. 

This microservice is intended as an encapsulated abstraction to compute and produce the static graph images per client specifications through leveraging an express server running on the clients LocalHost. This abstraction allows for access to the chart.js library and the associated image generation service, without the need to integrate the library into your program directly. 

All communication with this microservice follows the following API endpoint request/response documentation; A.K.A. the "Communication Contract"

# Micro Service Install and Setup
## Initialize the microservice server on LocalHost
First, please download this repository to your local drive. 
Then, from within the root, please add the following .env file, named as such
```
PORT=3333
```
please resolve any port use conflicts, if applicable. 

Next, in a console terminal, from the root directory of this repository you've downloaded,
run:
```BASH
npm install
```
then, when the dependencies are installed,
run:
```BASH
npm start
```
This should conclude the microservice install and startup.

# Main Program Client Side Integration
## Requests
### Doughnut
client side sample function call request from a Node.js React server:
```javascript
const loadPix = async () => {
      const pix = await fetch('http://localhost:3333/doughnut', {
        method: 'post',
        body: JSON.stringify({
          title: "Title of doughnut graph",
          categ: [
            {name: "1", value: 245},
            {name: "2", value: 932},
            {name: "3", value: 466},
            {name: "4", value: 276},
            {name: "5", value: 156},
            {name: "6", value: 842},
          ]
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    // receive data code goes here... 
    }  
```
here the JSON body in the request can be substituted dynamically following the types:
```
{
    title: "graphTitle",
    categ: [
        {name: "categoryName", value: 1},
        {name: "categoryName2", value: 2},
        {name: "categoryName3", value: 3},
    ]
}
```
This format style can be dynamically utilized to pass data from your program. Only graph title, and the array of category names and values are currently supported as inputs. There is no limit on categories, though colors may repeat for larger lists of categories. 

You may also make fetch requests to the micro service endpoints for the following other graph types, following the same JSON body format.
```
http://localhost:3333/pie
```
```
http://localhost:3333/bar
```

## Response 
### Doughnut
client side sample function call receive data, storing the data blob as url reference:
```javascript
      const imageBlob = await pix.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      // store the image url in state variable      
      setPix(imageObjectURL);
```
this depends on setting the following react varaible in state, and declaring useState
```javascript
  import React, {useState} from 'react';

  const [pixState, setPix] = useState(undefined);
```

Then, the image can be called by url from within the program
```javascript
<img style={{maxHeight: '500px' }} src={pixState} alt="graph" />
```

Please see the sample file "HomePage.js" for a demonstration use case how this service might be called from a React front end, here simply pulling some basic data from a form mixed with static example data. 