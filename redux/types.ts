import { type AsyncThunk } from '@reduxjs/toolkit'
import { type store } from './store'

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>

export type PendingAction = ReturnType<GenericAsyncThunk['pending']>
export type RejectedAction = ReturnType<GenericAsyncThunk['rejected']>
export type FulfilledAction = ReturnType<GenericAsyncThunk['fulfilled']>

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
