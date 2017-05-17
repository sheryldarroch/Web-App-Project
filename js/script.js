const trafficHourly = document.getElementById('traffic-hourly');
const trafficDaily2 = document.getElementById('traffic-daily-2');
const trafficWeekly = document.getElementById('traffic-weekly');
const trafficMonthly = document.getElementById('traffic-monthly');
const trafficDaily = document.getElementById('traffic-daily');
const mobileUsers = document.getElementById('mobile-users');
const slide1 = document.getElementById('slide-1');
const slide2 = document.getElementById('slide-2');
const slide3 = document.getElementById('slide-3');
const slide4 = document.getElementById('slide-4');
const searchAlert = $('#invalid-name');
const messageAlert = $('#invalid-message');
const search = $('#search-user');
const message = $('#message-for-user');


//Make Main Alert disappear on click
$('.alert-main').click(()=>{
   $('.alert-main').hide();
});
  
//Hide Bell/Notification Alert
$('.alert-bell').hide();

//Make Bell/Notification Alert show on click
$('.bell').click(()=>{
  $('.alert-bell').show();
});
  
//Make Notification 1 disappear on click
$('#alert-bell-1').click(()=>{  
 $('#alert-bell-1').hide(); 
 if( $('#alert-bell-2').is(':hidden') && $('#alert-bell-1').is(':hidden') ) {
    $('.alert-bell').hide();
    $('.alert-indicator').hide();
  }
});
      
//Make Notification 2 disappear no click
$('#alert-bell-2').click(()=>{ 
 $('#alert-bell-2').hide(); 
 if( $('#alert-bell-1').is(':hidden') && $('#alert-bell-2').is(':hidden') ) {
    $('.alert-bell').hide();
    $('.alert-indicator').hide();  
  }
});

//Web Traffic Charts    

