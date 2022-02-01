import DarkThemeIcon from '@mui/icons-material/Brightness2'
import LightThemeIcon from '@mui/icons-material/WbSunny'
import { Box, Switch } from '@mui/material'
import { AppTheme } from '../themeSlice'

export interface Props {
  readonly theme: AppTheme
  readonly onToggleTheme: () => void
}

export const ThemeSwitch = ({ theme, onToggleTheme }: Props) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        justifyContent: 'start',
        alignItems: 'center',
      }}
    >
      <LightThemeIcon />
      <Switch checked={theme === 'dark'} onChange={onToggleTheme} color={'default'} />
      <DarkThemeIcon />
    </Box>
  )
}
