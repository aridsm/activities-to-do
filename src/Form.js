import React from 'react'
import styles from './Form.module.css'
import { ReactComponent as Dado } from './assets/dado.svg'

const Form = ({setActivityVisible, fetchData}) => {
 const [participants, setParticipants] = React.useState(1)
 const [activity, setActivity] = React.useState('')

 const options = [
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
    fetchData(participants, activity)
    setActivityVisible(true)
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
                <option value=''>All</option>
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
