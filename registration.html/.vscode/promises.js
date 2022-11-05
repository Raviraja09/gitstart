const post=[
{
    title:'post one',body:'this is post one'},
    {title:'post two',body:'this is post two'
}
];
function createpost(post)
{
    return new Promise((resolve,reject) =>
    {
    setTimeout(() =>{
        posts.push(post);
        const error=true;
    if(!error)
    {
        resolve();
}
})
else{
    reject('error:something went wrong');
}
    },2000);
    const promise1=promise.resolve("hello world");
    const promise2=10;
    const promise3=new promise((resolve,reject)=>
        setTimeout(resolve,2000,'goodbye')
    );
    promise.all([promise1,promise2,promise3,]).then((values =>)=>console.log(values)));
}

