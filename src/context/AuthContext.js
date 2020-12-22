import React, { useContext, useState, useEffect } from 'react'
import { auth, firestore } from '../config'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(name, email, password) {
    const res = await auth.createUserWithEmailAndPassword(email, password)
    const { user } = res
    await firestore
      .collection('users')
      .doc(user.uid)
      .set({ name: name, email: email })
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //TODO if you want to extend user's data, change this object
      if (user) {
        // setCurrentUser({ uid: user.uid })
        console.log(user)
        setCurrentUser({ ...user })
        setLoading(false)
      } else {
        setCurrentUser(null)
        setLoading(false)
      }
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
