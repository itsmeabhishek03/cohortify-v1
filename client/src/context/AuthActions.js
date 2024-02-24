export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});
export const SignupSuccess = (user) => ({
    type: "SIGNUP_SUCCESS",
    payload: user
});
export const LoginFailure = (err) => ({
    type: "LOGIN_FAILURE",
    payload: err
});
export const SignupFailure = (err) => ({
    type: "SIGUP_FAILURE",
    payload: err
});