sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("assistedinput1.assistedinputproject1.controller.Settings", {

        onInit: function () {
          
        },
        onNavBack: function () {
            history.go(-1);
        }

    });
});
