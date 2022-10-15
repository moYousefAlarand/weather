import { WindModel } from "./Wind"

test("can be created", () => {
  const instance = WindModel.create({})

  expect(instance).toBeTruthy()
})
