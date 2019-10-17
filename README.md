# Kentico Kontent Webhook Processing JavaScript Azure Function Template

> Pretty long name, right?

## Prerequisites

Follow the [instructions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local) to enable local Azure function development.

## Get started

> Using VS Code IDE recommended

1. Clone the repository

    ```sh
    git clone https://Github.com/Simply007/kontent-webhook-processing-function-js
    ```

1. [Create a webhook](https://docs.kontent.ai/tutorials/develop-apps/integrate/using-webhooks-for-automatic-updates#a-creating-a-webhook) in Kentico Kontent

1. Rename [`local.settings.json.template`](./local.settings.json.template) to `local.settings.json` and set the `KONTENT_WEBHOOK_SECRET` value to the secret of created webhook for [verification](KONTENT_WEBHOOK_SECRET)

1. Implement webhook processing in [index.js](/ProcessWebhook/index.js#L26)

1. Use [Azure Functions Extension](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions) to deploy the Azure function.
