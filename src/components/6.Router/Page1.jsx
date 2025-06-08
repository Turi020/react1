import React from 'react';
import Card from "../Card";
import Button from "../Button";
import DropDown from "../DropDown";
import Container from "../Container";
import { Link } from "react-router";

export default function Page1() {
  return (
    <div className="w-screen bg-amber-200">
      <div className="grid grid-cols-3 w-screen gap-2">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div>
        <Button />
        <DropDown />
        <Container />
        <Link to="/p2" className="bg-green-400 rounded-2xl hover:cursor-pointer hover:bg-green-600 p-4">
          Page 2
        </Link>
      </div>
    </div>
  );
}