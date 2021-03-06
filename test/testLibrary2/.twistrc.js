
module.exports = function (options) {
    return {
        "decorators": [
            [ "Store", {
                "module": "@twist/core",
                "export": "Store",
                "inherits": {
                    "module": "@twist/core",
                    "export": "BaseStore"
                }
            } ]
        ],
        "components": [
            [ options.componentName || 'default:component', {
                "module": "@twist/core",
                "export": "MyComponent"
            } ]
        ]
    };
}
