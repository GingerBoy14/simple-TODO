import React, { useState, useEffect } from 'react'
import firebase from 'service'
const useFirebaseInitLoading = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (firebase.getFirebase().app.length > 0) {
      setLoading(false)
    }
  }, [firebase])
  return loading
}

export default useFirebaseInitLoading
