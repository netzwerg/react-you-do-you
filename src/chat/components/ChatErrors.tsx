import React, { useEffect, useState } from 'react'
import { Snackbar, Theme } from '@mui/material'
import SnackbarContent from '@mui/material/SnackbarContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { makeStyles } from '../../utils'
import { ChatError } from '../chatSlice'

const useStyles = makeStyles()((theme: Theme) => ({
  snackbarContent: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.error.dark,
  },
  closeIcon: {
    color: theme.palette.common.white,
  },
}))

export interface Props {
  readonly errors: ReadonlyArray<ChatError>
  readonly onDismissErrors: () => void
}

export const ChatErrors = ({ errors, onDismissErrors }: Props) => {
  const { classes } = useStyles()
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

  useEffect(() => setOpenSnackbar(errors.length > 0), [errors.length])

  const preventClickAway = { onClickAway: () => null }

  return (
    <Snackbar open={openSnackbar} ClickAwayListenerProps={preventClickAway}>
      <SnackbarContent
        className={classes.snackbarContent}
        message={`${errors.length} error(s) – check Console...`}
        action={[
          <IconButton
            className={classes.closeIcon}
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
