import React, { Component } from 'react';
import {Card, Container, Row, Col, CardImg, CardText,
     CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';
class Product extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            products: [
                {
                    "id": "589e00bc-1879-42cd-b982-8776c98befbe",
                    "name": "Propel Sport Drink",
                    "discribtion": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
                }, {
                    "id": "dc73494f-91d6-4bb3-89bf-a227e362b51f",
                    "name": "Chinese Foods - Pepper Beef",
                    "discribtion": "lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
                }, {
                    "id": "5f66fc84-629a-40ab-920b-55024fb711a5",
                    "name": "Pasta - Cappellini, Dry",
                    "discribtion": "nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
                }, {
                    "id": "1a552586-e136-4316-9c77-a0f15fd1024b",
                    "name": "Prunes - Pitted",
                    "discribtion": "blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
                    "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
                }, {
                    "id": "35a8feb2-7138-42fb-9506-18c2c83553a6",
                    "name": "Parsley - Fresh",
                    "discribtion": "phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate",
                    "imageUrl": "http://dummyimage.com/300x200.bmp/ff4444/ffffff"
                }, {
                    "id": "04252a5c-f910-4d70-8c99-5e370ebb4a5f",
                    "name": "Bulgar",
                    "discribtion": "cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
                }, {
                    "id": "d31cf421-8035-45bd-aeb2-37199c0b930a",
                    "name": "Trout - Smoked",
                    "discribtion": "massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",
                    "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
                }, {
                    "id": "df3ae340-beea-4651-9911-6d308b24cb86",
                    "name": "Kahlua",
                    "discribtion": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
                }, {
                    "id": "84e91aee-c844-466b-96f1-9b390ffc45eb",
                    "name": "Lettuce - Mini Greens, Whole",
                    "discribtion": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
                }, {
                    "id": "c863b6cb-d311-4d62-8b90-b89ec55d3a34",
                    "name": "Chef Hat 25cm",
                    "discribtion": "id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
                }, {
                    "id": "d2dc57dd-23c4-46ec-a2e8-7f4cc16c5d7d",
                    "name": "Juice - V8 Splash",
                    "discribtion": "turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
                }, {
                    "id": "65bf9ad2-9ffb-4b20-bbc0-43aad74f943e",
                    "name": "Rice - Brown",
                    "discribtion": "non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel",
                    "imageUrl": "http://dummyimage.com/300x200.png/cc0000/ffffff"
                }, {
                    "id": "dd58a6e9-d2ce-47fa-a79a-0f344f0f5b75",
                    "name": "Marjoram - Dried, Rubbed",
                    "discribtion": "etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id",
                    "imageUrl": "http://dummyimage.com/300x200.bmp/dddddd/000000"
                }, {
                    "id": "95da5e7f-4c11-4c0a-8568-bc579b017cf2",
                    "name": "Beef - Bones, Cut - Up",
                    "discribtion": "pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque",
                    "imageUrl": "http://dummyimage.com/300x200.png/5fa2dd/ffffff"
                }, {
                    "id": "1a2e35d4-0d92-4352-8d56-30100bea538a",
                    "name": "Shrimp - Black Tiger 8 - 12",
                    "discribtion": "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
                }, {
                    "id": "c98f6ca0-7202-47f3-b3f6-f371ceb2b497",
                    "name": "Lettuce - Belgian Endive",
                    "discribtion": "felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio",
                    "imageUrl": "http://dummyimage.com/300x200.bmp/cc0000/ffffff"
                }, {
                    "id": "1c6f1c52-a45b-408a-867c-ca6899c01aa1",
                    "name": "Spice - Pepper Portions",
                    "discribtion": "sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
                }, {
                    "id": "80909819-9b74-4c01-b888-be76f1718131",
                    "name": "Tomato Puree",
                    "discribtion": "amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
                }, {
                    "id": "e6ee6d73-e202-43d1-87fe-ab9650afaf7a",
                    "name": "Sugar - Sweet N Low, Individual",
                    "discribtion": "diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus",
                    "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
                }, {
                    "id": "9e66b284-1182-4c45-b7e5-c314ebba086a",
                    "name": "White Fish - Filets",
                    "discribtion": "vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus",
                    "imageUrl": "http://dummyimage.com/300x200.bmp/5fa2dd/ffffff"
                }
            ]
        }
    }

    render() {
        const {products} = this.state;
        console.log(products);
        return (
            <Container>
                <Row>
                    {
                        products.map((product, index) => (
                            <Col sm="6" md="4" className="mb-4">
                                <Card key={index}>
                                    <CardImg 
                                        top
                                        width="100%" 
                                        src={product.imageUrl} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{product.name}</CardTitle>
                                        <CardText>{product.discribtion}</CardText>
                                        <Button>Add to cart</Button>
                                    </CardBody>
                                </Card>
                            </Col>   
                        ))
                    }
                </Row>
            </Container>
        );
    }
}

export default Product;
