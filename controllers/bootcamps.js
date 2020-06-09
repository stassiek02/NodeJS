exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "show all bootcamps",
    hello: req.hello,
  });
};

exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "get bootcamp",
  });
};

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "create bootcamp",
  });
};

exports.updateBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "update bootcamp",
  });
};

exports.deleteBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "dewlete bootcamp",
  });
};
