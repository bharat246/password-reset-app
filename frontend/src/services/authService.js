import axios from "axios";

const API =
  "https://password-reset-app-ft2r.onrender.com/api/auth";

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
