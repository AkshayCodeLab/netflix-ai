export const validateForm = (email, password) => {
  const validMail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!validMail) return "Invalid Email address.";
  if (!validPass) return "Invalid password.";
  return null;
};
