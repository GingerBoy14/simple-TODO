export const addTask = (payload) => async (dispatch, firebase) => {
  let task = {
    timestamp: new Date(),
    text: payload,
    status: { done: false, important: false, pinned: false }
  }
  const snapshot = await firebase.firestore().collection('tasks').add(task)
  task.id = snapshot.id
  console.log(task)
  dispatch({ type: 'ADD_TODO', payload: task })
}
