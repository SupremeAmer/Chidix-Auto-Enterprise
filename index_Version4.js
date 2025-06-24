// ======= PWA and Service Worker =======
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js');
}
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
});

// ======= i18next Multi-language =======
i18next.init({
  lng: "en",
  resources: {
    en: { translation: { heroTitle: "Find Your Dream Car", heroDesc: "Explore a curated selection of the latest and greatest cars.<br>Modern UI. Smooth transitions. Details that matter.<br><b>Discover your next ride today!</b>", viewCars:"View Cars" } },
    fr: { translation: { heroTitle: "Trouvez la voiture de vos rêves", heroDesc: "Explorez une sélection de voitures dernier cri.<br>Interface moderne. Transitions fluides. Détails importants.<br><b>Découvrez votre prochain véhicule aujourd'hui!</b>", viewCars:"Voir les voitures" } },
    es: { translation: { heroTitle: "Encuentra tu auto ideal", heroDesc: "Explora una selección de los mejores autos.<br>UI moderna. Transiciones suaves. Detalles importantes.<br><b>¡Descubre tu próximo auto hoy!</b>", viewCars:"Ver Autos" } }
  }
}, function() { translate(); });
document.getElementById('langSelect').addEventListener('change', function() {
  i18next.changeLanguage(this.value, translate);
});
function translate() {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.innerHTML = i18next.t(el.getAttribute('data-i18n'));
  });
}

// ======= Theme: Dark/Light/Auto =======
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  document.getElementById("themeToggle").innerText = theme === "dark" ? "☀️" : "🌙";
  document.getElementById("themeToggleMobile") && (document.getElementById("themeToggleMobile").innerText = theme === "dark" ? "☀️" : "🌙");
}
function getTheme() {
  return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}
