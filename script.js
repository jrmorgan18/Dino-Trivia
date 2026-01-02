const levelData = [
  {
    name: 'Hatchling Hills (Level 1)',
    description: 'Warm up with Kindergarten and 1st grade friendly prompts.',
    badge: 'Gentle Start',
    difficulty: 'Easy',
    theme: 'sunny',
    questions: [
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Plants need sunlight, soil, water, and what else to grow?',
        choices: ['Batteries', 'Air', 'Sparkles', 'Magnets'],
        answer: 1,
        fact: 'Plants breathe in carbon dioxide from air to make their food through photosynthesis.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter makes the beginning sound in the word "dinosaur"?',
        choices: ['D', 'S', 'L', 'P'],
        answer: 0,
        fact: 'The letter D makes the /d/ sound at the start of dinosaur.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'A triangle has how many sides?',
        choices: ['2', '3', '4', '6'],
        answer: 1,
        fact: 'Triangles always have three sides and three corners.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'In soccer, which body part is usually used to move the ball?',
        choices: ['Hands', 'Feet', 'Elbows', 'Helmet'],
        answer: 1,
        fact: 'Soccer players dribble and pass with their feet. Only the goalie can use hands.'
      },
      {
        category: 'Patterns',
        grade: 'K',
        prompt: 'What comes next in this pattern: 🌋 🦖 🌋 🦖 🌋 ?',
        choices: ['🦖', '🌋', '🌴', '🪨'],
        answer: 0,
        fact: 'The pattern alternates volcano, dino, volcano, dino.'
      }
    ]
  },
  {
    name: 'Crested Cliffs (Level 2)',
    description: 'Step into 1st and 2nd grade challenges with more detail.',
    badge: 'Getting Tougher',
    difficulty: 'Medium',
    theme: 'forest',
    questions: [
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'The United States is part of which continent?',
        choices: ['Asia', 'Europe', 'North America', 'Africa'],
        answer: 2,
        fact: 'The U.S. is located in North America with Canada and Mexico.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Who was the first President of the United States?',
        choices: ['George Washington', 'Abraham Lincoln', 'Benjamin Franklin', 'Harriet Tubman'],
        answer: 0,
        fact: 'George Washington served from 1789 to 1797.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Clap the beat to this word: "di-no-saur." How many claps do you make?',
        choices: ['1', '2', '3', '4'],
        answer: 2,
        fact: 'Dinosaur has three syllables, so you clap three times.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What is it called when you bounce the basketball while moving?',
        choices: ['Serving', 'Pitching', 'Dribbling', 'Swinging'],
        answer: 2,
        fact: 'Dribbling keeps the ball moving while you walk or run.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Water changing into a gas you can’t see is called what?',
        choices: ['Freezing', 'Melting', 'Evaporation', 'Erosion'],
        answer: 2,
        fact: 'Evaporation happens when heat makes water molecules move into the air.'
      }
    ]
  },
  {
    name: 'Stegosaurus Steps (Level 3)',
    description: 'Stronger 2nd and 3rd grade thinking, using multi-step clues.',
    badge: 'Brainy Beast',
    difficulty: 'Hard',
    theme: 'sunset',
    questions: [
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'In football, what is it called when the ball is thrown and caught for a score in the end zone?',
        choices: ['Home run', 'Touchdown', 'Goal kick', 'Free throw'],
        answer: 1,
        fact: 'Crossing into the end zone with the ball or catching it there is a touchdown worth six points.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A rectangle is 4 units long and 3 units wide. What is its area?',
        choices: ['7 square units', '12 square units', '24 square units', '14 square units'],
        answer: 1,
        fact: 'Area is length times width: 4 × 3 = 12 square units.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Harriet Tubman helped people escape to freedom using what secret routes?',
        choices: ['The Pony Express', 'The Underground Railroad', 'Oregon Trail', 'Transcontinental Railroad'],
        answer: 1,
        fact: 'The Underground Railroad was a network of safe houses and guides.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'In baseball, how many strikes make an out?',
        choices: ['2', '3', '4', '5'],
        answer: 1,
        fact: 'Three strikes retire the batter.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What is the missing number in this skip-counting pattern? 5, 10, __, 20, 25',
        choices: ['11', '12', '15', '18'],
        answer: 2,
        fact: 'The pattern adds 5 each time: 10 + 5 = 15.'
      }
    ]
  },
  {
    name: 'T-Rex Ridge (Level 4)',
    description: 'Challenge round with 3rd grade depth and quick thinking.',
    badge: 'Dino Master',
    difficulty: 'Challenge',
    theme: 'lava',
    questions: [
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which ocean is on the east coast of the United States?',
        choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 1,
        fact: 'The Atlantic Ocean touches the eastern coastline of the U.S.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'Which piece of equipment is used to carry and throw the ball in lacrosse?',
        choices: ['Racket', 'Net stick', 'Stick with a mesh head', 'Paddle'],
        answer: 2,
        fact: 'A lacrosse stick has a mesh pocket to cradle, pass, and shoot the ball.'
      },
      {
        category: 'Music',
        grade: '3',
        prompt: 'Which note value is held for the longest time?',
        choices: ['Quarter note', 'Half note', 'Whole note', 'Eighth note'],
        answer: 2,
        fact: 'A whole note lasts four beats in common time.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which force pulls everything toward Earth’s center?',
        choices: ['Magnetism', 'Friction', 'Gravity', 'Electricity'],
        answer: 2,
        fact: 'Gravity is the force that keeps your feet on the ground.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'A pass that travels through the air from one player to a teammate without touching the ground is called what?',
        choices: ['Chest pass', 'Bounce pass', 'Sky lob', 'Hand-off'],
        answer: 0,
        fact: 'A chest pass moves quickly from chest to chest in the air.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'In the pattern 2, 4, 7, 11, 16, what is the rule?',
        choices: ['Add 1, then 2, repeat', 'Add 2, then add 3, repeat', 'Add 3 every time', 'Multiply by 2 each time'],
        answer: 1,
        fact: 'The pattern adds 2, then 3, repeating to make growing steps.'
      }
    ]
  }
];

