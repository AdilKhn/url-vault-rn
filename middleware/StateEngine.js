//import React, { Component } from 'react'; 

let uvGlobal = {};

function setUvState(key, value) {
  uvGlobal[key] = value;
  console.log('hash is:' );
  console.log(uvGlobal);
  console.log('----------' );
}

function getUvState(key){
  return uvGlobal[key];
}


export { setUvState, getUvState};
