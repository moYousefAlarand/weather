import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const WeatherModel = types
  .model("Weather")
  .props({
    id: types.maybeNull(types.number),
    main: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    icon: types.maybeNull(types.string),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Weather extends Instance<typeof WeatherModel> {}
export interface WeatherSnapshotOut extends SnapshotOut<typeof WeatherModel> {}
export interface WeatherSnapshotIn extends SnapshotIn<typeof WeatherModel> {}
export const createWeatherDefaultModel = () => types.optional(WeatherModel, {})
