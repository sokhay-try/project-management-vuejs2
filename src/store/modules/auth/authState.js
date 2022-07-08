export const initialAuthState = () => {
  return {
    authenticated: false,
    user: {
      username: "",
      password: "",
    },
  };
};

export default {
  ...initialAuthState(),
};
