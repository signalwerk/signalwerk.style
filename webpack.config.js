import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
/*-------------------------------------------------*/

import postcss from "postcss";
import postcssImport from "postcss-import";
import postcssCalc from "postcss-calc";
import postcssNested from "postcss-nested";
import postcssPresetEnv from "postcss-preset-env";
import criticalSplit from "postcss-critical-split";
import postcssMqPacker from "css-mqpacker"; // Pack same CSS media query rules into one using PostCSS
import postcssSimpleVars from "postcss-simple-vars";
import postcssMixins from "postcss-mixins";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import PostCssPipelineWebpackPlugin from "postcss-pipeline-webpack-plugin";
// import postConditionals from "postcss-conditionals";

/*-------------------------------------------------*/

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*-------------------------------------------------*/

/* all the configts for different targets */
const configs = {
  doc: {
    entry: { doc: [resolve(__dirname, "./src/styles/doc.css")] },
  },
  blog: {
    entry: { blog: [resolve(__dirname, "./src/styles/blog.css")] },
  },
};

/*-------------------------------------------------*/

const config = configs[process.env.TARGET || "doc"];

const isProduction = process.env.NODE_ENV === "production";

const settings = {
  // webpack optimization mode
  mode: process.env.NODE_ENV ? process.env.NODE_ENV : "development",

  // entry file(s)
  entry: {
    ...config.entry,
  },

  // output file(s) and chunks
  output: {
    path: resolve(__dirname, "dist"),
    // filename: "index.js",
    publicPath: "/",
  },

  module: {
    rules: [
      {
        test: /\.(jpg|jpeg|png|woff|otf|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: isProduction ? false : true,
            },
          },

          // Add PostCSS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  postcssImport({
                    // root: resolve(__dirname, "./Resources/Private"),
                  }),
                  postcssMixins(),
                  postcssSimpleVars({
                    onVariables(variables) {
                      // console.log("CSS Variables");
                      // console.log(JSON.stringify(variables, null, 2));
                    },
                  }),

                  postcssCalc(),
                  postcssPresetEnv({
                    stage: 0,
                    browsers: ["last 2 versions", "IE > 10"],
                  }),
                  // postConditionals(),
                  postcssNested(),
                  postcssMqPacker(),
                ],
              },

              // Enable sourcemaps in development
              sourceMap: isProduction ? false : true,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // new interface for webpack >4
    // ---------------------------------------------------------
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: resolve(__dirname, "static"),
    //       to: "", // copies all files to dist
    //     },
    //   ],
    // }),
    // ---------------------------------------------------------

    new PostCssPipelineWebpackPlugin({
      suffix: "critical",
      processor: postcss([
        criticalSplit({
          output: criticalSplit.output_types.CRITICAL_CSS,
        }),
      ]),
    }),

    new PostCssPipelineWebpackPlugin({
      suffix: "rest",
      processor: postcss([
        criticalSplit({
          output: criticalSplit.output_types.REST_CSS,
        }),
      ]),
    }),

    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
      chunkFilename: "./styles/[id].css",
    }),
  ],

  // development server configuration
  devServer: {
    port: 8081,
    allowedHosts: "all",
    static: ["dist"],
    // open: true,
  },
};

export default settings;
