// import { produce } from 'immer'
const defaultState = {
  name: '郭炯韦',
  age: 24,
  sex: '男'
} 
export const person = (state = defaultState, action) => {
  const { type, data } = action
  switch (type) {
    case 'SET_NAME':
      state.name = data
      return {...state}
    case 'SET_AGE':
      state.age = data
      return {...state}
    case 'SET_SEX':
      state.sex = data
      return {...state}
    default:
      return state
  }
}
// export const person = (state = defaultState, action) => {
//   const { type, data } = action
//   return produce(state, darft => {
//     switch (type) {
//       case 'SET_NAME':
//         darft.name = data
//         break
//       case 'SET_AGE':
//         darft.age = data
//         break
//       case 'SET_SEX':
//         darft.sex = data
//         break
//       default:
//         return state
//     }
//   })
// }