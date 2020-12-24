import { useState } from 'react'
import { ProfileView, UserSimpleView } from '../../components'
import { useDocumentListener } from 'hooks'
import { useUserContext, useUserDispatch } from 'app/domains/Session/context'
import type from 'app/domains/Session/constants'
import { ChangeUserPassword } from '../../components/ChangeUserPassword'

const Profile = () => {
  const [visible, setVisible] = useState(false)
  const [modal, setModal] = useState(false)
  const { userProfile } = useUserContext()
  const dispatch = useUserDispatch()
  useDocumentListener('users', userProfile.uid, {
    dispatch,
    action: type.UPDATE_USER
  })
  return (
    <>
      <UserSimpleView
        openProfile={setVisible}
        profileStatus={visible}
        setModal={setModal}
      />
      <ProfileView visible={visible} setVisible={setVisible} />
      <ChangeUserPassword visible={modal} setVisible={setModal} />
    </>
  )
}
export default Profile
