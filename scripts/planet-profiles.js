const planets = [
    {
        name: "Mercury",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1024px-Mercury_in_color_-_Prockter07_centered.jpg",
        description: "The smallest and innermost planet in the Solar System.",
        facts: [
            "No natural satellites",
            "Extreme temperature variations",
            "Heavily cratered surface"
        ],
        model: "https://solarsystem.nasa.gov/gltf_embed/2369"
    },
    {
        name: "Venus",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg",
        description: "Often called Earth's sister planet due to similar size.",
        facts: [
            "Hottest planet in our solar system",
            "Rotates backwards compared to most planets",
            "Thick atmosphere of carbon dioxide"
        ],
        model: "https://solarsystem.nasa.gov/gltf_embed/2343"
    },
    {
        name: "Earth",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1024px-The_Earth_seen_from_Apollo_17.jpg",
        description: "Our home planet and the only known world to harbor life.",
        facts: [
            "Only planet known to have life",
            "71% covered by water",
            "Has one natural satellite - the Moon"
        ],
        model: "https://solarsystem.nasa.gov/gltf_embed/2392"
    },
    {
        name: "Mars",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1024px-OSIRIS_Mars_true_color.jpg",
        description: "The Red Planet, named after the Roman god of war.",
        facts: [
            "Has the largest volcano in the solar system",
            "Two small moons: Phobos and Deimos",
            "Evidence of ancient water flows"
        ],
        model: "https://solarsystem.nasa.gov/gltf_embed/2372"
    },
    {
        name: "Jupiter",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/1024px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
        description: "The largest planet in our Solar System.",
        facts: [
            "Has the Great Red Spot storm",
            "79 known moons",
            "Strongest magnetic field of all planets"
        ],
        model: "https://solarsystem.nasa.gov/gltf_embed/2375"
    }
];

function createPlanetCard(planet) {
    const card = document.createElement('div');
    card.className = 'planet-card';
    
    card.innerHTML = `
        <h2>${planet.name}</h2>
        <img src="${planet.image}" alt="${planet.name}" class="planet-image">
        <p class="description">${planet.description}</p>
        <h3>Fun Facts:</h3>
        <ul>
            ${planet.facts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
        <div class="model-viewer">
            <iframe src="${planet.model}" frameborder="0" width="100%" height="300px"></iframe>
        </div>
    `;
    
    return card;
}

function initializePlanetProfiles() {
    const planetList = document.getElementById('planet-list');
    planets.forEach(planet => {
        planetList.appendChild(createPlanetCard(planet));
    });
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', initializePlanetProfiles);