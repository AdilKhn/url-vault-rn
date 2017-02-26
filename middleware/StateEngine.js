//import React, { Component } from 'react'; 
export default class StateEngine {

  constructor(){
    this.globalState = {}; 
  }

  getSearchText(){
     return this.globalState.searchText; 
  }
  setSearchText(text){
    this.globalState.searchText = text; 
  }
}
