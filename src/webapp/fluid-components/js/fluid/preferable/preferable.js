/*
Copyright 2007 - 2008 University of Toronto
Copyright 2007 - 2008 University of Cambridge

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://source.fluidproject.org/svn/LICENSE.txt
*/

/*global jQuery*/
/*global fluid_0_6*/

fluid_0_6 = fluid_0_6 || {};

(function ($, fluid) {

    fluid.preferable = function (container, options){
        if (!container) {
            fluid.fail("Preferable initialised with no container");
        }
        var that = fluid.initView("fluid.preferable", container, options);
    };

    fluid.defaults("fluid.preferable", {
        selectors: {
            textSizeCtrl: ".textsize-control",
            textSpacingCtrl: ".textspace-control",
            fontCtrl: ".font-control",
            colorCtrl: ".color-control",
            tocCtrl: ".toc-control",
            preview: ".preview"
        },
        events: {
            onPrefChange: null,
            afterPreview: null,
            onSave: null,
            onCancel: null
        }
    });


    fluid.a4aPlus = {
        foregroundColor: "#FFFFFF",
        backgroundColor: "#000000",
        highlightColor: "#000000", 
        fontSize: "12"        
    };
    
    fluid.uiAspects = {
        "textSize": [
            {
                "prefs": { 
                    "fontSize": "8"    // should the value be a reg exp or an array instead?
                },
                "name": "-2",
                "stylesheet": "text_size01.css"
            },
            {
                "prefs": { "fontSize": "10"},
                "name": "-1",
                "stylesheet": "text_size02.css"
            },
            {
                "prefs": { "fontSize": "12"},
                "name": "Default",
                "stylesheet": "text_size03.css"
            },
            {
                "prefs": { "fontSize": "14"},
                "name": "+1",
                "stylesheet": "text_size04.css"
            }
        ],
        "colorScheme": [
            {
                "prefs": {
                    "foregroundColor": "#FFFFFF",  
                    "backgroundColor": "#000000",
                    "highlightColor": "#FFFFFF"
                },
                "name": "Black and White",
                "stylesheet": "color_scheme01.css"
            },
            {
                "prefs": {
                    "foregroundColor": "#659D32",  
                    "backgroundColor": "#000000",
                    "highlightColor": "#659D32"
                },
                "name": "Black and Green",
                "stylesheet": "color_scheme02.css"
            },
            {
                "prefs": {
                    "foregroundColor": "#FFFF00",  
                    "backgroundColor": "#000000",
                    "highlightColor": "#FFFF00"
                },
                "name": "High Contrast",
                "stylesheet": "color_scheme03.css"
            }
        ]
    };
    
    fluid.skins = [
        {
            "name": "Matrix",
            "text-size": fluid.uiAspects.textSize[2],
            "color-scheme": fluid.uiAspects.colorScheme[1]
        },
        {
            "name": "High Visibility",
            "text-size": fluid.uiAspects.textSize[3],
            "color-scheme": fluid.uiAspects.colorScheme[2]
        }
    ];
    
    fluid.preferable.render = function () {
        // hydrated tree
        var contentTree = {
            children: [{
                ID: "opts",
                value: null
            },{
                ID: "textsizeset",
                value: null
            },{
                ID: "textsize_name",
                value: "taille des textes"
            },{
                ID: "textsize",
                value: null, 
                valuebinding: "size" // el expression
            }]
        };
        
/*     dehydrated tree - cannot be used with data binding   
        
        var contentTree = {
            "opts": null,
            "textsizeset": null,
            "textsize_name": "taille des textes",
            "textsize": null 
        };
*/
        var options = {
            "bind": [
                {"size": -2},
                {"size": -1},
                {"size": 0},
                {"size": 1},
                {"size": 2},
                {"size": 3},
                {"size": 4},
                {"size": 6},
                {"size": 8}
            ]
        };
        
        fluid.selfRender($("#opts_container"), contentTree, options);
    };

})(jQuery, fluid_0_6);

  