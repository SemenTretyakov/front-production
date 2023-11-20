import { RuleSetRule } from 'webpack'
import { BuildOptions } from './type/config'
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

export const buildLoaders = (options: BuildOptions): RuleSetRule => {
  return {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: (resPath: string) =>
                  Boolean(resPath.includes('.module.')),
                localIdentName: options.isDev
                  ? '[path][name]__[local]--[hash:base64:5]'
                  : '[hash:base64:8]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  }
}
