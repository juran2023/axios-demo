export default {
  install(app, options) {
    app.config.globalProperties.$config = {
      appName: options.appName || "My Vue App",
    };

    app.config.globalProperties.$hello = (name = "World") => {
      const appName = app.config.globalProperties.$config.appName;
      return `Hello, ${name}! Welcome to ${appName}.`;
    };

    app.directive("focus", {
      mounted(el) {
        el.focus();
      },
    });
  },
};
