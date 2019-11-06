## CREATE PROJECT USING:

`npm init`

## ADD SCRIPTS:

### dev

`"dev": "DEBUG=app:* nodemon index"`

- DEBUG=app:\* -> print all app namespace
- nodemon -> util to refresh every change on app

### start

`"start": "NODE_ENV=production node index"`

- use node only on production mode

## CONFIGURATIONS

- added .eslintrc and .prettierrc

## TOOLS INSTALLATION

### express

`npm i express dotenv`

- dotenv: load ENVIRONMENT_VARIABLES

`npm i -D nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier`

hook to format code automaticaly when commit changes on repository:

`npx mrm lint-staged`
