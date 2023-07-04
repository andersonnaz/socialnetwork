import express from 'express';
import router from '@shared/http/routes';

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log('app running at port 3000!'));
