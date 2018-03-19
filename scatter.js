var svg = d3.select("svg");

var create_scatter = function(){
    pops = [3.9, 5.3, 7.2, 9.6, 12.9, 17.1, 23.2, 31.4, 38.6, 50.2, 62.9, 76.0, 92.0, 105.7, 122.8, 131.4];
    data = [];
    for (var i = 0; i < 16; i++){
        data.push([1790 + 10 * i, pops[i]]);
    }
    
    circles = svg.selectAll("circle").data(data).enter();
    circles.append("circle")
    .attr("r", 5)
    .attr("fill", "lightsteelblue")
    .attr("cx",
        function (d) { 
            return 5 * (d[0] - 1790) + 100;
        }
    )
    .attr("cy",
        function (d) { 
            return 3 * (150 - d[1]) + 40;
        }
    );
    
    for (var i = 0; i < 16; i++){
        svg.append("text")
        .text(1790 + i * 10) // x-axis in years
        .attr("style", "text-anchor: middle")
        .attr("x", i * 50 + 100)
        .attr("y", 525);
        
        svg.append("text")
        .text(i * 10) // y-axis in millions of people
        .attr("style", "text-anchor: middle")
        .attr("x", 60)
        .attr("y", 500 - i * 30);
    };
    svg.append("text")
    .text("Year")
    .attr("style", "text-anchor: middle; font-weight: bold;")
    .attr("x", 450)
    .attr("y", 560);
    
    svg.append("text")
    .text("Population (in millions)")
    .attr("style", "text-anchor: middle; font-weight: bold; writing-mode: tb;")
    .attr("x", 25)
    .attr("y", 250);
};

create_scatter();