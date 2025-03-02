var products =[
    {name:'Smart Watch',price:1500,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {name:'Skin Care products',price:2500,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {name:'Alert',price:3500,description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
]
var pp1=document.getElementById("crd1");
var pp2=document.getElementById("crd2");
var pp3=document.getElementById("crd3");

pp1.innerHTML = `Name: ${products[0].name} <br> Price: ${products[0].price} <br> Description: ${products[0].description}`;
pp2.innerHTML = `Name: ${products[1].name} <br> Price: ${products[1].price} <br> Description: ${products[1].description}`;
pp3.innerHTML = `Name: ${products[2].name} <br> Price: ${products[2].price} <br> Description: ${products[2].description}`;