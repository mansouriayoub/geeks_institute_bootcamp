import { Card } from "react-bootstrap"

const PostList = ({data}) => {
    return (
        <>
        {data.map((post)=>(
            <div key={post.id} style={{ marginBottom: "20px" }}>
                <Card>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))}
        </>
    )
}

export default PostList;