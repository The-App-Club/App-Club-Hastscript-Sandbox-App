import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { h } from 'hastscript'
// @ts-ignore
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'

import { BlockProvider } from '@/features/hastscript/components/BlockProvider'

const tree1 = h('div', [
  h('p.hidden', { ariaHidden: true }, ['hidden text']),
  h('p', { className: 'sr-only' }, ['hidden text']),
  h('p', { className: 'font-merryweather text-6xl text-slate-800' }, [
    'Hello World',
  ]),
])

const tree2 = h('div', [
  h('p.hidden', { ariaHidden: true }, ['hidden text']),
  h('p', { className: 'sr-only' }, ['hidden text']),
  h('p', { className: 'font-merryweather text-6xl text-slate-800' }, [
    'Cowboy Bebop',
  ]),
])

const tree3 = h('div', [
  h('p.hidden', { ariaHidden: true }, ['hidden text']),
  h('p', { className: 'sr-only' }, ['hidden text']),
  h('p', { className: 'font-merryweather text-6xl text-slate-800' }, [
    'Have a nice holiday!',
  ]),
])

console.log(tree1)

console.log(
  toJsxRuntime(tree1, {
    Fragment,
    jsx,
    jsxs,
  })
)

const Demo = () => {
  const blockId = 'XXX'

  return (
    <>
      {[tree1, tree2, tree3].map((tree, index) => {
        return (
          <BlockProvider key={index} blockId={blockId}>
            {toJsxRuntime(tree, {
              Fragment,
              jsx,
              jsxs,
            })}
          </BlockProvider>
        )
      })}
      <div className='h-24 w-full' />
    </>
  )
}

export default Demo
