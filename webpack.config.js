const path = require("path");
const webpack = require("webpack");
const fs = require("fs");

const postcss = require("postcss");
const postcssImport = require("postcss-import");
const postcssVars = require("postcss-simple-vars");
const postcssCalc = require("postcss-calc");
const postcssNested = require("postcss-nested");
const postConditionals = require("postcss-conditionals");
const postcssPresetEnv = require("postcss-preset-env");
const postcssMqPacker = require("css-mqpacker");
const cssnano = require("cssnano");

const PostCssPipelineWebpackPlugin = require("postcss-pipeline-webpack-plugin");

const criticalSplit = require("postcss-critical-split");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = require("config");

/*-------------------------------------------------*/

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  // webpack optimization mode
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",

  // generate source map
  devtool: isProduction ? "hidden-source-map" : "source-map",

  // entry file(s)
  entry: {
    main: [
      "./src/main.js",
      "./src/main.css"
    ]
  },

  // output file(s) and chunks
  output: {
    library: "UserList",
    libraryTarget: "umd",
    libraryExport: "default",
    path: path.resolve(__dirname, "./dist"),
    filename: "./[name].js",
    publicPath: config.get("publicPath")
  },

  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
            publicPath: "assets/",
            name: "[name].[ext]"
          }
        }
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
            publicPath: "assets/",
            name: "[name].[ext]"
          }
        }
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,

        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: { sourceMap: config.get("sourcemap") }
          },
          // Add PostCSS
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              // Enable sourcemaps in development
              sourceMap: config.get("sourcemap"),

              plugins() {
                return [
                  postcssImport({
                    root: path.resolve(__dirname, "./Resources/Private")
                  }),
                  postcssVars({
                    variables: () => {
                      if (fs.existsSync(config.cssVariables)) {
                        return config.cssVariables;
                      }
                      return {
                        debug: isProduction ? 0 : 1
                      };
                    }
                  }),
                  postcssCalc(),
                  postcssPresetEnv({
                    stage: 0,
                    browsers: ["last 2 versions", "IE > 10"]
                  }),
                  postConditionals(),
                  postcssNested(),
                  postcssMqPacker()
                  // postcssFlegrix(),
                ];
              }
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./styles/[name].css",
      chunkFilename: "./styles/[id].css"
    }),
    new PostCssPipelineWebpackPlugin({
      suffix: "critical",
      processor: postcss([
        criticalSplit({
          output: criticalSplit.output_types.CRITICAL_CSS
        }),
        ...(isProduction ? [cssnano()] : [])
      ])
    }),
    new PostCssPipelineWebpackPlugin({
      suffix: "rest",
      processor: postcss([
        criticalSplit({
          output: criticalSplit.output_types.REST_CSS
        }),
        ...(isProduction ? [cssnano()] : [])
      ])
    })
  ],

  // development server configuration
  devServer: {
    port: 8080,

    contentBase: "./dist",

    // open browser on server start
    open: config.get("open")
  }
};
