import { Hidden, TextField, Theme, Typography } from '@mui/material'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { makeStyles } from '../../utils'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ErrorIcon from '@mui/icons-material/Error'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '50% auto',
    gridColumnGap: theme.spacing(1),
    alignItems: 'center',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridColumnGap: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      gridColumnGap: theme.spacing(0.5),
    },
    justifyContent: 'right',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  buttonLabel: {
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
  icon: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}))

export interface Props {
  readonly onAddMessage: (text: string) => void
  readonly onFetchAsyncMessage: () => void
  readonly onAlert: () => void
}

export const ChatInput = ({ onAddMessage, onFetchAsyncMessage, onAlert }: Props) => {
  const { classes } = useStyles()
  const [message, setMessage] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && message.trim().length !== 0) {
      onAddMessage(message)
      setMessage('')
    }
  }

  return (
    <div className={classes.root}>
      <TextField value={message} label="Compose Message" size={'small'} onChange={onChange} onKeyDown={onKeyDown} />
      <div className={classes.buttons}>
        <Tooltip title={'Fetch Async Message'}>
          <Button
            className={classes.button}
            color="primary"
            variant="outlined"
            fullWidth
            size={'large'}
            onClick={onFetchAsyncMessage}
          >
            <Hidden smDown>
              <Typography className={classes.buttonLabel}>Async</Typography>
            </Hidden>
            <CloudDownloadIcon className={classes.icon} />
          </Button>
        </Tooltip>
        <Tooltip title={'Demo Alert Handling'}>
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            fullWidth
            size={'large'}
            onClick={onAlert}
          >
            <Hidden smDown>
              <Typography className={classes.buttonLabel}>Alert</Typography>
            </Hidden>
            <ErrorIcon className={classes.icon} />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
