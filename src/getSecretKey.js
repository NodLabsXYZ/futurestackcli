import dotenv from 'dotenv'
dotenv.config();

const getSecretKey = () => {
  return process.env.FUTURE_STACK_SECRET_KEY
}

export default getSecretKey;