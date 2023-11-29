import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NavBar.module.scss'

interface NavBarProps {
  className?: string
}

const NavBar = ({className}: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}

export default NavBar