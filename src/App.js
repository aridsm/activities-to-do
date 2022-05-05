import './App.css';
import Form from './Form'
import SecaoPrincipal from './SecaoPrincipal'
import {ReactComponent as Img} from './assets/img.svg'

function App() {
  return (
    <div className='App'>
      <h1>Activities to do</h1>
      <div className='principal'>
        <section>
        <SecaoPrincipal />
        <Form />
        </section>
        <div>
          <Img />
        </div>
      </div>
      <footer>Project by <a href='/'>Ariane Morelato</a></footer>
      </div>
  )
}

export default App;
