import api from './index.js'

export const createUser = async (username,country,spotify_id,profile_picture_sm,profile_picture_bg) => {

    await api.post("user/addUser", {
    username: username,
    country: country,
    spotify_id: spotify_id,
    profile_picture_sm: profile_picture_sm,
    profile_picture_bg: profile_picture_bg,
})    
}
export const getCurrentUser = async (spotify_id) => {
    const {data} = await api.get(`user/${spotify_id}`)
    return data 
}