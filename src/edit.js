import {
	Placeholder,
	TextControl,
} from '@wordpress/components';

import { useEffect } from '@wordpress/element';

const edit = ( { attributes, isSelected, setAttributes } ) => {
	useEffect( () => {
		if ( !isSelected ) {
			const elem = document.getElementById("qrcode");
			if ( elem ) {
				const url = elem.dataset.url; // reads data-url
				const qrcode = new QRCode(elem, {
					text: url,
					width: 256,
					height: 256,
					colorDark : "#000000",
					colorLight : "#ffffff",
					correctLevel : QRCode.CorrectLevel.H
				});
			}
		}
	});

	return (
		<div>
			{ attributes.url && ! isSelected
				? <div
					id="qrcode"
					data-url={ attributes.url }
				></div>
				: <Placeholder
					label="QRCode Block"
					instructions="Add URL for QRCode"
				>
					<TextControl
						value={ attributes.url }
						onChange={ ( val ) => setAttributes( { url: val } ) }
					/>
				</Placeholder>
			}
		</div>
	);
};

export default edit;
