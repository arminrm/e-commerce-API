# E-Commerce API

E-Commerce web-API which allows users to create listings, place orders and add reviews.

Documentation: http://3.220.174.105:8080/api-docs

## Infrastructure:

![Screenshot (810)](https://user-images.githubusercontent.com/68967290/226149406-8110c7f6-fff9-4d44-a4f3-2587235995ec.png)

- Main API runs on an AWS EC2 instance
- AWS Lambda-based microservices for uploading/deleting images using AWS S3 for storage, implemented with AWS API Gateway 
- MongoDB for database
