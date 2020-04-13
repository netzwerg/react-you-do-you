import { ChatErrors as ChatErrorsComponent, Props } from '../components/ChatErrors'
import { connect } from 'react-redux'
import { RootState } from '../../store'
import { Dispatch } from 'redux'
import { ChatAction, dismissChatErrors } from '../actions'

type FromStateProps = Omit<Props, 'onDismissErrors'>

const mapStateToProps = (state: RootState): FromStateProps => {
  return {
    errors: state.chat.errors
  }
}

type FromDispatchProps = Omit<Props, 'errors'>

const mapDispatchToProps = (dispatch: Dispatch<ChatAction>): FromDispatchProps => {
  return {
    onDismissErrors: () => dispatch(dismissChatErrors())
  }
}

export const ChatErrors = connect(mapStateToProps, mapDispatchToProps)(ChatErrorsComponent)
