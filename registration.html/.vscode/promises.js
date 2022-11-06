function buycar()
{
    return newpromise((res,rej)=>
        {
            setTimeout(()=>
            {
                rej('buy a car')
            },1000)
        })
}
function plantrip()
{
    return newpromise((res,rej)=>
        {
            setTimeout(()=>
            {
                res('plantrip')
            },3000)
        })
}
function reachmanali()
{
    return newpromise((res,rej)=>
        {
            setTimeout(()=>
            {
                res('reachmanali')
            },2000)
        })
}
async function fun1()
    {
        try{
      const msg=await buycar();
      console.log(msg);
      const msg1=await plantrip();
      console.log(msg1);
      const msg2=await reachmanali();
      console.log(msg2);
        }
      catch(error)
      {
        console.log(error)
      }

    }
    fun1()


