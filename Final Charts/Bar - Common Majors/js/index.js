var header = $('.stats__header');
var bar  = $('.stats__item-bar');
var nums = $('.stats__item-num');
var overlay = $('.stats__overlay');
var back = $('.stats__overlay-back');
var isOpen = false;

var vYear = $('#year');
var vAvg = $('#avg');
var vGames = $('#games');
var vGoal = $('#goals');

$(document).on('ready', function() {
  entrance();
});

bar.on('click', showOverlay);
back.on('click', showOverlay);

function entrance() {
  bar.addClass('active');
  header.addClass('active');
  header.on('transitionend webkitTransitionend', function() {
    nums.css('opacity', '1');
    bar.css('transition-delay', '0');
    header.off('transitionend webkitTransitionend');
  });
}

function showOverlay() {
  if (!isOpen) {
    overlay.addClass('active').removeAttr('style');
    bar.css('transition', 'all 0.4s cubic-bezier(0.86, 0, 0.07, 1)')
    .removeClass('active');
    header.removeClass('active');
    nums.css('opacity', '0');
    isOpen = true;
    
   updateInfo($(this).parent().index());
  } else {
    overlay.css('transition', 'all 0.4s cubic-bezier(0.755, 0.05, 0.855, 0.06)').removeClass('active');
    bar.addClass('active').removeAttr('style');
    header.addClass('active');
    nums.css('opacity', '1');
    isOpen = false;
  }
}

var data = [
  {
    year: 'Back',
    
  },
  {
    year: 'Back',
    goals: '56',
    games: '79',
    avg: '14'
    
  },
  {
    year: 'Back',
    goals: '50',
    games: '72',
    avg: '13'
    
  },
  {
    year: 'Back',
    goals: '32',
    games: '79',
    avg: '9'
    
  },
  {
    year: 'Back',
    goals: '38',
    games: '78',
    avg: '7'
    
  },
  {
    year: 'Back',
    goals: '32',
    games: '48',
    avg: '5'
    
  },
  {
    year: 'Back',
    goals: '51',
    games: '78',
    avg: '5'
    
  },
  {
    year: 'Back',
    goals: '50',
    games: '76',
    avg: '3'
    
  }
];

function updateInfo(index) {
  vYear.text(data[index].year);
  vAvg.text(data[index].avg);
  vGoal.text(data[index].goals);
  vGames.text(data[index].games);
}