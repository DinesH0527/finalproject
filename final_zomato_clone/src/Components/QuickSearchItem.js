import React from 'react';
import '../Styles/Home.css';
import { withRouter} from 'react-router-dom';


class QuickSearchItem extends React.Component{

      handleNavigate = (mealTypeId) =>
      {
            const locationId = sessionStorage.getItem('locationId');
             if(locationId)
             {


                  this.props.history.push(`/filter?mealtype=${mealTypeId}&location=${locationId}`);
             }
             else
             {

                  this.props.history.push(`/filter?mealtype=${mealTypeId}`);


             }
      }

render()

{
      const { QSItemData } = this.props;

      console.log(QSItemData,"data")

return(


 
<div key={QSItemData._id} className="col-sm-12 col-md-12 col-lg-4  item   m-1 ms-sm-2" onClick = {()=>this.handleNavigate(QSItemData.meal_type)}>

       <div>      
              <img src = {`./${QSItemData.image}`} height="150" width="200" />
        </div>




      <div>
            <div className="breakfast">  {QSItemData.name} </div>
            <div className="sub-break">{QSItemData.content}</div>
       </div>

   </div>

)


}


}
export default withRouter(QuickSearchItem);



