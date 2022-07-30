import { Specifications } from '../../model/specification'
import { ICreateCategoryDTO } from '../ICategoriesRepository'
import { ISpecificationRepository } from '../ISpecificationRepository'

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specifications[]

  constructor() {
    this.specifications = []
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const specification = new Specifications()

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification)
  }

  list(): Specifications[] {
    return this.specifications
  }

  findByName(name: string): Specifications {
    const specification = this.specifications.find(
      specification => specification.name === name,
    )
    return specification
  }
}
