// stateStore.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { ClientReviewReducer, IncDecReducer, ServicesReducer, TeamMemberReducer, DevroninsReducer, ProjectsReducer } from "./reducers";


const store = configureStore({
  reducer: {
    IncDec: IncDecReducer,
    ClientReview: ClientReviewReducer,
    Services: ServicesReducer,
    TeamMember: TeamMemberReducer,
    Devronins: DevroninsReducer,
    Projects: ProjectsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

//Writing these here to prevent defining the types in every file
export const useAppDispatch = () => useDispatch<AppDispatch>() //This is used to perform action
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector 
// Used to get the data from the store in the component

export default store
