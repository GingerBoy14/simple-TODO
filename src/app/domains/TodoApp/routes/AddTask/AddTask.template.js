import React, { useCallback } from 'react'
import { AddTaskForm } from '../../components/AddTaskForm'
import { useDispatch, useStoreContext } from '../../context'
import { addTask } from '../../actions'

const AddTaskTemplate = () => {
  const dispatch = useDispatch()
  const store = useStoreContext()
  const onFinish = useCallback(
    (values, form) => {
      if (values.todoName) {
        dispatch(addTask(values.todoName))
        form.setFieldsValue({ todoName: '' })
      }
    },
    [dispatch]
  )
  return <AddTaskForm onFinish={onFinish} taskLoading={store.taskAdded} />
}
export default AddTaskTemplate
