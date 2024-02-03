export const validateForm = (name, value) => {
  if (name === "name") {
    if (value === "") return "Enter Name";
    return "";
  }

  if (name === "email") {
    if (value === "") return "Enter Email";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    if (isValid) return "";
    if (!isValid) return "Invalid Email (Ex: test@example.com)";
  }

  if (name === "password") {
    if (value === "") return "Enter Password";
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isValid = passwordRegex.test(value);
    if (isValid) return "";
    if (!isValid) return "Invalid Password (Ex: Test@1234)";
  }
};
