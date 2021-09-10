import React, { Component } from "react";
import styles from './petlist.module.css';
import { Row, Image, Container, Col, Button } from 'react-bootstrap';
import ContentCard from '../petcard/petCard'


class PetList extends Component {


    render() {

        const datalist = [
            { title: "stella", text: "meet stella!",image:"/images/stella.jpg" },
            { title: "alex", text: "meet alex!",image:"/images/alex.jpg" },
            { title: "Marly", text: "meet marly!",image:"/images/marly.jpeg" },

        ]
        const datalist2 = [
            { title: "arlo", text: "meet arlo!",image:"/images/arlo.jpg" },
            { title: "rio", text: "meet rio!", image:"/images/rio.jpg" },
            { title: "snowy", text: "meet snowy!",image:"/images/snowy.jpg" }
        ]
        return (
            <Container>
                <Row className={styles.petList}>
                    <Row className={styles.titleRow}><Col xs='auto'>Near Me </Col><Col xs='auto'>Favorites</Col><Col xs='auto'>Popular</Col></Row>
                    <div style={{ overflow: 'none' }}><Row className={styles.cardRow, "row flex-nowrap"} style={{ marginBottom: "20px" }}>
                        {datalist.map(
                            (pet) => {
                                return (<Col><ContentCard title={pet.title} text={pet.text} image ={pet.image}/></Col>)
                            }
                        )}

                        {/* <Col><ContentCard /></Col>
                    <Col><ContentCard /></Col> */}
                    </Row></div>
                    <div style={{ overflow: 'none' }}><Row className={styles.cardRow, "row flex-nowrap"}>
                        {datalist2.map(
                            (pet2) => {
                                return (<Col><ContentCard title={pet2.title} text={pet2.text} image ={pet2.image} /></Col>)
                            }
                        )}

                        {/* <Col><ContentCard /></Col>
                    <Col><ContentCard /></Col> */}
                    </Row></div>
                </Row>
            </Container>
        );
    }
}









export default PetList;
