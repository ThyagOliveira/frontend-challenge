import { BrowserRouter, Route, Routes } from 'react-router'
import { AuthProvider } from './store/AuthProvider'
import { PrivateRoute } from './routes/PrivateRoute'
import { Book } from './pages/Book'
import { Login } from './pages/Login'
import { AdminPage } from './pages/AdminPage'
import { BookEdit } from './pages/BookEdit'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import './styles/global.scss'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Book />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/book/:id"
            element={
              <PrivateRoute>
                <BookEdit />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
