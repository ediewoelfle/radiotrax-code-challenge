export const login = () => {
  return { type: "SIGN_IN" };
};

export const newData = data => {
  return { type: "NEW_DATA", payload: data };
};
