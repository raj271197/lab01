const _ = require('lodash');
const dayjs = require('dayjs');

const holidays = [
  { name: 'Christmas', date: '2025-12-25' },
  { name: 'Canada Day', date: '2025-07-01' },
  { name: 'New Year', date: '2026-01-01' },
];

console.log('Days until each holiday:');
holidays.forEach(holiday => {
  const today = dayjs();
  const holidayDate = dayjs(holiday.date);
  const diff = holidayDate.diff(today, 'day');
  console.log(`${holiday.name}: ${diff} days`);
});

// Random holiday
const randomHoliday = _.sample(holidays);
console.log('\nRandom Holiday:', randomHoliday);

// Indexes
const names = holidays.map(h => h.name);
console.log('Index of Christmas:', _.indexOf(names, 'Christmas'));
console.log('Index of Canada Day:', _.indexOf(names, 'Canada Day'));