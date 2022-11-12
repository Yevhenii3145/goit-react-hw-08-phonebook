import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

const setToken = (token) => {
    if(token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`;
    }
    instance.defaults.headers.common.authorization = "";
}

export const signup = async (signupData) => {
    const {data} = await instance.post("/users/signup", signupData);
    instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    return data;
};

export const login = async(loginData) => {
    const {data} = await instance.post("/users/login", loginData)
    instance.defaults.headers.common.authorization = `Bearer ${data.token}`;
    console.log("SDFGSFGS",loginData);
    console.log("1122223", data);
    return data;
}

export const logout = async() => {
    const {data} = await instance.post("/users/logout");
    return data;
}

export const getCurrentUser = async (token) => {
    try{
        setToken(token);
        const {data} = await instance.get("/users/current");
        console.log("asdf666777",data)
        return data;
    } catch (error) {
        setToken();
        throw error;
    }
}

export default instance;