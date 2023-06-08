
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function LineChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");

    if (chartRef.current) {
      // Destroy previous chart instance
      chartRef.current.destroy();
    }

    // Chart data
    const data = {
      labels: ["","02/06/2023", "03/06/2023", "04/06/2023", "05/06/2023", "06/06/2023",],
      datasets: [
        {
          label: "Évolution du nombre d’abonnés",
          data: [400, 420, 475, 500, 540, 550],
          backgroundColor: "rgb(75, 192, 192, 0.2)",
          borderColor: "rgba(235, 119, 54, 1)",
          borderWidth: 0.8,
          tension: 0.3,
          pointRadius: 0, 
          pointHoverRadius: 4, 
        },
      ],
    };

    // Chart configuration
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        hover: {
          mode: 'index',
          intersect: false
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            ticks: {
              minRotation: 45, 
              maxRotation: 45, 
            },
          },
        },
      
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
    };

    // Create the chart
    chartRef.current = new Chart(ctx, config);
  }, []);

  return (
    <div className="chart" id="chart">
      <div className="titreChart">
      Évolution du nombre d’abonnés
      </div>
      <canvas id="myChart" style={{ height: "24vh" }}></canvas>
    </div>
  );
}

export default LineChart;
