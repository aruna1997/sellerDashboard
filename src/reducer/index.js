import { IS_AUTHENTICATED } from "../constants";
const data=(state={IsAuthenticated:false},action)=>{
    switch(action.type)
    {
        case IS_AUTHENTICATED:
        const {IsAuthenticated}=action;
        return {...state,IsAuthenticated};
        default:
        return state;
    }
}
export default data;