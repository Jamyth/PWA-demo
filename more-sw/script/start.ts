import path from 'path';
import { spawn } from './spawn';

spawn('json-server', [path.join(__dirname, '../src/data/db.json')], 'Cannot Run JSON Server');
