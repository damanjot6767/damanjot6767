import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";


export const getClientReviews = createAsyncThunk('clientReviewSlice/getClientReviews', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.ClientReviews);
        return thunkApi.fulfillWithValue(data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

