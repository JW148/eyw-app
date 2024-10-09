import { type SchemaTypeDefinition } from "sanity";

import { activityType } from "./activityType";
import { resourceType } from "./resourceType";
import { trainingType } from "./trainingType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [activityType, resourceType, trainingType],
};
