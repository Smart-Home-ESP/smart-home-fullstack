import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const prisma = new PrismaClient();

    const devices = await prisma.device.findMany();

    if (devices.length) {
        res.status(200).json(devices);
        res.end();
    } else {
        res.status(404);
        res.end();
    }
};