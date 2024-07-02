import AWS, { S3 } from "aws-sdk";

/**
 * AWS configuration options.
 */
const awsConfig: AWS.S3.ClientConfiguration = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    region: process.env.AWS_REGION!,
};

/**
 * Uploads a file to an S3 bucket.
 * @param payload The file payload to upload.
 * @param bucketName The name of the S3 bucket.
 * @returns A promise resolving to the S3 upload response.
 */
export const uploadSingleFileOnS3 = async (payload: { file: { originalname: string, buffer: Buffer } }, bucketName: string): Promise<S3.ManagedUpload.SendData> => {
    try {
        const s3Bucket = new AWS.S3(awsConfig);
        const data = await s3Bucket.upload({
            Bucket: bucketName,
            Key: payload.file.originalname,
            Body: payload.file.buffer,
            ACL: "public-read",
        }).promise();

        return data;
    } catch (error) {
        console.error("Error uploading file to S3:", error);
        throw error;
    }
};
