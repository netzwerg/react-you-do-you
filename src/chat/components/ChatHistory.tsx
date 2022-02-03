import { Card } from '@mui/material'
import React from 'react'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { ChatMessage } from '../chatSlice'

export interface Props {
  readonly messages: ReadonlyArray<ChatMessage>
  readonly onDeleteMessage: (timestamp: number) => void
}

export const ChatHistory = ({ messages, onDeleteMessage }: Props) => {
  const onDeleteButtonClick = (timestamp: number) => () => onDeleteMessage(timestamp)
  return (
    <div>
      {messages.map((message) => (
        <Card
          key={message.timestamp}
          sx={(theme) => ({
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
          })}
        >
          <CardContent
            sx={(theme) => ({
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              '&:last-child': {
                // override material-ui default
                paddingBottom: theme.spacing(2),
              },
            })}
          >
            <Typography>{message.text}</Typography>
            <IconButton aria-label="delete" onClick={onDeleteButtonClick(message.timestamp)} size="large">
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
