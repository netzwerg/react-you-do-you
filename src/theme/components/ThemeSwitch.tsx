import DarkThemeIcon from '@material-ui/icons/Brightness2'
import LightThemeIcon from '@material-ui/icons/WbSunny'
import * as React from 'react'
import { Switch } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { AppTheme } from '../themeSlice'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    alignItems: 'center',
  },
  icon: {
    margin: 4,
  },
})

export interface Props {
  readonly theme: AppTheme
  readonly onToggleTheme: () => void
}

export const ThemeSwitch = ({ theme, onToggleTheme }: Props) => {
  const classes = useStyles(theme)
  return (
    <div className={classes.root}>
      <LightThemeIcon className={classes.icon} />
      <Switch checked={theme === 'dark'} onChange={onToggleTheme} color={'default'} />
      <DarkThemeIcon className={classes.icon} />
    </div>
  )
}
