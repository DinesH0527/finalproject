import React from 'react';
import '../Styles/Home.css';
import axios from 'axios';
import { withRouter} from 'react-router-dom';


class Wallpaper extends React.Component{


    constructor(){

       super();
       this.state = {

        restaurants:[],
        searchText:undefined,
        suggestions: []

    }}

    handleChangeLocation=(event)=>
    {
        
        const locId = event.target.value;
        sessionStorage.setItem('locationId', locId);

        axios({
            url      :  `http://localhost:4040/restaurants/${locId}`,
            method   :  'GET',
            headers  :  {'Content-Type' : 'application/json'}
            })
            
            .then(res =>
              {
            
            this.setState({ restaurants: res.data.restaurants})
            
              })
          .catch()
    }
    
  
    handleInputChange = (event) =>
     {
    
    
         const { restaurants } = this.state;
         const searchText = event.target.value;
    
         let searchRestaurants = [];
    
           if(searchText)
           {
            searchRestaurants = restaurants.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
           }
    
           this.setState({ suggestions: searchRestaurants, searchText });
    
     }
    
        


    renderSuggestions = () =>
    {
      const {  suggestions, searchText } = this.state;

      if(suggestions.length == 0 && searchText == "")
      {
         return <u1>
                  
                  <li> No Search Results Found</li>

               </u1>
      }
      
      return(
             <ul>
                {
                   suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{`${item.name} -   ${item.locality},${item.city}`}</li>))
                }

             </ul>

      );

    }

    selectedText = (resObj) => 
    {

        this.props.history.push(`/details?restaurant=${resObj._id}`);
    }



    render()
    {
        const { locationsData }  = this.props;


      return(

          <div>

   
    <title> home page using bootstrap </title>



{/*margins and padding 
spacings in bootstrap files
property  whichsize? and whatsize?
notations in botstrap
1.margin reprasented as - m
2.paddding as  - p
3.top as -    t
4.bottom as-  b
5.start as  leftside of the item  left as-  s
6.end as rightside of the item right as -   e
7.x for both right and left
8.y for both top and bottom
9.blank allthe 4 sides of elements---------*/}





{/*lg-4 is  largde4 is nothing but if you take the ful screen it take 1 row in 3 columns get as 4+4+4 = 12 */}
{/*md-6 is  medium6 is nothing but if you take the tablet veiw it takes 1 row in 2 coloumns get as 6+6= 12 */}
{/*sm-12 is small12 is nothing but if you take the mobile veiw it takes 1 row in 1 coloums it takes 12 partitons in 1 row */}

<div className="container-fluid">
<div className="container text-center" >
<div className="row">
    <img src="./Assets/restarent.png" height="350px" width="100%"/>
<div className="col-sm-12 col-md-12 col-lg-12 logo e">
     <b>e!</b>
</div>
</div>


<div className="row">
    <div className="col-sm-12 col-md-12 col-lg-12 sublogo">    
        Find the best restaurants, cafés, and bars 
    </div>
</div>
</div>
<br/>

<div className="locationSelector">

            <div className=" col-sm-12 col-md-6 col-lg-12 location">

       <select className="locationDropdown" onChange={this.handleChangeLocation}>
                <option value = "0" > Select</option>

            {locationsData.map((item , index) =>{

                 return < option key = {index + 1} value = {item.location_id} > { `${item.name},${item.city}` } </option>

            })}

      </select>
      </div>
    

        
      <div>
                            <span className="glyphicon glyphicon-search search"></span>
                            <div id="notebooks">
                            <input id="query" className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" onChange={this.handleInputChange} />
                            {this.renderSuggestions()}
      </div>



     </div>
     </div>
     </div>

          </div>

         )

    }


}

export default withRouter(Wallpaper);