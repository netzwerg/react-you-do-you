import { ThemeSwitch } from '../theme/components/ThemeSwitch'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/system'
import { CommonStoryDecorator } from './CommonStoryDecorator'

export default {
  decorators: [CommonStoryDecorator],
}

export const Switch = () => {
  const theme = useTheme()
  return (
    <>
      <ThemeSwitch theme={theme.palette.mode} onToggleTheme={() => {}} />
      <Typography variant={'body2'}>{'Toggle Ladle theme (bottom left corner) to switch state'}</Typography>
    </>
  )
}
