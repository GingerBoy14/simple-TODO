import { useState, useEffect } from 'react'
import firebase from '../config'
import _ from 'lodash'

const useFetchData = (collectionName) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState()
  const fetchData = async () => {
    const query = await firebase
      .firestore()
      .collection(collectionName)
      .orderBy('timestamp')
    const dataSnapshot = await query.get()
    const temp = dataSnapshot.docs.map((snapshot) => snapshot.data())
    const unpinned = _.remove(temp, ({ status }) => !status.pinned)
    unpinned.sort((a, b) => a.timestamp - b.timestamp)
    temp.sort((a, b) => b.pinnedTimeStamp - a.pinnedTimeStamp)

    setData(temp.concat(unpinned))
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchData()
  }, [])
  return { loading, data }
}

export default useFetchData
