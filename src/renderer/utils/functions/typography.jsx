export const capitalizeWords = async (str) => {
    return str
      .split(/[_\s]+/)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
}
