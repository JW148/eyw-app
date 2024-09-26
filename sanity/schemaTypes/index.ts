import { type SchemaTypeDefinition } from 'sanity'

import { postType } from './postType'
import { supportType } from './supportType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, supportType],
}
