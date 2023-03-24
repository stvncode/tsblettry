import { List, useMantineColorScheme } from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ThemeText } from '../Text'
import { useHomeStyles } from './Home.styles'

const pages = ['array', 'option', 'String']

export const Home: FC = () => {
  const navigate = useNavigate()

  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  const { classes } = useHomeStyles(dark)

  return (
    <>
      <ThemeText weight="bold" size={40} className={classes.title}>
        Summary
      </ThemeText>
      <List spacing="lg" className={classes.list}>
        {pages.map((page) => (
          <List.Item
            color={dark ? 'gray.0' : 'dark.9'}
            onClick={() => navigate(`/${page}`)}
            className={classes.item}
          >
            {upperFirst(page)}
          </List.Item>
        ))}
      </List>
    </>
  )
}
