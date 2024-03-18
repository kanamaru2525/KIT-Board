import { Button, Center, Input, Label, Textarea } from "@yamada-ui/react";

export default function ArticlePostForm() {
    return (
        <form action="/api/article" method="post">
        <div>
        <div>
        <Label background="#FBFBFB" htmlFor="title" >Title</Label>    
        <Input type="text" id="title" name="title" />
        </div>
        <div>
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" />
        </div>
            <Button width="100%"  marginTop="5%" variant="ghost"backgroundColor="primary" color="white" type="submit">Submit</Button>
        </div>
        </form>
    )
}