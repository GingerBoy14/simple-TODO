import { useState, useEffect, useCallback } from 'react'
import firebase from '../service'
import { useDispatch } from '../app/domains/TodoApp/context'

//bug when dispath(ADD_TODO)
const useFirestoreListener = (collectionName, action, sort) => {
  const dispatch = useDispatch()
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchData = useCallback(async () => {
    let query
    if (sort) {
      query = await firebase.getSortedCollection(collectionName, sort)
    } else {
      query = await firebase.getCollection(collectionName)
    }
    return firebase.setListener(query, (snapshot) => {
      const dataSnapshot = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setTasks(dataSnapshot)
      setLoading(false)
    })
  }, [setLoading, setTasks])
  useEffect(() => {
    setLoading(true)
    fetchData()
    return () => fetchData()
  }, [fetchData])
  useEffect(() => !loading && tasks && setLoading(false), [tasks])
  useEffect(() => tasks && dispatch({ type: action, payload: tasks }), [tasks])
  return { loading }
}

export default useFirestoreListener
