import api from "../axios";

const useUsersApi = {
    searchProfile: async (date="Mirqodirov2001") => api.get(`/users/${date}`, { cache: 'force-cache' }),
    followers: async (date="Mirqodirov2001") => api.get(`/users/${date}/followers`),
    following: async (date="Mirqodirov2001") => api.get(`/users/${date}/following`),
    followers: async (date="Mirqodirov2001") => api.get(`/users/${date}/followers`),
    stars: async (date="Mirqodirov2001") => api.get(`/users/${date}/starred`),
}

export default useUsersApi;