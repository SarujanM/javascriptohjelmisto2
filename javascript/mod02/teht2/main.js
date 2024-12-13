const number_of_participants = parseInt(prompt("Number of participants: "));

var participants = [];
for (i=0;i<=number_of_participants-1;i++) {
    let name = prompt(`Henkilön ${i +1} nimi: `)
    participants[i] = name
}

for (var name of participants.sort()) {
    var doc =document.createElement('li')
    doc.innerHTML = name;
    document.querySelector('ol').appendChild(doc)
}