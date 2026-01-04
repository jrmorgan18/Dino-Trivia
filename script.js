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
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'Which direction is opposite of north on a compass?',
        choices: ['East', 'South', 'West', 'Up'],
        answer: 1,
        fact: 'South is the opposite direction from north on a compass rose.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Dinosaurs like Triceratops that ate plants are called what?',
        choices: ['Herbivores', 'Carnivores', 'Omnivores', 'Minerals'],
        answer: 0,
        fact: 'Herbivores eat plants, leaves, and fruit.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Which instrument do you strum with strings?',
        choices: ['Drum', 'Guitar', 'Flute', 'Triangle'],
        answer: 1,
        fact: 'A guitar makes sound when you strum or pluck its strings.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'What colors are on the United States flag?',
        choices: ['Red, white, and blue', 'Green and white', 'Blue and yellow', 'Orange and purple'],
        answer: 0,
        fact: 'The U.S. flag uses red, white, and blue to represent courage, purity, and justice.'
      },
      {
        category: 'Geometry',
        grade: '1',
        prompt: 'How many corners does a rectangle have?',
        choices: ['2', '3', '4', '6'],
        answer: 2,
        fact: 'Rectangles always have four corners, also called vertices.'
      }
    ]
  },
  {
    name: 'Stegosaurus Steps (Level 2)',
    description: 'Step into 1st and 2nd grade challenges with stego-strength detail.',
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
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'A shape with four equal sides and four right angles is called a what?',
        choices: ['Rectangle', 'Square', 'Triangle', 'Pentagon'],
        answer: 1,
        fact: 'Squares have four equal sides and four right angles.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'What do we call young frogs that still have tails?',
        choices: ['Hatchlings', 'Tadpoles', 'Calves', 'Chicks'],
        answer: 1,
        fact: 'Tadpoles hatch in water and later grow legs to become frogs.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'In baseball, how many bases must a player touch to score a run?',
        choices: ['2', '3', '4', '5'],
        answer: 2,
        fact: 'A player has to touch first, second, third, and home plate—four bases total.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 2, 4, 6, 8, __',
        choices: ['9', '10', '12', '14'],
        answer: 1,
        fact: 'The pattern adds 2 each time: 8 + 2 = 10.'
      },
      {
        category: 'Geography',
        grade: '2',
        prompt: 'Which landform is a tall, pointed piece of rock rising up from the ground?',
        choices: ['Valley', 'Mountain', 'River', 'Lake'],
        answer: 1,
        fact: 'Mountains rise high above the land around them.'
      }
    ]
  },
  {
    name: 'T-Rex Ridge (Level 3)',
    description: 'Stronger 2nd and 3rd grade thinking with T-Rex sized steps.',
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
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Earth travels around the sun once each year. What is this path called?',
        choices: ['Spin', 'Orbit', 'Loop', 'Slide'],
        answer: 1,
        fact: 'An orbit is the curved path something takes around another object in space.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which civil rights leader shared the “I Have a Dream” speech in 1963?',
        choices: ['George Washington', 'Martin Luther King Jr.', 'Susan B. Anthony', 'Neil Armstrong'],
        answer: 1,
        fact: 'Dr. Martin Luther King Jr. spoke about equality during the March on Washington.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'The imaginary line around Earth at 0° latitude is called what?',
        choices: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'International Date Line'],
        answer: 1,
        fact: 'The equator circles the middle of Earth and divides the Northern and Southern Hemispheres.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A triangle with all sides the same length is called what?',
        choices: ['Right triangle', 'Scalene triangle', 'Equilateral triangle', 'Isosceles triangle'],
        answer: 2,
        fact: 'Equilateral triangles have three equal sides and equal angles.'
      },
      {
        category: 'Music',
        grade: '2-3',
        prompt: 'In music, which term means to play softly?',
        choices: ['Forte', 'Piano', 'Allegro', 'Staccato'],
        answer: 1,
        fact: 'Piano (marked with a “p”) tells musicians to play quietly.'
      }
    ]
  },
  {
    name: 'Indominus Invasion (Level 4)',
    description: 'Challenge round with 3rd grade depth and quick thinking for daring explorers.',
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
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Rocks melted deep underground become liquid called what?',
        choices: ['Frost', 'Magma', 'Steam', 'Ice'],
        answer: 1,
        fact: 'Magma is melted rock inside Earth; when it erupts outside, it is called lava.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which document begins with “We the People”?',
        choices: ['The Declaration of Independence', 'The U.S. Constitution', 'The Emancipation Proclamation', 'The Bill of Rights'],
        answer: 1,
        fact: 'The preamble to the U.S. Constitution starts with “We the People.”'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call animals that hunt other animals for food?',
        choices: ['Herbivores', 'Producers', 'Predators', 'Seedlings'],
        answer: 2,
        fact: 'Predators hunt other animals, while prey are the animals they hunt.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'How many points is a touchdown worth in football?',
        choices: ['3', '6', '7', '10'],
        answer: 1,
        fact: 'A touchdown adds six points before any extra kicks or conversions.'
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

const fossilBuckets = {
  stegosaurus: {
    levelIndex: 1,
    title: 'Stegosaurus Steps',
    label: 'Level 2'
  },
  trex: {
    levelIndex: 2,
    title: 'T-Rex Ridge',
    label: 'Level 3'
  },
  indominus: {
    levelIndex: 3,
    title: 'Indominus Invasion',
    label: 'Level 4'
  }
};

const state = {
  levelIndex: 0,
  questionIndex: 0,
  shuffled: [],
  sessionScore: 0,
  sessionComplete: false,
  cumulativeScore: 0,
  sessionsPlayed: 0,
  levelCorrect: {},
  levelWrong: {},
  activeCategory: 'all',
  mode: 'level',
  canAdvance: true,
  fossils: {
    stegosaurus: 0,
    trex: 0,
    indominus: 0
  }
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
  levelSelect: document.getElementById('level-select'),
  categorySelect: document.getElementById('category-select'),
  logTemplate: document.getElementById('log-item-template'),
  badgeTemplate: document.getElementById('badge-template'),
  fossilRows: {
    stegosaurus: document.getElementById('fossils-stegosaurus'),
    trex: document.getElementById('fossils-trex'),
    indominus: document.getElementById('fossils-indominus')
  },
  fossilCounts: {
    stegosaurus: document.getElementById('fossil-count-stegosaurus'),
    trex: document.getElementById('fossil-count-trex'),
    indominus: document.getElementById('fossil-count-indominus')
  }
};

function getRunKey() {
  return state.mode === 'category' ? `category:${state.activeCategory}` : state.levelIndex;
}

function getCurrentMeta() {
  if (state.mode === 'category') {
    return {
      name: `Category Run: ${state.activeCategory}`,
      description: 'Stay in one research bay and tackle only this category.',
      badge: 'Focused Dig',
      difficulty: 'Mixed',
      theme: 'steel'
    };
  }
  return levelData[state.levelIndex];
}

function populateSelectors() {
  ui.levelSelect.innerHTML = '';
  levelData.forEach((level, idx) => {
    const option = document.createElement('option');
    option.value = idx;
    option.textContent = `${level.name}`;
    ui.levelSelect.appendChild(option);
  });

  const categories = new Set();
  levelData.forEach(level =>
    level.questions.forEach(q => categories.add(q.category))
  );
  Array.from(categories)
    .sort()
    .forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      ui.categorySelect.appendChild(option);
    });

  ui.levelSelect.value = '0';
  ui.categorySelect.value = 'all';
}

