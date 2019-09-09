import { List as ImmutableList } from 'immutable'
import { Message } from '../model'
import { Card, Theme } from '@material-ui/core'
import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme: Theme) => ({
    messageCard: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}))

export interface Props {
    readonly messages: ImmutableList<Message>
}

export const ChatHistory = ({ messages }: Props) => {
    const classes = useStyles()
    return (
        <div>
            {messages.map(message => (
                <Card key={message.timestamp} className={classes.messageCard}>
                    <CardContent>
                        <Typography>{message.text}</Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
