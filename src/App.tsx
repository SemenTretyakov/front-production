import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPageLazy'
import { PostPageLazy } from './pages/PostPage/PostPageLazy'
import { MainPageLazy } from './pages/MainPage/MainPageLazy'
import { Suspense } from 'react'
import useTheme from './hooks/useTheme'
import { classNames } from './helpers/classNames/classNames'

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
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
      <Suspense fallback={'loading....'}>
        <Routes>
          <Route path={'/about'} element={<AboutPageLazy />} />
          <Route path={'/posts'} element={<PostPageLazy />} />
          <Route path={'/'} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