function prepareCategory(category) {
  state.mode = 'category';
  state.activeCategory = category;
  ui.categorySelect.value = category;
  state.questionIndex = 0;
  const pool = levelData.flatMap(level => level.questions.filter(q => q.category === category));
  state.shuffled = shuffle([...pool]);
  const runKey = getRunKey();
  state.levelCorrect[runKey] = 0;
  state.levelWrong[runKey] = 0;
  state.canAdvance = false;
  ui.progressBar.style.width = '0%';
  renderLevelInfo();
  ui.questionText.textContent = state.shuffled.length
    ? `Press "Start Adventure" to begin this ${category} run.`
    : `No questions available for ${category} yet.`;
  ui.choices.innerHTML = '';
  ui.feedback.textContent = '';
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = true;
  ui.startBtn.textContent = `Start ${category}`;
}

function init() {
  populateSelectors();
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
  ui.levelSelect.addEventListener('change', () => {
    state.mode = 'level';
    state.activeCategory = 'all';
    ui.categorySelect.value = 'all';
    prepareLevel(Number(ui.levelSelect.value) || 0);
  });
  ui.categorySelect.addEventListener('change', (event) => {
    const chosen = event.target.value;
    if (chosen === 'all') {
      state.mode = 'level';
      prepareLevel(Number(ui.levelSelect.value) || 0);
    } else {
      prepareCategory(chosen);
    }
  });
}

