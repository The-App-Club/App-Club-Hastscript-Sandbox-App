import { FC, useState } from 'react'

import { clsx } from 'clsx'
import { EventInfo, motion } from 'framer-motion'
import { match } from 'ts-pattern'

import { DirectionToolbar } from '@/features/hastscript/components/DirectionToolbar'
import { useDirection } from '@/features/hastscript/hooks/useDirectionReducer'

type Props = {
  blockId: string
  children: React.ReactNode
}

const FocusedBlock: FC<Props> = ({ blockId, children }) => {
  const {
    state: { direction },
  } = useDirection()

  const [isParentHover, setIsParentHover] = useState<boolean>(false)
  const [isChildrenHover, setIsChildrenHover] = useState<boolean>(false)

  const handleParentHoverStart = (e: MouseEvent, info: EventInfo) => {
    e.stopPropagation()
    e.preventDefault()
    setIsParentHover(true)
  }
  const handleParentHoverEnd = (e: MouseEvent, info: EventInfo) => {
    e.stopPropagation()
    e.preventDefault()
    setIsParentHover(false)
  }

  const handleChildrenHoverStart = (e: MouseEvent, info: EventInfo) => {
    e.stopPropagation()
    e.preventDefault()
    setIsChildrenHover(true)
  }
  const handleChildrenHoverEnd = (e: MouseEvent, info: EventInfo) => {
    e.stopPropagation()
    e.preventDefault()
    setIsChildrenHover(false)
  }

  const activeParentBlockStyle = isParentHover
    ? 'border-2 border-blue-700'
    : 'border-2 border-transparent'

  const activeChildrenBlockStyle = isParentHover
    ? 'border-2 border-orange-700'
    : 'border-2 border-transparent'

  const directionClass = match(direction)
    .with('LEFT_TOP', () => `items-start justify-left`)
    .with('LEFT_CENTER', () => `items-center justify-left`)
    .with('LEFT_BOTTOM', () => `items-end justify-left`)
    .with('CENTER_TOP', () => `items-start justify-center`)
    .with('CENTER_CENTER', () => `items-center justify-center`)
    .with('CENTER_BOTTOM', () => `items-end justify-center`)
    .with('RIGHT_TOP', () => `items-start justify-end`)
    .with('RIGHT_CENTER', () => `items-center justify-end`)
    .with('RIGHT_BOTTOM', () => `items-end justify-end`)
    .exhaustive()

  return (
    <motion.div
      className={clsx(
        activeParentBlockStyle,
        'mt-24 flex min-h-[30rem] w-full p-12',
        directionClass
      )}
      onHoverStart={handleParentHoverStart}
      onHoverEnd={handleParentHoverEnd}
    >
      <motion.div
        className={clsx(activeChildrenBlockStyle, 'relative p-12')}
        onHoverStart={handleChildrenHoverStart}
        onHoverEnd={handleChildrenHoverEnd}
      >
        <DirectionToolbar isHover={isParentHover} />
        {children}
      </motion.div>
    </motion.div>
  )
}

export default FocusedBlock
