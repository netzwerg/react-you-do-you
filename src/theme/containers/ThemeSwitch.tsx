import { connect, Omit } from 'react-redux'
import { Props, ThemeSwitch as ThemeSwitchComp } from '../components/ThemeSwitch'
import { ThemeAction } from '../actions'
import { toggleTheme } from '../index'
import { Dispatch } from 'redux'
import { RootState } from '../../store'

type FromStateProps = Omit<Props, 'onToggleTheme'>

const mapStateToProps = (state: RootState): FromStateProps => {
  return { theme: state.theme }
}

type FromDispatchProps = Omit<Props, 'theme'>

const mapDispatchToProps = (dispatch: Dispatch<ThemeAction>): FromDispatchProps => {
  return {
    onToggleTheme: () => dispatch(toggleTheme())
  }
}

export const ThemeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitchComp)
