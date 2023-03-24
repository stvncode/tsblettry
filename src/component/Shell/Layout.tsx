import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { useLayoutStyles } from './Layout.styles'

export const Layout: FC = () => {
  const { classes } = useLayoutStyles()
  return (
    <div>
      <Header />
      <div className={classes.container}>
        <Outlet />
      </div>
    </div>
  )
}
