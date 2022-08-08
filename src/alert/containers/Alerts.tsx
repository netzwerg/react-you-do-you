import { useAppDispatch, useAppSelector } from '../../store'
import { Alerts as AlertsComponent } from '../components/Alerts'
import { useCallback } from 'react'
import { markAlertsRead } from '../alertSlice'

export const Alerts = () => {
  const alertState = useAppSelector((s) => s.alert)
  const dispatch = useAppDispatch()
  const onMarkAlertsRead = useCallback(() => dispatch(markAlertsRead()), [dispatch])
  return <AlertsComponent {...alertState} onMarkAlertsRead={onMarkAlertsRead} />
}
