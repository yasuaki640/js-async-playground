# News API App
This is A repo for App that searches for news according to user specified conditions.  
Also integrated by React front server and Node.js + express backend(API) server.

## Enviroments
- Node.js v14.15.1  
- Yarn 1.22.4

## Usage
### Linux
`git clone git@github.com:yasuaki640/news-api-app.git`  
`bash start-app.sh`  
note : operability confirmed in WSL2 ubuntu 18.04  

### Windows
Copy two `.env.example` files and rename them to `.env`  
Enter your news api access key to `NEWS_API_ACCESS_KEY=` in a file `backend/.env`  
`cd frontend`  
`yarn install`  
`cd ../backend`  
`yarn install`  
`yarn run start`  

