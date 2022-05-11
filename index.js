const mobileMenuOpen = document.querySelector(".mobile-hamburger-btn");
const mobileMenuClose = document.querySelector(".mobile-close-btn");
const projects = [
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
  {
    name: "Keeping track of hundreds of components",
    technologies: [
      "Codekit",
      "Github",
      "JavaScript",
      "Bootstrap",
      "Terminal",
      "Codepen",
    ],
    featuredImage: "Portfolio1.png",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLive: "#",
    linkSource: "#",
  },
];

mobileMenuOpen.addEventListener("click", () => {
  document.querySelector(".logo").style.display = "none";
  document.querySelector(".mobile-menu-btn").style.display = "none";
  document.querySelector(".desktop-nav").style.display = "flex";
});

mobileMenuClose.addEventListener("click", () => {
  document.querySelector(".logo").style.display = "block";
  document.querySelector(".mobile-menu-btn").style.display = "block";
  document.querySelector(".desktop-nav").style.display = "none";
});

const menuListItems = document.querySelectorAll(".animate li");

menuListItems.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".logo").style.display = "block";
    document.querySelector(".mobile-menu-btn").style.display = "block";
    document.querySelector(".desktop-nav").style.display = "none";
  });
});

// popup modal
//create work cards

function generateWorkCard() {
  projects.forEach((project, index) => {
    let technology = "";
    project.technologies.forEach((tech) => {
      technology += `<li>${tech}</li>`;
    });
    console.log(technology);
    document.querySelector(".work-cards").innerHTML += `
    <div class="card">
      <div class="project-img">
        <img src="./icons/Projects/${project.featuredImage}" alt="project card" />
      </div>
      <div class="card-text">
        <h3>${project.name}</h3>
        <ul class="work-catagories">
                ${technology}
        </ul>
        <button type="button" data-index="${index} class="btn">See Project</button>
      </div>
    </div>
    `;
  });
}

generateWorkCard();
