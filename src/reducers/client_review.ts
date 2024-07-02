import { getClientReviews } from '../services/client_review'
import {createSlice, isAnyOf} from '@reduxjs/toolkit'



interface ClientReviewInitialStateType {
  client_reviews: null | ClientReviewModal[]
  loading: boolean
  error: boolean
} // the type of the initial state of slice.

export interface ClientReviewModal {
  id: string;
  name: string;
  title: string;
  image_url: string;
  description: string;
  rating: number
}

const initialState: ClientReviewInitialStateType = {
  client_reviews : null ,
  loading: false,
  error: false
}


const ClientReviewSlice = createSlice({
  name: "clientReviewSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {}, // action methods
  extraReducers: (builder) => {
    builder.addCase(getClientReviews.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getClientReviews.fulfilled, (state, action) => {
      state.client_reviews = action.payload
    })
    builder.addCase(getClientReviews.rejected, (state, action) => {
      state.error = true
    })
    builder.addMatcher(isAnyOf(
    getClientReviews.fulfilled,getClientReviews.rejected), (state) => {
      state.loading = false
    })
  }
})

export const ClientReviewActions = {
   ...ClientReviewSlice.actions, //This includes all the action methods written above
}

const ClientReviewReducer = ClientReviewSlice.reducer //This is stored in the main store
export default ClientReviewReducer
