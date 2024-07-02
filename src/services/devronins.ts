import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";


export const getDevroninsDetails = createAsyncThunk('devroninsSlice/getDevroninsDetails', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.Devronins);
        return thunkApi.fulfillWithValue(data?.[0])
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

