const ImageBox = ({ image, height, width, borderRadius = '1.078em' }) => {
  return (
    <>
      <div
        style={{
          // backgroundImage: {`url({${process.env.REACT_APP_IMAGE_URL_PREFIX}}{${image}})`},
          backgroundImage: image
            ? 'url(' + process.env.REACT_APP_IMAGE_URL_PREFIX + image + ')'
            : 'url(https://placeimg.com/400/250/tech)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: width || '100%',
          height: height || '250px',
          borderRadius: borderRadius,
        }}
      ></div>
    </>
  )
}

export default ImageBox
