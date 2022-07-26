import { Category } from '../model/category'
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository'

export class PosteGresCategoriesRepositories implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name)
    return null
  }
  list(): Category[] {
    return null
  }
  create({ name, description }: ICreateCategoryDTO) {
    console.log(name, description)
  }
}
