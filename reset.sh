#!/bin/bash
rm -rf android ;
rm -rf ios; 
react-native eject && rm -rf node_modules && npm install && react-native link
