Hi, This is Malcolms Doughnut Maker (microservice A)

Here, we are pleased to offer freshly baked doughnut graphs to your data specifications.

We also can offer pies and bars. All our products are prepared to order, and sourced directly from our distributor: the third party service 'chart.js-image'

https://www.npmjs.com/package/chart.js-image

https://image-charts.com

These services are leveraged for free courtesy of their open source code library module on npm. 

This microservice is intended as an encapsulated abstraction to compute and produce the static graph images per client specifications through leveraging an express server running on the clients LocalHost. This abstraction allows for access to the chart.js library and the associated image generation service, without the need to integrate the library into your program directly. 

All communication with this microservice follows the following API endpoint request/response documentation; A.K.A. the "Communication Contract"

Requests
Doughnut
client side sample function call request part:
```javascript
const loadPix = async () => {
      const pix = await fetch('http://localhost:3333/pix', {
        method: 'post',
        body: JSON.stringify({
          title: "MY doughnut",
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
```json
{
    title: "graphTitle",
    categ: [
        {name: "categoryName", value: 1},
        {name: "categoryName2", value: 2},
        {name: "categoryName3", value: 3},
    ]
}
```

Response 
Doughnut
client side sample function call receive data part:
```javascript
      const imageBlob = await pix.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      // store the image url in state variable      
      setPix(imageObjectURL);
```
then the image can be called from within the program
```html
<img style={{maxHeight: '500px' }} src={pixState} alt="graph" />
```