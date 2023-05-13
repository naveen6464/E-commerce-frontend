import axios from "axios"
import {
    clearError,
    loadUserFali,
    loadUserRequest,
    loadUserSuccess,
    loginFail,
    loginRequest, 
    loginSuccess, 
    registerFail, 
    registerRequest, 
    registerSuccess
    } from "../slices/authSlice"

export const login=(email,password)=>async(dispatch)=>{
    try {
       dispatch(loginRequest())
      const {data}= await axios.post(`/api/v1/login`,{email,password}) 
       dispatch(loginSuccess(data))
    } catch (error) {
       dispatch(loginFail(error.response.data.message)) 
    } 
}   

export const clearAuthError=dispatch=>{
   dispatch(clearError())

}

export const register=(userData)=>async(dispatch) =>{
   try {
      dispatch(registerRequest())
      const config={
         header:{
            'Content-Type':'multipart/form-data'
         }
      }
      const {data}=await axios.post(`/api/v1/register`,userData,config)
      dispatch(registerSuccess(data))
   } catch (error) {
      dispatch(registerFail(error.response.data.message))
   }
}



export const loadUser=async(dispatch)=>{
   
   try {
      dispatch(loadUserRequest())
      const{data}=await axios.get(`/api/v1/register`)
      dispatch(loadUserSuccess(data))
   } catch (error) {
      dispatch(loadUserFali(error.response.data.message))
   }
}