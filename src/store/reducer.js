export const types = {
    ADD_TASK: "ADD_TASK",
    POPULATE_TASK_FROM_LOCALSTORAGE: "POPULATE_TASK_FROM_LOCALSTORAGE",
    DELETE_TASK: "DELETE_TASK",
    UPDATE_TASK: "UPDATE_TASK",
    OPEN_EDIT_MODEL: "OPEN_EDIT_MODEL",
    CLOSE_EDIT_MODEL: "CLOSE_EDIT_MODEL",
    OPEN_CREATE_MODEL: "OPEN_CREATE_MODEL",
    CLOSE_CREATE_MODEL: "CLOSE_CREATE_MODEL",
};

export const initialState = {
    taskList: [],
    isCreateModelOpen: false,
    isEditModelOpen: false,
    currentEditIndex: 0,
};

/*
    React intentionally calls your reducer twice to make any unexpected side effects more apparent. 
    Since your reducer is pure, calling it twice doesn't affect the logic of your application. 
So you shouldn't worry about this. In production, it will only be called once.
 */

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.POPULATE_TASK_FROM_LOCALSTORAGE: {
            try {
                let arr = localStorage.getItem("taskList");
                let obj = JSON.parse(arr);
                return {
                    ...state,
                    taskList: obj || [],
                };
            } catch (error) {
                return {
                    ...state,
                    taskList: [],
                };
            }
        }
        case types.ADD_TASK: {
            const tempList = state?.taskList;
            tempList.push(payload?.task);
            localStorage.setItem("taskList", JSON.stringify(tempList));
            return {
                ...state,
                taskList: [...tempList],
                isCreateModelOpen: false,
            };
        }
        case types.UPDATE_TASK: {
            const tempList = state?.taskList;
            debugger;
            tempList[payload?.index] = payload?.task;
            localStorage.setItem("taskList", JSON.stringify(tempList));
            return {
                ...state,
                taskList: [...tempList],
                isEditModelOpen: false,
            };
        }
        case types.DELETE_TASK: {
            let tempList = state?.taskList;
            tempList.splice(payload?.index, 1);
            localStorage.setItem("taskList", JSON.stringify(tempList));
            return { ...state, taskList: [...tempList] };
        }
        case types.OPEN_CREATE_MODEL:
            return { ...state, isCreateModelOpen: true };
        case types.CLOSE_CREATE_MODEL:
            return { ...state, isCreateModelOpen: false };
        case types.OPEN_EDIT_MODEL:
            debugger;
            return {
                ...state,
                isEditModelOpen: true,
                currentEditIndex: payload?.currentEditIndex || 0,
            };
        case types.CLOSE_EDIT_MODEL:
            return { ...state, isEditModelOpen: false };

        default:
            return state;
    }
};
