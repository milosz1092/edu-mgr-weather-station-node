import * as path from 'path';
import * as fs from 'fs';

class Config {
    public static data = null;

    public static Update(): void {
        const env = process.env.NODE_ENV || 'development';
        const config = JSON.parse(fs.readFileSync(path.join(__dirname,'../../config.json'), 'UTF-8'));
        
        Config.data = config[env];
    }
}

export { Config };