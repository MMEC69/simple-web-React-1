function Food(){
    const food1 = "Apple";
    const food2 = "Orange";

    return (
        <ul>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>Banana</li>
        </ul>
    );


}

export default Food;