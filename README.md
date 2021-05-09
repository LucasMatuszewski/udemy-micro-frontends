# Udemy Micro Front-ends

My code for Udemy course: https://www.udemy.com/course/microfrontend-course

Remember to restart container after changes in ModuleFederationPlugin config

1. Separate React apps for small parts of our big application, each with own webpack.config.js for Module Federation configuration
2. We need one Container to load other small parts (remoteEntry.js) and display them. Only index.html from Container is used on Production (other parts of our micro-FE share this file). During development we use index.html from specific app when we want to run only this part without container.
3. To share State for all remote entries we can use Redux / Context in Container or create separate micro-frontend app just for common State.
4. **Shared Modules** - when many micro-fe apps use the same node modules we can share them and let Container load only one instance of duplicated module. We add `shared` array with modules names to webpack.config.js of remote entries (not to container) in ModuleFederationPlugin config object. But... shared modules would not be loaded when we start remote entries directly (not by container) and we get this error: `Shared module is not available for eager consumption`. To fix this we have to import asynchronously our code inside micro-app to let Webpack wait until it has access to loaded modules. To import async we just need to use `import('./bootstrap')` as a function, not as normal `import './bootstrap'`. In container Webpack will already have Module imported and it will not import it two times so we still will load module only once.
5.
