import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";


export const getTeamMembers = createAsyncThunk('teamMemberSlice/getTeamMembers', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.TeamMembers);
        return thunkApi.fulfillWithValue(data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getTeamMemberById = createAsyncThunk<any,any>('teamMemberSlice/getTeamMemberById', async (params, thunkApi) => {
    try {
        const data = await firebaseApi.getById({
            collectionName: firebaseCollectionName.TeamMembers,
            docId: params?.memberId
        });
        return thunkApi.fulfillWithValue(data)
    } catch (err) {
        const error = err as any;
        if(error?.message==='document not found'){
            params?.navigate()
        }
        console.log('33', error)
        return thunkApi.rejectWithValue(error.response?.status)
    }
})