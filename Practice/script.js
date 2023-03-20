let line = 4 ;
let star = 1;
let pattern = '';
let i , j ;
for(i = 0 ; i < line ; i++)
{
    let num = 1
    for(j = 0 ; j < star ; j++)
    {
        pattern+=num;
        num++
    }
    pattern+='\n';
    star++;
}
console.log(pattern)