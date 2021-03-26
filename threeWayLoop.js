const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'].reverse()
console.log(tab)

for (let i = 0;  i < tab.length; i++) {
   
    console.log(`${tab[i]}, length: ${tab[i].length}, index:${tab.indexOf('Alice')}`)
    
}

// for (const elem of tab){
//     console.log(`${elem}, length: 3 , index: ${elem.length}`)
//   }
  

//  tab.forEach((elem) => {
//     console.log(`${elem}, length: 3 , index: ${elem.length}`)
//     })