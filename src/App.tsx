import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles'

import Footer from './components/Footer'
import Paths from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Paths />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
