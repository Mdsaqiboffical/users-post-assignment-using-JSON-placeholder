let container = document.getElementById("cont")
async function fetchData() {
    let userUrl = await fetch("https://jsonplaceholder.typicode.com/users");
    let postUrl = await fetch("https://jsonplaceholder.typicode.com/posts");

    let users = await userUrl.json()
    let posts = await postUrl.json()
    console.log(posts);

    return { users, posts };

}

fetchData().then(({ users, posts }) => {
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        const userCard = document.createElement("div");
        userCard.classList.add("post-cards");

        const userId = document.createElement("h2")
        userId.innerText = `User Id: ${user.id}`
        userCard.appendChild(userId)

        const userName = document.createElement("h2")
        userName.innerText = `User Name: ${user.name}`
        userCard.appendChild(userName)

        for (let j = 0; j < posts.length; j++) {
            let post = posts[j]

            if (post.userId === user.id) {
                const postId = document.createElement("h4");
                postId.innerText = `Post: ${post.id}`
                userCard.appendChild(postId)

                const postTitle = document.createElement("h4");
                postTitle.innerText = `Title: ${post.title}`
                userCard.appendChild(postTitle)

                const postBody = document.createElement("h4");
                postBody.innerText = `Body: ${post.body}`
                userCard.appendChild(postBody)

            };

            container.appendChild(userCard)

        };
    };
}).catch((error) => {
    alert("Fetching Error!", error);

});