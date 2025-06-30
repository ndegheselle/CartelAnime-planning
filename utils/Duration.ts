export class Duration {
  fromDate: Date;
  toDate: Date;

  constructor(fromDate: Date, toDate: Date) {
    this.fromDate = fromDate;
    this.toDate = toDate;
  }

  getTotalTime(): {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
  } {
    const diffInMs = this.toDate.getTime() - this.fromDate.getTime();
    return {
      milliseconds: diffInMs,
      seconds: diffInMs / 1000,
      minutes: diffInMs / (1000 * 60),
      hours: diffInMs / (1000 * 60 * 60),
      days: diffInMs / (1000 * 60 * 60 * 24)
    };
  }
}