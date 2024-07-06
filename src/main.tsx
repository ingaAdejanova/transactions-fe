import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './routes'
import store from './redux/store'
import { setupInterceptors } from './api/api'
import { logout } from './redux/actions'

const router = (
  <Provider store={store}>
    <App />
  </Provider>
)

setupInterceptors(() => {
  store.dispatch(logout())
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(router)
