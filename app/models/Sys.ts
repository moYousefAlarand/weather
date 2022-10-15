import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const SysModel = types
  .model("Sys")
  .props({
    type: types.maybeNull(types.number),
    id: types.maybeNull(types.number),
    country: types.maybeNull(types.string),
    sunrise: types.maybeNull(types.number),
    sunset: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Sys extends Instance<typeof SysModel> {}
export interface SysSnapshotOut extends SnapshotOut<typeof SysModel> {}
export interface SysSnapshotIn extends SnapshotIn<typeof SysModel> {}
export const createSysDefaultModel = () => types.optional(SysModel, {})
