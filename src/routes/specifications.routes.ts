import { Router } from 'express'

import { createSpecificationController } from '../modules/cars/useCase/createSpecification'

export const specificationRoutes = Router()

specificationRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response)
})

// specificationRoutes.get('/', (request, response) => {
//   const all = specificationRepository.list()

//   return response.status(200).json(all)
// })
