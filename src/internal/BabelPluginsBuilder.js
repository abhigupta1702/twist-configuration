/*
 *  Copyright 2017 Adobe Systems Incorporated. All rights reserved.
 *  This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License. You may obtain a copy
 *  of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under
 *  the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *  OF ANY KIND, either express or implied. See the License for the specific language
 *  governing permissions and limitations under the License.
 *
 */

/**
 * A wrapper for constructing a list of babel plugins, given NPM modules and options.
 */
module.exports = class BabelPluginsBuilder {
    constructor() {
        this._plugins = [];
        this._presets = [];
    }

    add(mod, options) {
        this._plugins.push([ mod && mod.default || mod, options || {} ]);
    }

    addPreset(mod, options) {
        this._presets.push([ mod && mod.default || mod, options || {} ]);
    }

    build() {
        return {
            plugins: this._plugins,
            presets: this._presets
        };
    }
};
