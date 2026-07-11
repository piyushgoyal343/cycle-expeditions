// State variables
let expeditions = [];
let currentIndex = 0;

// DOM Elements
const elTitle = document.getElementById('exp-title');
const elSubtitle = document.getElementById('exp-subtitle');
const elDescription = document.getElementById('exp-description');
const elDistance = document.getElementById('stat-distance');
const elDuration = document.getElementById('stat-duration');
const elDifficulty = document.getElementById('stat-difficulty');
const elPrice = document.getElementById('stat-price');
const elDates = document.getElementById('upcoming-dates');
const elIndex = document.getElementById('current-index');
const elTotal = document.getElementById('total-count');
const btnDownloadPdf = document.getElementById('btn-download-pdf');

const elBgActive = document.getElementById('hero-bg-active');
const elBgNext = document.getElementById('hero-bg-next');

const elTabs = document.getElementById('expeditions-tabs');
const elItineraryTimeline = document.getElementById('itinerary-timeline');
const elPhotoGallery = document.getElementById('photo-gallery');
const elTestimonialContainer = document.getElementById('testimonial-container');
const elFormExpedition = document.getElementById('form-expedition');

const elSpecialitiesList = document.getElementById('specialities-list');
const elAmenitiesContainer = document.getElementById('amenities-container');

const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
const btnHeaderPrev = document.getElementById('header-prev-btn');
const btnHeaderNext = document.getElementById('header-next-btn');

// Lightbox Elements
const elLightbox = document.getElementById('lightbox');
const elLightboxImg = document.getElementById('lightbox-img');

// Fetch and load initial data
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('/api/expeditions');
    expeditions = await res.json();
    
    if (expeditions && expeditions.length > 0) {
      elTotal.textContent = expeditions.length;
      setupFormOptions();
      renderTabs();
      renderExpedition(currentIndex, false); // Initial render, no animation needed
    }
  } catch (error) {
    console.error('Failed to fetch expeditions:', error);
  }
});

// Setup inquiry form options
function setupFormOptions() {
  elFormExpedition.innerHTML = expeditions.map(exp => 
    `<option value="${exp.id}">${exp.title} (${exp.duration})</option>`
  ).join('');
}

// Render dynamic tabs in the header
function renderTabs() {
  elTabs.innerHTML = expeditions.map((exp, idx) => `
    <button class="nav-tab ${idx === currentIndex ? 'active' : ''}" onclick="selectExpedition(${idx})">
      ${exp.title}
    </button>
  `).join('');
}

// Select specific expedition from tab click
window.selectExpedition = function(index) {
  if (index === currentIndex) return;
  currentIndex = index;
  updateActiveTabClass(currentIndex);
  renderExpedition(currentIndex, true);
};

// Update active class on tab buttons
function updateActiveTabClass(activeIndex) {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach((tab, idx) => {
    if (idx === activeIndex) {
      tab.classList.add('active');
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      tab.classList.remove('active');
    }
  });
}

// Render active expedition
function renderExpedition(index, animate = true) {
  const exp = expeditions[index];
  if (!exp) return;

  // Handle counter
  elIndex.textContent = index + 1;

  // Sync tab active class if changed through slider arrows
  updateActiveTabClass(index);

  // Apply Vibrant Colors dynamically
  applyVibrantTheme(exp.theme);

  if (animate) {
    // 1. Cross-fade Background Images
    elBgNext.style.backgroundImage = `url(${exp.bgImage})`;
    elBgNext.style.opacity = '1';
    
    // Fade out text content elements
    const fadeElements = document.querySelectorAll('.fade-element');
    fadeElements.forEach(el => {
      el.classList.remove('fade-in');
      el.classList.add('fade-out');
    });

    setTimeout(() => {
      // 2. Update Content during fade out
      updateTextAndStats(exp);
      renderSpecialities(exp.specialities);
      renderAmenities(exp.amenities);
      renderItinerary(exp.itinerary);
      renderGallery(exp.photos);
      renderTestimonials(exp.testimonials);
      
      // Set PDF download URL
      btnDownloadPdf.href = exp.pdfPath;
      
      // Select appropriate option in booking form
      elFormExpedition.value = exp.id;

      // 3. Complete Background swap
      elBgActive.style.backgroundImage = `url(${exp.bgImage})`;
      elBgNext.style.opacity = '0';

      // 4. Fade back in
      fadeElements.forEach(el => {
        el.classList.remove('fade-out');
        el.classList.add('fade-in');
      });

      // Rerender icons loaded dynamically
      lucide.createIcons();
    }, 350);
  } else {
    // Simple render (page load)
    elBgActive.style.backgroundImage = `url(${exp.bgImage})`;
    updateTextAndStats(exp);
    renderSpecialities(exp.specialities);
    renderAmenities(exp.amenities);
    renderItinerary(exp.itinerary);
    renderGallery(exp.photos);
    renderTestimonials(exp.testimonials);
    btnDownloadPdf.href = exp.pdfPath;
    lucide.createIcons();
  }
}

// Dynamically set CSS variables for color scheme
function applyVibrantTheme(theme) {
  document.documentElement.style.setProperty('--accent', theme.accent);
  document.documentElement.style.setProperty('--accent-light', theme.accentLight);
  document.documentElement.style.setProperty('--text-primary', theme.primary);
  document.documentElement.style.setProperty('--gradient-start', theme.gradientStart);
  document.documentElement.style.setProperty('--gradient-end', theme.gradientEnd);
}

