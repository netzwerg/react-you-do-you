import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeSwitch, Props } from '../theme/components/ThemeSwitch'

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
} as Meta

const Template: Story<Props> = (args) => <ThemeSwitch {...args} />

export const LightThemeSelected = Template.bind({})
LightThemeSelected.args = {
  theme: 'light',
  onToggleTheme: () => {},
}

export const DarkThemeSelected = Template.bind({})
DarkThemeSelected.args = {
  theme: 'dark',
  onToggleTheme: () => {},
}
