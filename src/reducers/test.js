import {
  TEST,
} from 'constant'

export default (state, action) => {
  switch (action.type) {
  case TEST:
    return {
      ...state,
      ...action.payload,
    }
  default:
    return state
  }
}
