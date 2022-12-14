// toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  linkContainer.classList.toggle('show');
});

// links

const links = document.querySelectorAll('.link');

links.forEach((link) => {
  link.addEventListener('click', () => {
    links.forEach((ele) => ele.classList.remove('active'));
    link.classList.add('active');
  });
});

// creating dynamic project card

const projectContainer = document.querySelector('.project-container');

projects.forEach((project) => {
  projectContainer.innerHTML += `
            <div class="project-card" data-tags="#all, ${project.tags}">
                <img src="img/${project.image}" alt="">
                <div class="content">
                    <h1 class="project-name">${project.name}</h1>
                    <span class="tags">${project.tags}</span>
                </div>
            </div>
       `;
});

// filters

const filters = document.querySelectorAll('.filter-btn');

filters.forEach((filterBtn) => {
  filterBtn.addEventListener('click', () => {
    let id = filterBtn.getAttribute('id');
    let projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      if (card.getAttribute('data-tags').includes(id)) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });
    filters.forEach((btn) => btn.classList.remove('active'));
    filterBtn.classList.add('active');
  });
});

// contact form

const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});
