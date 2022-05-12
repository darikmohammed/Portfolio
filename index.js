const mobileMenuOpen = document.querySelector('.mobile-hamburger-btn');
const mobileMenuClose = document.querySelector('.mobile-close-btn');
const projects = [
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy.",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
];

mobileMenuOpen.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'none';
  document.querySelector('.mobile-menu-btn').style.display = 'none';
  document.querySelector('.desktop-nav').style.display = 'flex';
});

mobileMenuClose.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
});

const menuListItems = document.querySelectorAll('.animate li');

menuListItems.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.logo').style.display = 'block';
    document.querySelector('.mobile-menu-btn').style.display = 'block';
    document.querySelector('.desktop-nav').style.display = 'none';
  });
});

// popup modal
// create work cards

function generateWorkCard() {
  projects.forEach((project, index) => {
    let technology = '';
    project.technologies.forEach((tech) => {
      technology += `<li>${tech}</li>`;
    });
    document.querySelector('.work-cards').innerHTML += `
    <div class="card">
      <div class="project-img">
        <img src="./icons/Projects/${project.featuredImage}" alt="project card" />
      </div>
      <div class="card-text">
        <h3>${project.name}</h3>
        <ul class="work-catagories">
                ${technology}
        </ul>
        <button type="button" data-index="${index}" class="btn popup-window">See Project</button>
      </div>
    </div>
    `;
  });
}

generateWorkCard();

// Popup modals.
const popupModals = document.querySelectorAll('.popup-window');
const closeModal = document.querySelector('.close-modal-btn');
function openModal(element) {
  const projectIndex = element.dataset.index;
  document.querySelector('.modal-header').textContent = projects[projectIndex].name;
  document
    .querySelector('.modal-project-image')
    .setAttribute(
      'src',
      `./icons/Projects/${projects[projectIndex].featuredImage}`,
    );
  document
    .querySelector('.modal-project-image')
    .setAttribute('alt', `${projects[projectIndex].name}`);
  document
    .querySelector('.moblie-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.moblie-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  document
    .querySelector('.desktop-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.desktop-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  let technology = '';
  projects[projectIndex].technologies.forEach((tech) => {
    technology += `<div class="tag">${tech}</div>`;
  });
  document.querySelector('.project-codekit .tags').innerHTML = technology;
  document.querySelector('.modal-project-description').textContent = projects[projectIndex].description;
  document.querySelector('.modal').style.display = 'flex';
}

popupModals.forEach((modal) => [
  modal.addEventListener('click', () => {
    openModal(modal);
  }),
]);
closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// email validate
const form = document.querySelector('#contact-form');
const errorEmail = document.querySelector('#email_error');
function validateEmail(input) {
  const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
  return emailRegex.test(input);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email.value);
  // if valid email
  if (!emailValid) {
    // send error
    errorEmail.style.display = 'block';
  } else {
    errorEmail.style.display = 'none';
    form.submit();
  }
});
