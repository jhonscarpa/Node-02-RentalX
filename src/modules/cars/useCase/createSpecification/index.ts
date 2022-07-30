import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepository'
import { CreateSpecificationController } from './createSpecificationController'
import { CreateSpecificationUseCase } from './createSpecificationUseCase'

const specificationsRepository = new SpecificationRepository()

export const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationsRepository,
)

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
)
