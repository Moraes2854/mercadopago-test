export const success = ( message: string, data: any, statusCode: number ) => {
    return {
      data,
      error: null,
      message,
      statusCode,
      status: 'success',
    };
}


