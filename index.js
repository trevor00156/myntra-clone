let bagitems;

let bagitemsstr=localStorage.getItem('bagitems');
bagitems= bagitemsstr ? JSON.parse(bagitemsstr):[];


displayitemsonhomepage();
displaybagcount();


function addtobag(itemid){

bagitems.push(itemid);
localStorage.setItem('bagitems',JSON.stringify(bagitems));
displaybagcount();

}

function displaybagcount(){
  let bagitemcount=document.querySelector('.bagitemcount');
  if (bagitems.length>0){
    
    bagitemcount.innerText=bagitems.length;
    bagitemcount.style.visibility='visible';  
  }else{
    bagitemcount.style.visibility='hidden';
  }
  
}





function displayitemsonhomepage(){


  let itemcontainerelement=document.querySelector('.items-container');

  let innerhtml='';
  items.forEach(item=>{
  
    innerhtml=innerhtml+ `
     <div class="item-container">
        <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="addtobag" onclick="addtobag(${item.id})">Add to Bag</button>
      </div>`
    });
  
    itemcontainerelement.innerHTML=innerhtml;

}
