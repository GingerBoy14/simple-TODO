import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'

import { AddTaskForm } from '../../components/AddTaskForm'
import { useDispatch, useStoreContext } from '../../context'
import { addTask } from '../../actions'

const AddTaskTemplate = () => {
  const { register, handleSubmit, setValue } = useForm()
  const dispatch = useDispatch()
  const store = useStoreContext()

  const onSubmit = useCallback(
    handleSubmit((data) => {
      if (data.task) {
        dispatch(addTask(data.task))
        setValue('task', '')
      }
    }),
    [dispatch]
  )
  return (
    <AddTaskForm
      handleSubmit={onSubmit}
      register={register}
      taskLoading={store.taskAdded}
    />
  )
}
export default AddTaskTemplate
