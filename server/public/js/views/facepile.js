var app = app || {};

$(function($) {
    'use strict';

    app.FacepileView = app.ChartView.extend({
        initialize: function(a) {
            this.el = d3.select("#chart")
                .append("div");
        },

        render: function(model) {
            var data, faces, divs;

            data = model.get("data");
            faces = this.el.selectAll("div.face")
                .data(data);
            divs = faces.enter().append("div")
                .attr("class", "face clearfix");
            divs.append("img")
                .attr("src", function(d) {
                    return "http://graph.facebook.com/" + d.uid + "/picture?type=square";
                });
            divs.append("div")
                .attr("class", "name")
                .text(function(d) {
                    return d.name;
                });
        }
    });
});
