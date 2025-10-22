import { getDeviceInfo } from "../../device/getDeviceInfo";
import { getIpAddress } from "../../device/getIpAddress";
import { getOS } from "../../device/getOs";
import { getUserLocation } from "../../device/getUserLocation";

export const dataUsersActivityLogin = async (name, status) => {

	const data = {
		"name" : name,
		"description" : '-',
		"ip_address" : await getIpAddress() || "Unknown",
		"device": (await getDeviceInfo()).device || "Unknown",
		"os": await getOS() || "Unknown",
		"location": await getUserLocation() || "Unknown",
		"login_status": status,
	}

	return data;
};
