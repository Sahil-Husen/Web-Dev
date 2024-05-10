function Date(props){
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className='dateMain'>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    );
}

export default Date;