function onStartClick() {
  if (state.sessionComplete) {
    restartSession();
    return;
  }

  const selectedCategory = ui.categorySelect.value;
  const selectedLevel = Number(ui.levelSelect.value) || 0;
  const levelFinished = state.questionIndex >= state.shuffled.length && state.shuffled.length > 0;

  if (selectedCategory !== 'all') {
    prepareCategory(selectedCategory);
    startLevel();
    return;
  }

  if (levelFinished) {
    const hasNextLevel = state.levelIndex < levelData.length - 1;
    if (hasNextLevel && state.mode === 'level' && state.canAdvance) {
      const nextIndex = state.levelIndex + 1;
      prepareLevel(nextIndex);
      ui.levelSelect.value = String(nextIndex);
    } else {
      prepareLevel(selectedLevel);
    }
  } else if (state.mode !== 'level' || state.levelIndex !== selectedLevel) {
    prepareLevel(selectedLevel);
  }

  startLevel();
}

function prepareLevel(index) {
  state.mode = 'level';
  state.activeCategory = 'all';
  state.levelIndex = index;
  ui.levelSelect.value = String(index);
  state.questionIndex = 0;
  state.shuffled = shuffle([...levelData[index].questions]);
  const runKey = getRunKey();
  state.levelCorrect[runKey] = 0;
  state.levelWrong[runKey] = 0;
  state.canAdvance = true;
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
  const level = getCurrentMeta();
  ui.levelName.textContent = level.name;
  ui.levelDescription.textContent = level.description;
  ui.badgeRow.innerHTML = '';
  const badge = ui.badgeTemplate.content.cloneNode(true);
  badge.querySelector('.badge').textContent = `${level.difficulty} • ${level.badge}`;
  ui.badgeRow.appendChild(badge);
}

function startLevel() {
  const meta = getCurrentMeta();
  if (!state.shuffled.length) {
    ui.feedback.textContent = `No questions loaded for ${meta.name}. Pick another option.`;
    return;
  }
  ui.startBtn.disabled = true;
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = true;
  renderQuestion();
}

