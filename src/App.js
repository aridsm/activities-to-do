import './App.css';
import React from 'react'
import Form from './Form'
import SecaoPrincipal from './SecaoPrincipal'
import Activity from './Activity'
import {ReactComponent as Img} from './assets/img.svg'
import useFetch from './useFetch'

function App() {

  const [activityVisible, setActivityVisible] = React.useState(false)
  const {fetchData, data, error, loading} = useFetch()

  return (
    <div className='App'>
      <h1>Activities to do</h1>
      <div className='principal'>
        <section>
        {
          activityVisible && data
          ?
          <Activity data={data} error={error} loading={loading}/>
          :
          <SecaoPrincipal />
        }
        <Form setActivityVisible={setActivityVisible} fetchData={fetchData}/>
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
