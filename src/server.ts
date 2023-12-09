import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);
    app.listen(config.PORT, () => {
      console.log(`The server is running at http://localhost:${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
