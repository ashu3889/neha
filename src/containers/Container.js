		import React ,{Component} from 'react';		
		import { connect } from "react-redux";
		

		import FinalYearlyBPB from './final_yearly_bpb.js';
		
        import { Switch, Route } from 'react-router-dom';



		export default  class Board extends Component{

		  render(){

		    return(
		       <div>
		        <Switch>
                      <Route exact path='/ftest' component={FinalYearlyBPB}/>
                </Switch>		 
		        </div>)
		    }
		}

