import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (userPayload) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const expiresIn = process.env.JWT_EXPIRES_IN || '1h';

  const options = { expiresIn };

  const token = jwt.sign(userPayload, secretKey, options);

  return token;
};

export const isAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer')) {
    res.status(401).json({ message: 'no token provided' });
  }

  const token = authHeader.slice(6, authHeader.length);

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decode) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }
      req.user = decode;
      next();
    });
  }
};
