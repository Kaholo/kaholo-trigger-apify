# kaholo-trigger-apify
Simple webhook trigger for Kaholo

## How to use:
After installing the plugin on Kaholo,
on your Apify actor/task, create a new webhook and set the URL required by each method.
Make sure to check "application/json" in Content type.

## Apify Webhook:
This trigger whenever there is a new dispatch by Apify webhook system.

### Webhook URL:
**{KAHOLO_URL}/webhook/apify/process**