import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { CloudsModel } from "./Clouds"
import { CoordModel } from "./Coord"
import { MainModel } from "./Main"
import { SysModel } from "./Sys"
import { WeatherModel } from "./Weather"
import { WindModel } from "./Wind"

/**
 * Model description here for TypeScript hints.
 */
export const CityModel = types
  .model("City")
  .props({
    coord: types.optional(CoordModel, {}),
    weather: types.optional(types.array(WeatherModel), []),
    base: types.maybeNull(types.string),
    main: types.optional(MainModel, {}),
    visibility: types.maybeNull(types.number),
    wind: types.optional(WindModel, {}),
    clouds: types.optional(CloudsModel, {}),
    dt: types.maybeNull(types.number),
    sys: types.optional(SysModel, {}),
    timezone: types.maybeNull(types.number),
    id: types.maybeNull(types.number),
    name: types.maybeNull(types.string),
    cod: types.maybeNull(types.number),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface City extends Instance<typeof CityModel> {}
export interface CitySnapshotOut extends SnapshotOut<typeof CityModel> {}
export interface CitySnapshotIn extends SnapshotIn<typeof CityModel> {}
export const createCityDefaultModel = () => types.optional(CityModel, {})
