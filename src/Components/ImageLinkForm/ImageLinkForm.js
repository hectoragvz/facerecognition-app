import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f4 light-silver'>
                {'Detect more faces in pictures by pasting urls'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 flex justify-between'>
                    <input 
                    className='f4 pa2 w-70 center br3' type="text" 
                    onChange={onInputChange}
                    />
                    <button 
                    className=' br3 w-20 f4 link ph3 pv2 dib white bg-blue' 
                    onClick={onButtonSubmit}>Scan</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;