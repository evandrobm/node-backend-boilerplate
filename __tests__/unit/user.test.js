import { User } from "../../src/app/models";
import bcrypt from "bcryptjs";
import truncate from "../utils/truncate";

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await User.create({
      name: "Evandro",
      email: "evandrobm@gmail.com",
      password: "123456"
    });

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
