export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increament = () => {
  return {
    type: INCREMENT
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}