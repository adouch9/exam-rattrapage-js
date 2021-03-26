let tab = [2, 10, 5, 0, 14, 1, 9]

const podium = (tab) => {

    tab.sort((a, b) => {
      return a - b
    })
    console.log(tab[2])
    console.log(tab[1])
    console.log(tab[0])
  }
  
  podium(tab)


