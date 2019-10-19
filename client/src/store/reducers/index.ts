import { IState, IAction } from "../../typescript/interfaces";

export const reducer = (state: IState, action: IAction): IState => {
    const { type, payload } = action;
    console.log(state, type, payload);
    switch (type) {
        case "ADD_ITEM":
            return state;
        default:
            return state;
    }
};

export default reducer;
