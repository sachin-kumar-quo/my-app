export function daysAgoFromDate(date: Date) {
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - date.getTime());
  const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // Convert milliseconds to years
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // Convert milliseconds to months
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

  // Return result based on the largest time unit
  if (diffYears > 0) {
    return diffYears + (diffYears === 1 ? " year ago" : " years ago");
  } else if (diffMonths > 0) {
    return diffMonths + (diffMonths === 1 ? " month ago" : " months ago");
  } else {
    return diffDays + (diffDays === 1 ? " day ago" : " days ago");
  }
}
