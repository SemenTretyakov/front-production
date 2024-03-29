import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Suspense fallback={'loading....'}>
        <Routes>
          {Object.values(routeConfig).map(({element, path}) => (
            <Route key={path} path={path} element={element}/>
          ))}
        </Routes>
      </Suspense>
  )
}

export default AppRouter