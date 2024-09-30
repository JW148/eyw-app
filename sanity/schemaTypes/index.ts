import { type SchemaTypeDefinition } from 'sanity'

import { postType } from './postType'
import { supportType } from './supportType'
import {activityType} from './activityType'
import { resourceType } from './resourceType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, supportType, activityType, resourceType],
}
