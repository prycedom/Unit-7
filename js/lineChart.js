var ctx = document.getElementById('lineChart').getContext('2d');
var hourlyTraffic = document.getElementById('hourly-traffic');
var dailyTraffic = document.getElementById('daily-traffic');
var weeklyTraffic = document.getElementById('weekly-traffic');
var monthlyTraffic = document.getElementById('monthly-traffic');

var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '', '', '', '', '', '', '', ''],
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
    hourlyTraffic.classList.add('active-filter');
    dailyTraffic.classList.remove('active-filter');
    weeklyTraffic.classList.remove('active-filter');
    monthlyTraffic.classList.remove('active-filter');
    lineChart.data.labels = ['12-1AM', '1-2AM', '2-3AM', '3-4AM', '4-5AM', '5-6PM', '6-7AM', '7-8AM', '8-9AM', '9-10AM','10-11AM','11-12PM'];
    lineChart.data.datasets[0].data = [10, 22, 40, 5, 66, 99, 100, 15, 45, 67, 82, 35]
    lineChart.update();
});
dailyTraffic.addEventListener('click', () => {
    dailyTraffic.classList.add('active-filter');
    hourlyTraffic.classList.remove('active-filter');
    weeklyTraffic.classList.remove('active-filter');
    monthlyTraffic.classList.remove('active-filter');
    lineChart.data.labels = ['Sunday','Monday', 'Tues', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    lineChart.data.datasets[0].data = [12, 19, 3, 5, 2, 3, 18]
    lineChart.update();
});
weeklyTraffic.addEventListener('click', () => {
    weeklyTraffic.classList.add('active-filter');
    hourlyTraffic.classList.remove('active-filter');
    dailyTraffic.classList.remove('active-filter');
    monthlyTraffic.classList.remove('active-filter');
    lineChart.data.labels = ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'];
    lineChart.data.datasets[0].data = [50, 75, 82, 25, 36, 10, 46, 27, 18, 96, 78, 62]
    lineChart.update();
});

monthlyTraffic.addEventListener('click', () => {
    monthlyTraffic.classList.add('active-filter');
    hourlyTraffic.classList.remove('active-filter');
    dailyTraffic.classList.remove('active-filter');
    weeklyTraffic.classList.remove('active-filter');
    lineChart.data.labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
    lineChart.data.datasets[0].data = [80, 97, 75, 63, 60, 95, 67, 78, 92, 80, 100, 73]
    lineChart.update();
});