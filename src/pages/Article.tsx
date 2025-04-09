import { useParams } from "react-router";

function Article() {
    const { id } = useParams();
    return <h1>
        Hello Article {id}
    </h1>;
}

export default Article;