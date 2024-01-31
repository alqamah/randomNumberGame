export const users = [
  { id: 1, email: "alqama.hasnain@gmail.com", password: "pass" },
];

export const handleSingUpModel = (user) => {
  let id = users.length + 1;
  users.push({ ...user, id: id });
};
export const handleLoginModel = (user) => {
  let status = false;
  users.forEach((userData) => {
    if (user.email === userData.email && user.password === userData.password)
      status = true;
  });
  return status;
};
