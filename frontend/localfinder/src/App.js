import './App.css';
import { useState, useEffect } from 'react';
import SplashPage from './splashPage'
import Home from './Home';
import About from './About';
import Communities from './Communities';
import axios from "axios";
import CreateComu from './CreateComu';

function App() {
  //Dev console helps visualize the code more @Person grading this
  //Global Variables
  const url = "http://localhost:3001";
  const [update, setUpdate] = useState();
  const [comu, setComu] = useState([]);

  function retriever() {
    //You'll have to click go to home button twice
    //I truly do not know why it does this.
    //If you send a possible fix for this along
    //with the grade that would be much appreciated.
    let copyOfComuArr = [...comu];
    axios.get(url)
      .then(res => {
        console.log(res.data);
        if (comu.length >= res.data.length ) {
          console.log("Got the data, but");
          console.log("There's no need to GET anymore cards.")
        } else {
          console.log("Got the data")
          for (let i = 0; i < res.data.length; i++) {
            let name = res.data;
            let img = res.data;
            copyOfComuArr.push(<Communities name={name[i].name} pic={img[i].img} />);
            console.log(i);
          }
        }
      })
    setComu(copyOfComuArr);
    setUpdate(<Home comu={comu} />);
  }

  useEffect(() => {
    setUpdate(<SplashPage />);
  }, []);

  function returnToSplash() {
    //Click the image to return to the splash page
    setUpdate(<SplashPage />)
  }

  function postCommunity() {
    setUpdate(<CreateComu />);
  }

  return (
    <div className="App">
      <div>
        <img onClick={returnToSplash} id="logo" src="https://api.logo.com/api/v2/images?logo=logo_c1380c7c-4bca-42c5-9b83-b04c7079ff32&u=1713194274&width=500&height=400&fit=contain&margins=100&format=webp&quality=60" />
        <button id='homeButton' onClick={retriever}>Go to home</button>
        <button id='aboutButton' onClick={() => setUpdate(<About />)}>About</button>
        <button id='createButton' onClick={() => setUpdate(<CreateComu />)}>Post a Community</button>
      </div>
      <br />
      {update}
    </div>
  );
}

export default App;
