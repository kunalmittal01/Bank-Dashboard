const Tenure = (props)=>{
    return (
        <div className="tenure relative bottom-0 md:w-1/2 pt-10 pl-4">
            <select className="w-full px-2 py-3 border border-gray-200 text-gray-600 focus:border-blue-600 focus:outline-none" name="tenure" id="" onChange={(e)=>props.setLoanTerm(e.target.value)}>
                <option value="5">5 years</option>
                <option value="10">10 years</option>
                <option value="15">15 years</option>
                <option value="20">20 years</option>
                <option value="25">25 years</option>
            </select>
        </div>
    )
}

export default Tenure;