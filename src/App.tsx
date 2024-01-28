import "./App.css";
import { Model } from "../public/Shoe.jsx";
import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  const [color, setColor] = useState({
    box1: "#f6b73",
    box2: "#ff0000",
    box3: "#0000ff",
    box4: "#0000ff",
  });

  function handleColorChange(box) {
    return function (event) {
      setColor({
        ...color,
        [box]: event.target.value,
      });
    };
  }

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <div className="card">
            <div className="product-canvas">
              <Canvas>
                <ambientLight />
                <OrbitControls
                  enablePan={true}
                  enableZoom={true}
                  enableRotate={true}
                />
                <Suspense fallback={null}>
                  <spotLight
                    intensity={0.9}
                    angle={0.1}
                    penumbra={1}
                    position={[10, 15, 10]}
                    castShadow
                  />
                  <Model
                    colorPicker={{ mesh: color, caps: color, laces: color }}
                  />
                </Suspense>
              </Canvas>
            </div>
            <h2>Color chooser</h2>
            <div className="colors">
              <div>
                <input
                  type="color"
                  id="head"
                  name="box1"
                  value={color.box1}
                  onChange={handleColorChange("box1")}
                />
                <label htmlFor="head">Mesh</label>
              </div>

              <div>
                <input
                  type="color"
                  id="head"
                  name="box1"
                  value={color.box4}
                  onChange={handleColorChange("box4")}
                />
                <label htmlFor="head">Inner</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box2"
                  value={color.box2}
                  onChange={handleColorChange("box2")}
                />
                <label htmlFor="body">Stripes</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box3"
                  value={color.box3}
                  onChange={handleColorChange("box3")}
                />
                <label htmlFor="body">Sole</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
