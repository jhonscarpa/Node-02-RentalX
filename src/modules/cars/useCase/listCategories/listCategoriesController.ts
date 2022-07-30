import { Request, Response } from 'express'

import { ListCategoriesUseCase } from './listCategoriesUseCase'

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.execute()

    return response.status(200).json(all)
  }
}
