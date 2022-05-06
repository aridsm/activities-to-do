import React from 'react'
import styles from './Activity.module.css'

const Activity = (props) => {

  React.useEffect(() => {
    console.log(props)
  }, [props])

  if (props.error) return <p>Ops, um erro ocorreu. Tente novamente</p>
  if (props.loading) return <p>Carregando...</p>
  if (props.data.error) return <p>Sorry... There are no activities that match your choices. Try again!</p>
  if (props.data.activity)
  return (
    <section>
    <h2>{props.data.activity}</h2>
    {props.data.link && <a href={props.data.link}>Website</a>}
    <p>Participants: {props.data.participants}</p>
    <p>Type of Activity: {props.data.type}</p>
    {props.data.price === 0 ? <p className={styles.free}>FREE</p> : <p>Price (0 to 100%): {props.data.price * 100}%</p>}
    </section>
  )
  else return null
}

export default Activity
