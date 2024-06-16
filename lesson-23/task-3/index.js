const arenaElem = document.querySelector('.arena');
const selectedSeatElem = document.querySelector('.board__selected-seat');

// create one seat with EventListener
const createSeat = (sector, line, seat) => {
  const seatElem = document.createElement('div');
  seatElem.classList.add('sector__seat');
  seatElem.textContent = seat;
  seatElem.addEventListener('click', () => {
    selectedSeatElem.textContent = `S ${sector} - L ${line} - S ${seat}`;
  });
  return seatElem;
};

// Create a row of seats
const createRow = (sector, line) => {
  const rowElem = document.createElement('div');
  rowElem.classList.add('sector__line');
  for (let seat = 1; seat <= 10; seat++) {
    rowElem.appendChild(createSeat(sector, line, seat));
  }
  return rowElem;
};

// Create a sector
const createSector = sector => {
  const sectorElem = document.createElement('div');
  sectorElem.classList.add('sector');
  for (let line = 1; line <= 10; line++) {
    sectorElem.appendChild(createRow(sector, line));
  }
  return sectorElem;
};

// Create 3 sectors
for (let sector = 1; sector <= 3; sector++) {
  arenaElem.appendChild(createSector(sector));
}
