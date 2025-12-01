/**
 * Authentication middleware for Express.js
 */

const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

/**
 * Middleware to verify JWT token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ 
            error: 'Access denied. No token provided.' 
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ 
            error: 'Invalid token.' 
        });
    }
}

/**
 * Middleware to check if user has admin role
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Next middleware function
 */
function requireAdmin(req, res, next) {
    if (!req.user) {
        return res.status(401).json({ 
            error: 'Authentication required.' 
        });
    }

    if (req.user.role !== 'admin') {
        return res.status(403).json({ 
            error: 'Admin access required.' 
        });
    }

    next();
}

/**
 * Generate JWT token
 * @param {Object} payload - Token payload
 * @param {string} expiresIn - Token expiration time
 * @returns {string} - JWT token
 */
function generateToken(payload, expiresIn = '24h') {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
}

module.exports = {
    verifyToken,
    requireAdmin,
    generateToken
};
