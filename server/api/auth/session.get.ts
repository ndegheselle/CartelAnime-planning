// server/api/auth/session.get.ts
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'nuxt-auth.token') || 
                getHeader(event, 'authorization')?.replace('Bearer ', '');

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No token provided'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.NUXT_AUTH_SECRET) as any
    
    return {
      user: {
        id: decoded.id,
        email: decoded.email,
        name: decoded.name,
        role: decoded.role
      }
    };
  } catch (error) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Invalid token'
    });
  }
})