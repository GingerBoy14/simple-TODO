import { useState, useEffect, useCallback } from 'react'
import _ from 'lodash'
import { firestore } from 'service'
import { useDispatch } from 'app/domains/TodoApp/context'
import usePrevious from './usePrevious'

//bug when dispath(ADD_TODO)
const useDocumentListener = (collectionName, document, action) => {
  const dispatch = useDispatch()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const prevTasks = usePrevious(tasks)
  const fetchData = useCallback(async () => {
    const query = await firestore.getCollection(collectionName).doc(document)

    return firestore.setListener(query, (snapshot) => {
      setTasks(snapshot.data().tasks ? snapshot.data().tasks : [])
      setLoading(false)
    })
  }, [setLoading, setTasks])
  useEffect(() => {
    setLoading(true)
    fetchData()
    return () => fetchData()
  }, [fetchData])
  useEffect(() => !loading && tasks && setLoading(false), [tasks])
  useEffect(
    () =>
      !_.isEqual(tasks, prevTasks) &&
      dispatch({ type: action, payload: tasks }),
    [tasks]
  )
  return { loading }
}

export default useDocumentListener
