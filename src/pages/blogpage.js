import React from "react";
import HeaderPane from "../components/HeaderPane/HeaderPane";
import BlogList from "../components/bloglist/bloglist";
import PrimarySearchAppBar from "../components/Appbar/Appbar";

export default function BlogCard(props) {

    return (
        <>
        <PrimarySearchAppBar />
            <HeaderPane />
            < BlogList />
            </>
    )

}
