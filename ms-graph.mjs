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

// module to compute the graph
import { Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    ArcElement, 
    Tooltip, 
    Legend 
} from 'chart.js';

import ChartJSImage from 'chart.js-image';

ChartJS.register(
    ArcElement,  
    CategoryScale,
    LinearScale,
    BarElement,
    Title, 
    Tooltip, 
    Legend);

const makeDoughnut = async (title, categ) => {
    const myLineChart = 
        ChartJSImage().chart(
        {
            type: 'doughnut',
            data: {
                labels: categ.map(row => row.name),
                datasets: [
                {
                    label: 'Category by Value',
                    data: categ.map(row => row.value),
                    hoverOffset: 0
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'chartArea',
                  },
                title: {
                    display: true,
                    text: title
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index',
                },
              },
            }
    ).backgroundColor('white')
    .width(500) // 500px
    .height(300); // 300px
    
    myLineChart.toURL(); 
    // await myLineChart.toFile(`./images/${encodeURI(title)}_doughnut.jpg`); 
    await myLineChart.toFile(`./images/_doughnut.jpg`); 
    myLineChart.toDataURI(); 
    myLineChart.toBuffer(); 
    return myLineChart
}

const makePie = async (title, categ) => {
    const myLineChart = 
        ChartJSImage().chart(
        {
            type: 'pie',
            data: {
                labels: categ.map(row => row.name),
                datasets: [
                {
                    label: 'Category by Value',
                    data: categ.map(row => row.value),
                    hoverOffset: 0
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'chartArea',
                  },
                title: {
                    display: true,
                    text: title
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index',
                },
              },
            }
    ).backgroundColor('white')
    .width(500) // 500px
    .height(300); // 300px
    
    myLineChart.toURL(); 
    // await myLineChart.toFile(`./images/${encodeURI(title)}_pie.jpg`); 
    await myLineChart.toFile(`./images/_pie.jpg`); 
    myLineChart.toDataURI(); 
    myLineChart.toBuffer(); 
    return myLineChart
}


const makeBar = async (title, categ) => {
    const myLineChart = 
        ChartJSImage().chart(
        {
            type: 'bar',
            data: {
                labels: categ.map(row => row.name),
                datasets: [
                {
                    label: 'categories',
                    data: categ.map(row => row.value),
                    hoverOffset: 0
                }
                ]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'chartArea',
                  },
                title: {
                    display: true,
                    text: title
                },
                tooltips: {
                    mode: 'index',
                },
                hover: {
                    mode: 'index',
                },
              },
            }
    ).backgroundColor('white')
    .width(500) // 500px
    .height(300); // 300px
    
    myLineChart.toURL(); 
    // await myLineChart.toFile(`./images/${encodeURI(title)}_bar.jpg`); 
    await myLineChart.toFile(`./images/_bar.jpg`); 
    myLineChart.toDataURI(); 
    myLineChart.toBuffer(); 
    return myLineChart
}
    

export {makeDoughnut, makePie, makeBar}