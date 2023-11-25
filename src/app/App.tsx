import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {
  const { theme, toggleTheme } = useTheme()  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <ul>
        <li>
          <Link to={'/'}>Main</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
      </ul>
      <Suspense fallback={'loading....'}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
