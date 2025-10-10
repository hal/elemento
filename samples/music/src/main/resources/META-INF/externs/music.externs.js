// noinspection BadExpressionStatementJS,JSUnusedGlobalSymbols,SpellCheckingInspection,ES6ConvertVarToLetConst

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

/**
 * @fileoverview Declaration of JS code used in this sample.
 * @externs
 */

/** @constructor */
function Record() {
}

/** @type {string} */
Record.prototype.id

/** @type {string} */
Record.prototype.title

/** @type {string} */
Record.prototype.released

/** @type {number} */
Record.prototype.year

/** @type {string} */
Record.prototype.url

/** @type {string} */
Record.prototype.cover

/** @type {Array<Track>} */
Record.prototype.tracks

/** @constructor */
function Track() {
}

/** @type {number} */
Track.prototype.track

/** @type {string} */
Track.prototype.title

/** @type {string} */
Track.prototype.length

/** @type {Array<string>} */
Track.prototype.writer
