import { List as ImmutableList } from 'immutable'
import { Message } from '../model'
import { Card, Theme } from '@material-ui/core'
import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme: Theme) => ({
  messageCard: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  messageCardContent: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    '&:last-child': {
      // override material-ui default
      paddingBottom: theme.spacing(2),
    },
  },
}))

export interface Props {
  readonly messages: ImmutableList<Message>
  readonly onDeleteMessage: (timestamp: number) => void
}

export const ChatHistory = ({ messages, onDeleteMessage }: Props) => {
  const classes = useStyles()
  const onDeleteButtonClick = (timestamp: number) => () => onDeleteMessage(timestamp)
  return (
    <div>
      {messages.map((message) => (
        <Card key={message.timestamp} className={classes.messageCard}>
          <CardContent className={classes.messageCardContent}>
            <Typography>{message.text}</Typography>
            <IconButton aria-label="delete" onClick={onDeleteButtonClick(message.timestamp)}>
              <DeleteIcon />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
