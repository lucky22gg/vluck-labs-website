import { createBrowserRouter } from 'react-router'
import Root from './Root'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'privacy', Component: Privacy },
      { path: 'terms', Component: Terms },
      { path: '*', Component: NotFound },
    ],
  },
])
