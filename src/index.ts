import { WebhookNotifier } from "./models/notifier";

function main() {
  const webhookurl =
    "<webhook url>";

  const webhookNotifier = new WebhookNotifier(webhookurl);
  webhookNotifier.notify("Hello, World!");
}
