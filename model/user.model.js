module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      password: String,
      age: Number,
      mobile: Number,
      address: String,
      gender: String
    }
  );

  const User = mongoose.model("user", schema);
  return User;
};
