import { Login, SignUp } from '../domains/Session/routes'
import TodoList from '../domains/TodoList/routes'
const ROUTES = {
  LOGIN: {
    component: Login,
    path: '/login'
  },
  SIGNUP: {
    exact: false,
    component: SignUp,
    path: '/signUp'
  },
  TODO_LIST: {
    exact: true,
    component: TodoList,
    path: '/'
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export { ROUTES, ROUTES_KEYS, ROUTES_VALUE }
