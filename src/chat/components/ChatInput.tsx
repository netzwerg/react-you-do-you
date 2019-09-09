import { TextField } from '@material-ui/core'
import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

export interface Props {
    readonly onAddMessage: (text: string) => void
}

export const ChatInput = ({ onAddMessage }: Props) => {
    const [message, setMessage] = useState<string>('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)
    const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' && message.trim().length !== 0) {
            onAddMessage(message)
            setMessage('')
        }
    }

    return (
        <TextField
            value={message}
            label="Compose Message"
            variant="outlined"
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
    )
}
