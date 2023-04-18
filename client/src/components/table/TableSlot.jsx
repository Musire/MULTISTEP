const TableSlot = ({variant, children}) => {
    return ( 
        <div className={`w-full spaced font-semibold ${variant ? 'px-4' : ''}`} >
            {children}
        </div>
     );
}
 
export default TableSlot;