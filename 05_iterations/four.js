// Object

const myobject = {
    game1 : "NFS",
    game2 : "spiderman",
    game3 : "mario"
}

for (const key in myobject) {

    console.log(`${key} shortcut is for ${myobject[key]}`);
    
}


// Array

const programing = ["js", "rb", "py", "java", "c++" ]

for (const key in programing) {
    
    console.log(programing[key]);

}