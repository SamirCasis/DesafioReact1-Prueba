import { useState } from 'react'
import Buscador from './components/Buscador'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyApi from './components/MyApi';


const App = () => {
  const [data, setData] = useState([]);
  const [dataFilter, setDataFilter] = useState(data);

  return (
    <>
      <header>
        <h1>Hola Mundo</h1>
      </header>
      <section>
        <Buscador data={data} setData={setDataFilter} />
      </section>
      <main>
        <MyApi data={data} setData={setData} />
      </main>
      <footer className='bg-primary text-white'>
        <h2> @Todos los derechos reservados </h2>
      </footer>
    </>
  )
}

export default App