function toggleTheme() { setTheme(getTheme() === "dark" ? "light" : "dark"); }
document.getElementById("themeToggle").onclick = toggleTheme;
document.getElementById("themeToggleMobile") && (document.getElementById("themeToggleMobile").onclick = function(){ toggleTheme(); });
setTheme(getTheme());
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => { if(!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light'); });

// ======= Year =======
document.getElementById('year').innerText = new Date().getFullYear();

// ======= Appwrite config =======
const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT = "684c13530011df315968";
const APPWRITE_DB_ID = "684c1377001ab5d7cbc9";
const APPWRITE_COLLECTION_ID = "684c138c000f8065661f";
const APPWRITE_BUCKET_ID = "6855744e0029b9e00b99";
const ADMIN_EMAILS = ["supremeamerapplications@gmail.com", "supremealpha04@gmail.com"];
const client = new Appwrite.Client();
client.setEndpoint(APPWRITE_ENDPOINT).setProject(APPWRITE_PROJECT);
const account = new Appwrite.Account(client);
const db = new Appwrite.Databases(client);
const storage = new Appwrite.Storage(client);

let cars = [];
let isAdmin = false;

// ======= Smart Search and Filters =======
const searchInput = document.getElementById('searchInput');
const brandFilter = document.getElementById('brandFilter');
const statusFilter = document.getElementById('statusFilter');
[searchInput,brandFilter,statusFilter].forEach(el=>el && el.addEventListener('input', filterCars));
function filterCars() {
  let q = searchInput.value.toLowerCase();
  let brand = brandFilter.value;
  let status = statusFilter.value;
  renderCars(cars.filter(car => {
    let matches = (!q || car.title.toLowerCase().includes(q) || car.model.toLowerCase().includes(q) || (car.features||[]).some(f=>f.toLowerCase().includes(q)));
    if (brand) matches = matches && car.brand===brand;
    if (status) matches = matches && ((status=="sold")===!!car.sold);
    return matches;
  }));
}

// ======= Loading skeletons, then load cars =======
function showSkeletons(n=3) {
  document.getElementById('gallery').innerHTML = Array(n).fill('<div class="skeleton"></div>').join('');
}
showSkeletons();

// ======= Load Cars (Appwrite) =======
async function loadCars() {
  showSkeletons();
  try {
    const res = await db.listDocuments(APPWRITE_DB_ID, APPWRITE_COLLECTION_ID, [Appwrite.Query.orderDesc("$createdAt")]);
    cars = res.documents.map(car => ({
      ...car,
      media: Array.isArray(car.media)
        ? car.media.map(str => { try { return JSON.parse(str); } catch { return null; } }).filter(Boolean)
        : [],
      features: Array.isArray(car.features) ? car.features : (car.features ? car.features.split(",") : []),
      brand: car.brand || "Toyota",
      images: (Array.isArray(car.media)?car.media.filter(m=>m.type==='image').map(m=>m.url):[]),
      sold: car.sold
    }));
    let uniqueBrands = [...new Set(cars.map(c=>c.brand))];
    brandFilter.innerHTML = '<option value="">All Brands</option>'+uniqueBrands.map(b=>`<option value="${b}">${b}</option>`).join('');
    filterCars();
    renderAdminCarList();
  } catch (e) {
    document.getElementById('gallery').innerHTML = "<div style='color:#e53935;font-weight:700;'>Failed to load cars.</div>";
    console.error("Loading cars error:", e);
  }
}
setTimeout(loadCars, 900);

// ======= Render Cars with Image Gallery, QR, Share, and Status =======
function renderCars(carList) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  carList.forEach((car, idx) => {
    let status = car.sold ? `<span style="color:#e53935;font-weight:700;">SOLD</span>` : `<span style="color:green;font-weight:700;">Available</span>`;
    let imagesHtml = car.images.map(img=>
      `<div class="swiper-slide"><img src="${img}" style="width:100%;border-radius:8px;"/></div>`).join('');
    gallery.innerHTML += `
      <div class="car-card" id="car-${car.$id}">
        <div class="car-img">
          <div class="swiper-container swiper-car-${car.$id}">
            <div class="swiper-wrapper">${imagesHtml}</div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="car-content">
          <div class="car-title">${car.title} ${status}</div>
          <div class="car-model">${car.model}</div>
          <div class="car-desc">${car.description.slice(0, 64)}...</div>
          <div class="car-features">${car.features.map(f=>`<span>${f.trim()}</span>`).join('')}</div>
          <div class="car-price">${car.price}</div>
          <div class="car-action">
            <button onclick="showCarModal('${car.$id}')">View Details</button>
          </div>
          <div id="qrcode-${car.$id}" class="qrcode-canvas"></div>
        </div>
      </div>
    `;
    setTimeout(() => {
      new Swiper('.swiper-car-'+car.$id, {pagination: {el: '.swiper-pagination', clickable: true}, loop: true});
      new QRCode(document.getElementById('qrcode-'+car.$id), {text: window.location.href.split("#")[0]+"?car="+car.$id, width:60, height:60});
    }, 100);
  });
}

// ======= Car Modal: Gallery, QR, Share, Inquiry, Map, 360 =======
window.showCarModal = function(carId) {
  const car = cars.find(c=>c.$id===carId);
  const features = car.features || [];
  const images = car.images || [];
  let gallery = `<div class="swiper-container swiper-gallery">
    <div class="swiper-wrapper">
      ${images.map(img=>`<div class="swiper-slide"><img src="${img}" style="width:100%;border-radius:8px;"/></div>`).join('')}
    </div>
    <div class="swiper-pagination"></div>
  </div>`;
  let qr = `<div id="qr-modal"></div>`;
  let status = car.sold ? `<span style="color:#e53935;font-weight:700;">SOLD</span>` : `<span style="color:green;">Available</span>`;
  let adminBtns = "";
  if (isAdmin) {
    adminBtns = `
      <button onclick="editCar('${car.$id}')">Edit</button>
      <button onclick="deleteCar('${car.$id}')">Delete</button>
      <button onclick="toggleSold('${car.$id}')">${car.sold?'Mark as Available':'Mark as Sold'}</button>
    `;
  }
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)" title="Close">&times;</button>
        ${gallery}
        <div class="car-title">${car.title} ${status}</div>
        <div class="car-model">${car.model}</div>
        <div class="car-features">${features.map(f=>`<span>${f}</span>`).join('')}</div>
        <div class="car-price">${car.price}</div>
        <div class="car-desc">${car.description}</div>
        <div class="modal-action">
          <button onclick="shareCar('${car.$id}')">Share</button>
          <button onclick="showInquiryForm('${car.$id}')">Contact Seller</button>
          <button onclick="showMapModal(${car.location?.lat||6.5244},${car.location?.lng||3.3792})">View on Map</button>
          <button onclick="show360Viewer('demo360.html')">360° View</button>
          ${adminBtns}
        </div>
        ${qr}
      </div>
    </div>
  `;
  setTimeout(()=>{
    new Swiper('.swiper-gallery', {pagination:{el:'.swiper-pagination', clickable:true}, loop:true});
    new QRCode(document.getElementById('qr-modal'), {text: window.location.href.split("#")[0]+"?car="+carId, width:90, height:90});
  },100);
}
window.closeModal = function(e) {
  document.getElementById('modal-root').innerHTML = "";
  document.body.style.overflow = "";
}

// ======= Share API (WhatsApp, Facebook, etc) =======
window.shareCar = function(carId) {
  const url = window.location.href.split("#")[0]+'?car='+carId;
  if (navigator.share) {
    navigator.share({ title: 'Check this car on Chidoxic!', url });
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent('Check this car: '+url)}`,'_blank');
  }
}

