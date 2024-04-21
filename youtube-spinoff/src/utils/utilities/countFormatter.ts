export function countFormatter(number: number): string {
  const suffixes: string[] = ["", "K", "M", "B", "T"]; // Add "T" for trillion if needed

  const tier: number = Math.floor(Math.log10(number) / 3); // Calculate the tier

  // Handle edge cases for numbers below 1,000
  if (tier === 0 && isNaN(number)) {
    return "0";
  } else if (tier === 0) {
    return number.toString();
  }

  // Convert the result to a number before using toFixed (optional for some approaches)
  const formattedNumber: number = number / 10 ** (tier * 3);

  // Remove the ".0" from toFixed using slice (Option 1)
  const formattedString =
    (formattedNumber.toFixed(1) || "0").slice(0, -2) + suffixes[tier];

  // Alternatively, use a regular expression to remove trailing ".0" (Option 2)
  // const formattedString = (formattedNumber.toFixed(1) || "0").replace(/\.0$/, "") + suffixes[tier];

  return formattedString;
}
