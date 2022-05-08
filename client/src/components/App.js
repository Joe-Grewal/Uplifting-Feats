import React from 'react';
import '../styles/App.scss';
import Nav from './Nav';
import Bio from './Bio';
import BioDivs from './BioDivs';
import MyHealthJournal from './MyHealthJournal';

export default function App() {
  return (
    <>
    <Nav/>
    <Bio/>
    <BioDivs/>
    <MyHealthJournal/>
    </>
  );
}
