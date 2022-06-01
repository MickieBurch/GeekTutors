import React from "react"
import { useQuery } from "@apollo/client"
import { Card, Container, Row, Col } from "react-bootstrap"
import { GET_ARTICLE_BY_ID } from "../utils/queries"
import Auth from "../utils/auth"
function Article (props){
    const {loading, error, data} = useQuery(GET_ARTICLE_BY_ID,{
        variables:{token:Auth.getToken(),id:props.currentArticle}
    })
    console.log("DATA: ",data);
    console.log("PROPS: ",props);
    if (loading) return "LOADING"
    return(
        <Container>
        <Row className='mt-5'></Row>
            <Col>
            <Card className="tutorbio" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={data.GetArticleById.tutorId.image} />
                <Card.Body>
                <Card.Title>{data.GetArticleById.tutorId.firstName} {data.GetArticleById.tutorId.lastName}</Card.Title>
                <Card.Text>Bio</Card.Text>
                <Card.Text>{data.GetArticleById.tutorId.description}</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col>
                <Card className="tutorbio" style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={data.GetArticleById.image} />
                    <Card.Body>
                    <Card.Title>{data.GetArticleById.name}</Card.Title>
                    <Card.Text>{data.GetArticleById.body}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}
export default Article