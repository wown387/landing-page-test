export const Testimonials = (props) => {
  return (
    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>Career</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className='col-md-4'>
                <div className='testimonial'>
                  <div className='testimonial-image'>
                    {' '}
                    { (i == 1||i==3) ?
                      <img style={{ objectFit: "contain", backgroundColor: "black" }} src={d.img} alt='' />
                      :
                      <img style={{ objectFit: "contain", }} src={d.img} alt='' />
                    }

                    {' '}
                  </div>
                  <div className='testimonial-content'>
                    <p>"{d.text}"</p>
                    <div className='testimonial-meta'> - {d.name} </div>
                  </div>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
