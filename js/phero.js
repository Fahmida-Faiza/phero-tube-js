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
    // console.log(allbuttons);


//loop forEach diye single dekhaby 
const buttonContainer = document.getElementById("button-container");
allbuttons.forEach(allbutton =>{
    // console.log(allbutton)
    const buttonCard = document.createElement('div');
    buttonCard.classList = `btn  btn-error btn-outline btn-xs sm:btn-sm md:btn-md  mx-3`;
    buttonCard.innerHTML = `
     <button onclick='loadPhone(${allbutton.category_id})'>${allbutton.category}</button>
       
       
    `;
    console.log(allbutton.category);
    buttonContainer.appendChild(buttonCard)

})
}


//main part

const loadPhone = async (categoryId) =>{
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
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
// ....................................................................


if (phones.length === 0) {
  console.log("no found");

  phoneContainer.classList.remove(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-4",
    "gap-4"
  );

  phoneContainer.innerHTML = `
<div class="flex flex-col text-center items-center text-3xl font-bold mt:20 lg:mt-40">
<div>
  <img src="image/Icon.png" alt="">
</div>
<div>
  <p>Oops!! Sorry, There is no <br> content here</p>
</div>
</div>

`;
} 
else {
  phoneContainer.classList.add(
    "grid",
    "grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-4",
    "gap-3"
  );
}



// ....................................................................
//loop forEach diye single single dekhabey phone gula
phones.forEach(phone =>{
  // console.log(phone)
  // step1:jeykhaney boshabo id nilam

  // step2:create a div aikahney card gular kaj korno
  const phoneCard = document.createElement("div");

  phoneCard.classList = `card p-4 bg-base-100 `;

  //faiza
   let second = phone.others.posted_date;

   console.log(second);
   let minutes = 0;
   let hours = 0;

   hours = parseInt(second / 3600);
   console.log(hours);

   second = parseInt(second % 3600);
   minutes = parseInt(second / 60);
   console.log(minutes);

   second = parseInt(second % 60);
   console.log(second);
  //step3: set inner html gula
  phoneCard.innerHTML = `
    
    <figure><img src="${phone.thumbnail}" alt="Shoes" class="w-80 h-52" />
              <div class="absolute">
            ${
              phone.others.posted_date > 0
                ? `<p class="relative left-20 top-20 bg-black text-white px-1 py-1 rounded-md text-xs w-32 text-center">${hours}hrs ${minutes}min ago</p>`
                : ``
            } 

          </div>
    </figure>
            <div class="card-body">
            
            <div class="flex gap-6">

                <figure><img src=${
                  phone.authors[0].profile_picture
                } alt="Shoes" class="w-10 h-10 rounded-full" />
                </figure>
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

loadPhone(1000);

