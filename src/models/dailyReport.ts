export class DailyReport {
  // properties
  private title: string;
  private url: string;
  private lastUpdater: string;
  private lastUpdate: Date;

  constructor(
    title: string,
    url: string,
    lastUpdater: string,
    lastUpdate: Date
  ) {
    this.title = title;
    this.url = url;
    this.lastUpdater = lastUpdater;
    this.lastUpdate = lastUpdate;
  }
}
