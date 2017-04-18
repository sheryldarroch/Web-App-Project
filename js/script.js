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

//Zebra alert box plugin  
$.Zebra_Dialog('<strong>ALERT!</strong> Your password will expire in 6 days. Please set a new password.', {
  'type': false,
  'modal': false,
  'position': ['center', 'top + 55'],
  'buttons': false,
  'overlay_opacity': 0,
  'custom_class': 'myClass'
}); //end Zebra alert box plugin

//Notification using Zebra plugin
$('.bell').click(function(e) {
  new $.Zebra_Dialog('You have 4 new messages.<br>You have 3 new followers.', {
    'type': false,
    'modal': false,
    'position': ['right -75', 'top + 50'],
    'buttons': false,
    'overlay_opacity': 0,
    'custom_class': 'alert'
  });
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
}); //end Monthly Traffic Chart  

  trafficHourly.style.display = 'block';
  trafficDaily2.style.display = 'none';
  trafficWeekly.style.display = 'none';
  trafficMonthly.style.display = 'none';  


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
  
  
//Stand Alone Daily Traffic Chart

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
 }
}); //end Stand Alone Daily Traffic Chart

//Mobile Users Chart

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
}); // end Mobile Users Chart

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


//Hide the Message User Alerts
$(searchAlert).hide();
$(messageAlert).hide();

//Display error messages if "search for user" field or "message user" field is blank when send button is clicked
//User clicks message users send button
$('#message-user-button').click(()=>{
  let searchVal = $(search).val();
  let messageVal = $(message).val();
  //check if search field has a name in it
  if ( searchVal != '') {
    //check if message field has a message in it
    if  (messageVal != '') {
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

//Display a confirmatin message when form is submitted  
$('.message-user-form').submit((e)=>{
  e.preventDefault(); ///////only using this because form isn't actually posting - would use AJAX for this in real life!!!
  //display confirmation box
  new $.Zebra_Dialog('Congratulations! Your message has been sent successfully.', {
  'type': false,
  'modal': false,
  'position': ['left +100', 'bottom -100'],
  'buttons': false,
  'overlay_opacity': 0,
  'custom_class': 'send'
   });
});


//Use localStorage to save settings

function getSavedSettings(name) {
  let savedData = localStorage.getItem('name');
  //if settings exists
  if(savedData) {
    //return setting's contents
    return JSON.parse(savedData);
  } else {
    //otherwise, return an empty [];
    return [];
  }
}

window.onload = ()=> {
  
  $('#settings-form').submit((e)=>{
  e.preventDefault();
  let savedEmail = $('input[id=settings-email]:checked').val();
  let settings = getSavedSettings('email');
    if(settings === savedEmail) {
        return false;
     } else {
      settings.push(savedEmail);
      localStorage.setItem('email', JSON.stringify(savedEmail));
      return true;
      }
  });
};
  
  

//function saveSettings(str) {
//  let settings = getSavedSettings();
//  //if string does not exist or if strings exists inside of the array
//  if( !str || settings.indexof(str) > -1) {
//    return false;
//  } else {
//    //otherwise push/add string to settings
//    settings.push(str);
//    //stringify settings and save it to 'savedSettings' in localStorage
//    localStorage.setItem('savedSettings', JSON.stringify(settings));
//    return true;
//  }
//}

//  let savedProfile = $('#settings-profile').val();
//  let savedTimezone = $('#settings-timezone').val();
//  localStorage.setItem('savedSettings', JSON.stringify(savedProfile));
//  localStorage.setItem('savedSettings', JSON.stringify(savedTimezone));



//Social Stats Widget
//let stats = [
//        {
//          "name": "Twitter",
//          "icon": "../icons/icon-twitter.svg",
//          "stat": "10,345 re-tweets"
//        },
//        {
//          "name": "Facebook",
//          "icon": "../icons/icon-facebook.svg",
//          "stat": "8,739 likes"
//        }, 
//        {
//          "name": "Google+",
//          "icon": "../icons/icon-google-plus.svg",
//          "stat": "2,530 followers"
//        } 
//];
//
//let socialStats = '<ul class="social-stats">';
//$.each(stats, function(index, item) {
//    socialStats += '<li>';
//    socialStats += '<img class="social-img" src="' + item.icon + '" alt="social media icon">';
//    socialStats += '<span class="social-title">' + item.name + '</span>';
//    socialStats += '<span class="social-number">' + item.stat + '</span>';
//    socialStats += '</li>'; 
//});
//socialStats += '</ul>';
//document.getElementById('social-stats').innerHTML = socialStats;

 //AJAX Social Stats Widget
//    const socialStatsJSON = "../data/social_stats.json";
//    function displaySocialStats(data) {
//      let socialStats = '<ul class="social-stats">';
//      $.each(data,function(index,app) {
//          socialStats += '<li>';
//          socialStats += '<img class="social-img" src="' + app.icon + '" alt="social media icon">';
//          socialStats += '<span class="social-title">' + app.name + '</span>';
//          socialStats += '<span class="social-number">' + app.stat + '</span>';
//          socialStats += '</li>'; 
//      });
//      socialStats += '</ul>';
//      $('#social-stats').html(socialStats);
//    }
//    $.getJSON(socialStatsJSON, displaySocialStats);
   //end Social Stats Widget
  
    
 
