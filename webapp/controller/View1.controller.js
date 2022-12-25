    sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ], function (Controller, JSONModel) {
        "use strict";
    
        return Controller.extend("assistedinput1.assistedinputproject1.controller.View1", {
    
            onInit: function () {
         //    var th1 = this.getView().byId("th");

          //   th1.setBackgroundColor  = "Green";
            },
            onPress:function(){
                var loRouter = sap.ui.core.UIComponent.getRouterFor(this);
                 loRouter.navTo("Settings");
       }
    
        });
    });
