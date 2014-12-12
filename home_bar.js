var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
		var lineChartData = {
			labels : ["January","February","March","April","May","June","July"],
			datasets : [
				{
					label: "My Second dataset",
					fillColor : "rgba(255,87,72,0.5)",
					strokeColor : "rgba(255,87,72,1)",
					pointColor : "rgba(255,87,72,1)",
					pointStrokeColor : "#fff",
					pointHighlightFill : "#fff",
					pointHighlightStroke : "rgba(151,187,205,1)",
					data : [4,32,28,40,89,120]
				}
			]

		}

	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
	}

/*var randomScalingFactor = function(){ return Math.round(Math.random()*100)};

	var barChartData = {
		labels : ["$10","$50","$100"],
		datasets : [
			{
				fillColor : "rgba(220,220,220,1)",
				strokeColor : "rgba(220,220,220,1)",
				highlightFill: "rgba(220,220,220,1)",
				highlightStroke: "rgba(220,220,220,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			},
			{
				fillColor : "rgba(255,87,72,1)",
				strokeColor : "rgba(255,87,72,1)",
				highlightFill : "rgba(255,87,72,1)",
				highlightStroke : "rgba(255,87,72,1)",
				data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			}
		]

	}
	window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myBar = new Chart(ctx).Bar(barChartData, {
			responsive : true
		});
	}
*/