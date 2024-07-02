interface dataModel  {
    statusCode?: number;
    message?: string;
    data?: any
}

export interface ErrorResponse {
    status?: number;
    message?: string;
    data?: dataModel;
  }