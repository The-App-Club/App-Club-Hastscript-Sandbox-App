import { FC } from 'react'

import { FocusedBlock } from '@/features/hastscript/components/FocusedBlock'
import {
  DirectionContext,
  useDirectionReducer,
} from '@/features/hastscript/hooks/useDirectionReducer'

type Props = {
  blockId: string
  children: React.ReactNode
}

const BlockProvider: FC<Props> = ({ blockId, children }) => {
  const subscribed = useDirectionReducer()
  return (
    <DirectionContext.Provider value={{ ...subscribed }}>
      <FocusedBlock blockId={blockId}>{children}</FocusedBlock>
    </DirectionContext.Provider>
  )
}

export default BlockProvider