// ======= Inquiry Form (Background Sync if offline - demo) =======
window.showInquiryForm = function(carId) {
  const car = cars.find(c=>c.$id===carId);
  document.getElementById('modal-root').innerHTML += `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">Contact Seller for ${car.title}</div>
        <form id="inquiryForm">
          <input type="text" placeholder="Your Name" required style="width:92%;margin-bottom:8px;"/>
          <input type="email" placeholder="Your Email" required style="width:92%;margin-bottom:8px;"/>
          <textarea placeholder="Message" style="width:92%;margin-bottom:8px;" required></textarea>
          <button type="submit">Send Inquiry</button>
        </form>
      </div>
    </div>
  `;
  document.getElementById('inquiryForm').onsubmit = function(e){
    e.preventDefault();
    if (!navigator.onLine) alert("You are offline. We will send your inquiry when you are back online!");
    else alert("Inquiry sent! (Simulated)");
    closeModal();
  }
}

// ======= Map Modal (Leaflet.js) =======
window.showMapModal = function(lat,lng) {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)" title="Close">&times;</button>
        <div id="map" style="width:90vw;height:60vw;max-height:400px;"></div>
      </div>
    </div>
  `;
  setTimeout(()=>{
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    L.marker([lat, lng]).addTo(map).bindPopup('Car Location').openPopup();
  },100);
}

// ======= 360° Car Viewer (demo) =======
window.show360Viewer = function(url) {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <iframe src="${url}" style="width:100vw;height:60vw;max-height:400px;border:none;"></iframe>
      </div>
    </div>
  `;
}

