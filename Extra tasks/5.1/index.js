const body = document.querySelector('body');
const daysArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const daysInWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];


const createElement = (elem , year , month) => {
  const newD = new Date(year, month-1);
  const getDaysInMonths = new Date(year, month,0).getDate()
  console.log(newD.getDay());
  const getDayInWeek = daysInWeek[newD.getDay()];
  const findIndexInDate = daysArr.findIndex(day => day === getDayInWeek)+1;

  console.log(getDaysInMonths)
  console.log(getDayInWeek)
  console.log(findIndexInDate);

  const table = document.createElement('table');
  const tr = document.createElement('tr')
  table.appendChild(tr)
  daysArr.forEach(el => {
    const th = document.createElement('th');
    th.textContent = el
    tr.appendChild(th)
  })
  let dayOnThisCalendar = 1;
  let n = 1;
  for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    if(dayOnThisCalendar === ''){
      break
    }
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td')
      td.setAttribute('value', n)
      if (td.getAttribute('value') === String(findIndexInDate)) {
        td.textContent = 1
        dayOnThisCalendar+= +1
      }
      if ( dayOnThisCalendar!=1 && td.textContent!=1) {
        td.textContent=dayOnThisCalendar
        dayOnThisCalendar++
      }
      if(dayOnThisCalendar>getDaysInMonths){
        dayOnThisCalendar=""
      }
      n++
      tr.appendChild(td)
    }
    table.appendChild(tr)
  }
  elem.append(table)


}

createElement(body, 2021, 2);



