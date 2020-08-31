
import $ from 'jQuery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Entry from './entry.js';
$(document).ready(function() {
  $("form#user-form").submit(function(event){
    event.preventDefault();
    let title = $("input#user-title").val();
    let body = $("input#user-entry").val();
    let entry = new Entry(title, body);
    $('#teaser').text(entry.getTeaser());
    $('#vowels').text('number of vowels: ' + entry.getVowels());
    $('#consonants').text('number of consonants: ' + entry.getConsonants());
    $('#word-count').text('number of words: ' + entry.wordCount());
    $('#title').text(entry.title);
    $('#body').text(entry.body);
  })
});