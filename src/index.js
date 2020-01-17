import { registerBlockType } from '@wordpress/blocks';

import edit from './edit';
import save from './save';

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
	edit,
	save,

} );
