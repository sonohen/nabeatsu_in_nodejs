# nabeatsu_in_nodejs

## Overview

I am interested in serverless architecture so I implemented Nabeatsu (a.k.a. Fizz Buzz Problem) with Docker/NodeJS/AWS API Gateway/AWS Lambda.

## How to use this

1. Run the command in your terminal:

```
$ git clone git@github.com:sonohen/nabeatsu_in_nodejs.git
$ cd nabeatsu_in_nodejs
```

2. Put `lambda/index.js` to AWS Lambda.

3. Set up AWS API Gateway to kick the lambda function above.

4. Change the parameters below in `app/server.js` as you like:
- hostname
- x-api-key
- path

5. Copy some images you like in `app/public/images`:
- 0.jpeg 
- 1.jpeg
- 2.jpeg
- 9.jpeg
- normal.jpeg

7. Run `docker-compose up` in `nabeatsu_in_nodejs`

6. Access to `http://localhost:3000/`.

7. Type a number in the text field and see what it is happened.

