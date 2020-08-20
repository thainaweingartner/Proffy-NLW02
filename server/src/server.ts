import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  console.log();
    return response.json();
}); 

app.listen(3333); //localhost:3333