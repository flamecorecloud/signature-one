export const formatEventTime = async (start, end, locale = "en-US") => {
    const dateOptions = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    const timeOptions = {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };

    const startDate = new Date(start);
    const endDate = new Date(end);

    const datePart = new Intl.DateTimeFormat(locale, dateOptions).format(startDate);
    const startTime = new Intl.DateTimeFormat(locale, timeOptions).format(startDate);
    const endTime = new Intl.DateTimeFormat(locale, timeOptions).format(endDate);

    return `${datePart}⋅${startTime} – ${endTime}`;
}
