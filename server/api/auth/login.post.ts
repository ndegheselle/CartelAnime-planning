import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock user database - replace with your actual database
const users = [
    {
        id: '1',
        login: 'test',
        password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password"
        name: 'John Doe',
        role: 'user'
    }
];

export default defineEventHandler(async (event) => {
    const { login, password } = await readBody(event)

    if (!login || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Login and password are required.'
        })
    }

    // Find user by email
    const user = users.find(u => u.login === login)

    if (!user) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials.'
        })
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials.'
        })
    }

    // Generate JWT token
    const token = jwt.sign(
        {
            id: user.id,
            email: user.login,
            name: user.name,
            role: user.role
        },
        process.env.AUTH_SECRET || 'your-secret-key',
        { expiresIn: '7d' }
    )

    return {
        token: {
            accessToken: token
        },
        user: {
            id: user.id,
            email: user.login,
            name: user.name,
            role: user.role
        }
    }
})
