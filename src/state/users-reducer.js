const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
  usersData: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
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
  }
  return state
}

export function followAC(userId) {
  return {type: FOLLOW, userId}
}
export function unfollowAC(userId) {
  return {type: UNFOLLOW, userId}
}
export function setUsersAC(users) {
  return {type: SET_USERS, users}
}
export function setTotalUsersCountAC(totalUsers) {
  return {type: SET_TOTAL_USERS_COUNT, totalUsers}
}
export function setCurrentPageAC(currentPage) {
  return {type: SET_CURRENT_PAGE, currentPage}
}

export default usersReducer