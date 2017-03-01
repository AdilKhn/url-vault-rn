//import React, { Component } from 'react'; 

let uvGlobal = {};

function setUvState(key, value) {
  uvGlobal[key] = value;
}

function getUvState(key){
  return uvGlobal[key];
}


export { setUvState, getUvState};
