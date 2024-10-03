import { DailyReport } from "./dailyReport";

interface IDailyReportTool {
  getDailyReport(id: string): DailyReport;
  getAllDailyReports(): DailyReport[];
}

export class DailyReportTool implements IDailyReportTool {
  private id: string;
  private password: string;
  private token: string;
  private dailyReports: DailyReport[] = [];

  constructor(id: string, password: string) {
    this.id = id;
    this.password = password;
    try {
      this.token = this.login(id, password) ? "token" : "";
    } catch (e) {
      console.error(e);
      throw new Error("Login failed");
    }
  }

  private login(id: string, password: string): string {
    // todo: implement login logic
    return "token";
  }

  getDailyReport(id: string): DailyReport {
    // todo: implement getDailyReport logic
    return new DailyReport("title", "url", "lastUpdater", new Date());
  }

  getAllDailyReports(): DailyReport[] {
    // todo: implement getAllDailyReports logic
    return this.dailyReports;
  }
}
