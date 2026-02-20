import jwt from "jsonwebtoken";
import React from "react"

 const secretKey = process.env.CHAVE;

export function generateToken(id) {
  const token = jwt.sign(
    { id: id },
        "gabriel123",
    { expiresIn: "15m" }
  );
  return token;
}


export function verifyToken(token){
  const verify = jwt.verify(
    token, "gabriel123"
  )
  return verify;
}