const categoryColors = {
  Science: 'dot--science',
  'U.S. History': 'dot--history',
  Geography: 'dot--geo',
  Phonics: 'dot--phonics',
  Geometry: 'dot--geometry',
  Music: 'dot--music',
  'Sports (Football)': 'dot--sports',
  'Sports (Soccer)': 'dot--sports',
  'Sports (Basketball)': 'dot--sports',
  'Sports (Lacrosse)': 'dot--sports',
  'Sports (Baseball)': 'dot--sports',
  Patterns: 'dot--patterns'
};

const state = {
  levelIndex: 0,
  questionIndex: 0,
  shuffled: [],
  sessionScore: 0,
  sessionComplete: false,
  cumulativeScore: 0,
  sessionsPlayed: 0,
  levelCorrect: {}
};

const ui = {
  levelName: document.getElementById('level-name'),
  levelDescription: document.getElementById('level-description'),
  badgeRow: document.getElementById('badge-row'),
  progressBar: document.getElementById('progress-bar'),
  questionCategory: document.getElementById('question-category'),
  questionText: document.getElementById('question-text'),
  choices: document.getElementById('choices'),
  feedback: document.getElementById('feedback'),
  startBtn: document.getElementById('start-btn'),
  nextBtn: document.getElementById('next-btn'),
  summaryBtn: document.getElementById('summary-btn'),
  sessionScore: document.getElementById('session-score'),
  cumulativeScore: document.getElementById('cumulative-score'),
  sessionsPlayed: document.getElementById('sessions-played'),
  log: document.getElementById('log'),
  resetCumulative: document.getElementById('reset-cumulative'),
  logTemplate: document.getElementById('log-item-template'),
  badgeTemplate: document.getElementById('badge-template')
};

function init() {
  loadCumulative();
  updateScoreboards();
  prepareLevel(0);
  bindEvents();
  logMessage('Welcome to Dino Trivia! Start your adventure to earn fossil points.');
}

function bindEvents() {
  ui.startBtn.addEventListener('click', onStartClick);
  ui.nextBtn.addEventListener('click', () => {
    ui.nextBtn.disabled = true;
    nextQuestion();
  });
  ui.summaryBtn.addEventListener('click', () => showSummary());
  ui.resetCumulative.addEventListener('click', resetCumulative);
}

function onStartClick() {
  if (state.sessionComplete) {
    restartSession();
    return;
  }

  const levelFinished = state.questionIndex >= state.shuffled.length;

  if (levelFinished) {
    const hasNextLevel = state.levelIndex < levelData.length - 1;
    if (hasNextLevel) {
      prepareLevel(state.levelIndex + 1);
    } else {
      restartSession();
      return;
    }
  }

  startLevel(levelData[state.levelIndex]);
}

function prepareLevel(index) {
  state.levelIndex = index;
  state.questionIndex = 0;
  state.shuffled = shuffle([...levelData[index].questions]);
  state.levelCorrect[index] = 0;
  ui.progressBar.style.width = '0%';
  renderLevelInfo();
  ui.questionText.textContent = 'Press "Start Adventure" to begin this level.';
  ui.choices.innerHTML = '';
  ui.feedback.textContent = '';
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = true;
  ui.startBtn.textContent = index === 0 && state.sessionScore === 0 ? 'Start Adventure' : `Start ${levelData[index].name}`;
}

function renderLevelInfo() {
  const level = levelData[state.levelIndex];
  ui.levelName.textContent = level.name;
  ui.levelDescription.textContent = level.description;
  ui.badgeRow.innerHTML = '';
  const badge = ui.badgeTemplate.content.cloneNode(true);
  badge.querySelector('.badge').textContent = `${level.difficulty} • ${level.badge}`;
  ui.badgeRow.appendChild(badge);
}

function startLevel(level) {
  ui.startBtn.disabled = true;
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = true;
  renderQuestion(level);
}

