import React, { useEffect, useState } from 'react'
import { Snackbar } from '@mui/material'
import SnackbarContent from '@mui/material/SnackbarContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { ChatError } from '../chatSlice'

export interface Props {
  readonly errors: ReadonlyArray<ChatError>
  readonly onDismissErrors: () => void
}

export const ChatErrors = ({ errors, onDismissErrors }: Props) => {
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  useEffect(() => setOpenSnackbar(errors.length > 0), [errors.length])

  const preventClickAway = { onClickAway: () => null }

  return (
    <Snackbar open={openSnackbar} ClickAwayListenerProps={preventClickAway}>
      <SnackbarContent
        sx={(theme) => ({
          color: theme.palette.common.white,
          backgroundColor: theme.palette.error.dark,
        })}
        message={`${errors.length} error(s) – check Console...`}
        action={[
          <IconButton
            sx={(theme) => ({ color: theme.palette.common.white })}
            key="close"
            aria-label="close"
            onClick={onDismissErrors}
            size="large"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </Snackbar>
  )
}
