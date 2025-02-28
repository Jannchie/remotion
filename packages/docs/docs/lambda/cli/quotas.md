---
id: quotas
sidebar_label: quotas
title: "npx remotion lambda quotas"
slug: /lambda/cli/quotas
---

Displays the AWS Lambda concurrency and burst limits currently being applied to your account and region. You can use the `increase` command to send a request to AWS asking them to increase their quotas.

- [`quotas`](#quotas)
- [`quotas increase`](#quotas-increase)

## `quotas`

Print the current limits being applied to your AWS account and region.

```
npx remotion lambda quotas
```

<details>
<summary>Show example output
</summary>
<pre>
Region = us-east-1

Concurrency limit: 1000 - Increase recommended!
A request to increase it to 5000 is pending:
https://us-east-1.console.aws.amazon.com/support/home#/case/?displayId=9742781451
The maximum amount of Lambda functions which can concurrently execute.
Run `npx remotion lambda quotas increase` to ask AWS to increase your limit.

Burst concurrency: 3000, but only 1000 effective because of concurrency limit
The maximum amount of Lambda functions that can spawn in a short amount of time

</pre>
</details>

### `--region`

For which region the quotas should be printed.

## `quotas increase`

Creates an AWS support request to increase the concurrency limit on your account as well as potential quota increase requests that might exist on your account.

```
npx remotion lambda quotas increase
```

### `--region`

For which region the quotas should be increased.

### `--yes`

Skips asking for confirmation.

## See also

- [Setup guide](/docs/lambda/setup)
