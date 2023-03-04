export function Date_yyyymmdd(date: Date): string {
  const oldDate = new Date(date);
  return (
    oldDate.getFullYear() + "-" + oldDate.getMonth() + "-" + oldDate.getDate()
  );
}
