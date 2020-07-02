import React from 'react'
import QRCode from 'qrcode.react'
function Demo8() {
    return (
       
        <div>
        <QRCode value="1919582542" />
        {
            /**
             * value = Student_Id where lives in redux store
             */
        }
        </div>
    )
}

export default Demo8
