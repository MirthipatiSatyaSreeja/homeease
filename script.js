const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

function showSection(id){
  pages.forEach(p => p.classList.toggle("active", p.id === id));
  navLinks.forEach(n => n.classList.toggle("active", n.dataset.section === id));
  window.scrollTo({top:0, behavior:"smooth"});
}

navLinks.forEach(link => link.addEventListener("click", () => {
  const section = link.dataset.section;
  if(section === "services") showSection("services");
  else showSection(section);
}));

document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    showSection("services");
    showToast(card.dataset.name + " selected");
  });
});

document.querySelectorAll(".appliance-option").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".appliance-option").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.querySelectorAll(".problem").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".problem").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.querySelectorAll(".slot").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".slot").forEach(x => x.classList.remove("selected"));
    btn.classList.add("selected");
  });
});

document.getElementById("searchInput").addEventListener("input", e => {
  const term = e.target.value.toLowerCase().trim();
  document.querySelectorAll(".service-card").forEach(card => {
    card.style.display = !term || card.dataset.name.toLowerCase().includes(term) ? "" : "none";
  });
});

function confirmBooking(){
  showToast("Booking confirmed! Our technician will contact you.");
  setTimeout(() => showSection("tracking"), 1200);
}

function addAppliance(){
  showToast("Add Appliance form can be connected to a backend later.");
}

function showHowItWorks(){
  showToast("Choose a service → select a slot → confirm booking → track technician.");
}

function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.style.display = "block";
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.style.display = "none", 3000);
}
