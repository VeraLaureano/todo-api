import express, { Application } from 'express';
import { notFound } from './middlewares/notFound';

class App {
  readonly app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.routes();
    this.errorHandler();
  } 

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static('public'));
  }

  private routes(): void {
    this.app.get('/', (req, res) => {
      res.send('TODOs API');
    });
  }

  private errorHandler(): void {
    this.app.use(notFound);
  }
}

export default App;