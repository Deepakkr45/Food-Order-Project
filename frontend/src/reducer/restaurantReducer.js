//REDUCER WILL HAVE TWO PARAMETERS WHICH ARE INITIAL STORE AND THE ACTION

import { ALL_RESTAURANT_FAIL, ALL_RESTAURANT_REQUEST, ALL_RESTAURANT_SUCCESS, CLEAR_ERROR, SORT_BY_RATINGS, SORT_BY_REVIEWS, TOGGLE_VEG_ONLY } from "../constants/restaurantConstant"

const initialState={
    restaurants: [], //NO STORES INITIALLY IN STORE
}
 export const restaurantReducer=(state=initialState,action)=>{
    switch(action.type){
        case ALL_RESTAURANT_REQUEST:
            return{
                //IT HAS TO RETURN THE STORE
                ...state,
                loading:true,
                error:null
            };
            
        case ALL_RESTAURANT_SUCCESS:
            return{
                //IT HAS TO RETURN THE UPDATED STATE
                ...state,
                loading:false,
                count: action.payload.count,
                restaurants: action.payload.restaurants,
            };
        //now we write some reducers for ratings,reviews,toggle and errors
        case ALL_RESTAURANT_FAIL:
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case SORT_BY_RATINGS:
            return{
                ...state, //initial state
                restaurants: [...state.restaurants].sort(
                    (a,b)=>b.ratings-a.ratings)
            }
        case SORT_BY_REVIEWS:
            return{
                ...state,
                restaurants:[...state.restaurants].sort(
                    (a,b)=>b.numOfReviews-a.numOfReviews
                )
            }
        case TOGGLE_VEG_ONLY:
            return{
                ...state,
                showVegOnly:!state.showVegOnly, //if it was false previously, after pressing the button it should be converted to true
                pureVegRestaurantsCount: calculatePureVegCount( 
                    //this is a middleware function
                    //to change the number of pure veg restaurants
                    state.restaurants,
                    !state.showVegOnly
                )
            }
        case CLEAR_ERROR:
            return{
                ...state,
                error:null
            }
        default:
            return state;
    }
 }

 //middle ware  to calculate pure veg restaurant count
 const calculatePureVegCount=(restaurants,showVegOnly)=>{
    if(!showVegOnly){
        return restaurants.length;
    }else{
        return restaurants.filter((restaurant)=>restaurant.isVeg).length;
    }
 }