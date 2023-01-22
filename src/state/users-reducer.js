import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false
}

function usersReducer(state = initialState, action) {
  let stateCopy = {...state}
  if (action.type === FOLLOW) {
    stateCopy.usersData = [...stateCopy.usersData]
    stateCopy.usersData.map(user => {
      if (user.id === action.userId) {
        user.followed = true
      }
    })
    return stateCopy
  } else if (action.type === UNFOLLOW) {
    stateCopy.usersData = [...stateCopy.usersData]
    stateCopy.usersData.map(user => {
      if (user.id === action.userId) {
        user.followed = false
      }
    })
    return stateCopy
  } else if (action.type === SET_USERS) {
    return {...state, usersData: [...action.users]}
  } else if (action.type === SET_TOTAL_USERS_COUNT) {
    return {...state, totalUsersCount: action.totalUsers}
  } else if (action.type === SET_CURRENT_PAGE) {
    return {...state, currentPage: action.currentPage}
  } else if (action.type === TOGGLE_IS_FETCHING) {
    return {...state, isFetching: action.isFetching}
  } else if (action.type === TOGGLE_IS_FOLLOWING_PROGRESS) {
    return {...state, followingInProgress: action.isFetching}
  }
  return state
}

export function followSuccess(userId) {
  return {type: FOLLOW, userId}
}
export function unfollowSuccess(userId) {
  return {type: UNFOLLOW, userId}
}
export function setUsers(users) {
  return {type: SET_USERS, users}
}
export function setTotalUsersCount(totalUsers) {
  return {type: SET_TOTAL_USERS_COUNT, totalUsers}
}
export function setCurrentPage(currentPage) {
  return {type: SET_CURRENT_PAGE, currentPage}
}
export function toggleIsFetching(isFetching) {
  return {type: TOGGLE_IS_FETCHING, isFetching}
}
export function toggleFollowingProgress(isFetching) {
  return {type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching}
}

export const requestUsers = (pageSize, currentPage) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true))
      usersAPI.getUsers(pageSize, currentPage).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false))
      })
  }
}
export const follow = (userId) => {
  return (dispatch) => {
    usersAPI.follow(userId)
    .then(respons => {
      if (respons.data.resultCode === 0) {
        dispatch(followSuccess(userId))
      }
    })
  }
}
export const unfollow = (userId) => {
  return (dispatch) => {
    usersAPI.unfollow(userId)
    .then(respons => {
      if (respons.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
      }
    })
  }
}

export default usersReducer