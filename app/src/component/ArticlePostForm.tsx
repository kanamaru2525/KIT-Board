export default function ArticlePostForm() {
    return (
        <form action={(formData: FormData) => {
            fetch('/api/article', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
        }}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />

            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" />

            <button type="submit">Submit</button>
        </form>
    )
}