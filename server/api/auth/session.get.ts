import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'nuxt-auth.token') || 
                getHeader(event, 'authorization')?.replace('Bearer ', '');

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: 'No token provided.'
    });
  }

  if (!process.env.NUXT_AUTH_SECRET) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server configuration error.'
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