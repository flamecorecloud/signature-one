import { getDeviceInfo } from "../../device/getDeviceInfo";
import { getIpAddress } from "../../device/getIpAddress";

export const dataUsersActivityLogs = async (name, description = '-', target, status) => {

    const data = {
        "name" : name,
        "description" : description,
        "target" : target,
        "ip_address" : await getIpAddress() || "Unknown",
        "device": (await getDeviceInfo()).device || "Unknown",
        "logs_status": status,
    }

    return data;
};
