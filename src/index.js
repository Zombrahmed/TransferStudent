import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import FilterableCourseTable from './FilterableCourseTable';



ReactDOM.render(
  
  <FilterableCourseTable/>,
  document.getElementById('root')
);



serviceWorker.unregister();
