// create an array of 5 objects (4 properties)
// print 2 properties from that object using for loop and also by using for each loop
var arr=[
{
        name:"iphone",
        year:2007,
        price:"high"
},

{
        name:"samsung",
        year:1988,
        price:"medium"
},

{
       name:"nokia",
        year:1992,
        price:"low"
},

{
        name:"realme",
        year:2018,
        price:"medium"
},

{
        name:"vivo",
        year:2012,
        price:"low"
}
]
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i].name,arr[i].year);          //using for loop
}
arr.forEach(
    function(a,i)
{
    console.log(a.name,a.year);                               //using for each loop
}
)