const settingsSlider = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: true,
  appendDots: dots => (
    <div
      style={{
        height: '50px',
        position: 'absolute',
        bottom: '31%',
        padding: '10px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
};

export default settingsSlider;
