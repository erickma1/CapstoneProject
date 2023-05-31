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
    name: 'Franklin Cudjoe',
    profession: 'C.E.O of IMANI Centre for Policy and Education',
    description: 'Franklin Cudjoe is a Ghanaian author and social political commentator. He is the Founding President and chief executive officer of IMANI Centre for Policy and Education.',
  },
  {
    img: './images/speaker_02.png',
    name: 'Bernard Koku Avle',
    profession: 'Operations Mnager CITI FM',
    description: 'Bernard Koku Avle also known as Bernardino Koku Avle is a Ghanaian media personality, broadcast journalist, public speaker. He is the current host of Citi FM morning show The Citi Breakfast Show and the host of the Point Of View Show on Citi TV',
  },
  {
    img: './images/speaker_03.png',
    name: 'Nana Aba Anamoah',
    profession: 'TV Host',
    description: 'Nana is a TV host and journalist from Ghana. She studied banking and finance in the Ghana institute of management and public administration. Nana is one of the hottest TV personalities to ever grace the Ghanaian screens.',
  },
  {
    img: './images/speaker_04.png',
    name: 'Dr. Caryn Agyeman Prempeh',
    profession: 'Founder of CERVIVA Ghana',
    description: 'Dr. Caryn is a medical practitioner. She is the founder of a nonprofit organization called CERVIVA focused on creating awareness and educating women on cervical cancer. She is also host on GH ONE known as “Late afternoon show”.',
  },
  {
    img: './images/speaker_05.png',
    name: 'Dr. Naomi Adjepong',
    profession: 'Executive Secretary Emerge Leadership Ghana Ltd',
    description: 'Naomi Adjepong is the Director of Operations at Alpha Beta Education Centers, a family owned business. she has designed and implemented a full-time leadership track called the Adinkrahene Leadership Program. She also co-directs a social enterprise - Emerge Leadership Ghana Ltd',
  },
  {
    img: './images/speaker_06.png',
    name: 'Paa Kwesi Nduom',
    profession: 'CEO of Ndoum Group',
    description: 'Paa Kwesi Nduom or Papa Kwesi Nduom, is a Ghanaian business consultant, politician, and founding member of Ghanas Progressive Peoples Party. A three-time nominee for president, he was the member of parliament for the Komenda-Edina-Eguafo-Abirem constituency',
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