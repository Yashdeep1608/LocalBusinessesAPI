class ResponseHelper {
    static Success(res, data = null, message = 'Request successful') {
      return res.status(200).json({
        status: 200,
        data,
        message,
        error: null,
      });
    }
  
    static BadRequest(res, message = 'Bad Request', error = null, data = null) {
      return res.status(400).json({
        status: 400,
        data,
        message,
        error,
      });
    }
  
    static Unauthorized(res, message = 'Unauthorized', error = null, data = null) {
      return res.status(401).json({
        status: 401,
        data,
        message,
        error,
      });
    }
  
    static NotFound(res, message = 'Resource not found', error = null, data = null) {
      return res.status(404).json({
        status: 404,
        data,
        message,
        error,
      });
    }
  
    static ServerError(res, message = 'Internal Server Error', error = null, data = null) {
      return res.status(500).json({
        status: 500,
        data,
        message,
        error,
      });
    }
  }
  
  module.exports = ResponseHelper;
  