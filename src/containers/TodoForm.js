import TodoForm from '../components/TodoForm'
import { add } from '../modules/todo'
import connect from '../util/connect'

const mapDispatchToProps = dispatch => ({
  actions: {
    add: action => dispatch(add(action)),
  },
})

export default connect(null, mapDispatchToProps)(TodoForm)
