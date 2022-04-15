import { fetcher } from "../../../utils/fetcher";
import { devicesSchema } from "../../utils/schemas";

export const getDevices = async () => {
    return await fetcher("/api/devices", {
        method: "GET",
        schema: devicesSchema,
    });
};