import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CloudsModel = types
  .model("Clouds")
  .props({
    all: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Clouds extends Instance<typeof CloudsModel> {}
export interface CloudsSnapshotOut extends SnapshotOut<typeof CloudsModel> {}
export interface CloudsSnapshotIn extends SnapshotIn<typeof CloudsModel> {}
export const createCloudsDefaultModel = () => types.optional(CloudsModel, {})
