const auth = {
  secret: String(process.env.SECRET),
  expires: '1h',
};

module.exports = auth;