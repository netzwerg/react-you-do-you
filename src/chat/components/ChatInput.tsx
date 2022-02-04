import { TextField, Theme } from '@mui/material'
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
    justifyContent: 'right',
    alignItems: 'center',
  },
  icon: {
    marginLeft: theme.spacing(1),
  },
}))

export interface Props {
  readonly onAddMessage: (text: string) => void
  readonly onFetchAsyncMessage: () => void
  readonly onDemoError: () => void
}

export const ChatInput = ({ onAddMessage, onFetchAsyncMessage, onDemoError }: Props) => {
  const { classes } = useStyles()
  const [message, setMessage] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
  const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && message.trim().length !== 0) {
      onAddMessage(message)
      setMessage('')
    }
  }

  return (
    <div className={classes.root}>
      <TextField value={message} label="Compose Message" onChange={onChange} onKeyPress={onKeyPress} />
      <div className={classes.buttons}>
        <Tooltip title={'Fetch Async Message'}>
          <Button color="primary" variant="outlined" onClick={onFetchAsyncMessage}>
            Async
            <CloudDownloadIcon className={classes.icon} />
          </Button>
        </Tooltip>
        <Tooltip title={'Demo Error Handling'}>
          <Button color="secondary" variant="outlined" onClick={onDemoError}>
            Error
            <ErrorIcon className={classes.icon} />
          </Button>
        </Tooltip>
      </div>
    </div>
  )
}
