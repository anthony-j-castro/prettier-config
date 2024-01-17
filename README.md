# @anthony-j-castro/prettier-config

Reusable Prettier config for projects by @anthony-j-castro.

## Installation

To install the latest version as a dependency of a project:

```bash
npm install --save-dev "https://github.com/anthony-j-castro/prettier-config.git#semver:1.0.0"
```

Then, copy and paste this starter config in a new `.prettierrc.json` file:

```json
"@anthony-j-castro/prettier-config"
```

> [!IMPORTANT]  
> In order to override or extend the shared configuration, you must use a
> `.prettierrc.js` instead:
>
> ```js
> import prettierConfig from "@anthony-j-castro/prettier-config";
>
> export default {
>   ...prettierConfig,
>   // Add or overwrite settings here
> };
> ```
>
> See more in the
> [documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations).

## Releasing a new version

This repo uses
[`semantic-release`](https://github.com/semantic-release/semantic-release) to
automatically create and tag new versions.

To release a new version:

1. Navigate to the
   ["Create release" workflow](https://github.com/anthony-j-castro/prettier-config/actions/workflows/release.yml).
2. Click on the "Run workflow" dropdown, ensure the "Run with dry-run flag"
   option is checked, and click "Run workflow".
3. Review the proposed version number and release notes in the workflow logs.
4. If everything is correct, repeat steps 1 and 2 but uncheck the "Run with
   dry-run flag" option.
5. After the "Create release" workflow completes and the new version is created,
   update the version number in the ["Installation" section](#installation) of
   this README.
