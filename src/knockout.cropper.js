(function (factory) {
    // Module systems magic dance.

    if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
        // CommonJS or Node: hard-coded dependency on "knockout"
        factory(require("knockout"), require("jquery"));
    } else if (typeof define === "function" && define["amd"]) {
        // AMD anonymous module with hard-coded dependency on "knockout"
        define(["knockout"], ["jquery"], factory);
    } else {
        // <script> tag: use the global `ko` object, attaching a `mapping` property
        factory(ko, jQuery);
    }
}
(function (ko, jquery) {
	ko.bindingHandlers.cropper = {
		init: function(element, valueAccessor, allBindingsAccessor) {
			var allBindings = allBindingsAccessor();
			var cropperOptions = ko.unwrap(allBindings.cropper);

            console.log("HERE");
            jquery(element).cropper(cropperOptions);
		}
	};
}));