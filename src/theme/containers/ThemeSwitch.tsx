import { connect } from 'react-redux'
import { ThemeSwitch as ThemeSwitchComp } from '../components/ThemeSwitch'
import { Theme } from '@material-ui/core'
import { ThemeAction } from '../actions'
import { toggleTheme } from '../index'
import { Dispatch } from 'redux'
import { RootState } from '../../store'

interface FromStateProps {
    readonly theme: Theme
}

interface FromDispatchProps {
    readonly onToggleTheme: () => void
}

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
