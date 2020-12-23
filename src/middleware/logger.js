export default (store) => (next) => (action) => {
  console.group(action.type)
    console.log('The action: ', action)
    const newState = next(action)
    console.log('New state is:', store.getState())
  console.groupEnd()

  return newState
}