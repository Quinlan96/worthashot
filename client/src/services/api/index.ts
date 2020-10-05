import ApiError from '../../utils/ApiError'
import { API_BASE } from '../../constants'

interface FetchOptions extends RequestInit {
    query?: any
}

const defaultOptions: RequestInit = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const getUrl = (endpoint: string) => {
    return API_BASE + '/' + endpoint.replace(/^\//, '')
}

const request = (url: string, options: RequestInit): Promise<any> => {
    const onSuccess = async (resp: Response) => {
        if(!resp.ok) {
            const err: any = await resp.json()

            throw new ApiError(err.status, err.message)
        }

        return resp.json()
    }

    const onError = async (error: any) => {
        console.log(error)
        if(error) {
            if(error.response) {
                console.log(error.response)
            } else {
                console.log('Error Message: ', error.message)
            }
        }
    }

    return fetch(url, options)
        .then(onSuccess)
        .catch(onError)
}

const get = (endpoint: string, options?: FetchOptions): Promise<any> => {
    const requestOptions: FetchOptions = {
        ...defaultOptions,
        ...options
    }

    let url: string = getUrl(endpoint)

    return request(url, requestOptions)
}

export {
    get
}