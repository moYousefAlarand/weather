import { CloudsModel } from "./Clouds"

test("can be created", () => {
  const instance = CloudsModel.create({})

  expect(instance).toBeTruthy()
})
