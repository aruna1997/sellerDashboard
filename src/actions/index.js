import { IS_AUTHENTICATED } from "../constants.js";
export function setAuthentication(IsAuthenticated)
{
    const action={
        type:IS_AUTHENTICATED,
        IsAuthenticated
    }
    return action;

}