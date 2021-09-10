import React from "react";
import HeaderPane from "../components/HeaderPane/HeaderPane";
import PetList from "../components/petlist/petlist";
import PrimarySearchAppBar from "../components/Appbar/Appbar";

export default function PetCard(props) {

    return (
        <>
        <PrimarySearchAppBar />
            <HeaderPane />
            < PetList />
            </>
    )

}
