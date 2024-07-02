import { createAsyncThunk } from "@reduxjs/toolkit"
import { firebaseApi } from "../api/firebase";
import { firebaseCollectionName } from "../utils/constant";


export const getProjects = createAsyncThunk('projectsSlice/getProjects', async (_, thunkApi) => {
    try {
        const data = await firebaseApi.get(firebaseCollectionName.Projects);
        return thunkApi.fulfillWithValue(data)
    } catch (err) {
        const error = err as any;
        return thunkApi.rejectWithValue(error.response?.status)
    }
})

export const getProjectById = createAsyncThunk<any,any>('projectsSlice/getProjectById', async (params, thunkApi) => {
    try {
        let data = await firebaseApi.getById({
            collectionName: firebaseCollectionName.Projects,
            docId: params?.projectId
        });
        const technologiesDetails = await firebaseApi.getManyByIds({
            collectionName: firebaseCollectionName.Technologies,
            docIds: data?.technologies
        });
        data['technologies'] = technologiesDetails
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