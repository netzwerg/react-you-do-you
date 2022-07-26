import React from 'react'
import { Meta, Story } from '@storybook/react'
import { ThemeSwitch, Props } from '../theme/components/ThemeSwitch'

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
} as Meta

const Template: Story<Props> = (args) => <ThemeSwitch {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: 'light',
  onToggleTheme: () => {},
}
