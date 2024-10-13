import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://pezqrjqfqhsstjnudvby.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlenFyanFmcWhzc3RqbnVkdmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTg4ODEsImV4cCI6MjA0NDM5NDg4MX0.Dyew8xsSCCP0rqRha3i-6PF-PJij0zHULrye0zLP3uk",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlenFyanFmcWhzc3RqbnVkdmJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg4MTg4ODEsImV4cCI6MjA0NDM5NDg4MX0.Dyew8xsSCCP0rqRha3i-6PF-PJij0zHULrye0zLP3uk"
    }
})

 
