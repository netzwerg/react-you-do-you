import { ThemeSwitch } from '../theme/components/ThemeSwitch'
import { Typography } from '@mui/material'
import { useCustomTheme } from '../theme/hooks'

export const Switch = () => {
  const theme = useCustomTheme()
  return (
    <>
      <ThemeSwitch theme={theme.palette.mode} onToggleTheme={() => {}} />
      <Typography variant={'body2'}>{'Toggle Ladle theme (bottom left corner) to switch state'}</Typography>
    </>
  )
}
