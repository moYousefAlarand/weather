import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const CoordModel = types
  .model("Coord")
  .props({
    lon: types.maybeNull(types.number),
    lat: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Coord extends Instance<typeof CoordModel> {}
export interface CoordSnapshotOut extends SnapshotOut<typeof CoordModel> {}
export interface CoordSnapshotIn extends SnapshotIn<typeof CoordModel> {}
export const createCoordDefaultModel = () => types.optional(CoordModel, {})
