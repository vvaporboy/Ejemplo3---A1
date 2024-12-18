function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
// data para proyectos
const projects = {
    1: {
      title: "VBV INTRO: SIMBOLS",
      description: "VAPORBOY presenta su nuevo universo creativo llamado VAPORVISION, y en esta introducción se destacan cuatro símbolos clave que serán fundamentales en todo este nuevo universo. Estos símbolos no solo serán elementos visuales presentes en las creaciones de VAPORBOY, sino que también representarán conceptos y conexiones significativas entre ellas.",
      images: [
        "images/project1/img1.jpg",
        "images/project1/img2.jpg",
        "images/project1/img3.jpg",
        "images/project1/img4.jpg",
        "images/project1/img1.jpg",
      ],
    },
    2: {
        title: "Angelica Banner Desing",
        description: "BANNER DESING FOR ANGELICA CLOTHING.",
        images: [
          "images/project2/img1.jpg",
          "images/project2/img2.jpg",
          "images/project2/img3.jpg",
          "images/project2/img4.jpg",
        ],
      },
    // Agregar más si es necesario
  };
  
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");
  
  if (projectId && projects[projectId]) {
    const project = projects[projectId];
    document.getElementById("project-title").textContent = project.title;
    document.getElementById("project-description").textContent = project.description;
  
    const gallery = document.querySelector(".gallery");
    project.images.forEach((src, index) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = project.title;
      img.onclick = () => openLightbox(index); // Al hacer click el evento abrirá Lightbox
      gallery.appendChild(img);
    });
  } else {
    document.getElementById("project-details").textContent =
      "Proyecto No Encontrado.";
  }
  
  // Lightbox functionality
  let currentImageIndex = 0;
  
  function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    lightboxImage.src = projects[projectId].images[index];
    lightbox.classList.add("visible");
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").classList.remove("visible");
  }
  
  function prevImage() {
    currentImageIndex =
      (currentImageIndex - 1 + projects[projectId].images.length) %
      projects[projectId].images.length;
    document.getElementById("lightbox-image").src =
      projects[projectId].images[currentImageIndex];
  }
  
  function nextImage() {
    currentImageIndex =
      (currentImageIndex + 1) % projects[projectId].images.length;
    document.getElementById("lightbox-image").src =
      projects[projectId].images[currentImageIndex];
  }
  