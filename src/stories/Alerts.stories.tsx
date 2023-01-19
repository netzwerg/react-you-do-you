import { Alerts, Props } from '../alert/components/Alerts'
import { Alert } from '../alert/alertSlice'
import type { StoryDecorator } from '@ladle/react'
import { CommonStoryDecorator } from './CommonStoryDecorator'

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
  decorators: [
    CommonStoryDecorator,
    (Component) => {
      return (
        <div style={{ display: 'grid', placeItems: 'center', width: 100, height: 100, backgroundColor: 'grey' }}>
          <Component />
        </div>
      )
    },
  ] as StoryDecorator[],
}

const defaultProps: Omit<Props, 'alerts' | 'unreadCount'> = {
  onMarkAlertsRead: () => {},
}

export const AllRead = () => (
  <Alerts alerts={[ERROR_ALERT, WARNING_ALERT, WARNING_ALERT]} unreadCount={0} {...defaultProps} />
)

export const UnreadWarningsAndErrors = () => (
  <Alerts alerts={[ERROR_ALERT, WARNING_ALERT, WARNING_ALERT]} unreadCount={3} {...defaultProps} />
)

export const UnreadWarningsOnly = () => (
  <Alerts alerts={[WARNING_ALERT, WARNING_ALERT, WARNING_ALERT]} unreadCount={3} {...defaultProps} />
)
