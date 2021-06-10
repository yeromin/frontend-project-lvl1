### Hexlet tests and linter status:
[![Actions Status](https://github.com/yeromin/frontend-project-lvl1/workflows/hexlet-check/badge.svg)](https://github.com/yeromin/frontend-project-lvl1/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/maintainability)](https://codeclimate.com/github/codeclimate/codeclimate/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/a99a88d28ad37a79dbf6/test_coverage)](https://codeclimate.com/github/codeclimate/codeclimate/test_coverage)

![example workflow](https://github.com/yeromin/frontend-project-lvl1/actions/workflows/hxlt-github-actions.yml/badge.svg)

# Asciinema
1. [Task 1. Brain Even. Asciinema:](https://asciinema.org/a/419625)

# The first Hexlet project

## To run a JS file as an App:

1. be sure there’s a shebang that points to the interpretator. For Node.js this is: 
`#!/usr/bin/env node`

2. add `bin` section to the `package.json`:
```json
"bin": {
  "brain-games": "bin/brain-games.js"
}
```

3. add execution rights (to run an app w\o `node` addition): 
```bash
chmod +x bin/brain-games.js
```

4. `npm publish --dry-run`

5. install the package to the system by typing `npm link`. Type `brain-games` in terminal to be sure everything works

