import { ISpecificationRepository } from '../../repositories/ISpecificationRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlredyExists =
      this.specificationsRepository.findByName(name)

    if (specificationAlredyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationsRepository.create({ name, description })
  }
}
