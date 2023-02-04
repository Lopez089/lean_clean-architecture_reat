import { job } from '../../models'
import { useEffect, useState } from 'react'
import { getJobs } from '../../services'
import { createAdapterJobs } from '../../adapters'

export const useGetJobs = (): job[] | [] => {
    const [jobs, setJobs] = useState<job[]>([])

    useEffect(() => {
        getJobs()
            .then(res => setJobs(createAdapterJobs(res)))
            .catch(err => console.error(err))
    }, [])

    return jobs
}