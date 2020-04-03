var confirmed = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv';
var recovered = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv';
var deaths = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_deaths_global.csv';
var config = {mapboxAccessToken: "pk.eyJ1IjoiZGVmdmUxOTg4IiwiYSI6ImNrNzNzZmN3dzBmMnMzZ3FvMzJ0MDRpa2QifQ.xLG4lim5AonGbkDtgP9-5A"};

var map_layout = {
	title: "",
	titlefont: {color:"red", size:24},
	// paper_bgcolor:'black',
    showlegend: false,
  	legend: {
    x: 1,
    xanchor: 'right',
    y: 1,
    marker:{
    	size:100
    }
  },
    mapbox: { style: "light", zoom: 2, center: { lon: 114, lat: 30 } },
    margin: {r: 10, t: 10, b: 10, l: 10, pad: 10},
};

function boxclick(values,mapbox_data){
	plotted={
		Confirmed:-1,
		Recovered:-1,
		Death:-1,
	}
	if (!values.checked ){
		for (var i=0;i<mapbox_data.data.length; i++){
		plotted[mapbox_data.data[i].name]=i
		}
		if (values.id=='box1'){
			Plotly.deleteTraces(map,plotted.Confirmed)
		}
		if (values.id=='box2'){
			Plotly.deleteTraces(map,plotted.Recovered)
		}
		if (values.id=='box3'){
			Plotly.deleteTraces(map,plotted.Death)
		}
	}
	else{
		if (values.id=='box1'){
			Plotly.addTraces(map, mapbox_data.confirm);
		}
		if (values.id=='box2'){
			Plotly.addTraces(map, mapbox_data.recover);
		}
		if (values.id=='box3'){
			Plotly.addTraces(map, mapbox_data.death);
		}
		for (var i=0;i<mapbox_data.data.length; i++){
			plotted[mapbox_data.data[i].name]=i
		}
		temp=[]
		if (plotted.Confirmed != -1){
			temp.push(mapbox_data.data[plotted.Confirmed])
		}
		if (plotted.Recovered != -1){
			temp.push(mapbox_data.data[plotted.Recovered])
		}
		if (plotted.Death != -1){
			temp.push(mapbox_data.data[plotted.Death])
		}
		// console.log(temp)
		// console.log(plotted)
		for (var i=0;i<mapbox_data.data.length; i++){
			mapbox_data.data[i]=temp[i]
		}
		// console.log(mapbox_data.data)
	Plotly.redraw(map);
	}
	
}

function get_header(val){
	var year = val.getFullYear()%100;
  	 	month = val.getMonth()+1;
  		date = val.getDate();
	return month+'/'+date+'/'+year
}

function unpack(rows, key) {
    return rows.map(function(row) { return row[key]; });
}

var mapbox_data={
	data:[],
	confirm: [],
	recover: [],
	death: [],
	bar_data: [],

	set_nums: function(val){
		var confirm=0,
			country=0,
			recover=0,
			added = [],
			death=0;
		l = this['confirm'][0].pop.length
        for ( var i = 0 ; i < l; i++) {
        	confirm += parseInt(this['confirm'][0].pop[i]);
        	recover += parseInt(this['recover'][0].pop[i]);
        	death += parseInt(this['death'][0].pop[i]);
        	if (this['confirm'][0].pop[i]>0 && !(added.includes(this['confirm'][0].country[i])))
        		{
        			country+=1;
        			added.push(this['confirm'][0].country[i])
        		};
        }
		document.getElementById("tot_confirm").innerHTML = confirm;
		document.getElementById("tot_country").innerHTML = country;
		document.getElementById("tot_recover").innerHTML = recover;
		document.getElementById("tot_death").innerHTML = death;
		document.getElementById("date").innerHTML = val.toString().slice(4,7)+"-"+val.toString().slice(8,10)+"-"+val.toString().slice(11,15);
	},
	ini_data: function(rows,val,item){
		if (item=="confirm"){op=0.5}
		if (item=="recover"){op=0.7}
		if (item=="death"){op=1}
		values = get_data(rows, get_header(val),item);
		cityName = values[0]
        cityCountry = values[1]
        cityPop = values[2]
        cityLat = values[3]
        cityLon = values[4]
        citySize = values[5]
        hoverText = values[6]
		this[item] = [{
		  type: 'scattermapbox',
		  // mode: 'text',
		  name: '',
		  mode: 'markers',
		  lat: cityLat,
		  lon: cityLon,
		  hoverinfo: 'text',
		  text: hoverText,
		  pop: cityPop,
		  country: cityCountry,

		  marker: {
		    size: citySize,
		    color: '',
		    opacity:op,
		    line: {
      				color: 'black',
      				width: 200
      			}
		  },
		}]
		console.log(this[item][0].marker.color)
		if (item=='confirm'){this[item][0].marker.color='#ff3300';this[item][0].name='Confirmed'}
		if (item=='recover'){this[item][0].marker.color='#15F228';this[item][0].name='Recovered'}
		if (item=='death'){this[item][0].marker.color='#4d0000';this[item][0].name='Death'}
	},
	adjust_size: function(){
        for ( var i = 0 ; i < this["recover"][0].pop.length; i++) {
        	temp = parseInt(this["recover"][0].pop[i])+parseInt(this["death"][0].pop[i])
        	this["recover"][0].marker.size[i] =Math.log(temp)*5+5
        }
	},
	update_data: function(rows,val,item){
        values = get_data(rows,get_header(val),item);
        cityName = values[0]
        cityCountry = values[1]
        cityPop = values[2]
        cityLat = values[3]
        cityLon = values[4]
        citySize = values[5]
        hoverText = values[6]
        for ( var i = 0 ; i < cityName.length; i++) {
          this[item][0].text[i] = hoverText[i];
          this[item][0].pop[i] = cityPop[i];
          this[item][0].marker.size[i] = citySize[i];
        }
	},
}

