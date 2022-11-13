export const isLogin = ({auth}) => auth.isLogin;
export const getUser = ({auth}) => auth.user;
export const getToken = ({auth}) => auth.token;
  
export const getLoadingUserStatus = ({auth}) => auth.isLoadingUser;