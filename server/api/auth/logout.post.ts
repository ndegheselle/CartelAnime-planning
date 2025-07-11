export default defineEventHandler(async (event) => {
    // Clear the auth cookie
    setCookie(event, 'nuxt-auth.token', '', {
        expires: new Date(0),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
    })

    return { message: 'Logged out successfully' }
});