import { MainModel } from "./Main"

test("can be created", () => {
  const instance = MainModel.create({})

  expect(instance).toBeTruthy()
})
