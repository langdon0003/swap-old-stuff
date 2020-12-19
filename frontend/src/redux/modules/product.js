import axios from 'axios'

// PRODUCT
// LIST ACTIONS
const LIST_REQ = 'sos/product/LIST_REQ'
const LIST_DONE = 'sos/product/LIST_DONE'
const LIST_FAIL = 'sos/product/LIST_FAIL'

// REDUCER
export default function reducer(
  state = {
    products: [],
    loading: false,
  },
  action
) {
  switch (action.type) {
    case LIST_REQ:
      return { loading: true, products: [] }
    case LIST_DONE:
      return { loading: false, products: action.payload }
    case LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

// ACTION CREATORS
export function fetchList() {
  return async (dispatch) => {
    try {
      dispatch({ type: LIST_REQ })
      const { data } = await axios.get('/api/products')
      dispatch({ type: LIST_DONE, payload: data })
    } catch (error) {
      dispatch({ type: LIST_FAIL, payload: error.message })
    }
  }
}
