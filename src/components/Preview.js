import React from 'react';
import { string } from 'prop-types';
import './Preview.css';
import 'github-markdown-css';

const Preview = ({ id, value }) => {
	console.log('<Preview/> Render');
	return <div id={id} className="Preview full-size markdown-body box" dangerouslySetInnerHTML={{ __html: value }} />;
};

Preview.propTypes = {
	id: string,
	value: string
};

Preview.defaultProps = {
	value: ''
};

export default Preview;
