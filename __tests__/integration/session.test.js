import { User } from "../../src/app/models";

describe("Authentication", () => {
  it("should receive a JWT token when authenticated with valid credentials", async () => {
    const user = await User.create({
      name: "Evandro",
      email: "evandrobm@gmail.com",
      password_hash: "123123"
    });

    console.log(user);

    expect(user.email).toBe("evandrobm@gmail.com");
  });
});
