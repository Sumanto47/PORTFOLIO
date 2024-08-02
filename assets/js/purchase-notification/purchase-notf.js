
/*------------------------------------------- SCRIPT FOR PURCHASE-NOTIFICATION START ------------------------------------------*/

$(document).ready(() => {
  
  $('#pop-up').hide();
    
  let peoples = ['Wrightwood, CA', 'Chicago', 'New York', 'Denver', 'Cleveland', 'San Diego', 'Boston', 'Victorville, CA', 'Portland','Austin', 'Miami', 'Phelan, CA'];
  let cities = ['Wrightwood, CA', 'Chicago', 'New York', 'Denver', 'Cleveland', 'San Diego', 'Boston', 'Victorville, CA', 'Portland','Austin', 'Miami', 'Phelan, CA'];
  let products = ['Water Bottle', 'T-Shirt', 'Beanie', 'Sweater', 'Baseball Cap', 'Poster'];
  
  setInterval(() => {
    
    let customer = peoples[Math.floor(Math.random() * peoples.length)];
    let location = cities[Math.floor(Math.random() * cities.length)];
    let purchase = products[Math.floor(Math.random() * products.length)];
    
    $('#peoples').text(customer);
    $('#cities').text(location);
    $('#product').text(purchase);
    
    $('#pop-up').slideDown().delay(2000).fadeOut();
  }, 4000);
  
});

/*------------------------------------------- SCRIPT FOR PURCHASE-NOTIFICATION COMPLETE ------------------------------------------*/