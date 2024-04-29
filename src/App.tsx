/* eslint-disable jsx-a11y/img-redundant-alt */
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <img
          src="/images/banner.jpg"
          alt="Large Image"
          className="full-width-image"
        />
        <div className="overlay-text">
          <h1>Welcome to My Website</h1>
          <p>This is some overlay text</p>
          <button className="transparent-button">Click Here</button>
        </div>
        {/* Other content within the container */}
        <div className="content">
          {/* Your content goes here */}
        </div>
      </div>
    </div>
  );
}

export default App;