/**
 * Prajwal Ferrao Portfolio — Core Client Scripts
 * High-performance, dependency-free vanilla JavaScript
 */

// ==========================================================================
// 1. Case Study Data Store
// ==========================================================================
const caseStudies = {
  facetrack: {
    title: "FaceTrack — AI Biometric Attendance System",
    category: "Computer Vision · Full-Stack Web",
    status: "Live & Deployed",
    liveUrl: "https://face-recognition-attendance-lemon.vercel.app/",
    codeUrl: "https://github.com/prajwalprajwalferrao-cloud/face-recognition-attendance",
    metric: "99.2% face identification accuracy · Automated CSV attendance export",
    tags: ["Python", "OpenCV", "Flask", "LBPH Algorithm", "JavaScript", "HTML5", "Vercel"],
    problem: "Traditional manual roll calls and RFID badge systems in educational institutions and offices are susceptible to proxy marking, administrative delays, and lost credentials.",
    solution: "Built an intelligent automated biometric attendance web application. The system handles member image enrollment, trains a localized LBPH (Local Binary Patterns Histograms) face recognizer model, identifies authorized individuals via a live webcam feed in real time, and logs timestamped attendance automatically.",
    architecture: [
      "Face Processing Pipeline: Haar Cascade classifiers detect multi-scale facial bounding boxes followed by grayscale normalization and histogram equalization.",
      "Recognition Engine: OpenCV LBPH recognizer computes texture micro-patterns, comparing live feature descriptors against registered student profiles.",
      "Web Interface: Flask backend provides a secure administrative dashboard with live student registration, model retrain triggers, and attendance analytics export."
    ],
    challenges: "Handling variations in room ambient lighting and minor head tilt angles. Overcame this by synthesizing augmented training crops with varying gamma levels and setting an adaptive confidence distance threshold.",
    outcome: "Reduced daily classroom attendance logging time from 8 minutes to under 20 seconds, completely preventing proxy attendance."
  },

  aegisfall: {
    title: "AegisFall — AI Fall Detection & Emergency System",
    category: "AI & ML · Full-Stack Web",
    status: "Live & Deployed",
    liveUrl: "https://aegisfall-ai-detection.vercel.app/",
    codeUrl: "https://github.com/prajwalprajwalferrao-cloud/aegisfall-ai-detection",
    metric: "< 150ms pose inference · Automated SMS alert within 10s",
    tags: ["React", "Vite", "MediaPipe", "Node.js", "Express", "MongoDB", "Twilio API"],
    problem: "Elderly and post-operative patients often experience unassisted falls that go unnoticed for extended periods, resulting in severe complications, prolonged hospitalization, and delayed emergency response.",
    solution: "Designed and engineered an automated multi-stage computer-vision safety platform. It captures live camera feeds, calculates real-time 33-point skeletal pose landmarks in the browser, detects sudden posture collapses, initiates an audible 10-second buzzer countdown, and dispatches automated emergency notifications if not canceled.",
    architecture: [
      "Client-Side AI: MediaPipe Pose landmark estimation computes hip-drop speed, torso tilt angle, and floor proximity at 30+ FPS directly in the browser via WebAssembly.",
      "Backend API: Node.js/Express server manages authentication, user profiles, emergency contact registries, and alert logs in MongoDB.",
      "Dispatch Engine: Twilio SMS API integration triggers urgent geolocation-stamped alerts to family members and healthcare providers upon verified fall events."
    ],
    challenges: "Minimizing false positives caused by rapid sitting down or tying shoelaces. Resolved by implementing a 12-frame rolling temporal window and dual velocity-angle thresholds before arming the emergency sequence.",
    outcome: "Eliminated the need for wearable fall pendants that patients frequently forget to wear. Achieved zero-lag in-browser inference without requiring costly GPU server instances."
  },

  imcleague: {
    title: "IMC League S4 — Management Platform",
    category: "Full-Stack Web Platform",
    status: "Live & Deployed",
    liveUrl: "https://imc-league-s4-lake.vercel.app/",
    codeUrl: "https://github.com/prajwalprajwalferrao-cloud/imc-league-s4",
    metric: "100+ active players & teams · Sub-second real-time scoring updates",
    tags: ["Next.js", "React", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    problem: "Organizing amateur sports tournaments involves chaotic spreadsheet coordination for auctions, player bids, match schedules, points tables, and live scorekeeping.",
    solution: "Created an end-to-end tournament management platform with role-based access control. The platform features an interactive player auction module, automated tournament bracket generators, live over-by-over score updating, and a real-time leaderboard for players and fans.",
    architecture: [
      "Modern Web Stack: Next.js App Router for server-rendered SEO landing pages coupled with dynamic client dashboard widgets.",
      "Cloud Database: Supabase (PostgreSQL) with Realtime WebSockets broadcasting instant score updates and auction bid changes to all connected devices.",
      "Role-Based Security: Row-Level Security (RLS) policies ensuring only verified tournament administrators can edit match scores and finalize auction rosters."
    ],
    challenges: "Managing concurrent bids during high-speed live player auctions without race conditions. Solved using PostgreSQL database-level atomic transactions and optimistic UI locking.",
    outcome: "Successfully powered the entire Season 4 tournament end-to-end, delivering a zero-downtime, professional live experience to over 500 spectators."
  },

  houseprice: {
    title: "House Price Prediction & Real Estate Analytics",
    category: "Machine Learning · Interactive Dashboard",
    status: "Live & Deployed",
    liveUrl: "https://housepriceprediction-sofkbghj7kkbmkyqtuq63p.streamlit.app/",
    codeUrl: "https://github.com/prajwalprajwalferrao-cloud",
    metric: "0.89 R² score · 4 ML models benchmarked and interactive sliders",
    tags: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Streamlit", "NumPy"],
    problem: "Real estate valuation is often opaque and biased, making it difficult for homebuyers and investors to evaluate whether property listing prices reflect actual market fundamentals.",
    solution: "Developed an interactive machine learning regression application that benchmarks multiple predictive models (Linear Regression, Decision Trees, Random Forest, and XGBoost) to produce accurate, feature-weighted property valuations with real-time UI sliders.",
    architecture: [
      "Data Science Pipeline: Comprehensive exploratory data analysis, outlier removal with IQR, log transforms on skewed target values, and one-hot encoding of categorical areas.",
      "Model Evaluation: Evaluated cross-validation Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² variance to select the optimal XGBoost model.",
      "Interactive Frontend: Lightweight Python Streamlit interface that recalculates price estimations on the fly as the user adjusts square footage, bedroom count, and neighborhood tier."
    ],
    challenges: "Handling extreme outliers in high-end luxury properties without distorting predictions for median family homes.",
    outcome: "Provided an intuitive, transparent valuation tool that anyone can test live from any browser without installing Python or data libraries."
  },

  greenmeter: {
    title: "GreenMeter Pro — Vehicle Emission Diagnostics",
    category: "IoT · Mobile · Cloud System",
    status: "In Development (Phase 2 Prototype)",
    liveUrl: "#contact",
    codeUrl: "https://github.com/prajwalprajwalferrao-cloud",
    metric: "Dual Petrol (OBD-II) & Diesel (ESP32) Sensing Pipeline",
    tags: ["Flutter", "ESP32", "OBD-II CAN Bus", "Firebase", "Node.js", "C++"],
    problem: "Vehicle emission certifications in many regions rely on infrequent, static physical testing stations, allowing malfunctioning or tuned vehicles to emit excessive pollutants between annual checks unnoticed.",
    solution: "Developing a hybrid real-time emission monitoring hardware-software ecosystem. For petrol vehicles, it connects via an ELM327 OBD-II interface to stream engine telemetry (O2 sensor voltages, MAF, catalytic converter efficiency). For diesel vehicles, an ESP32 hardware module with gas and particulate sensors measures tailpipe outputs, syncing live telemetry with a cross-platform mobile app.",
    architecture: [
      "Hardware Sensor Rig: ESP32 microcontroller reading analog gas sensor arrays (MQ-135/optical dust) with BLE telemetry broadcasting.",
      "Vehicle Diagnostic Interface: Standard OBD-II PID polling requesting real-time fuel-air ratios, RPM, and trouble codes (DTCs).",
      "Mobile & Cloud: Flutter client with Bluetooth Low Energy (BLE) connectivity streaming telemetry to Firebase Realtime Database for historical compliance tracking."
    ],
    challenges: "Balancing microsecond sensor read loops with Bluetooth transmission packet stability in high-vibration automotive environments.",
    outcome: "Research published and prototyped into a working hardware demonstration, paving the way for proactive automotive fleet emission governance."
  }
};

// Backwards compatibility alias
caseStudies.facerecog = caseStudies.facetrack;

// ==========================================================================
// 2. DOM Initialization
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initTypewriter();
  initScrollProgress();
  initStickyNav();
  initProjectFilters();
  initTimelineTabs();
  initCaseStudyModal();
  initCopyToast();
  initLiveClock();
  initContactForm();
});

