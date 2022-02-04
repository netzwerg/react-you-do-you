import DarkThemeIcon from '@mui/icons-material/Brightness2'
import LightThemeIcon from '@mui/icons-material/WbSunny'
import { Switch } from '@mui/material'
import { makeStyles } from '../../utils'
import { AppTheme } from '../themeSlice'

const useStyles = makeStyles()({
  root: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    justifyContent: 'start',
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
  const { classes } = useStyles()
  return (
    <div className={classes.root}>
      <LightThemeIcon className={classes.icon} />
      <Switch checked={theme === 'dark'} onChange={onToggleTheme} color={'default'} />
      <DarkThemeIcon className={classes.icon} />
    </div>
  )
}
