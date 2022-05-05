import React from 'react'

const useFetch = () => {
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [data, setData] = React.useState(null)
  const url = 'http://www.boredapi.com/api/activity'

  const fetchData = React.useCallback( async (participants, activity) => {
    let result;
    let json;
    try {
        setError(null);
        setLoading(true);
        result = await fetch(`${url}?participants=${participants}${activity}`);
        json = await result.json()
        console.log(`${url}?participants=${participants}${activity}`)
    } catch(e) {
        json = null;
        setError('There is no activity with your preferences.')
    } finally {
        setData(json);
        setLoading(null)
        return {data}
    }
  }, [data])

  return {fetchData}
}

export default useFetch