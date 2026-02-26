const products=[
    {name:"Mouse",price:350},
    {name:"Keyboard",price:999},
    {name:"Monitor",price:1500},
    {name:"Cable",price:200},
    {name:"Pad",price:600}
];

function display(x){
    const list=document.getElementById("productslist");
    list.innerHTML="";
    x.forEach(function(item){
        list.innerHTML=list.innerHTML + "<li>" + item.name + " - ₹" + item.price + "</li>";
    });
}

function showall(){
    display(products);
}

function below(){
    const ft=products.filter(function(item){
        return item.price<500;
    });
    display(ft);
}

showall();