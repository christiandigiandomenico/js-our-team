const team = [

    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        foto: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg"
    }

]

for (let i = 0; i < team.length; i++) {
    const oggettoAttuale = (team[i])

    for (let key in oggettoAttuale) {
        console.log(key + ": " + oggettoAttuale[key])
    }
}

const teamList = document.querySelectorAll('.container .card');

for (let i = 0; i < team.length; i++) {
    const member = team[i];
    const card = teamList[i];

    const cardHeader = card.querySelector('.card-header');
    const cardBody = card.querySelector('.card-body');
    const image = cardBody.querySelector('img');
    const title = cardBody.querySelector('.card-title');

    cardHeader.textContent = member.nome;
    image.src = member.foto;
    image.alt = member.nome;
    title.textContent = member.ruolo;
}