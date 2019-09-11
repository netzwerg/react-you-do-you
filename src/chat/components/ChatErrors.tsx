import { List as ImmutableList } from 'immutable'
import { ChatError } from '../model'
import React, { useEffect, useState } from 'react'
import { Snackbar, Theme } from '@material-ui/core'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme: Theme) => ({
    snackbarContent: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.error.dark
    },
    closeIcon: {
        color: theme.palette.common.white
    }
}))

export interface Props {
    readonly errors: ImmutableList<ChatError>
    readonly onDismissErrors: () => void
}

export const ChatErrors = ({ errors, onDismissErrors }: Props) => {
    const classes = useStyles()
    const [openSnackbar, setOpenSnackbar] = useState<boolean>(false)

    useEffect(() => setOpenSnackbar(errors.size > 0), [errors.size])

    // noinspection JSUnusedGlobalSymbols
    const preventClickAway = { onClickAway: () => null }

    return (
        <Snackbar open={openSnackbar} ClickAwayListenerProps={preventClickAway}>
            <SnackbarContent
                className={classes.snackbarContent}
                message={`${errors.size} error(s) – check Console...`}
                action={[
                    <IconButton className={classes.closeIcon} key="close" aria-label="close" onClick={onDismissErrors}>
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </Snackbar>
    )
}
