import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ListCategoriesController } from './listCategoriesController'
import { ListCategoriesUseCase } from './listCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstace()
export const listCategoriesUseCase = new ListCategoriesUseCase(
  categoriesRepository,
)
export const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
)
