import { CitiesStoreModel } from "./CitiesStore"

test("can be created", () => {
  const instance = CitiesStoreModel.create({})

  expect(instance).toBeTruthy()
})
