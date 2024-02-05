import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyApi from './components/MyApi';
import Buscador from './components/Buscador';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState([]);

  return (
    <>
      <header>
        <img className='logo' src="https://cdn.vox-cdn.com/thumbor/MkTBWdRgNqawt6Ij5ZsiXnYGIcI=/28x104:356x323/1310x873/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/46712096/digi.0.0.png" alt="logo digimon"></img>
      </header>
      <section>
        <Buscador data={data} setDataFilter={setDataFilter} />
      </section>
      <main>
        <MyApi data={dataFilter.length > 0 ? dataFilter : data} setData={setData} />
      </main>
      <footer className='bg-black mt-5 text-white'>
        <h2> @BANDAI Todos los derechos reservados</h2>
      </footer>
    </>
  )
}

export default App;

