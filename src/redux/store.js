import { createStore } from "redux";

let initialState = {
  users: [
    { email: "uno@mail.com", name: "uno", age: 10 },
    { email: "dos@mail.com", name: "dos", age: 20 },
    { email: "tres@mail.com", name: "tres", age: 30 }
  ]
};

const TAGS = {
  GET_USERS: "GET_USERS",
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
  EDIT_USER: "EDIT_USER",
  SEARCH_USER: "SEARCH_USER"
};

let store = createStore(reducer, initialState);

function actionGetUsers() {
  return {
    type: TAGS.GET_USERS
  };
}

function actionAddUser(email, name, age) {
  return {
    type: TAGS.ADD_USER,
    user: {
      email,
      name,
      age
    }
  };
}

function actionDeleteUser(email) {
  return {
    type: TAGS.DELETE_USER,
    user: {
      email
    }
  };
}

function actionUpdateUser(email, name, age) {
  return {
    type: TAGS.EDIT_USER,
    user: {
      email,
      name,
      age
    }
  };
}

function reducer(state, action) {
  switch (action.type) {
    case TAGS.GET_USERS:
      return state;
    case TAGS.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.user]
      };

    case TAGS.DELETE_USER:
      return {
        ...state,
        users: [
          ...state.users.filter(
            (element) => element.email !== action.user.email
          )
        ]
      };

    case TAGS.EDIT_USER:
      return {
        ...state,
        users: [
          ...state.users.map((element) => {
            if (element.mail === action.user.mail) {
              element.name = action.user.name;
              element.age = action.user.age;
            }
            return element;
          })
        ]
      };

    // case TAGS.SEARCH_USER:
    //   return{
    //     ...state,
    //     users:[
    //       ...state.users.filter((element) => {
    //         if (element.mail === action.user.mail) {
    //           element.name = action.user.name;
    //           element.age = action.user.age;
    //         }
    //         return element;
    //       });
    //     ]
    //   }
    default:
      return state;
  }
}

export {
  TAGS,
  actionGetUsers,
  actionAddUser,
  actionDeleteUser,
  actionUpdateUser
};

export default store;
