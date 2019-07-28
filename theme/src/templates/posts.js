import React from "react";
import PostList from "../components/PostList";

const PostsTemplate = ({
	pageContext: { posts, locale, themeConfig, tagsPath }
}) => {
	return (
		<PostList
			posts={posts}
			locale={locale}
			themeConfig={themeConfig}
			tagsPath={tagsPath}
		/>
	);
};

export default PostsTemplate;
