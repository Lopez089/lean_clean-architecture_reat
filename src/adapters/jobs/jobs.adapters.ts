import { job } from '../../models'

export const createAdapterJobs = (EnpointJobs: any) => {
    const formatterdJobs: job[] = EnpointJobs.data.jobs.map((job: job) => {
        return {
            ...job,
        }
    })

    return formatterdJobs
}