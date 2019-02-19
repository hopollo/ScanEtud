getClock();

function getClock() {
  let clockContainer = document.querySelector('.clock-container');
  let clockElement = document.createElement('span');
  let dateElement = document.createElement('span');
  clockElement.className = 'clock';
  dateElement.className = 'date';
  clockContainer.appendChild(clockElement);
  clockContainer.appendChild(dateElement);

  setInterval(() => {
    let currentTime = new Date();
    let hours = currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours();
    let minutes = currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes();
    let seconds = currentTime.getSeconds() < 10 ? '0' + currentTime.getSeconds() : currentTime.getSeconds();
    
    const daysOfWeek = new Array('Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche');
    day = daysOfWeek[currentTime.getDay() - 1];
    
    let dayOfMonth = currentTime.getDate();
    
    const monthsOfYear = new Array('Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre');
    month = monthsOfYear[currentTime.getMonth()] + ` (${(currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : '')})`;

    const year = currentTime.getFullYear();
    
    clock = `${hours}:${minutes}:${seconds}`;
    date = `${day} ${dayOfMonth} ${month} ${year}`;

    clockElement.innerHTML = clock;
    dateElement.innerHTML = date;
  }, 1000);
}
