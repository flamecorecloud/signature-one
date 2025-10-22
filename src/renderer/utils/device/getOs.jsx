export const getOS = async () => {
  const userAgent = window.navigator.userAgent;

  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }
  if (/windows/i.test(userAgent)) {
    return "Windows";
  }
  if (/android/i.test(userAgent)) {
    return "Android";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }
  if (/Macintosh/i.test(userAgent)) {
    return "MacOS";
  }
  if (/Linux/i.test(userAgent)) {
    return "Linux";
  }
  return "Unknown";
};
