import axios from 'axios'
import { combineReducers } from 'redux'

/**
 * TRANSACTION
 * ACTION TYPES
 */

export const CREATE_NEW_REQ = 'sos/transaction/CREATE_NEW_REQ'
export const CREATE_NEW_DONE = 'sos/transaction/CREATE_NEW_DONE'
export const CREATE_NEW_FAIL = 'sos/transaction/CREATE_NEW_FAIL'
export const CREATE_NEW_RESET = 'sos/transaction/CREATE_NEW_RESET'

/**
 * REDUCER
 */

/** STATE SHAPE CREATE TRANSACTION
 * {
 *   transaction: { object },
 *   loading: boolean,
 * }
 */
const createTXReducer = (
  state = {
    product: {},
    loading: false,
  },
  action
) => {
  switch (action.type) {
    case CREATE_NEW_REQ:
      return { loading: true, transaction: {} }

    case CREATE_NEW_DONE:
      return { loading: false, success: true, transaction: action.payload }

    case CREATE_NEW_FAIL:
      return { loading: false, error: action.payload }

    case CREATE_NEW_RESET:
      return {}

    default:
      return state
  }
}

export default combineReducers({
  createTX: createTXReducer,
})

/**
 * ACTION CREATORS
 */

export function createTX({ buyerItemId, sellerItemId }) {
  return async (dispatch, getState) => {
    // Get current logged in user info
    const {
      user: {
        userLogin: { user },
      },
    } = getState()

    try {
      dispatch({
        type: CREATE_NEW_REQ,
      })

      const config = {
        method: 'post',
        url: `/api/transactions/`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        data: JSON.stringify({ buyerItemId, sellerItemId }),
      }

      const { data } = await axios(config)

      dispatch({
        type: CREATE_NEW_DONE,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CREATE_NEW_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
}
