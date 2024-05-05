export default function Post({post}){
  const {userId, id, title, body} = post;
  // const {} = post;
  return (
    <div className="box2">
      <h3>User ID: {userId}</h3>
      <p>ID: {id}</p>
      <p>Title: {title}</p>
      <p>Description: {body}</p>
    </div>
  )
}