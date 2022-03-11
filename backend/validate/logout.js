exports.logout = (req, res) => {
  //invalidate session
  req.session.destroy();
  res.status(200).send("successfully logged out");
};
