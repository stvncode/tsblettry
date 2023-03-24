import { createStyles } from '@mantine/core'

export const useHomeStyles = createStyles((_, isDark: boolean) => ({
  title: {
    marginBottom: '4rem',
  },
  item: {
    cursor: 'pointer',
    fontSize: '2rem',
    color: isDark ? 'white' : 'black',
  },
  list: {
    textAlign: 'left',
    marginLeft: '30.5rem',
  },
}))
