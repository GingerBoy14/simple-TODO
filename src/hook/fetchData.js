import { useState, useEffect, useCallback } from 'react'
import firebase from '../config'
import { useStoreContext } from '../context/TodoListContext'

const useFetchData = (collectionName, sort) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const fetchData = useCallback(async () => {
    let query
    if (sort) {
      query = await firebase
        .firestore()
        .collection(collectionName)
        [sort.func](sort.fieldPath)
    } else {
      query = await firebase.firestore().collection(collectionName)
    }
    const dataSnapshot = await query.get()
    const temp = dataSnapshot.docs.map((snapshot) => ({
      ...snapshot.data(),
      id: snapshot.id
    }))
    setData(temp)
    console.log(temp)
    setLoading(false)
  }, [setData, setLoading])

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])
  return { loading, data }
}

export const useFirestoreListener = (collectionName, action, sort) => {
  const { dispatch } = useStoreContext()
  const [tasks, setTasks] = useState()
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    let query
    if (sort) {
      query = await firebase
        .firestore()
        .collection(collectionName)
        [sort.func](sort.fieldPath)
    } else {
      query = await firebase.firestore().collection(collectionName)
    }
    const listener = await query.onSnapshot((snapshot) => {
      const dataSnapshot = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setTasks(dataSnapshot)
      setLoading(false)
    })

    return listener
  }
  useEffect(() => {
    setLoading(true)
    fetchData()
    return () => fetchData()
  }, [])
  useEffect(() => !loading && tasks && setLoading(false), [tasks])
  useEffect(() => tasks && dispatch({ type: action, payload: tasks }), [tasks])
  return { loading }
}

export default useFetchData
