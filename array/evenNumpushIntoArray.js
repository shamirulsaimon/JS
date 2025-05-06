let num = [1, 2, 3, 53, 123, 563, 22, 34, 2, 23, 4];

let even = [];
for (let i = 0; i <= num.length; i++)
{
     if (num[i] % 2 == 0)
     {
          even.push(num[i]);
          
     }
}
console.log(even);