import { job } from '../../models'
import axios from 'axios'
import { JOBS_URL } from '../../constants'

export const getJobs = (): Promise<job[]> => {
    return axios.get(JOBS_URL)
}
