import firebase from '../config'

const db = firebase.firestore()
const ref = db.collection('tasks')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_TASKS':
      return { ...state, tasks: action.payload }
    case 'ADD_TODO':
      const document = ref.doc().id
      ref.doc(document).set({
        id: document,
        text: action.payload,
        creationDate: new Date(),
        status: {
          done: false,
          important: false,
          pinned: false
        }
      })
      return
    case 'DELETE_TODO': {
      ref.doc(action.payload.id).delete()
      return
    }
    case 'SET_DONE':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          done: !action.payload.status.done
        }
      })
      return
    case 'IMPORTANT_TODO':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          important: !action.payload.status.important
        }
      })
      return
    case 'PINNED_TODO':
      ref.doc(action.payload.id).update({
        status: {
          ...action.payload.status,
          pinned: !action.payload.status.pinned
        }
      })

      return
    case 'CHANGE_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    case 'SEARCH':
      return {
        ...state,
        query: action.payload
      }
    default:
      return state
  }
}

export default rootReducer
