//Creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const teamMember = [
    {
        "name": "Sergio Giangianni Buzone",
        "role": "The Aquilano",
        "photo": "img/angela-caroll-chief-editor.jpg",
    },
    {
        "name": "img/",
        "role": "The Man of Honor",
        "photo": "img/angela-lopez-social-media-manager.jpg",
    },
    {
        "name": "Alessio Brugi",
        "role": "The Poet",
        "photo": "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        "name": "Giorgione Belardelli",
        "role": "The Mastermind",
        "photo": "img/scott-estrada-developer.jpg",
    },
    {
        "name": "Marcalessandro Fontana",
        "role": "The 104 meme guy",
        "photo": "img/walter-gordon-office-manager.jpg",
    },
    {
        "name": "Gabbo Abu Dsquared",
        "role": "The man that sees the variables",
        "photo": "img/wayne-barnett-founder-ceo.jpg",
    }
];

console.log(teamMember);

let member = document.querySelector(".member");

for (let i = 0; i < teamMember.length; i++) {

    let memberIesimo = teamMember[i];
    let memberName = memberIesimo.name;
    let memberRole = memberIesimo.role;
    let memberPhoto = memberIesimo.photo;

    console.log(memberName, memberRole, memberPhoto);

    let card = document.createElement("div");

    let profilePic = document.createElement("img");
    profilePic.src = memberIesimo.photo;

    let nameElement = document.createElement("h3");
    nameElement.append(memberIesimo.name);

    let roleElement = document.createElement("h4");
    roleElement.append(memberIesimo.role);


    card.append(profilePic, nameElement, roleElement);
    member.append(card);


}

