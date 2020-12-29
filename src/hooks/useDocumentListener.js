import { useState, useEffect, useCallback } from 'react'
import _ from 'lodash'
import { firestore } from 'service'
import usePrevious from './usePrevious'

//bug when dispath(ADD_TODO)
const useDocumentListener = (
  collectionName,
  document,
  { dispatch, action }
) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const prevTasks = usePrevious(data)
  const fetchData = useCallback(async () => {
    const query = await firestore.getCollection(collectionName).doc(document)

    return firestore.setListener(query, (snapshot) => {
      if (snapshot.data()) {
        setData(snapshot.data())
        setLoading(false)
      }
    })
  }, [setData, setLoading])
  useEffect(() => {
    setLoading(true)
    fetchData()
    return () => fetchData()
  }, [fetchData])
  useEffect(() => !loading && data && setLoading(false), [data])
  useEffect(() => dispatch({ type: action, payload: data }), [data])
  return { loading }
}

export default useDocumentListener