// Update text elements and stats
function updateTextAndStats(exp) {
  elTitle.textContent = exp.title;
  elSubtitle.textContent = exp.subtitle;
  elDescription.textContent = exp.description;
  elDistance.textContent = exp.distance;
  elDuration.textContent = exp.duration;
  
  elDifficulty.textContent = exp.difficulty;
  elDifficulty.className = `stat-val badge difficulty-${exp.difficulty.toLowerCase()}`;

  elPrice.textContent = exp.price;

  // Render dates tags
  elDates.innerHTML = exp.dates.map(date => 
    `<span class="date-tag">${date}</span>`
  ).join('');
}

// Render trip specialities list
function renderSpecialities(specialities) {
  elSpecialitiesList.innerHTML = specialities.map(spec => `
    <li>${spec}</li>
  `).join('');
}

// Render trip amenities card list
function renderAmenities(amenities) {
  elAmenitiesContainer.innerHTML = amenities.map(amenity => `
    <div class="amenity-card">
      <div class="amenity-icon-wrapper">
        <i data-lucide="${amenity.icon}"></i>
      </div>
      <h4 class="amenity-name">${amenity.name}</h4>
      <p class="amenity-desc">${amenity.description}</p>
    </div>
  `).join('');
}

// Render timeline itinerary
function renderItinerary(itineraryList) {
  elItineraryTimeline.innerHTML = itineraryList.map((item, idx) => `
    <div class="timeline-item ${idx === 0 ? 'active' : ''}">
      <div class="timeline-marker"></div>
      <div class="timeline-header" onclick="toggleTimelineItem(this)">
        <div class="timeline-title-group">
          <span class="timeline-day">Day ${item.day}</span>
          <span class="timeline-title">${item.title}</span>
        </div>
        <i data-lucide="chevron-down" class="timeline-arrow"></i>
      </div>
      <div class="timeline-body">
        <p><strong>${item.description}</strong>${item.details}</p>
      </div>
    </div>
  `).join('');
}

// Toggle accordion items on timeline
window.toggleTimelineItem = function(headerElement) {
  const item = headerElement.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all other items
  const allItems = elItineraryTimeline.querySelectorAll('.timeline-item');
  allItems.forEach(i => i.classList.remove('active'));
  
  // Open clicked one if it wasn't open
  if (!isActive) {
    item.classList.add('active');
  }
};

// Render gallery photo grid (horizontal scroll track)
function renderGallery(photos) {
  if (!photos || photos.length === 0) {
    elPhotoGallery.innerHTML = '<p class="text-secondary">No photos available.</p>';
    return;
  }

  elPhotoGallery.innerHTML = photos.map(photoPath => `
    <div class="gallery-item" onclick="openLightbox('${photoPath}')">
      <img src="${photoPath}" alt="Expedition trip photo" onerror="this.src='https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=600&auto=format&fit=crop'">
      <div class="gallery-overlay-hover">
        <i data-lucide="zoom-in"></i>
      </div>
    </div>
  `).join('');
  
  // Scroll back to start
  elPhotoGallery.scrollLeft = 0;
}

// Slide Gallery Horizontally
window.slideGallery = function(direction) {
  const cardWidth = 364; // width (340) + gap (24)
  elPhotoGallery.scrollLeft += direction * cardWidth;
};

// Render testimonials (horizontal scroll track)
function renderTestimonials(testimonials) {
  if (!testimonials || testimonials.length === 0) {
    elTestimonialContainer.innerHTML = '<p class="text-secondary">No reviews yet for this route.</p>';
    return;
  }

  elTestimonialContainer.innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="testimonial-rating">
        ${Array.from({ length: 5 }).map((_, i) => `
          <i data-lucide="star" style="${i < Math.floor(t.rating) ? '' : 'opacity: 0.3'}"></i>
        `).join('')}
      </div>
      <blockquote class="testimonial-quote">
        "${t.text}"
      </blockquote>
      <div class="testimonial-author">
        <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop'">
        <div class="author-meta">
          <span class="author-name">${t.name}</span>
          <span class="author-loc">${t.location}</span>
        </div>
      </div>
    </div>
  `).join('');

  // Scroll back to start
  elTestimonialContainer.scrollLeft = 0;
}

// Slide Testimonials Horizontally
window.slideTestimonial = function(direction) {
  const card = elTestimonialContainer.querySelector('.testimonial-card');
  if (card) {
    const cardWidth = card.clientWidth + 24; // card width + gap (24)
    elTestimonialContainer.scrollLeft += direction * cardWidth;
  } else {
    elTestimonialContainer.scrollLeft += direction * 400;
  }
};

// Lightbox functionality
window.openLightbox = function(src) {
  elLightboxImg.src = src;
  elLightbox.style.display = 'block';
};

window.closeLightbox = function() {
  elLightbox.style.display = 'none';
};

// Navigation events for slider arrows
btnNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % expeditions.length;
  renderExpedition(currentIndex, true);
});

btnPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + expeditions.length) % expeditions.length;
  renderExpedition(currentIndex, true);
});

// Navigation events for header nav arrows
btnHeaderNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % expeditions.length;
  renderExpedition(currentIndex, true);
});

btnHeaderPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + expeditions.length) % expeditions.length;
  renderExpedition(currentIndex, true);
});

// Scroll helper
window.scrollToBooking = function() {
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
};

// Handle booking inquiry form submission
window.handleInquirySubmit = function(event) {
  event.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const phone = document.getElementById('form-phone').value;
  const expeditionId = document.getElementById('form-expedition').value;
  const message = document.getElementById('form-msg').value;

  const selectedExp = expeditions.find(e => e.id === expeditionId);

  alert(`Thank you, ${name}! Your inquiry for the "${selectedExp ? selectedExp.title : expeditionId}" expedition has been received. Our lead rider will contact you at ${email} within 24 hours.`);
  
  // Reset form
  document.getElementById('inquiry-form').reset();
};
