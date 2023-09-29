// Function to create a success response
function createSuccessResponse(data, message = "Success") {
    return {
      success: true,
      message: message,
      data: data,
    };
  }
  
  // Function to create an error response
  function createErrorResponse(message = "Server Error", errors = {}, statusCode = 500) {
    return {
      success: false,
      message: message,
      errors: errors,
      data: {},
      status: statusCode
    };
  }
  
  module.exports = {
    createSuccessResponse,
    createErrorResponse,
  };
  