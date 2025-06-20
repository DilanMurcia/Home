// src/backend/domain/use-cases/register-user.mjs
import bcrypt from "bcryptjs";

/**
 * Lógica pura de registro.
 * @param {Object} deps - Dependencias necesarias (inyección).
 * @param {Object} data - Datos del usuario.
 */
export async function registerUser({ UserModel, createAccessToken }, data) {
  const { username, email, password } = data;

  const userFound = await UserModel.findOne({ email });
  if (userFound) {
    throw new Error("Email is already in use");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser = new UserModel({
    username,
    email,
    password: passwordHash,
  });

  const userSaved = await newUser.save();

  const token = await createAccessToken({ id: userSaved._id });

  return {
    user: {
      id: userSaved._id,
      username: userSaved.username,
    },
    token,
  };
}
