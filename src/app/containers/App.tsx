import { connect } from 'react-redux'
import { App as AppComponent, Props } from '../components/App'
import { RootState } from '../../store'

const mapStateToProps = (state: RootState): Props => {
  return {
    theme: state.theme
  }
}

export const App = connect(mapStateToProps)(AppComponent)
