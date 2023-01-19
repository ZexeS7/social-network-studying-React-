import { profileAPI } from "../api/api";
import { toggleIsFetching } from "./users-reducer";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS' 

let initialState = {
  postsData: [
    {id:1, post:"Hello my first post"},
    {id:2, post:"Second post"},
    {id:3, post:"oh la la"}
  ],
  user: null,
  status: ''
}

function profileReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    let newPost = {
      id: state.postsData.length + 1,
      post: action.newPostText
    }
    let stateCopy = {...state}
    stateCopy.postsData = [...state.postsData]
    stateCopy.postsData.push(newPost)
    return stateCopy
  } else if (action.type === SET_USER_PROFILE) {
    let stateCopy = {...state}
    stateCopy.user = action.user
    return stateCopy
  } else if (action.type === SET_STATUS) {
    let stateCopy = {...state}
    stateCopy.status = action.status
    return stateCopy
  }
  return state
}

export default profileReducer
export function addPost(newPostText) {
  return {type: ADD_POST, newPostText}
}
export function setUserProfile(user) {
  return {type: SET_USER_PROFILE, user}
}
export function setStatus(status) {
  return {type: SET_STATUS, status}
}
export const getUserProfile = (userId) => (dispatch) => {
  dispatch(toggleIsFetching(true))
  profileAPI.getProfile(userId)
    .then(respons => {
      dispatch(setUserProfile(respons.data))
      dispatch(toggleIsFetching(false))
    })
}
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(respons => {
      dispatch(setStatus(respons.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(respons => {
      if(respons.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}