define(["require", "exports", "esri/widgets/support/widget", "../../application/widgets/views/AppView", "../../application/widgets/views/ViewComposites"], function (require, exports, widget_1, AppView_1, ViewComposites_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = function (props) {
        var childProps = {
            config: props.config,
            i18n: props.i18n,
            id: props.config.itemId,
            projector: props.projector,
            widgets: props.widgets,
        };
        var viewBackgroundColor = props.config.bgColor ? props.config.bgColor : "ffffff";
        var containerClasses = {
            "animate-fade-in": true,
            "animate-fade-out": false,
        };
        var view;
        if (props.config.type === "webmap") {
            view = ViewComposites_1.WebMap(childProps);
        }
        else if (props.config.type === "webscene") {
            view = ViewComposites_1.WebScene(childProps);
        }
        else if (props.config.type === "webapp") {
            view = AppView_1.default({ url: props.config.id, projector: props.projector, i18n: props.i18n });
        }
        else {
            view = {
                render: function () { return (widget_1.tsx("h3", { class: "center-style" }, props.i18n.viewLoading.sorry)); }
            };
        }
        return {
            render: function () {
                return (widget_1.tsx("div", { id: "view-container", key: "view-container", classes: containerClasses, style: "background-color: " + convertHex(viewBackgroundColor, 85) },
                    widget_1.tsx("div", { id: "map-container", style: "width: 100%; height: 100%" }, view.render())));
            }
        };
        function convertHex(hex, opacity) {
            hex = hex.replace("#", "");
            var r = parseInt(hex.substring(0, 2), 16);
            var g = parseInt(hex.substring(2, 4), 16);
            var b = parseInt(hex.substring(4, 6), 16);
            var result = "rgba(" + r + "," + g + "," + b + "," + opacity / 100 + ")";
            return result;
        }
    };
});
//# sourceMappingURL=Viewer.js.map