function renderQuestion(level) {
  const current = state.shuffled[state.questionIndex];
  if (!current) return;

  ui.questionCategory.textContent = `${current.category} • ${current.grade}`;
  ui.questionText.textContent = current.prompt;
  ui.choices.innerHTML = '';
  ui.feedback.textContent = '';

  current.choices.forEach((choice, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice';
    btn.innerHTML = `<span class="dot ${categoryColors[current.category] || 'dot--patterns'}"></span>${choice}`;
    btn.addEventListener('click', () => handleAnswer(idx));
    ui.choices.appendChild(btn);
  });

  updateProgress(state.questionIndex);
}

function handleAnswer(choiceIndex) {
  const current = state.shuffled[state.questionIndex];
  const choiceButtons = Array.from(document.querySelectorAll('.choice'));
  choiceButtons.forEach(btn => (btn.disabled = true));

  const isCorrect = choiceIndex === current.answer;
  if (isCorrect) {
    state.sessionScore += 10;
    state.levelCorrect[state.levelIndex] = (state.levelCorrect[state.levelIndex] || 0) + 1;
  }

  choiceButtons[choiceIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
  choiceButtons[current.answer].classList.add('correct');

  ui.feedback.textContent = isCorrect
    ? `🦕 Correct! ${current.fact}`
    : `🦖 Not quite. ${current.fact}`;

  addLogEntry({
    label: `${levelData[state.levelIndex].name}`,
    detail: `${current.category} • ${current.grade}`,
    text: `${current.prompt} → ${isCorrect ? 'Correct' : 'Try again next time'}`
  });

  updateScoreboards();
  ui.nextBtn.disabled = false;
  ui.summaryBtn.disabled = state.questionIndex < state.shuffled.length - 1;
  updateProgress(state.questionIndex + 1);
}

function nextQuestion() {
  state.questionIndex += 1;
  if (state.questionIndex >= state.shuffled.length) {
    finishLevel();
    return;
  }
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = true;
  renderQuestion(levelData[state.levelIndex]);
}

function finishLevel() {
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = false;
  ui.startBtn.disabled = false;
  ui.startBtn.textContent = state.levelIndex < levelData.length - 1 ? 'Advance to Next Level' : 'Play Again';
  ui.feedback.textContent = 'Level complete! Review the summary or advance.';
  updateProgress(state.shuffled.length);

  if (state.levelIndex === levelData.length - 1 && !state.sessionComplete) {
    completeSession();
  }
}

function showSummary() {
  const level = levelData[state.levelIndex];
  const correctCount = state.levelCorrect[state.levelIndex] || 0;
  const total = level.questions.length;
  const message = `Finished ${level.name}! You answered ${correctCount} of ${total} questions correctly in this level.`;
  ui.feedback.textContent = message;
  addLogEntry({
    label: `${level.name} summary`,
    detail: `${level.difficulty} • ${level.questions.length} questions`,
    text: message
  });
  ui.summaryBtn.disabled = true;
  ui.startBtn.disabled = false;
}

function completeSession() {
  state.sessionComplete = true;
  state.cumulativeScore += state.sessionScore;
  state.sessionsPlayed += 1;
  saveCumulative();
  updateScoreboards();
  const message = `Session finished! You earned ${state.sessionScore} fossil points and have ${state.cumulativeScore} total.`;
  ui.feedback.textContent = message;
  logMessage(message);
}

function restartSession() {
  state.sessionScore = 0;
  state.sessionComplete = false;
  state.levelCorrect = {};
  prepareLevel(0);
  updateScoreboards();
  logMessage('New session started. Let\'s stomp into more trivia!');
}

function loadCumulative() {
  const stored = JSON.parse(localStorage.getItem('dinoTriviaStats') || '{}');
  state.cumulativeScore = stored.cumulativeScore || 0;
  state.sessionsPlayed = stored.sessionsPlayed || 0;
}

function saveCumulative() {
  localStorage.setItem('dinoTriviaStats', JSON.stringify({
    cumulativeScore: state.cumulativeScore,
    sessionsPlayed: state.sessionsPlayed
  }));
}

function resetCumulative() {
  state.cumulativeScore = 0;
  state.sessionsPlayed = 0;
  saveCumulative();
  updateScoreboards();
  logMessage('Cumulative fossils reset. Fresh tracks ahead!');
}

function updateScoreboards() {
  ui.sessionScore.textContent = state.sessionScore;
  ui.cumulativeScore.textContent = state.cumulativeScore;
  ui.sessionsPlayed.textContent = `Sessions played: ${state.sessionsPlayed}`;
}

function updateProgress(completedCount = state.questionIndex) {
  const level = levelData[state.levelIndex];
  const total = level.questions.length || 1;
  const percent = Math.round((completedCount / total) * 100);
  ui.progressBar.style.width = `${percent}%`;
}

function addLogEntry({ label, detail, text }) {
  const node = ui.logTemplate.content.cloneNode(true);
  node.querySelector('.log__label').textContent = label;
  node.querySelector('.log__detail').textContent = detail;
  node.querySelector('.log__text').textContent = text;
  ui.log.prepend(node);
}

function logMessage(message) {
  addLogEntry({ label: 'System', detail: 'Dino Dispatch', text: message });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

init();
