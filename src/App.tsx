import "./App.css";

import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="App">
      <Spline
        scene="https://prod.spline.design/cjsNHPy0pYT-pfeW/scene.splinecode"
        onLoad={() => console.log("loaded")}
      />
    </div>
  );
}

export default App;
