//here we write the logic for several actions related to restaurants
import {ALL_RESTAURANT_FAIL, ALL_RESTAURANT_REQUEST,ALL_RESTAURANT_SUCCESS, CLEAR_ERROR, SORT_BY_RATINGS, SORT_BY_REVIEWS, TOGGLE_VEG_ONLY} from "../constants/restaurantConstant";
import axios from "axios";

export const getRestaurants = ()=>{
    return async(dispatch)=>{
        try{
        dispatch({type: ALL_RESTAURANT_REQUEST}); //THIS IS THE COMMAND WE ARE GIVING TO DISPATCH REQUEST FOR THE RESTAURANTS
        let link= `/api/v1/eats/stores`; //THIS LINK IS HOLDING OUR DATA
        const { data } = await axios.get(link);
        console.log(data);
        const {restaurants, count}=data; //DESTRUCTURING
        dispatch({
            type: ALL_RESTAURANT_SUCCESS, //THIS IS THE COMMAND WE ARE GIVING FOR DISPATCHING THE SUCCESS OF THE RETRIEVAL OF RESTAURANTS
            payload: {restaurants, count} //THE DATABASE WE RETRIEVED TO BE SENT TO THE REDUCER
    }) 
}catch(err){
   dispatch({
    type: ALL_RESTAURANT_FAIL,
    payload: err.response.data.message //we are dispatching the error
   })
}
    };
};
export const sortByRatings=()=>{
    return{
        type:SORT_BY_RATINGS, //here we do not want any interaction with the data we only want to sort thats why we do not dispatch

    }
}
export const sortByReviews=()=>{
    return{
        type:SORT_BY_REVIEWS, //here we do not want any interaction with the data we only want to sort thats why we do not dispatch
        
    }
}
export const toggleVegOnly=()=>{
    return{
        type:TOGGLE_VEG_ONLY, //here we do not want any interaction with the data we only want to sort thats why we do not dispatch
        
    }
}
export const clearErrors=()=>{
    return{
        type:CLEAR_ERROR, //here we do not want any interaction with the data we only want to sort thats why we do not dispatch
        
    }
}