import { Text, TextProps, useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'

type Props = {
  children: React.ReactNode
} & Omit<TextProps, 'color'>

export const ThemeText: FC<Props> = ({ children, ...props }) => {
  const { colorScheme } = useMantineColorScheme()

  const dark = colorScheme === 'dark'
  return (
    <Text color={dark ? 'gray.0' : 'dark.9'} {...props}>
      {children}
    </Text>
  )
}
