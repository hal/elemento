/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
import {defineConfig} from 'vite';
import {resolve} from 'path';
import {existsSync, createReadStream} from 'fs';

const gwtDir = resolve(__dirname, 'target/flow');

function serveGwt() {
    return {
        name: 'serve-gwt',
        configureServer(server) {
            server.middlewares.use((req, res, next) => {
                if (req.url.match(/\.nocache\.js$|\.cache\.js$|\.gwt\.rpc$|compilation-mappings\.txt$/)) {
                    const filePath = resolve(gwtDir, req.url.replace(/^\//, ''));
                    if (existsSync(filePath)) {
                        res.setHeader('Content-Type', 'application/javascript');
                        createReadStream(filePath).pipe(res);
                        return;
                    }
                }
                next();
            });
        }
    };
}

export default defineConfig({
    root: 'src/web',
    plugins: [serveGwt()],
    build: {
        outDir: resolve(__dirname, 'target/flow'),
        emptyOutDir: false,
    }
});
