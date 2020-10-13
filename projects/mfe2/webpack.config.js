const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    publicPath: "http://localhost:3001/",
    uniqueName: "mfe2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe2",
      library: { type: "var", name: "mfe2" },
      filename: "remoteEntry.js",
      exposes: {
        './Component': './projects/mfe2/src/app/app.component.ts',
        './Module': './projects/mfe2/src/app/bookings/bookings.module.ts'
      },
      shared: ["@angular/core", "@angular/common", "@angular/router"]
    }),
  ],
};
