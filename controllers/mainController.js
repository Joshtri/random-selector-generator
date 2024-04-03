


//GET : Page main.
export const mainPage = (req,res)=>{

    const locals ={
        title : 'Main Page'
    }

    res.render('index',{
        locals
    });
}


//POST : 