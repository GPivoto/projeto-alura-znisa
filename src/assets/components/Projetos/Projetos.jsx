import portal from '../../../../public/Portal.svg'
import PropTypes from 'prop-types'
import ProjectName from '../ProjectName/ProjectName';

const Projetos = (props) =>{
    return(
        <div className='mb-40'>
             <div className='flex gap-7 ml-[197px] mb-28'>
                <h4 className='text-white-100 text-4xl'>{props.title}</h4>
                <img src={portal} alt="Portal" className='size-9'/>
            </div>

            <ProjectName number={1} name='Project Name' />
            <ProjectName number={2} name='Project Name' />
            <ProjectName number={3} name='Project Name' />

            
        </div>


       
    )
}

Projetos.propTypes = {
    title: PropTypes.string.isRequired, 
  };


export default Projetos