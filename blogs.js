// ---------- LIST BLOGS ----------
if (document.getElementById("blogList")) {

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {

            let output = "";

            // API blogs
            for (let i = 0; i < 10; i++) {
                output += `
<div class="card p-3 mb-3">
<h5>${data[i].title}</h5>
<p>${data[i].body.substring(0, 80)}...</p>
<a href="post.html?id=${data[i].id}" class="btn btn-custom">Read More</a>
</div>
`;
            }

            // Local blogs
            let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

            blogs.forEach((blog, i) => {
                output += `
<div class="card p-3 mb-3 border-success">
<h5>${blog.title}</h5>
<p>${blog.body.substring(0, 80)}...</p>
<a href="post.html?local=${i}" class="btn btn-custom">Read More</a>
</div>
`;
            });

            document.getElementById("blogList").innerHTML = output;

        });

}


// ---------- VIEW BLOG ----------
if (document.getElementById("title") && !document.getElementById("blogForm")) {

    let id = new URLSearchParams(location.search).get("id");
    let local = new URLSearchParams(location.search).get("local");

    if (local) {

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        document.getElementById("title").innerText = blogs[local].title;
        document.getElementById("body").innerText = blogs[local].body;

    }
    else {

        fetch("https://jsonplaceholder.typicode.com/posts/" + id)
            .then(res => res.json())
            .then(data => {

                document.getElementById("title").innerText = data.title;
                document.getElementById("body").innerText = data.body;

            });

    }

}


// ---------- CREATE BLOG ----------
if (document.getElementById("blogForm")) {

    document.getElementById("blogForm").onsubmit = function (e) {

        e.preventDefault();

        let title = document.getElementById("title").value;
        let body = document.getElementById("body").value;

        let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

        blogs.unshift({ title, body });

        localStorage.setItem("blogs", JSON.stringify(blogs));

        alert("Blog posted successfully!");

        location.href = "blogs.html";

    };

}