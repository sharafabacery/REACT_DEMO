import React from 'react'
import QrReader from 'react-qr-reader'

function Demo9() {
   const handleScan = data => {
        if (data) {
         console.log(data)
         console.log('www.SIM.com/courses/{courseID where lives in redux store}/'+data)
        }
      }
    const  handleError = err => {
        console.error(err)
      }
    return (
        <div>
        <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        className="container"
        style={{ width: '25%' }}
      />
        </div>
    )
}

export default Demo9
