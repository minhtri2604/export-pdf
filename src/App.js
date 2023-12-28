import React from "react";
import ReactToPrint from "react-to-print";
import logo from "./images/Borelog.png";

class ComponentToPrint extends React.Component {
  render() {
    return (
      <div className="mx-[80px] mt-[30px]">
        <div className="grid grid-cols-10">
          <img className="col-span-1" src={logo} />
          <div className="col-span-8 text-center font-medium">
            <h1>SHINEI GEOTECHNIQUE (M) SDN.BHD</h1>
            <p className="mt-[70px]">MICROPILE BORELOG</p>
          </div>
          <p className="mt-[100px] col-span-1 grid grid-cols-2">
            <span className="border-2  h-[32px] pl-[2px]">Log No.</span>
            <input type="text" className="border-2 h-[32px] ouline-none" />
          </p>
        </div>
        <div className="grid grid-cols-10 ">
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Project</p>
          <p className="col-span-7 border-2  pl-[4px] sm:p-[2px]">
            Proposed Slope Remediation for Monoluxury Sdn Bhd Cameron
          </p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Date</p>
          <input
            className="col-span-1 border-2  pl-[4px] sm:p-[2px]"
            type="text"
          ></input>
        </div>
        <div className="grid grid-cols-10 ">
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Pile No.</p>
          <input
            className="col-span-4 border-2  pl-[4px] sm:p-[2px]"
            type="text"
          ></input>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Pile Dia</p>
          <p className="col-span-2 border-2  pl-[4px] sm:p-[2px]">200mm</p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Rake</p>
          <p className="col-span-1 border-2   pl-[4px] sm:p-[2px]">Vertical</p>
        </div>
        <div className="grid grid-cols-10 ">
          <p className="col-span-3 border-2  pl-[4px] sm:p-[2px] ">
            Boring Plant.
          </p>
          <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] ">
            Hong Drill
          </p>
          <p className="col-span-1 border-2  pl-[4px] sm:p-[2px] ">Depth (m)</p>
          <p className="col-span-4 border-2  pl-[4px] sm:p-[2px] text-center">
            Description
          </p>
        </div>
        <div className="grid grid-cols-10 mt-[2px]">
          <div className="col-span-5 grid grid-cols-5">
            <div className="col-span-5  grid grid-cols-5">
              <p className="col-span-1  border-2 pl-[4px] sm:p-[2px]">Boring</p>
              <p className="col-span-2   border-2 pl-[4px] sm:p-[2px] text-center">
                Date
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Time
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Start</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">End</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">
                Grouting
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Date
              </p>
              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                Time
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">Start</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-1 border-2  pl-[4px] sm:p-[2px]">End</p>
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Platform Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Top Of Casing (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Cut-off Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Bored Depth (m) fr. TOC
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                TOE Level (RL)
              </p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]">
                Bored Depth (m) fr. OGL
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Pile Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Soil Drilling (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Total weathered Rock, Boulders, Cavity (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Rock Socket Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Grout Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Nos. of bag
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]">
                API Pipe Size (mm)
              </p>

              <p className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center">
                88.9dia, 6.4thk
              </p>
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                API Pipe Length (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]">
                Permanent Casing (m)
              </p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2  text-center pl-[4px] sm:p-[2px]"></p>

              <input
                type="text"
                className="col-span-2 border-2   pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-3 border-2   text-center pl-[4px] sm:p-[2px]"></p>

              <input
                type="text"
                className="col-span-2 border-2  pl-[4px] sm:p-[2px] text-center"
              />
            </div>
            <div className="col-span-5 grid grid-cols-5">
              <p className="col-span-5 border-2   text-center pl-[4px] sm:p-[2px]">
                Remarks
              </p>
            </div>
          </div>

          <div className="col-span-5"></div>
        </div>
      </div>
    );
  }
}
function App() {
  const componentRef = React.useRef();

  const handlePrint = () => {
    // Use the ReactToPrint component to initiate the printing
    // componentRef.current contains the reference to the component you want to print
    if (componentRef.current) {
      // Trigger the print action
      componentRef.current.onPrint();
    }
  };
  return (
    <div className="App">
      <div>
        <ReactToPrint
          trigger={() => <button className="border-2 border bg-green-400 p-[4px]" onClick={handlePrint}>Print to PDF</button>}
          content={() => componentRef.current}
        />
        <ComponentToPrint ref={componentRef} />
      </div>
    </div>
  );
}

export default App;
