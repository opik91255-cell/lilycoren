// ==========================================
// DATA MOVIES & SERIES
// ==========================================
const moviesData = [
    {
        id: 1,
        title: "Spider Noir Colorful version",
        genre: "action",
        type: "series",
        year: 2026,
        rating: 7.7,
        image: "https://static0.srcdn.com/wordpress/wp-content/uploads/sharedimages/2026/03/spider-noir-poster.jpg?q=49&fit=contain&w=480&dpr=2",
        banner: "image/spider-noir.jpg",
        synopsis: "Spider-Noir mengikuti Ben Reilly, seorang detektif swasta yang menua dan pahlawan super di New York tahun 1930-an, saat dia menghadapi masa lalunya dan menavigasi kota gelap yang penuh kejahatan.",
         episodes: [
            { episode: 1, title: "Trailer", url: "https://www.youtube.com/embed/u48_JpUloGY" },
            { episode: 2, title: "Episode 1", url: "" },
            { episode: 3, title: "Episode 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 4, title: "Episode 3", url: "https://www.youtube.com/embed/zSWdZVtXT7E" },
            { episode: 5, title: "Episode 4", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        id: 2,
        title: "The Glory",
        genre: "Drama",
        type: "series",
        year: 2023,
        rating: 8.9,
        image: "image/the glory (1).jpe",
        banner: "image/the glory.jpe",
        synopsis: "Seorang wanita yang pernah menjadi korban perundungan hebat di sekolah merencanakan pembalasan dendam yang terstruktur.",
        episodes: [
            { episode: 1, title: "Trailer", url: "https://www.youtube.com/embed/tqVVrTvrI8U" },
            { episode: 2, title: "Episode 1", url: "https://player.abyssplayer.com/X8EIsBeUB" },
            { episode: 3, title: "Episode 2", url: "https://player.abyssplayer.com/caKqo_YkX" },
            { episode: 4, title: "Episode 3", url: "https://player.abyssplayer.com/guBkZRlRt" },
            { episode: 5, title: "Episode 4", url: "https://player.abyssplayer.com/H6IUMOGgO" },
            { episode: 6, title: "Episode 5", url: "https://player.abyssplayer.com/qFtzsynNf" },
            { episode: 7, title: "Episode 6", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 8, title: "Episode 7", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 9, title: "Episode 8", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 10, title: "Episode 9", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 11, title: "Episode 10", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 12, title: "Episode 11", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 13, title: "Episode 12", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 14, title: "Episode 13", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 15, title: "Episode 14", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 16, title: "Episode 15", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        ]
    },
    {
        id: 3,
        title: "The Defects S1",
        genre: "thriller",
        type: "series",
        year: 2025,
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/original/xKxKRYXZqarVzfSdDFlVINoqONT.jpg",
        banner: "image/the defects.avif",
        synopsis: "The Defects adalah thriller bertahan hidup yang gelap tentang anak-anak yang ditinggalkan oleh orang tua angkat mereka, yang berjuang untuk bertahan hidup dan membalas dendam terhadap organisasi adopsi ilegal yang rahasia.",
       episodes: [
            { episode: 1, title: "Episode 1", url: "" },
            { episode: 2, title: "Episode 2", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
            { episode: 3, title: "Episode 3", url: "https://www.youtube.com/embed/zSWdZVtXT7E" },
            { episode: 4, title: "Episode 4", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" }
        ]
    },
    {
        id: 4,
        title: "Drawing Closer",
        genre: "Romance",
        type: "Movie",
        year: 2024,
        rating: 8.9,
        image: "https://www.commonsensemedia.org/sites/default/files/styles/ratio_2_3_xlarge/public/product-images/csm-movie/drawingclosermovieposter.jpg",
        banner: "image/drawingcloser.jpg",
        synopsis: "Drawing Closer adalah drama romantis Jepang yang menyentuh hati, yang mengeksplorasi hubungan emosional yang dalam antara dua remaja yang sakit parah, Akito dan Haruna, saat mereka menjalani cinta dan kehidupan di tengah ancaman kematian yang akan datang.",
        videoUrl: "https://player.abyssplayer.com/-F0-R42as"
    },
    {
        id: 5,
        title: "Perfect Blue",
        genre: "Crime",
        type: "movie",
        year: 1997,
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BMzAwNDIzMzEtZDZkNC00ZDQ4LTk3ZDMtZjVhMTU2YzgzZTZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        benner: "image/Perfect Blue_ A Genre Study.jpe",
        synopsis: "Perfect Blue mengikuti kisah Mima Kirigoe, seorang idola pop yang beralih jadi aktris, saat dia berjuang membedakan kenyataan dan ilusi sambil dikejar dan dibayangi oleh masa lalunya.",
        videoUrl: "https://player.abyssplayer.com/pYqGFXB31"
    
    },
    {
        id: 6,
        title: "Chainsaw Man: The Movie - Reze Arc",
        genre: "action",
        type: "movie",
        year: 2025,
        rating: 8.2,
        image: "https://image.tmdb.org/t/p/original/4CASjp89BWRchiAybQKoPesvHK7.jpg",
        synopsis: "Arc Reze mengikuti kisah romantis tragis Denji dengan Reze, seorang hibrida Iblis Bom, yang memuncak dalam pertarungan brutal yang menguji cinta, kepercayaan, dan bertahan hidup.",
        videoUrl: "https://player.abyssplayer.com/sAbdF_ntP"
    },
    {
        id: 7,
        title: "Doraemon The Movie Nobitas Earth Symphony",
        genre: "animation",
        type: "movie",
        year: 2024,
        rating: 7.8,
        image: "image/doraemon-nobitas-earth-symphony.jpg",
        synopsis: "Doraemon The Movie: Nobita’s Earth Symphony mengisahkan Nobita dan kawan‑kawan yang terseret dalam petualangan musikal bersama gadis misterius bernama Mikka untuk menyelamatkan dunia dari ancaman makhluk penghapus musik.",
        videoUrl: "https://player.abyssplayer.com/7FQ_vU0Po"
    },
    {
        id: 8,
        title: "Inside Out 2",
        genre: "animation",
        type: "movie",
        year: 2024,
        rating: 8.4,
        image: "https://image.tmdb.org/t/p/original/oxxqiyWrnM0XPnBtVe9TgYWnPxT.jpg",
        synopsis: "Inside Out 2 mengikuti Riley yang memasuki masa remaja dan harus menghadapi munculnya emosi-emosi baru yang mengguncang keseimbangan emosinya.",
        videoUrl: "https://player.abyssplayer.com/1N3HBlHj9"
    },
    {
        id: 9,
        title: "Spider-Man: No Way Home",
        genre: "action",
        type: "movie",
        year: 2021,
        rating: 8.7,
        image: "https://static1.tribute.ca/poster/660x980/spider-man-no-way-home-163783.jpg",
        synopsis: "Spider-Man: No Way Home mengikuti perjuangan Peter Parker setelah identitasnya terbongkar, memicu kekacauan yang membuka multiverse dan mempertemukannya dengan para musuh serta dua Spider-Man dari semesta lain.",
        videoUrl: ""
    },
    {
        id: 10,
        title: "Doraemon Movie Sky Utopia",
        genre: "animation",
        type: "movie",
        year: 2025,
        rating: 8.6,
        image: "image/doraemon-the-movie-nobitas-sky-utopia.jpeg",
        benner: "image/Doraemon Movie Sky Utopia.jpg",
        synopsis: "Prajurit muda menemukan pedang kuno yang membawanya bertarung melawan naga raksasa.",
        videoUrl: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
];

// ==========================================
// DAFTAR GENRE LENGKAP (12 Kategori)
// ==========================================
const genresList = [
    { name: "Series", desc: "Serial TV & Drama Multi-Episode", color: "from-purple-900/80 to-indigo-900/80" },
    { name: "Action", desc: "Film Aksi & Laga Menegangkan", color: "from-red-900/80 to-orange-900/80" },
    { name: "Sci-Fi", desc: "Fiksi Ilmiah & Luar Angkasa", color: "from-blue-900/80 to-cyan-900/80" },
    { name: "Drama", desc: "Kisah Emosional & Penuh Konflik", color: "from-pink-900/80 to-rose-900/80" },
    { name: "Comedy", desc: "Film Lucu & Mengocok Perut", color: "from-amber-900/80 to-yellow-900/80" },
    { name: "Horror", desc: "Kisah Mencekam & Supranatural", color: "from-neutral-900 to-slate-900" },
    { name: "Romance", desc: "Kisah Cinta Romantis & Manis", color: "from-rose-900/80 to-red-900/80" },
    { name: "Thriller", desc: "Ketegangan & Misteri Mendalam", color: "from-slate-900/80 to-zinc-900/80" },
    { name: "Fantasy", desc: "Dunia Sihir & Makhluk Mitologi", color: "from-indigo-900/80 to-violet-900/80" },
    { name: "Animation", desc: "Film Kartun & Animasi Memukau", color: "from-teal-900/80 to-emerald-900/80" },
    { name: "Crime", desc: "Kriminalitas & Perampokan", color: "from-stone-900 to-gray-900" },
    { name: "Documentary", desc: "Kisah Nyata & Pengetahuan", color: "from-emerald-900/80 to-cyan-900/80" }
];

let activeMovie = null;
let currentHeroIndex = 0;
let heroTimer = null;

// ==========================================
// HELPER: URUTKAN FILM BERDASARKAN RATING
// ==========================================
function getSortedMovies() {
    // Meng-copy moviesData lalu mengurutkannya dari rating terbesar ke terkecil
    return [...moviesData].sort((a, b) => b.rating - a.rating);
}

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    renderHomeTrending();
    renderAllMovies(getSortedMovies()); // Ditampilkan terurut rating
    renderGenres();
    
    // Inisialisasi Hero Banner
    updateHeroBanner(0);
    startHeroAutoSlide();
});

// ==========================================
// RENDER FUNCTIONS
// ==========================================

// 1. Render Card Film/Series (Badge Movie / Series)
function createMovieCard(item) {
    const isSeries = item.type === "series";
    const badgeText = isSeries ? "Series" : "Movie"; 
    const badgeColor = isSeries ? "bg-purple-600" : "bg-blue-600";

    return `
        <div onclick="openPlayer(${item.id})" class="group cursor-pointer bg-[#161F30] rounded-xl overflow-hidden border border-slate-800 hover:border-[#6C5CE7] transition-all duration-300 hover:-translate-y-1 shadow-md">
            <div class="relative aspect-[2/3] overflow-hidden">
                <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.src='https://via.placeholder.com/300x450?text=No+Image'">
                <div class="absolute inset-0 bg-gradient-to-t from-[#161F30] via-transparent to-transparent opacity-60"></div>
                <div class="absolute top-2 right-2">
                    <span class="${badgeColor} text-white text-[10px] font-bold px-2 py-0.5 rounded capitalize">${badgeText}</span>
                </div>
                <div class="absolute bottom-2 left-2 flex items-center gap-1 bg-black/60 px-2 py-0.5 rounded text-yellow-400 text-xs font-semibold backdrop-blur-sm">
                    ★ ${item.rating}
                </div>
            </div>
            <div class="p-3">
                <h3 class="font-bold text-sm text-[#F8FAFC] truncate group-hover:text-[#6C5CE7] transition-colors">${item.title}</h3>
                <p class="text-xs text-[#94A3B8] mt-1">${item.year} • ${item.genre}</p>
            </div>
        </div>
    `;
}

// Update Hero Banner (OTOMATIS: Mengambil 5 film rating tertinggi)
function updateHeroBanner(index) {
    const sorted = getSortedMovies();
    const featuredMovies = sorted.slice(0, 5); // Mengambil 5 film teratas
    const movie = featuredMovies[index];
    if (!movie) return;

    const heroBg = document.getElementById('hero-bg');
    const heroTitle = document.getElementById('hero-title');
    const heroDesc = document.getElementById('hero-desc');
    const heroGenre = document.getElementById('hero-genre');
    const heroBtn = document.getElementById('hero-btn');

    const heroImageUrl = movie.banner || movie.image;

    if (heroBg && heroImageUrl) {
        heroBg.style.opacity = '0';
        setTimeout(() => {
            heroBg.src = heroImageUrl;
            heroBg.style.opacity = '0.3';
        }, 300);
    }

    if (heroTitle) heroTitle.innerText = movie.title;
    if (heroDesc) heroDesc.innerText = movie.synopsis || "";
    if (heroGenre) heroGenre.innerText = movie.genre;
    if (heroBtn) heroBtn.onclick = () => openPlayer(movie.id);
}

// Auto Slide Hero Banner (OTOMATIS: Berputar di 5 film rating tertinggi)
function startHeroAutoSlide() {
    if (heroTimer) clearInterval(heroTimer);

    heroTimer = setInterval(() => {
        const sorted = getSortedMovies();
        const featuredMovies = sorted.slice(0, 5);
        if (featuredMovies.length === 0) return;
        
        currentHeroIndex = (currentHeroIndex + 1) % featuredMovies.length;
        updateHeroBanner(currentHeroIndex);
    }, 5000);
}

// 2. Render Home Trending (OTOMATIS: Menampilkan seluruh film terurut rating)
function renderHomeTrending() {
    const container = document.getElementById("home-trending-grid");
    if (!container) return;
    
    const sortedMovies = getSortedMovies();
    container.innerHTML = sortedMovies.map(item => createMovieCard(item)).join("");
}

// 3. Render Movies Grid
function renderAllMovies(data) {
    const container = document.getElementById("all-movies-grid");
    if (!container) return;

    if (!data || data.length === 0) {
        container.innerHTML = `<p class="col-span-full text-center text-[#94A3B8] py-12">Tidak ada film atau series yang ditemukan.</p>`;
        return;
    }

    container.innerHTML = data.map(item => createMovieCard(item)).join("");
}

// 4. Render Genre Grid
function renderGenres() {
    const container = document.getElementById("genre-grid");
    if (!container) return;

    container.innerHTML = genresList.map(g => `
        <div onclick="filterByGenre('${g.name}')" class="group cursor-pointer relative rounded-xl p-5 bg-gradient-to-br ${g.color} border border-slate-700/50 hover:border-[#6C5CE7] transition-all duration-300 overflow-hidden">
            <h3 class="text-xl font-bold text-[#F8FAFC] group-hover:text-[#6C5CE7] transition-colors">${g.name}</h3>
            <p class="text-xs text-[#94A3B8] mt-1">${g.desc}</p>
        </div>
    `).join("");
}

// ==========================================
// NAVIGATION & FILTERS (Pindah Halaman & Genre)
// ==========================================
function switchPage(pageId) {
    document.querySelectorAll(".page-section").forEach(sec => sec.classList.add("hidden"));

    const targetSection = document.getElementById(`page-${pageId}`);
    if (targetSection) {
        targetSection.classList.remove("hidden");
    }

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.classList.remove("text-[#6C5CE7]");
        btn.classList.add("text-[#94A3B8]");
    });

    const activeNav = document.getElementById(`nav-${pageId}`);
    if (activeNav) {
        activeNav.classList.add("text-[#6C5CE7]");
        activeNav.classList.remove("text-[#94A3B8]");
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function filterByGenre(genreName) {
    const titleEl = document.getElementById("movies-title");
    if (titleEl) titleEl.innerText = `Kategori: ${genreName}`;

    const sorted = getSortedMovies();
    const filtered = sorted.filter(item => {
        if (genreName.toLowerCase() === "series") {
            return item.type === "series" || item.genre.toLowerCase() === "series";
        }
        return item.genre.toLowerCase() === genreName.toLowerCase();
    });

    renderAllMovies(filtered);
    switchPage("movies");
}

function resetMovieFilter() {
    const titleEl = document.getElementById("movies-title");
    if (titleEl) titleEl.innerText = "All Movies";
    renderAllMovies(getSortedMovies());
}

function handleSearch(query) {
    const keyword = query.toLowerCase().trim();
    const sorted = getSortedMovies();
    
    if (!keyword) {
        renderAllMovies(sorted);
        return;
    }
    const filtered = sorted.filter(item => 
        item.title.toLowerCase().includes(keyword) || 
        item.genre.toLowerCase().includes(keyword)
    );
    renderAllMovies(filtered);
    switchPage("movies");
}

// ==========================================
// MODAL & VIDEO PLAYER
// ==========================================
function openPlayer(id) {
    const item = moviesData.find(m => m.id === id);
    if (!item) return;

    activeMovie = item;

    const titleEl = document.getElementById("player-title");
    const metaEl = document.getElementById("player-meta");
    const synopsisEl = document.getElementById("player-synopsis");

    if (titleEl) titleEl.innerText = item.title;
    if (metaEl) metaEl.innerText = `${item.year} • ${item.genre} • ★ ${item.rating}`;
    if (synopsisEl) synopsisEl.innerText = item.synopsis;

    const iframe = document.getElementById("video-frame");
    const epContainer = document.getElementById("episode-container");
    const epList = document.getElementById("episode-list");

    if (item.episodes && item.episodes.length > 0) {
        if (iframe) iframe.src = item.episodes[0].url;

        if (epList) {
            epList.innerHTML = item.episodes.map((ep, idx) => `
                <button onclick="changeEpisode(${idx})" id="ep-btn-${idx}" class="ep-btn ${idx === 0 ? 'bg-[#6C5CE7] text-white' : 'bg-slate-800 text-[#94A3B8]'} hover:bg-indigo-600 hover:text-white text-xs px-3 py-1.5 rounded-lg border border-slate-700 transition-colors">
                    ${ep.title || 'Episode ' + (ep.episode || idx + 1)} 
                </button>
            `).join("");
        }

        if (epContainer) epContainer.classList.remove("hidden");
    } else {
        if (iframe) iframe.src = item.videoUrl || "";
        if (epContainer) epContainer.classList.add("hidden");
        if (epList) epList.innerHTML = "";
    }

    const modal = document.getElementById("video-modal");
    if (modal) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
}

function changeEpisode(index) {
    if (!activeMovie || !activeMovie.episodes || !activeMovie.episodes[index]) return;

    const iframe = document.getElementById("video-frame");
    if (iframe) iframe.src = activeMovie.episodes[index].url;

    document.querySelectorAll(".ep-btn").forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add("bg-[#6C5CE7]", "text-white");
            btn.classList.remove("bg-slate-800", "text-[#94A3B8]");
        } else {
            btn.classList.remove("bg-[#6C5CE7]", "text-white");
            btn.classList.add("bg-slate-800", "text-[#94A3B8]");
        }
    });
}

function closePlayer() {
    const modal = document.getElementById("video-modal");
    const iframe = document.getElementById("video-frame");
    if (iframe) iframe.src = "";
    if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }
}

function toggleLights() {
    const overlay = document.getElementById("cinema-overlay");
    if (overlay) overlay.classList.toggle("hidden");
}