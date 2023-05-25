import "./style/GeneratorStyle.scss"
import GeneratorInput from "./GeneratorInput";
import GeneratorOutput from "./GeneratorOutput";

function Generator() {
    return (
        <div className="generator">
            <div className="generator__input">
               <GeneratorInput />
            </div>
            <div className="generator__output">
                <GeneratorOutput />
            </div>
        </div>
    )
}

export default Generator;