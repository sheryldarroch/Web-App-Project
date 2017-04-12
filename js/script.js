  //Zebra alert box plugin  
  $.Zebra_Dialog('<strong>ALERT!</strong> Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ulrtirces vehicula ut id elit.', {
    'type': false,
    'modal': false,
    'position': ['center', 'top + 120'],
    'buttons': false,
    'overlay_opacity': 0,
    'custom_class': 'myClass'
  }); //end Zebra alert box plugin
  
  //Web Traffic Chart
    let ctx = document.getElementById('traffic-main');
    let webTraffic = new Chart.Line(ctx, {
      data: {
        labels: ['9-15', '16-22', '23-29', '30-6', '7-13', '14-20', '21-27', '28-3', '4-10', '11-17'],
        datasets: [
              {
                label: '',
                data: [500, 1030, 950, 1200, 1150, 1500, 1489, 1865, 800, 2010],  
                lineTension: 0,
                backgroundColor: 'rgba(203,204,230,0.5)',
                borderWidth: 3,
                borderColor: 'rgb(117,120,189)',
                pointBorderColor: 'rgb(117,120,189)',
                pointBackgroundColor: 'rgb(255,255,255)',
                pointBorderWidth: 3,
                pointRadius: 4,
                pointHoverRadius: 8,
                pointStyle: 'circle',
                showLine: true,
                spanGaps: true,          
              }
          ]
      },
    }); //end Web Traffic Chart
  
  //Daily Traffic Chart
    let ctx2 = document.getElementById('traffic-daily');
    let trafficDaily = new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
        datasets: [
          {
            label: '',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: 'rgb(117,120,189)',
            hoverBackgroundColor: 'rgb(75,77,155)'
          }
        ]
       }
     }); //end Daily Traffic Chart
  
  //Mobile Users Chart
    let ctx3 = document.getElementById('mobile-users');
    let mobileUsers = new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['Phones', 'Tablets', 'Desktops'],
        datasets: [
          {
            label: '',
            data: [200, 150, 450],
            backgroundColor: [
                '#4b9b71',
                '#4b9bee',
                '#4b4d9b'
            ],
          }
        ]
      }
    }); // end Mobile Users Chart
  
    //Social Stats Widget
    const socialStatsJSON = "../data/social_stats.json";
    function displaySocialStats(data) {
      let socialStats = '<ul class="social-stats">';
      $.each(data,function(index,app) {
          socialStats += '<li>';
          socialStats += '<img class="icon" src="' + app.icon + '" alt="social media icon">';
          socialStats += '<span class="social-title">' + app.name + '</span>';
          socialStats += '<span class="number">' + app.stat + '</span>';
          socialStats += '</li>'; 
      });
      socialStats += '</ul>';
      $('#social-stats').html(socialStats);
    }
    $.getJSON(socialStatsJSON, displaySocialStats);
   //end Social Stats Widget
  
    
 
