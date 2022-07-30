import { Specifications } from '../model/specification'

export interface ICreateSpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationRepository {
  create({ description, name }: ICreateSpecificationDTO): void
  findByName(name: string): Specifications
  list(): Specifications[]
}
