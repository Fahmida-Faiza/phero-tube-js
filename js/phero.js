//button r kaj 
const loadButton = async () =>{
    const res = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );

    const data2 =await res.json();
    const allbuttons = data2.data;
    displayButtons(allbuttons);
    // console.log(allbuttons);
}
const displayButtons = allbuttons =>{
    console.log(allbuttons);


//loop forEach diye single dekhaby 
const buttonContainer = document.getElementById("button-container");
allbuttons.forEach(allbutton =>{
    // console.log(allbutton)
    const buttonCard = document.createElement('div');
    buttonCard.classList = `btn btn-xs sm:btn-sm md:btn-md lg:btn-lg`;
    buttonCard.innerHTML = `
     <button class="btn">${allbutton.category}</button>
       
       
    `;
    buttonContainer.appendChild(buttonCard)

})
}


//main part

const loadPhone = async () =>{
    const res = await fetch(
      "https://openapi.programming-hero.com/api/videos/category/1000"
    );

    const data = await res.json();
    const phones = data.data;
    // console.log(phones);//show the all data of phones
displayPhones(phones)
}

const displayPhones = phones =>{
console.log(phones)
  const phoneContainer = document.getElementById("phone-container");
phoneContainer.innerHTML="";
//loop forEach diye single single dekhabey phone gula
phones.forEach(phone =>{
  // console.log(phone)
  // step1:jeykhaney boshabo id nilam

  // step2:create a div aikahney card gular kaj korno
  const phoneCard = document.createElement("div");

  phoneCard.classList = `card p-4 bg-base-100 `;
  //step3: set inner html gula
  phoneCard.innerHTML = `
    
    <figure><img src="${phone.thumbnail}" alt="Shoes" class="w-80 h-52" /></figure>
            <div class="card-body">
            
            <div class="flex gap-6">

                <figure><img src=${phone.authors[0].profile_picture} alt="Shoes" class="w-10 h-10 rounded-full" /></figure>
                <div>
                    <h2 class="card-title">${phone.title}</h2>
                    <p class="py-2">${phone.authors[0].profile_name}</p>
                    <p>${phone.others.views} <span>views</span</p>
                </div>
             </div>



            </div>
    
    
    
    `;

    //appendchild
    phoneContainer.appendChild(phoneCard);
})
}


loadButton();

loadPhone();