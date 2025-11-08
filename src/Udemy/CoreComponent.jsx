import TabButtonComp from "./TabButton";

import './CoreComp.css'
import { useState } from "react";
const CoreComp = () => {

    const [val, setVal] = useState("initial value!!")
    const [selected, setSelected] = useState(false)

    const handleSelect = (data) => {
        setVal(data)
        setSelected(true)
        console.log(val)
    }

    return (
        <>
            <section>
                <menu className="tabbtncontainer">
                    <TabButtonComp isSelected={val === 'TabButton'} onSelect={() => handleSelect('TabButton')}>
                        TabButton
                    </TabButtonComp>
                    <TabButtonComp isSelected={val === 'JSX'} onSelect={() => handleSelect('JSX')}>
                        JSX
                    </TabButtonComp>
                </menu>
                {val}
            </section>

        </>
    )
}

export default CoreComp;