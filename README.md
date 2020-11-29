## Live site :rocket:

The live site can be found [here](https://service-board.vercel.app/)

## Setps to rebuild
Clone the repository
```
git clone https://github.com/ShaneMaglangit/service-board.git
```
Create a .env.local file in the root directory and put these variables.
*Note: This cannot work alongside with dotenv, if you have it installed simply run `npm r dotenv`*
```
NEXT_PUBLIC_API_KEY=***REMOVED***
```
After this, update firebase-config.js with your firebase credentials
Install the dependencies of the project and run the project
```
npm install && npm run dev
```
