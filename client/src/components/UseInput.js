import React, { useState } from "react";

function UseInput(initialValue) {
    const [value, setValue] = useState(initialValue);

    function handleChange(e) {
        setValue(e.target.value);
    }

    return [value, handleChange];
}

export default UseInput;