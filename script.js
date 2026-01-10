const QUESTIONS_PER_RUN = 10;

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
      },
      {
        category: 'Science',
        grade: 'K',
        prompt: 'Which body part do you use to smell a flower?',
        choices: ['Nose', 'Knee', 'Hand', 'Ear'],
        answer: 0,
        fact: 'Your nose helps you smell because it senses scents in the air.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'Which direction does the sun rise from?',
        choices: ['North', 'South', 'East', 'West'],
        answer: 2,
        fact: 'The sun appears in the east each morning and sets in the west.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next: 🎈 🎈 ⭐ 🎈 🎈 ⭐ ?',
        choices: ['🎈', '⭐', '🎈 🎈', '🌙'],
        answer: 0,
        fact: 'The pattern repeats two balloons, then a star.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What do baseball players wear on their hands to catch the ball?',
        choices: ['Helmet', 'Glove', 'Cleats', 'Scarf'],
        answer: 1,
        fact: 'A baseball glove is padded to help players catch pitches and hits.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter ends the word "cat"?',
        choices: ['C', 'A', 'T', 'P'],
        answer: 2,
        fact: 'Cat spells C-A-T, so T is the ending sound.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'How many corners does a circle have?',
        choices: ['0', '2', '4', '6'],
        answer: 0,
        fact: 'Circles have no corners; they are perfectly round.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Which instrument do you blow air into to make sound?',
        choices: ['Drum', 'Flute', 'Guitar', 'Violin'],
        answer: 1,
        fact: 'Flutes make sound when air moves across the mouthpiece.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'Which animal hatches from an egg?',
        choices: ['Puppy', 'Kitten', 'Chicken', 'Foal'],
        answer: 2,
        fact: 'Chickens hatch from eggs, just like many reptiles and birds.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'How many days are in a weekend?',
        choices: ['1', '2', '3', '5'],
        answer: 1,
        fact: 'Saturday and Sunday make two weekend days.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which planet do we live on?',
        choices: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        answer: 0,
        fact: 'Earth is our home planet.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'What do we call frozen water?',
        choices: ['Ice', 'Steam', 'Sand', 'Smoke'],
        answer: 0,
        fact: 'When water freezes, it becomes ice.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which animal is a mammal?',
        choices: ['Fish', 'Dog', 'Frog', 'Butterfly'],
        answer: 1,
        fact: 'Mammals have hair or fur and drink milk as babies.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'What do bees make?',
        choices: ['Honey', 'Milk', 'Cheese', 'Bread'],
        answer: 0,
        fact: 'Bees collect nectar and make honey.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which season comes after winter?',
        choices: ['Spring', 'Fall', 'Summer', 'Night'],
        answer: 0,
        fact: 'Spring follows winter and brings warmer weather.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which part of a plant grows under the ground?',
        choices: ['Roots', 'Leaf', 'Flower', 'Stem'],
        answer: 0,
        fact: 'Roots anchor the plant and soak up water.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which sense do you use to taste?',
        choices: ['Tongue', 'Eyes', 'Ears', 'Hands'],
        answer: 0,
        fact: 'Your tongue helps you taste flavors.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'What do you call a baby cat?',
        choices: ['Kitten', 'Puppy', 'Calf', 'Chick'],
        answer: 0,
        fact: 'A baby cat is called a kitten.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'What gives us light during the day?',
        choices: ['Sun', 'Moon', 'Stars', 'Lantern'],
        answer: 0,
        fact: 'The sun is our nearest star and lights Earth in the daytime.'
      },
      {
        category: 'Science',
        grade: 'K-1',
        prompt: 'Which letter makes the /b/ sound in "ball"?',
        choices: ['B', 'D', 'P', 'T'],
        answer: 0,
        fact: 'The letter B says /b/ as in ball.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which word rhymes with "cat"?',
        choices: ['Bat', 'Cup', 'Dog', 'Sun'],
        answer: 0,
        fact: 'Cat and bat rhyme because they end with the same sound.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter is a vowel?',
        choices: ['A', 'B', 'C', 'D'],
        answer: 0,
        fact: 'A is a vowel. The vowels are A, E, I, O, U.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter ends the word "sun"?',
        choices: ['S', 'U', 'N', 'M'],
        answer: 2,
        fact: 'Sun ends with the letter N.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which word starts with the same sound as "snake"?',
        choices: ['Sun', 'Kite', 'Apple', 'Owl'],
        answer: 0,
        fact: 'Snake and sun both start with the /s/ sound.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter makes the /m/ sound?',
        choices: ['M', 'N', 'L', 'R'],
        answer: 0,
        fact: 'The letter M says /m/ like in moon.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which word has the long A sound?',
        choices: ['Cake', 'Cat', 'Dog', 'Pig'],
        answer: 0,
        fact: 'Cake has the long A sound.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which word begins with the letter T?',
        choices: ['Turtle', 'Apple', 'Snake', 'Owl'],
        answer: 0,
        fact: 'Turtle begins with the letter T.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which letter comes after D in the alphabet?',
        choices: ['E', 'F', 'C', 'B'],
        answer: 0,
        fact: 'The alphabet goes ... C, D, E.'
      },
      {
        category: 'Phonics',
        grade: 'K',
        prompt: 'Which word has the /sh/ sound?',
        choices: ['Ship', 'Sun', 'Cat', 'Tap'],
        answer: 0,
        fact: 'Ship starts with the /sh/ sound.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'How many sides does a square have?',
        choices: ['2', '3', '4', '6'],
        answer: 2,
        fact: 'Squares always have four sides.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape is round like a ball?',
        choices: ['Circle', 'Triangle', 'Square', 'Rectangle'],
        answer: 0,
        fact: 'A circle is round with no corners.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'How many corners does a rectangle have?',
        choices: ['2', '3', '4', '5'],
        answer: 2,
        fact: 'Rectangles have four corners.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'A triangle has how many corners?',
        choices: ['2', '3', '4', '6'],
        answer: 1,
        fact: 'Triangles have three corners.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape has four equal sides?',
        choices: ['Square', 'Rectangle', 'Triangle', 'Circle'],
        answer: 0,
        fact: 'All sides of a square are the same length.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape has no sides?',
        choices: ['Circle', 'Triangle', 'Square', 'Rectangle'],
        answer: 0,
        fact: 'Circles have no sides or corners.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape has three sides?',
        choices: ['Triangle', 'Circle', 'Square', 'Rectangle'],
        answer: 0,
        fact: 'A triangle has three straight sides.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape looks like a door?',
        choices: ['Rectangle', 'Triangle', 'Circle', 'Square'],
        answer: 0,
        fact: 'Most doors are rectangle shaped.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'Which shape has two long sides and two short sides?',
        choices: ['Rectangle', 'Triangle', 'Circle', 'Pentagon'],
        answer: 0,
        fact: 'Rectangles can have long and short sides.'
      },
      {
        category: 'Geometry',
        grade: 'K',
        prompt: 'How many corners does a square have?',
        choices: ['2', '3', '4', '8'],
        answer: 2,
        fact: 'Squares have four corners.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'What do you kick in soccer to score?',
        choices: ['Ball', 'Bat', 'Puck', 'Stick'],
        answer: 0,
        fact: 'Soccer is played with a ball.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'What is it called when the ball goes into the net?',
        choices: ['Goal', 'Strike', 'Serve', 'Point'],
        answer: 0,
        fact: 'A goal is scored when the ball crosses the goal line.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'Which player can use their hands in soccer?',
        choices: ['Goalie', 'Forward', 'Defender', 'Midfielder'],
        answer: 0,
        fact: 'Only the goalie can use hands inside the goal area.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'What do soccer players wear to protect their legs?',
        choices: ['Shin guards', 'Helmets', 'Gloves', 'Belts'],
        answer: 0,
        fact: 'Shin guards help protect players from kicks.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'How does a soccer game start?',
        choices: ['Kickoff', 'Jump ball', 'Face-off', 'Serve'],
        answer: 0,
        fact: 'A kickoff starts play at the center of the field.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'Soccer is played on a what?',
        choices: ['Field', 'Court', 'Lane', 'Ring'],
        answer: 0,
        fact: 'Soccer is played on a grassy field.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'What do players wear on their feet in soccer?',
        choices: ['Cleats', 'Skates', 'Slippers', 'Boots'],
        answer: 0,
        fact: 'Cleats help players grip the ground.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'What line does the ball cross to score a goal?',
        choices: ['Goal line', 'Sideline', 'Center line', 'Bench line'],
        answer: 0,
        fact: 'The ball must cross the goal line to count.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'Which team wins a soccer game?',
        choices: ['The team with more goals', 'The team with fewer goals', 'The team with taller players', 'The team with more shoes'],
        answer: 0,
        fact: 'The winner scores the most goals.'
      },
      {
        category: 'Sports (Soccer)',
        grade: '1',
        prompt: 'When the ball goes out on the sideline, how is it put back in?',
        choices: ['Throw-in', 'Free throw', 'Kickoff', 'Home run'],
        answer: 0,
        fact: 'A throw-in returns the ball to play.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 🔺 🔵 🔺 🔵 🔺',
        choices: ['🔵', '🔺', '⭐', '🟩'],
        answer: 0,
        fact: 'The pattern alternates triangle, circle.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 1, 2, 3, __',
        choices: ['4', '5', '6', '7'],
        answer: 0,
        fact: 'Counting forward after 3 is 4.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 10, 8, 6, __',
        choices: ['4', '5', '7', '9'],
        answer: 0,
        fact: 'The pattern counts down by 2.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? ⭐ ⭐ 🌙 ⭐ ⭐ 🌙',
        choices: ['⭐', '🌙', '☀️', '✨'],
        answer: 0,
        fact: 'Two stars, then a moon repeats.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 5, 10, 15, __',
        choices: ['18', '20', '22', '25'],
        answer: 1,
        fact: 'The pattern adds 5 each time.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 2, 4, 6, __',
        choices: ['7', '8', '9', '10'],
        answer: 1,
        fact: 'The pattern counts by 2s.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? ◻️ ◻️ 🔺 ◻️ ◻️ 🔺',
        choices: ['◻️', '🔺', '⚪', '⭐'],
        answer: 0,
        fact: 'Two squares, then a triangle repeats.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 1, 1, 2, 1, 1, 2, __',
        choices: ['1', '2', '3', '4'],
        answer: 0,
        fact: 'The pattern repeats 1, 1, 2.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? 🔵 🟢 🟢 🔵 🟢 🟢',
        choices: ['🔵', '🟢', '🟡', '🔴'],
        answer: 0,
        fact: 'One blue, two green repeats.'
      },
      {
        category: 'Patterns',
        grade: 'K-1',
        prompt: 'What comes next? A, B, A, B, __',
        choices: ['A', 'C', 'D', 'E'],
        answer: 0,
        fact: 'The pattern alternates A, B.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'A place with lots of trees is called a what?',
        choices: ['Forest', 'River', 'Island', 'City'],
        answer: 0,
        fact: 'Forests are areas filled with trees.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'What do maps show us?',
        choices: ['Places', 'Songs', 'Foods', 'Dreams'],
        answer: 0,
        fact: 'Maps help us find where places are.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'Which direction is opposite of east?',
        choices: ['West', 'North', 'South', 'Up'],
        answer: 0,
        fact: 'West is opposite of east.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'Which is a landform?',
        choices: ['Hill', 'Cloud', 'Rainbow', 'Star'],
        answer: 0,
        fact: 'Hills are landforms.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'What shape is Earth?',
        choices: ['Round like a ball', 'Square', 'Triangle', 'Flat like a table'],
        answer: 0,
        fact: 'Earth is round like a ball.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'On most maps, which direction is at the top?',
        choices: ['North', 'South', 'East', 'West'],
        answer: 0,
        fact: 'North is usually at the top of a map.'
      },
      {
        category: 'Geography',
        grade: '1',
        prompt: 'Which is a place where people live?',
        choices: ['City', 'Cloud', 'Ocean', 'Cave'],
        answer: 0,
        fact: 'Cities and towns are places where people live.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Which instrument do you tap with your hands?',
        choices: ['Drum', 'Trumpet', 'Violin', 'Flute'],
        answer: 0,
        fact: 'Drums are played by tapping or hitting.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Which instrument has black and white keys?',
        choices: ['Piano', 'Drum', 'Guitar', 'Maraca'],
        answer: 0,
        fact: 'A piano has keys you press to make sound.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'Which instrument do you shake to make sound?',
        choices: ['Maraca', 'Violin', 'Piano', 'Flute'],
        answer: 0,
        fact: 'Maracas make sound when you shake them.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'What do we call a musical story that people sing?',
        choices: ['Song', 'Map', 'Picture', 'Game'],
        answer: 0,
        fact: 'Songs use music and words.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'What are the strings on a guitar in order from top to bottom?',
        choices: ['EADEGB', 'GADEFA', 'EADGBE', 'GBADEA'],
        answer: 2,
        fact: 'EADGBE - Every Angry Dinosaur Growls Before Eating.'
      },
      {
        category: 'Music',
        grade: '1',
        prompt: 'How many colors are on the U.S. flag?',
        choices: ['3', '2', '4', '5'],
        answer: 0,
        fact: 'The flag has red, white, and blue.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'The Statue of Liberty stands in which city?',
        choices: ['New York City', 'Los Angeles', 'Chicago', 'Dallas'],
        answer: 0,
        fact: 'The Statue of Liberty is in New York Harbor.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'What do the stars on the U.S. flag stand for?',
        choices: ['States', 'Cities', 'Mountains', 'Rivers'],
        answer: 0,
        fact: 'Each star represents a U.S. state.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'Which bell is a famous symbol of American freedom?',
        choices: ['Liberty Bell', 'School Bell', 'Door Bell', 'Cow Bell'],
        answer: 0,
        fact: 'The Liberty Bell is a symbol of freedom.'
      },
      {
        category: 'U.S. History',
        grade: '1',
        prompt: 'What do we call the paper money in the United States?',
        choices: ['Dollars', 'Euros', 'Pesos', 'Yen'],
        answer: 0,
        fact: 'U.S. money is called dollars.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What do you use to hit a baseball?',
        choices: ['Bat', 'Stick', 'Racket', 'Club'],
        answer: 0,
        fact: 'A bat is used to hit the baseball.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'How many bases are on a baseball field?',
        choices: ['4', '3', '5', '6'],
        answer: 0,
        fact: 'There are four bases: first, second, third, and home.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'Which player throws the ball to the batter?',
        choices: ['Pitcher', 'Catcher', 'Runner', 'Coach'],
        answer: 0,
        fact: 'The pitcher throws the ball to start each play.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What do players wear to catch the ball safely?',
        choices: ['Glove', 'Hat', 'Scarf', 'Socks'],
        answer: 0,
        fact: 'A glove helps players catch hard-hit balls.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What is it called when the batter hits the ball and runs?',
        choices: ['Run', 'Serve', 'Kick', 'Goal'],
        answer: 0,
        fact: 'Batters run the bases after hitting the ball.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What is it called when the ball is hit over the fence?',
        choices: ['Home run', 'Free throw', 'Touchdown', 'Goal kick'],
        answer: 0,
        fact: 'A home run scores a run when the ball goes over the fence.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'How do you score a run?',
        choices: ['Touch home plate', 'Catch the ball', 'Kick the ball', 'Throw the bat'],
        answer: 0,
        fact: 'Touching home plate after the bases scores a run.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'Which player wears a helmet when batting?',
        choices: ['Batter', 'Umpire', 'Coach', 'Fan'],
        answer: 0,
        fact: 'Batters wear helmets for safety.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '1',
        prompt: 'What is the ball thrown to the batter called?',
        choices: ['Pitch', 'Pass', 'Serve', 'Kick'],
        answer: 0,
        fact: 'The pitcher throws a pitch to the batter.'
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
        category: 'U.S. History',
        grade: '1',
        prompt: 'Who is the current President of the USA?',
        choices: ['Barack Obama', 'Donald Trump', 'Boris Johnson', 'Geroge Bush'],
        answer: 1,
        fact: 'Donald Trump is the President of the United States of America in 2026.'
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
      },
      {
        category: 'Science',
        grade: '1',
        prompt: 'Mixing red and blue paint makes which color?',
        choices: ['Green', 'Purple', 'Orange', 'Pink'],
        answer: 1,
        fact: 'Red and blue combine to create purple.'
      },
      {
        category: 'Geography',
        grade: '2',
        prompt: 'What continent is China on?',
        choices: ['Asia', 'North America', 'Africa', 'Australia'],
        answer: 0,
        fact: 'China is located in the continent of Asia'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 5, 10, 15, 20, __',
        choices: ['21', '22', '25', '30'],
        answer: 2,
        fact: 'The pattern adds 5 each time: 20 + 5 = 25.'
      },
      {
        category: 'Music',
        grade: '2',
        prompt: 'Which instrument keeps the beat with sticks?',
        choices: ['Drum', 'Violin', 'Piano', 'Harp'],
        answer: 0,
        fact: 'Drummers often use sticks to tap rhythms.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'Who is the quartrback of the Baltimore Ravens?',
        choices: ['Tom Brady', 'Lamar Jackson', 'Patrick Mahomes', 'Joe Burrow'],
        answer: 1,
        fact: 'Lamar Jackson is the Ravens quarterback and a two-time NFL Most Valuable Player'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'What do we call the corner where two lines meet in a shape?',
        choices: ['Edge', 'Vertex', 'Side', 'Center'],
        answer: 1,
        fact: 'A vertex (plural: vertices) is where two sides connect.'
      },
      {
        category: 'U.S. History',
        grade: '2',
        prompt: 'Which document announced the American colonies were free from Great Britain?',
        choices: ['Bill of Rights', 'Declaration of Independence', 'U.S. Constitution', 'Mayflower Compact'],
        answer: 1,
        fact: 'The Declaration of Independence was adopted on July 4, 1776.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Animals that eat both plants and meat are called what?',
        choices: ['Carnivores', 'Herbivores', 'Omnivores', 'Detritivores'],
        answer: 2,
        fact: 'Omnivores like bears and raccoons can eat plants and other animals.'
      },
      {
        category: 'Science',
        grade: '1',
        prompt: 'Earth is how many planets from the Sun?',
        choices: ['5', '3', '1', '10'],
        answer: 1,
        fact: 'Earth is the third farthest planet from the Sun.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'Who is the shortstop of the Baltimore Orioles?',
        choices: ['Lamar Jackson', 'Gunnar Henderson', 'Barack Obama', 'Aaron Judge'],
        answer: 1,
        fact: 'Gunnar Henderson is the Orioles shortstop and best player.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'Which ocean is on the west coast of the United States?',
        choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 0,
        fact: 'The Pacific Ocean borders the U.S. west coast.'
      },
      {
        category: 'Science',
        grade: '1-2',
        prompt: 'Which is the largest planet?',
        choices: ['Jupiter', 'Mars', 'Saturn', 'Uranus'],
        answer: 0,
        fact: 'Jupiter is the largest planet in the solar system.'
      },
      {
        category: 'Science',
        grade: '1-2',
        prompt: 'Which galaxy is our solary system in?',
        choices: ['Milky Way', 'America', 'Andromeda', 'Antartica'],
        answer: 0,
        fact: 'The solar system including the sun and all its planets are in the Milky Way galaxy.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'What do we call a huge body of salt water?',
        choices: ['Ocean', 'Lake', 'Pond', 'Stream'],
        answer: 0,
        fact: 'Oceans are the largest bodies of salt water.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'What do we call land surrounded by water on all sides?',
        choices: ['Island', 'River', 'Canyon', 'Forest'],
        answer: 0,
        fact: 'Islands are surrounded by water.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'Which continent is the largest?',
        choices: ['Asia', 'Europe', 'Africa', 'Australia'],
        answer: 0,
        fact: 'Asia is the largest continent by area.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'A river is a moving body of what?',
        choices: ['Water', 'Sand', 'Rock', 'Air'],
        answer: 0,
        fact: 'Rivers are moving water.'
      },
      {
        category: 'Geography',
        grade: '1-2',
        prompt: 'Which building is the home of the President?',
        choices: ['White House', 'Capitol', 'Library', 'Museum'],
        answer: 0,
        fact: 'The President lives in the White House.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Which country did the US win its independence from?',
        choices: ['Great Britain', 'France', 'Canada', 'China'],
        answer: 0,
        fact: 'The United States won its independence from Great Britain in the Revolutionary War.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Which holiday celebrates American independence?',
        choices: ['Independence Day', 'Thanksgiving', 'Earth Day', 'Labor Day'],
        answer: 0,
        fact: 'Independence Day is July 4th.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'What is the name of the U.S. national anthem?',
        choices: ['The Star-Spangled Banner', 'Silent Night', 'Jingle Bells', 'Happy Birthday'],
        answer: 0,
        fact: 'The Star-Spangled Banner is the national anthem.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Which state was the first in the United States?',
        choices: ['Delaware', 'Texas', 'California', 'Florida'],
        answer: 0,
        fact: 'Delaware was the first state.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Which leader is on the penny coin?',
        choices: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Theodore Roosevelt'],
        answer: 0,
        fact: 'Abraham Lincoln is on the penny.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'How many stars are on the U.S. flag today?',
        choices: ['50', '13', '20', '5'],
        answer: 0,
        fact: 'There is one star for each state.'
      },
      {
        category: 'U.S. History',
        grade: '1-2',
        prompt: 'Which document lists the basic rules for the U.S. government?',
        choices: ['U.S. Constitution', 'Map of the World', 'Recipe Book', 'School Handbook'],
        answer: 0,
        fact: 'The U.S. Constitution is the nation’s main rulebook.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'Which note value lasts for two beats?',
        choices: ['Half note', 'Whole note', 'Quarter note', 'Eighth note'],
        answer: 0,
        fact: 'A half note is held for two beats.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'Which instrument has six strings and is strummed?',
        choices: ['Guitar', 'Flute', 'Drum', 'Trumpet'],
        answer: 0,
        fact: 'Guitars have strings you strum.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'What do we call the group of notes that form a tune?',
        choices: ['Melody', 'Map', 'Recipe', 'Poster'],
        answer: 0,
        fact: 'A melody is the main tune of a song.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'Which instrument is part of the percussion family?',
        choices: ['Drum', 'Clarinet', 'Violin', 'Flute'],
        answer: 0,
        fact: 'Drums are percussion instruments.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'What is a repeated beat pattern called?',
        choices: ['Rhythm', 'Map', 'Poem', 'Story'],
        answer: 0,
        fact: 'Rhythm is the repeated beat pattern in music.'
      },
      {
        category: 'Music',
        grade: '1-2',
        prompt: 'What do musicians read to know what to play?',
        choices: ['Music notes', 'Maps', 'Recipes', 'Calendars'],
        answer: 0,
        fact: 'Music notes show pitch and rhythm.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'How many points is a free throw worth?',
        choices: ['1', '2', '3', '4'],
        answer: 0,
        fact: 'A free throw is worth one point.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What do you call the orange ring you aim for?',
        choices: ['Hoop', 'Goalpost', 'Base', 'Net'],
        answer: 0,
        fact: 'The hoop is the ring of the basket.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What is it called when you take steps without dribbling?',
        choices: ['Traveling', 'Serving', 'Pitching', 'Offside'],
        answer: 0,
        fact: 'Traveling is moving without dribbling.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What do you call a pass that bounces on the floor?',
        choices: ['Bounce pass', 'Chest pass', 'Overhead pass', 'Kick'],
        answer: 0,
        fact: 'A bounce pass hits the floor once before reaching a teammate.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What is the area under the hoop called?',
        choices: ['Paint', 'Dugout', 'End zone', 'Crease'],
        answer: 0,
        fact: 'The painted area is often called the paint.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'How many players from one team are on the court?',
        choices: ['5', '6', '7', '9'],
        answer: 0,
        fact: 'Each basketball team has five players on the court.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What is a shot made close to the basket called?',
        choices: ['Layup', 'Home run', 'Punt', 'Serve'],
        answer: 0,
        fact: 'A layup is a close shot off the backboard or rim.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '2',
        prompt: 'What do you call it when the ball goes in the hoop?',
        choices: ['Basket', 'Touchdown', 'Goal kick', 'Strike'],
        answer: 0,
        fact: 'Scoring in basketball is often called making a basket.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Which state of matter is water when it is ice?',
        choices: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        answer: 0,
        fact: 'Ice is the solid form of water.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'What is a baby butterfly called?',
        choices: ['Caterpillar', 'Tadpole', 'Chick', 'Calf'],
        answer: 0,
        fact: 'Butterflies begin life as caterpillars.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Which tool helps you see tiny things?',
        choices: ['Microscope', 'Thermometer', 'Compass', 'Ruler'],
        answer: 0,
        fact: 'Microscopes magnify very small objects.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'What do we call a change from solid to liquid?',
        choices: ['Melting', 'Freezing', 'Condensing', 'Breaking'],
        answer: 0,
        fact: 'Melting turns a solid into a liquid.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Which planet is known as the Red Planet?',
        choices: ['Mars', 'Earth', 'Venus', 'Saturn'],
        answer: 0,
        fact: 'Mars looks red because of iron-rich dust.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'Which part of a plant makes seeds?',
        choices: ['Flower', 'Root', 'Stem', 'Leaf'],
        answer: 0,
        fact: 'Flowers can make seeds for new plants.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'What is the main source of energy for Earth?',
        choices: ['Sun', 'Moon', 'Stars', 'Wind'],
        answer: 0,
        fact: 'The sun provides light and heat energy.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'What are animals that only eat plants called?',
        choices: ['Herbivores', 'Carnivores', 'Omnivores', 'Predators'],
        answer: 0,
        fact: 'Herbivores eat only plants.'
      },
      {
        category: 'Science',
        grade: '2',
        prompt: 'How many sides does a pentagon have?',
        choices: ['5', '4', '6', '7'],
        answer: 0,
        fact: 'A pentagon has five sides.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'A shape with six sides is called a what?',
        choices: ['Hexagon', 'Pentagon', 'Triangle', 'Square'],
        answer: 0,
        fact: 'A hexagon has six sides.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'What do we call a line that divides a shape into two equal halves?',
        choices: ['Line of symmetry', 'Edge', 'Corner', 'Radius'],
        answer: 0,
        fact: 'A line of symmetry splits a shape into matching halves.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'How many sides does a hexagon have?',
        choices: ['6', '5', '7', '8'],
        answer: 0,
        fact: 'Hexagons have six sides.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'Which angle is shaped like a perfect corner of a square?',
        choices: ['Right angle', 'Acute angle', 'Obtuse angle', 'Straight angle'],
        answer: 0,
        fact: 'Right angles are 90 degrees.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'What is the perimeter of a square with side length 3?',
        choices: ['12', '6', '9', '15'],
        answer: 0,
        fact: 'Perimeter adds all sides: 3 + 3 + 3 + 3 = 12.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'Which shape has only three sides?',
        choices: ['Triangle', 'Square', 'Hexagon', 'Rectangle'],
        answer: 0,
        fact: 'Triangles have three sides.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'What is the name of a 3D shape that looks like a box?',
        choices: ['Rectangular prism', 'Sphere', 'Cone', 'Cylinder'],
        answer: 0,
        fact: 'A rectangular prism looks like a box.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'How many sides does a rectangle have?',
        choices: ['4', '3', '5', '6'],
        answer: 0,
        fact: 'Rectangles have four sides.'
      },
      {
        category: 'Geometry',
        grade: '2',
        prompt: 'What is the name for a shape with eight sides?',
        choices: ['Octagon', 'Hexagon', 'Pentagon', 'Triangle'],
        answer: 0,
        fact: 'An octagon has eight sides.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'How many outs are in one inning?',
        choices: ['3', '2', '4', '6'],
        answer: 0,
        fact: 'Each team gets three outs per inning.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What is it called when a batter reaches base after four balls?',
        choices: ['Walk', 'Strike', 'Foul', 'Tag'],
        answer: 0,
        fact: 'Four balls result in a walk.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'Which player catches the pitcher’s throws?',
        choices: ['Catcher', 'Shortstop', 'First baseman', 'Outfielder'],
        answer: 0,
        fact: 'The catcher receives pitches behind home plate.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What is it called when the ball is hit outside the foul lines?',
        choices: ['Foul ball', 'Home run', 'Strike', 'Steal'],
        answer: 0,
        fact: 'A foul ball lands outside the fair area.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What do you call taking a base while the pitcher throws?',
        choices: ['Steal', 'Serve', 'Dribble', 'Punt'],
        answer: 0,
        fact: 'A stolen base is taken while the ball is being pitched.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'Which base is touched after third base to score?',
        choices: ['Home plate', 'First base', 'Second base', 'Pitcher’s mound'],
        answer: 0,
        fact: 'Touching home plate scores a run.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What is it called when the batter swings and misses?',
        choices: ['Strike', 'Ball', 'Foul', 'Walk'],
        answer: 0,
        fact: 'A swing and miss is a strike.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'Which base is farthest from home plate?',
        choices: ['Second base', 'First base', 'Third base', 'Coach’s base'],
        answer: 0,
        fact: 'Second base is farthest from home plate.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What do you call a hit that lets the batter reach second base?',
        choices: ['Double', 'Single', 'Triple', 'Bunt'],
        answer: 0,
        fact: 'A double lets the batter reach second base.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2',
        prompt: 'What is the area between the foul lines called?',
        choices: ['Fair territory', 'Outfield', 'Dugout', 'Penalty box'],
        answer: 0,
        fact: 'Fair territory is where hits count.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 4, 8, 12, 16, __',
        choices: ['20', '18', '22', '24'],
        answer: 0,
        fact: 'The pattern adds 4 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? A, B, C, A, B, C, __',
        choices: ['A', 'B', 'D', 'E'],
        answer: 0,
        fact: 'The pattern repeats A, B, C.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What is the rule? 2, 5, 8, 11',
        choices: ['Add 3', 'Add 2', 'Subtract 1', 'Multiply by 2'],
        answer: 0,
        fact: 'The pattern adds 3 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 30, 25, 20, __',
        choices: ['15', '12', '10', '5'],
        answer: 0,
        fact: 'The pattern subtracts 5 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 7, 14, 21, __',
        choices: ['28', '24', '25', '30'],
        answer: 0,
        fact: 'The pattern adds 7 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 1, 4, 7, 10, __',
        choices: ['13', '11', '12', '14'],
        answer: 0,
        fact: 'The pattern adds 3 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 2, 4, 8, 16, __',
        choices: ['32', '18', '20', '24'],
        answer: 0,
        fact: 'The pattern doubles each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 9, 6, 3, __',
        choices: ['0', '1', '2', '4'],
        answer: 0,
        fact: 'The pattern subtracts 3 each time.'
      },
      {
        category: 'Patterns',
        grade: '1-2',
        prompt: 'What comes next? 11, 22, 33, __',
        choices: ['44', '40', '41', '45'],
        answer: 0,
        fact: 'The pattern adds 11 each time.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'What do players wear on their heads for safety?',
        choices: ['Helmet', 'Hat', 'Crown', 'Bandana'],
        answer: 0,
        fact: 'Football players wear helmets for protection.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'Which player usually throws the football?',
        choices: ['Quarterback', 'Kicker', 'Center', 'Referee'],
        answer: 0,
        fact: 'The quarterback passes the ball in most plays.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'What is the large area at each end of the field called?',
        choices: ['End zone', 'Dugout', 'Baseline', 'Paint'],
        answer: 0,
        fact: 'Teams score by getting the ball into the end zone.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'How many teams play on the field at the same time?',
        choices: ['2', '3', '4', '5'],
        answer: 0,
        fact: 'Two teams play against each other.'
      },
      {
        category: 'Sports (Football)',
        grade: '2',
        prompt: 'What does the kicker try to send the ball through?',
        choices: ['Goalposts', 'Basket', 'Net', 'Dugout'],
        answer: 0,
        fact: 'The ball must go between the goalposts to score a field goal.'
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
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'When clouds release water as rain or snow, what is it called?',
        choices: ['Condensation', 'Precipitation', 'Evaporation', 'Melting'],
        answer: 1,
        fact: 'Precipitation returns water to Earth as part of the water cycle.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What is the rule? 3, 6, 12, 24',
        choices: ['Add 3 each time', 'Multiply by 2 each time', 'Add 6 then subtract 1', 'Multiply by 3 each time'],
        answer: 1,
        fact: 'Each number doubles, so the pattern multiplies by 2.'
      },
      {
        category: 'Music',
        grade: '3',
        prompt: 'Which musical term means to play loudly?',
        choices: ['Forte', 'Piano', 'Crescendo', 'Legato'],
        answer: 0,
        fact: 'Forte (marked with an “f”) directs musicians to play with strong volume.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A square has sides 5 units long. What is its perimeter?',
        choices: ['10 units', '15 units', '20 units', '25 units'],
        answer: 2,
        fact: 'Perimeter adds all sides: 5 + 5 + 5 + 5 = 20 units.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was the first person to walk on the moon in 1969?',
        choices: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Sally Ride'],
        answer: 1,
        fact: 'Neil Armstrong stepped onto the moon during Apollo 11.'
      },
      {
        category: 'Science',
        grade: '2-3',
        prompt: 'Which organ pumps blood through your body?',
        choices: ['Lungs', 'Brain', 'Heart', 'Stomach'],
        answer: 2,
        fact: 'Your heart beats to move blood and oxygen to all parts of the body.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'Taking the ball away from someone while they dribble is called what?',
        choices: ['Block', 'Steal', 'Serve', 'Strike'],
        answer: 1,
        fact: 'A steal happens when you legally take possession from another player.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What describes most deserts?',
        choices: ['Snowy and wet', 'Dry with little rain', 'Full of lakes', 'Covered in forests'],
        answer: 1,
        fact: 'Deserts receive very little rainfall, making them dry environments.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'After hitting the ball, which base do you run to first?',
        choices: ['Home plate', 'Second base', 'Third base', 'First base'],
        answer: 3,
        fact: 'Base runners sprint to first base right after a hit.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'How many downs does a team have to move 10 yards?',
        choices: ['4', '3', '2', '5'],
        answer: 0,
        fact: 'Teams get four downs to advance 10 yards.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'What is a catch made near the sideline called if both feet stay in bounds?',
        choices: ['Completed pass', 'Home run', 'Free throw', 'Bunt'],
        answer: 0,
        fact: 'A pass is complete when the receiver stays in bounds.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'How many points is a safety worth?',
        choices: ['2', '3', '6', '1'],
        answer: 0,
        fact: 'A safety scores two points for the defense.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'Which position snaps the ball to the quarterback?',
        choices: ['Center', 'Kicker', 'Referee', 'Receiver'],
        answer: 0,
        fact: 'The center hikes the ball to start the play.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'What is it called when a defender catches the quarterback behind the line?',
        choices: ['Sack', 'Serve', 'Double play', 'Offside'],
        answer: 0,
        fact: 'A sack happens when the quarterback is tackled behind the line.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'How many points is a field goal worth?',
        choices: ['3', '1', '2', '6'],
        answer: 0,
        fact: 'Field goals are worth three points.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'What do you call catching a pass thrown by the other team?',
        choices: ['Interception', 'Dribble', 'Save', 'Bunt'],
        answer: 0,
        fact: 'An interception happens when the defense catches a pass.'
      },
      {
        category: 'Sports (Football)',
        grade: '2-3',
        prompt: 'What is the main goal on offense?',
        choices: ['Score points', 'Collect fouls', 'Hold the ball forever', 'Stay out of bounds'],
        answer: 0,
        fact: 'Offense tries to score points with touchdowns and field goals.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is the perimeter of a rectangle with sides 6 and 4?',
        choices: ['20 units', '10 units', '12 units', '24 units'],
        answer: 0,
        fact: 'Perimeter is 6 + 6 + 4 + 4 = 20 units.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A right angle measures how many degrees?',
        choices: ['90', '45', '180', '360'],
        answer: 0,
        fact: 'Right angles measure 90 degrees.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A triangle with two equal sides is called what?',
        choices: ['Isosceles', 'Scalene', 'Equilateral', 'Right'],
        answer: 0,
        fact: 'Isosceles triangles have two equal sides.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is the area of a square with side length 4?',
        choices: ['16 square units', '8 square units', '12 square units', '20 square units'],
        answer: 0,
        fact: 'Area is side × side: 4 × 4 = 16.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many sides does a hexagon have?',
        choices: ['6', '5', '7', '8'],
        answer: 0,
        fact: 'Hexagons have six sides.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'A line that splits a shape into two equal halves is called?',
        choices: ['Line of symmetry', 'Diagonal', 'Radius', 'Vertex'],
        answer: 0,
        fact: 'A line of symmetry divides a shape into matching halves.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many edges does a cube have?',
        choices: ['12', '6', '8', '10'],
        answer: 0,
        fact: 'A cube has 12 edges.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'Which angle is larger than a right angle?',
        choices: ['Obtuse', 'Acute', 'Straight', 'Zero'],
        answer: 0,
        fact: 'Obtuse angles are greater than 90 degrees.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What do we call a 3D shape with two circular faces?',
        choices: ['Cylinder', 'Cone', 'Sphere', 'Pyramid'],
        answer: 0,
        fact: 'Cylinders have two circular faces.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many vertices does a triangle have?',
        choices: ['3', '4', '5', '6'],
        answer: 0,
        fact: 'Triangles have three vertices.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was the first President of the United States?',
        choices: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Abraham Lincoln'],
        answer: 0,
        fact: 'George Washington served as the first U.S. president.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What year is celebrated as American Independence?',
        choices: ['1776', '1492', '1865', '1918'],
        answer: 0,
        fact: 'The Declaration of Independence was adopted in 1776.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which war was fought between the North and South in the U.S.?',
        choices: ['Civil War', 'World War II', 'Revolutionary War', 'Cold War'],
        answer: 0,
        fact: 'The Civil War was fought between the Union and the Confederacy.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who wrote the Declaration of Independence?',
        choices: ['Thomas Jefferson', 'Benjamin Franklin', 'George Washington', 'John Hancock'],
        answer: 0,
        fact: 'Thomas Jefferson was the main author.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What is the name of the U.S. Capitol building’s city?',
        choices: ['Washington, DC', 'Philadelphia', 'New York City', 'Boston'],
        answer: 0,
        fact: 'The U.S. Capitol is in Washington, DC.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was President during the Civil War?',
        choices: ['Abraham Lincoln', 'Ulysses S. Grant', 'George Washington', 'Franklin Roosevelt'],
        answer: 0,
        fact: 'Abraham Lincoln led the nation during the Civil War.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which famous speech begins with “Four score and seven years ago”?',
        choices: ['Gettysburg Address', 'I Have a Dream', 'Declaration of Independence', 'Preamble'],
        answer: 0,
        fact: 'The Gettysburg Address was given by Abraham Lincoln.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was the first female to fly solo across the Atlantic?',
        choices: ['Amelia Earhart', 'Sally Ride', 'Harriet Tubman', 'Susan B. Anthony'],
        answer: 0,
        fact: 'Amelia Earhart flew across the Atlantic in 1932.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What is the nickname for the U.S. Constitution’s first 10 amendments?',
        choices: ['Bill of Rights', 'Articles of Confederation', 'Federalist Papers', 'Declaration'],
        answer: 0,
        fact: 'The Bill of Rights protects basic freedoms.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What do we call the journey of settlers to the West in covered wagons?',
        choices: ['Oregon Trail', 'Silk Road', 'Pony Express', 'Underground Railroad'],
        answer: 0,
        fact: 'The Oregon Trail was a route to the West.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'How many strikes are in a strikeout?',
        choices: ['3', '2', '4', '5'],
        answer: 0,
        fact: 'Three strikes make a strikeout.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'How many innings are in a standard baseball game?',
        choices: ['9', '7', '5', '12'],
        answer: 0,
        fact: 'A regulation game has nine innings.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'What is it called when a batter hits safely and reaches first base?',
        choices: ['Single', 'Double', 'Triple', 'Strike'],
        answer: 0,
        fact: 'A single is a hit that reaches first base.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'How many players are on the field for one team?',
        choices: ['9', '10', '8', '11'],
        answer: 0,
        fact: 'Nine players field in baseball.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'What do you call a hit that reaches third base?',
        choices: ['Triple', 'Single', 'Double', 'Home run'],
        answer: 0,
        fact: 'A triple lets the batter reach third base.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'Which player stands behind home plate?',
        choices: ['Catcher', 'Pitcher', 'Shortstop', 'Coach'],
        answer: 0,
        fact: 'The catcher receives pitches behind home plate.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'What is it called when the ball is hit over the outfield fence?',
        choices: ['Home run', 'Strike', 'Foul', 'Bunt'],
        answer: 0,
        fact: 'A home run scores at least one run.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'What is a play called when two outs are made in one play?',
        choices: ['Double play', 'Triple play', 'Walk', 'Bunt'],
        answer: 0,
        fact: 'A double play gets two outs in one play.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'Which base is closest to home plate?',
        choices: ['First base', 'Second base', 'Third base', 'Outfield base'],
        answer: 0,
        fact: 'First base is the closest base to home plate.'
      },
      {
        category: 'Sports (Baseball)',
        grade: '2-3',
        prompt: 'What is a short, soft hit called?',
        choices: ['Bunt', 'Fastball', 'Curveball', 'Steal'],
        answer: 0,
        fact: 'A bunt is a light tap of the ball.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 6, 12, 18, 24, __',
        choices: ['30', '28', '32', '36'],
        answer: 0,
        fact: 'The pattern adds 6 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What is the rule? 2, 4, 8, 16',
        choices: ['Multiply by 2', 'Add 2', 'Subtract 1', 'Multiply by 3'],
        answer: 0,
        fact: 'Each number doubles.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 50, 45, 40, __',
        choices: ['35', '30', '42', '38'],
        answer: 0,
        fact: 'The pattern subtracts 5 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 1, 3, 6, 10, __',
        choices: ['15', '13', '12', '14'],
        answer: 0,
        fact: 'The pattern adds 2, 3, 4, 5.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 9, 18, 27, __',
        choices: ['36', '30', '33', '35'],
        answer: 0,
        fact: 'The pattern adds 9 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 100, 90, 80, __',
        choices: ['70', '75', '60', '85'],
        answer: 0,
        fact: 'The pattern subtracts 10 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 4, 9, 14, 19, __',
        choices: ['24', '23', '25', '26'],
        answer: 0,
        fact: 'The pattern adds 5 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 3, 6, 9, 12, __',
        choices: ['15', '13', '14', '16'],
        answer: 0,
        fact: 'The pattern adds 3 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What comes next? 12, 10, 8, 6, __',
        choices: ['4', '5', '3', '2'],
        answer: 0,
        fact: 'The pattern subtracts 2 each time.'
      },
      {
        category: 'Patterns',
        grade: '2-3',
        prompt: 'What is the rule? 5, 10, 20, 40',
        choices: ['Multiply by 2', 'Add 5', 'Subtract 5', 'Multiply by 3'],
        answer: 0,
        fact: 'Each number doubles.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What part of the plant makes food using sunlight?',
        choices: ['Leaves', 'Roots', 'Stem', 'Flower'],
        answer: 0,
        fact: 'Leaves use sunlight to make food.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call the process of water turning into vapor?',
        choices: ['Evaporation', 'Condensation', 'Precipitation', 'Collection'],
        answer: 0,
        fact: 'Evaporation turns liquid water into water vapor.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which planet is known for its rings?',
        choices: ['Saturn', 'Mars', 'Earth', 'Mercury'],
        answer: 0,
        fact: 'Saturn is famous for its large rings.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call animals that eat only meat?',
        choices: ['Carnivores', 'Herbivores', 'Omnivores', 'Decomposers'],
        answer: 0,
        fact: 'Carnivores eat meat.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which organ helps you breathe?',
        choices: ['Lungs', 'Heart', 'Brain', 'Stomach'],
        answer: 0,
        fact: 'Lungs move air in and out.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call a group of the same kind of living things?',
        choices: ['Population', 'Mountain', 'Glacier', 'River'],
        answer: 0,
        fact: 'A population is a group of the same species.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which part of the water cycle forms clouds?',
        choices: ['Condensation', 'Evaporation', 'Runoff', 'Collection'],
        answer: 0,
        fact: 'Condensation turns water vapor into tiny droplets.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which simple machine is a see-saw?',
        choices: ['Lever', 'Pulley', 'Wheel and axle', 'Screw'],
        answer: 0,
        fact: 'A see-saw is an example of a lever.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call the change from liquid to solid?',
        choices: ['Freezing', 'Melting', 'Boiling', 'Evaporating'],
        answer: 0,
        fact: 'Freezing turns liquids into solids.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which continent is the United States on?',
        choices: ['North America', 'South America', 'Europe', 'Asia'],
        answer: 0,
        fact: 'The U.S. is in North America.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call lines that run east-west on a globe?',
        choices: ['Latitude', 'Longitude', 'Equator', 'Meridians'],
        answer: 0,
        fact: 'Latitude lines run east-west.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What is the largest ocean on Earth?',
        choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 0,
        fact: 'The Pacific is the largest ocean.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call the imaginary line at 0° latitude?',
        choices: ['Equator', 'Prime Meridian', 'Tropic of Capricorn', 'Arctic Circle'],
        answer: 0,
        fact: 'The equator is at 0° latitude.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which hemisphere is the United States in?',
        choices: ['Northern Hemisphere', 'Southern Hemisphere', 'Eastern Hemisphere', 'Antarctic Hemisphere'],
        answer: 0,
        fact: 'The U.S. is in the Northern Hemisphere.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call a map that shows mountains, rivers, and plains?',
        choices: ['Physical map', 'Political map', 'Road map', 'Weather map'],
        answer: 0,
        fact: 'Physical maps show natural features.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which desert is the largest in Africa?',
        choices: ['Sahara', 'Gobi', 'Mojave', 'Kalahari'],
        answer: 0,
        fact: 'The Sahara is the largest desert in Africa.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What is a narrow strip of land connecting two larger land areas?',
        choices: ['Isthmus', 'Delta', 'Peninsula', 'Canyon'],
        answer: 0,
        fact: 'An isthmus is a narrow land bridge.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call a huge area of ice that moves slowly?',
        choices: ['Glacier', 'Volcano', 'Island', 'Lagoon'],
        answer: 0,
        fact: 'Glaciers are large masses of moving ice.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which line divides Earth into Eastern and Western Hemispheres?',
        choices: ['Prime Meridian', 'Equator', 'International Date Line', 'Tropic of Cancer'],
        answer: 0,
        fact: 'The Prime Meridian marks 0° longitude.'
      },
      {
        category: 'Music',
        grade: '2-3',
        prompt: 'Which instrument is in the brass family?',
        choices: ['Trumpet', 'Flute', 'Violin', 'Clarinet'],
        answer: 0,
        fact: 'The trumpet is a brass instrument.'
      },
      {
        category: 'Music',
        grade: '2-3',
        prompt: 'What do we call two or more notes played together?',
        choices: ['Chord', 'Beat', 'Rest', 'Scale'],
        answer: 0,
        fact: 'A chord is made of multiple notes played together.'
      },
      {
        category: 'Music',
        grade: '2-3',
        prompt: 'How many beats does a whole note get in 4/4 time?',
        choices: ['4', '2', '1', '3'],
        answer: 0,
        fact: 'A whole note lasts four beats in 4/4 time.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is it called when a player grabs a missed shot?',
        choices: ['Rebound', 'Steal', 'Assist', 'Block'],
        answer: 0,
        fact: 'A rebound is gaining possession after a missed shot.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What do we call passing to a teammate who scores?',
        choices: ['Assist', 'Serve', 'Strike', 'Punt'],
        answer: 0,
        fact: 'An assist is a pass that leads to a basket.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is a foul?',
        choices: ['Breaking a rule', 'Scoring', 'Passing', 'Rebounding'],
        answer: 0,
        fact: 'A foul is a rule violation.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'How many points is a shot inside the three-point line worth?',
        choices: ['2', '1', '3', '4'],
        answer: 0,
        fact: 'A regular field goal is worth two points.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'How many quarters are in a typical basketball game?',
        choices: ['4', '2', '3', '5'],
        answer: 0,
        fact: 'Games are divided into four quarters.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What do you call a shot that bounces off the backboard into the hoop?',
        choices: ['Bank shot', 'Free throw', 'Serve', 'Punt'],
        answer: 0,
        fact: 'A bank shot uses the backboard.'
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
        choices: ['Racket', 'Bat', 'Stick', 'Paddle'],
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
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Plants use sunlight, water, and carbon dioxide to make food in what process?',
        choices: ['Germination', 'Photosynthesis', 'Migration', 'Reflection'],
        answer: 1,
        fact: 'Photosynthesis creates sugar for the plant and releases oxygen.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'The Prime Meridian passes through which city?',
        choices: ['Paris', 'Greenwich, London', 'New York City', 'Tokyo'],
        answer: 1,
        fact: 'Greenwich, London marks 0° longitude, the start of the Prime Meridian.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which document announced freedom for enslaved people in the Confederacy?',
        choices: ['Emancipation Proclamation', 'Articles of Confederation', 'Federalist Papers', 'Gettysburg Address'],
        answer: 0,
        fact: 'President Abraham Lincoln issued the Emancipation Proclamation in 1863.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What do we call lines that never meet because they are always the same distance apart?',
        choices: ['Intersecting', 'Parallel', 'Perpendicular', 'Curved'],
        answer: 1,
        fact: 'Parallel lines run side by side and never cross.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What is the rule? 9, 12, 15, 18',
        choices: ['Add 2 each time', 'Add 3 each time', 'Multiply by 2', 'Subtract 1 each time'],
        answer: 1,
        fact: 'Each step adds 3 to get to the next number.'
      },
      {
        category: 'Music',
        grade: '3',
        prompt: 'Which tempo marking means to play fast?',
        choices: ['Adagio', 'Andante', 'Allegro', 'Piano'],
        answer: 2,
        fact: 'Allegro tells musicians to play lively and fast.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What is the solid rock layer beneath soil called?',
        choices: ['Clay', 'Bedrock', 'Sand', 'Gravel'],
        answer: 1,
        fact: 'Bedrock is the hard layer of rock under loose soil and sediment.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'Kicking the ball through the goalposts after a touchdown for one point is called what?',
        choices: ['Kickoff', 'Punt', 'Extra point', 'Safety'],
        answer: 2,
        fact: 'Teams often try an extra point kick to add one more point after a touchdown.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'A chain of many mountains together is called a what?',
        choices: ['Island', 'Plateau', 'Mountain range', 'Canyon'],
        answer: 2,
        fact: 'A mountain range is a connected line of mountains, like the Rockies.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which tool measures temperature?',
        choices: ['Compass', 'Thermometer', 'Microscope', 'Scale'],
        answer: 1,
        fact: 'A thermometer shows how hot or cold something is.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which ocean touches the west coast of South America?',
        choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        answer: 0,
        fact: 'The Pacific Ocean borders the west coast of South America.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call a low area where a river flows?',
        choices: ['Valley', 'Plateau', 'Desert', 'Mesa'],
        answer: 0,
        fact: 'Rivers often flow through valleys.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which continent is home to the Amazon Rainforest?',
        choices: ['South America', 'Africa', 'Asia', 'Europe'],
        answer: 0,
        fact: 'The Amazon Rainforest is in South America.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call the study of Earth’s land and people?',
        choices: ['Geography', 'Geometry', 'Biology', 'Chemistry'],
        answer: 0,
        fact: 'Geography studies Earth’s places and people.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call the imaginary line at 0° longitude?',
        choices: ['Prime Meridian', 'Equator', 'Tropic of Cancer', 'International Date Line'],
        answer: 0,
        fact: 'The Prime Meridian is 0° longitude.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which climate is usually hot and dry?',
        choices: ['Desert', 'Tundra', 'Rainforest', 'Temperate'],
        answer: 0,
        fact: 'Deserts are known for hot, dry conditions.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which is a natural resource?',
        choices: ['Water', 'Plastic', 'Glass', 'Paper'],
        answer: 0,
        fact: 'Water is a natural resource from Earth.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'What do we call a large body of land surrounded by oceans?',
        choices: ['Continent', 'Island', 'Lake', 'River'],
        answer: 0,
        fact: 'Continents are the largest land areas.'
      },
      {
        category: 'Geography',
        grade: '3',
        prompt: 'Which ocean is the smallest?',
        choices: ['Arctic Ocean', 'Indian Ocean', 'Atlantic Ocean', 'Pacific Ocean'],
        answer: 0,
        fact: 'The Arctic Ocean is the smallest.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'What is the goal of lacrosse?',
        choices: ['Score by shooting into the net', 'Knock down pins', 'Hit a home run', 'Kick a field goal'],
        answer: 0,
        fact: 'Teams score by shooting the ball into the goal.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'What is the circle in front of the goal called?',
        choices: ['Crease', 'Dugout', 'Paint', 'Base'],
        answer: 0,
        fact: 'The crease protects the goal area.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'How does play start at the beginning of a period?',
        choices: ['Faceoff', 'Kickoff', 'Jump ball', 'Serve'],
        answer: 0,
        fact: 'A faceoff starts play in lacrosse.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'Which player guards the net in lacrosse?',
        choices: ['Goalie', 'Pitcher', 'Center', 'Referee'],
        answer: 0,
        fact: 'The goalie protects the goal.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'What is it called when you carry the ball in the stick pocket?',
        choices: ['Cradling', 'Dribbling', 'Bunting', 'Serving'],
        answer: 0,
        fact: 'Cradling helps keep the ball in the stick.'
      },
      {
        category: 'Sports (Lacrosse)',
        grade: '3',
        prompt: 'What do defenders try to do?',
        choices: ['Stop the other team from scoring', 'Serve the ball', 'Hit a home run', 'Guard the bases'],
        answer: 0,
        fact: 'Defenders protect the goal and block shots.'
      },
      {
        category: 'Music',
        grade: '3',
        prompt: 'Which note value is worth one beat in 4/4 time?',
        choices: ['Quarter note', 'Half note', 'Whole note', 'Eighth note'],
        answer: 0,
        fact: 'A quarter note lasts one beat.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call the energy from the sun?',
        choices: ['Solar energy', 'Sound energy', 'Wind energy', 'Food energy'],
        answer: 0,
        fact: 'Solar energy comes from sunlight.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which layer of Earth do we live on?',
        choices: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
        answer: 0,
        fact: 'We live on Earth’s crust.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call a group of different living things and their environment?',
        choices: ['Ecosystem', 'Population', 'Mountain', 'Weather'],
        answer: 0,
        fact: 'An ecosystem includes plants, animals, and their habitat.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which is a renewable resource?',
        choices: ['Sunlight', 'Coal', 'Oil', 'Gas'],
        answer: 0,
        fact: 'Sunlight is renewable because it doesn’t run out.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do you call animals that are active at night?',
        choices: ['Nocturnal', 'Diurnal', 'Aquatic', 'Arctic'],
        answer: 0,
        fact: 'Nocturnal animals are active at night.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which simple machine is a ramp?',
        choices: ['Inclined plane', 'Pulley', 'Wedge', 'Lever'],
        answer: 0,
        fact: 'A ramp is an inclined plane.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'What do we call a solid, liquid, and gas together?',
        choices: ['States of matter', 'Solar system', 'Food chain', 'Weather'],
        answer: 0,
        fact: 'Solid, liquid, and gas are states of matter.'
      },
      {
        category: 'Science',
        grade: '3',
        prompt: 'Which organ is part of the circulatory system?',
        choices: ['Heart', 'Lungs', 'Stomach', 'Skin'],
        answer: 0,
        fact: 'The heart pumps blood through the body.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'How many points is a shot from the free-throw line worth?',
        choices: ['1', '2', '3', '4'],
        answer: 0,
        fact: 'Free throws are worth one point.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is it called when a player jumps and puts the ball directly into the hoop?',
        choices: ['Dunk', 'Pass', 'Serve', 'Bunt'],
        answer: 0,
        fact: 'A dunk is a powerful close-range shot.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What do we call blocking the ball with your body in a legal guarding position?',
        choices: ['Defense', 'Traveling', 'Double dribble', 'Offside'],
        answer: 0,
        fact: 'Good defense helps stop the other team.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is a pass thrown high near the rim called?',
        choices: ['Alley-oop', 'Bunt', 'Kick', 'Punt'],
        answer: 0,
        fact: 'An alley-oop is a high pass near the basket.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'Which player brings the ball up the court to start the offense?',
        choices: ['Point guard', 'Center', 'Coach', 'Referee'],
        answer: 0,
        fact: 'Point guards often lead the offense.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What do we call it when a player stops dribbling and dribbles again?',
        choices: ['Double dribble', 'Charge', 'Assist', 'Rebound'],
        answer: 0,
        fact: 'Double dribble is a violation.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'How many seconds can a player stay in the paint on offense?',
        choices: ['3', '5', '10', '24'],
        answer: 0,
        fact: 'The 3-second rule limits offensive time in the paint.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is the name of the area beyond the three-point line?',
        choices: ['Perimeter', 'Dugout', 'End zone', 'Crease'],
        answer: 0,
        fact: 'The perimeter is outside the three-point line.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What is it called when a player steps on or over the sideline?',
        choices: ['Out of bounds', 'Offside', 'Safe', 'Bunt'],
        answer: 0,
        fact: 'Stepping out of bounds stops play.'
      },
      {
        category: 'Sports (Basketball)',
        grade: '3',
        prompt: 'What do we call a shot that is taken at the buzzer?',
        choices: ['Buzzer beater', 'Field goal', 'Goal kick', 'Serve'],
        answer: 0,
        fact: 'A buzzer beater is a last-second shot.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 3, 9, 15, 21, __',
        choices: ['27', '24', '30', '33'],
        answer: 0,
        fact: 'The pattern adds 6 each time.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What is the rule? 2, 6, 18, 54',
        choices: ['Multiply by 3', 'Add 4', 'Subtract 2', 'Multiply by 2'],
        answer: 0,
        fact: 'Each number is multiplied by 3.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 40, 32, 24, __',
        choices: ['16', '18', '20', '22'],
        answer: 0,
        fact: 'The pattern subtracts 8 each time.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 5, 10, 20, 40, __',
        choices: ['80', '60', '50', '70'],
        answer: 0,
        fact: 'The pattern doubles each time.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 1, 4, 9, 16, __',
        choices: ['25', '20', '24', '30'],
        answer: 0,
        fact: 'These are square numbers: 1, 4, 9, 16, 25.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 18, 15, 12, 9, __',
        choices: ['6', '7', '8', '5'],
        answer: 0,
        fact: 'The pattern subtracts 3 each time.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 2, 5, 10, 17, __',
        choices: ['26', '24', '22', '20'],
        answer: 0,
        fact: 'The pattern adds 3, 5, 7, 9.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What is the rule? 100, 50, 25, 12.5',
        choices: ['Divide by 2', 'Add 5', 'Multiply by 3', 'Subtract 10'],
        answer: 0,
        fact: 'Each number is half of the previous one.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 8, 12, 18, 26, __',
        choices: ['36', '34', '30', '32'],
        answer: 0,
        fact: 'The pattern adds 4, 6, 8, 10.'
      },
      {
        category: 'Patterns',
        grade: '3',
        prompt: 'What comes next? 7, 14, 28, 56, __',
        choices: ['112', '84', '98', '70'],
        answer: 0,
        fact: 'The pattern doubles each time.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was the leader of the Continental Army during the Revolution?',
        choices: ['George Washington', 'Paul Revere', 'Thomas Jefferson', 'Alexander Hamilton'],
        answer: 0,
        fact: 'George Washington led the Continental Army.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What is the name of the first ten amendments?',
        choices: ['Bill of Rights', 'Articles of Confederation', 'Federalist Papers', 'Preamble'],
        answer: 0,
        fact: 'The Bill of Rights lists key freedoms.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which document declared the colonies free from Britain?',
        choices: ['Declaration of Independence', 'U.S. Constitution', 'Mayflower Compact', 'Magna Carta'],
        answer: 0,
        fact: 'The Declaration of Independence was adopted in 1776.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which city is the U.S. capital?',
        choices: ['Washington, DC', 'New York City', 'Philadelphia', 'Boston'],
        answer: 0,
        fact: 'Washington, DC is the capital.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who wrote the Star-Spangled Banner?',
        choices: ['Francis Scott Key', 'Paul Revere', 'Benjamin Franklin', 'Susan B. Anthony'],
        answer: 0,
        fact: 'Francis Scott Key wrote the national anthem.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What was the first national government of the U.S. called?',
        choices: ['Articles of Confederation', 'Bill of Rights', 'U.S. Constitution', 'Federalist Papers'],
        answer: 0,
        fact: 'The Articles of Confederation came before the Constitution.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Who was President when the Emancipation Proclamation was issued?',
        choices: ['Abraham Lincoln', 'George Washington', 'Theodore Roosevelt', 'Woodrow Wilson'],
        answer: 0,
        fact: 'Abraham Lincoln issued the Emancipation Proclamation.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What was the name of the ship the Pilgrims came on in 1620?',
        choices: ['Mayflower', 'Santa Maria', 'Endeavour', 'Titanic'],
        answer: 0,
        fact: 'The Pilgrims traveled on the Mayflower.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'Which purchase doubled the size of the United States in 1803?',
        choices: ['Louisiana Purchase', 'Gadsden Purchase', 'Oregon Trail', 'Gold Rush'],
        answer: 0,
        fact: 'The Louisiana Purchase doubled U.S. territory.'
      },
      {
        category: 'U.S. History',
        grade: '3',
        prompt: 'What is the name of the U.S. Congress building?',
        choices: ['Capitol', 'White House', 'Supreme Court', 'Pentagon'],
        answer: 0,
        fact: 'Congress meets in the U.S. Capitol.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What do we call kicking the ball to the other team on fourth down?',
        choices: ['Punt', 'Snap', 'Handoff', 'Serve'],
        answer: 0,
        fact: 'Teams often punt on fourth down.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is the extra play after a touchdown worth two points called?',
        choices: ['Two-point conversion', 'Field goal', 'Safety', 'Kickoff'],
        answer: 0,
        fact: 'A two-point conversion can add two points.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'Which player catches passes on offense?',
        choices: ['Wide receiver', 'Linebacker', 'Kicker', 'Referee'],
        answer: 0,
        fact: 'Wide receivers run routes to catch passes.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is the line of players called at the start of a play?',
        choices: ['Line of scrimmage', 'Goal line', 'Sideline', 'End zone'],
        answer: 0,
        fact: 'The line of scrimmage is where the ball is snapped.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is it called when a runner reaches the end zone with the ball?',
        choices: ['Touchdown', 'Home run', 'Goal kick', 'Serve'],
        answer: 0,
        fact: 'A touchdown scores six points.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is the defensive area at the end of the field called?',
        choices: ['End zone', 'Dugout', 'Paint', 'Base'],
        answer: 0,
        fact: 'Teams defend their end zone.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is it called when a defender grabs the ball after a fumble?',
        choices: ['Recovery', 'Dribble', 'Bunt', 'Serve'],
        answer: 0,
        fact: 'Recovering a fumble gives the ball to the other team.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What is the official who watches for rules violations called?',
        choices: ['Referee', 'Coach', 'Quarterback', 'Goalie'],
        answer: 0,
        fact: 'Referees enforce the rules.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'How many points is an extra point kick worth?',
        choices: ['1', '2', '3', '6'],
        answer: 0,
        fact: 'An extra point kick is worth one point.'
      },
      {
        category: 'Sports (Football)',
        grade: '3',
        prompt: 'What do we call a pass thrown forward to a teammate?',
        choices: ['Forward pass', 'Handoff', 'Punt', 'Kickoff'],
        answer: 0,
        fact: 'Forward passes move the ball downfield.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is the area of a rectangle 8 by 3?',
        choices: ['24 square units', '11 square units', '16 square units', '20 square units'],
        answer: 0,
        fact: 'Area is length × width: 8 × 3 = 24.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many sides does a trapezoid have?',
        choices: ['4', '3', '5', '6'],
        answer: 0,
        fact: 'A trapezoid is a four-sided shape.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is the perimeter of a triangle with sides 3, 4, and 5?',
        choices: ['12', '10', '14', '15'],
        answer: 0,
        fact: 'Perimeter is 3 + 4 + 5 = 12.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'Which shape has one curved surface and one circular base?',
        choices: ['Cone', 'Sphere', 'Cube', 'Pyramid'],
        answer: 0,
        fact: 'A cone has a circular base and a curved surface.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many faces does a cube have?',
        choices: ['6', '4', '8', '12'],
        answer: 0,
        fact: 'A cube has six square faces.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is a polygon with eight sides called?',
        choices: ['Octagon', 'Hexagon', 'Pentagon', 'Heptagon'],
        answer: 0,
        fact: 'An octagon has eight sides.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'Which angle is less than 90 degrees?',
        choices: ['Acute', 'Right', 'Obtuse', 'Straight'],
        answer: 0,
        fact: 'Acute angles are less than 90 degrees.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What do we call lines that cross to make right angles?',
        choices: ['Perpendicular', 'Parallel', 'Curved', 'Diagonal'],
        answer: 0,
        fact: 'Perpendicular lines meet at right angles.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'How many sides does a parallelogram have?',
        choices: ['4', '3', '5', '6'],
        answer: 0,
        fact: 'A parallelogram is a four-sided shape.'
      },
      {
        category: 'Geometry',
        grade: '3',
        prompt: 'What is the name of the distance around a shape?',
        choices: ['Perimeter', 'Area', 'Volume', 'Radius'],
        answer: 0,
        fact: 'Perimeter is the distance around a shape.'
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
  state.shuffled = shuffle([...pool]).map(shuffleQuestionChoices);
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
  state.shuffled = pickRandomQuestions(levelData[index].questions, QUESTIONS_PER_RUN);
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

function pickRandomQuestions(pool, desiredCount) {
  const count = Math.min(desiredCount, pool.length);
  return shuffle([...pool]).slice(0, count).map(shuffleQuestionChoices);
}

function shuffleQuestionChoices(question) {
  const entries = question.choices.map((choice, index) => ({ choice, index }));
  const shuffled = shuffle(entries);
  const answer = shuffled.findIndex((entry) => entry.index === question.answer);
  return {
    ...question,
    choices: shuffled.map((entry) => entry.choice),
    answer
  };
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
