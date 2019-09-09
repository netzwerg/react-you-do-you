import DarkThemeIcon from '@material-ui/icons/Brightness2'
import LightThemeIcon from '@material-ui/icons/WbSunny'
import * as React from 'react'
import { Switch, Theme } from '@material-ui/core'
import { darkTheme } from '../model'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr auto',
        alignItems: 'center'
    },
    icon: {
        margin: 4
    }
})

export interface Props {
    readonly theme: Theme
    readonly onToggleTheme: () => void
}

export const ThemeSwitch = ({ theme, onToggleTheme }: Props) => {
    const classes = useStyles(theme)
    return (
        <div className={classes.root}>
            <LightThemeIcon className={classes.icon} />
            <Switch checked={theme === darkTheme} onChange={onToggleTheme} color={'default'} />
            <DarkThemeIcon className={classes.icon} />
        </div>
    )
}
