const mongoose = require("mongoose");
require("dotenv").config();
const { describe, expect, test, beforeEach, afterEach } = require("@jest/globals");

const { connectTocontactsMongoDB } = require("../../../services");
const register = require("../register");

describe("test for 'register' function", function () {
  const testUserCred = {
    email: "test05@gmail.com",
    password: "12345qwerty",
  };
  let UserModel = null;
  const req = { body: testUserCred };
  const res = {
    statusValue: null,
    data: null,
    status: function (value) {
      this.statusValue = value;
      console.log(this);
      return this;
    },
    json: function (data) {
      this.data = data;
    },
  };

  beforeEach(async () => {
    await connectTocontactsMongoDB();
    UserModel = require("../../../models/users.js");
  }, 10000);

  afterEach(async () => {
    res.data = null;
    res.statusValue = null;
    await UserModel.findOneAndRemove({ email: testUserCred.email });
    await mongoose.connection.close();
  }, 10000);

  test("Status is 201", async () => {
    await register(req, res, () => {});
    expect(res.statusValue).toBe(201);
  }, 10000);

  test("Response has token with null", async () => {
    await register(req, res, () => {});
    expect(res.data.user.token).toBeNull();
  }, 10000);

  test('Response has "user" object', async () => {
    await register(req, res, () => {});
    expect(res.data.user).toBeTruthy();
  }, 10000);

  test('Response has "user" object with "email" field', async () => {
    await register(req, res, () => {});
    expect(res.data.user).toHaveProperty("email");
  }, 10000);

  test('Response has "user" object with "subscription" field', async () => {
    await register(req, res, () => {});
    expect(res.data.user).toHaveProperty("subscription");
  }, 10000);
});
