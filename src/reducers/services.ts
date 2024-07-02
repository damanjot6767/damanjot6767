import { RoutesName } from '../utils/constant'
import { getServices, getServiceById } from '../services'
import {createSlice, isAnyOf} from '@reduxjs/toolkit'



interface ServicesInitialStateType {
  service: null | ServicesModal
  services: null | ServicesModal[]
  serviceListLoading: boolean
  serviceItemLoading: boolean
  error: boolean
} // the type of the initial state of slice.

export interface ServicesModal {
  id: string;
  name: string;
  image_url: string;
  description: string;
  infromation: string
}

const initialState: ServicesInitialStateType = {
  service: null,
  services : null ,
  serviceListLoading: false,
  serviceItemLoading: false,
  error: false
}


const ServicesSlice = createSlice({
  name: "servicesSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setIndividualService : (state, {payload}) => {
      state.service = payload?.data
      payload?.navigate()
    }
  }, // action methods
  extraReducers: (builder) => {
    builder.addCase(getServices.pending, (state) => {
      state.serviceListLoading = true
    })
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.services = action.payload
      state.serviceListLoading = false
    })
    builder.addCase(getServices.rejected, (state, action) => {
      state.error = true
      state.serviceListLoading = false
    })

    builder.addCase(getServiceById.pending, (state) => {
      state.serviceItemLoading = true
    })
    builder.addCase(getServiceById.fulfilled, (state, action) => {
      state.service = action.payload
      state.serviceItemLoading = false
    })
    builder.addCase(getServiceById.rejected, (state, action) => {
      state.error = true
      state.serviceItemLoading = false
    })

  }
})

export const ServicesActions = {
   ...ServicesSlice.actions, //This includes all the action methods written above
}

const ServicesReducer = ServicesSlice.reducer //This is stored in the main store
export default ServicesReducer
