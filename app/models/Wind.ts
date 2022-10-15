import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const WindModel = types
  .model("Wind")
  .props({
    speed: types.maybeNull(types.number),
    deg: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Wind extends Instance<typeof WindModel> {}
export interface WindSnapshotOut extends SnapshotOut<typeof WindModel> {}
export interface WindSnapshotIn extends SnapshotIn<typeof WindModel> {}
export const createWindDefaultModel = () => types.optional(WindModel, {})
