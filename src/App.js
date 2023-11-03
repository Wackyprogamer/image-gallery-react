import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className='nav nav-underline justify-content-center'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Nature</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Video Games</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Vehicles</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Appearal</a>
          </li>
        </ul>
        <hr></hr>
      </header>

      <section className='photoGallery'>

        <div className='row'>
          <img></img>
          <img></img>
          <img></img>
        </div>

        <div className='row'>
          <img></img>
          <img></img>
          <img></img>
        </div>

        <div className='row'>
          <img></img>
          <img></img>
          <img></img>
        </div>

      </section>

      <footer>
        <ul className='nav nav-underline justify-content-center'>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Nature</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Video Games</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Vehicles</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>Appearal</a>
          </li>
        </ul>
        <hr></hr>
        <p id='createrMark'>Project Created With React -- Created by Sergio Castillo -- For a Mountainland Technical School Project</p>
      </footer>
    </div>
  );
}

export default App;
