let isLoggedIn:boolean = false;

 export const setIsLoggedIn = (loggedIn:boolean)=>{
    isLoggedIn=loggedIn
 }

 export const getIsLoggedIn =()=>{
    return isLoggedIn
 }