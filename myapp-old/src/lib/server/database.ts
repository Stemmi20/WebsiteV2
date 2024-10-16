import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
	try {
		const result = await next(params);
		return result;
	} catch (error) {
		if (error instanceof Prisma.PrismaClientKnownRequestError) return null;
		throw error;
	}
});

export default prisma;

process.on('exit', async () => {
	await prisma.$disconnect();
});
