import { ThemeSwitch } from '../theme/components/ThemeSwitch'
import { useTheme } from '@mui/system'
import { CommonStoryDecorator } from './CommonStoryDecorator'
import { ActionType, ThemeState, useLadleContext } from '@ladle/react'
import { useCallback } from 'react'

export default {
  decorators: [CommonStoryDecorator],
}

export const Switch = () => {
  const theme = useTheme()

  const { dispatch } = useLadleContext()

  const onToggleTheme = useCallback(() => {
    dispatch({
      type: ActionType.UpdateTheme,
      value: theme.palette.mode === 'dark' ? ThemeState.Light : ThemeState.Dark,
    })
  }, [theme, dispatch])

  return <ThemeSwitch theme={theme.palette.mode} onToggleTheme={onToggleTheme} />
}
