
export interface SuccessResponse <DataType> {
    statusCode: number;
    data: DataType;
    message?: string;
}


