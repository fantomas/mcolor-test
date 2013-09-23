/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function RGBtoRGBA(r, g, b){
    if((g==void 0) && (typeof r == 'string')){
        r = r.replace(/^\s*#|\s*$/g, '');
        if(r.length == 3){
            r = r.replace(/(.)/g, '$1$1');
        }
        g = parseInt(r.substr(2, 2), 16);
        b = parseInt(r.substr(4, 2), 16);
        r = parseInt(r.substr(0, 2), 16);
    }

    var min, a = ( 255 - (min = Math.min(r, g, b)) ) / 255;

    return {
        r    : r = 0|( r - min ) / a,
        g    : g = 0|( g - min ) / a,
        b    : b = 0|( b - min ) / a,
        a    : a = (0|1000*a)/1000,
        rgba : 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
    };
}

function rgba(r, g, b) {
    var a = 1 - Math.min(r, Math.min(g, b)) / 255;
	return {
        r    : r = 255 + (r - 255) / a,
        g    : g = 255 + (g - 255) / a,
        b    : b = 255 + (b - 255) / a,
        a    : a = a,
        rgba : 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')'
    };
    //return [255 + (r - 255) / a, 255 + (g - 255) / a, 255 + (b - 255) / a, a];
}


function rgbDistance(v1, v2) {
	var i,
        d = 0;

    for (i = 0; i < v1.length; i++) {
        d += (v1[i] - v2[i])*(v1[i] - v2[i]);
    }
    return Math.sqrt(d);	
}

