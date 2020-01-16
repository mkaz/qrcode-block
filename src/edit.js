import {
	TextControl,
} from '@wordpress/components';


const edit = ( { attributes, setAttributes } ) => {
	return (
		<div>
			<TextControl
				label="URL"
				value={ attributes.url }
				onChange={ ( val ) => setAttributes( { url: val } ) }
			/>
		</div>
	);
};

export default edit;
