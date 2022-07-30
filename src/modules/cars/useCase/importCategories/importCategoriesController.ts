import { Request, Response } from 'express'

export class ImportCategoryController {
  handle(request: Request, response: Response): Response {
    const { file } = request
    return response.send()
  }
}
