import { WeatherModel } from "./Weather"

test("can be created", () => {
  const instance = WeatherModel.create({})

  expect(instance).toBeTruthy()
})
