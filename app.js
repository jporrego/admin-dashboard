google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Day", "Views"],
    ["1", 900],
    ["5", 1000],
    ["10", 1500],
    ["15", 1000],
    ["20", 3500],
    ["25", 2500],
    ["30", 3000],
  ]);

  var options = {
    title: "Daily Views",
    titleTextStyle: {
      color: "#F1F5FB",
      fontName: "Poppins",
      fontSize: 13,
      bold: true,
      position: "center",
    },
    titlePosition: "out",
    hAxis: {
      title: "Day",
      titleTextStyle: {
        color: "#F1F5FB",
        fontName: "Poppins",
        fontSize: 12,
        bold: true,
      },
      textStyle: {
        color: "#F1F5FB",
        fontName: "Poppins",
        fontSize: 11,
        bold: false,
      },
    },
    vAxis: {
      minValue: 0,
      textStyle: {
        color: "#F1F5FB",
        fontName: "Poppins",
        fontSize: 11,
        bold: false,
      },
      gridlines: { color: "#31334c" },
    },
    backgroundColor: { fill: "#1b1c30" },
    chartArea: { width: "100%", backgroundColor: "#1b1c30" },
    colors: ["#5046ba"],
    crosshair: { color: "#ffc540" },
    fontName: "Poppins",
    legend: { position: "none" },
  };

  var chart = new google.visualization.AreaChart(
    document.getElementById("chart_div")
  );
  chart.draw(data, options);

  window.onresize = reDrawChart;

  function reDrawChart() {
    chart.draw(data, options);
  }
}
