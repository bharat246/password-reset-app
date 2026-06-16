import axios from "axios";

const API =
  "http://localhost:5000/api/auth";

export const forgotPassword = (email) =>
  axios.post(`${API}/forgot-password`, {
    email,
  });

export const resetPassword = (
  token,
  password
) =>
  axios.post(
    `${API}/reset-password/${token}`,
    {
      password,
    }
  );