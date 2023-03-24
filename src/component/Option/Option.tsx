import { FC } from 'react'
import { ThemeText } from '../Text'
import { O, pipe } from '@mobily/ts-belt'
import { Flex } from '@mantine/core'
import { Prism } from '@mantine/prism'

export const Option: FC = () => {
  const test1 = pipe(O.fromNullable(null), O.getWithDefault('test'))

  const codeTest1 = `// - FromNullable va transformer une data en some<A>() ou none<A>() ce qui va nous donner accès aux options sur la value
// - getWithDefault (getOrElse sur fp-ts) va nous permettre de récupérer la valeur de la data ou 
// une valeur par défaut (ce qui va transforer la data en some<A>() a la plae d'une option)
// - typeof test1 = string et plus precisement 'test'

const test1 = pipe(O.fromNullable(null), O.getWithDefault('test'))

Result : '${test1}'
  `

  const codeTest2 = `// - filter va nous permettre de filtrer la data avec un predicate
// - match (fold in fp-ts) va nous permettre de récupérer la valeur de la data ou une
// valeur par défaut et de la transformer (la 1ere callback est pour le cas ou la data est some<A>() et la 2eme callback est pour le cas ou la data est none<A>())
// - typeof test2 = JSX.Element et plus precisement <div>test</div>

const test2 = pipe(
    O.fromNullable(test1),
    O.filter((t) => t === 'test'),
    O.match(
      (t) => <div>{t}</div>,
      () => <div>5 pintes mini</div>,
    ),
  )

Result : <div>test</div>
  `

  return (
    <>
      <ThemeText weight="bold" size={22} style={{ marginBottom: '3rem' }}>
        Option
      </ThemeText>
      <Flex direction="column" gap={40}>
        <Flex direction="column" gap={30}>
          <ThemeText weight="bold" size={18}>
            Test1 :
          </ThemeText>
          <Prism withLineNumbers language="tsx" style={{ textAlign: 'left' }}>
            {codeTest1}
          </Prism>
        </Flex>
        <Flex direction="column" gap={30}>
          <ThemeText weight="bold" size={18}>
            Test2 :
          </ThemeText>
          <Prism withLineNumbers language="tsx" style={{ textAlign: 'left' }}>
            {codeTest2}
          </Prism>
        </Flex>
      </Flex>
    </>
  )
}
