const User = require("../models/User");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetToken = token;

    await user.save();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const resetLink =
      `http://localhost:3000/reset-password/${token}`;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: "Reset Password",
      html: `
      <h2>Password Reset</h2>
      <a href="${resetLink}">
      Reset Password
      </a>
      `,
    });

    res.json({
      message: "Email Sent",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.verifyToken = async (req, res) => {
  const { token } = req.params;

  const user = await User.findOne({
    resetToken: token,
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }

  res.json({
    message: "Valid Token",
  });
};

exports.resetPassword = async (req, res) => {
  const { token } = req.params;

  const { password } = req.body;

  const user = await User.findOne({
    resetToken: token,
  });

  if (!user) {
    return res.status(400).json({
      message: "Invalid Token",
    });
  }

  const salt = await bcrypt.genSalt(10);

  user.password = await bcrypt.hash(
    password,
    salt
  );

  user.resetToken = null;

  await user.save();

  res.json({
    message: "Password Updated",
  });
};