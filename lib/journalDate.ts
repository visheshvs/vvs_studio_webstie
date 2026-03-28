import { format } from 'date-fns';

/**
 * Parse YYYY-MM-DD journal dates as local calendar dates to avoid timezone shifts.
 */
export function parseJournalDate(dateString: string): Date {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (match) {
    const year = Number(match[1]);
    const monthIndex = Number(match[2]) - 1;
    const day = Number(match[3]);
    return new Date(year, monthIndex, day);
  }

  return new Date(dateString);
}

export function formatJournalDate(dateString: string): string {
  return format(parseJournalDate(dateString), 'MMMM d, yyyy');
}

export function getJournalYear(dateString: string): number {
  return parseJournalDate(dateString).getFullYear();
}
