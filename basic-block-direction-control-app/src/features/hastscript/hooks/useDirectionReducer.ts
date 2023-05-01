import { createContext, useContext, useReducer } from 'react'

import { produce } from 'immer'

import {
  DirectionAction,
  DirectionState,
} from '@/features/hastscript/types/direction'

const reducer = (state: DirectionState, action: DirectionAction) => {
  if (action.type === 'LEFT_TOP') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'LEFT_CENTER') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'LEFT_BOTTOM') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'CENTER_TOP') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'CENTER_CENTER') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'CENTER_BOTTOM') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'RIGHT_TOP') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'RIGHT_CENTER') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else if (action.type === 'RIGHT_BOTTOM') {
    const nextState = produce(state, (draft: DirectionState) => {
      draft.direction = action.type
      return draft
    })
    return nextState
  } else {
    const nextState = produce(state, (draft: DirectionState) => {
      return draft
    })
    return nextState
  }
}

const initialState: DirectionState = {
  direction: 'CENTER_CENTER',
}

export const useDirectionReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const moveToLeftTop = () => {
    dispatch({
      type: 'LEFT_TOP',
    })
  }
  const moveToLeftCenter = () => {
    dispatch({
      type: 'LEFT_CENTER',
    })
  }
  const moveToLeftBottom = () => {
    dispatch({
      type: 'LEFT_BOTTOM',
    })
  }
  const moveToCenterTop = () => {
    dispatch({
      type: 'CENTER_TOP',
    })
  }
  const moveToCenterCenter = () => {
    dispatch({
      type: 'CENTER_CENTER',
    })
  }
  const moveToCenterBottom = () => {
    dispatch({
      type: 'CENTER_BOTTOM',
    })
  }
  const moveToRightTop = () => {
    dispatch({
      type: 'RIGHT_TOP',
    })
  }
  const moveToRightCenter = () => {
    dispatch({
      type: 'RIGHT_CENTER',
    })
  }
  const moveToRightBottom = () => {
    dispatch({
      type: 'RIGHT_BOTTOM',
    })
  }
  return {
    state,
    moveToLeftTop,
    moveToLeftCenter,
    moveToLeftBottom,
    moveToCenterTop,
    moveToCenterCenter,
    moveToCenterBottom,
    moveToRightTop,
    moveToRightCenter,
    moveToRightBottom,
  }
}

export const defaultDirection: ReturnType<typeof useDirectionReducer> = {
  state: initialState,
  moveToLeftTop: () => {},
  moveToLeftCenter: () => {},
  moveToLeftBottom: () => {},
  moveToCenterTop: () => {},
  moveToCenterCenter: () => {},
  moveToCenterBottom: () => {},
  moveToRightTop: () => {},
  moveToRightCenter: () => {},
  moveToRightBottom: () => {},
}

export const DirectionContext = createContext(defaultDirection)

export const useDirection = () => {
  const {
    state,
    moveToLeftTop,
    moveToLeftCenter,
    moveToLeftBottom,
    moveToCenterTop,
    moveToCenterCenter,
    moveToCenterBottom,
    moveToRightTop,
    moveToRightCenter,
    moveToRightBottom,
  } = useContext(DirectionContext)
  return {
    state,
    moveToLeftTop,
    moveToLeftCenter,
    moveToLeftBottom,
    moveToCenterTop,
    moveToCenterCenter,
    moveToCenterBottom,
    moveToRightTop,
    moveToRightCenter,
    moveToRightBottom,
  }
}
