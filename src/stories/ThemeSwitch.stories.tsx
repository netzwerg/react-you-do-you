import React from 'react'
import { Meta, Story } from '@storybook/react'
import { Props, ThemeSwitch } from '../theme/components/ThemeSwitch'
import { useCustomTheme } from '../theme/useCustomTheme'
import { Typography } from '@mui/material'

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
} as Meta

const Template: Story<Props> = () => {
  const theme = useCustomTheme().palette.mode
  return (
    <div>
      <ThemeSwitch theme={theme} onToggleTheme={() => {}} />
      <Typography variant={'body2'}>{'Toggle storybook theme to switch state'}</Typography>
    </div>
  )
}

export const Default = Template.bind({})
