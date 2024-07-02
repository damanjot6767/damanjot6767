import {createSlice, isAnyOf} from '@reduxjs/toolkit'
import { getRandomNumber } from '../services/incDecService'


interface IncDecInitialStateType {
  currentNumber: number
  loading: boolean
  apiNumber: number | null
  errorStatus: number | null
} // the type of the initial state of slice.

const initialState: IncDecInitialStateType = {
  currentNumber: 0,
  loading: false,
  apiNumber: null,
  errorStatus: null
}


/* 
  the first parameter in createAsync Thunk represents the redux action type constant
  a type argument generates 3 action types:
    1) pending: 'incDecSlice/getRandomNumber/pending'
    2) fulfilled: 'incDecSlice/getRandomNumber/fulfilled'
    3) rejected: 'incDecSlice/getRandomNumber/rejected'

  thunkApi is an object that contains parameters that are passed to redux thunk function
*/
const IncDecSlice = createSlice({
  name: "incDecSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    incrementNumber: (state) => {
      state.currentNumber += 1
    },
    decrementNumber: (state) => {
      state.currentNumber -= 1
    },
    incrementUserValue: (state, action) => {
      state.currentNumber += action.payload
    },
    decrementUserValue: (state, action) => {
      state.currentNumber -= action.payload
    },
    resetValue: (state) => {
      state.currentNumber = 0
    }
  }, // action methods
  extraReducers: (builder) => {
    builder.addCase(getRandomNumber.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getRandomNumber.fulfilled, (state, action) => {
      console.log(action.payload)
      state.apiNumber = action.payload
    })
    builder.addCase(getRandomNumber.rejected, (state, action) => {
      state.errorStatus = action.payload as number
    })
    builder.addMatcher(isAnyOf(
      getRandomNumber.fulfilled,getRandomNumber.rejected), (state) => {
      state.loading = false
    })
  }
})

export const IncDecActions = {
   ...IncDecSlice.actions, //This includes all the action methods written above
}

const IncDecReducer = IncDecSlice.reducer //This is stored in the main store
export default IncDecReducer
