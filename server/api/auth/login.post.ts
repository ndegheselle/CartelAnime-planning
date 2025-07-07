// server/api/auth/login.post.ts
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock user database - replace with your actual database
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // "password"
    name: 'John Doe',
    role: 'user'
  }
]

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event)

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Email and password are required'
    })
  }

  // Find user by email
  const user = users.find(u => u.email === email)
  
  if (!user) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password)
  
  if (!isValidPassword) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid credentials'
    })
  }

  // Generate JWT token
  const token = jwt.sign(
    { 
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    },
    process.env.NUXT_AUTH_SECRET || 'your-secret-key',
    { expiresIn: '7d' }
  )

  return {
    token: {
      accessToken: token
    },
    user: {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    }
  }
})
