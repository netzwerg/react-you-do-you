import { connect } from 'react-redux'
import { ThemeSwitch as ThemeSwitchComp } from '../components/ThemeSwitch'
import { Theme } from '@material-ui/core'
import { ThemeAction } from '../actions'
import { toggleTheme } from '../index'
import { Dispatch } from 'redux'
import { RootState } from '../../store'

type FromStateProps = Readonly<{
    theme: Theme
}>

type FromDispatchProps = Readonly<{
    onToggleTheme: () => void
}>

const mapStateToProps = (state: RootState): FromStateProps => {
    return { theme: state.theme }
}

const mapDispatchToProps = (dispatch: Dispatch<ThemeAction>): FromDispatchProps => {
    return {
        onToggleTheme: () => dispatch(toggleTheme())
    }
}

export const ThemeSwitch = connect(
    mapStateToProps,
    mapDispatchToProps
)(ThemeSwitchComp)
