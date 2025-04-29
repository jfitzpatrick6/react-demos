import { useEffect, useState } from "react";

const BasicEffect = () => {
    useEffect(() => console.log("Loaded"));
    return <div>Hello</div>
}

export default BasicEffect;
