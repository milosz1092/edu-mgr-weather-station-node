import * as mongoose from 'mongoose';
import { Config } from './Config';


class Initializer {
    public static Init() {
        Config.Update();
        const db = Config.data.database;

        /* Database connect */
        (<any>mongoose).Promise = global.Promise;
        mongoose.connect(
            `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}?authSource=${db.auth}`, 
            { useMongoClient: true }
        );
    }

    public static Revoke() {
        mongoose.connection.close();
    }
}

export { Initializer };
