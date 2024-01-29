import "./App.css";
import { Model } from "../public/Shoe.jsx";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { OrbitControls, useGLTF } from "@react-three/drei";

function App() {
  // laces mesh caps inner sole striped band patch
  const [color, setColor] = useState({
    box1: "#f6b73",
    box2: "#ff0000",
    box3: "#0000ff",
    box4: "#0000ff",
    box5: "#0000ff",
    box6: "#0000ff",
    box7: "#0000ff",
    box8: "#0000ff",
  });
  type InputEvent = React.ChangeEvent<HTMLInputElement>;
  function handleColorChange(box: string) {
    return function (event: InputEvent) {
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
                    colorPicker={{
                      mesh: color,
                      laces: color,
                      caps: color,
                      inner: color,
                      sole: color,
                      stripes: color,
                      band: color,
                      patch: color,
                    }}
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
                  name="box2"
                  value={color.box2}
                  onChange={handleColorChange("box2")}
                />
                <label htmlFor="head">Caps</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box3"
                  value={color.box3}
                  onChange={handleColorChange("box3")}
                />
                <label htmlFor="body">Inner</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box4"
                  value={color.box4}
                  onChange={handleColorChange("box4")}
                />
                <label htmlFor="body">Sole</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box5"
                  value={color.box5}
                  onChange={handleColorChange("box5")}
                />
                <label htmlFor="body">Stipes</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box6"
                  value={color.box6}
                  onChange={handleColorChange("box6")}
                />
                <label htmlFor="body">Laces</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box7"
                  value={color.box7}
                  onChange={handleColorChange("box7")}
                />
                <label htmlFor="body">Band</label>
              </div>
              <div>
                <input
                  type="color"
                  id="head"
                  name="box8"
                  value={color.box8}
                  onChange={handleColorChange("box8")}
                />
                <label htmlFor="body">Patch</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
