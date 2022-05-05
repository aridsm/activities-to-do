import React from 'react'
import styles from './Form.module.css'
import { ReactComponent as Dado } from './assets/dado.svg'
import useFetch from './useFetch'

const Form = () => {
 const [participants, setParticipants] = React.useState(1)
 const [activity, setActivity] = React.useState('')
 const {fetchData} = useFetch()

 const options = [
        'all',
        'education',
        'recreational',
        'social',
        'diy',
        'charity',
        'cooking',
        'relaxation',
        'music',
        'busywork'
    ]



const handlesubmit = React.useCallback((e) => {
    e.preventDefault();
    const {data} = fetchData(participants, `&type=${activity}`)
    console.log(data)
}, [fetchData, activity, participants])

  return (
    <form className={styles.form} onSubmit={handlesubmit}>
        <div>
            <label htmlFor='participants'>Participants</label>
            <input type='number' name='participants' id='participants' value={participants} onChange={(e) => setParticipants(e.target.value)} />
        </div>
        <div>
            <label htmlFor='activity'>Type of activity</label>
            <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                {options.map(option => 
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
        </div>
        <button>Search <Dado /></button>
    </form>
  )
}

export default Form