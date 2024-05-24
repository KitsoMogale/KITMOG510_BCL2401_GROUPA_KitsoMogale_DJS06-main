// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach Basics
provinces.forEach(item=> console.log(item));
names.forEach(item=> console.log(item));
let index = 0
names.forEach(item=>{

    console.log(`${item}(${provinces[index]})`);
    index++
  
  })

//Uppercase Transformation:
  let upper = provinces.map(item=> item.toUpperCase());
  upper.forEach(item=>console.log(item));


  //Name Lengths:
  const lengths = names.map(item=>item.length);
  console.log(lengths)


  //Sorting: 
  const sorted_provinces = provinces.sort();


//Filtering Cape:
  const filtered = provinces.filter(item=> !item.includes('Cape'));


  //Finding 'S':
const func = (item)=>{
  for(char of item){
    console.log(char)
    if(char === 's' || char === 'S'){
      // console.log(char);
      return true
    }
    
  }
      return false
}
const contains_S = names.map((item) =>{
   let bool;
   let arr = [item];

   bool = arr.some(func);
   

  return bool
})

console.log(contains_S);


//Creating Object Mapping:
const object = names.reduce((acc,value,index)=>{
     acc[value] = provinces[index];
     return acc
},{});

console.log(object)



//Log Products:
console.log(products.map(item=>{
    return item.product
}))


//Filter by Name Length:
console.log(products.filter(item=>{
 return item.product.length < 5
}))



//Price Manipulation:
 console.log(products.filter(item=>item.price != ' ' && item.price != '').map(item=> Number(item.price)).reduce((acc,item)=>{return acc + item},0))
 

 //Concatenate Product Names:
  console.log(products.reduce((acc,value)=>{
    return acc + value.product
  },''));



  //Find Extremes in Prices:
  console.log(products.filter(item=>item.price != ' ' && item.price != '').map(item=> Number(item.price)).reduce((acc,value)=>{
     let variableHighest;
     let varLowest ;
    if(value>=acc.Highest){

      variableHighest = value;
      
    }
    else{
      variableHighest = acc.Highest;
    }
    if(value<acc.Lowest){

      varLowest = value;
      
    }
    else{
      varLowest = acc.Lowest;
    }
    return {Highest:variableHighest,Lowest:varLowest}

      
  },{Highest:0,Lowest:Number(products[0].price)}));




  //Object Transformation:
  console.log(products.reduce((acc,value)=>{
    return [...acc,{name:value.product,cost:value.price}]
  },[]));



