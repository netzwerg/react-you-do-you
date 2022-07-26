import { createMakeAndWithStyles } from 'tss-react'
import { useTheme } from '@mui/material'
export const { makeStyles } = createMakeAndWithStyles({ useTheme })
export const noOp = () => {}
