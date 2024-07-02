import { RoutesName } from '../utils/constant'
import { getProjects, getProjectById } from '../services'
import {createSlice, isAnyOf} from '@reduxjs/toolkit'

export interface ImageModal  {
    actualHeight: number;
    actualWidth: number;
    height: number;
    image: string
    isCover: boolean;
    type: 'iphone' | 'mac'
}

interface TechnologyModal {
    id: string;
    title: string;
    description: string;
    icon: string;
    isDeleted?: number;
    createdAt?: number;
}

export interface ProjectModal {
  id: string;
  name: string;
  images: ImageModal[];
  description: string;
  technologies: TechnologyModal[];
  createdAt: number;
  isDeleted: number;
}

interface ProjectInitialStateType {
    project: null | ProjectModal;
    projects: null | ProjectModal[];
    projectListLoading: boolean;
    projectItemLoading: boolean;
    error: boolean;
  } 

const initialState: ProjectInitialStateType = {
  project: null,
  projects : null ,
  projectListLoading: false,
  projectItemLoading: false,
  error: false
}


const ProjectsSlice = createSlice({
  name: "projectsSlice", //must be unique for every slice. convention is to put the same as file name
  initialState, //the initial state of the slice
  reducers: {
    setIndividualService : (state, {payload}) => {
      state.project = payload?.data
      payload?.navigate()
    }
  }, // action methods
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.projectListLoading = true
    })
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.projects = action.payload
      state.projectListLoading = false
    })
    builder.addCase(getProjects.rejected, (state, action) => {
      state.error = true
      state.projectListLoading = false
    })

    builder.addCase(getProjectById.pending, (state) => {
      state.projectItemLoading = true
    })
    builder.addCase(getProjectById.fulfilled, (state, action) => {
      state.project = action.payload
      state.projectItemLoading = false
    })
    builder.addCase(getProjectById.rejected, (state, action) => {
      state.error = true
      state.projectItemLoading = false
    })

  }
})

export const ProjectsActions = {
   ...ProjectsSlice.actions, //This includes all the action methods written above
}

const ProjectsReducer = ProjectsSlice.reducer //This is stored in the main store
export default ProjectsReducer
