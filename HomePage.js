import React, {useState} from 'react';


function HomePage() {

    const [pixState, setPix] = useState(undefined);
    const [title, setTitle] = useState(undefined);
    const [cat1name, setCat1name] = useState(undefined);
    const [cat2name, setCat2name] = useState(undefined);
    const [cat3name, setCat3name] = useState(undefined);
    const [cat1value, setCat1value] = useState(0);
    const [cat2value, setCat2value] = useState(0);
    const [cat3value, setCat3value] = useState(0);


    const loadPix = async () => {
        const pix = await fetch('http://localhost:3333/doughnut', {
          method: 'post',
          body: JSON.stringify({
            title: title,
            categ: [
              {name: cat1name, value: cat1value},
              {name: cat2name, value: cat2value},
              {name: cat3name, value: cat3value},
              {name: "4", value: 276},
              {name: "5", value: 156},
              {name: "6", value: 842},
            ]
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      });
        const imageBlob = await pix.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log("pix", imageObjectURL);
        
        setPix(imageObjectURL);
      }  

      const loadPie = async () => {
        const pix = await fetch('http://localhost:3333/pie', {
          method: 'post',
          body: JSON.stringify({
            title: title,
            categ: [
              {name: cat1name, value: cat1value},
              {name: cat2name, value: cat2value},
              {name: cat3name, value: cat3value},
              {name: "4", value: 276},
              {name: "5", value: 156},
              {name: "6", value: 842},
            ]
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      });
        const imageBlob = await pix.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log("pix", imageObjectURL);
        
        setPix(imageObjectURL);
      }  

      const loadBar = async () => {
        const pix = await fetch('http://localhost:3333/bar', {
          method: 'post',
          body: JSON.stringify({
            title: title,
            categ: [
                {name: cat1name, value: cat1value},
                {name: cat2name, value: cat2value},
                {name: cat3name, value: cat3value},
              {name: "4", value: 276},
              {name: "5", value: 156},
              {name: "6", value: 842},
            ]
          }),
          headers: {
              'Content-Type': 'application/json',
          },
      });
        const imageBlob = await pix.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        console.log("pix", imageObjectURL);
        
        setPix(imageObjectURL);
      }  
  
    //   useEffect(() => {
    //     loadPix();
    // }, []);

    return (
        <>
            <h2>Microservice A Test Program</h2>
            <article>
                <p>This programatically calls the microservice to make a graph.</p>
                <p>view the resulting graph here.</p>
            </article>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <legend>What is the graph data?</legend>
                    <label for="title">Graph Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)} 
                        id="title" />
                    <label for="cat1">Category 1</label>
                    <input
                        type="text"
                        value={cat1name}
                        onChange={e => setCat1name(e.target.value)} 
                        id="cat1" />
                    <label for="cat1v">Category 1 value</label>
                    <input
                        type="number"
                        value={cat1value}
                        onChange={e => setCat1value(e.target.value)} 
                        id="cat1v" />

                    <label for="cat2">Category 2</label>
                    <input
                        type="text"
                        value={cat2name}
                        onChange={e => setCat2name(e.target.value)} 
                        id="cat2" />
                    <label for="cat2v">Category 2 value</label>
                    <input
                        type="number"
                        value={cat2value}
                        onChange={e => setCat2value(e.target.value)} 
                        id="cat2v" />

                    <label for="cat3">Category 3</label>
                    <input
                        type="text"
                        value={cat3name}
                        onChange={e => setCat3name(e.target.value)} 
                        id="cat3" />
                    <label for="cat3v">Category 3 value</label>
                    <input
                        type="number"
                        value={cat3value}
                        onChange={e => setCat3value(e.target.value)} 
                        id="cat3v" />
                    
                    <label for="doughnut">
                    <button
                        type="submit"
                        onClick={loadPix}
                        id="doughnut"
                    >MAKE</button> doughnut</label>

                    <label for="pie">
                    <button
                        type="submit"
                        onClick={loadPie}
                        id="pie"
                    >MAKE</button> pie</label>

                    <label for="bar">
                    <button
                        type="submit"
                        onClick={loadBar}
                        id="bar"
                    >MAKE</button> bar</label>

                </fieldset>
            </form>
            <img style={{maxHeight: '500px' }} src={pixState} alt="icons" />
            
        </>
    );
};

export default HomePage;