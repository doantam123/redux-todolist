export const TodoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
        case "Add_Todo":
            return { todos: action.payload };
        case "Remove_Todo":
            return { todos: action.payload };
        default:
            return state;
    }
};
