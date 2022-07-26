import { v4 as uuidV4 } from 'uuid'

export class Category {
  name: string
  description: string
  id?: string
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}