// ==========================================================================
// 3. Theme Toggle (Dark / Light Mode with localStorage)
// ==========================================================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const initialTheme = savedTheme || (prefersLight ? "light" : "dark");

  document.documentElement.setAttribute("data-theme", initialTheme);
  updateThemeIcon(initialTheme);

  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  
  if (theme === "light") {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>
      <span class="sr-only">Switch to dark mode</span>
    `;
    toggleBtn.setAttribute("aria-label", "Switch to dark mode");
  } else {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun" aria-hidden="true">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path><path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path><path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
      </svg>
      <span class="sr-only">Switch to light mode</span>
    `;
    toggleBtn.setAttribute("aria-label", "Switch to light mode");
  }
}

// ==========================================================================
// 4. Rotating Dynamic Typewriter in Hero
// ==========================================================================
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  if (!target) return;

  const roles = [
    "AI & ML Engineer",
    "Full-Stack Web Developer",
    "Computer Vision Specialist",
    "IoT & Hardware Builder"
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function tick() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(tick, typingSpeed);
  }

  tick();
}

// ==========================================================================
// 5. Scroll Progress Bar
// ==========================================================================
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  }, { passive: true });
}

// ==========================================================================
// 6. Sticky Navbar & IntersectionObserver Active Highlight
// ==========================================================================
function initStickyNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("nav-active");
          } else {
            link.classList.remove("nav-active");
          }
        });
      }
    });
  }, {
    rootMargin: "-25% 0px -65% 0px"
  });

  sections.forEach((sec) => observer.observe(sec));
}

