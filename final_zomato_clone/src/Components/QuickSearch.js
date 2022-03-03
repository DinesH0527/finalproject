import React from 'react';
import '../Styles/Home.css';
import QuickSearchItem from './QuickSearchItem';

class QuickSearch extends React.Component{

    render()
    {

  
    const { quickSearchItemsData } = this.props;


      return(

<div>
                          
<div className="container">
<div className="container-fluid text-center ">
        
    <div className=" row quick">
          <div className="quicksearch heading">
              Quick Searches
          </div>
    </div>

     <div className="row search">
             <div className="quicksearch subheading ">
                  Discover restaurants by type of meal
                  
             </div>
     </div>
 </div>    


<div className="container">
    
<div className="row">
    {quickSearchItemsData.map((item) => {
    
    return  <QuickSearchItem  QSItemData= {item} />
    
    })}
 
         
</div>
</div>
</div>
</div>


         )

} 


}

export default QuickSearch;