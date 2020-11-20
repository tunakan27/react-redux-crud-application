import { INCREMNET, DECREMENT } from '../actions';

const initialState = { value: 0 }

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMNET:
      return { value: state.value + 1 }
    case DECREMENT:
      return {value: state.value - 1 }
    default:
      return state
  }

}
