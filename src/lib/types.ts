import type { LucideIcon } from "lucide-react"

// Base service interface
export interface BaseService {
  icon: LucideIcon
  title: string
  description: string
}

// Main service with full details
export interface MainService extends BaseService {
  category: string
  features: string[]
  image?: string
}

// Geological service with additional properties
export interface GeologicalService extends BaseService {
  category: string
  features: string[]
  scales?: string[]
  capacity?: string
  depths?: string
  image?: string
}

// Additional service (simpler structure)
export interface AdditionalService extends BaseService {}

// Specialized service for the specialized services section
export interface SpecializedService extends BaseService {
  scales?: string[]
  capacity?: string
  services?: string[]
}

// Process step interface
export interface ProcessStep {
  step: string
  title: string
  description: string
}

// Combined service type for the main services array
export type Service = MainService | GeologicalService

// Props for the Services component
export interface ServicesProps {
  className?: string
}

// Service category enum
export enum ServiceCategory {
  TOPOGRAPHY = "Topografiya",
  GEODESY = "Geodeziya",
  CADASTRE = "Kadastr",
  GEOLOGY = "Geologiya",
  LABORATORY = "Laboratoriya",
  ENGINEERING = "Muhandislik",
}

// Service scales enum
export enum ServiceScale {
  SCALE_500K = "1:500 000",
  SCALE_200K = "1:200 000",
  SCALE_100K = "1:100 000",
  SCALE_50K = "1:50 000",
  SCALE_25K = "1:25 000",
  SCALE_10K = "1:10 000",
}

// Laboratory capacity type
export type LabCapacity = "1500-15000 namuna/yil"

// Depth range type
export type DepthRange = "10-100 metr chuqurlik"

export interface Employee {
  id: string
  fullName: string
  position: string
  startDate: string
  birthDate?: string
  photo?: string
  email?: string
  phone?: string
  diplomaLink?: string
  specialization?: string[]
  experience?: string
}

export interface EmployeesByDepartment {
  management: Employee[]
  specialists: Employee[]
  assistants: Employee[]
  bugalter: Employee[]
}

export interface CompanyTeamProps {
  className?: string
}
