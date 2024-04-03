


//GET : Page Selection.
export const selectionPage = (req,res)=>{

    const locals ={
        title : 'Selection Page'
    }

    res.render('selection',{
        locals
    });
}


//POST : 