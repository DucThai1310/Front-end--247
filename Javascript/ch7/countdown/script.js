function $(id) {
  return document.getElementById(id);
}
function countDown() {
  const eventName = $('eventName').value.trim();
  const eventDate = $('eventDate').value.trim();
  //13/10/1997
  let date, month, year;
  if (eventDate.length == 10) {
    date = eventDate.substring(0, 2);
    month = eventDate.substring(3, 5);
    year = eventDate.substring(6);
    if (
      parseInt(date) == NaN ||
      parseInt(month) == NaN ||
      parseInt(year) == NaN 
      // eventDate.indexOf('/') == 2 ||
      // eventDate.indexOf('/', 3) == 5
    ) {
      alert('Please enter event date format dd/mm/yyyy');
    } else {
      let currentDate = new Date();
      let dateCount = new Date(year, month, date);
      let timeOfDate = 24 * 60 * 60 * 1000;
      let currentTime = currentDate.getTime();
      let dateCountTime = dateCount.getTime();
      let numberDate = (dateCountTime - currentTime) / timeOfDate;
      numberDate = Math.round(numberDate);
      $('message').innerHTML = `${eventName} happened ${numberDate} day(s) ago.`;
    }
  } else {
    alert('Please enter event date format dd/mm/yyyy');
  }
}
window.onload = function () {
  $('countdown').onclick = countDown;
};