function renderQuestion() {
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
  const dinoKey = getDinoKeyForLevelIndex(state.levelIndex);
  const runKey = getRunKey();
  if (isCorrect) {
    state.sessionScore += 10;
    state.levelCorrect[runKey] = (state.levelCorrect[runKey] || 0) + 1;
    if (dinoKey) {
      addFossil(dinoKey);
    }
  } else {
    state.levelWrong[runKey] = (state.levelWrong[runKey] || 0) + 1;
  }

  choiceButtons[choiceIndex].classList.add(isCorrect ? 'correct' : 'incorrect');
  choiceButtons[current.answer].classList.add('correct');

  const fossilNote = isCorrect && dinoKey ? ` +1 ${formatDinoName(dinoKey)} fossil!` : '';
  ui.feedback.textContent = isCorrect
    ? `🦕 Correct! ${current.fact}${fossilNote ? ` ${fossilNote}` : ''}`
    : `🦖 Not quite. ${current.fact}`;

  const levelLabel = getCurrentMeta().name;
  addLogEntry({
    label: `${levelLabel}`,
    detail: `${current.category} • ${current.grade}`,
    text: `${current.prompt} → ${isCorrect ? 'Correct' : 'Try again next time'}${fossilNote ? ` (${fossilNote.trim()})` : ''}`
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
  renderQuestion();
}

function finishLevel() {
  ui.nextBtn.disabled = true;
  ui.summaryBtn.disabled = false;
  ui.startBtn.disabled = false;
  const runKey = getRunKey();
  const meta = getCurrentMeta();
  const correctCount = state.levelCorrect[runKey] || 0;
  const wrongCount = state.levelWrong[runKey] || 0;
  const total = state.shuffled.length || 1;
  const canAdvanceLevel = wrongCount <= 3;
  if (state.mode === 'level') {
    state.canAdvance = canAdvanceLevel;
  }

  if (state.mode === 'category') {
    ui.startBtn.textContent = `Replay ${state.activeCategory}`;
  } else if (!canAdvanceLevel && state.levelIndex < levelData.length - 1) {
    ui.startBtn.textContent = 'Replay Level';
  } else if (state.levelIndex < levelData.length - 1) {
    ui.startBtn.textContent = 'Advance to Next Level';
  } else {
    ui.startBtn.textContent = 'Play Again';
  }

  const advanceNote = state.mode === 'level' && !canAdvanceLevel && state.levelIndex < levelData.length - 1
    ? ' You missed more than 3 questions, so replay to unlock the next ridge.'
    : '';
  ui.feedback.textContent = `Level complete! ${correctCount} right, ${wrongCount} missed out of ${total}.${advanceNote}`;
  updateProgress(state.shuffled.length);

  if (state.mode === 'level' && state.levelIndex === levelData.length - 1 && !state.sessionComplete) {
    completeSession();
  }
}

function showSummary() {
  const level = getCurrentMeta();
  const runKey = getRunKey();
  const correctCount = state.levelCorrect[runKey] || 0;
  const wrongCount = state.levelWrong[runKey] || 0;
  const total = state.shuffled.length || (level.questions?.length ?? 0);
  const message = `Finished ${level.name}! ${correctCount} correct and ${wrongCount} missed out of ${total}. ${state.mode === 'level' && wrongCount > 3 ? 'Replay to advance.' : ''}`;
  ui.feedback.textContent = message;
  addLogEntry({
    label: `${level.name} summary`,
    detail: `${level.difficulty} • ${state.shuffled.length} questions`,
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
  state.levelWrong = {};
  state.mode = 'level';
  state.activeCategory = 'all';
  ui.categorySelect.value = 'all';
  ui.levelSelect.value = '0';
  prepareLevel(0);
  updateScoreboards();
  logMessage('New session started. Let\'s stomp into more trivia!');
}

function loadCumulative() {
  const stored = JSON.parse(localStorage.getItem('dinoTriviaStats') || '{}');
  state.cumulativeScore = stored.cumulativeScore || 0;
  state.sessionsPlayed = stored.sessionsPlayed || 0;
  state.fossils = { ...blankFossilState(), ...(stored.fossils || {}) };
}

function saveCumulative() {
  localStorage.setItem('dinoTriviaStats', JSON.stringify({
    cumulativeScore: state.cumulativeScore,
    sessionsPlayed: state.sessionsPlayed,
    fossils: state.fossils
  }));
}

function resetCumulative() {
  state.cumulativeScore = 0;
  state.sessionsPlayed = 0;
  state.fossils = blankFossilState();
  saveCumulative();
  updateScoreboards();
  logMessage('Cumulative fossils reset. Fresh tracks ahead!');
}

function updateScoreboards() {
  ui.sessionScore.textContent = state.sessionScore;
  ui.cumulativeScore.textContent = state.cumulativeScore;
  ui.sessionsPlayed.textContent = `Sessions played: ${state.sessionsPlayed}`;
  renderFossilBuckets();
}

function updateProgress(completedCount = state.questionIndex) {
  const total = state.shuffled.length || 1;
  const percent = Math.round((completedCount / total) * 100);
  ui.progressBar.style.width = `${percent}%`;
}

function blankFossilState() {
  return {
    stegosaurus: 0,
    trex: 0,
    indominus: 0
  };
}

function getDinoKeyForLevelIndex(index) {
  return Object.entries(fossilBuckets).find(([, details]) => details.levelIndex === index)?.[0] || null;
}

function formatDinoName(key) {
  return fossilBuckets[key]?.title || 'dinosaur';
}

function addFossil(dinoKey) {
  if (!dinoKey) return;
  state.fossils[dinoKey] = (state.fossils[dinoKey] || 0) + 1;
  renderFossilBuckets();
  saveCumulative();
}

function renderFossilBuckets() {
  Object.entries(fossilBuckets).forEach(([key]) => {
    const count = state.fossils[key] || 0;
    const row = ui.fossilRows[key];
    const countLabel = ui.fossilCounts[key];
    if (!row || !countLabel) return;

    row.innerHTML = '';
    if (!count) {
      const placeholder = document.createElement('span');
      placeholder.className = 'fossil-placeholder';
      placeholder.textContent = 'No fossils yet';
      row.appendChild(placeholder);
    } else {
      const iconsToShow = Math.min(count, 12);
      for (let i = 0; i < iconsToShow; i += 1) {
        const token = document.createElement('span');
        token.className = 'fossil-token';
        token.textContent = '🦴';
        row.appendChild(token);
      }
      if (count > iconsToShow) {
        const extra = document.createElement('span');
        extra.className = 'fossil-plus';
        extra.textContent = `+${count - iconsToShow}`;
        row.appendChild(extra);
      }
    }
    countLabel.textContent = `${count} ${count === 1 ? 'fossil' : 'fossils'}`;
  });
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

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js').catch((error) => {
        console.error('Service worker registration failed', error);
      });
    });
  }
}

init();
registerServiceWorker();
