import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'

type AlertType = 'error' | 'warning'

export interface Alert {
  readonly type: AlertType
  readonly topic: string
  readonly message: string
}

export interface AlertState {
  readonly alerts: ReadonlyArray<Alert>
  readonly unreadCount: number
}

const initialState: AlertState = {
  alerts: [],
  unreadCount: 0,
}

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    addAlert: (state: Draft<AlertState>, action: PayloadAction<Alert>) => {
      state.unreadCount += 1
      state.alerts = state.alerts.concat(action.payload)
    },
    markAlertsRead: (state: Draft<AlertState>) => {
      state.unreadCount = 0
    },
  },
})

export const alertReducer = alertSlice.reducer
export const { addAlert, markAlertsRead } = alertSlice.actions
