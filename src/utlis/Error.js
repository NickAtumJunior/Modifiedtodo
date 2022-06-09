
export default (error) =>{
    try{
        const {response} = error;

        switch (Number(response.status)) {
            case 400:
                return response.data.message;
        
            case 401:
                 return response.data.message;
            
            case 403:
                return "Error: 403  - You're not a valid user"
            
            case 404: 
                return "Error: 404  - Not Found"
            
            case 500:
                return "Error: 500  - Server Error"
            
            default:
                return "Something went wrong"
            
        }
    } catch (err) {
         return "Something went wrong"
    }
};

