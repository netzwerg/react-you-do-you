import DarkThemeIcon from '@mui/icons-material/Brightness2'
import LightThemeIcon from '@mui/icons-material/WbSunny'
import { Switch, SxProps, Theme, Box } from '@mui/material'
import { AppTheme } from '../themeSlice'

const sxRoot: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  justifyContent: 'start',
  alignItems: 'center',
}

const sxIcon: SxProps<Theme> = {
  margin: 1,
}

export interface Props {
  readonly theme: AppTheme
  readonly onToggleTheme: () => void
}

export const ThemeSwitch = ({ theme, onToggleTheme }: Props) => {
  return (
    <Box component={'div'} sx={sxRoot}>
      <LightThemeIcon sx={sxIcon} />
      <Switch checked={theme === 'dark'} onChange={onToggleTheme} color={'default'} />
      <DarkThemeIcon sx={sxIcon} />
    </Box>
  )
}
