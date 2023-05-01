export type Direction =
  | 'CENTER_CENTER'
  | 'LEFT_TOP'
  | 'LEFT_CENTER'
  | 'LEFT_BOTTOM'
  | 'CENTER_TOP'
  | 'CENTER_CENTER'
  | 'CENTER_BOTTOM'
  | 'RIGHT_TOP'
  | 'RIGHT_CENTER'
  | 'RIGHT_BOTTOM'

export type DirectionState = {
  direction: Direction
}
// https://basarat.gitbook.io/typescript/type-system/discriminated-unions#discriminated-union
// https://www.benmvp.com/blog/type-checking-react-usereducer-typescript/
export type DirectionAction =
  | { type: 'LEFT_TOP' }
  | { type: 'LEFT_CENTER' }
  | { type: 'LEFT_BOTTOM' }
  | { type: 'CENTER_TOP' }
  | { type: 'CENTER_CENTER' }
  | { type: 'CENTER_BOTTOM' }
  | { type: 'RIGHT_TOP' }
  | { type: 'RIGHT_CENTER' }
  | { type: 'RIGHT_BOTTOM' }
