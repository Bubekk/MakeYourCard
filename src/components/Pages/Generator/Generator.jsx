import "./style/GeneratorStyle.scss"
import GeneratorInput from "./GeneratorInput";

function Generator() {
    return (
        <div className="generator">
            <div className="generator__input">
               <GeneratorInput />
            </div>
            <div className="generator__output">
                Hi output
            </div>
        </div>
    )
}

export default Generator;