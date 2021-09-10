import React, {Component} from 'react';
import styles from './HeaderPane.module.css';
import {Row, Image, Container, Col} from 'react-bootstrap';
import pet from './pet.svg';



class HeaderPane extends Component{

    render(){
        return(

            // <Container fluid>
                <Row className={styles.HeaderPane}>
                <Col className={styles.leftColumn}>
                    <h1 className={styles.headText}><Row>Matching pets</Row></h1>
                    <h1 className={styles.headText}><Row>with good homes!</Row></h1>
                    </Col>
                <Col><Image className={styles.HeaderPaneImg} src={pet} width='300px' height='210px'/></Col>
                </Row>




        );
    }
}


export default HeaderPane;

            