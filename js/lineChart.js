var ctx = document.getElementById('lineChart').getContext('2d');
var hourlyTraffic = document.getElementById('hourly-traffic');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        datasets: [{
            lineTension: 0,
            label: [false],
            data: [12, 19, 3, 5, 2, 3, 18, 15, 2, 8, 10],
            backgroundColor: [
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)',
                'rgba(108, 108, 211, 0.2)'
            ],
            borderColor: [
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71',
                '#4D4C71'
            ],
            borderWidth: 4
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

hourlyTraffic.addEventListener('click', () => {
    console.log("HI");
    myChart.data.labels = ['test', 'test', 'test'];
    myChart.update();
});
