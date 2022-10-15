import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const MainModel = types
  .model("Main")
  .props({
    temp: types.maybeNull(types.number),
    feels_like: types.maybeNull(types.number),
    temp_min: types.maybeNull(types.number),
    temp_max: types.maybeNull(types.number),
    pressure: types.maybeNull(types.number),
    humidity: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Main extends Instance<typeof MainModel> {}
export interface MainSnapshotOut extends SnapshotOut<typeof MainModel> {}
export interface MainSnapshotIn extends SnapshotIn<typeof MainModel> {}
export const createMainDefaultModel = () => types.optional(MainModel, {})
