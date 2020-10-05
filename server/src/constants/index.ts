import BASE_DIR from 'app-root-path'

interface Constants {
    JWT_SECRET: string
    API_BASE: string
    DB_HOST: string
    DB_USERNAME: string
    DB_PASSWORD: string
    DB_DATABASE: string
    STORAGE_DIR: string
    TRACK_BARS: number
}

const constants: Constants = {
    JWT_SECRET: process.env.JWT_SECRET,
    API_BASE: process.env.API_BASE,
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: process.env.DB_DATABASE,
    STORAGE_DIR: BASE_DIR + '/storage/tracks',
    TRACK_BARS: parseInt(process.env.TRACK_BARS)
}

export default constants