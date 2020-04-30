const defaultState = {
  name: '郭炯韦',
  age: 24,
  sex: '男'
} 
export const test = (state = defaultState, action) => {
  const { type, data } = action
  switch (type) {
    case 'SET_NAME':
      state.name = data
      return state
    case 'SET_AGE':
      state.age = data
      return state
    case 'SET_SEX':
      state.sex = data
      return state
    default:
      return state
  }
}