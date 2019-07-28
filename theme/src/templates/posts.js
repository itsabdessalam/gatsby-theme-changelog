import React from "react";
import PropTypes from "prop-types";
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

PostsTemplate.propTypes = {
	data: PropTypes.object.isRequired,
	pageContext: PropTypes.object.isRequired
};

export default PostsTemplate;
