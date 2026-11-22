// RallyUp — IIT Kharagpur Campus Activity Coordination Engine

// Current User Profile State: Ankit, Azad Hall, Final Year B.Tech (No Department)
const CURRENT_USER = {
  id: "user_ankit",
  name: "Ankit",
  role: "Azad Hall • Final Year B.Tech",
  avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&h=160&fit=crop&crop=faces",
  showUpScore: 95,
  badge: "GOLD",
  joinedRallyIds: ["rally_1", "rally_4"]
};

// Initial Seed Data for IIT Kharagpur Campus
const INITIAL_RALLIES = [
  {
    id: "rally_1",
    title: "🏏 Azad Quad 6v6 Box Cricket",
    category: "Sports",
    organizer: {
      name: "Ankit",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&h=160&fit=crop&crop=faces",
      score: 95
    },
    minPlayers: 6,
    maxPlayers: 12,
    time: "Today 5:30 PM – 7:00 PM",
    venue: "Azad Hall Main Quad",
    scope: "Azad + Nehru + Patel",
    vibes: ["#BoxCricket", "#TennisBall", "#Quick1Hour"],
    expiresInMins: 35,
    confirmed: false,
    venuePoll: [
      { name: "Azad Hall Main Quad", votes: 4 },
      { name: "Tata Sports Complex Ground", votes: 1 }
    ],
    players: [
      { id: "user_ankit", name: "Ankit (You)", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&h=160&fit=crop&crop=faces", score: 95, checkedIn: true },
      { id: "u2", name: "Subham Das (Nehru)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces", score: 92, checkedIn: false },
      { id: "u3", name: "Rohan Roy (Patel)", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces", score: 96, checkedIn: false },
      { id: "u4", name: "Vivek Sharma (Azad)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces", score: 90, checkedIn: false },
      { id: "u5", name: "Abhishek Jha (RK)", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces", score: 94, checkedIn: false }
    ],
    messages: [
      { sender: "Subham", text: "Bringing taped tennis balls from TechM!" },
      { sender: "Rohan", text: "Cycled back from Nalanda, reaching in 5 mins." }
    ]
  },
  {
    id: "rally_2",
    title: "📚 CDC Placement Prep: Mock Interviews & System Design",
    category: "Academics",
    organizer: {
      name: "Priya Nair",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
      score: 97
    },
    minPlayers: 3,
    maxPlayers: 5,
    time: "Tonight 8:30 PM – 10:30 PM",
    venue: "Nalanda Classroom Complex (NRN 120)",
    scope: "Final Year B.Tech Only",
    vibes: ["#CDCPlacement", "#MockInterviews", "#SilentFocus"],
    expiresInMins: 90,
    confirmed: false,
    venuePoll: [
      { name: "Nalanda Complex (NRN 120)", votes: 2 },
      { name: "Central Library Discussion Room", votes: 1 }
    ],
    players: [
      { id: "u_priya", name: "Priya Nair (SN/IG)", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces", score: 97, checkedIn: false },
      { id: "u_rohan", name: "Rohan Das (Patel)", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces", score: 91, checkedIn: false }
    ],
    messages: [
      { sender: "Priya", text: "Running 1 mock round each for Day 1 interview prep." }
    ]
  },
  {
    id: "rally_3",
    title: "🚴 2.2K Campus Perimeter Sunset Cycle Ride",
    category: "Travel",
    organizer: {
      name: "Tanmay Joshi",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
      score: 89
    },
    minPlayers: 3,
    maxPlayers: 8,
    time: "Today 6:15 PM – 7:15 PM",
    venue: "Azad Hall Cycle Stand",
    scope: "Entire Campus",
    vibes: ["#2.2KLoop", "#Breeze", "#CasualPace"],
    expiresInMins: 50,
    confirmed: true,
    venuePoll: [
      { name: "Azad Cycle Stand", votes: 3 }
    ],
    players: [
      { id: "u_tanmay", name: "Tanmay (Azad)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces", score: 89, checkedIn: false },
      { id: "u_deepak", name: "Deepak S. (LLR)", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces", score: 96, checkedIn: false },
      { id: "u_simran", name: "Simran K. (SAM)", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=faces", score: 92, checkedIn: false }
    ],
    messages: [
      { sender: "Tanmay", text: "Starting from Azad -> Gymkhana -> Main Building -> Tikka -> TechM." }
    ]
  },
  {
    id: "rally_4",
    title: "☕ Chhedis Midnight Chai & Bun Maska Run",
    category: "Food",
    organizer: {
      name: "Sahil Mehta",
      avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=100&h=100&fit=crop&crop=faces",
      score: 93
    },
    minPlayers: 3,
    maxPlayers: 6,
    time: "Tonight 11:30 PM",
    venue: "Chhedis Night Canteen",
    scope: "Open KGP",
    vibes: ["#ChhedisAdda", "#BunMaska", "#StressBuster"],
    expiresInMins: 135,
    confirmed: true,
    venuePoll: [
      { name: "Chhedis Night Canteen", votes: 3 },
      { name: "TechM Night Corner", votes: 1 }
    ],
    players: [
      { id: "u_sahil", name: "Sahil (Patel)", avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=100&h=100&fit=crop&crop=faces", score: 93, checkedIn: false },
      { id: "user_ankit", name: "Ankit (You)", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=160&h=160&fit=crop&crop=faces", score: 95, checkedIn: false },
      { id: "u_vikas", name: "Vikas Gill (RP)", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces", score: 88, checkedIn: false }
    ],
    messages: [
      { sender: "Sahil", text: "Treating for my BTP review presentation today! ☕" }
    ]
  },
  {
    id: "rally_5",
    title: "🎸 Spring Fest Acoustic Jamming & Vocals",
    category: "Creative",
    organizer: {
      name: "Diya Biswas",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
      score: 98
    },
    minPlayers: 2,
    maxPlayers: 4,
    time: "Tomorrow 6:00 PM – 7:30 PM",
    venue: "Old SAC Open Amphitheatre",
    scope: "Entire Campus",
    vibes: ["#SpringFestJam", "#IndieBollywood", "#OpenJam"],
    expiresInMins: 320,
    confirmed: false,
    venuePoll: [
      { name: "Old SAC Amphitheatre", votes: 1 }
    ],
    players: [
      { id: "u_diya", name: "Diya Biswas (MT)", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces", score: 98, checkedIn: false }
    ],
    messages: []
  },
  {
    id: "rally_6",
    title: "💻 Inter-IIT Tech Meet Hackathon Team",
    category: "Academics",
    organizer: {
      name: "Anuj Shivhare",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
      score: 95
    },
    minPlayers: 4,
    maxPlayers: 6,
    time: "Saturday 4:00 PM",
    venue: "Central Library Discussion Room",
    scope: "All Years",
    vibes: ["#InterIIT", "#ML/AI", "#ReactDev"],
    expiresInMins: 580,
    confirmed: false,
    venuePoll: [
      { name: "Central Library Room 4", votes: 2 }
    ],
    players: [
      { id: "u_anuj", name: "Anuj S. (RK)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces", score: 95, checkedIn: false },
      { id: "u_ritika", name: "Ritika G. (SN)", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces", score: 91, checkedIn: false }
    ],
    messages: [
      { sender: "Anuj", text: "Looking for 1 frontend dev and 1 backend systems coder!" }
    ]
  }
];

const INITIAL_SQUADS = [
  {
    id: "squad_1",
    name: "Azad Hall Box Cricket League",
    category: "Sports",
    icon: "🏏",
    membersCount: 64,
    frequency: "Daily 5:30 PM at Azad Quad",
    description: "Azad Hall's iconic evening quad cricket. Taped tennis ball only.",
    isMember: true
  },
  {
    id: "squad_2",
    name: "KGP Final Year CDC Placement Grind",
    category: "Academics",
    icon: "💻",
    membersCount: 148,
    frequency: "Daily 9:00 PM (Nalanda & Library)",
    description: "Accountability squad for mock interviews, quant, and coding rounds.",
    isMember: true
  },
  {
    id: "squad_3",
    name: "Chhedis Midnight Chai & Adda Club",
    category: "Food",
    icon: "☕",
    membersCount: 92,
    frequency: "Every Night 11:30 PM",
    description: "Late night chai, bun maska, and de-stress adda at Chhedis.",
    isMember: true
  },
  {
    id: "squad_4",
    name: "Campus Cyclists Guild (2.2K Loop)",
    category: "Travel",
    icon: "🚴",
    membersCount: 56,
    frequency: "Tuesday & Thursday 6:15 PM",
    description: "Exploring the full 2,200-acre KGP campus on cycle.",
    isMember: false
  }
];

// App State Management
let appState = {
  currentTab: 'feed',
  activeCategory: 'All',
  selectedRallyId: null,
  rallies: [],
  squads: [],
  myRalliesFilter: 'upcoming',
  isExpandedView: false
};

// Initialize App
function initApp() {
  // Always load fresh seed data when resetting or initializing
  const savedRallies = localStorage.getItem('rallyup_kgp_rallies');
  const savedSquads = localStorage.getItem('rallyup_kgp_squads');

  appState.rallies = savedRallies ? JSON.parse(savedRallies) : INITIAL_RALLIES;
  appState.squads = savedSquads ? JSON.parse(savedSquads) : INITIAL_SQUADS;

  // Render initial components
  renderFeed();
  renderSquads();
  renderMyRallies();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup View Toggle
  const viewToggle = document.getElementById('view-mode-toggle');
  if (viewToggle) {
    viewToggle.addEventListener('click', toggleViewMode);
  }
}

// Save Rallies
function saveRallies() {
  localStorage.setItem('rallyup_kgp_rallies', JSON.stringify(appState.rallies));
}

// Toggle View Mode (Phone frame vs Expanded)
function toggleViewMode() {
  const container = document.getElementById('app-container');
  appState.isExpandedView = !appState.isExpandedView;
  if (appState.isExpandedView) {
    container.classList.add('expanded-desktop-mode');
  } else {
    container.classList.remove('expanded-desktop-mode');
  }
}

// Switch Bottom Tabs
function switchTab(tabId) {
  appState.currentTab = tabId;

  // Hide all screens
  ['feed', 'squads', 'my-rallies', 'profile'].forEach(id => {
    const el = document.getElementById(`tab-${id}`);
    if (el) el.classList.add('hidden');
    const navBtn = document.getElementById(`nav-btn-${id}`);
    if (navBtn) {
      navBtn.classList.remove('active-nav', 'text-orange-400');
      navBtn.classList.add('text-slate-400');
    }
  });

  // Show active screen
  const activeEl = document.getElementById(`tab-${tabId}`);
  if (activeEl) activeEl.classList.remove('hidden');

  const activeBtn = document.getElementById(`nav-btn-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.add('active-nav', 'text-orange-400');
    activeBtn.classList.remove('text-slate-400');
  }

  if (tabId === 'my-rallies') {
    renderMyRallies();
  } else if (tabId === 'squads') {
    renderSquads();
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Category Filter
function filterCategory(cat) {
  appState.activeCategory = cat;

  // Update pills UI
  const pills = document.querySelectorAll('.category-pill');
  pills.forEach(p => {
    if (p.textContent.includes(cat) || (cat === 'All' && p.textContent.includes('All'))) {
      p.classList.add('active-pill');
    } else {
      p.classList.remove('active-pill');
    }
  });

  renderFeed();
}

// Render Feed
function renderFeed() {
  const container = document.getElementById('rallies-list');
  if (!container) return;

  let filtered = appState.rallies;
  if (appState.activeCategory !== 'All') {
    filtered = filtered.filter(r => r.category === appState.activeCategory);
  }

  document.getElementById('rally-count-text').textContent = `${filtered.length} rallies found in KGP`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12 px-4 bg-slate-900/40 rounded-2xl border border-slate-800">
        <div class="w-12 h-12 rounded-full bg-slate-800 text-slate-500 mx-auto flex items-center justify-center mb-3">
          <i data-lucide="compass" class="w-6 h-6"></i>
        </div>
        <p class="text-sm font-semibold text-slate-300">No active Rallies in this category</p>
        <p class="text-xs text-slate-500 mt-1">Be the first to rally Azad Hall & KGP peers!</p>
        <button onclick="openCreateModal()" class="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xs font-bold shadow-lg transition">
          + Start a Rally
        </button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = '';
  filtered.forEach(rally => {
    const isJoined = rally.players.some(p => p.id === CURRENT_USER.id);
    const playerCount = rally.players.length;
    const progressPercent = Math.min(100, Math.round((playerCount / rally.minPlayers) * 100));
    const isConfirmed = playerCount >= rally.minPlayers || rally.confirmed;
    const spotsLeft = Math.max(0, rally.minPlayers - playerCount);

    html += `
      <div class="rally-card bg-slate-800/80 border ${isConfirmed ? 'border-emerald-500/40' : 'border-slate-700/70'} rounded-2xl p-4 shadow-md cursor-pointer transition relative" onclick="openDetailsModal('${rally.id}')">
        
        <!-- Header row -->
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-2">
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${getCategoryBadgeStyle(rally.category)}">
              ${rally.category}
            </span>
            ${isConfirmed ? `
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Confirmed ✅
              </span>
            ` : `
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                ${spotsLeft} needed to confirm
              </span>
            `}
          </div>

          <span class="text-[11px] text-slate-400 font-medium flex items-center gap-1">
            <i data-lucide="clock" class="w-3 h-3 text-slate-400"></i>
            <span>${rally.expiresInMins}m left</span>
          </span>
        </div>

        <!-- Title -->
        <h4 class="font-display font-bold text-base text-white mt-2 leading-snug">
          ${rally.title}
        </h4>

        <!-- Venue & Time snippet -->
        <div class="text-xs text-slate-400 mt-1 flex flex-wrap items-center gap-y-1 gap-x-3">
          <span class="flex items-center gap-1 text-slate-300">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-orange-400"></i>
            <span>${rally.venue}</span>
          </span>
          <span class="flex items-center gap-1">
            <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>
            <span>${rally.time}</span>
          </span>
        </div>

        <!-- Headcount Progress Bar -->
        <div class="mt-3 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800">
          <div class="flex justify-between items-center text-xs mb-1">
            <div class="flex items-center gap-1.5">
              <span class="font-bold text-white">${playerCount}</span>
              <span class="text-slate-400">/ ${rally.minPlayers} KGPians needed</span>
            </div>
            <span class="text-[11px] font-bold ${isConfirmed ? 'text-emerald-400' : 'text-orange-400'}">
              ${progressPercent}%
            </span>
          </div>
          <div class="w-full h-2 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
            <div class="h-full ${isConfirmed ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-orange-500 to-amber-400'} rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>
        </div>

        <!-- Avatars + Join Button Row -->
        <div class="mt-3 flex items-center justify-between pt-1 border-t border-slate-700/40">
          <div class="flex items-center -space-x-2">
            ${rally.players.slice(0, 4).map(p => `
              <img src="${p.avatar}" title="${p.name} (⭐ ${p.score}%)" class="w-6 h-6 rounded-full object-cover ring-2 ring-slate-900" alt="${p.name}">
            `).join('')}
            ${playerCount > 4 ? `
              <span class="w-6 h-6 rounded-full bg-slate-700 text-slate-200 text-[9px] font-bold flex items-center justify-center ring-2 ring-slate-900">
                +${playerCount - 4}
              </span>
            ` : ''}
            <span class="text-[10px] text-slate-400 pl-3">Started by ${rally.organizer.name.split(' ')[0]} (⭐ ${rally.organizer.score}%)</span>
          </div>

          <button onclick="event.stopPropagation(); toggleJoinRally('${rally.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm ${isJoined ? 'bg-slate-700 hover:bg-slate-600 text-rose-300' : 'bg-orange-500 hover:bg-orange-600 text-white shadow-orange-500/20'}">
            ${isJoined ? 'Leave' : 'I\'m In 🙋'}
          </button>
        </div>

      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function getCategoryBadgeStyle(cat) {
  switch (cat) {
    case 'Sports': return 'bg-orange-500/10 text-orange-400 border border-orange-500/20';
    case 'Academics': return 'bg-sky-500/10 text-sky-400 border border-sky-500/20';
    case 'Travel': return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
    case 'Food': return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
    case 'Creative': return 'bg-purple-500/10 text-purple-400 border border-purple-500/20';
    default: return 'bg-slate-700 text-slate-300';
  }
}

// Render Squads Tab
function renderSquads() {
  const container = document.getElementById('squads-list');
  if (!container) return;

  let html = '';
  appState.squads.forEach(s => {
    html += `
      <div class="bg-slate-800/70 border border-slate-700 rounded-2xl p-4 transition hover:border-slate-600">
        <div class="flex items-start justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-xl shadow-inner">
              ${s.icon}
            </div>
            <div>
              <h4 class="font-display font-bold text-white text-sm leading-tight">${s.name}</h4>
              <p class="text-[11px] text-slate-400 mt-0.5">${s.membersCount} KGPians • ${s.frequency}</p>
            </div>
          </div>
          <button onclick="toggleJoinSquad('${s.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold transition ${s.isMember ? 'bg-slate-700 text-slate-300' : 'bg-orange-500 hover:bg-orange-600 text-white'}">
            ${s.isMember ? 'Joined' : 'Join'}
          </button>
        </div>
        <p class="text-xs text-slate-300 mt-2.5 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
          "${s.description}"
        </p>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

// Toggle Join Squad
function toggleJoinSquad(squadId) {
  const squad = appState.squads.find(s => s.id === squadId);
  if (!squad) return;

  squad.isMember = !squad.isMember;
  squad.membersCount += squad.isMember ? 1 : -1;
  localStorage.setItem('rallyup_kgp_squads', JSON.stringify(appState.squads));
  renderSquads();
  showToast(squad.isMember ? `Joined ${squad.name}!` : `Left ${squad.name}`);
}

// Render My Rallies
function renderMyRallies() {
  const container = document.getElementById('my-rallies-list');
  if (!container) return;

  const joined = appState.rallies.filter(r => r.players.some(p => p.id === CURRENT_USER.id));

  if (joined.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-500 text-xs">
        You haven't joined any active KGP Rallies yet.<br>Explore the campus feed and tap "I'm In"!
      </div>
    `;
    return;
  }

  let html = '';
  joined.forEach(r => {
    html += `
      <div class="bg-slate-800/90 border border-slate-700 rounded-2xl p-3.5 cursor-pointer hover:border-orange-500/50 transition" onclick="openDetailsModal('${r.id}')">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-white text-sm">${r.title}</span>
          <span class="text-emerald-400 font-semibold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Active</span>
        </div>
        <div class="text-[11px] text-slate-400 mt-1 flex items-center gap-2">
          <span>📍 ${r.venue}</span>
          <span>•</span>
          <span>🕐 ${r.time}</span>
        </div>
        <div class="mt-2 flex items-center justify-between pt-2 border-t border-slate-700/50 text-xs">
          <span class="text-slate-400 text-[10px]">${r.players.length} KGPians joined</span>
          <span class="text-orange-400 font-bold text-[11px] flex items-center gap-1">Open Live Room →</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function toggleMyRalliesFilter(filter) {
  appState.myRalliesFilter = filter;
  const btnUp = document.getElementById('btn-subtab-upcoming');
  const btnHist = document.getElementById('btn-subtab-history');

  if (filter === 'upcoming') {
    btnUp.classList.add('text-orange-400', 'border-b-2', 'border-orange-500');
    btnHist.classList.remove('text-orange-400', 'border-b-2', 'border-orange-500');
    btnHist.classList.add('text-slate-400');
    renderMyRallies();
  } else {
    btnHist.classList.add('text-orange-400', 'border-b-2', 'border-orange-500');
    btnUp.classList.remove('text-orange-400', 'border-b-2', 'border-orange-500');
    btnUp.classList.add('text-slate-400');

    // Show realistic KGP history
    const container = document.getElementById('my-rallies-list');
    container.innerHTML = `
      <div class="space-y-2 text-xs">
        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <div class="font-semibold text-slate-200">🏏 Azad vs Patel Quad Box Cricket Derby</div>
            <div class="text-[10px] text-slate-400">Azad Hall Quad • Nov 20, 2026</div>
          </div>
          <span class="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">Checked In ✅</span>
        </div>
        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <div class="font-semibold text-slate-200">📚 CDC Mock Quant & Case Session</div>
            <div class="text-[10px] text-slate-400">Nalanda Complex (NRN 108) • Nov 18, 2026</div>
          </div>
          <span class="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">Checked In ✅</span>
        </div>
        <div class="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex justify-between items-center">
          <div>
            <div class="font-semibold text-slate-200">☕ Chhedis Midnight Toast & Chai</div>
            <div class="text-[10px] text-slate-400">Chhedis Canteen • Nov 16, 2026</div>
          </div>
          <span class="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded">Checked In ✅</span>
        </div>
      </div>
    `;
  }
}

// Open Details Modal
function openDetailsModal(rallyId) {
  const rally = appState.rallies.find(r => r.id === rallyId);
  if (!rally) return;

  appState.selectedRallyId = rallyId;

  // Fill details
  document.getElementById('detail-title').textContent = rally.title;
  document.getElementById('detail-category-badge').textContent = rally.category;
  document.getElementById('detail-time-loc').innerHTML = `
    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-orange-400"></i> ${rally.venue} • 
    <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400 ml-1"></i> ${rally.time}
  `;

  const playerCount = rally.players.length;
  const isConfirmed = playerCount >= rally.minPlayers || rally.confirmed;
  const progressPercent = Math.min(100, Math.round((playerCount / rally.minPlayers) * 100));

  const statusPill = document.getElementById('detail-status-pill');
  if (isConfirmed) {
    statusPill.textContent = 'Confirmed ✅';
    statusPill.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
  } else {
    statusPill.textContent = `${Math.max(0, rally.minPlayers - playerCount)} more needed`;
    statusPill.className = 'text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20';
  }

  document.getElementById('detail-count-num').textContent = `${playerCount} / ${rally.minPlayers} Joined ${isConfirmed ? '(Goal Met!)' : ''}`;
  document.getElementById('detail-progress-bar').style.width = `${progressPercent}%`;
  document.getElementById('detail-organizer-name').textContent = `${rally.organizer.name} (⭐ ${rally.organizer.score}%)`;
  document.getElementById('detail-countdown').textContent = `Closes in ${rally.expiresInMins} mins`;
  document.getElementById('detail-joined-count').textContent = playerCount;

  // Render Venue Poll
  renderVenuePoll(rally);

  // Render Players Grid
  const grid = document.getElementById('detail-players-grid');
  grid.innerHTML = rally.players.map(p => `
    <div class="flex items-center space-x-2 bg-slate-950 p-2 rounded-xl border border-slate-800">
      <img src="${p.avatar}" class="w-7 h-7 rounded-full object-cover ring-1 ring-slate-700" alt="${p.name}">
      <div class="overflow-hidden">
        <div class="font-bold text-white text-[11px] truncate">${p.name}</div>
        <div class="text-[9px] text-amber-300 flex items-center gap-0.5">
          <span>⭐ ${p.score}%</span>
          ${p.checkedIn ? '<span class="text-emerald-400 ml-1 font-semibold">📍 At Venue</span>' : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Render Chat
  renderChatMessages(rally);

  // Render Footer Buttons
  renderDetailFooter(rally);

  // Show Modal
  const modal = document.getElementById('modal-details');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);

  if (window.lucide) window.lucide.createIcons();
}

function renderVenuePoll(rally) {
  const container = document.getElementById('venue-poll-container');
  if (!container) return;

  const totalVotes = rally.venuePoll.reduce((sum, v) => sum + v.votes, 0) || 1;

  container.innerHTML = rally.venuePoll.map((opt, idx) => {
    const pct = Math.round((opt.votes / totalVotes) * 100);
    return `
      <div class="bg-slate-900 p-2 rounded-xl border border-slate-800 cursor-pointer hover:border-orange-500/40 transition" onclick="voteVenue(${idx})">
        <div class="flex justify-between items-center mb-1">
          <span class="font-semibold text-slate-200">${opt.name}</span>
          <span class="text-[10px] text-orange-400 font-bold">${opt.votes} votes (${pct}%)</span>
        </div>
        <div class="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
          <div class="h-full bg-orange-500 rounded-full transition-all" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');
}

function voteVenue(idx) {
  const rally = appState.rallies.find(r => r.id === appState.selectedRallyId);
  if (!rally || !rally.venuePoll[idx]) return;

  rally.venuePoll[idx].votes += 1;
  saveRallies();
  renderVenuePoll(rally);
  showToast(`Voted for "${rally.venuePoll[idx].name}"!`);
}

function renderChatMessages(rally) {
  const box = document.getElementById('rally-chat-box');
  if (!box) return;

  let msgHtml = `
    <div class="text-slate-400 text-[10px] text-center my-1 italic">
      Coordination chat open for joined players.
    </div>
  `;

  rally.messages.forEach(m => {
    msgHtml += `
      <div class="bg-slate-900 p-2 rounded-xl text-slate-200">
        <span class="font-bold text-orange-400 text-[11px]">${m.sender}:</span> ${m.text}
      </div>
    `;
  });

  box.innerHTML = msgHtml;
  box.scrollTop = box.scrollHeight;
}

function handleSendChat(e) {
  e.preventDefault();
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  const rally = appState.rallies.find(r => r.id === appState.selectedRallyId);
  if (!rally) return;

  rally.messages.push({
    sender: "Ankit (You)",
    text: text
  });

  saveRallies();
  input.value = '';
  renderChatMessages(rally);
}

function renderDetailFooter(rally) {
  const footer = document.getElementById('detail-action-footer');
  const isJoined = rally.players.some(p => p.id === CURRENT_USER.id);
  const myPlayerObj = rally.players.find(p => p.id === CURRENT_USER.id);
  const isCheckedIn = myPlayerObj && myPlayerObj.checkedIn;
  const isConfirmed = rally.players.length >= rally.minPlayers || rally.confirmed;

  let html = '';

  if (!isJoined) {
    html = `
      <button onclick="toggleJoinRally('${rally.id}'); openDetailsModal('${rally.id}')" class="flex-1 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-2.5 rounded-xl text-xs shadow-lg transition">
        I'm In 🙋 (Join Rally)
      </button>
    `;
  } else {
    // If joined, allow check-in or leave
    html = `
      <button onclick="simulateGpsCheckIn('${rally.id}')" class="flex-1 ${isCheckedIn ? 'bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 cursor-default' : 'bg-emerald-600 hover:bg-emerald-500 text-white'} font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition">
        <i data-lucide="map-pin" class="w-4 h-4"></i>
        <span>${isCheckedIn ? 'GPS Checked In (Verified ✅)' : 'Check In at Venue 📍'}</span>
      </button>
      <button onclick="toggleJoinRally('${rally.id}'); closeDetailsModal()" class="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-rose-400 font-bold rounded-xl text-xs border border-slate-700 transition">
        Leave
      </button>
    `;
  }

  footer.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function simulateGpsCheckIn(rallyId) {
  const rally = appState.rallies.find(r => r.id === rallyId);
  if (!rally) return;

  const player = rally.players.find(p => p.id === CURRENT_USER.id);
  if (!player || player.checkedIn) return;

  player.checkedIn = true;
  saveRallies();
  openDetailsModal(rallyId);
  showToast("📍 Venue GPS Check-in Verified! Show-Up Score +3%");
}

function closeDetailsModal() {
  const modal = document.getElementById('modal-details');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

// Toggle Join / Leave Rally
function toggleJoinRally(rallyId) {
  const rally = appState.rallies.find(r => r.id === rallyId);
  if (!rally) return;

  const existingIdx = rally.players.findIndex(p => p.id === CURRENT_USER.id);

  if (existingIdx !== -1) {
    // Leave
    rally.players.splice(existingIdx, 1);
    rally.confirmed = rally.players.length >= rally.minPlayers;
    showToast(`Left "${rally.title}"`);
  } else {
    // Join
    rally.players.push({
      id: CURRENT_USER.id,
      name: "Ankit (You)",
      avatar: CURRENT_USER.avatar,
      score: CURRENT_USER.showUpScore,
      checkedIn: false
    });

    if (rally.players.length >= rally.minPlayers && !rally.confirmed) {
      rally.confirmed = true;
      showToast(`🎉 RALLY CONFIRMED! Minimum ${rally.minPlayers} KGPians reached! Venue locked.`);
    } else {
      showToast(`Joined "${rally.title}"! (${rally.players.length}/${rally.minPlayers} ready)`);
    }
  }

  saveRallies();
  renderFeed();
  renderMyRallies();
}

// Create Rally Flow
function openCreateModal() {
  const modal = document.getElementById('modal-create');
  modal.classList.remove('hidden');
  setTimeout(() => modal.classList.remove('opacity-0'), 10);
  if (window.lucide) window.lucide.createIcons();
}

function closeCreateModal() {
  const modal = document.getElementById('modal-create');
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

function selectQuickActivity(title, cat, min, max, venue) {
  document.getElementById('input-title').value = title;
  document.getElementById('input-category').value = cat;
  document.getElementById('input-min').value = min;
  updateHeadcountLabel(min);
  document.getElementById('input-venue').value = venue;
}

function updateHeadcountLabel(val) {
  document.getElementById('min-players-val').textContent = `${val} Players`;
}

function toggleTag(btn) {
  btn.classList.toggle('active-tag');
}

function handleCreateRally(e) {
  e.preventDefault();

  const title = document.getElementById('input-title').value.trim();
  const category = document.getElementById('input-category').value;
  const scope = document.getElementById('input-scope').value;
  const minPlayers = parseInt(document.getElementById('input-min').value, 10);
  const time = document.getElementById('input-time').value.trim();
  const venue = document.getElementById('input-venue').value.trim();

  // Selected tags
  const tags = [];
  document.querySelectorAll('#vibe-tags-container .active-tag').forEach(t => {
    tags.push(t.textContent.trim());
  });

  const newRally = {
    id: `rally_${Date.now()}`,
    title: title,
    category: category,
    organizer: {
      name: CURRENT_USER.name,
      avatar: CURRENT_USER.avatar,
      score: CURRENT_USER.showUpScore
    },
    minPlayers: minPlayers,
    maxPlayers: minPlayers * 2,
    time: time,
    venue: venue,
    scope: scope,
    vibes: tags.length ? tags : ["#CasualAdda"],
    expiresInMins: 60,
    confirmed: false,
    venuePoll: [
      { name: venue, votes: 1 }
    ],
    players: [
      {
        id: CURRENT_USER.id,
        name: "Ankit (You)",
        avatar: CURRENT_USER.avatar,
        score: CURRENT_USER.showUpScore,
        checkedIn: false
      }
    ],
    messages: [
      { sender: "Ankit", text: "Rally launched! Let's get minimum headcount to lock venue." }
    ]
  };

  appState.rallies.unshift(newRally);
  saveRallies();

  closeCreateModal();
  document.getElementById('create-rally-form').reset();
  renderFeed();
  renderMyRallies();

  showToast(`⚡ Rally for "${title}" is LIVE across IIT KGP!`);
}

// Proactive Smart Ghost Nudge
function quickStartRally(activity, min, venue) {
  selectQuickActivity(activity, 'Sports', min, min * 2, venue);
  openCreateModal();
  dismissGhostBanner();
}

function dismissGhostBanner() {
  const banner = document.getElementById('ghost-banner');
  if (banner) banner.classList.add('hidden');
}

function triggerGhostNudge() {
  const banner = document.getElementById('ghost-banner');
  if (banner) {
    banner.classList.remove('hidden');
    showToast("⚡ Smart Proximity Engine detected 4 idle players near Azad & Nehru Hall!");
  }
}

// Toast Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'bg-slate-900 border border-orange-500/40 text-slate-100 text-xs font-semibold px-4 py-2.5 rounded-2xl shadow-2xl flex items-center space-x-2 transition-all transform duration-300 opacity-0 translate-y-2 pointer-events-auto';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-orange-400"></span>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove('opacity-0', 'translate-y-2');
  }, 10);

  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Reset Demo Data
function resetDemoData() {
  localStorage.removeItem('rallyup_kgp_rallies');
  localStorage.removeItem('rallyup_kgp_squads');
  appState.rallies = JSON.parse(JSON.stringify(INITIAL_RALLIES));
  appState.squads = JSON.parse(JSON.stringify(INITIAL_SQUADS));
  renderFeed();
  renderSquads();
  renderMyRallies();
  showToast("Demo data reset to fresh IIT KGP campus state.");
}

function seedHighDemandRally() {
  const match = {
    id: `rally_cricket_${Date.now()}`,
    title: "🏏 Evening 8v8 Box Cricket Match",
    category: "Sports",
    organizer: {
      name: "Harsh Vardhan (Azad)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      score: 96
    },
    minPlayers: 8,
    maxPlayers: 16,
    time: "Today 5:00 PM – 6:30 PM",
    venue: "Azad Hall Main Quad",
    scope: "Entire Campus",
    vibes: ["#BoxCricket", "#TennisBall"],
    expiresInMins: 45,
    confirmed: false,
    venuePoll: [
      { name: "Azad Hall Main Quad", votes: 5 },
      { name: "Tata Sports Complex Turf", votes: 2 }
    ],
    players: [
      { id: "p1", name: "Harsh (Azad)", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces", score: 96, checkedIn: false },
      { id: "p2", name: "Saurabh M. (Nehru)", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces", score: 92, checkedIn: false },
      { id: "p3", name: "Devansh K. (Patel)", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=faces", score: 89, checkedIn: false },
      { id: "p4", name: "Ankit Roy (Azad)", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&h=100&fit=crop&crop=faces", score: 94, checkedIn: false },
      { id: "p5", name: "Tanmay B. (RK)", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces", score: 90, checkedIn: false },
      { id: "p6", name: "Prateek J. (LLR)", avatar: "https://images.unsplash.com/photo-1528892952291-009c663ce843?w=100&h=100&fit=crop&crop=faces", score: 95, checkedIn: false },
      { id: "p7", name: "Rishabh D. (RP)", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=faces", score: 93, checkedIn: false }
    ],
    messages: [
      { sender: "Harsh", text: "Need just 1 more player to auto-confirm! Bats and taped tennis balls ready at Azad quad." }
    ]
  };

  appState.rallies.unshift(match);
  saveRallies();
  renderFeed();
  showToast("🏏 Added live Cricket Rally with 7/8 players! Tap 'I'm In' to confirm it.");
}

// Window load init
window.addEventListener('DOMContentLoaded', initApp);
