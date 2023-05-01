import { FC } from 'react'

import {
  ArrowLineDown,
  ArrowLineDownLeft,
  ArrowLineDownRight,
  ArrowLineLeft,
  ArrowLineRight,
  ArrowLineUp,
  ArrowLineUpLeft,
  ArrowLineUpRight,
  ArrowsIn,
} from '@phosphor-icons/react'

import { useDirection } from '@/features/hastscript/hooks/useDirectionReducer'

type Props = {
  isHover: boolean
}

const DirectionToolbar: FC<Props> = ({ isHover }) => {
  const {
    moveToLeftTop,
    moveToLeftCenter,
    moveToLeftBottom,
    moveToCenterTop,
    moveToCenterCenter,
    moveToCenterBottom,
    moveToRightTop,
    moveToRightCenter,
    moveToRightBottom,
  } = useDirection()

  const handleLeftTop = () => {
    moveToLeftTop()
  }

  const handleLeftCenter = () => {
    moveToLeftCenter()
  }

  const handleLeftBottom = () => {
    moveToLeftBottom()
  }

  const handleCenterTop = () => {
    moveToCenterTop()
  }

  const handleCenterCenter = () => {
    moveToCenterCenter()
  }

  const handleCenterBottom = () => {
    moveToCenterBottom()
  }

  const handleRightTop = () => {
    moveToRightTop()
  }

  const handleRightCenter = () => {
    moveToRightCenter()
  }

  const handleRightBottom = () => {
    moveToRightBottom()
  }

  return (
    <div className={`${isHover ? '' : 'sr-only'}`}>
      <button
        type='button'
        className='absolute left-[-32px] top-[-2rem]'
        onClick={handleLeftTop}
      >
        <ArrowLineUpLeft size={32} />
      </button>
      <button
        type='button'
        className='absolute left-[-32px] top-[calc(50%-1rem)]'
        onClick={handleLeftCenter}
      >
        <ArrowLineLeft size={32} />
      </button>

      <button
        type='button'
        className='absolute bottom-[-2rem] left-[-32px]'
        onClick={handleLeftBottom}
      >
        <ArrowLineDownLeft size={32} />
      </button>

      <button
        type='button'
        className='absolute right-[-32px] top-[-2rem]'
        onClick={handleRightTop}
      >
        <ArrowLineUpRight size={32} />
      </button>

      <button
        type='button'
        className='absolute right-[-32px] top-[calc(50%-1rem)]'
        onClick={handleRightCenter}
      >
        <ArrowLineRight size={32} />
      </button>

      <button
        type='button'
        className='absolute bottom-[-2rem] right-[-32px]'
        onClick={handleRightBottom}
      >
        <ArrowLineDownRight size={32} />
      </button>

      <button
        type='button'
        className='absolute left-[calc(50%-1rem)] top-[-32px]'
        onClick={handleCenterTop}
      >
        <ArrowLineUp size={32} />
      </button>

      <button
        type='button'
        className='absolute right-0 top-0'
        onClick={handleCenterCenter}
      >
        <ArrowsIn size={32} />
      </button>

      <button
        type='button'
        className='absolute bottom-[-32px] left-[calc(50%-1rem)]'
        onClick={handleCenterBottom}
      >
        <ArrowLineDown size={32} />
      </button>
    </div>
  )
}

export default DirectionToolbar
