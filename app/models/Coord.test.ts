import { CoordModel } from "./Coord"

test("can be created", () => {
  const instance = CoordModel.create({})

  expect(instance).toBeTruthy()
})
