export const ENDPOINTS = {
    host:"http://localhost:5001",
    login:"/login",
    register:"/register",
    isAuth:"/isAuth",
    getData:"/getData",
    params:{
        method:"POST",
        mode: "cors",
        headers:{"Content-Type":"application/json"}
    }  as RequestInit
}