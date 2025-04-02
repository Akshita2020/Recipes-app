# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
# Recipes-app

# Expo folder Structure 
In modern React Native projects, especially those utilizing Expo and its routing conventions, organizing your folder structure is crucial for maintainability and scalability. A common approach involves placing your screens within the `app` directory to leverage Expo Router's file-based routing system. This means each screen corresponds to a file or folder within `app`, and the routing is determined by the file structure.

**Folder Structure:**


```
AwesomeProject/
├── app/
│   ├── index.tsx            // Home screen
│   ├── _layout.tsx          // Global layout configuration
│   ├── auth/
│   │   ├── index.tsx        // Authentication entry point
│   │   ├── login.tsx        // Login screen
│   │   └── signup.tsx       // Signup screen
│   ├── profile/
│   │   └── index.tsx        // Profile screen
│   └── settings/
│       └── index.tsx        // Settings screen
├── components/
│   ├── Button.tsx           // Reusable button component
│   └── Card.tsx             // Reusable card component
├── hooks/
│   └── useAuth.ts           // Custom authentication hook
├── api/
│   ├── client.ts            // API client setup (e.g., Axios instance)
│   └── auth.ts              // Authentication-related API calls
├── assets/
│   ├── images/
│   └── fonts/
├── constants/
│   └── index.ts             // Constant values used across the app
├── contexts/
│   └── AuthContext.tsx      // Authentication context provider
├── utils/
│   └── helpers.ts           // Utility functions
├── types/
│   └── index.ts             // TypeScript types and interfaces
├── app.json
├── babel.config.js
├── package.json
└── tsconfig.json
```


**Key Points:**

- **`app/` Directory:** Contains all screen components. The structure within this directory directly maps to your app's navigation paths. For instance, `app/auth/login.tsx` corresponds to the `/auth/login` route. The `_layout.tsx` file can be used to define layouts that wrap around your screens.

- **Non-Routable Directories:** Folders like `components`, `hooks`, `api`, etc., are placed outside the `app` directory. These contain reusable logic and UI elements that are not directly associated with a route. This separation ensures that only the contents of the `app` directory are considered for routing, preventing unintended navigation paths.

- **API Integration:** The `api/` folder manages all API-related functionalities. For example, `client.ts` can set up your API client (like configuring an Axios instance), and `auth.ts` can define functions for authentication-related API calls. This organization promotes a clear separation of concerns and makes it easier to manage API interactions.

By structuring your project in this manner, you align with Expo's routing conventions while maintaining a clean and organized codebase. This setup facilitates scalability and ease of maintenance as your application grows. 