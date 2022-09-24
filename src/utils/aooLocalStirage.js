//access data
export const accessData=(key)=>{
    try{
        let data  = localStorage.getItem(key);
        data = JSON.parse(data);
        return data
    }
    catch(err){
        console.log(err)
    }
}

//save data
export const saveData=(key,data)=>{
   localStorage.setItem(key,JSON.stringify(data))
}