import testReducer from './test'

export default ({modal, product, user}, action) => ({
  test: testReducer(user, action),
})
