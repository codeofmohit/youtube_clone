export const timeStampFormatter = (timestampString: string): string => {
  // Create a Date object from the timestamp string in UTC
  const date = new Date(timestampString);

  // Get month name using toLocaleDateString with options for month and year
  const month = date.toLocaleDateString("en-US", { month: "short" });

  // Get day in two-digit format using toLocaleDateString with options
  const day = date.toLocaleDateString("en-US", { day: "2-digit" });

  // Get full year using getFullYear
  const year = date.getFullYear();

  // Format the date string with desired format
  return `${month} ${day}, ${year}`;
};
