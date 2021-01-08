import { v4 } from 'uuid'
import _ from 'lodash'
import { db } from '../config'

const snapShot = function (id, task) {
  db.collection('users')
    .doc(id)
    .collection('tasks')
    .doc(task)
    .onSnapshot(function (doc) {
      var source = doc.metadata.hasPendingWrites ? 'Local' : 'Server'
      console.log(source, ' data: ', doc.data())
    })
}
const tasksReducer = (state, action) => {
  let unpinned
  let date = new Date()

  switch (action.type) {
    case 'RELOAD':
      let array = action.payload

      unpinned = _.remove(array, ({ status }) => !status.pinned)

      if (array.length !== 0) {
        array.unshift(array.pop())
        array.sort(function (a, b) {
          return new Date(b.dateLastEdit) - new Date(a.dateLastEdit)
        })
      }
      return {
        ...state,
        tasks: array.concat(
          unpinned.sort(function (a, b) {
            return new Date(a.dateLastEdit) - new Date(b.dateLastEdit)
          })
        )
      }

    case 'ADD_TODO':
      let id = v4()
      db.collection('users')
        .doc(action.payload.idCurrentUser)
        .collection('tasks')
        .doc(id)
        .set({
          text: action.payload.text,
          id: id,
          dateCreate: Date(date),
          dateLastEdit: Date(date),
          status: { done: false, important: false, pinned: false }
        })
      snapShot(action.payload.idCurrentUser)
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            text: action.payload.text,
            id: id,
            dateCreate: Date(date),
            dateLastEdit: Date(date),
            status: { done: false, important: false, pinned: false }
          }
        ]
      }
    case 'DELETE_TODO':
      const newTasks = _.remove(state.tasks, (item) => {
        if (item.id === action.payload.taskId)
          db.collection('users')
            .doc(action.payload.idCurrentUser)
            .collection('tasks')
            .doc(item.id)
            .delete()
        return item.id !== action.payload.taskId
      })

      return {
        ...state,
        tasks: newTasks
      }

    case 'SET_DONE':
      snapShot(action.payload.idCurrentUser, action.payload.taskId)
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload.taskId) return todo
          db.collection('users')
            .doc(action.payload.idCurrentUser)
            .collection('tasks')
            .doc(action.payload.taskId)
            .set({
              ...todo,
              status: {
                ...todo.status,
                done: !todo.status.done
              }
            })

          return {
            ...todo,
            status: {
              ...todo.status,
              done: !todo.status.done
            }
          }
        })
      }
    case 'IMPORTANT_TODO':
      return {
        ...state,
        tasks: state.tasks.map((todo) => {
          if (todo.id !== action.payload.taskId) return todo
          db.collection('users')
            .doc(action.payload.idCurrentUser)
            .collection('tasks')
            .doc(todo.id)
            .set({
              ...todo,
              status: {
                ...todo.status,
                important: !todo.status.important
              }
            })

          return {
            ...todo,
            status: {
              ...todo.status,
              important: !todo.status.important
            }
          }
        })
      }
    case 'PINNED_TODO':
      const tasks = state.tasks.map((todo) => {
        if (todo.id !== action.payload.taskId) return todo

        db.collection('users')
          .doc(action.payload.idCurrentUser)
          .collection('tasks')
          .doc(todo.id)
          .set({
            ...todo,
            status: {
              ...todo.status,
              pinned: !todo.status.pinned
            },
            dateLastEdit: todo.status.pinned ? todo.dateCreate : Date(date)
          })

        return {
          ...todo,
          status: { ...todo.status, pinned: !todo.status.pinned },
          dateLastEdit: todo.status.pinned ? todo.dateCreate : Date(date)
        }
      })
      if (tasks.length !== 0) {
        tasks.unshift(tasks.pop())
        tasks.sort(function (a, b) {
          return new Date(b.dateLastEdit) - new Date(a.dateLastEdit)
        })
      }
      return {
        ...state,
        tasks: tasks.concat(
          _.remove(tasks, ({ status }) => !status.pinned).sort(function (a, b) {
            return new Date(a.dateLastEdit) - new Date(b.dateLastEdit)
          })
        )
      }

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

export default tasksReducer
