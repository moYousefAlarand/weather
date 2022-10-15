/**
 * This Api class lets you define an API endpoint and methods to request
 * data and process it.
 *
 * See the [Backend API Integration](https://github.com/infinitered/ignite/blob/master/docs/Backend-API-Integration.md)
 * documentation for more details.
 */
import {
  ApiResponse, // @demo remove-current-line
  ApisauceInstance,
  create,
} from "apisauce"
import Config from "../../config"
import { GeneralApiProblem, getGeneralApiProblem } from "./apiProblem" // @demo remove-current-line
import type { ApiConfig } from "./api.types"
import { City } from "../../models/City"

/**
 * Configuring the apisauce instance.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  url: "https://api.openweathermap.org",
  timeout: 10000,
  appid: "f5cb0b965ea1564c50c6f1b74534d823",
}

/**
 * Manages all requests to the API. You can use this class to build out
 * various requests that you need to call from your backend API.
 */
export class Api {
  apisauce: ApisauceInstance
  config: ApiConfig

  /**
   * Set up our API instance. Keep this lightweight!
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  // @demo remove-block-start
  /**
   * Gets a list of recent React Native Radio episodes.
   */
  async getCity(cityText: string): Promise<{ kind: "ok"; city: City } | GeneralApiProblem> {
    // make the api call
    const response: ApiResponse<any> = await this.apisauce.get(`data/2.5/weather`, {
      q: cityText,
      appid: "f5cb0b965ea1564c50c6f1b74534d823",
    })

    // the typical ways to die when calling an api
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return problem
    }

    console.tron.log("🚀 ~ file: api.ts ~ line 63 ~ Api ~ response", response)

    // transform the data into the format we are expecting
    try {
      const city: City = response?.data
      return { kind: "ok", city }
    } catch (e) {
      if (__DEV__) {
        console.tron.error(`Bad data: ${e.message}\n${response.data}`, e.stack)
      }
      return { kind: "bad-data" }
    }
  }
}

// Singleton instance of the API for convenience
export const api = new Api()
