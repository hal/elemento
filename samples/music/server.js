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
const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = process.argv[2] || 1234;
const parcelPort = process.argv[3] || 1235;

// 1. Proxy Parcel's dev server
app.use(
    '/parcel-assets',
    createProxyMiddleware({
        target: 'http://localhost:$(parcelPort)',
        changeOrigin: true,
        ws: true, // Enable WebSocket proxying if you use it
        pathRewrite: {
            '^/parcel-assets': '',
        },
        logLevel: 'debug',
    })
);

// 2. Serve static files
app.use(express.static(path.join(__dirname, 'target', 'music')));


// 3. J2CL routes
app.get(/.*music\.js$/, (req, res) => {
    res.sendFile(path.resolve(__dirname, 'target', 'music', 'music.js'));
});
app.get(/.*bundle\.js$/, (req, res) => {
    const filename = path.basename(req.url);
    res.sendFile(path.resolve(__dirname, 'target', 'music', filename));
});
app.get('/{*pre}/sources/{*post}', (req, res) => {
    const source = req.url.substring(req.url.indexOf('sources/'));
    res.sendFile(path.resolve(__dirname, 'target', 'music', source));
});

// 4. SPA fallback
app.get('/{*any}', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'target', 'music', 'index.html'));
});

app.listen(port, () => {
    console.log(`Development server running on http://localhost:${port}`);
    console.log(`Proxying Parcel on http://localhost:${parcelPort}`);
});
