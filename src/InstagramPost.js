const InstagramPost = (props) => {
    console.log(props);
    const {numberOfLikes, username, caption} = props;
    return (
        <div> 
          <img src={'https://picsum.photos/640/640'}/>
          <div>
            <button>Like</button>
            <button>Reply</button>
            <button>Share</button>
            <button>Bookmark</button>
          </div>
          <div>
            {numberOfLikes} Likes
          </div>
          <div>
            <p>{username}</p>
            <p>{caption}</p>
          </div>
        </div>
      );
}

export default InstagramPost;