import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Avatar, Tooltip, Upload, message } from 'antd'
import ImgCrop from 'antd-img-crop'

import { useUserContext } from 'app/domains/Session/context'
import { storage, firestore } from 'service'
import { Spinner } from 'components'
const UserEditableAvatar = () => {
  const [loading, setLoading] = useState(false)
  const { userProfile } = useUserContext()

  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }
  const upload = async (file) => {
    try {
      setLoading(true)
      const avatarRef = storage.createRefFromULR(userProfile.avatar)
      try {
        await storage.delete(avatarRef)
      } catch (e) {
        console.log(e)
      }
      const res = storage.upload('avatars', file.file)
      console.log(res)
      res.on(
        'state_changed',
        () => {},
        () => {},
        async () => {
          const url = await res.snapshot.ref.getDownloadURL()
          firestore.update('users', userProfile.uid, { avatar: url })
          setLoading(false)
        }
      )
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <ImgCrop rotate>
      <Upload
        name="avatar"
        customRequest={upload}
        beforeUpload={beforeUpload}
        showUploadList={false}>
        {loading ? (
          <Spinner style={{ height: '144px' }} />
        ) : (
          <Tooltip title="Edit">
            <Avatar
              src={userProfile.avatar}
              icon={<UserOutlined />}
              size={144}
              style={{ cursor: 'pointer' }}
            />
          </Tooltip>
        )}
      </Upload>
    </ImgCrop>
  )
}

export default UserEditableAvatar
