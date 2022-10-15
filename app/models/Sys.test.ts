import { SysModel } from "./Sys"

test("can be created", () => {
  const instance = SysModel.create({})

  expect(instance).toBeTruthy()
})
