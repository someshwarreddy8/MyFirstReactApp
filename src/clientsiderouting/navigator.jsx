import { Link } from "react-router-dom";
import './routecss.css'
const NavigatorComponent = () => {
    return (
        <div className="navsec">
            <ol>
                <li><Link to='/first'>First component</Link></li>
                <li><Link to='/second'>Second component</Link></li>
                <li><Link to='/third'>Third component</Link></li>
            </ol>
        </div>
    )
}

export default NavigatorComponent;