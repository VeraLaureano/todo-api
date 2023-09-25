import 'dotenv/config';

export class EnvVariables {
  readonly PORT: number;
  readonly MONGO_URI: string;

  constructor() {
    this.PORT = Number(process.env.PORT);
    this.MONGO_URI = String(process.env.MONGO_URI);
  }
}