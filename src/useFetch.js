import React from 'react'

const useFetch = () => {
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(null)
  const [data, setData] = React.useState(null)
  const url = 'https://www.boredapi.com/api/activity'

  const fetchData = React.useCallback( async (participants, activity) => {
    let result;
    let json;
    try {
        setError(null);
        setLoading(true);
        result = await fetch(`${url}?participants=${participants}&type=${activity}`);
        json = await result.json()
        console.log(`${url}?participants=${participants}`)
    } catch(e) {
        json = null;
        setError(true)
    } finally {
        setData(json);
        setLoading(null)
    }
  }, [])

  return {fetchData, data, loading, error}
}

export default useFetch
