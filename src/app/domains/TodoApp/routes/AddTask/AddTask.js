import React, { useCallback } from 'react'
import { AddTaskForm } from '../../components/AddTaskForm'
import { useDispatch } from '../../context'
import { addTask } from '../../actions'

const AddTask = () => {
  const dispatch = useDispatch()

  const onFinish = useCallback(
    (values, form) => {
      if (values.todoName) {
        dispatch(addTask(values.todoName))
        form.setFieldsValue({ todoName: '' })
      }
    },
    [dispatch]
  )
  return <AddTaskForm onFinish={onFinish} />
}
export default AddTask
