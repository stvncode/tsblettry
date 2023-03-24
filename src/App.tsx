import {
  ColorScheme,
  ColorSchemeProvider,
  DEFAULT_THEME,
  MantineProvider,
} from '@mantine/core'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Array } from './component/Array'
import { Home } from './component/Home'
import { Option } from './component/Option'
import { Layout } from './component/Shell'
import { String } from './component/String'

export const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const theme = {
    ...DEFAULT_THEME,
    colors: {
      ...DEFAULT_THEME.colors,
    },
    colorScheme,
    fontFamily: 'futura',
  }

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/array" element={<Array />} />
              <Route path="/option" element={<Option />} />
              <Route path="/string" element={<String />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