//Hourly Traffic Chart
let trafficH = new Chart.Line(trafficHourly, {
data: {
  labels: ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  datasets: [
        {
          label: '',
          data: [15, 5, 8, 10, 80, 2, 6, 15, 75, 36, 4, 31],  
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
options: {
  legend: {
    display: false
  }
}  
}); //end Hourly Traffic Chart

//Daily Traffic Chart
let trafficD2 = new Chart.Line(trafficDaily2, {
data: {
  labels: ['S', 'M', 'T', 'W', 'TH', 'F', 'S'],
  datasets: [
        {
          label: '',
          data: [287, 50, 378, 500, 48, 610, 137],  
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
options: {
  legend: {
    display: false
  }
}  
}); //end Daily Traffic Chart

//Weekly Traffic Chart
let trafficW = new Chart.Line(trafficWeekly, {
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
options: {
  legend: {
    display: false
  }
}
}); //end Weekly Traffic Chart  

// Monthly Traffic Chart
let trafficM = new Chart.Line(trafficMonthly, {
data: {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
        {
          label: '',
          data: [3680, 2530, 1950, 5654, 4250, 6507, 2489, 6865, 7800, 5010, 8426, 3689],  
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
options: {
  legend: {
    display: false
  }
}
}); //end Monthly Traffic Chart  

//Show the Hourly Traffic Chart and hide the other 3
trafficHourly.style.display = 'block';
trafficDaily2.style.display = 'none';
trafficWeekly.style.display = 'none';
trafficMonthly.style.display = 'none';  

//When user clicks on "Hourly" - show Hourly chart
$('#slide-1').click((e)=>{
  $('#slide-1').addClass('selected');
  $('#slide-2').removeClass('selected');
  $('#slide-3').removeClass('selected');
  $('#slide-4').removeClass('selected');
  trafficHourly.style.display = 'block';
  trafficDaily2.style.display = 'none';
  trafficWeekly.style.display = 'none';
  trafficMonthly.style.display = 'none';  
});

//When user clicks on "Daily" - show Daily chart
$('#slide-2').click((e)=>{
  $('#slide-1').removeClass('selected');
  $('#slide-2').addClass('selected');
  $('#slide-3').removeClass('selected');
  $('#slide-4').removeClass('selected');
  trafficHourly.style.display = 'none';
  trafficDaily2.style.display = 'block';
  trafficWeekly.style.display = 'none';
  trafficMonthly.style.display = 'none';  
});

//When user clicks on "Weekly" - show Weekly chart
$('#slide-3').click((e)=>{
  $('#slide-1').removeClass('selected');
  $('#slide-2').removeClass('selected');
  $('#slide-3').addClass('selected');
  $('#slide-4').removeClass('selected');
  trafficHourly.style.display = 'none';
  trafficDaily2.style.display = 'none';
  trafficWeekly.style.display = 'block';
  trafficMonthly.style.display = 'none'; 
});

//When user clicks on "Monthly" - show Monthly chart
$('#slide-4').click((e)=>{
  $('#slide-1').removeClass('selected');
  $('#slide-2').removeClass('selected');
  $('#slide-3').removeClass('selected');
  $('#slide-4').addClass('selected');
  trafficHourly.style.display = 'none';
  trafficDaily2.style.display = 'none';
  trafficWeekly.style.display = 'none';
  trafficMonthly.style.display = 'block'; 
});
//end Web Traffic Charts
  
  
//Daily Traffic Bar Chart
let trafficD = new Chart(trafficDaily, {
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
 },
options: {
  legend: {
    display: false
  }
}  
}); //end Daily Traffic Bar Chart

//Mobile Users Donut Chart
let mobileU = new Chart(mobileUsers, {
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
}); // end Mobile Users Donut Chart

//New Members Widget
let stats = [
            {
              "name": "Phoebe Buffay",
              "img": "pics/female-face01.png",
              "email": "phoebe@friends.com",
              "member": "10/15/2015",
              "activity": "Phoebe Buffay liked your recent Facebook post.",
              "activityDate": "04/12/2017"
            },
            {
              "name": "Rachel Green",
              "img": "pics/female-face02.png",              
              "email": "rachel@friends.com",
              "member": "01/07/2014",
              "activity": "Rachel Green commented on your Making Money blog post.",
              "activityDate": "04/10/2017"    
            },
            {
              "name": "Monica Geller",
              "img": "pics/female-face03.png",              
              "email": "monica@friends.com",
              "member": "03/27/2016", 
              "activity": "Monica Geller commented on Entrepreneurial Tips.",
              "activityDate": "04/13/2017"    
            },
            {
              "name": "Chandler Bing",
              "img": "pics/male-face01.png",              
              "email": "chandler@friends.com",  
              "member": "08/02/2016", 
              "activity": "Chandler Bing liked your recent Facebook post.",
              "activityDate": "04/10/2017"    
            },
            {
              "name": "Ross Geller",
              "img": "pics/male-face02.png",              
              "email": "ross@friends.com",    
              "member": "07/12/2015",
              "activity": "Ross Geller commented on your recent Facebook post.",
              "activityDate": "04/12/2017"    
            },  
            {
              "name": "Joey Tribbiani",
              "img": "pics/male-face03.png",              
              "email": "joey@friends.com",  
              "member": "03/30/2017", 
              "activity": "Joey Tribbiani re-tweeted Slaying Life.",
              "activityDate": "04/12/2017"    
            }
];

let newMemberStats = '<ul class="new-member-stats">';
$.each(stats, function(index, item) {
    newMemberStats += '<li>';
    newMemberStats += '<div class="rec flex">';
    newMemberStats += '<img class="new-member-img" src="' + item.img + '" alt="profile picture">';
    newMemberStats += '<div class="box flex">';
    newMemberStats += '<span class="new-member-name">' + item.name + '</span>';
    newMemberStats += '<span class="new-member-email">' + item.email + '</span>';
    newMemberStats += '</div>';
    newMemberStats += '<span class="new-member-date">' + item.member + '</span>';
    newMemberStats += '</div>';
    newMemberStats += '</li>'; 
});
newMemberStats += '</ul>';
document.getElementById('new-members').innerHTML = newMemberStats;
// end New Members Widget

// Recent Activity Widget
let recentActivityStats = '<ul class="recent-activity-stats">';
$.each(stats, function(index, item) {
    recentActivityStats += '<li>';
    recentActivityStats += '<div class="rec flex">';
    recentActivityStats += '<img class="recent-activity-img" src="' + item.img + '" alt="profile picture">';
    recentActivityStats += '<div class="box flex">';
    recentActivityStats += '<span class="recent-activity-activity">' + item.activity + '</span>';
    recentActivityStats += '<span class="recent-activity-date">' + item.activityDate + '</span>';
    recentActivityStats += '</div>';
    recentActivityStats += '<span class="recent-activity-arrow">&gt;</span>';
    recentActivityStats += '</div>';
    recentActivityStats += '</li>'; 
});
recentActivityStats += '</ul>';
document.getElementById('recent-activity').innerHTML = recentActivityStats;
//end Recent Activity Widget

//Message User Search autocomplete
$( function() {
  let usersList = [
    "Phoebe Buffay",
    "Rachel Green",
    "Monica Geller",
    "Ross Geller",
    "Joey Tribbiani",
    "Chandler Bing",
    "Jerry Seinfeld",
    "George Costanza",
    "Elaine Benes",
    "Cosmo Kramer",
    "Newman",
    "Soup Nazi"
  ];
  $( "#search-user" ).autocomplete({
    source: usersList
  });
});

//Hide the Error Messages
$(searchAlert).hide();
$(messageAlert).hide();

//Display error messages if "search for user" field or "message user" field is blank when send button is clicked
//User clicks message users send button
$('#message-user-button').click(()=>{
  let searchVal = $(search).val();
  let messageVal = $(message).val();
  //check if search field has a name in it
  if ( searchVal !== '') {
    //check if message field has a message in it
    if  (messageVal !== '') {
    return true;
    } else {
      //If message field is empty
      $(messageAlert).show();
      $(searchAlert).hide();
      return false;
      } 
  } else {
    //if search field is empty
     $(searchAlert).show();
     $(messageAlert).hide();
      return false;
    }
});

//Hide error message when search field is clicked
$(search).click(()=>{
  $(searchAlert).hide();
});
  
//Hide error message when message field is clicked  
$(message).click(()=>{
  $(messageAlert).hide();
});

//Hide confirmation message
 $('.alert-confirm').hide();  
  
//Display a confirmatin message when form is submitted  
$('.message-user-form').submit((e)=>{
  e.preventDefault(); ///////only using this because form isn't actually posting - would use AJAX for this in real life!!!
  //display confirmation box
  $('.alert-confirm').show();
  //clear #search-user and #message-for-user because form isn't actually posting
  $('#search-user').val('');
  $('#message-for-user').val('');
});

//Hide confirmation message when user clicks on it
  $('.alert-confirm').click(()=>{
      $('.alert-confirm').hide(); 
});

//Use localStorage to save settings
window.onload = ()=> {
  let email = localStorage.getItem('email');
  let profile = localStorage.getItem('profile');
  let timezone = localStorage.getItem('timezone');

  //Check value of email checkbox in local storage and set checkbox accordingly
  if(email === 'true') {
    $('#settings-email').prop('checked', true);
  } else {
      $('#settings-email').prop('checked', false);
    }

  //Check value of profile checkbox in local storage and set checkbox accordingly
  if(profile === 'true') {
    $('#settings-profile').prop('checked', true);
  } else {
      $('#settings-profile').prop('checked', false);
    }

  //Check value of timezone select in local storage and set select accordingly
   if(timezone) {
     $('#settings-timezone').val(JSON.parse(timezone));
    } 

  //Save settings to localStorage when save button is clicked/form is submitted
  $('.settings-form').submit((e)=>{
    e.preventDefault();
    let savedEmail = $('#settings-email').is(':checked');
    let savedProfile = $('#settings-profile').is(':checked');
    let savedTimezone = $('#settings-timezone').val();
    localStorage.setItem('email', JSON.stringify(savedEmail));
    localStorage.setItem('profile', JSON.stringify(savedProfile));
    localStorage.setItem('timezone', JSON.stringify(savedTimezone));
   });  
   
  //Clear localStorage when cancel button is clicked  
  $('#settings-cancel-button').click(()=>{
      localStorage.removeItem('email');  
      localStorage.removeItem('profile');
      localStorage.removeItem('timezone');
   });  
}; //end window.onload

  
    
 
