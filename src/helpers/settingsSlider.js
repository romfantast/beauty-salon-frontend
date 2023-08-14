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
        position: 'absolute',
        bottom: '110px',
        padding: '10px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
};

export default settingsSlider;
