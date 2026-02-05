// ===== Exercise 6

function createCalendar(year, month) {
    
    const table = document.createElement('table');

    const row = document.createElement('tr');
    const daysOfWeek = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    daysOfWeek.forEach(day => {
        const th = document.createElement('th');
        th.textContent = day;
        row.appendChild(th);
    });
    table.appendChild(row);

    // first day of month/year
    const firstDay = new Date(year, month - 1, 1);

    // day of week in month starts
    const sundayBased = firstDay.getDay();

    //convert to Monday-first format
    const startDayOfWeek = (sundayBased + 6) % 7;

    //total number of days in this month (day 0 of next month = last day of current month)
    const totalDays = new Date(year, month, 0).getDate();

    
    let currentRow = document.createElement('tr');
    let currentDayOfWeek = startDayOfWeek;

    for (let i = 0; i < startDayOfWeek; i++) {

        const emptyCell = document.createElement('td');
        currentRow.appendChild(emptyCell);

    }

    for (let day = 1; day <= totalDays; day++) {

        if (currentDayOfWeek === 7) {
            table.appendChild(currentRow);
            currentRow = document.createElement('tr');
            currentDayOfWeek = 0;
        }

        const td = document.createElement('td');
        td.textContent = day;
        currentRow.appendChild(td);
        currentDayOfWeek++;

    }

    table.appendChild(currentRow);

    document.body.appendChild(table);
}


const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

createCalendar(currentYear, currentMonth);