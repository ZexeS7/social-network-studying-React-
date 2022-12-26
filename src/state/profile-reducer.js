const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

let initialState = {
  postsData: [
    {id:1, post:"Hello my first post"},
    {id:2, post:"Second post"},
    {id:3, post:"oh la la"}
  ],
  newText: ''
}

function profileReducer(state = initialState, action) {
  if (action.type === ADD_POST) {
    let newPost = {
      id: state.postsData.length + 1,
      post: state.newText
    }
    let stateCopy = {...state}
    stateCopy.postsData = [...state.postsData]
    stateCopy.postsData.push(newPost)
    stateCopy.newText = ''
    return stateCopy
  } else if (action.type === CHANGE_NEW_POST_TEXT) {
    let stateCopy = {...state}
    stateCopy.newText = action.text
    return stateCopy
  }
  return state
}

export default profileReducer
export function addPostActionCreator() {
  return {type: ADD_POST}
}
export function changeNewPostTextActionCreator(newPostText) {
  return {type: CHANGE_NEW_POST_TEXT, text: newPostText}
}