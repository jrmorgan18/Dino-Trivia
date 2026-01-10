const LEVEL_DETAILS = [
  { level: 1, name: 'Hatchling Hills', key: null },
  { level: 2, name: 'Stegosaurus Steps', key: 'stegosaurus' },
  { level: 3, name: 'T-Rex Ridge', key: 'trex' },
  { level: 4, name: 'Indominus Invasion', key: 'indominus' }
];

const PRIZES = [
  { points: 10, reward: '15 minutes later bedtime on weekend' },
  { points: 20, reward: 'Extra treat with dinner' },
  { points: 30, reward: '5 minutes of tickle monster' },
  { points: 40, reward: '10 minutes of tickle monster' },
  { points: 50, reward: '15 minutes extra tablet time' },
  { points: 60, reward: '30 minutes extra tablet time' },
  { points: 200, reward: 'Hyper Kidz or Sky Zone' }
];

const ui = {
  pointsGrid: document.getElementById('points-grid'),
  totalPoints: document.getElementById('total-points'),
  totalFossils: document.getElementById('total-fossils'),
  prizeList: document.getElementById('prize-list')
};

function loadFossils() {
  const stored = JSON.parse(localStorage.getItem('dinoTriviaStats') || '{}');
  return stored.fossils || {};
}

function buildLevelSummary(fossils) {
  return LEVEL_DETAILS.map((level) => {
    const count = level.key ? fossils[level.key] || 0 : 0;
    return {
      ...level,
      fossils: count,
      points: count * level.level
    };
  });
}

function renderLevelBreakdown(levels) {
  if (!ui.pointsGrid) return;
  ui.pointsGrid.innerHTML = '';
  levels.forEach((entry) => {
    const card = document.createElement('article');
    card.className = 'points-card';
    card.innerHTML = `
      <div>
        <p class="label">Level ${entry.level}</p>
        <h3>${entry.name}</h3>
        <p class="muted">${entry.fossils} ${entry.fossils === 1 ? 'fossil' : 'fossils'}</p>
      </div>
      <div class="points-card__score">
        <p class="label">Fossil Points</p>
        <p class="points-card__value">${entry.points}</p>
        <p class="muted">${entry.fossils} × ${entry.level}</p>
      </div>
    `;
    ui.pointsGrid.appendChild(card);
  });
}

function renderPrizes(totalPoints) {
  if (!ui.prizeList) return;
  ui.prizeList.innerHTML = '';
  PRIZES.forEach((prize) => {
    const item = document.createElement('li');
    item.className = `prize-item${totalPoints >= prize.points ? ' prize-item--earned' : ''}`;
    item.innerHTML = `
      <div>
        <p class="label">${prize.points} Fossil Points</p>
        <p class="prize-item__reward">${prize.reward}</p>
      </div>
      <span class="prize-item__status">${totalPoints >= prize.points ? 'Unlocked!' : 'Keep digging'}</span>
    `;
    ui.prizeList.appendChild(item);
  });
}

function updateTotals(levels) {
  const totalPoints = levels.reduce((sum, level) => sum + level.points, 0);
  const totalFossils = levels.reduce((sum, level) => sum + level.fossils, 0);
  if (ui.totalPoints) {
    ui.totalPoints.textContent = totalPoints;
  }
  if (ui.totalFossils) {
    ui.totalFossils.textContent = `Total fossils: ${totalFossils}`;
  }
  return totalPoints;
}

function init() {
  const fossils = loadFossils();
  const levels = buildLevelSummary(fossils);
  renderLevelBreakdown(levels);
  const totalPoints = updateTotals(levels);
  renderPrizes(totalPoints);
}

init();
