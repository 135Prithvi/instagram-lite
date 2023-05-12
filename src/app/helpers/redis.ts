import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://usw2-comic-collie-30836.upstash.io',
  token: process.env.TOKEN ||""
})
   
