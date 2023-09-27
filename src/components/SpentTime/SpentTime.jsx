import PropTypes from "prop-types"

const SpentTime = ({spentTime}) => {
    return (
        <div className="border border-[#6047EC] bg-[#6047ec1a] rounded-lg py-5 text-center">
            <h3 className="text-2xl font-bold text-[#6047EC]">Spent time on Read : {spentTime} min</h3>
        </div>
    );
};

SpentTime.propTypes = {
    spentTime: PropTypes.number.isRequired,
}

export default SpentTime;