function get_data(rows,header,item){
    var cityName = unpack(rows, 'Province/State'),
    	cityCountry = unpack(rows, 'Country/Region'),
    	cityPop = unpack(rows, header),
    	cityLat = unpack(rows, 'Lat'),
    	cityLon = unpack(rows, 'Long'),
    	citySize = [],
    	// levels = [],
    	hoverText = [];

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = 0
        if (cityPop[i] > 0){
        	currentSize=Math.log(cityPop[i])*5+5 
	    }
        if (cityName[i]==''){var currentText = cityCountry[i] + ": " + cityPop[i];}
        else{
        	if (item=="confirm"){label = "Confirmed"}
        	if (item=="recover"){label = "Recovered"}
        	if (item=="death"){label = "Death"}
        	var currentText = cityName[i] + " "+label + ": " + cityPop[i];}
        citySize.push(currentSize);
        hoverText.push(currentText);
        // levels.push(level);
    }
    return [cityName, cityCountry, cityPop, cityLat, cityLon, citySize, hoverText]
}


    Plotly.d3.csv(confirmed, function(err, rows_confirm){
      Plotly.d3.csv(recovered, function(err, row_recover){
        Plotly.d3.csv(deaths, function(err, row_death){

          var DAYS = Object.keys(rows_confirm[0]).length-4
          var dataNewYorkTimes = d3.range(1, 41).map(d => ({
              year: d,
              value: 10000 * Math.exp(-(d - 1) / 40),
            }));

          var dataTime = d3.range(0, DAYS).map(function(d){return new Date(2020, 0, 22+d);});
          display_date = d3.max(dataTime)
          mapbox_data.ini_data(rows_confirm,display_date,'confirm')
          mapbox_data.ini_data(row_recover,display_date,'recover')
          mapbox_data.ini_data(row_death,display_date,'death')
          mapbox_data.adjust_size()

          Plotly.newPlot(map, mapbox_data.data, map_layout, config);
          Plotly.addTraces(map, mapbox_data.confirm);
          Plotly.addTraces(map, mapbox_data.recover);
          Plotly.addTraces(map, mapbox_data.death);

          mapbox_data.set_nums(display_date)
          // console.log(mapbox_data)

          var slider = d3
            .sliderBottom()
            .min(d3.min(dataTime))
            .max(d3.max(dataTime))
            .step(1000 * 60 * 60 * 24)
            .width(1200)
            .ticks(15)
            .fill(["red"])
            .displayValue(true)
            .on('onchange', val => {
              mapbox_data.update_data(rows_confirm,val,'confirm')
              mapbox_data.update_data(row_recover,val,'recover')
              mapbox_data.update_data(row_death,val,'death')
              mapbox_data.adjust_size()
              Plotly.redraw(map)
              mapbox_data.set_nums(val)
            });

          d3.select('#slider')
            .append('svg')
            .attr('width', 1500)
            .attr('height', 100)
            .append('g')
            .attr('transform', 'translate(30,30)')
            .call(slider);

          slider.value([display_date])

          d3.select("#check_box")
            .append("svg")
            .attr("height",20)
            .attr("width",20)
            .append("circle")
            .attr("cx",10)
            .attr("cy",12)
            .attr("r",8)
            .style("fill","#ff3300")
            .style("opacity", 0.5)
          d3.select("#check_box")
            .append("input")
            .attr("type", "checkbox")
            .attr("checked", true)
            .attr("id","box1")
            .attr("onClick", "boxclick(this,mapbox_data)")
          d3.select("#check_box")
            .append('label')
            .text("Confirmed Cases")

          d3.select("#check_box")
            .append("svg")
            .attr("height",20)
            .attr("width",20)
            .append("circle")
            .attr("cx",10)
            .attr("cy",12)
            .attr("r",8)
            .style("fill","#15F228")
            .style("opacity", 0.7)
          d3.select("#check_box")
            .append("input")
            .attr("type", "checkbox")
            .attr("checked", true)
            .attr("id","box2")
            .attr("onClick", "boxclick(this,mapbox_data)")
          d3.select("#check_box")
            .append('label')
            .text("Recovered Cases")

          d3.select("#check_box")
            .append("svg")
            .attr("height",20)
            .attr("width",20)
            .append("circle")
            .attr("cx",10)
            .attr("cy",12)
            .attr("r",8)
            .style("fill","#4d0000")
            .style("opacity", 1.0)
          d3.select("#check_box")
            .append("input")
            .attr("type", "checkbox")
            .attr("checked", true)
            .attr("id","box3")
            .attr("onClick", "boxclick(this,mapbox_data)")
          d3.select("#check_box")
            .append('label')
            .text("Death Cases")
          })
        })
      })