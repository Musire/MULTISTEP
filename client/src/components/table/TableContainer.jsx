const TableContainer = ({ children }) => {
    return ( 
        <div className="flex flex-col w-full p-4 space-y-4 bg-alabaster rounded-xl">
            {children}
        </div>
     );
}
 
export default TableContainer;