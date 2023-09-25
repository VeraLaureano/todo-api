import { connect, set } from 'mongoose';

export class MongoDB {
  private url: string;
  
  constructor(url: string) {
    this.url = url;
    set('strictQuery', true);
  }

  public connect(): void {
    connect(this.url)
      .then(() => console.log('Connected to MongoDB...'))
      .catch((err) => console.log(err));
  }
}