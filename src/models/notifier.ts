interface INotifier {
  notify(message: string): boolean;
}

export class WebhookNotifier implements INotifier {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  notify(message: string): boolean {
    const payload = {
      text: message,
    };

    const options: GoogleAppsScript.URL_Fetch.URLFetchRequestOptions = {
      method: "post",
      contentType: "application/json",
      payload: JSON.stringify(payload),
    };

    try {
      const response = UrlFetchApp.fetch(this.url, options);
      console.log("Success:", response.getContentText());
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
}
