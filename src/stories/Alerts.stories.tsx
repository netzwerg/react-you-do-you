import { Meta, Story } from '@storybook/react'
import { Alerts, Props } from '../alert/components/Alerts'
import React from 'react'
import { Alert } from '../alert/alertSlice'
import { AppBar } from '@mui/material'

const ERROR_ALERT: Alert = {
  type: 'error',
  topic: 'Test',
  message: 'Error message',
}

const WARNING_ALERT: Alert = {
  type: 'warning',
  topic: 'Test',
  message: 'Warning message',
}

export default {
  title: 'Alerts',
  component: Alerts,
} as Meta

const Template: Story<Props> = (args) => (
  <AppBar style={{ minHeight: 64, display: 'grid', alignItems: 'center', justifyItems: 'end', paddingRight: 8 }}>
    <Alerts {...args} />
  </AppBar>
)

export const AllRead = Template.bind({})
AllRead.args = {
  alerts: [ERROR_ALERT, WARNING_ALERT, WARNING_ALERT],
  unreadCount: 0,
}

export const UnreadWarningsAndErrors = Template.bind({})
UnreadWarningsAndErrors.args = {
  alerts: [ERROR_ALERT, WARNING_ALERT, WARNING_ALERT],
  unreadCount: 3,
}

export const UnreadWarningsOnly = Template.bind({})
UnreadWarningsOnly.args = {
  alerts: [WARNING_ALERT, WARNING_ALERT, WARNING_ALERT],
  unreadCount: 3,
}
