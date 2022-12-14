// import "./App.css";

// import ArrayAsProps from "./components/ArrayAsProps";

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        {/* <!-- Only change code above this line --> */}

        <div class="container-fluid">
          <h3 class="text-primary text-center">jQuery Playground</h3>
          <div class="row">
            <div class="col-xs-6">
              <h4>#left-well</h4>
              <div class="well" id="left-well">
                <button class="btn btn-default target" id="target1">
                  #target1
                </button>
                <button class="btn btn-default target" id="target2">
                  #target2
                </button>
                <button class="btn btn-default target" id="target3">
                  #target3
                </button>
              </div>
            </div>
            <div class="col-xs-6">
              <h4>#right-well</h4>
              <div class="well" id="right-well">
                <button class="btn btn-default target" id="target4">
                  #target4
                </button>
                <button class="btn btn-default target" id="target5">
                  #target5
                </button>
                <button class="btn btn-default target" id="target6">
                  #target6
                </button>
              </div>
            </div>
            <div className="myContrib">
              {/* These following JSX elements are also allowed */}

              {/* 1. Any JSX element can be self closed */}
              {/* <h1 /> */}
              {/* <div /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <ArrayAsProps /> */}
    </div>
  );
}

export default App;
