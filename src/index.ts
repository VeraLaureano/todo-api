import { Server, createServer } from 'http';
import App from './app';
import { EnvVariables } from './config/EnvVariables';
import { Application } from 'express';
import { MongoDB } from './config/MongoDB';
const myApp = new App();
const env = new EnvVariables();
const mongoDB = new MongoDB(env.MONGO_URI);

class TodosAPI {
  private server: Server;
  private db: MongoDB;
  private PORT: number;

  constructor(app: Application, database: MongoDB, port: number) {
    this.server = createServer(app);
    this.db = database;
    this.PORT = port;
  }

  public async start(): Promise<void> {
    try {
      await this.db.connect();

      this.server.listen(env.PORT, (): void => {
        console.log(`Server running on port ${this.PORT}...`);
        console.log(`http://localhost:${this.PORT}/`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const api = new TodosAPI(myApp.app, mongoDB, env.PORT);
api.start();