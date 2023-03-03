const asyncMiddleware = (asyncFunc) => {
  const func = async (req, res, next) => {
    try {
      await asyncFunc(req, res, next);
    } catch (error) {
      next(error);
    }
  };

  return func;
};

module.exports = asyncMiddleware;
