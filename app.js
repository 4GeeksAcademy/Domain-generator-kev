  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let domain = ['.com','.net','.us','.io']

  
  const domainGenerator = (pronounArr,adjArr,nounArr,domainArr)=>{
    let arrPronounAdj = [];
    let arrPronounAdjNoun = [];
    let arrPlusDomain = []
    let arrHackDomain =[]

   pronounArr.forEach((pronoumElement)=>{

      adjArr.forEach((adjElement)=>{
        arrPronounAdj.push(pronoumElement+adjElement)
      })
   })

   arrPronounAdj.forEach((arrPronounAdjElement)=>{

      nounArr.forEach((nounArrElement)=>{
        arrPronounAdjNoun.push(arrPronounAdjElement+nounArrElement)
      })
   })

   arrPronounAdjNoun.forEach((arrPronounAdjNounElement)=>{

    let subStrElement = arrPronounAdjNounElement.substring(arrPronounAdjNounElement.length,arrPronounAdjNounElement.length-2)

      domainArr.forEach((domainArrElement)=>{
        arrPlusDomain.push(arrPronounAdjNounElement+domainArrElement)
      })

      arrHackDomain.push(arrPronounAdjNounElement+"."+subStrElement)

   })

  
   console.log("HACKS DOMAINS: -------------------------------------");

   arrHackDomain.forEach((element)=>{
     console.log(element);
    })

  console.log("REGULAR DOMAINS: -------------------------------------");

   arrPlusDomain.forEach((element)=>{
     console.log(element);
    })

  }

   domainGenerator(pronoun,adj,noun,domain)
