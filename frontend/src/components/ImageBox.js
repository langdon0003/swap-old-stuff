const ImageBox = ({ image, height = '250px', borderRadius = '1.078em' }) => {
  return (
    <>
      {/* <Image
    style={{ maxWidth: '343px', maxHeight: '212px' }}
    src={
      !image
        ? 'https://placeimg.com/300/300/tech'
        : `${process.env.REACT_APP_IMAGE_URL_PREFIX}${image}`
    }
    alt={title}
    fluid
  ></Image> */}
      <div
        style={{
          // backgroundImage: {`url({${process.env.REACT_APP_IMAGE_URL_PREFIX}}{${image}})`},
          backgroundImage: image
            ? 'url(' + process.env.REACT_APP_IMAGE_URL_PREFIX + image + ')'
            : 'url(https://placeimg.com/400/250/tech)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: height,
          borderRadius: borderRadius,
        }}
      ></div>
    </>
  )
}

export default ImageBox
