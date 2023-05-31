const mobileMenu = document.getElementById('mobile-menu');
const menu = document.getElementById('menu');
const close = document.getElementById('close-btn');
const mobileLinks = document.querySelectorAll('.nav-list');

function openMenu() {
  mobileMenu.style.display = 'flex';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
}

menu.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

const speakerData = [
  {
    img: './images/speaker_01.png',
    name: 'Yochai Benkler',
    profession: 'Berkman Professor, Harvard Law.',
    description: 'Yochai Benkler is an Israeli-American author and the Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School. He is also a faculty co-director of the Berkman Klein Center for Internet & Society at Harvard University',
  },
  {
    img: './images/speaker_02.png',
    name: 'Kilnam Chon',
    profession: 'Executive Director, Nabi',
    description: 'Professor Chon contributed to the growth of the Internet in Asia through his extensive work in advancing Internet initiatives, research, and development.',
  },
  {
    img: './images/speaker_03.png',
    name: 'Sohyeong Noh',
    profession: 'Art Center Nabi Director, CC Korea Director',
    description: 'Roh Soh-yeong was born in Daegu, South Korea, on March 31, 1961. Her father, Roh Tae-woo is a former South Korean politician and ROK Army general who served as the 6th President of South Korea from 1988 to 1993.',
  },
  {
    img: './images/speaker_04.png',
    name: 'Julia Reda',
    profession: 'President of Young Pirates of Europe',
    description: 'European integration and young people\'s participation in politics and democracy online are major concerns, and he has published a report that will potentially affect the revision of the European Union\'s copyright law in July.',
  },
  {
    img: './images/speaker_05.png',
    name: 'Lila Tretikov',
    profession: 'Executive Secretary of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages each month.',
  },
  {
    img: './images/speaker_06.png',
    name: 'Ryan Merkley',
    profession: 'CEO of Creative Commons , ex Mozilla Foundation COO',
    description: 'Ryan had been leading open-souce projects at the Mozilla Foundation such as the open-source movement',
  },
];

const container = document.getElementById('container');

function data() {
  speakerData.forEach((speaker) => {
    container.innerHTML += `<div class="speaker-list">
    <img src="${speaker.img}" alt="" class="speaker-img">
    <div class="speaker-content">
      <h2 class="speaker-header">${speaker.name}</h2>
      <h3 class="speaker-profession">${speaker.profession}</h3>
      <hr class="speaker-line">
      <p class="speaker-description">${speaker.description}</p>
    </div>
  </div>`;
  });
}

data();

const programCategoriesData = [
  {
    icon: 'images/program_icon_01.png',
    title: 'Lecture',
    description: 'Lectures from experienced participants with leading Technology Giants',
  },
  {
    icon: 'images/program_icon_02.png',
    title: 'Hackathon',
    description: 'Teams will engage and develop rapid and collaborative engineering projects',
  },
  {
    icon: 'images/program_icon_03.png',
    title: 'Forum',
    description: 'Have time to ask questions, share opinions, and interact with others who have similar interests',
  },
  {
    icon: 'images/program_icon_04.png',
    title: 'Workshop',
    description: 'Show us your creativity and Experience rather than just observing',
  },
  {
    icon: 'images/program_icon_05.png',
    title: 'Party',
    description: 'Get networking opportunities for yourself and others after the main event',
  },
];

const programCategoriesContainer = document.querySelector('.program-categories');

function createProgramCategories() {
  programCategoriesData.forEach((category) => {
    programCategoriesContainer.innerHTML += `
      <div class="program-categories-details flex-container">
        <img src="${category.icon}" alt="program-ico">
        <span>${category.title}</span>
        <p>${category.description}</p>
      </div>
    `;
  });
}

createProgramCategories();

const moreButton = document.querySelector('.more-btn');
const speakers = Array.from(document.querySelectorAll('.speaker-list'));

moreButton.addEventListener('click', () => {
  speakers.slice(-4).forEach((speaker) => {
    speaker.classList.toggle('hidden');
  });

  if (moreButton.textContent === 'More') {
    moreButton.textContent = 'Less';
  } else {
    moreButton.textContent = 'More';
  }
});

function hideSpeakers() {
  if (window.innerWidth < 768) {
    speakers.slice(-4).forEach((speaker) => {
      speaker.classList.add('hidden');
    });
    moreButton.textContent = 'More';
  } else {
    speakers.forEach((speaker) => {
      speaker.classList.remove('hidden');
    });
    moreButton.textContent = 'More';
  }
}

hideSpeakers();

window.addEventListener('resize', () => {
  hideSpeakers();
});