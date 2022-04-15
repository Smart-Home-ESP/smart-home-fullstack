import * as y from "yup";
import type Prisma from "@prisma/client";

export const deviceSchema: y.SchemaOf<Prisma.device> = y.object().shape({
    id: y.number().required(),
    brightness: y.number().required(),
    deviceName: y.string().required(),
    deviceStatus: y.string().required(),
    deviceType: y.string().required(),
    hue: y.number().required(),
    roomID: y.string().required(),
    saturation: y.number().required()
});

export const devicesSchema = y.array(deviceSchema);