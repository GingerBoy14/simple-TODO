import React, { useState } from 'react'
import { Typography } from 'antd'
import { useUserContext } from 'app/domains/Session/context'
import { firestore } from 'service'
const { Text } = Typography

const UserEditableProfileName = () => {
  const { userProfile } = useUserContext()
  const [textEdit, setTextEdit] = useState(false)
  const [userName, setUserName] = useState(userProfile.name)

  const editName = (name) => {
    if (userProfile.name !== name) {
      firestore.update('users', userProfile.uid, { name })
    }
    setUserName(name)
  }
  return (
    <>
      <Text strong>Name: </Text>
      <Text
        editable={{
          onChange: editName
        }}
        onClick={() => setTextEdit(!textEdit)}>
        {userName}
      </Text>
    </>
  )
}

export default UserEditableProfileName
