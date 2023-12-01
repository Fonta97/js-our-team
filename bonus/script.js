let members = 6
let arrayTotalMembers = [members]
console.log(arrayTotalMembers)

for (let i = 0; i < arrayTotalMembers; i++) {

    const teamMemberNameSurname = prompt("Come si chiama il membro del team? (Nome e cognome)")
    const teamRole = prompt("Che ruolo ricopre?")
    const teamFoto = prompt("Inserisci una sua foto")

    console.log("nome", teamMemberNameSurname);
    console.log("ruolo", teamRole);
    console.log("Foto", teamFoto);

    const teamMember = [
        "Name" : teamMemberNameSurname,
        "Role" : teamRole,
        "Photo" : teamFoto,
    ]

}