import { job } from '../../models'

export const createAdapterJobs = (EnpointJobs: any) => {
    const formatterdJobs: job[] = EnpointJobs.data.dataJobs.jobs.map((job: job) => {
        return {
            ...job,
        }
    })

    return formatterdJobs
}