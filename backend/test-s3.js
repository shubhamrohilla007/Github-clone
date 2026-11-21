
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
    region: "ap-southeast-2"
});

const BUCKET = "amzn-s3-apna-bucket";

async function testS3() {
    try {
        const result = await s3.headBucket({
            Bucket: BUCKET
        }).promise();

        console.log("S3 Connected Successfully!");
        console.log("Bucket:", BUCKET);
        console.log("Response:", result);

    } catch (error) {
        console.log("S3 Connection Failed!");
        console.log("Error Code:", error.code);
        console.log("Status:", error.statusCode);
        console.log("Message:", error.message);
        console.log("Region:", error.region);
        console.log(
            "Response Headers:",
            error.$response?.httpResponse?.headers
        );
    }
}

testS3();
