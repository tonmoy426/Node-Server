import dotenv from 'dotenv';
import path from 'path';
import { env } from 'process';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });



const config = {
    env: process.env.NODE_ENV ? Number(process.env.NODE_ENV) : 5000,
    port: process.env.PORT
}


export default config;