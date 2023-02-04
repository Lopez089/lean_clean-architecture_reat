type languages = 'HTML' | 'CSS' | 'JavaScript' | "Python"
type tools = "React" | "Sass" | 'Ruby'

export interface job {
    id: string;
    company: string
    logo: string
    new: boolean
    featured: boolean
    position: string
    role: string
    level: string
    postedAt: string
    contract: string
    location: string
    languages?: languages[]
    tools?: tools[]
}