import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App container-fluid">
      {/* <div className="row">
        <h3 className="text-primary text-center">jQuery Library</h3>
        <div className="text-pr"></div>
      </div> */}

      <link
        href="https://fonts.googleapis.com/css?family=Lobster"
        rel="stylesheet"
        type="text/css"
      />
      {/* <style>
  h2 {
    font-family: Lobster, Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

</style> */}

      <div class="container-fluid">
        <div class="row">
          <div class="col-xs-8">
            <h2 class="text-primary text-center">CatPhotoApp</h2>
          </div>
          <div class="col-xs-4">
            <a href="#">
              <img
                class="img-responsive thick-green-border"
                src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                alt="A cute orange cat lying on its back."
              />
            </a>
          </div>
        </div>
        <img
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
          class="img-responsive"
          alt="Three kittens running towards the camera."
        />
        <div class="row">
          <div class="col-xs-4">
            <button class="btn btn-block btn-primary">
              <i class="fa fa-thumbs-up"></i> Like
            </button>
          </div>
          <div class="col-xs-4">
            <button class="btn btn-block btn-info">
              <i class="fa fa-info-circle"></i> Info
            </button>
          </div>
          <div class="col-xs-4">
            <button class="btn btn-block btn-danger">
              <i class="fa fa-trash"></i> Delete
            </button>
          </div>
        </div>
        <p>
          Things cats <span class="text-danger">love:</span>
        </p>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <p>Top 3 things cats hate:</p>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <form action="https://freecatphotoapp.com/submit-cat-photo">
          <div class="row">
            <div class="col-xs-6">
              <label>
                <input type="radio" name="indoor-outdoor" /> Indoor
              </label>
            </div>
            <div class="col-xs-6">
              <label>
                <input type="radio" name="indoor-outdoor" /> Outdoor
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4">
              <label>
                <input type="checkbox" name="personality" /> Loving
              </label>
            </div>
            <div class="col-xs-4">
              <label>
                <input type="checkbox" name="personality" /> Lazy
              </label>
            </div>
            <div class="col-xs-4">
              <label>
                <input type="checkbox" name="personality" /> Crazy
              </label>
            </div>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="cat photo URL"
            required
          />
          <button type="submit" class="btn btn-primary">
            <i class="fa fa-paper-plane"></i> Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;