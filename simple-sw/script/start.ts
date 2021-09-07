import { WebpackRunner } from '@iamyth/webpack-runner';
import path from 'path';

new WebpackRunner({
    port: 8082,
    projectDirectory: path.join(__dirname, '..'),
    tsconfigFilePath: path.join(__dirname, '../config/tsconfig.src.json'),
    https: false,
}).run();
