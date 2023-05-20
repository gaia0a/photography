import React, { useState } from 'react';
import { Images } from './img';

export default function Home() {
    const [item, setFile] = useState(null);

    return (
        <div className="thecontainer">
            <div className="images-container">
                {
                    Images.map((item) => (
                        <div className="image" key={item.id} onClick={() => setFile(item)}>
                            {
                                item.type === 'image'
                                ? <img src={item.image} alt="" />
                                : <img src={item.image} alt="" />
                            }
                        </div>
                    ))
                }
            </div>

            <div className="modal-img" style={{ display: item ? 'block' : 'none' }}>
                <img src="images/closebutton.png" alt="Close button" onClick={() => setFile(null)} className="close-button" />

                {
                    item?.type === 'image'
                    ? <img src={item?.image} alt="" />
                    : <img src={item?.image} alt="" />
                }
            </div>
        </div>
    )
}