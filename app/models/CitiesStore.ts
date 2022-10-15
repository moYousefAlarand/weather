import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { navigate } from "../navigators"
import { api } from "../services/api"
import { City, CityModel } from "./City"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const CitiesStoreModel = types
  .model("CitiesStore")
  .props({
    cities: types.map(types.array(CityModel)),
  })
  .actions(withSetPropAction)
  .views((self) => ({
    allCities() {
      const cities: City[] = []
      for (let [code, allStatusOfCity] of self.cities) {
        cities.push(allStatusOfCity[0])
      }
      return cities
    },

    cityHistorical(cityId: number) {
      return self.cities.get(`${cityId}`)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    addCity(city: City) {
      const allStatusOfCity = self.cities.get(`${city.id}`) || []
      self.cities.set(`${city.id}`, [...allStatusOfCity, city])
    },
  }))
  .actions((self) => ({
    async searchCity(city: string) {
      const response = await api.getCity(city)
      console.tron.log("🚀 ~ file: CitiesStore.ts ~ line 33 ~ searchCity ~ response", response)
      if (response.kind === "ok") {
        try {
          self.addCity(response?.city)
          navigate("Details", { id: response?.city.id })
          return true
        } catch (err) {
          return false
          console.log("🚀 ~ file: CitiesStore.ts ~ line 17 ~ searchCity ~ response", err)
        }
        // store.setProp("episodes", response.episodes)
      } else {
        console.tron.error(`Error fetching episodes: ${JSON.stringify(response)}`, [])
      }
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface CitiesStore extends Instance<typeof CitiesStoreModel> {}
export interface CitiesStoreSnapshotOut extends SnapshotOut<typeof CitiesStoreModel> {}
export interface CitiesStoreSnapshotIn extends SnapshotIn<typeof CitiesStoreModel> {}
export const createCitiesStoreDefaultModel = () => types.optional(CitiesStoreModel, {})
