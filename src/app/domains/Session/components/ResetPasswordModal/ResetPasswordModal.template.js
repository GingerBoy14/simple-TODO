import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useForm } from 'react-hook-form'
import { auth } from 'service'
import { EmailInput } from '../EmailInput'

const ResetPasswordModal = () => {
  const [visible, setVisible] = useState(false)
  const [openMassage, setOpenMassage] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errored, setErrored] = useState(false)
  const { register, handleSubmit, errors } = useForm()

  const handleCancel = () => {
    setVisible(false)
    setLoading(false)
  }
  const handleCloseMessage = () => {
    setOpenMassage(false)
  }
  const onSubmit = handleSubmit(async (value) => {
    setLoading(true)
    try {
      await auth.sendPasswordResetEmail(value.email)
      setVisible(false)
    } catch (e) {
      setOpenMassage(true)
    }

    setLoading(false)
  })
  // const onFinishFailed = () => {
  //   setErrored(true)
  // }
  //Todo show loading
  //checking password
  return (
    <>
      <Box display="flex" justifyContent="center">
        <Typography component={Link} onClick={() => setVisible(true)}>
          Forgot password?
        </Typography>
      </Box>
      <Dialog open={visible} onClose={handleCancel}>
        <DialogTitle>Restoring password</DialogTitle>
        <form onSubmit={onSubmit}>
          <DialogContent>
            <DialogContentText>
              We will send you an email with further instructions on how to
              reset your password
            </DialogContentText>
            <EmailInput
              register={register}
              error={errors}
              autoFocus
              margin="dense"
              id="name"
              label="Email"
              placeholder="Enter your account email"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel} color="primary">
              Return
            </Button>
            <Button color="primary" type="submit">
              Send
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <Snackbar
        open={openMassage}
        autoHideDuration={3500}
        onClose={handleCloseMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseMessage} severity="error">
          Can't find this email.
        </Alert>
      </Snackbar>
      {/*<Modal*/}
      {/*  visible={visible}*/}
      {/*  title={<Title level={4}>Restoring password</Title>}*/}
      {/*  onCancel={handleCancel}*/}
      {/*  footer={[*/}
      {/*    <Button key="back" onClick={handleCancel}>*/}
      {/*      Return*/}
      {/*    </Button>,*/}
      {/*    <Button*/}
      {/*      key="submit"*/}
      {/*      type="primary"*/}
      {/*      disabled={false}*/}
      {/*      onClick={() => form.submit()}>*/}
      {/*      Send*/}
      {/*    </Button>*/}
      {/*  ]}>*/}
      {/*  <Space direction="vertical">*/}
      {/*    <Text>*/}
      {/*      We will send you an email with further instructions on how to reset*/}
      {/*      your password*/}
      {/*    </Text>*/}
      {/*    <Form*/}
      {/*      onFinish={onFinish}*/}
      {/*      onFinishFailed={onFinishFailed}*/}
      {/*      name="signUpForm"*/}
      {/*      form={form}>*/}
      {/*      <EmailInput*/}
      {/*        hasFeedback={loading}*/}
      {/*        validateStatus={`${errored ? 'error' : 'validation'}`}*/}
      {/*        validateTrigger={[*/}
      {/*          'onSubmit',*/}
      {/*          `${errored ? 'onChange' : 'onSubmit'}`*/}
      {/*        ]}*/}
      {/*        placeholder="Enter your account email"*/}
      {/*      />*/}
      {/*    </Form>*/}
      {/*  </Space>*/}
      {/*</Modal>*/}
    </>
  )
}
export default ResetPasswordModal
