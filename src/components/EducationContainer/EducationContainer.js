import uniqid from 'uniqid'
import './EducationContainer.css'

const EducationContainer = ({ education }) => (
  <div className='education'>
    <h3>{education.name}</h3>
    <p className='education__address'>{education.address}</p>
    <p className='education__year'>{education.year}</p>
    {education.description && (
      <p className='education__description'>{education.description}</p>
    )}
  </div>
)

export default EducationContainer
