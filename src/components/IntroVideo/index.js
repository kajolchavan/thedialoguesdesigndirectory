import React from 'react'

const index = ({homeContent}) => {
  return (
    <section>
   {homeContent[0]?.videoList[0]?.videoPc && <video className='videoPc' autoPlay muted loop width="100%" height="100%" src={homeContent[0]?.videoList[0]?.videoPc?.asset?.url} />}
   {homeContent[0]?.videoList[0]?.videoMobile && <video className='videoMobile' autoPlay muted loop width="100%" height="100%" src={homeContent[0]?.videoList[0]?.videoMobile?.asset?.url} />}
 </section>
  )
}

export default index