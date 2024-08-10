// js code


let products = [
  {
    name: "Bugatti Chiron",
    price: "3900000",
    headline: "Hungry of Speed",
    image:
      "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fountain Pen",
    price: "2000",
    headline: "Flowing like a river",
    image:
      "https://images.unsplash.com/photo-1531087131490-07836ca4341d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Keyboard Mouse combo",
    price: "100",
    headline: "Work with silence",
    image:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Galaxy s23 Ultra",
    price: "10000",
    headline: "World in your hands",
    image:
      "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
let popular = [
  {
    name: "Galaxy s23 Ultra",
    price: "10000",
    headline: "World in your hands",
    image:
      "https://images.unsplash.com/photo-1705585174953-9b2aa8afc174?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bugatti Chiron",
    price: "3900000",
    headline: "Hungry of Speed",
    image:
      "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    name: "Mac book pro",
    price: "100000",
    headline: "Performance is the key",
    image:
      "      https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

let cart= []

let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

(function () {
    let clutter = "";
  products.forEach((product,index) => {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                      <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                        <img class="w-full h-full object-cover" src="${
                          product.image
                        }" alt="${product.name}'s image">
                      </div>
                      <div class="data w-full px-2 py-5">
                          <h1 class="font-semibold text-xl leading-none tracking-tight">${
                            product.name
                          }</h1>
                          <div class="flex justify-between w-full items-center mt-2">
                              <div class="w-1/2">
                                  <h3 class="w-full font-semibold opacity-20"><div>${
                                    product.headline
                                  }</div></h3>
                                  <h4 class="font-semibold mt-2">${USDollar.format(
                                    parseInt(product.price)
                                  )}</h4>
                              </div>
                              <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i
                                    data-index="${index}"  class="add ri-add-line"></i></button>
                          </div>
                      </div>
                  </div>`;
  });

  document.querySelector(".products").innerHTML = clutter;
})();

(function(){
    let clutter = ""
    popular.forEach(function(product){
        clutter+=`
             <div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${USDollar.format(
                            parseInt(product.price)
                          )}</h4>
                    </div>
                </div>`
    })
  document.querySelector(".populars").innerHTML = clutter;

})();

(function() {
    document.querySelector(".products")
    .addEventListener("click", function(e){
        if(e.target.classList.contains("add")){
            cart.push(products[e.target.dataset.index])
        }
    })
})();


(function(){
  document.querySelector(".carticon").addEventListener("click", function(){
    document.querySelector(".cartexpnd").classList.remove("hidden")

    let clutter = "";
    cart.forEach(function(product){
      clutter+=`
      <div class="flex gap-2 bg-white p-2 rounded-lg">
    <div class=" overflow-hidden w-10 h-10 flex-shrink-0 rounded-lg ">
      <img class="w-full h-full object-cover" src="${product.image}" alt="${product.name}">
    </div>
    <div>
        <h3 class="font-semibold">${product.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">${USDollar.format(
          parseInt(product.price)
        )}</h5>
    </div>
</div>
      `
    })
    document.querySelector(".cartexpnd").innerHTML= clutter

  })
})();
