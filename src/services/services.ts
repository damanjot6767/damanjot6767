import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";


export const getServices = createAsyncThunk('servicesSlice/getServices', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.Services);
        return thunkApi.fulfillWithValue(data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getServiceById = createAsyncThunk<any,any>('servicesSlice/getServiceById', async (params, thunkApi) => {
    try {
        const data = await firebaseApi.getById({
            collectionName: firebaseCollectionName.Services,
            docId: params?.serviceId
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