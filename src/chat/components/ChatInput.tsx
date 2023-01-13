import { Hidden, TextField, SxProps, Box, Typography, Theme } from '@mui/material'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ErrorIcon from '@mui/icons-material/Error'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'

const sxRoot: SxProps = {
  display: 'grid',
  gridTemplateColumns: '50% auto',
  alignItems: 'center',
}

const sxButtons: SxProps = {
  display: 'grid',
  gridTemplateColumns: 'auto auto',
  gap: { xs: 0.5, md: 1 },
  justifyContent: 'right',
  alignItems: 'center',
}

const sxButton: SxProps<Theme> = (theme) => ({
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    pl: 0,
    pr: 0,
  },
})

const sxButtonLabel: SxProps<Theme> = (theme) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.caption.fontSize,
  },
})

const sxIcon: SxProps<Theme> = (theme) => ({
  marginLeft: 1,
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginRight: 0,
  },
})

export interface Props {
  readonly onAddMessage: (text: string) => void
  readonly onFetchAsyncMessage: () => void
  readonly onAlert: () => void
}

export const ChatInput = ({ onAddMessage, onFetchAsyncMessage, onAlert }: Props) => {
  const [message, setMessage] = useState<string>('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && message.trim().length !== 0) {
      onAddMessage(message)
      setMessage('')
    }
  }

  return (
    <Box sx={sxRoot}>
      <TextField value={message} label="Compose Message" size={'small'} onChange={onChange} onKeyDown={onKeyDown} />
      <Box sx={sxButtons}>
        <Tooltip title={'Fetch Async Message'}>
          <Button
            sx={sxButton}
            color="primary"
            variant="outlined"
            fullWidth
            size={'large'}
            onClick={onFetchAsyncMessage}
          >
            <Hidden smDown>
              <Typography sx={sxButtonLabel}>Async</Typography>
            </Hidden>
            <CloudDownloadIcon sx={sxIcon} />
          </Button>
        </Tooltip>
        <Tooltip title={'Demo Alert Handling'}>
          <Button sx={sxButton} color="secondary" variant="outlined" fullWidth size={'large'} onClick={onAlert}>
            <Hidden smDown>
              <Typography sx={sxButtonLabel}>Alert</Typography>
            </Hidden>
            <ErrorIcon sx={sxIcon} />
          </Button>
        </Tooltip>
      </Box>
    </Box>
  )
}
