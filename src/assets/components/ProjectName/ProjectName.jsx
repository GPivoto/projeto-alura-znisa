import PropTypes from "prop-types"

const ProjectName = (props) =>{
    return(
        <div className="mb-10 bg-black-300 ml-[174px] rounded-lg py-14 flex gap-28 items-center justify-center w-[1093px]">
            <div className="bg-custom-gradient w-[545px] h-[545px]"></div>
            <div className="flex flex-col gap-9">
                <div className="bg-black-100 border-2 border-white-100/30 w-12 h-12 rounded-full text-white-100/70 flex items-center justify-center">{props.number}</div>
                <h5 className="text-white-100 text-3xl font-bold">{props.name}</h5>
            </div>
        </div>
    )
}
ProjectName.propTypes = {
    name: PropTypes.string.isRequired, 
    number: PropTypes.number,
  };

export default ProjectName