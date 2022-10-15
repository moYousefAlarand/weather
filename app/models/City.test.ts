import { CityModel } from "./City"

test("can be created", () => {
  const instance = CityModel.create({})

  expect(instance).toBeTruthy()
})
