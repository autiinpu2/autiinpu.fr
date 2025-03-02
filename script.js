const translations = {
    en: {
        homeTitle: "Welcome to my website",
        homeText: "Hello! I'm Autiinpu, the developer that never finishes a single project.",
        beginner: "Beginner in web development",
        pythonDev: "Python Developer",
        projectsTitle: "My projects",
        homeHeader: "Home",
        projectsHeader: "Projects"
    },
    fr: {
        homeTitle: "Bienvenue sur mon site",
        homeText: "Bonjour ! Je suis Autiinpu, le développeur qui ne termine jamais un seul projet.",
        beginner: "Débutant en développement web",
        pythonDev: "Developpeur Python",
        projectsTitle: "Mes projets",
        homeHeader: "Acceuil",
        projectsHeader: "Projets"
    }
};

function changeLanguage() {
    const lang = document.getElementById("language-selector").value;
    document.getElementById("home-title").innerText = translations[lang].homeTitle;
    document.getElementById("home-text").innerText = translations[lang].homeText;
    document.getElementById("beginner").innerText = translations[lang].beginner;
    document.getElementById("pythonDev").innerText = translations[lang].pythonDev;
    document.getElementById("projects-title").innerText = translations[lang].projectsTitle;
    document.getElementById("home-header").innerText = translations[lang].homeHeader;
    document.getElementById("project-header").innerText = translations[lang].projectsHeader;
}