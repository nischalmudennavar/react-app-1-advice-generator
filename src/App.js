import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

// class App extends react.Component {
//   state = {
//     advice: "",
//   };
//   componentDidMount() {
//     this.fetchAdvice();
//   }
//   fetchAdvice = () => {
//     axios
//       .get("https://api.adviceslip.com/advice")
//       .then((response) => {
//         const { advice } = response.data.slip;
//         this.setState({ advice });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div className="app">
//         <div className="card">
//           <h1 className="heading">{this.state.advice}</h1>
//         </div>
//         <button
//           className="button"
//           onClick={() => {
//             this.fetchAdvice();
//             var audio = new Audio("projectone-quotessrcassetsaudio.mp3");
//             audio.play();
//           }}
//         >
//           <span>Give me Advice {"🐱‍🏍"}</span>
//         </button>
//       </div>
//     );
//   }
// }
// export default App;
// convert the above code to functional component
const App = () => {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    // component did mount
    fetchAdvice();
  }, []);
  // why is use effect used :
  // useEffect is used to fetch data from the api and set the state of advice
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvice(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
      </div>
      <button
        className="button"
        onClick={() => {
          fetchAdvice();
          // var audio = new Audio("projectone-quotessrcassetsaudio.mp3");
          // audio.play();
        }}
      >
        <span>Give me Advice {"🐱‍🏍"}</span>
      </button>
    </div>
  );
};

export default App;