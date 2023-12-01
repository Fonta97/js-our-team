//Creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

const teamMember = [
    {
        "name": "Sergio Giangianni Buzone",
        "role": "The Aquilano",
        "photo": "img\angela-caroll-chief-editor.jpg",
    },
    {
        "name": "Beppe O' Napoletano",
        "role": "The Man of Honor",
        "photo": "foto di Beppe",
    },
    {
        "name": "Alessio Brugi",
        "role": "The Poet",
        "photo": "foto di Ale",
    },
    {
        "name": "Giorgione Belardelli",
        "role": "The Mastermind",
        "photo": "foto di Giorgione",
    },
    {
        "name": "Marcalessandro Fontana",
        "role": "The 104 meme guy",
        "photo": "foto dell'unico",
    },
    {
        "name": "Gabbo Abu Dsquared",
        "role": "The man that sees the variables",
        "photo": "foto di Gabbo",
    }
];

console.log(teamMember);

for (let i = 0; i < teamMember.length; i++) {
    let memberIesimo = teamMember[i];

    let memberName = memberIesimo.name;
    let memberRole = memberIesimo.role;
    let memberPhoto = memberIesimo.photo;
    console.log(memberName, memberRole, memberPhoto);
    document.getElementsByClassName("foto").src = memberIesimo.photo;
}

