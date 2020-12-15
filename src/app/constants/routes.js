import { Login, SignUp } from 'app/domains/Session/routes'
import TodoApp from 'app/domains/TodoApp/routes'
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
    protected: true,
    redirectTo: '/login',
    exact: true,
    component: TodoApp,
    path: '/'
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export { ROUTES, ROUTES_KEYS, ROUTES_VALUE }
