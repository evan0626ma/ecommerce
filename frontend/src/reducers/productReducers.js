
// define product list reducer when we get api call request, success and failed dispatch action

export const productListReducer = (state = {product:[]},action) =>{
    switch (action.type){
        case 'Product_List_Request':
            return  {loading:true,products:[]}
        case 'Product_List_Success':
            return {loading:false,product:action.payload}
        case 'Product_List_Success':
                return {loading:false,product:action.payload}
        case 'Product_List_Fail':
                return {loading:false,error:action.payload}
        default:
            return state
    }
}