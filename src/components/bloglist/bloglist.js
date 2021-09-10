import React, { Component } from "react";
import styles from './bloglist.module.css'
import { Row, Image, Container, Col, Button } from 'react-bootstrap';
import ContentCard from '../blogcard/blogCard'


class BlogList extends Component {


    render() {

        const datalist = [
            { title: "Pet adoption safety guide", image:"/stella.jpg", text: "Read on for tips to prepare yourself, as well as your home, for a new furry friend. ", p1: "Are You Ready to Adopt?", p2: "Which Pet Is Right for You?", image: "/images/home.jpg"},
            { title: "Why You Should Adopt, and not Shop!", text: "Here are some great reasons to adopt, not shop:", p1: "You could save a life. ", p2: "You could jump on the rescue bandwagon.",image: "/images/petadopt.jpg"}
            



        ]
        return (
            <Container>
                <Row className={styles.petList}>
                    <div style={{ overflow: 'none' }}><Row className={styles.cardRow, "row flex-nowrap"} style={{ marginBottom: "20px"}}>
                        {datalist.map(
                            (pet) => {
                                return (<Col><ContentCard title={pet.title} text={pet.text} p1 = {pet.p1} p2 = {pet.p2} image = {pet.image}/></Col>)
                            }
                        )}

                        {/* <Col><ContentCard /></Col>
                    <Col><ContentCard /></Col> */}
                    </Row></div>
                    {/* <div style={{ overflow: 'none' }}><Row className={styles.cardRow, "row flex-nowrap"}>
                        {datalist2.map(
                            (pet2) => {
                                return (<Col><ContentCard title={pet2.title} text={pet2.text} /></Col>)
                            }
                        )} */}

                        {/* <Col><ContentCard /></Col>
                    <Col><ContentCard /></Col> */}
                    {/* </Row></div> */}
                </Row>
            </Container>
        );
    }
}









export default BlogList;
