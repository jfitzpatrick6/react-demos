import {useEffect, useState} from "react";

const FetchDataEffect = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
	async function getPosts() {
	    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
	    const rawdata = await result.json();
	    if (rawdata && rawdata.length) setData(rawdata);
	}
	getPosts();
    }, []);
    return (
	<div>
	    <h1>Posts</h1>
	    {data.map((post) => (
		<section key={post.id}>
		    <h2>{post.title}</h2>
		    <p>{post.body}</p>
		</section>
	    ))}
	</div>
    )
}

export default FetchDataEffect;
