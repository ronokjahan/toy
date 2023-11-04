
import about1 from '../../assets/images/about_us/parts.jpg'
import about2 from '../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=' lg:w-1/2 reletive'>
          <img src={about2} className="max-w-sm rounded-lg shadow-2xl" />
          <img  src={about1} className="max-w-sm rounded-lg shadow-2xl " />
          </div>
          <div className='lg:w-1/2 '>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default About;