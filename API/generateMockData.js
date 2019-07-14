import fs from 'fs';
import path from 'path';
import jsf from 'json-schema-faker';
import faker from 'faker';
import Chance from 'chance';

import userSchema from './schema/userSchema';
import accountsSchema from './schema/accountsSchema';

jsf.extend('faker', () => faker);
jsf.extend('chance', () => new Chance());

const users = jsf.generate(userSchema);
const accounts = jsf.generate(accountsSchema);
const dbs = JSON.stringify({ users, accounts });

const db_path = path.resolve(__dirname, 'db.json');
console.log('write path', db_path)

fs.writeFile(db_path, dbs, err => {
    if (err) {
        console.log(`Error writing file ${err}`);
    } else {
        console.log('Mock data written to file');
    }
});
