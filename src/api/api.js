import axios from "axios"

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers:{"API-KEY": "60677cc7-b601-4b99-a9a8-a424ef0c0303"}
})

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/` + userId)
  },
  unfollow(userId) {
    return instance.delete(`follow/` + userId)
  },
  getProfile(userId) {
    console.warn('Please use profileAPI obj')
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    if(!userId){
      userId = 27342
    }
    return instance.get(`profile/` + userId)
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, {status: status})
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}