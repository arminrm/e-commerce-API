const connectDB = require("./db/connect");
const authenticateUser = require("./authenticate/authentication");
const aws = require('aws-sdk');
const Product = require("./models/Product");
const CustomError = require('./errors/error')

const s3 = new aws.S3({
    region: process.env.S3_REGION,
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    signatureVersion: 'v4'
  });

const deleteImages = async (id) => {

    const product = await Product.findOne({_id: id});
  
    if (!product){
        throw new CustomError.NotFoundError("Product Not Found");
    }
    
    for (const image of product.image){

        await s3.deleteObject({
            Bucket: process.env.Bucket,
            Key: image.key
        }).promise();
    }

    product.image = [];
    product.save(); 
}

exports.handler = async (event) => {

    try { 

        await connectDB(process.env.MONGO_URL);

        /*const userInfo = authenticateUser(event.params.headers.authorization);*/

        await deleteImages(event.params.path.id);

        const response = {
            statusCode: 200,
            body: JSON.stringify("Success")
        };

        return response

    }
    catch(error){
        throw error;
    }
};
