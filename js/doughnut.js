const ctx = document.getElementById('myChart');


new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'present water',
            'Used water'
          ],
          datasets: [{
            data: [300, 100],
            backgroundColor: [
              'rgb(90, 123, 253)',              
              'rgb(190, 206, 255)'
            ],
            hoverOffset: 3
          }]
    }
});