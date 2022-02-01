import { Box, TextField } from '@mui/material'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ErrorIcon from '@mui/icons-material/Error'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

export interface Props {
  readonly onAddMessage: (text: string) => void
  readonly onFetchAsyncMessage: () => void
  readonly onDemoError: () => void
}

export const ChatInput = ({ onAddMessage, onFetchAsyncMessage, onDemoError }: Props) => {
  const [message, setMessage] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
  const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && message.trim().length !== 0) {
      onAddMessage(message)
      setMessage('')
    }
  }

  return (
    <Box
      sx={(theme) => ({
        display: 'grid',
        gridTemplateColumns: '50% auto',
        gridColumnGap: theme.spacing(1),
        alignItems: 'center',
      })}
    >
      <TextField value={message} label="Compose Message" onChange={onChange} onKeyPress={onKeyPress} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gridColumnGap: 1,
          justifyContent: 'right',
          alignItems: 'center',
        }}
      >
        <Tooltip title={'Fetch Async Message'}>
          <Button color="primary" variant="outlined" onClick={onFetchAsyncMessage}>
            Async
            <CloudDownloadIcon
              sx={{
                marginLeft: 1,
              }}
            />
          </Button>
        </Tooltip>
        <Tooltip title={'Demo Error Handling'}>
          <Button color="secondary" variant="outlined" onClick={onDemoError}>
            Error
            <ErrorIcon
              sx={{
                marginLeft: 1,
              }}
            />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  )
}
