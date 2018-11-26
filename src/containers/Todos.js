import Todos from '../components/Todos'
import { complete, undo } from '../modules/todo'
import connect from '../util/connect'

const mapStateToProps = state => ({
  todos: state,
})
const mapDispatchToProps = dispatch => ({
  actions: {
    complete: index => dispatch(complete(index)),
    undo: index => dispatch(undo(index)),
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
