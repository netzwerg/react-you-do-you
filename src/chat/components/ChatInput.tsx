import { TextField, Theme } from '@material-ui/core'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import ErrorIcon from '@material-ui/icons/Error'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) => ({
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
  const classes = useStyles()
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
      <TextField
        value={message}
        label="Compose Message"
        variant="outlined"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
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
