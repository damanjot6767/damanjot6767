import { getTeamMemberById, getTeamMembers } from '../services'
import {createSlice, isAnyOf} from '@reduxjs/toolkit'



interface TeamMemberInitialStateType {
  teamMembers: null | TeamMemberModal[]
  teamMember: null | TeamMemberModal
  teamMembersListLoading: boolean
  teamMemberItemLoading: boolean
  error: boolean
} // the type of the initial state of slice.

interface SocialLinkModal {
  id: string;
  social_type: string;
  social_link: string;
}

export interface TeamMemberModal {
  id: string;
  email: string;
  name: string;
  title: string;
  image_url: string;
  description: string;
  infromation: string;
  social_links: SocialLinkModal [] | null;
  contact_no: string;
  address: string;
}

const initialState: TeamMemberInitialStateType = {
  teamMembers : null ,
  teamMember: null,
  teamMembersListLoading: false,
  teamMemberItemLoading: false,
  error: false
}


const TeamMemberSlice = createSlice({
  name: "teamMemberSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {}, // action methods

  extraReducers: (builder) => {
    builder.addCase(getTeamMembers.pending, (state) => {
      state.teamMembersListLoading = true
    })
    builder.addCase(getTeamMembers.fulfilled, (state, action) => {
      state.teamMembers = action.payload
      state.teamMembersListLoading= false
    })
    builder.addCase(getTeamMembers.rejected, (state, action) => {
      state.error = true
      state.teamMembersListLoading = false
    })

    builder.addCase(getTeamMemberById.pending, (state) => {
      state.teamMemberItemLoading = true
    })
    builder.addCase(getTeamMemberById.fulfilled, (state, action) => {
      state.teamMember = action.payload
      state.teamMemberItemLoading = false
    })
    builder.addCase(getTeamMemberById.rejected, (state, action) => {
      state.error = true
      state.teamMemberItemLoading = false
    })

  }
})

export const TeamMemberActions = {
   ...TeamMemberSlice.actions, //This includes all the action methods written above
}

const TeamMemberReducer = TeamMemberSlice.reducer //This is stored in the main store
export default TeamMemberReducer
