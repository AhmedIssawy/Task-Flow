const sendResponse = (
  res,
  { success = true, statusCode = 200, message = "", data = null, error = null }
) => {
  const response = {
    success,
    message,
  };

  if (success && data !== null) response.data = data;
  if (!success && error !== null) response.error = error;

  return res.status(statusCode).json(response);
};
export default sendResponse;
