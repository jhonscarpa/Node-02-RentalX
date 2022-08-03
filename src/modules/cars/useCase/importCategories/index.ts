import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'
import { ImportCategoryController } from './importCategoriesController'
import { ImportCategoryUseCase } from './importCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstace()

export const importCategoryUseCase = new ImportCategoryUseCase(
  categoriesRepository,
)

export const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
)
