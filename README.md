## Live site :rocket:

The live site can be found [here](https://service-board.vercel.app/)

## Setps to rebuild
**Step 1** Clone the repository
```
git clone https://github.com/ShaneMaglangit/service-board.git
```

**Step 2** Create a .env.local file in the root directory and put these variables.<br />
*Note: This cannot work alongside with dotenv, if you have it installed simply run `npm r dotenv`*
```
NEXT_PUBLIC_API_KEY={firebase_api_key}
```

**Step 3** Update the firebase-config.js with your own values

**Step 4** Install the dependencies of the project and run the project
```
npm install && npm run dev
```