// ======= Admin Panel Logic =======
window.toggleAdminPanel = function() {
  if (isAdmin) {
    document.getElementById('adminPanel').style.display = "block";
  } else {
    showAdminLogin();
  }
}
function showAdminLogin() {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">Admin Login</div>
        <form id="adminLoginForm" style="margin-top:11px;">
          <label>Email</label>
          <input type="email" id="adminEmail" required style="width:100%;padding:7px;border-radius:5px;border:1px solid #c7d1eb;">
          <label style="margin-top:6px;">Password</label>
          <input type="password" id="adminPassword" required style="width:100%;padding:7px;border-radius:5px;border:1px solid #c7d1eb;">
          <button style="margin-top:10px;width:100%;background:#3167e6;color:#fff;padding:8px;border:none;border-radius:5px;font-weight:700;cursor:pointer;">Login</button>
          <div id="loginMsg" style="color:#e53935;margin-top:7px;"></div>
        </form>
      </div>
    </div>
  `;
  document.body.style.overflow = "hidden";
  document.getElementById('adminLoginForm').onsubmit = async function(e) {
    e.preventDefault();
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    if (!ADMIN_EMAILS.includes(email)) {
      document.getElementById('loginMsg').innerText = "Not authorized.";
      return;
    }
    try {
      await account.createEmailSession(email, password);
      isAdmin = true;
      closeModal();
      document.getElementById('adminPanel').style.display = "block";
      renderAdminCarList();
    } catch (err) {
      document.getElementById('loginMsg').innerText = "Login failed. Check email and password.";
    }
  }
}
window.logoutAdmin = async function() {
  try { await account.deleteSession('current'); } catch {}
  isAdmin = false;
  document.getElementById('adminPanel').style.display = "none";
}

// ======= Admin Add Car Logic =======
let selectedFiles = [];
const dragDropZone = document.getElementById('dragDropZone');
const fileInput = document.getElementById('carMedia');
const filePreview = document.getElementById('filePreview');
function updatePreview() {
  filePreview.innerHTML = "";
  selectedFiles.forEach((f, i) => {
    let preview = "";
    if (f.type.startsWith("image/")) {
      preview = `<img src="${URL.createObjectURL(f)}" alt="media" style="max-width:60px;max-height:60px;border-radius:7px;" />`;
    }
    filePreview.innerHTML += `
      <div class="file-preview-item" style="display:inline-block;position:relative;margin-right:6px;">
        ${preview}
        <button class="remove-btn" title="Remove" onclick="removeSelectedFile(${i})" style="position:absolute;top:-7px;right:-7px;background:#e53935;color:#fff;border:none;border-radius:50%;width:18px;height:18px;cursor:pointer;">&times;</button>
      </div>
    `;
  });
}
window.removeSelectedFile = function(idx) {
  selectedFiles.splice(idx, 1);
  updatePreview();
};
dragDropZone.addEventListener('click', () => fileInput.click());
dragDropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dragDropZone.classList.add('dragover');
});
dragDropZone.addEventListener('dragleave', e => {
  e.preventDefault();
  dragDropZone.classList.remove('dragover');
});
dragDropZone.addEventListener('drop', e => {
  e.preventDefault();
  dragDropZone.classList.remove('dragover');
  const files = Array.from(e.dataTransfer.files);
  files.forEach(f => {
    if ((f.type.startsWith("image/")) && !selectedFiles.some(sf => sf.name === f.name && sf.size === f.size)) {
      selectedFiles.push(f);
    }
  });
  updatePreview();
});
fileInput.addEventListener('change', e => {
  Array.from(e.target.files).forEach(f => {
    if ((f.type.startsWith("image/")) && !selectedFiles.some(sf => sf.name === f.name && sf.size === f.size)) {
      selectedFiles.push(f);
    }
  });
  updatePreview();
});

document.getElementById('adminForm').onsubmit = async function(e) {
  e.preventDefault();
  const title = document.getElementById('carTitle').value.trim();
  const brand = document.getElementById('carBrand').value.trim();
  const model = document.getElementById('carModel').value.trim();
  const price = document.getElementById('carPrice').value.trim();
  const description = document.getElementById('carDesc').value.trim();
  const features = document.getElementById('carFeatures').value.trim().split(',').map(f=>f.trim()).filter(Boolean);
  const sold = document.getElementById('carStatus').value === "sold";
  if (!title || !brand || !model || !price || !description || !features.length) {
    document.getElementById('adminMsg').innerText = "All fields are required.";
    return;
  }
  if (selectedFiles.length < 2) {
    document.getElementById('adminMsg').innerText = "Please upload at least 2 images.";
    return;
  }
  document.getElementById('adminMsg').innerText = "Uploading files...";
  try {
    let mediaArr = [];
    for (let file of selectedFiles) {
      let uploadRes = await storage.createFile(APPWRITE_BUCKET_ID, Appwrite.ID.unique(), file);
      let url = storage.getFilePreview(APPWRITE_BUCKET_ID, uploadRes.$id).href;
      let type = file.type.startsWith('image/') ? 'image' : 'other';
      mediaArr.push(JSON.stringify({ url, type, name: file.name }));
    }
    await db.createDocument(
      APPWRITE_DB_ID,
      APPWRITE_COLLECTION_ID,
      Appwrite.ID.unique(),
      {
        title, brand, model, price, description, features, media: mediaArr, sold
      }
    );
    document.getElementById('adminMsg').innerText = "Car added successfully!";
    selectedFiles = [];
    updatePreview();
    loadCars();
    this.reset();
  } catch (err) {
    document.getElementById('adminMsg').innerText = "Failed to add car.";
    console.error(err);
  }
}

// ======= Admin List, Edit, Delete, Toggle Sold =======
function renderAdminCarList() {
  if (!isAdmin) return;
  let html = "<div style='margin-bottom:7px;font-weight:700;'>All Cars</div>";
  if (!cars.length) html += "<div>No cars found.</div>";
  else cars.forEach(car => {
    html += `<div class="admin-car-title">${car.title} (${car.model}) - <span style="color:#3167e6;">${car.price}</span> 
      <button onclick="editCar('${car.$id}')">Edit</button> 
      <button onclick="deleteCar('${car.$id}')">Delete</button>
      <button onclick="toggleSold('${car.$id}')">${car.sold?'Mark as Available':'Mark as Sold'}</button>
      </div>`;
  });
  document.getElementById('adminList').innerHTML = html;
}
window.editCar = function(carId) {
  const car = cars.find(c=>c.$id===carId);
  if (!car) return;
  document.getElementById('carTitle').value = car.title;
  document.getElementById('carBrand').value = car.brand;
  document.getElementById('carModel').value = car.model;
  document.getElementById('carPrice').value = car.price;
  document.getElementById('carDesc').value = car.description;
  document.getElementById('carFeatures').value = (car.features||[]).join(", ");
  document.getElementById('carStatus').value = car.sold ? "sold" : "available";
  document.getElementById('adminMsg').innerText = "Edit fields and click Add Car to update.";
  // For real edit, you may want to implement an update...
}
window.deleteCar = async function(carId) {
  if(!confirm("Delete this car?")) return;
  try {
    await db.deleteDocument(APPWRITE_DB_ID, APPWRITE_COLLECTION_ID, carId);
    loadCars();
  } catch (err) { alert("Failed to delete."); }
}
window.toggleSold = async function(carId) {
  const car = cars.find(c=>c.$id===carId);
  try {
    await db.updateDocument(APPWRITE_DB_ID, APPWRITE_COLLECTION_ID, carId, { sold: !car.sold });
    loadCars();
  } catch (err) { alert("Failed to update status."); }
}

// ======= Admin auto-login if session =======
(async function(){
  try {
    const session = await account.get();
    if (session && ADMIN_EMAILS.includes(session.email)) {
      isAdmin = true;
      document.getElementById('adminPanel').style.display = "block";
      renderAdminCarList();
    }
  } catch {}
  loadCars();
})();

// ======= About, Contact, Terms, Privacy Modals (use your previous modal functions here) =======
window.showAbout = function() {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">About Chidix Auto Enterprise</div>
        <div class="modal-desc" style="margin-bottom:12px;">
          <b>Chidoxic Auto Enterprise</b> we're driving the future of car shopping with a sleek, responsive, and cloud-powered platform.
          <ul style="padding-left:20px; margin:0;">
            <li>our digital showroom showcases an expertly curated collection of the world's finest automobiles</li>
            <li>Detailed car info including price, model, features, and high-res images</li>
            <li>We believe buying a car should be as exciting as driving one. That’s why every listing comes packed with detailed specs, high-resolution images, and real-time updates</li>
            <li>Responsive and works on all devices</li>
          </ul>

          <h1>Our Mission</h1>
          <p>To revolutionize the automotive buying experience by combining sleek digital design, responsive technology, and curated car listings — making the journey from desire to driveway seamless, satisfying, and smart.<br> 
          We’re here to empower customers with the tools and confidence to find their perfect ride, anytime, anywhere.<br></p>
       <h1>Our Vision</h1>
       <p>To become Africa’s leading digital-first car dealership — where innovation meets trust, and excellence drives everything we do.<br>
       As we continue to grow, our vision is to shape a future where car shopping feels less like a chore and more like the thrill of a first drive.</p>
        </div>
        <div class="modal-action"><button onclick="closeModal(event)">Close</button></div>
      </div>
    </div>
  `;
};
window.showContact = function() {
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">Contact Us</div>
        <div class="modal-desc" style="margin-bottom:11px;">
          <b>Looking for a car or need more details?</b> <br>
          Email: <a href="mailto:info@chidoxicauto.com" style="color:#3167e6;">info@chidoxicauto.com</a><br>
          Phone: <a href="tel:+2348134567890" style="color:#3167e6;">+234 813 456 7890</a><br>
          Location: 123 Dream Cars Blvd, Auto City, Nigeria
        </div>
        <div class="modal-action"><button onclick="closeModal(event)">Close</button></div>
      </div>
    </div>
  `;
};
window.showTerms = function(e) {
  if(e) e.preventDefault();
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">Terms & Conditions</div>
        <div class="modal-desc" style="margin-bottom:12px;">
          By using this website, you agree to our terms: All car listings are for showcase purposes only.
          No purchase or transaction is guaranteed through this site. Contact us directly for all business dealings.
          We reserve the right to update these terms at any time.
        </div>
        <div class="modal-action"><button onclick="closeModal(event)">Close</button></div>
      </div>
    </div>
  `;
};
window.showPrivacy = function(e) {
  if(e) e.preventDefault();
  document.getElementById('modal-root').innerHTML = `
    <div class="modal-backdrop" onclick="closeModal(event)">
      <div class="modal" onclick="event.stopPropagation()">
        <button class="modal-close" onclick="closeModal(event)">&times;</button>
        <div class="modal-title">Privacy Policy</div>
        <div class="modal-desc" style="margin-bottom:12px;">
          We respect your privacy. No personal information is collected unless you contact us directly.
          Cookies may be used for analytics and site improvement.
          Your data is never sold or shared with third parties.
        </div>
        <div class="modal-action"><button onclick="closeModal(event)">Close</button></div>
      </div>
    </div>
  `;
};
window.scrollToSection = function(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ======= PWA Install Prompt (if you want a button) =======
// window.showInstallPrompt = function() { if (deferredPrompt) { deferredPrompt.prompt(); deferredPrompt.userChoice.then(() => { deferredPrompt = null; }); } };

// ======= End Main JS =======
