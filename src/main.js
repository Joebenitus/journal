
import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Entry from './entry.js';
$(document).ready(function() { 
  let test = "Note that in our own code, we will separate shapes.";
  let entry = new Entry('test',test);
  $('#result').text(entry.getTeaser());
  //console.log(entry.wordCount());

});