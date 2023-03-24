import {
  Flex,
  Header as MantineHeader,
  useMantineColorScheme,
} from '@mantine/core'
import { FC } from 'react'
import { ThemeIcon } from '../ActionIcon'
import { useLayoutStyles } from './Layout.styles'
import { IconBrandTypescript } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'
import { ThemeText } from '../Text'

export const Header: FC = () => {
  const navigate = useNavigate()
  const { classes } = useLayoutStyles()
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'

  return (
    <MantineHeader height={60}>
      <Flex align="center" justify="space-between" className={classes.flex}>
        <Flex align="center" gap={20}>
          <IconBrandTypescript
            onClick={() => navigate('/')}
            style={{ color: dark ? '#fff' : '#000', cursor: 'pointer' }}
          />
          <ThemeText weight="bold" size={22}>
            TS-Belt exercice
          </ThemeText>
        </Flex>
        <ThemeIcon />
      </Flex>
    </MantineHeader>
  )
}
