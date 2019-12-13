import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';

registerBlockType( 'mkaz/qrcode-block', {
	title: 'QRCode Block',
	icon: 'visibility',
	category: 'widgets',
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			attribute: 'data-url',
			selector: '#qrcode',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		return (
			<div>
				<TextControl
					label="URL"
					value={ attributes.url }
					onChange={ ( val ) => setAttributes( { url: val } ) }
				/>
			</div>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div id="qrcode" data-url={ attributes.url }></div>
		);
	}
});
