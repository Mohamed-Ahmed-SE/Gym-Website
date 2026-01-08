import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwt.js';

export const generateToken = (id) => {
    return jwt.sign({ id }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn,
    });
};

export const generateRefreshToken = (id) => {
    return jwt.sign({ id }, jwtConfig.refreshSecret, {
        expiresIn: jwtConfig.refreshExpiresIn,
    });
};
