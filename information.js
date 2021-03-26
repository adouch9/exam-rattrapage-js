let majeur = 18;

const information = (prenom,nom,age,sexe) => {
    console.log(`prénom: ${prenom}`)
    console.log(`name: ${nom}`)
    console.log(`age: ${age} ans`)
 

    if(age >= majeur && sexe === 'M'){
 
    return (`${prenom} ${nom} ${age}Monsieur, vous etes majeur depuis ${ age - majeur} ans`)

}else if (){
    return ( `${prenom} ${nom} ${age} Madame, vous serez majeur dans ${ majeur - age} ans`)
}

}


console.log(information('Sofiane', 'Akermoun', 39,'M'))
// console.log(information('Alice', 'Liddell', 7, 'F'))
// information('Valerie', 'Dupont', 7, '?')