// ==========================================================================
// 7. Project Category Filtering with Animations
// ==========================================================================
function initProjectFilters() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".project-card");
  if (filterTabs.length === 0 || projectCards.length === 0) return;

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");

      filterTabs.forEach((t) => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "grid";
          card.style.opacity = "0";
          card.style.transform = "translateY(8px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.25s ease, transform 0.25s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// ==========================================================================
// 8. Interactive Timeline Tabs (All / Education / Experience)
// ==========================================================================
function initTimelineTabs() {
  const tabs = document.querySelectorAll("[data-timeline-filter]");
  const items = document.querySelectorAll("[data-timeline-category]");
  if (tabs.length === 0 || items.length === 0) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-timeline-filter");

      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      items.forEach(item => {
        const cat = item.getAttribute("data-timeline-category");
        if (filter === "all" || cat === filter) {
          item.style.display = "block";
          item.style.opacity = "0";
          setTimeout(() => {
            item.style.transition = "opacity 0.25s ease";
            item.style.opacity = "1";
          }, 30);
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

// ==========================================================================
// 9. Interactive Case Study Modal Dialog
// ==========================================================================
function initCaseStudyModal() {
  const modal = document.getElementById("case-study-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const modalContent = document.getElementById("modal-body-content");
  if (!modal || !closeBtn || !modalContent) return;

  // Delegate click for open modal buttons
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest("[data-open-case-study]");
    if (!trigger) return;
    e.preventDefault();
    e.stopPropagation();

    const studyId = trigger.getAttribute("data-open-case-study");
    const data = caseStudies[studyId];
    if (!data) return;

    renderCaseStudy(data, modalContent);
    modal.showModal();
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.close();
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeModal();
    }
  });

  modal.addEventListener("cancel", () => {
    document.body.style.overflow = "";
  });
}

function renderCaseStudy(data, container) {
  const tagsHtml = data.tags.map(tag => `<li>${tag}</li>`).join("");
  const archHtml = data.architecture.map(point => `<li>${point}</li>`).join("");

  container.innerHTML = `
    <header class="modal-header">
      <div class="modal-meta">
        <span class="modal-category">${data.category}</span>
        <span class="modal-badge-metric">${data.metric}</span>
      </div>
      <h2 class="modal-title">${data.title}</h2>
    </header>

    <div class="modal-actions-bar">
      ${data.liveUrl !== "#contact" ? `
        <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer" class="primary-button modal-btn">
          Open Live Project
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      ` : `
        <a href="#contact" class="primary-button modal-btn" onclick="document.getElementById('case-study-modal').close();">
          Inquire About Early Prototype
        </a>
      `}
      <a href="${data.codeUrl}" target="_blank" rel="noopener noreferrer" class="secondary-button modal-btn">
        View Source on GitHub
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6a9 9 0 0 0-9 9V3"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle></svg>
      </a>
    </div>

    <section class="modal-section">
      <h3>The Challenge &amp; Problem</h3>
      <p>${data.problem}</p>
    </section>

    <section class="modal-section">
      <h3>Engineering Solution</h3>
      <p>${data.solution}</p>
    </section>

    <section class="modal-section">
      <h3>Key Architectural Decisions</h3>
      <ul class="modal-list">${archHtml}</ul>
    </section>

    <section class="modal-section">
      <h3>Challenges &amp; Trade-offs</h3>
      <p>${data.challenges}</p>
    </section>

    <section class="modal-section">
      <h3>Measurable Outcome &amp; Impact</h3>
      <p>${data.outcome}</p>
    </section>

    <section class="modal-section">
      <h3>Core Technologies Used</h3>
      <ul class="tech-tags-list">${tagsHtml}</ul>
    </section>
  `;
}

// ==========================================================================
// 10. Live IST Clock for Base Coordinates
// ==========================================================================
function initLiveClock() {
  const clockEl = document.getElementById("live-ist-clock");
  if (!clockEl) return;

  function update() {
    try {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      const now = new Date();
      const istTimeStr = new Intl.DateTimeFormat("en-US", options).format(now);
      clockEl.textContent = `${istTimeStr} IST (UTC +5:30)`;
    } catch (e) {
      clockEl.textContent = "Mangaluru IST";
    }
  }

  update();
  setInterval(update, 1000);
}

// ==========================================================================
// 11. 1-Click Copy with Floating Toast
// ==========================================================================
function initCopyToast() {
  const toast = document.getElementById("copy-toast");
  const copyBtns = document.querySelectorAll("[data-copy]");

  copyBtns.forEach(btn => {
    btn.addEventListener("click", async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute("data-copy");
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        if (toast) {
          toast.textContent = `Copied: ${textToCopy}`;
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 2400);
        }
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        if (toast) {
          toast.textContent = `Copied: ${textToCopy}`;
          toast.classList.add("show");
          setTimeout(() => {
            toast.classList.remove("show");
          }, 2400);
        }
      }
    });
  });
}

