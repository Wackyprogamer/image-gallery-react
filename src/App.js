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
          <img src='images-temp\22b-subaru.jpg' alt='Photo of a 22b-Subaru impreza' className='img-thumbnail col-4'></img>
          <img src='images-temp\7900xt-gpu.jpg' alt='Photo of a 7900xt reference GPU from AMD' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
        </div>

        <div className='row'>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
        </div>

        <div className='row'>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
          <img src='' className='img-thumbnail col-4'></img>
        </div>

      </section>

      <footer>
        <hr></hr>
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
        <p id='createrMark'>Project Created With React -- Created by Sergio Castillo -- For a Mountainland Technical School Project</p>
      </footer>
    </div>
  );
}

export default App;
