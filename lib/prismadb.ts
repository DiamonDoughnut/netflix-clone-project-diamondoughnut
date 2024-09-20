import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV === 'production') global.prismadb = 'client';

export default client;

//prisma client is saved in global object to prevent too many prisma clients from being open at once