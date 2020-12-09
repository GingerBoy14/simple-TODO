import firebase from '../config'
import { useStoreContext } from 'context'
import { useEffect } from 'react'

const FetchData = ({ loading, setLoading }) => {
  const { dispatch } = useStoreContext()
  useEffect(() => {
    let data = []
    async function func() {
      const query = firebase.firestore().collection('tasks')
      const dataSnaphots = await query.get()
      dataSnaphots.docs.forEach((snapshot) => {
        data.push(snapshot.data())
      })
      dispatch({ type: 'RELOAD', payload: data })
      setLoading(!loading)
    }
    func()
  }, [])
}
export default FetchData
