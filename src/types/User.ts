import { Id } from "./Id"

export interface User {
  _id: Id
  "Job Title": string
  Time: string
  "Date Published": string
  "Job Type": string
  "Company Name": string
  Contingency: string
  "Location Full": string
  URL: string
  Seniority: string
  "Seniority slug": string
  "Functional Area": string
  "Functional Area Slug": string
  "Perks (coming soon)"?: string
}