// ==========================================================================
// 12. Contact Form Submissions with Visual Feedback & Mailto Fallback
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const formStatus = document.getElementById("form-status");
  if (!form || !formStatus) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector("button[type='submit']");
    const originalBtnText = submitBtn ? submitBtn.innerHTML : "Send Message";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending...`;
    }

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    // If Formspree endpoint is placeholder, open direct mailto
    if (!action || action.includes("YOUR_FORMSPREE_ID")) {
      const name = formData.get("name") || "";
      const email = formData.get("email") || "";
      const subject = formData.get("subject") || "Portfolio Inquiry";
      const message = formData.get("message") || "";

      const mailtoUrl = `mailto:prajwalprajwalferrao@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})

Message:
${message}`)}`;
      window.location.href = mailtoUrl;

      formStatus.innerHTML = `
        <div class="status-box status-success">
          Opening your email client to dispatch message directly to prajwalprajwalferrao@gmail.com...
        </div>
      `;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        formStatus.innerHTML = `
          <div class="status-box status-success">
            Thank you! Your message has been sent successfully. I will get back to you shortly.
          </div>
        `;
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || "Submission failed");
      }
    } catch (err) {
      formStatus.innerHTML = `
        <div class="status-box status-error">
          Oops! There was an issue sending your message. Please email me directly at <a href="mailto:prajwalprajwalferrao@gmail.com" style="text-decoration:underline;">prajwalprajwalferrao@gmail.com</a>.
        </div>
      `;
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
}
